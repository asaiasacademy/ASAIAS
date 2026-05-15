const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

let deferredInstallPrompt = null;

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  const status = document.querySelector("[data-install-status]");
  if (status) status.textContent = "Приложение готово к установке из браузера.";
});

const installButton = document.querySelector("[data-install-app]");
if (installButton) {
  installButton.addEventListener("click", async () => {
    const status = document.querySelector("[data-install-status]");
    if (!deferredInstallPrompt) {
      if (status) {
        status.textContent = "Для iOS используйте меню браузера: Поделиться → На экран Домой. Для Android откройте меню браузера или дождитесь предложения установки.";
      }
      return;
    }

    deferredInstallPrompt.prompt();
    const choice = await deferredInstallPrompt.userChoice;
    if (status) {
      status.textContent = choice.outcome === "accepted"
        ? "Установка запущена."
        : "Установка отменена. Ее можно повторить из меню браузера.";
    }
    deferredInstallPrompt = null;
  });
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      const status = document.querySelector("[data-install-status]");
      if (status) status.textContent = "Service worker не зарегистрирован в текущем режиме просмотра.";
    });
  });
}

const faculties = [
  {
    title: "Факультет стратегического управления ИИ",
    mission: "Формирует управленческий язык для постановки задач, контроля качества, оценки рисков и распределения ответственности при применении ИИ.",
    area: "Стратегия, управление, сценарное мышление, риск-карты, AI governance.",
    audiences: ["управленцы", "методологи", "исследователи", "образовательные организации"],
    departments: ["Кафедра стратегического управления ИИ", "Кафедра риск-карт и сценарного анализа"],
    courses: ["Стратегическое управление ИИ", "Риск-карты ИИ"],
    research: ["модели управленческого контроля", "сценарии внедрения", "карты ответственности"],
    library: ["AI governance", "Риск-карты", "Институциональное внедрение"],
    books: ["Стратегическое управление ИИ", "Атлас рисков ИИ"]
  },
  {
    title: "Факультет автономных систем и агентных архитектур",
    mission: "Разбирает границы автономности, агентные роли, многоагентные процессы и архитектуру систем с распределенным действием.",
    area: "Автономные системы, multi-agent systems, агентная оркестрация, память и инструменты агентов.",
    audiences: ["исследователи", "разработчики AI-проектов", "архитекторы систем"],
    departments: ["Кафедра автономных систем", "Кафедра multi-agent systems"],
    courses: ["Автономные системы", "Многоагентные архитектуры"],
    research: ["уровни автономности", "агентные процессы", "оркестрация и проверка агентов"],
    library: ["Автономные системы", "Агентные архитектуры"],
    books: ["Автономные системы: основы", "Агентные архитектуры"]
  },
  {
    title: "Факультет доверия, безопасности и верификации",
    mission: "Проектирует процедуры проверки, доверия, безопасности и человеческого контроля в системах с ИИ.",
    area: "Trust, safety, verification, human-in-the-loop, качество решений.",
    audiences: ["аудиторы", "разработчики", "преподаватели", "методологи"],
    departments: ["Кафедра trust, safety, verification", "Кафедра human-in-the-loop"],
    courses: ["Проверка ИИ-систем", "Human-in-the-loop"],
    research: ["верификация", "контуры контроля", "сценарии отказов", "качество решений"],
    library: ["Доверие, безопасность и проверка", "Human-in-the-loop"],
    books: ["Доверие и проверка ИИ", "Человек в контуре ИИ"]
  },
  {
    title: "Факультет образовательных технологий и просвещения",
    mission: "Создает учебные программы, публичные материалы и методики объяснения ИИ без хайпа, паники и неподтвержденных обещаний.",
    area: "Образовательные методики, просвещение, учебный дизайн, публичная коммуникация.",
    audiences: ["преподаватели", "методисты", "просветители", "студенты"],
    departments: ["Кафедра образовательных программ по ИИ", "Кафедра публичного просвещения и академической коммуникации"],
    courses: ["ИИ для преподавателей", "Публичная коммуникация об ИИ"],
    research: ["учебные задания с ИИ", "академическая честность", "публичные лекционные форматы"],
    library: ["Образовательные методики", "Лекции и публичные материалы", "Глоссарии и справочники"],
    books: ["ИИ для преподавателя", "Публичные лекции об ИИ"]
  },
  {
    title: "Факультет методологии, сценариев и институционального проектирования",
    mission: "Связывает ИИ с проектными практикумами, институциональным внедрением, сценариями и методическими документами.",
    area: "Методология, проектные лаборатории, сценарное проектирование, институциональная совместимость.",
    audiences: ["проектировщики", "руководители", "аналитики", "образовательные организации"],
    departments: ["Кафедра методологии и проектных практикумов", "Кафедра институционального внедрения ИИ"],
    courses: ["Методология внедрения ИИ", "Проектный практикум по ИИ-системам"],
    research: ["карты внедрения", "проектные задания", "институциональные сценарии"],
    library: ["Институциональное внедрение", "Исследовательские обзоры"],
    books: ["Методология ИИ-проектов", "ИИ в институциях"]
  },
  {
    title: "Факультет AI governance и общественных последствий",
    mission: "Исследует правила, последствия, human responsibility и общественные эффекты внедрения ИИ.",
    area: "AI governance, общественные последствия, человеческая ответственность, правила применения.",
    audiences: ["исследователи", "управленцы", "общественные структуры", "экспертные площадки"],
    departments: ["Кафедра AI governance", "Кафедра human responsibility"],
    courses: ["AI governance", "Человеческая ответственность в ИИ"],
    research: ["общественные последствия", "governance-модели", "ответственность человека"],
    library: ["AI governance", "Глоссарии и справочники", "Исследовательские обзоры"],
    books: ["AI governance: академическая рамка", "Человеческая ответственность в ИИ"]
  }
];

const departments = [
  ["Кафедра стратегического управления ИИ", "Постановка задач, управление решениями, контроль качества и ответственность.", "Стратегическое управление ИИ", "Лаборатория стратегических сценариев"],
  ["Кафедра риск-карт и сценарного анализа", "Выявление рисков, сценариев отказов и последствий внедрения.", "Риск-карты ИИ", "Лаборатория риск-моделирования"],
  ["Кафедра автономных систем", "Уровни автономности, границы самостоятельного действия, контуры контроля.", "Автономные системы", "Лаборатория автономных контуров"],
  ["Кафедра multi-agent systems", "Роли агентов, память, инструменты, маршруты задач и оркестрация.", "Многоагентные архитектуры", "Лаборатория агентной оркестрации"],
  ["Кафедра trust, safety, verification", "Проверка надежности, тестирование, верификация и ограничения.", "Проверка ИИ-систем", "Лаборатория верификации"],
  ["Кафедра human-in-the-loop", "Участие человека, вмешательство, эскалация и контроль решений.", "Human-in-the-loop", "Лаборатория контуров контроля"],
  ["Кафедра образовательных программ по ИИ", "Силлабусы, задания, рубрики, академическая честность.", "ИИ для преподавателей", "Лаборатория учебного дизайна"],
  ["Кафедра публичного просвещения и академической коммуникации", "Лекции, глоссарии, публичный язык и объяснение рисков.", "Публичная коммуникация об ИИ", "Лаборатория просветительских форматов"],
  ["Кафедра методологии и проектных практикумов", "Проектные задания, кейсы, итоговые работы и практикумы.", "Проектный практикум по ИИ-системам", "Проектная лаборатория"],
  ["Кафедра институционального внедрения ИИ", "Регламенты, роли, карты внедрения и совместимость с организациями.", "Методология внедрения ИИ", "Лаборатория институционального дизайна"],
  ["Кафедра AI governance", "Политики, accountability, управленческие рамки и общественные эффекты.", "AI governance", "Лаборатория governance-моделей"],
  ["Кафедра human responsibility", "Ответственность человека, этика решений и последствия применения.", "Человеческая ответственность в ИИ", "Лаборатория ответственности"]
];

const courses = [
  {
    title: "Стратегическое управление ИИ",
    audience: "управленцы, методологи, исследователи",
    faculty: "Факультет стратегического управления ИИ",
    department: "Кафедра стратегического управления ИИ",
    goal: "Научить рассматривать ИИ как управляемую систему решений, рисков и ответственности.",
    competencies: ["постановка задач", "контроль качества", "карта ответственности", "сценарии внедрения"],
    modules: ["стратегия", "AI governance", "риск-карты", "институциональное внедрение"],
    practice: "Собрать карту управленческого решения для ИИ-проекта.",
    research: "Разбор кейса внедрения ИИ в образовательной или управленческой среде.",
    final: "Стратегия применения ИИ с картой рисков и ответственности.",
    check: "Экспертная рубрика, защита решения, проверка полноты контуров контроля.",
    library: "AI governance, риск-карты, институциональное внедрение",
    books: "Стратегическое управление ИИ"
  },
  {
    title: "Автономные системы",
    audience: "исследователи, разработчики, архитекторы",
    faculty: "Факультет автономных систем и агентных архитектур",
    department: "Кафедра автономных систем",
    goal: "Различать автоматизацию, агентность и автономность, проектировать границы самостоятельного действия.",
    competencies: ["шкала автономности", "контуры контроля", "границы действия", "ответственность"],
    modules: ["автоматизация", "агентность", "автономность", "human-in-the-loop"],
    practice: "Описать уровни автономности выбранной системы.",
    research: "Сравнить автономные контуры в нескольких доменах.",
    final: "Модель автономности и контроля.",
    check: "Защита модели через сценарии нормальной работы и отказов.",
    library: "автономные системы, human-in-the-loop",
    books: "Автономные системы: основы"
  },
  {
    title: "Многоагентные архитектуры",
    audience: "разработчики AI-проектов, исследователи",
    faculty: "Факультет автономных систем и агентных архитектур",
    department: "Кафедра multi-agent systems",
    goal: "Проектировать роли агентов, память, инструменты, маршруты задач и проверку результата.",
    competencies: ["агентные роли", "оркестрация", "память", "проверка результата"],
    modules: ["агенты", "инструменты", "маршруты", "верификация"],
    practice: "Собрать схему многоагентного процесса.",
    research: "Проанализировать сценарии агентных сбоев.",
    final: "Архитектура многоагентной системы с картой проверки.",
    check: "Тест сценариев, разбор ошибок и экспертная защита.",
    library: "агентные архитектуры, trust/safety",
    books: "Агентные архитектуры"
  },
  {
    title: "Проверка ИИ-систем",
    audience: "аудиторы, разработчики, методологи",
    faculty: "Факультет доверия, безопасности и верификации",
    department: "Кафедра trust, safety, verification",
    goal: "Оценивать качество, ограничения, надежность и риски ИИ-систем.",
    competencies: ["тестирование", "верификация", "red teaming", "документация"],
    modules: ["метрики", "ошибки", "сценарии отказов", "отчет проверки"],
    practice: "Собрать протокол проверки для выбранной системы.",
    research: "Обзор методов верификации и ограничений.",
    final: "Отчет проверки ИИ-системы.",
    check: "Чек-лист, экспертная рецензия, защита выводов.",
    library: "доверие, безопасность и проверка",
    books: "Доверие и проверка ИИ"
  },
  {
    title: "ИИ для преподавателей",
    audience: "преподаватели, методисты",
    faculty: "Факультет образовательных технологий и просвещения",
    department: "Кафедра образовательных программ по ИИ",
    goal: "Создавать учебные задания с ИИ без потери смысла, качества и академической ответственности.",
    competencies: ["учебный дизайн", "оценивание", "академическая честность", "проверка заданий"],
    modules: ["ИИ в обучении", "задания", "рубрики", "риски"],
    practice: "Собрать учебный модуль с ИИ.",
    research: "Разобрать образовательный кейс применения ИИ.",
    final: "Программа занятия или мини-курса.",
    check: "Методическая экспертиза и защита критериев оценивания.",
    library: "образовательные методики, глоссарии",
    books: "ИИ для преподавателя"
  },
  {
    title: "AI governance",
    audience: "управленцы, исследователи, общественные структуры",
    faculty: "Факультет AI governance и общественных последствий",
    department: "Кафедра AI governance",
    goal: "Понимать управленческие, общественные и институциональные рамки применения ИИ.",
    competencies: ["governance-модели", "accountability", "правила применения", "карта последствий"],
    modules: ["governance", "ответственность", "контроль", "общественные эффекты"],
    practice: "Собрать governance-карту ИИ-проекта.",
    research: "Сравнить подходы к управлению ИИ в разных институциональных средах.",
    final: "Governance-модель с ограничениями и безопасными формулировками.",
    check: "Защита модели, проверка неподтвержденных утверждений.",
    library: "AI governance, исследовательские обзоры",
    books: "AI governance: академическая рамка"
  }
];

const librarySections = [
  ["Основы искусственного интеллекта", "Базовый понятийный слой: модели, данные, ограничения, задачи и типы систем."],
  ["Автономные системы", "Материалы о самостоятельном действии, контроле, автономности и границах применения."],
  ["Агентные архитектуры", "Multi-agent systems, роли агентов, память, инструменты и оркестрация."],
  ["AI governance", "Управленческие рамки, политики, accountability, общественные последствия."],
  ["Доверие, безопасность и проверка", "Trust, safety, verification, тесты, сценарии отказов, аудиторские протоколы."],
  ["Риск-карты", "Шаблоны и атласы рисков для образовательных, общественных и управленческих сред."],
  ["Human-in-the-loop", "Модели участия человека, эскалации, контроля и вмешательства."],
  ["Образовательные методики", "Силлабусы, задания, рубрики, методические рекомендации для преподавателей."],
  ["Институциональное внедрение", "Карты внедрения, регламенты, роли и сценарии совместимости."],
  ["Глоссарии и справочники", "Единый язык академии, термины, определения, карты понятий."],
  ["Лекции и публичные материалы", "Просветительские тексты и лекции без рекламной воды и неподтвержденных обещаний."],
  ["Исследовательские обзоры", "Обзоры литературы, доклады, исследовательские рамки и аналитика."]
];

const bookSeries = [
  ["Учебники академии", "Основы стратегического управления ИИ", "Базовое обучение и единая рамка понятий."],
  ["Методические пособия", "Методика риск-карт ИИ", "Практические процедуры анализа рисков и проверки решений."],
  ["Монографии", "Границы автономности", "Исследовательская глубина по автономным системам."],
  ["Атласы систем и рисков", "Атлас агентных архитектур", "Систематизация кейсов, ролей и сценариев."],
  ["Глоссарии", "Глоссарий ИИ, автономности и ответственности", "Единый академический язык проекта."],
  ["Сборники лекций", "Публичные лекции об ИИ и автономных системах", "Просветительский корпус академии."],
  ["Практикумы", "Проектный практикум по ИИ-системам", "Задания, шаблоны и итоговые работы."],
  ["Исследовательские доклады", "Состояние AI governance", "Аналитика для обсуждения и развития рамки."],
  ["Книги для управленцев", "ИИ как объект управления", "Управленческий контур без неподтвержденных гарантий."],
  ["Книги для преподавателей", "ИИ в образовательной практике", "Методика, задания, ответственность и проверка."]
];

const labs = [
  ["Лаборатория стратегических сценариев", "Сценарии внедрения ИИ, карты решений, управленческие ограничения.", "Факультет стратегического управления ИИ"],
  ["Лаборатория риск-карт", "Карты рисков, последствия, меры контроля и сценарии отказов.", "Кафедра риск-карт"],
  ["Лаборатория агентной оркестрации", "Роли агентов, маршруты задач, память, инструменты и проверка результата.", "Кафедра multi-agent systems"],
  ["Лаборатория trust, safety, verification", "Процедуры проверки, надежность, ограничения и документация.", "Факультет доверия, безопасности и верификации"],
  ["Лаборатория образовательного дизайна", "Учебные модули, задания, рубрики, академическая честность.", "Факультет образовательных технологий"],
  ["Лаборатория институционального внедрения", "Регламенты, роли, совместимость с организациями и пилотные рамки.", "Факультет методологии"]
];

const paths = {
  managers: {
    title: "Траектория для управленцев",
    text: "Стратегическое управление ИИ → AI governance → Риск-карты ИИ → итоговая governance-модель.",
    output: "Итог: управленческая рамка применения ИИ с картой рисков."
  },
  teachers: {
    title: "Траектория для преподавателей",
    text: "ИИ для преподавателей → Human-in-the-loop → Публичная коммуникация об ИИ → учебный модуль.",
    output: "Итог: программа занятия или мини-курса с методикой проверки."
  },
  researchers: {
    title: "Траектория для исследователей",
    text: "Автономные системы → Многоагентные архитектуры → Проверка ИИ-систем → исследовательский обзор.",
    output: "Итог: обзор или доклад о рисках, автономности и проверяемости."
  },
  developers: {
    title: "Траектория для разработчиков AI-проектов",
    text: "Многоагентные архитектуры → Проверка ИИ-систем → Проектный практикум → техническая документация.",
    output: "Итог: архитектура ИИ-системы с протоколом проверки."
  },
  institutions: {
    title: "Траектория для образовательных организаций",
    text: "Методология внедрения ИИ → ИИ для преподавателей → Риск-карты ИИ → пилотная рамка.",
    output: "Итог: институциональная карта внедрения без неподтвержденных гарантий."
  }
};

function listItems(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function pillItems(items) {
  return items.map((item) => `<span class="pill">${item}</span>`).join("");
}

function renderFaculties(activeIndex = 0) {
  const tabs = document.querySelector("[data-faculty-tabs]");
  const detail = document.querySelector("[data-faculty-detail]");
  if (!tabs || !detail) return;

  tabs.innerHTML = faculties
    .map((faculty, index) => `<button class="faculty-tab ${index === activeIndex ? "is-active" : ""}" type="button" data-faculty-index="${index}">${faculty.title}</button>`)
    .join("");

  const faculty = faculties[activeIndex];
  detail.innerHTML = `
    <span class="panel-label">Факультет</span>
    <h3>${faculty.title}</h3>
    <p>${faculty.mission}</p>
    <div class="detail-kicker">${pillItems(faculty.audiences)}</div>
    <div class="detail-columns">
      <div class="detail-box"><span class="meta-label">Область знания</span><p>${faculty.area}</p></div>
      <div class="detail-box"><span class="meta-label">Кафедры</span><ul>${listItems(faculty.departments)}</ul></div>
      <div class="detail-box"><span class="meta-label">Курсы</span><ul>${listItems(faculty.courses)}</ul></div>
      <div class="detail-box"><span class="meta-label">Исследования</span><ul>${listItems(faculty.research)}</ul></div>
      <div class="detail-box"><span class="meta-label">Библиотека</span><ul>${listItems(faculty.library)}</ul></div>
      <div class="detail-box"><span class="meta-label">Книги</span><ul>${listItems(faculty.books)}</ul></div>
    </div>
  `;

  tabs.querySelectorAll("[data-faculty-index]").forEach((button) => {
    button.addEventListener("click", () => renderFaculties(Number(button.dataset.facultyIndex)));
  });
}

function renderDepartments() {
  const rows = document.querySelector("[data-department-rows]");
  if (!rows) return;
  rows.innerHTML = departments
    .map(([title, responsibility, course, lab]) => `
      <tr>
        <td><strong>${title}</strong></td>
        <td>${responsibility}</td>
        <td>${course}</td>
        <td>${lab}</td>
      </tr>
    `)
    .join("");
}

function renderCourses(activeIndex = 0) {
  const list = document.querySelector("[data-course-list]");
  const detail = document.querySelector("[data-course-detail]");
  if (!list || !detail) return;

  list.innerHTML = courses
    .map((course, index) => `<button class="course-tab ${index === activeIndex ? "is-active" : ""}" type="button" data-course-index="${index}">${course.title}</button>`)
    .join("");

  const course = courses[activeIndex];
  detail.innerHTML = `
    <span class="panel-label">Курс</span>
    <h3>${course.title}</h3>
    <p>${course.goal}</p>
    <div class="course-meta">
      <div><span class="meta-label">Аудитория</span><p>${course.audience}</p></div>
      <div><span class="meta-label">Факультет</span><p>${course.faculty}</p></div>
      <div><span class="meta-label">Кафедра</span><p>${course.department}</p></div>
    </div>
    <div class="detail-columns">
      <div class="detail-box"><span class="meta-label">Компетенции</span><div class="module-row">${pillItems(course.competencies)}</div></div>
      <div class="detail-box"><span class="meta-label">Модули</span><div class="module-row">${pillItems(course.modules)}</div></div>
      <div class="detail-box"><span class="meta-label">Практическое задание</span><p>${course.practice}</p></div>
      <div class="detail-box"><span class="meta-label">Исследовательский компонент</span><p>${course.research}</p></div>
      <div class="detail-box"><span class="meta-label">Итоговая работа</span><p>${course.final}</p></div>
      <div class="detail-box"><span class="meta-label">Методика проверки</span><p>${course.check}</p></div>
      <div class="detail-box"><span class="meta-label">Библиотека</span><p>${course.library}</p></div>
      <div class="detail-box"><span class="meta-label">Книги</span><p>${course.books}</p></div>
    </div>
  `;

  list.querySelectorAll("[data-course-index]").forEach((button) => {
    button.addEventListener("click", () => renderCourses(Number(button.dataset.courseIndex)));
  });
}

function renderSimpleGrids() {
  const libraryGrid = document.querySelector("[data-library-grid]");
  if (libraryGrid) {
    libraryGrid.innerHTML = librarySections
      .map(([title, text]) => `<article><span class="meta-label">Раздел библиотеки</span><h3>${title}</h3><p>${text}</p></article>`)
      .join("");
  }

  const bookGrid = document.querySelector("[data-book-grid]");
  if (bookGrid) {
    bookGrid.innerHTML = bookSeries
      .map(([series, title, purpose]) => `<article><span class="meta-label">${series}</span><strong>${title}</strong><p>${purpose}</p><span class="pill">статус: идея / требует уточнения</span></article>`)
      .join("");
  }

  const labLines = document.querySelector("[data-lab-lines]");
  if (labLines) {
    labLines.innerHTML = labs
      .map(([title, text, owner]) => `<article><strong>${title}</strong><span>${text}</span><span>${owner}</span></article>`)
      .join("");
  }

  const pathGrid = document.querySelector("[data-path-grid]");
  if (pathGrid) {
    pathGrid.innerHTML = Object.values(paths)
      .map((path) => `<article><strong>${path.title}</strong><p>${path.text}</p><div class="detail-kicker"><span class="pill">${path.output}</span></div></article>`)
      .join("");
  }
}

function renderTrajectory(key = "managers") {
  const output = document.querySelector("[data-trajectory-output]");
  const path = paths[key];
  if (!output || !path) return;
  output.innerHTML = `<strong>${path.title}</strong><p>${path.text}</p><div class="detail-kicker"><span class="pill">${path.output}</span></div>`;
}

function setupWidgets() {
  const audienceSelect = document.querySelector("[data-audience-select]");
  if (audienceSelect) {
    renderTrajectory(audienceSelect.value);
    audienceSelect.addEventListener("change", () => renderTrajectory(audienceSelect.value));
  }

  const autonomy = document.querySelector("[data-risk-autonomy]");
  const impact = document.querySelector("[data-risk-impact]");
  const verification = document.querySelector("[data-risk-verification]");
  const meter = document.querySelector("[data-risk-meter] span");
  const riskOutput = document.querySelector("[data-risk-output]");

  function updateRisk() {
    if (!autonomy || !impact || !verification || !meter || !riskOutput) return;
    const score = Number(autonomy.value) + Number(impact.value) + (6 - Number(verification.value));
    const percent = Math.round((score / 15) * 100);
    meter.style.width = `${percent}%`;
    const level = score <= 7 ? "низкий" : score <= 11 ? "средний" : "высокий";
    riskOutput.textContent = `Оценка: ${level} риск. Для академической проверки требуется описать автономность, влияние на людей, проверяемость, human-in-the-loop и ответственность.`;
  }

  [autonomy, impact, verification].forEach((input) => {
    if (input) input.addEventListener("input", updateRisk);
  });
  updateRisk();

  const completeness = document.querySelector("[data-completeness-widget]");
  if (completeness) {
    const items = ["Академия", "Факультеты", "Кафедры", "Курсы", "Методика", "Библиотека", "Книги", "Риск-карты", "AI governance", "Human responsibility"];
    completeness.innerHTML = items
      .map((item) => `<label><input type="checkbox" checked /> ${item}</label>`)
      .join("");
  }
}

const canvas = document.querySelector("[data-network-canvas]");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (canvas instanceof HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  const points = [];
  let width = 0;
  let height = 0;
  let frame = 0;

  function reset() {
    const ratio = window.devicePixelRatio || 1;
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    if (ctx) ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    points.length = 0;

    const count = Math.max(42, Math.floor(width / 28));
    for (let index = 0; index < count; index += 1) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        radius: 1.4 + Math.random() * 2.4
      });
    }
  }

  function draw() {
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);

    points.forEach((point, index) => {
      if (!reducedMotion.matches) {
        point.x += point.vx;
        point.y += point.vy;
      }

      if (point.x < -30) point.x = width + 30;
      if (point.x > width + 30) point.x = -30;
      if (point.y < -30) point.y = height + 30;
      if (point.y > height + 30) point.y = -30;

      for (let nextIndex = index + 1; nextIndex < points.length; nextIndex += 1) {
        const next = points[nextIndex];
        const dx = point.x - next.x;
        const dy = point.y - next.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 132) {
          ctx.strokeStyle = `rgba(29, 93, 134, ${0.18 * (1 - distance / 132)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(next.x, next.y);
          ctx.stroke();
        }
      }

      ctx.fillStyle = index % 5 === 0 ? "rgba(8, 127, 130, 0.42)" : "rgba(29, 93, 134, 0.32)";
      ctx.beginPath();
      ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    frame = requestAnimationFrame(draw);
  }

  window.addEventListener("resize", reset);
  reset();
  draw();
  window.addEventListener("beforeunload", () => cancelAnimationFrame(frame));
}

renderFaculties();
renderDepartments();
renderCourses();
renderSimpleGrids();
setupWidgets();
