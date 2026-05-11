# build.spec

project:
  name: "Академия стратегического управления искусственным интеллектом и автономных систем"
  english_name: "Academy of Strategic Management of Artificial Intelligence and Autonomous Systems"
  type: "academy"
  language: "ru"
  master_prompt: "MASTER_PROMPT.md"
  universal_master_prompt: "UNIVERSAL_MASTER_PROMPT.md"
  current_phase: "site_construction_after_academic_core"
  current_output: "active_academic_site_interface"
  site_generation_status: "active"
  canonical_documents:
    - "build.spec"
    - "MASTER_PROMPT.md"
    - "UNIVERSAL_MASTER_PROMPT.md"
  support_directory: null

purpose:
  short: "Академическая, образовательная, просветительская, исследовательская и методологическая среда для стратегического управления ИИ и автономными системами."
  core_problem: "Развитие ИИ и автономных систем опережает образовательные, управленческие и институциональные рамки их осмысленного применения."
  core_value: "Дать структуру для понимания, проектирования, проверки, оценки рисков и стратегического управления ИИ и автономными системами."
  immediate_goal: "Поддерживать актуальный академический мастер-промпт, универсальный мастер-промпт и активный сайт-приложение без потери академического ядра."

completeness_protocol:
  all_discussed_requirements_are_binding: true
  update_master_prompt_with_new_requirements: true
  update_universal_master_prompt_with_transferable_requirements: true
  remove_outdated_prompt_rules: true
  all_user_remarks_are_binding: true
  preserve_every_point_and_subpoint: true
  preserve_every_direction: true
  do_not_drop_agreed_context: true
  do_not_replace_specifics_with_generic_language: true
  require_pre_output_checklist: true
  require_gap_report_if_anything_is_missing: true
  rule: "Все, что согласовано в рабочем диалоге по проекту, считается обязательным входным требованием. Новые предложения добавляются в MASTER_PROMPT.md; переносимые правила добавляются в UNIVERSAL_MASTER_PROMPT.md; устаревшие и конфликтующие правила удаляются или переписываются. Нельзя пропускать пункты, подпункты, направления, ограничения, названия, смысловые оси, арт-стиль или правила безопасности. Если какой-то пункт невозможно применить к конкретному артефакту, его нужно явно отметить как неприменимый, а не молча удалять."

source_material_policy:
  must_use_existing_academy_materials_when_present: true
  academy_folder_expected: true
  academy_folder_name_ru: "Академия"
  if_academy_folder_missing: "Не выдумывать подтвержденную структуру как факт. Зафиксировать требование пользователя и строить промпт так, чтобы он обязательно принимал реальные материалы факультетов, кафедр, курсов, методики, библиотеки и книг при их появлении."
  required_academic_source_types:
    - "факультеты"
    - "кафедры"
    - "курсы"
    - "методика"
    - "библиотека"
    - "книги"

academic_structure:
  required_model:
    - "академия"
    - "факультеты"
    - "кафедры"
    - "курсы"
    - "методика"
    - "библиотека"
    - "книги"
  hierarchy_rule: "Академия должна раскрываться через реальную образовательную архитектуру: факультеты задают крупные области, кафедры отвечают за дисциплинарные и методические направления, курсы переводят знания в обучающие маршруты, методика задает способ обучения и проверки, библиотека хранит материалы, книги формируют издательский и смысловой корпус."
  prompt_priority: "Академическая и образовательная направленность остаются ядром; сайт, приложение, визуальная подача и универсальный промпт развиваются как активные слои, которые визуализируют и переносят ядро, а не заменяют его."

academic_generator_modes:
  - "ACADEMY_CORE"
  - "FACULTY_MAP"
  - "DEPARTMENT_MAP"
  - "COURSE_SYSTEM"
  - "METHODOLOGY_ENGINE"
  - "LIBRARY_SYSTEM"
  - "BOOK_SERIES"
  - "ACADEMIC_AUDIT"

quality_bar:
  must_show_academy_as_system: true
  must_include_faculties_departments_courses_methodology_library_books: true
  must_link_courses_to_departments: true
  must_link_departments_to_faculties: true
  must_link_library_and_books_to_learning: true
  must_separate_facts_from_hypotheses: true
  must_not_be_landing_page: true
  must_not_be_advertising_copy: true

language_policy:
  default_language: "ru"
  current_working_language: "ru"
  current_rule: "Пока все материалы, надписи, интерфейсные элементы, заголовки, кнопки, подписи, тексты слайдов, тексты сайта и публичные формулировки создаются на русском языке, если пользователь явно не запросил другой язык."
  strict_visible_text_language_match: true
  no_unrequested_language_mixing: true
  preserve_project_name_in_source_language: true
  translate_all_visible_labels_when_language_selected: true
  multilingual_ready: true
  supported_languages:
    - code: "ru"
      name_ru: "русский"
      name_native: "Русский"
      group: "UN"
    - code: "en"
      name_ru: "английский"
      name_native: "English"
      group: "UN"
    - code: "es"
      name_ru: "испанский"
      name_native: "Español"
      group: "UN"
    - code: "ar"
      name_ru: "арабский"
      name_native: "العربية"
      group: "UN"
    - code: "zh"
      name_ru: "китайский"
      name_native: "中文"
      group: "UN"
    - code: "fr"
      name_ru: "французский"
      name_native: "Français"
      group: "UN"
    - code: "ja"
      name_ru: "японский"
      name_native: "日本語"
      group: "additional"
    - code: "de"
      name_ru: "немецкий"
      name_native: "Deutsch"
      group: "additional"
    - code: "tr"
      name_ru: "турецкий"
      name_native: "Türkçe"
      group: "additional"
    - code: "fa"
      name_ru: "персидский"
      name_native: "فارسی"
      group: "additional"
  rule: "Если выбран язык артефакта, все видимые надписи должны быть именно на этом языке. Нельзя оставлять кнопки, заголовки, подписи, меню, интерфейсные labels или слайдовые элементы на другом языке, кроме случаев, когда это собственное имя, общепринятый технический термин или пользователь явно просит смешанный формат."

entity_flags:
  is_academy: true
  is_education_project: true
  is_enlightenment_project: true
  is_research_platform: true
  is_methodology: true
  is_public_initiative: true
  is_brand: true
  is_ai_project: true
  is_autonomous_systems_project: true
  is_nko: unknown
  is_foundation: false
  is_product: false
  is_digital_platform: unknown
  is_multi_agent_project: unknown
  is_event_or_forum: unknown
  is_course_or_program: unknown

institutional_status:
  has_registered_legal_entity: unknown
  has_confirmed_partners: false
  has_official_support: false
  has_government_status: false
  has_accreditation: false
  has_existing_website: unknown
  has_existing_team: unknown
  has_existing_product: false
  has_pilot: unknown
  has_public_results: unknown
  has_research_base: unknown
  has_financial_model: unknown

allowed_claims:
  may_call_project_academy: true
  may_call_project_platform: true
  may_call_project_research_initiative: true
  may_call_project_international: unknown
  may_claim_partnerships: false
  may_claim_accreditation: false
  may_claim_official_status: false
  may_claim_guaranteed_results: false
  may_claim_market_leadership: false
  may_claim_unique_status: false

forbidden_claims:
  no_unconfirmed_partnerships: true
  no_unconfirmed_government_links: true
  no_fake_accreditation: true
  no_guaranteed_outcomes: true
  no_medical_legal_financial_promises: true
  no_aggressive_political_framing: true
  no_empty_advertising_superlatives: true

core_axes:
  - "образование"
  - "просвещение"
  - "исследование"
  - "стратегическое управление"
  - "методология"
  - "институциональная совместимость"
  - "ответственность"

topic_layers:
  - "AI governance"
  - "автономные системы"
  - "multi-agent systems"
  - "human-in-the-loop"
  - "human responsibility"
  - "trust, safety, verification"
  - "риск-карты"
  - "сценарное мышление"
  - "образовательные траектории"
  - "исследовательские лаборатории"
  - "публичные лекции"
  - "методические документы"
  - "проектные практикумы"
  - "институциональное внедрение"
  - "распределённая и неприватизируемая AI-инфраструктура"
  - "threshold-governance"
  - "энергетика и дата-центры для ИИ"
  - "юрисдикционный дизайн AI-инфраструктуры"
  - "supply-chain resilience и чиповые риски"

audiences:
  primary:
    - "преподаватели"
    - "исследователи"
    - "управленцы"
    - "разработчики AI-проектов"
    - "образовательные организации"
  secondary:
    - "студенты"
    - "общественные структуры"
    - "технологические сообщества"
    - "партнерские институции"
    - "экспертные площадки"

functional_modules:
  - "образовательные программы"
  - "исследовательские направления"
  - "методологии управления ИИ"
  - "карты рисков и доверия"
  - "публичные лекции и материалы"
  - "проектные лаборатории"
  - "AI governance"
  - "human-in-the-loop"
  - "multi-agent systems"
  - "risk and trust frameworks"
  - "исследовательские блоки"
  - "неприватизируемая AI-инфраструктура"

research_blocks:
  required_when_research_material_is_provided: true
  current_blocks:
    - title: "Распределённая, устойчивая и неприватизируемая инфраструктура ИИ: право, энергия, вычисления и threshold-governance"
      source_document: 'C:\Users\Admin\Downloads\Проект распределённой, устойчивой и неприватизируемой глобальной инфраструктуры для развития ИИ.docx'
      status: "исследовательская гипотеза / сценарный материал / требует верификации перед публичным использованием"
      not_to_claim:
        - "официальная стратегия"
        - "государственная программа"
        - "юридически утвержденный план"
        - "подтвержденное партнерство"
        - "обещание реализации"
      linked_faculties:
        - "Факультет стратегического управления ИИ"
        - "Факультет доверия, безопасности и верификации"
        - "Факультет AI governance и общественных последствий"
        - "Факультет методологии, сценариев и институционального проектирования"
        - "Факультет автономных систем и агентных архитектур"
        - "Факультет образовательных технологий и просвещения"
      course_modules:
        - "Неприватизируемая инфраструктура ИИ: архитектура и governance"
        - "Threshold-governance и распределённое доверие в критических AI-системах"
        - "Энергетика, дата-центры и стратегическое управление ИИ"
        - "Юрисдикции, арбитраж и mission-locked institutions для ИИ"
        - "Риск-карты глобальной AI-инфраструктуры"
        - "Сценарное моделирование захвата, санкций, энергетических кризисов и supply-chain shocks"
        - "Аудит обновлений, release authority и безопасность цепочки поставки моделей"
      risk_map_axes:
        - "ядерная и геополитическая уязвимость"
        - "внутренний захват узла или институции"
        - "экономическое давление, санкции и экспортный контроль"
        - "энергетический и водный шантаж"
        - "чиповые и supply-chain shocks"
        - "компрометация update-chain"
        - "приватизация, национализация или sale-of-core"
        - "потеря независимости аудита"
        - "несовместимость правовых режимов"
        - "деградация public-interest mission"
      site_representation:
        - "исследовательский раздел"
        - "интерактивная риск-карта"
        - "матрица сценариев"
        - "карта факультетских связей"
        - "диаграмма threshold-governance"
        - "блок пунктов для верификации"

art_style:
  name: "стратегический академический техно-институциональный стиль"
  mood:
    - "академическая строгость"
    - "управленческая ясность"
    - "интеллектуальная технологичность"
    - "ощущение института будущего"
    - "исследовательская лаборатория"
    - "command center"
    - "стратегический атлас"
    - "архитектура знаний"
  prefer:
    - "чистая институциональная графика"
    - "сдержанная технологическая глубина"
    - "карты управления"
    - "layered diagrams"
    - "research console"
    - "академические панели"
    - "навигационные сетки"
    - "типографическая строгость"
  avoid:
    - "агрессивный киберпанк"
    - "темная игровая эстетика"
    - "однотонная фиолетово-синяя AI-абстракция"
    - "хаотичные glowing-сетки"
    - "дешевая sci-fi графика"
    - "корпоративный stock-стиль"
    - "роботы ради роботов"
    - "визуальный шум"
    - "крипто-эстетика"

output_types:
  - "academic_master_prompt"
  - "faculty_structure_prompt"
  - "department_structure_prompt"
  - "course_architecture_prompt"
  - "methodology_prompt"
  - "library_prompt"
  - "book_series_prompt"
  - "research_block_prompt"
  - "concept"
  - "landing_page"
  - "presentation_structure"
  - "partner_letter"
  - "institutional_proposal"
  - "grant_application"
  - "course_program"
  - "methodology"
  - "brand_platform"
  - "visual_system"
  - "manifesto"
  - "short_pitch"
  - "full_strategy"

generation_rules:
  - "Сайт можно строить после прямого разрешения пользователя; при строительстве сайт должен оставаться академическим интерфейсом, а не рекламным лендингом."
  - "Если в проекте есть папка Академия или материалы факультетов, кафедр, курсов, методики, библиотеки и книг, сначала использовать их как источник."
  - "Академическую структуру раскрывать через факультеты, кафедры, курсы, методику, библиотеку и книги."
  - "Перед созданием артефакта сверить задачу с build.spec и MASTER_PROMPT.md."
  - "Сохранить все согласованные пункты, подпункты, направления, ограничения и смысловые оси."
  - "Учитывать все замечания пользователя как обязательные требования."
  - "Соблюдать языковую политику: по умолчанию русский язык; при выборе другого языка все видимые надписи переводить на выбранный язык."
  - "Не пропускать арт-стиль, BooleanSpec-ограничения и запреты на неподтвержденные утверждения."
  - "Если пункт не подходит к конкретному формату, явно указать, что он не применен по причине формата."
  - "Сначала определить тип артефакта."
  - "Читать unknown как неопределенность, а не как факт."
  - "Не заявлять неподтвержденные статусы, партнерства, аккредитации или гарантии."
  - "Использовать язык проектной гипотезы, если статус не подтвержден."
  - "Раскрывать академию через миссию, образовательную архитектуру, исследование, методологию, аудитории и институциональную совместимость."
  - "Для ИИ и автономных систем всегда включать слой управления, доверия, рисков, автономности, ответственности и проверки."
  - "Избегать рекламной воды."
  - "Сохранять стратегический академический техно-институциональный стиль."

site_interface_requirements:
  show_everything_when_allowed: true
  required_images: true
  required_graphics: true
  required_logo: true
  required_brandbook: true
  required_merchandising_section: true
  required_generated_raster_images: true
  required_active_widgets: true
  required_mobile_app_layer: true
  mobile_app_default_mode: "installable_web_app_pwa"
  do_not_claim_app_store_publication_without_confirmation: true
  widgets_must_be_useful: true
  site_must_visualize_academic_core: true
  site_must_not_replace_academic_core: true
  required_site_layers:
    - "академическое определение"
    - "факультеты"
    - "кафедры"
    - "курсы"
    - "методика"
    - "библиотека"
    - "книги"
    - "исследовательские лаборатории"
    - "образовательные траектории"
    - "риск-карты"
    - "исследовательские блоки"
    - "AI governance"
    - "human-in-the-loop"
    - "human responsibility"
    - "trust, safety, verification"
    - "институциональная совместимость"
    - "проверка полноты"
  useful_widgets:
    - "конструктор образовательной траектории"
    - "риск-карта ИИ-системы"
    - "проверка академической полноты"
    - "интерактивная карта факультетов"
    - "интерактивная система курсов"
    - "карта библиотеки и книжного корпуса"
    - "блок установки приложения для iOS и Android"
    - "виджет исследовательского блока"
  required_visual_assets:
    - "логотип"
    - "hero-изображение"
    - "визуальные карты"
    - "мерч-мокап"
    - "иконка приложения"
  brandbook_document: "BRAND_BOOK.md"
  vulnerability_fixing_required: true
  visual_overlap_is_blocking_defect: true
  logo_must_be_visible_above_fold: true
  empty_blocks_are_forbidden: true

faculty_presentations:
  required: true
  slides_per_faculty: 5
  separate_deck_per_faculty: true
  required_images: true
  required_visualization: true
  modern_academic_style: true
  no_empty_blocks: true
  no_text_overlap: true
  rounded_blocks_required: true
  russian_numbered_file_names_required: true
  no_unconfirmed_status_claims: true

safe_phrases:
  - "предлагается как"
  - "может быть использована как"
  - "проектируется как"
  - "может стать основой для"
  - "потенциально совместима с"
  - "может быть представлена для обсуждения"
  - "пилотная рамка"
  - "исследовательская и образовательная инициатива"
  - "методологический контур"
  - "проектная гипотеза"
  - "рамка для дальнейшей разработки"
