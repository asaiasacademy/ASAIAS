const pptxgen = require("pptxgenjs");
const fs = require("fs");
const path = require("path");

const OUT_DIR = path.resolve(__dirname, "out");
const ASSET_DIR = path.resolve(__dirname, "assets");
fs.mkdirSync(OUT_DIR, { recursive: true });
let SHAPE;

const colors = {
  ink: "101719",
  blue: "163E5A",
  teal: "087F82",
  green: "3C7456",
  amber: "B27633",
  paper: "FBFDFC",
  bg: "F3F5F1",
  muted: "58676A",
  line: "CAD7D4",
  white: "FFFFFF",
};

const decks = [
  {
    slug: "01-strategic-ai-management",
    fileName: "01-Факультет-стратегического-управления-ИИ.pptx",
    title: "Факультет стратегического управления ИИ",
    short: "Стратегическое управление ИИ",
    image: "faculty-strategic-ai-management.png",
    mission: "Формирует управленческий язык для постановки задач, контроля качества, риск-карт и распределения ответственности при применении ИИ.",
    audience: "Управленцы, методологи, исследователи, образовательные организации",
    departments: ["Кафедра стратегического управления ИИ", "Кафедра риск-карт и сценарного анализа"],
    courses: ["Стратегическое управление ИИ", "Риск-карты ИИ", "AI governance для управленцев"],
    research: ["модели управленческого контроля", "сценарии внедрения", "карты ответственности", "оценка институциональных рисков"],
    lab: "Лаборатория стратегических сценариев",
    library: "AI governance · риск-карты · институциональное внедрение",
    books: "Стратегическое управление ИИ · Атлас рисков ИИ",
  },
  {
    slug: "02-autonomous-systems-agent-architectures",
    fileName: "02-Факультет-автономных-систем-и-агентных-архитектур.pptx",
    title: "Факультет автономных систем и агентных архитектур",
    short: "Автономные системы",
    image: "faculty-autonomous-systems.png",
    mission: "Разбирает границы автономности, агентные роли, многоагентные процессы и архитектуру систем с распределенным действием.",
    audience: "Исследователи, разработчики AI-проектов, архитекторы систем",
    departments: ["Кафедра автономных систем", "Кафедра multi-agent systems"],
    courses: ["Автономные системы", "Многоагентные архитектуры", "Оркестрация AI-агентов"],
    research: ["уровни автономности", "агентные процессы", "память и инструменты агентов", "сценарии отказов"],
    lab: "Лаборатория агентной оркестрации",
    library: "автономные системы · агентные архитектуры · human-in-the-loop",
    books: "Автономные системы: основы · Агентные архитектуры",
  },
  {
    slug: "03-trust-safety-verification",
    fileName: "03-Факультет-доверия-безопасности-и-верификации.pptx",
    title: "Факультет доверия, безопасности и верификации",
    short: "Доверие и проверка",
    image: "faculty-trust-safety-verification.png",
    mission: "Проектирует процедуры проверки, доверия, безопасности и человеческого контроля в системах с ИИ.",
    audience: "Аудиторы, разработчики, преподаватели, методологи",
    departments: ["Кафедра trust, safety, verification", "Кафедра human-in-the-loop"],
    courses: ["Проверка ИИ-систем", "Human-in-the-loop", "Качество и ограничения ИИ"],
    research: ["верификация", "контуры контроля", "red teaming", "качество решений"],
    lab: "Лаборатория trust, safety, verification",
    library: "доверие · безопасность · проверка · human-in-the-loop",
    books: "Доверие и проверка ИИ · Человек в контуре ИИ",
  },
  {
    slug: "04-education-technologies-enlightenment",
    fileName: "04-Факультет-образовательных-технологий-и-просвещения.pptx",
    title: "Факультет образовательных технологий и просвещения",
    short: "Образование и просвещение",
    image: "faculty-education-enlightenment.png",
    mission: "Создает учебные программы, публичные материалы и методики объяснения ИИ без хайпа, паники и неподтвержденных обещаний.",
    audience: "Преподаватели, методисты, просветители, студенты",
    departments: ["Кафедра образовательных программ по ИИ", "Кафедра публичного просвещения и академической коммуникации"],
    courses: ["ИИ для преподавателей", "Публичная коммуникация об ИИ", "Учебный дизайн с ИИ"],
    research: ["учебные задания с ИИ", "академическая честность", "лекционные форматы", "методики проверки"],
    lab: "Лаборатория образовательного дизайна",
    library: "образовательные методики · лекции · глоссарии",
    books: "ИИ для преподавателя · Публичные лекции об ИИ",
  },
  {
    slug: "05-methodology-scenarios-institutional-design",
    fileName: "05-Факультет-методологии-сценариев-и-институционального-проектирования.pptx",
    title: "Факультет методологии, сценариев и институционального проектирования",
    short: "Методология и сценарии",
    image: "faculty-methodology-institutional-design.png",
    mission: "Связывает ИИ с проектными практикумами, институциональным внедрением, сценариями и методическими документами.",
    audience: "Проектировщики, руководители, аналитики, образовательные организации",
    departments: ["Кафедра методологии и проектных практикумов", "Кафедра институционального внедрения ИИ"],
    courses: ["Методология внедрения ИИ", "Проектный практикум по ИИ-системам", "Сценарное проектирование"],
    research: ["карты внедрения", "проектные задания", "институциональные сценарии", "методические пакеты"],
    lab: "Лаборатория институционального дизайна",
    library: "институциональное внедрение · исследовательские обзоры · справочники",
    books: "Методология ИИ-проектов · ИИ в институциях",
  },
  {
    slug: "06-ai-governance-public-consequences",
    fileName: "06-Факультет-AI-governance-и-общественных-последствий.pptx",
    title: "Факультет AI governance и общественных последствий",
    short: "AI governance",
    image: "faculty-ai-governance-public-consequences.png",
    mission: "Исследует правила, последствия, human responsibility и общественные эффекты внедрения ИИ.",
    audience: "Исследователи, управленцы, общественные структуры, экспертные площадки",
    departments: ["Кафедра AI governance", "Кафедра human responsibility"],
    courses: ["AI governance", "Человеческая ответственность в ИИ", "Общественные последствия ИИ"],
    research: ["общественные последствия", "governance-модели", "ответственность человека", "институциональная отчетность"],
    lab: "Лаборатория governance-моделей",
    library: "AI governance · human responsibility · исследовательские обзоры",
    books: "AI governance: академическая рамка · Человеческая ответственность в ИИ",
  },
];

function coverImage(slide, imagePath) {
  slide.addImage({ path: imagePath, x: 0, y: 0, w: 13.333, h: 7.5 });
  slide.addShape(SHAPE.rect, {
    x: 0,
    y: 0,
    w: 13.333,
    h: 7.5,
    fill: { color: colors.ink, transparency: 28 },
    line: { color: colors.ink, transparency: 100 },
  });
}

function addHeader(slide, label, title) {
  slide.addText(label, {
    x: 0.55,
    y: 0.34,
    w: 4.2,
    h: 0.24,
    fontFace: "Aptos",
    fontSize: 8.8,
    bold: true,
    color: colors.green,
    margin: 0,
    breakLine: false,
    fit: "shrink",
  });
  slide.addText(title, {
    x: 0.55,
    y: 0.68,
    w: 8.7,
    h: 0.72,
    fontFace: "Aptos Display",
    fontSize: 23,
    bold: true,
    color: colors.ink,
    margin: 0,
    breakLine: false,
    fit: "shrink",
  });
  slide.addShape(SHAPE.line, {
    x: 0.55,
    y: 1.52,
    w: 12.2,
    h: 0,
    line: { color: colors.line, width: 1 },
  });
}

function addFooter(slide, page) {
  slide.addText("Проектная академическая рамка · без заявлений об аккредитации, партнерствах или гарантиях", {
    x: 0.55,
    y: 7.12,
    w: 10.8,
    h: 0.18,
    fontFace: "Aptos",
    fontSize: 7.2,
    color: colors.muted,
    margin: 0,
    breakLine: false,
    fit: "shrink",
  });
  slide.addText(String(page).padStart(2, "0"), {
    x: 12.1,
    y: 7.02,
    w: 0.7,
    h: 0.3,
    fontFace: "Aptos",
    fontSize: 11,
    bold: true,
    color: colors.blue,
    align: "right",
    margin: 0,
  });
}

function chip(slide, text, x, y, w, color = colors.blue) {
  slide.addShape(SHAPE.roundRect, {
    x,
    y,
    w,
    h: 0.42,
    rectRadius: 0.08,
    fill: { color, transparency: 5 },
    line: { color, transparency: 100 },
  });
  slide.addText(text, {
    x: x + 0.12,
    y: y + 0.1,
    w: w - 0.24,
    h: 0.18,
    fontFace: "Aptos",
    fontSize: 7.6,
    bold: true,
    color: colors.white,
    margin: 0,
    breakLine: false,
    fit: "shrink",
  });
}

function filledPanel(slide, x, y, w, h, title, body, accent = colors.blue) {
  slide.addShape(SHAPE.roundRect, {
    x,
    y,
    w,
    h,
    rectRadius: 0.08,
    fill: { color: colors.white },
    line: { color: colors.line, width: 1 },
  });
  slide.addShape(SHAPE.roundRect, {
    x,
    y,
    w: 0.12,
    h,
    rectRadius: 0.04,
    fill: { color: accent },
    line: { color: accent, transparency: 100 },
  });
  slide.addText(title, {
    x: x + 0.28,
    y: y + 0.18,
    w: w - 0.46,
    h: 0.34,
    fontFace: "Aptos Display",
    fontSize: 12.4,
    bold: true,
    color: colors.ink,
    margin: 0,
    breakLine: false,
    fit: "shrink",
  });
  slide.addText(body, {
    x: x + 0.28,
    y: y + 0.62,
    w: w - 0.46,
    h: h - 0.78,
    fontFace: "Aptos",
    fontSize: 9.2,
    color: colors.muted,
    valign: "mid",
    breakLine: false,
    fit: "shrink",
    margin: 0.02,
  });
}

function addImageTile(slide, imagePath, x, y, w, h) {
  slide.addShape(SHAPE.roundRect, {
    x,
    y,
    w,
    h,
    rectRadius: 0.08,
    fill: { color: colors.white },
    line: { color: colors.line, width: 1 },
  });
  slide.addImage({ path: imagePath, x: x + 0.05, y: y + 0.05, w: w - 0.1, h: h - 0.1 });
}

function addCover(pptx, deck) {
  const slide = pptx.addSlide();
  const img = path.join(ASSET_DIR, deck.image);
  coverImage(slide, img);
  slide.addShape(SHAPE.roundRect, {
    x: 0.55,
    y: 0.48,
    w: 0.16,
    h: 6.35,
    rectRadius: 0.04,
    fill: { color: colors.teal },
    line: { color: colors.teal, transparency: 100 },
  });
  slide.addText("Академия стратегического управления ИИ и автономных систем", {
    x: 0.9,
    y: 0.68,
    w: 8.4,
    h: 0.24,
    fontFace: "Aptos",
    fontSize: 8.5,
    bold: true,
    color: "DDEDEA",
    margin: 0,
    breakLine: false,
    fit: "shrink",
  });
  slide.addText(deck.title, {
    x: 0.88,
    y: 1.14,
    w: 7.65,
    h: 1.72,
    fontFace: "Aptos Display",
    fontSize: 34,
    bold: true,
    color: colors.white,
    margin: 0,
    fit: "shrink",
  });
  slide.addText(deck.mission, {
    x: 0.9,
    y: 3.08,
    w: 6.8,
    h: 0.92,
    fontFace: "Aptos",
    fontSize: 14,
    color: "E8F3F1",
    margin: 0,
    fit: "shrink",
  });
  chip(slide, "проектная гипотеза", 0.9, 4.38, 1.7, colors.green);
  chip(slide, "5 слайдов", 2.76, 4.38, 1.15, colors.teal);
  chip(slide, "без неподтвержденных статусов", 4.08, 4.38, 2.35, colors.amber);
}

function addRoleSlide(pptx, deck) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.bg };
  addHeader(slide, "АКАДЕМИЧЕСКАЯ РОЛЬ", `${deck.short}: зачем факультет нужен академии`);
  addImageTile(slide, path.join(ASSET_DIR, deck.image), 8.35, 1.8, 4.3, 4.72);
  filledPanel(slide, 0.62, 1.85, 3.65, 1.35, "Миссия", deck.mission, colors.blue);
  filledPanel(slide, 4.48, 1.85, 3.52, 1.35, "Аудитории", deck.audience, colors.green);
  filledPanel(slide, 0.62, 3.48, 3.65, 1.35, "Область знания", `${deck.short}; управление, проверка, ответственность и институциональная совместимость.`, colors.teal);
  filledPanel(slide, 4.48, 3.48, 3.52, 1.35, "Библиотека", deck.library, colors.amber);
  filledPanel(slide, 0.62, 5.1, 7.38, 1.16, "Книжный контур", deck.books, colors.blue);
  addFooter(slide, 2);
}

function addDepartmentsCoursesSlide(pptx, deck) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.paper };
  addHeader(slide, "КАФЕДРЫ И КУРСЫ", "Структура обучения: от кафедры к проверяемой компетенции");
  const leftX = 0.65;
  const top = 1.88;
  slide.addText("Кафедры", { x: leftX, y: 1.68, w: 2, h: 0.2, fontFace: "Aptos", fontSize: 9, bold: true, color: colors.green, margin: 0 });
  deck.departments.forEach((d, i) => {
    filledPanel(slide, leftX, top + i * 1.35, 5.1, 1.05, d, i === 0 ? "Дисциплинарная зона, методические материалы, лаборатории и связь с библиотекой." : "Исследовательские темы, проектные задания, итоговые работы и книжный корпус.", i === 0 ? colors.blue : colors.teal);
  });
  slide.addText("Курсы", { x: 6.15, y: 1.68, w: 2, h: 0.2, fontFace: "Aptos", fontSize: 9, bold: true, color: colors.green, margin: 0 });
  deck.courses.forEach((c, i) => {
    const y = top + i * 1.18;
    slide.addShape(SHAPE.roundRect, {
      x: 6.15,
      y,
      w: 6.38,
      h: 0.9,
      rectRadius: 0.08,
      fill: { color: i % 2 === 0 ? "EAF2F1" : "EEF3F7" },
      line: { color: colors.line, width: 1 },
    });
    slide.addText(c, {
      x: 6.38,
      y: y + 0.18,
      w: 2.7,
      h: 0.28,
      fontFace: "Aptos Display",
      fontSize: 12,
      bold: true,
      color: colors.ink,
      margin: 0,
      breakLine: false,
      fit: "shrink",
    });
    slide.addText(["понятия → карта рисков → практика", "архитектура → проверка → ответственность", "исследование → итоговая защита"][i], {
      x: 9.1,
      y: y + 0.16,
      w: 3.1,
      h: 0.34,
      fontFace: "Aptos",
      fontSize: 9,
      color: colors.muted,
      margin: 0,
      breakLine: false,
      fit: "shrink",
    });
  });
  filledPanel(slide, 6.15, 5.58, 6.38, 0.74, "Методика проверки", "Защита проекта, экспертная рубрика, риск-карта и объяснение human responsibility.", colors.amber);
  addFooter(slide, 3);
}

function addResearchSlide(pptx, deck) {
  const slide = pptx.addSlide();
  slide.background = { color: "EEF3F2" };
  addHeader(slide, "ИССЛЕДОВАТЕЛЬСКАЯ ЛАБОРАТОРИЯ", `${deck.lab}: как факультет производит знание`);
  addImageTile(slide, path.join(ASSET_DIR, deck.image), 0.62, 1.82, 4.2, 4.85);
  const steps = ["вопрос", "сценарий", "риск", "проверка"];
  deck.research.slice(0, 4).forEach((r, i) => {
    const x = 5.15 + (i % 2) * 3.55;
    const y = 1.92 + Math.floor(i / 2) * 1.86;
    slide.addShape(SHAPE.arc, { x, y, w: 0.48, h: 0.48, line: { color: [colors.blue, colors.teal, colors.amber, colors.green][i], width: 2 } });
    filledPanel(slide, x + 0.62, y - 0.08, 2.75, 1.12, steps[i].toUpperCase(), r, [colors.blue, colors.teal, colors.amber, colors.green][i]);
  });
  filledPanel(slide, 5.15, 5.78, 6.9, 0.72, "Выход лаборатории", "Исследовательский обзор, методический документ, карта рисков или проектная рамка для учебного применения.", colors.blue);
  addFooter(slide, 4);
}

function addTrajectorySlide(pptx, deck) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.paper };
  addHeader(slide, "ОБРАЗОВАТЕЛЬНАЯ ТРАЕКТОРИЯ", "Как слушатель проходит путь от понятий к итоговой работе");
  addImageTile(slide, path.join(ASSET_DIR, deck.image), 0.62, 1.86, 2.35, 4.92);
  const phases = [
    ["1", "Понять", "термины, границы, контекст, ключевые роли и ограничения системы"],
    ["2", "Спроектировать", "роль человека, данные, процесс, контуры контроля и сценарии применения"],
    ["3", "Проверить", "качество, риски, ограничения, верификацию и процедуру экспертной оценки"],
    ["4", "Защитить", "итоговая работа, аргументация, ответственность и институциональная применимость"],
  ];
  phases.forEach((p, i) => {
    const x = 3.22 + i * 2.38;
    slide.addShape(SHAPE.roundRect, {
      x,
      y: 2.08,
      w: 2.02,
      h: 2.75,
      rectRadius: 0.08,
      fill: { color: ["EAF2F1", "EEF3F7", "F8EFE5", "EDF3EC"][i] },
      line: { color: colors.line, width: 1 },
    });
    slide.addText(p[0], { x: x + 0.18, y: 2.28, w: 0.52, h: 0.42, fontFace: "Aptos Display", fontSize: 18, bold: true, color: colors.blue, margin: 0 });
    slide.addText(p[1], { x: x + 0.18, y: 2.9, w: 1.62, h: 0.36, fontFace: "Aptos Display", fontSize: 14, bold: true, color: colors.ink, margin: 0, fit: "shrink" });
    slide.addText(p[2], { x: x + 0.18, y: 3.42, w: 1.62, h: 0.96, fontFace: "Aptos", fontSize: 9.2, color: colors.muted, margin: 0, fit: "shrink", valign: "mid" });
    slide.addShape(SHAPE.line, { x: x + 0.18, y: 4.48, w: 1.58, h: 0, line: { color: [colors.blue, colors.teal, colors.amber, colors.green][i], width: 2 } });
  });
  filledPanel(slide, 3.22, 5.32, 2.95, 1.0, "Итоговая работа", `Проектная рамка по теме факультета: ${deck.short}; структура, роли, риски и проверка.`, colors.blue);
  filledPanel(slide, 6.36, 5.32, 2.95, 1.0, "Проверка", "Качество, риск-карта, human-in-the-loop, ограничения и защита решения.", colors.teal);
  filledPanel(slide, 9.5, 5.32, 2.95, 1.0, "Безопасная рамка", "Без обещаний статуса, партнерств, аккредитации или гарантированного результата.", colors.amber);
  addFooter(slide, 5);
}

async function buildDeck(deck) {
  const pptx = new pptxgen();
  SHAPE = pptx.ShapeType;
  pptx.layout = "LAYOUT_WIDE";
  pptx.author = "Академия стратегического управления ИИ и автономных систем";
  pptx.subject = deck.title;
  pptx.title = deck.title;
  pptx.company = "Проектная академическая рамка";
  pptx.lang = "ru-RU";
  pptx.theme = {
    headFontFace: "Aptos Display",
    bodyFontFace: "Aptos",
    lang: "ru-RU",
  };
  pptx.defineLayout({ name: "ACADEMY_WIDE", width: 13.333, height: 7.5 });
  pptx.layout = "ACADEMY_WIDE";

  addCover(pptx, deck);
  addRoleSlide(pptx, deck);
  addDepartmentsCoursesSlide(pptx, deck);
  addResearchSlide(pptx, deck);
  addTrajectorySlide(pptx, deck);

  const outPath = path.join(OUT_DIR, deck.fileName);
  await pptx.writeFile({ fileName: outPath });
  return outPath;
}

(async () => {
  const outputs = [];
  for (const deck of decks) {
    outputs.push(await buildDeck(deck));
  }
  fs.writeFileSync(path.join(OUT_DIR, "faculty_decks_manifest.json"), JSON.stringify({ generatedAt: new Date().toISOString(), decks: outputs }, null, 2), "utf8");
  console.log(outputs.join("\n"));
})();

