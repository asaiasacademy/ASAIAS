# CRM Card Schema v1

Статус: private table schema v1.

## Rule

The CRM card lives in a private CRM/private table, not in GitHub.

## Student Card Fields

| Field | Required | Notes |
|---|---:|---|
| student_id | yes | stable internal ID |
| name | yes | private unless consented |
| email | yes | private |
| language | yes | preferred learning language |
| timezone | yes | cohort scheduling |
| intake_source | yes | site, referral, Telegram, LinkedIn, other |
| offer | yes | free, cohort, review, scholarship, institutional |
| payment_status | yes | unpaid, paid, refunded, waived, not applicable |
| scholarship_status | yes | none, requested, approved, declined |
| cohort_status | yes | waitlist, enrolled, active, completed, paused |
| course_progress | yes | not started, in progress, completed |
| demo_status | yes | not started, draft, submitted, accepted |
| review_status | yes | not requested, queued, in review, revision, approved, not approved |
| certificate_status | yes | not eligible, pending, issued, declined |
| next_action | yes | next operational step |
| owner | yes | responsible team member |

## Organization Card Fields

| Field | Required | Notes |
|---|---:|---|
| organization_id | yes | stable internal ID |
| organization_name | yes | private or public by consent |
| contact_name | yes | private |
| contact_email | yes | private |
| sector | no | education, business, public sector, research, other |
| need | yes | problem statement |
| lead_source | yes | site, referral, event, LinkedIn, other |
| stage | yes | lead, discovery, proposal, pilot, report, closed |
| proposal_status | yes | none, draft, sent, accepted, declined |
| pilot_status | yes | none, planned, active, completed |
| next_action | yes | next operational step |
| owner | yes | responsible team member |

