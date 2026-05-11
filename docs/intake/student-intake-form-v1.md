# Student Intake Form v1

Статус: form model v1.

## Privacy Rule

Private student data is not stored in GitHub. This file defines the form fields only.

## Minimum Fields

| Field | Type | Required | Notes |
|---|---|---:|---|
| name | text | yes | student's preferred name |
| email | email | yes | private CRM field |
| language | select | yes | ru, en, other |
| country_timezone | text | yes | country and timezone |
| role | select/text | yes | student, manager, founder, engineer, educator, researcher, other |
| interest | textarea | yes | why the student is applying |
| preparation_level | select | yes | beginner, intermediate, advanced |
| selected_course | select | yes | Course 01 first |
| communication_privacy_consent | checkbox | yes | consent to communication/privacy rules |

## Optional Fields

- scholarship request;
- cohort preference;
- organization name;
- GitHub profile;
- LinkedIn profile;
- accessibility needs;
- referral source.

## Submission Route

```text
website form -> private inbox/form backend -> CRM/private table -> student ID -> cohort route
```

## Do Not Store In GitHub

- email addresses;
- payment details;
- legal names if not public;
- private notes;
- sensitive personal data;
- student progress with identifiable private data.

