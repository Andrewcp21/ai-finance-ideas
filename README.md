# AI Finance Tools Ideas

A one-page gallery of seven AI tool ideas for finance teams (Finance & FP&A, Corporate Finance, Tax, Legal, Accounting, Deals and Data Privacy). It was made for practitioner review for the UI × RevoU AI-Enabled Strategic Finance program.

Each card shows who uses the tool, when, its input and output, how it works, a mockup screen, and who makes the final decision.

The mockups use sample data and fictional companies.

## Files

- `index.html`: the page, a single self-contained file
- `img/`: the mockup screens and the UI × RevoU logo

Open `index.html` in a browser, or serve the folder with any static host (for example GitHub Pages). Link to one idea with a hash, e.g. `index.html#sp2dk`.

## AI Finance Tool Finder (`/finder`)

A Bahasa Indonesia finder in the style of tools.revou.co. Visitors type their role, answer four quick questions, and get 3–5 tailored tool recommendations. The recommendations come mostly from the 31 ideas, plus at most one new idea.

- `finder/index.html`: the page
- `api/analyze.js`: a Vercel serverless function that calls the Claude API. It forces structured output and validates it, so recommendations stick to the catalogue and include at most one new idea.
- `api/_catalog.js`: the 31 ideas the AI picks from, generated from `index.html`

Set these environment variables in Vercel:

- `ANTHROPIC_API_KEY`: required
- `ANTHROPIC_MODEL`: optional, defaults to `claude-sonnet-5-5`

To show a WhatsApp button on the results page, set `WA_NUMBER` in `finder/index.html`.
