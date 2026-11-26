// The 31 reviewed AI finance tool ideas. Generated from index.html.
export const CATALOG = [
 {
  "id": "margin-leakage",
  "department": "Finance & FP&A",
  "dept_id": "finance",
  "name": "Margin Leakage Finder",
  "summary": "Finds unapproved discounts, prices below list and loss-making sales in monthly sales data, and estimates the profit that can be recovered.",
  "problem": "Unapproved discounts and loss-making sales hide in sales data until the year-end results.",
  "who": "FP&A analyst, sales controller",
  "when": "Monthly, after sales close",
  "input": "Sales export, price list, standard costs",
  "output": "Flagged deals and the profit you can recover",
  "steps": [
   "Upload the month's sales export, price list and standard costs.",
   "Review the flagged invoice lines and the customers leaking the most margin.",
   "Send the draft actions to the sales team."
  ],
  "decides": "The finance manager approves actions before they go to sales.",
  "modules": [
   1,
   5
  ],
  "mockup": "01_margin_leakage_finder.png"
 },
 {
  "id": "commentary-drafter",
  "department": "Finance & FP&A",
  "dept_id": "finance",
  "name": "Month-End Commentary Drafter",
  "summary": "Drafts variance commentary for every line over the materiality threshold and lists questions for line owners where the cause is unknown.",
  "problem": "Writing variance commentary every close takes hours, and causes are chased by email.",
  "who": "FP&A analyst",
  "when": "Monthly, at close",
  "input": "Actuals vs budget export, materiality threshold, business unit notes",
  "output": "Draft commentary per flagged line and questions for line owners",
  "steps": [
   "Upload actuals vs budget.",
   "Review the lines over the threshold and the draft comments.",
   "Edit inline and copy the final commentary."
  ],
  "decides": "The analyst confirms every cause. Unknown causes stay marked, not guessed.",
  "modules": [
   1,
   5
  ],
  "mockup": null
 },
 {
  "id": "scenario-forecaster",
  "department": "Finance & FP&A",
  "dept_id": "finance",
  "name": "Scenario Forecaster",
  "summary": "Lets you move key drivers such as growth, receivable days and FX, and shows the impact on profit, cash and covenants for each scenario.",
  "problem": "Management asks what-if questions that need the model rerun quickly.",
  "who": "FP&A manager, CFO",
  "when": "When management asks a what-if question",
  "input": "Key figures from the three-statement model, scenario assumptions",
  "output": "Profit, cash and covenant impact per scenario, with a summary table",
  "steps": [
   "Enter the base figures.",
   "Move the driver sliders for each scenario.",
   "Compare scenarios and read the summary of what moved."
  ],
  "decides": "FP&A reconciles the results to the full model before sharing.",
  "modules": [
   1,
   5
  ],
  "mockup": null
 },
 {
  "id": "cash-vs-profit",
  "department": "Finance & FP&A",
  "dept_id": "finance",
  "name": "Cash vs Profit Explainer",
  "summary": "Explains in plain language why profit and operating cash moved differently, with a profit-to-cash bridge.",
  "problem": "Business heads ask why profit went up but cash went down.",
  "who": "FP&A analyst, business heads",
  "when": "Monthly or quarterly reporting",
  "input": "Key P&L and balance sheet lines for two periods",
  "output": "Profit-to-cash bridge chart and the top three drivers in plain language",
  "steps": [
   "Enter figures for two periods.",
   "See the bridge from net profit to operating cash.",
   "Share the explanation with business heads."
  ],
  "decides": "Finance checks that every number ties back to the statements.",
  "modules": [
   1,
   5
  ],
  "mockup": null
 },
 {
  "id": "memo-writer",
  "department": "Finance & FP&A",
  "dept_id": "finance",
  "name": "Board / CFO Memo Writer",
  "summary": "Turns analysis into a one-page memo with the decision needed, options, numbers, risks and next steps.",
  "problem": "Good analysis gets lost in long decks.",
  "who": "Finance manager, FP&A",
  "when": "Before a board or CFO decision",
  "input": "Decision needed, options, key numbers, audience",
  "output": "One-page memo in a fixed template",
  "steps": [
   "Fill in the decision, options and key numbers.",
   "Review the draft memo.",
   "Edit, then copy or download it."
  ],
  "decides": "The owner checks every figure and the tone before sending.",
  "modules": [
   1,
   5
  ],
  "mockup": null
 },
 {
  "id": "cfo-sparring",
  "department": "Finance & FP&A",
  "dept_id": "finance",
  "name": "CFO Sparring Partner",
  "summary": "Plays a sceptical CFO who challenges a proposal before the real meeting.",
  "problem": "Proposals get rejected on questions nobody prepared for.",
  "who": "Anyone presenting to the CFO",
  "when": "Before a capital request or proposal review",
  "input": "Draft proposal or capital plan",
  "output": "Tough questions, weak assumptions and missing data, ranked by risk",
  "steps": [
   "Paste the proposal.",
   "Answer the questions one at a time.",
   "Fix the weak points listed at the end."
  ],
  "decides": "You decide which challenges are valid.",
  "modules": [
   1,
   5
  ],
  "mockup": null
 },
 {
  "id": "cash-forecast",
  "department": "Corporate Finance",
  "dept_id": "corporate-finance",
  "name": "13-Week Cash Flow Forecaster",
  "summary": "Builds a weekly cash forecast for the next 13 weeks, shows the weeks that fall below minimum cash, and suggests actions to close the gap.",
  "problem": "Cash forecasts are built by hand, so shortfalls are seen too late to act.",
  "who": "Treasury or finance manager, CFO",
  "when": "Weekly",
  "input": "Bank balances, receivables aging, payables schedule, payroll and tax dates",
  "output": "13-week cash forecast, shortfall weeks and actions to close the gap",
  "steps": [
   "Upload bank balances and the receivables and payables lists.",
   "See which weeks fall below minimum cash.",
   "Choose actions to close the gap: collections, payment timing or a credit line."
  ],
  "decides": "The CFO chooses which actions to take.",
  "modules": [
   2,
   5
  ],
  "mockup": "02_13_week_cash_flow_forecaster.png"
 },
 {
  "id": "funding-decision",
  "department": "Corporate Finance",
  "dept_id": "corporate-finance",
  "name": "Funding Decision Analyst",
  "summary": "Compares a bank loan, shareholder loan and equity for a project, including after-tax cost and the 4 : 1 debt-to-equity check.",
  "problem": "Choosing between a bank loan, shareholder loan and equity is done with incomplete tax and legal input.",
  "who": "Treasury, CFO",
  "when": "Before choosing how to fund a project",
  "input": "Project cash flows, funding terms, current debt and equity",
  "output": "NPV, IRR, payback and after-tax cost per option, with tax and approval flags",
  "steps": [
   "Enter the project cash flows and each funding option.",
   "Compare the options side by side.",
   "Read the flags for transfer pricing and approvals."
  ],
  "decides": "The tax team confirms tax treatment and treasury confirms rates.",
  "modules": [
   2,
   5
  ],
  "mockup": null
 },
 {
  "id": "covenant-monitor",
  "department": "Corporate Finance",
  "dept_id": "corporate-finance",
  "name": "Covenant Monitor",
  "summary": "Tracks each loan covenant against its limit every month and warns before a breach.",
  "problem": "Covenant breaches are spotted late.",
  "who": "Treasury, finance manager",
  "when": "Monthly, after the financials close",
  "input": "Covenant formulas and limits (set once), monthly financials",
  "output": "Headroom and red, amber or green status per covenant, with history",
  "steps": [
   "Set up each covenant once from the loan agreement.",
   "Enter the month's figures.",
   "Act early on any amber or red covenant."
  ],
  "decides": "Treasury checks ratio definitions against the agreements.",
  "modules": [
   2,
   5
  ],
  "mockup": null
 },
 {
  "id": "group-cash",
  "department": "Corporate Finance",
  "dept_id": "corporate-finance",
  "name": "Group Cash Position Summary",
  "summary": "Shows cash across all group entities, flags entities short of cash, and suggests intercompany funding moves.",
  "problem": "Cash sits in some entities while others borrow.",
  "who": "Group treasury",
  "when": "Weekly",
  "input": "Bank balances, committed payments and forecasts per entity",
  "output": "Group cash view, entities short of cash, possible funding moves",
  "steps": [
   "Paste each entity's cash and forecast.",
   "See the group total and the entities short of cash.",
   "Review the suggested funding moves."
  ],
  "decides": "Treasury approves any funding move.",
  "modules": [
   2,
   5
  ],
  "mockup": null
 },
 {
  "id": "sp2dk",
  "department": "Tax",
  "dept_id": "tax",
  "name": "SP2DK Response Prep",
  "summary": "Reconciles each item DJP flags in an SP2DK letter, lists the evidence needed, and drafts a reply for the tax manager to review.",
  "problem": "DJP clarification letters (SP2DK) need fast reconciliation and a clear reply.",
  "who": "Tax manager, tax staff",
  "when": "When an SP2DK letter arrives",
  "input": "SP2DK letter (PDF), general ledger, e-Faktur export, corporate tax return",
  "output": "Reconciliation per flagged item, evidence checklist, draft reply letter",
  "steps": [
   "Upload the letter and the records it refers to.",
   "Check the difference and explanation for each flagged item.",
   "Collect missing evidence and edit the draft reply."
  ],
  "decides": "The tax manager or consultant approves the reply before anything is sent to DJP.",
  "modules": [
   3
  ],
  "mockup": "03_sp2dk_response_prep.png"
 },
 {
  "id": "tax-regulation",
  "department": "Tax",
  "dept_id": "tax",
  "name": "Tax Regulation Assistant",
  "summary": "Answers tax questions only from a loaded set of regulations and shows the article it used.",
  "problem": "Rules change often and staff answer from memory.",
  "who": "Tax staff, finance team",
  "when": "Whenever a tax question comes up",
  "input": "A question, plus the regulation texts loaded once",
  "output": "Answer citing the regulation and article, or “not covered”",
  "steps": [
   "Load the regulations your team uses.",
   "Ask a question in plain language.",
   "Check the cited article."
  ],
  "decides": "Tax staff verify each citation.",
  "modules": [
   3
  ],
  "mockup": null
 },
 {
  "id": "fiscal-correction",
  "department": "Tax",
  "dept_id": "tax",
  "name": "Fiscal Correction Finder",
  "summary": "Scans the expense ledger for items that often need fiscal correction in the annual corporate tax return.",
  "problem": "Fiscal corrections for the annual corporate tax return are found late.",
  "who": "Tax staff, accountants",
  "when": "Before preparing the annual tax return",
  "input": "Trial balance and detailed expense ledger",
  "output": "Likely positive and negative corrections, with the reason and evidence needed",
  "steps": [
   "Upload the expense ledger.",
   "Review the flagged accounts and reasons.",
   "Collect evidence or book the correction."
  ],
  "decides": "The tax team decides each correction.",
  "modules": [
   3
  ],
  "mockup": null
 },
 {
  "id": "vat-checker",
  "department": "Tax",
  "dept_id": "tax",
  "name": "VAT Treatment Checker",
  "summary": "Works out the VAT base, rate and invoice code for a transaction under the 12% rules.",
  "problem": "Staff are unsure of the VAT base and invoice code after the 12% change.",
  "who": "Tax staff, billing team",
  "when": "Before invoicing an unusual transaction",
  "input": "Transaction description and the parties",
  "output": "VAT base, rate, invoice code and the regulation cited",
  "steps": [
   "Answer the guided questions.",
   "See the VAT base, rate and code.",
   "Read the explanation."
  ],
  "decides": "Tax staff confirm before invoicing.",
  "modules": [
   3
  ],
  "mockup": null
 },
 {
  "id": "withholding-tax",
  "department": "Tax",
  "dept_id": "tax",
  "name": "Withholding Tax Navigator",
  "summary": "Tells accounts payable which PPh article and rate apply to a payment and which documents are needed.",
  "problem": "Accounts payable is unsure which PPh article and rate applies to a payment.",
  "who": "Accounts payable, tax staff",
  "when": "Before paying a vendor",
  "input": "Payment type, vendor status and residency, contract summary",
  "output": "PPh article, rate and documents needed",
  "steps": [
   "Answer questions about the payment and vendor.",
   "See the article, rate and documents.",
   "Send unusual cases to the tax team."
  ],
  "decides": "Tax staff confirm unusual cases.",
  "modules": [
   3
  ],
  "mockup": null
 },
 {
  "id": "tp-draft",
  "department": "Tax",
  "dept_id": "tax",
  "name": "Transfer Pricing First Draft",
  "summary": "Drafts the functional analysis for transfer pricing documentation and checks the documentation thresholds.",
  "problem": "Transfer pricing documentation under PMK 172/2023 takes weeks of drafting.",
  "who": "Tax manager, TP specialist",
  "when": "During annual TP documentation",
  "input": "Related-party transactions, group structure, functions and risks per entity",
  "output": "Draft functional analysis, transaction characterisation, threshold check",
  "steps": [
   "Fill in the functions, assets and risks checklist.",
   "Review the draft analysis.",
   "Hand over to the TP specialist for benchmarking."
  ],
  "decides": "A TP specialist reviews. Benchmarking stays with specialists.",
  "modules": [
   3
  ],
  "mockup": null
 },
 {
  "id": "global-min-tax",
  "department": "Tax",
  "dept_id": "tax",
  "name": "Global Minimum Tax Screener",
  "summary": "Checks whether a group is likely in scope of the global minimum tax and lists the data to collect.",
  "problem": "Large groups are unsure whether PMK 136/2024 applies and what data they need.",
  "who": "Group tax",
  "when": "Annual planning",
  "input": "Consolidated revenue, profit and taxes paid per jurisdiction",
  "output": "In or out of scope, effective tax rate per jurisdiction, data to collect",
  "steps": [
   "Enter group revenue and figures per jurisdiction.",
   "See the EUR 750m threshold check and effective tax rates.",
   "Collect the listed data."
  ],
  "decides": "Group tax confirms scope with advisors.",
  "modules": [
   3
  ],
  "mockup": null
 },
 {
  "id": "contract-risk",
  "department": "Legal",
  "dept_id": "legal",
  "name": "Pre-Signing Contract Risk Check",
  "summary": "Checks a contract's financial, tax and data clauses before signing, rates each one, estimates the cost of bad clauses, and suggests positions to negotiate.",
  "problem": "Contracts are signed before finance sees the financial, tax and data clauses.",
  "who": "Finance manager, legal counsel",
  "when": "Before signing a contract",
  "input": "Contract draft (PDF or Word)",
  "output": "Risk rating per clause, cost of bad clauses, positions to negotiate",
  "steps": [
   "Upload the contract draft.",
   "Review the high and medium risk clauses on payment, penalties, tax and data.",
   "Use the suggested positions in the negotiation."
  ],
  "decides": "Legal counsel and the CFO decide what to accept.",
  "modules": [
   6
  ],
  "mockup": "04_pre_signing_contract_risk_check.png"
 },
 {
  "id": "ic-agreement",
  "department": "Legal",
  "dept_id": "legal",
  "name": "Intercompany Agreement Checker",
  "summary": "Checks intercompany agreements for the terms auditors and DJP ask for, and compares them with how the deal is booked.",
  "problem": "Intercompany agreements miss terms that auditors and DJP ask for.",
  "who": "Legal counsel, tax and finance",
  "when": "Before signing or renewing an intercompany agreement",
  "input": "Agreement text and how the transactions are booked",
  "output": "Missing or weak terms and mismatches with the books",
  "steps": [
   "Paste the agreement.",
   "Review the pass, missing and unclear items.",
   "Fix the gaps with legal."
  ],
  "decides": "Legal counsel reviews before any change.",
  "modules": [
   6
  ],
  "mockup": null
 },
 {
  "id": "approval-mapper",
  "department": "Legal",
  "dept_id": "legal",
  "name": "Corporate Approval Mapper",
  "summary": "Shows which approvals a transaction needs, in what order, and the documents for each step.",
  "problem": "Deals stall because approvals were not planned.",
  "who": "Corporate secretary, finance",
  "when": "When planning a transaction",
  "input": "Transaction type and amount, the company's approval matrix",
  "output": "Approval steps in order (GMS, directors, commissioners) and documents per step",
  "steps": [
   "Set up the approval matrix once.",
   "Pick the transaction type and amount.",
   "Follow the approval steps."
  ],
  "decides": "The corporate secretary or legal confirms.",
  "modules": [
   6
  ],
  "mockup": null
 },
 {
  "id": "contract-terms",
  "department": "Legal",
  "dept_id": "legal",
  "name": "Contract Financial Terms Extractor",
  "summary": "Pulls payment terms, penalties, FX clauses and renewal dates from contracts into one table.",
  "problem": "Payment terms, penalties and renewal dates are buried in contracts.",
  "who": "Finance, legal, procurement",
  "when": "When reviewing contracts or upcoming renewals",
  "input": "Contract texts, one at a time",
  "output": "One table of counterparties, payment terms, penalties, FX clauses and dates",
  "steps": [
   "Paste a contract.",
   "Check the extracted row.",
   "Download the full table as CSV."
  ],
  "decides": "Spot-check the extracted terms against the contracts.",
  "modules": [
   6
  ],
  "mockup": null
 },
 {
  "id": "journal-anomaly",
  "department": "Accounting",
  "dept_id": "accounting",
  "name": "Journal Entry Anomaly Detector",
  "summary": "Scans the month's journal entries before close and ranks unusual ones: duplicates, round amounts, weekend postings, entries just under approval limits and cut-off issues.",
  "problem": "Wrong postings, duplicates and cut-off errors are found by auditors or DJP, not by the team.",
  "who": "Chief accountant, controller",
  "when": "Monthly, before closing the books",
  "input": "The month's journal entries from the accounting system",
  "output": "Ranked list of unusual entries, with the reason each was flagged",
  "steps": [
   "Export the month's journal entries and upload them.",
   "Go through the ranked list, starting with the highest-risk entries.",
   "Correct or document each entry before close."
  ],
  "decides": "The controller decides which entries to correct.",
  "modules": [
   1,
   6
  ],
  "mockup": "05_journal_entry_anomaly_detector.png"
 },
 {
  "id": "ic-reconciliation",
  "department": "Accounting",
  "dept_id": "accounting",
  "name": "Intercompany Reconciliation Checker",
  "summary": "Matches intercompany balances between entities and groups the differences by cause.",
  "problem": "Intercompany balances don't match at month-end, delaying consolidation.",
  "who": "Group accountants",
  "when": "Monthly, before consolidation",
  "input": "Intercompany ledgers from each entity",
  "output": "Matched and unmatched items, differences by cause, draft follow-up emails",
  "steps": [
   "Upload each entity's ledger.",
   "Review the unmatched items by cause.",
   "Send the follow-up emails."
  ],
  "decides": "Accountants confirm each adjustment.",
  "modules": [
   1,
   6
  ],
  "mockup": null
 },
 {
  "id": "elimination-drafter",
  "department": "Accounting",
  "dept_id": "accounting",
  "name": "Elimination Entry Drafter",
  "summary": "Generates consolidation elimination journals from reconciled intercompany balances.",
  "problem": "Consolidation eliminations are prepared by hand each period.",
  "who": "Consolidation team, controller",
  "when": "Each consolidation period",
  "input": "Reconciled intercompany balances, ownership percentages",
  "output": "Proposed elimination journals with explanations, as CSV",
  "steps": [
   "Enter the balances and ownership.",
   "Review each proposed journal.",
   "Download it for the ERP."
  ],
  "decides": "The controller approves journals before posting.",
  "modules": [
   1,
   6
  ],
  "mockup": null
 },
 {
  "id": "treatment-explainer",
  "department": "Accounting",
  "dept_id": "accounting",
  "name": "Accounting Treatment Explainer",
  "summary": "Explains how to book a shareholder loan, equity injection or management fee under PSAK, with example journals.",
  "problem": "Teams disagree on how to book a shareholder loan, equity injection or management fee.",
  "who": "Accountants, controller",
  "when": "When a new or unusual transaction comes up",
  "input": "Transaction type and terms",
  "output": "Treatment at entity and group level, example journals, disclosure points",
  "steps": [
   "Pick the transaction type.",
   "Enter the terms.",
   "Read the journals and the PSAK reference."
  ],
  "decides": "The controller or auditor confirms.",
  "modules": [
   1,
   6
  ],
  "mockup": null
 },
 {
  "id": "deal-check",
  "department": "Deals",
  "dept_id": "deals",
  "name": "Deal Check Assistant",
  "summary": "Runs an intercompany deal through accounting, tax, transfer pricing and legal checks, including the 4 : 1 debt-to-equity limit, and produces a one-page report for the CFO.",
  "problem": "Intercompany deals reach the CFO before accounting, tax and legal issues are checked.",
  "who": "CFO, tax and legal team",
  "when": "Before approving an intercompany deal",
  "input": "Deal terms, entity balance sheets, intercompany agreements",
  "output": "Pass or fail on each check and a one-page report for the CFO",
  "steps": [
   "Enter the deal terms and upload the entities' balance sheets.",
   "See the result of each check, including the 4 : 1 debt-to-equity limit.",
   "Share the one-page report with the CFO."
  ],
  "decides": "The CFO approves or changes the deal.",
  "modules": [
   2,
   6
  ],
  "mockup": "06_deal_check_assistant.png"
 },
 {
  "id": "dd-red-flags",
  "department": "Deals",
  "dept_id": "deals",
  "name": "Due Diligence Red Flag Scanner",
  "summary": "Scans a target company's financials for common red flags and drafts questions for the due diligence team.",
  "problem": "Red flags in a target's numbers surface late in due diligence, after time and fees are spent.",
  "who": "Corporate development, deal team",
  "when": "Early in an acquisition or investment",
  "input": "Target's financial statements for three years, receivables aging, related-party balances",
  "output": "Red flags with the figures behind them and a list of due diligence questions",
  "steps": [
   "Upload the target's financials.",
   "Review flags such as customer concentration, old receivables and related-party balances.",
   "Send the question list to the target or advisors."
  ],
  "decides": "The deal lead and advisors judge each flag.",
  "modules": [
   2,
   6
  ],
  "mockup": null
 },
 {
  "id": "valuation-check",
  "department": "Deals",
  "dept_id": "deals",
  "name": "Valuation Cross-Check",
  "summary": "Compares a DCF value with the multiples you enter and shows which assumptions drive the value most.",
  "problem": "Valuations rest on a few assumptions that nobody stress-tests before negotiation.",
  "who": "CFO, corporate development",
  "when": "Before making or accepting an offer",
  "input": "Target forecast, discount rate assumptions, comparable multiples you enter",
  "output": "Value ranges by method, a football-field chart, the assumptions that move value most",
  "steps": [
   "Enter the forecast and assumptions.",
   "Add comparable multiples.",
   "Compare the ranges and test the key assumptions."
  ],
  "decides": "The CFO and advisors set the price range.",
  "modules": [
   2,
   6
  ],
  "mockup": null
 },
 {
  "id": "data-masking",
  "department": "AI Governance",
  "dept_id": "ai-governance",
  "name": "Data Masking Gate for AI",
  "summary": "Masks names, NIK, NPWP and bank accounts in the browser before data is sent to Claude, then restores the real values in the answer on screen only.",
  "problem": "Staff paste salaries, NIK and NPWP numbers into AI tools without masking them.",
  "who": "Anyone in finance using AI",
  "when": "Every time data goes into an AI tool",
  "input": "Any table or text with names, NIK, NPWP or bank accounts",
  "output": "A masked version for Claude, with real values restored on your screen only",
  "steps": [
   "Paste or upload the data.",
   "Check what was masked before it is sent.",
   "Read Claude's answer with the real values restored on your screen."
  ],
  "decides": "You check the masked data before anything is sent.",
  "modules": [
   4
  ],
  "mockup": "07_data_masking_gate.png"
 },
 {
  "id": "ai-review-log",
  "department": "AI Governance",
  "dept_id": "ai-governance",
  "name": "AI Output Review Log",
  "summary": "Records how each AI output was checked and what was fixed, with a monthly summary of patterns.",
  "problem": "Teams can't show how AI output was checked.",
  "who": "Finance teams using AI, team lead",
  "when": "Every time an AI output is used",
  "input": "The AI output used and what the reviewer changed",
  "output": "Log of errors and fixes, counts by error type, monthly summary",
  "steps": [
   "Log the output and what was wrong.",
   "See error counts over time.",
   "Read the monthly summary of patterns."
  ],
  "decides": "The team lead reviews the log monthly.",
  "modules": [
   4
  ],
  "mockup": null
 },
 {
  "id": "pdp-inventory",
  "department": "AI Governance",
  "dept_id": "ai-governance",
  "name": "Personal Data Inventory",
  "summary": "Lists which finance files hold personal data, what kind and why, as a starting point for UU PDP records.",
  "problem": "Finance keeps payroll, vendor and customer files with personal data, but nobody has a list of what is kept where.",
  "who": "Finance manager, data protection officer",
  "when": "Quarterly, or before an audit",
  "input": "Column headers and a few masked rows from each finance file",
  "output": "Inventory of personal data by file, with type, purpose and retention questions",
  "steps": [
   "Paste each file's headers and a few masked rows.",
   "Review the detected data types, such as name, NIK, NPWP and bank account.",
   "Fill in purpose and retention, then export the list."
  ],
  "decides": "The data protection officer confirms the inventory.",
  "modules": [
   4
  ],
  "mockup": null
 }
];
