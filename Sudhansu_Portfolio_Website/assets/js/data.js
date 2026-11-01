/*
  ============================================================
  PORTFOLIO CONTENT FILE
  Edit this file to change anything shown on the website.
  - Keep the quotes and commas as they are.
  - To add a profile photo, put it in assets/img/ and set
    profile.photo to "assets/img/profile.jpg".
  - Fill in the education entry when ready.
  - After editing, commit on GitHub. The site updates in 1 to 2 minutes.
  ============================================================
*/
window.PORTFOLIO = {
  "profile": {
    "name": "Sudhansu Sekhar Panda",
    "initials": "SSP",
    "role": "Production Support Engineer",
    "location": "Bangalore, India",
    "photo": "",
    "availability": "Open to Production Support, Application Support and Support Lead roles",
    "tagline": "I keep business-critical applications running, and when they break, I get them back fast and make sure it does not happen again.",
    "intro": "11+ years of L2 / Tier 2 support for capital markets trading, banking fraud management, telecom billing and security analytics platforms. Unix, SQL, AWS CloudWatch, Grafana, Autosys, ServiceNow and JIRA are my daily tools.",
    "email": "sudhansu.ne@gmail.com",
    "phone": "+91 90756 52474",
    "resumePdf": "assets/resume/Sudhansu_Sekhar_Panda_Production_Support_Engineer.pdf",
    "resumeDocx": "assets/resume/Sudhansu_Sekhar_Panda_Production_Support_Engineer.docx",
    "links": [
      {
        "label": "LinkedIn",
        "url": "https://www.linkedin.com/in/sudhansu-sekhar-b18805195/"
      },
      {
        "label": "GitHub",
        "url": "https://github.com/sudhansupanda8860"
      }
    ]
  },
  "console": {
    "command": "./prod_health_check.sh --env prod",
    "lines": [
      {
        "text": "check_unix_hosts ............",
        "status": "OK"
      },
      {
        "text": "check_db_connections ........",
        "status": "OK"
      },
      {
        "text": "check_autosys_batch_cycle ...",
        "status": "OK"
      },
      {
        "text": "check_cloudwatch_alarms .....",
        "status": "OK"
      },
      {
        "text": "check_grafana_dashboards ....",
        "status": "OK"
      },
      {
        "text": "check_servicenow_queue ......",
        "status": "OK"
      },
      {
        "text": "check_sla_breaches ..........",
        "status": "OK"
      }
    ],
    "summary": "7 checks passed. 11+ years of production support."
  },
  "workNote": "How I approach production support, with examples from real platforms. Client data and systems are confidential, so each card describes the problem, the approach and the result.",
  "contactLead": "Looking for a dependable L2 production support engineer? Reach me directly.",
  "stats": [
    {
      "value": "11+",
      "label": "years in production and application support"
    },
    {
      "value": "5",
      "label": "companies across trading, banking, billing and security"
    },
    {
      "value": "24x7",
      "label": "shift and on-call support experience"
    },
    {
      "value": "L2",
      "label": "Tier 2 incident, problem and change ownership"
    }
  ],
  "about": [
    "I started my career in 2015 at AurionPro, running live bill runs and 24x7 L2 support for a telecom billing platform used across Vodafone's PAN India circles. Since then I have supported telecom applications at Netcracker, banking fraud management systems at CustomerXPs, the Snypr security analytics platform at Securonix, and today trading applications at Goldman Sachs.",
    "My job is to keep production stable. When something breaks I diagnose it quickly in Unix logs and SQL, keep users and stakeholders informed, and restore service within SLA. After the fix I write the RCA and work through Problem Management so the same issue does not come back.",
    "I also believe good support scales through documentation. I write SOPs, runbooks and knowledge base articles with a shift-left focus, so L1 teams can resolve repeat incidents on their own and L2 can focus on the hard problems."
  ],
  "skills": [
    {
      "group": "Operating Systems",
      "items": [
        "Unix / Linux (multiple flavours)",
        "Windows"
      ]
    },
    {
      "group": "Tools and Access",
      "items": [
        "Unix Shell Commands",
        "Log Analysis",
        "PuTTY",
        "Health Checks"
      ]
    },
    {
      "group": "Database",
      "items": [
        "SQL",
        "Oracle SQL Developer"
      ]
    },
    {
      "group": "Cloud and Monitoring",
      "items": [
        "Amazon Web Services (AWS)",
        "AWS CloudWatch",
        "Grafana",
        "Application Dashboards"
      ]
    },
    {
      "group": "Job Scheduling",
      "items": [
        "Autosys job monitoring"
      ]
    },
    {
      "group": "ITSM and Ticketing",
      "items": [
        "ServiceNow",
        "BMC Remedy",
        "JIRA"
      ]
    },
    {
      "group": "ITIL Practices",
      "items": [
        "Incident Management",
        "Problem Management",
        "Change Management",
        "Service Request Management"
      ]
    },
    {
      "group": "Reporting",
      "items": [
        "KPI Reports",
        "MIS Reports",
        "Incident Trackers",
        "Status Reports"
      ]
    },
    {
      "group": "Domains",
      "items": [
        "Capital Markets Trading",
        "Banking Fraud Management",
        "Telecom Billing",
        "Security Analytics (SIEM)"
      ]
    },
    {
      "group": "Support Models",
      "items": [
        "24x7",
        "16x5",
        "On-call",
        "Shift rotation"
      ]
    }
  ],
  "projects": [
    {
      "title": "Tier 2 support for trading applications",
      "context": "Goldman Sachs, capital markets",
      "problem": "Swap, Credit, NewMarket and Forex trading applications need fast recovery during market hours, with outages handled across shifts and on-call.",
      "solution": "Provide 16x5 Tier 2 support, diagnose issues in Unix and SQL, reproduce user problems and route code defects to engineering with full documentation.",
      "outcome": "Issues resolved within department SLAs and clean hand-offs between shifts.",
      "tags": [
        "Unix",
        "SQL",
        "Incident Management",
        "On-call",
        "SLA"
      ],
      "repo": ""
    },
    {
      "title": "Shift-left knowledge base for L1",
      "context": "Goldman Sachs",
      "problem": "Repeatable incidents were reaching L2 because L1 had no clear steps to follow.",
      "solution": "Wrote SOPs, runbooks and KB articles for the most common incident types so L1 can triage and resolve them independently.",
      "outcome": "L1 resolves repeat incidents on its own and L2 time goes to complex issues.",
      "tags": [
        "SOP",
        "Runbooks",
        "Knowledge Base",
        "Shift-Left"
      ],
      "repo": ""
    },
    {
      "title": "RCA and problem management",
      "context": "Goldman Sachs, Securonix, CustomerXPs",
      "problem": "The same incidents kept coming back after short-term fixes.",
      "solution": "Prepared RCA documents, joined Post Implementation Reviews and drove problem records to permanent fixes with development teams.",
      "outcome": "Fewer recurring incidents and clearer post-incident learning.",
      "tags": [
        "RCA",
        "Problem Management",
        "PIR"
      ],
      "repo": ""
    },
    {
      "title": "P1 and P2 incident handling for a SIEM platform",
      "context": "Securonix Snypr",
      "problem": "Security analytics customers needed round-the-clock support on a cloud platform.",
      "solution": "Delivered 24x7 Tier 2 support, worked directly with customers on P1 and P2 incidents and escalated to engineering with supporting evidence.",
      "outcome": "Customers kept informed until service was restored.",
      "tags": [
        "24x7",
        "Cloud",
        "P1/P2",
        "Escalation"
      ],
      "repo": ""
    },
    {
      "title": "Hotfix validation and release support",
      "context": "CustomerXPs, banking FMS",
      "problem": "Fraud management deployments needed quick, safe fixes after CR and PF rollouts.",
      "solution": "Validated hotfixes in UAT, deployed to production after client approval and handled post-release issues with short turnaround.",
      "outcome": "Improved Customer Satisfaction Index (CSI).",
      "tags": [
        "UAT",
        "Hotfix",
        "Change Request",
        "Deployment"
      ],
      "repo": ""
    },
    {
      "title": "Live bill runs for a national telecom billing platform",
      "context": "AurionPro, EBPP",
      "problem": "Billing cycles for Vodafone PAN India circles had to run on time with no data errors.",
      "solution": "Ran live bill runs and pre- and post-billing activities, resolved issues during each cycle and produced KPI and MIS reports.",
      "outcome": "Billing cycles completed with incidents tracked and reported.",
      "tags": [
        "Billing",
        "Batch",
        "KPI Reports",
        "MIS"
      ],
      "repo": ""
    }
  ],
  "experience": [
    {
      "role": "System Integration Engineer (Production Support)",
      "company": "Goldman Sachs",
      "location": "Bangalore, India",
      "dates": "Jul 2022 - Present",
      "project": "Capital Markets Trading Support",
      "points": [
        "Provide 16x5 Tier 2 production support for trading applications (Swap, Credit, NewMarket, Forex) and the infrastructure behind them, and cover shift and on-call rotations for site and system outages.",
        "Diagnose and fix complex production issues, reproduce user problems, and raise well documented bug tickets for engineering when a code fix is needed.",
        "Write RCA documents and take part in Post Implementation Reviews and Problem Management to stop the same incidents from coming back.",
        "Prioritise and work the support queue within department SLAs, escalating early when an issue needs another team.",
        "Work with Development, QA and Operations teams to improve systems, processes and day-to-day operations.",
        "Write SOPs, runbooks and KB articles with a shift-left focus so the L1 team can triage and resolve repeat incidents on their own."
      ],
      "stack": []
    },
    {
      "role": "Cloud Support Engineer",
      "company": "Securonix India Pvt. Ltd.",
      "location": "Bangalore, India",
      "dates": "Dec 2021 - Jun 2022",
      "project": "Snypr Security Analytics Platform",
      "points": [
        "Delivered 24x7 Tier 2 production support for the Securonix Snypr application and its cloud infrastructure, including shift and on-call cover for outages.",
        "Worked directly with customers on P1 and P2 incidents and kept them updated until service was restored.",
        "Diagnosed and reproduced complex issues, raised bug tickets and escalated to engineering with full supporting detail.",
        "Wrote RCA documents, contributed to Post Implementation Review and Problem Management, and closed tickets within SLA."
      ],
      "stack": []
    },
    {
      "role": "Senior Support Engineer",
      "company": "CustomerXPs Software Pvt. Ltd.",
      "location": "Bangalore, India",
      "dates": "Dec 2019 - Dec 2021",
      "project": "Banking Fraud Management System",
      "points": [
        "Resolved production issues for banking Fraud Management System (FMS) deployments and delivered permanent fixes backed by root cause analysis.",
        "Handled post-release issues after Change Request (CR) and Production Fix (PF) rollouts with quick turnaround, which improved the Customer Satisfaction Index (CSI).",
        "Validated hotfixes in UAT and deployed them to production after client approval.",
        "Ran daily and weekly client calls, prepared weekly and monthly status reports, and fixed recurring issues found through Service Request (SR) RCA."
      ],
      "stack": []
    },
    {
      "role": "Senior Software Engineer",
      "company": "Netcracker Technology",
      "location": "Hyderabad, India",
      "dates": "Feb 2018 - Nov 2019",
      "project": "Telecom Application Support",
      "points": [
        "Provided server-side and application support in a 24x7 environment, working hands-on across multiple Unix flavours.",
        "Ran daily application health checks, monitored system performance, and dispatched and resolved customer tickets within SLA in JIRA."
      ],
      "stack": []
    },
    {
      "role": "Operations Associate",
      "company": "AurionPro Solutions Pvt. Ltd.",
      "location": "Pune, India",
      "dates": "Apr 2015 - Feb 2018",
      "project": "EBPP Telecom Billing",
      "points": [
        "Delivered 24x7 L2 application and production support for the EBPP (Electronic Bill Presentment and Payment) application, covering daily operations, troubleshooting, RFCs and escalations.",
        "Ran live bill runs and pre- and post-billing activities for Vodafone PAN India circles, resolving issues during each cycle.",
        "Owned Critical, Major, Medium and Low priority incident and problem tickets through to resolution within SLA.",
        "Built KPI reports, daily, weekly and monthly delivery reports, incident trackers, application dashboards and MIS documentation."
      ],
      "stack": []
    }
  ],
  "education": [
    {
      "degree": "[Degree], [Branch]",
      "school": "[University / College], [City], India",
      "dates": "[Year of Passing]"
    }
  ],
  "awards": [],
  "languages": []
};
