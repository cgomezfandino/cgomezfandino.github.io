let meta = #{
    name: "site-voice-qa",
    description: "Audit personal-site copy for AI-slop, clarity, and ES/EN parity",
    when_to_use: "After editing js/content.js or before sharing the personal site as a portfolio card",
    phases: [
        #{ title: "Extract", detail: "Read content.js and summarize copy blocks" },
        #{ title: "Audit", detail: "Parallel: slop, clarity, ES/EN parity" },
        #{ title: "Synthesize", detail: "Prioritized report P0/P1/P2" },
    ],
};

let extract_schema = #{
    "type": "object",
    "required": ["blocks", "notes"],
    "properties": #{
        "blocks": #{
            "type": "array",
            "maxItems": 20,
            "items": #{
                "type": "object",
                "required": ["id", "es_excerpt", "en_excerpt"],
                "properties": #{
                    "id": #{ "type": "string" },
                    "es_excerpt": #{ "type": "string" },
                    "en_excerpt": #{ "type": "string" },
                },
            },
        },
        "notes": #{ "type": "string" },
    },
};

let findings_schema = #{
    "type": "object",
    "required": ["findings"],
    "properties": #{
        "findings": #{
            "type": "array",
            "maxItems": 10,
            "items": #{
                "type": "object",
                "required": ["severity", "block", "issue", "suggestion"],
                "properties": #{
                    "severity": #{ "type": "string" },
                    "block": #{ "type": "string" },
                    "issue": #{ "type": "string" },
                    "suggestion": #{ "type": "string" },
                },
            },
        },
    },
};

let report_schema = #{
    "type": "object",
    "required": ["summary", "p0_count", "markdown"],
    "properties": #{
        "summary": #{ "type": "string" },
        "p0_count": #{ "type": "integer" },
        "markdown": #{ "type": "string" },
    },
};

let focus = "all";
if args != () && args.focus != () {
    focus = args.focus;
}

let voice_rules = "Voice guide (must enforce):\n";
voice_rules += "- First person, builder of end-to-end AI products; portfolio frame not founder.\n";
voice_rules += "- Concrete before pretty; short sentences; judgment over metaphors.\n";
voice_rules += "- Avoid: lienzo, pagina en blanco, orden en el caos, si te resuena, Founder, startup pitch, marketing adjectives.\n";
voice_rules += "- ES/EN parity: same message, natural in both languages.\n";
voice_rules += "- Density: hero <=40 words, passion <=45, project desc <=80, story para <=70.\n";
voice_rules += "Source of truth: js/content.js. Also check index.html meta if relevant.\n";

phase("Extract");
let extract_prompt = "You are extracting bilingual site copy for a voice QA. ";
extract_prompt += "Use read_file and grep on js/content.js (and index.html meta). Do not invent text. ";
extract_prompt += "Focus scope: " + focus + " (all | hero | story | projects | passions). ";
extract_prompt += "Return up to 20 blocks with id (e.g. hero.tagline, story.p1, project.northa), es_excerpt and en_excerpt (full or long quote). ";
extract_prompt += "notes: any missing pairs or structural issues. Empty blocks only if the file truly has no matching copy after reading.";
let ex = agent(extract_prompt, #{
    label: "extract-copy",
    capability_mode: "read-only",
    output_schema: extract_schema,
});

if ex == () || !ex.success || ex.output == () {
    complete(#{ summary: "Extract failed; no audit run.", p0_count: 0, path: "" });
}

let blocks_json = "[]";
if ex.output.blocks != () {
    blocks_json = json_encode(ex.output.blocks);
}
log("Extracted blocks for focus=" + focus);

phase("Audit");
let jobs = [];

let p_slop = "Adversarial AI-slop audit of personal-site copy. ";
p_slop += voice_rules;
p_slop += "Use read_file on js/content.js to verify quotes. Focus: " + focus + ". ";
p_slop += "Blocks JSON: " + blocks_json + " ";
p_slop += "severity only P0 (must fix before share) or P1 (should fix) or P2 (nit). ";
p_slop += "Flag empty metaphors, marketing fluff, founder language, generic AI prose. ";
p_slop += "Max 10 findings. Empty findings only after reading the actual files.";
jobs.push(#{
    prompt: p_slop,
    label: "audit:ai-slop",
    capability_mode: "read-only",
    output_schema: findings_schema,
});

let p_clear = "Clarity audit for a portfolio personal site meant to be shared as a calling card. ";
p_clear += voice_rules;
p_clear += "Use read_file on js/content.js. Focus: " + focus + ". ";
p_clear += "Blocks JSON: " + blocks_json + " ";
p_clear += "Ask: in 30 seconds does a stranger know who, what they build, how to contact? ";
p_clear += "Flag vague sections, redundant passions, walls of text over density limits. ";
p_clear += "severity P0/P1/P2. Max 10 findings. Empty only after reading files.";
jobs.push(#{
    prompt: p_clear,
    label: "audit:clarity",
    capability_mode: "read-only",
    output_schema: findings_schema,
});

let p_par = "ES/EN parity audit. ";
p_par += voice_rules;
p_par += "Use read_file on js/content.js. Focus: " + focus + ". ";
p_par += "Blocks JSON: " + blocks_json + " ";
p_par += "Flag calques, missing translations, tone mismatch between languages, length skew. ";
p_par += "severity P0/P1/P2. Max 10 findings. Empty only after reading both languages.";
jobs.push(#{
    prompt: p_par,
    label: "audit:parity",
    capability_mode: "read-only",
    output_schema: findings_schema,
});

let results = parallel(jobs);

let all_findings = [];
let i = 0;
for r in results {
    if r != () && r.success && r.output != () && r.output.findings != () {
        for f in r.output.findings {
            all_findings.push(f);
        }
    } else {
        log("Audit panel slot failed or empty at index " + i.to_string());
    }
    i += 1;
}

phase("Synthesize");
let findings_json = json_encode(all_findings);
let syn_prompt = "Synthesize a prioritized voice QA report for Tato's personal site. ";
syn_prompt += voice_rules;
syn_prompt += "Focus: " + focus + ". ";
syn_prompt += "Raw findings JSON: " + findings_json + " ";
syn_prompt += "Deduplicate, assign final priority P0/P1/P2, write markdown with sections ## P0 ## P1 ## P2 and a short ## Verdict. ";
syn_prompt += "p0_count = number of P0 items. summary = one sentence for the user. ";
syn_prompt += "If no findings, say the copy is share-ready under the voice guide.";
let syn = agent(syn_prompt, #{
    label: "synthesize-report",
    capability_mode: "read-only",
    output_schema: report_schema,
});

let md = "# Voice QA\n\nNo report body.\n";
let summary = "Synthesis incomplete.";
let p0 = -1;
if syn != () && syn.success && syn.output != () {
    if syn.output.markdown != () && type_of(syn.output.markdown) == "string" {
        md = syn.output.markdown;
    }
    if syn.output.summary != () && type_of(syn.output.summary) == "string" {
        summary = syn.output.summary;
    }
    if syn.output.p0_count != () {
        p0 = syn.output.p0_count;
    }
} else {
    md = "# Voice QA\n\nSynthesis failed. Raw finding count: " + all_findings.len().to_string() + "\n";
    summary = "Synthesis failed; partial report written.";
}

let path2 = write_scratch_file("voice-qa-report.md", md);
log("p0_count=" + p0.to_string());
complete(#{
    summary: summary,
    p0_count: p0,
    path: path2,
});
