const COPY = {
  zh: {
    skip: "跳到正文",
    navWorkbench: "工作台",
    navDownload: "下载",
    heroTitle: "GPU 原生的数据库工作台",
    heroLede:
      "zqlcrab 用 Rust 和 Zed 的 GPUI 渲染，而不是 Electron 套一层网页。启动快、输入跟手、内存占用小。给要直接碰 SQLite、PostgreSQL、MySQL 的开发者和 DBA。",
    captureLabel: "完整客户端界面 · 本地数据库",
    zoomHint: "点击放大",
    realCapture: "真实客户端截图",
    zoomData: "放大查看数据表格截图",
    zoomSql: "放大查看 SQL 控制台截图",
    zoomSchema: "放大查看表结构截图",
    close: "关闭",
    dataAlt: "zqlcrab 数据表格完整窗口",
    sqlAlt: "zqlcrab SQL 控制台完整窗口",
    schemaAlt: "zqlcrab 表结构完整窗口",
    dataCaption: "数据表格：分页、原位编辑与多格式导出。",
    sqlCaption: "SQL 控制台：编辑器、执行工具栏与查询结果同屏。",
    schemaCaption: "表结构：列类型、约束、默认值与索引入口。",
    ctaDownload: "打开 Releases 下载",
    ctaSource: "查看源码",
    metaStack: "Rust 2024 · GPUI · macOS / Linux / Windows",
    enginesLead: "同一套适配器，三种引擎。",
    engSqlite: "WAL、内存库、本地文件",
    engPg: "异步驱动、TLS、Schema",
    engMy: "5.7 / 8.x，事务与类型映射",
    wbTitle: "一次会话里做完的事",
    wbLede:
      "下面不是效果图，而是正在运行的 zqlcrab：写 SQL、浏览数据、看表结构，都在一扇原生窗口里完成。",
    tabConsole: "SQL 控制台",
    tabGrid: "数据表格",
    tabSchema: "表结构",
    tabHistory: "查询历史",
    safeMode: "只读保护可开",
    consoleH: "写 SQL，也读得懂结果",
    consoleP:
      "格式化、执行、Explain 和结果浏览在同一工作区。查询结果可继续编辑、分页和导出，不需要在窗口之间来回切换。",
    gridH: "大表也保持清晰、跟手",
    gridP:
      "分页浏览、原位编辑和 CSV / JSON / Markdown / SQL 导出都在同一张表上完成。变更进入 changeset，确认后才写回数据库。",
    schemaH: "类型、约束、索引一眼看清",
    schemaP:
      "从列类型、空值、主键和默认值，到多列索引与方言 DDL，结构设计与真实数据库保持在同一个上下文里。",
    histH: "会话还在",
    histP:
      "连接写在本机配置里。上次打开的库会在下次启动时接上。延迟 ping、测试连接、切库都在标题栏完成。",
    nativeTitle: "为什么不是 Electron",
    nativeP:
      "界面由 GPUI 走 GPU，目标 120 FPS，输入按亚毫秒响应。macOS 有原生菜单栏（zqlcrab / File / Edit / View / Window / Help）和完整快捷键。暗色黑曜石与亮色两套主题来自同一套 CrabStudio token。",
    dlTitle: "下载",
    dlLede: "预编译包在 GitHub Releases。版本号以仓库发布页为准。",
    colOs: "系统",
    colArch: "架构",
    colPkg: "包",
    gatekeeper:
      "macOS 未公证的开源包可能被 Gatekeeper 隔离。把应用拖进 Applications 后，在终端执行：sudo xattr -rd com.apple.quarantine /Applications/zqlcrab.app",
    srcTitle: "源码与仓库",
    repoApp: "桌面客户端（Rust / GPUI）",
    repoRel: "安装包与更新说明",
    repoWeb: "本站源码（静态页）",
    srcNote:
      "从源码构建需要 Rust 1.85+（2024 edition）。macOS / Linux / Windows 的系统依赖写在仓库 README 里。",
    footer: "宿主 alcheme.top · 源码在 GitHub · MIT OR Apache-2.0",
    title: "zqlcrab — GPU 原生数据库客户端",
    description:
      "zqlcrab 是用 Rust 与 GPUI 打造的 GPU 加速数据库桌面客户端。连接 SQLite、PostgreSQL、MySQL，无 Electron、无 Webview。",
  },
  en: {
    skip: "Skip to content",
    navWorkbench: "Workbench",
    navDownload: "Download",
    heroTitle: "A GPU-native database workbench",
    heroLede:
      "zqlcrab is rendered with Rust and Zed’s GPUI, not an Electron webview. Fast start, tight input, small memory. Built for developers and DBAs who sit in SQLite, PostgreSQL, and MySQL.",
    captureLabel: "Full client window · local database",
    zoomHint: "Click to enlarge",
    realCapture: "REAL CLIENT CAPTURE",
    zoomData: "Enlarge the data grid screenshot",
    zoomSql: "Enlarge the SQL console screenshot",
    zoomSchema: "Enlarge the schema screenshot",
    close: "Close",
    dataAlt: "The full zqlcrab data grid window",
    sqlAlt: "The full zqlcrab SQL console window",
    schemaAlt: "The full zqlcrab table schema window",
    dataCaption: "Data grid: paging, in-place edits, and multi-format export.",
    sqlCaption: "SQL console: editor, execution tools, and results in one view.",
    schemaCaption: "Schema: column types, constraints, defaults, and index tools.",
    ctaDownload: "Download from Releases",
    ctaSource: "View source",
    metaStack: "Rust 2024 · GPUI · macOS / Linux / Windows",
    enginesLead: "One adapter surface. Three engines.",
    engSqlite: "WAL, in-memory, local files",
    engPg: "Async driver, TLS, schemas",
    engMy: "5.7 / 8.x, transactions and types",
    wbTitle: "What one session actually does",
    wbLede:
      "These are not mockups. This is zqlcrab running: write SQL, browse data, and inspect schemas in one native window.",
    tabConsole: "SQL console",
    tabGrid: "Data grid",
    tabSchema: "Schema",
    tabHistory: "History",
    safeMode: "Read-only guard",
    consoleH: "Write SQL and read the result",
    consoleP:
      "Format, run, Explain, and browse results in one workspace. Keep editing, paging, and exporting without bouncing between windows.",
    gridH: "Large tables stay crisp and quick",
    gridP:
      "Page, edit in place, and export CSV, JSON, Markdown, or SQL from the same grid. Mutations enter a changeset and only hit the database after review.",
    schemaH: "Types, constraints, and indexes at a glance",
    schemaP:
      "From column types, nullability, primary keys, and defaults to multi-column indexes and dialect DDL, schema work stays in the database context.",
    histH: "The session stays",
    histP:
      "Profiles live on disk. The last database reconnects on launch. Latency ping, test connection, and catalog switching sit in the title bar.",
    nativeTitle: "Why not Electron",
    nativeP:
      "GPUI paints on the GPU toward 120 FPS, with sub-millisecond input. macOS gets a native menu bar (zqlcrab / File / Edit / View / Window / Help) and full shortcuts. Dark obsidian and light share the CrabStudio tokens.",
    dlTitle: "Download",
    dlLede: "Prebuilt packages live on GitHub Releases. Trust the tag on that page.",
    colOs: "OS",
    colArch: "Arch",
    colPkg: "Package",
    gatekeeper:
      "Unsigned open-source macOS builds may be quarantined. After dragging into Applications, run: sudo xattr -rd com.apple.quarantine /Applications/zqlcrab.app",
    srcTitle: "Source",
    repoApp: "Desktop client (Rust / GPUI)",
    repoRel: "Binaries and notes",
    repoWeb: "This site (static)",
    srcNote:
      "Building from source wants Rust 1.85+ (2024 edition). Platform packages are listed in the repository README.",
    footer: "Hosted at alcheme.top · source on GitHub · MIT OR Apache-2.0",
    title: "zqlcrab — GPU-native database client",
    description:
      "zqlcrab is a GPU-accelerated database desktop client in Rust and GPUI. SQLite, PostgreSQL, MySQL. No Electron, no webview.",
  },
};

const TITLES = {
  console: "console · postgres://local",
  grid: "grid · public.users",
  schema: "schema · public.users",
  history: "history · postgres://local",
};

function applyLang(lang) {
  const dict = COPY[lang];
  document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (dict[key]) el.setAttribute("alt", dict[key]);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key]) el.setAttribute("aria-label", dict[key]);
  });
  document.title = dict.title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", dict.description);
  const toggle = document.getElementById("lang-toggle");
  toggle.textContent = lang === "zh" ? "EN" : "中文";
  toggle.setAttribute("aria-pressed", lang === "en" ? "true" : "false");
  localStorage.setItem("zqlcrab-lang", lang);
}

function initLang() {
  const saved = localStorage.getItem("zqlcrab-lang");
  const start = saved === "en" || saved === "zh" ? saved : "zh";
  applyLang(start);
}

function initTabs() {
  const tabs = [...document.querySelectorAll(".tour-tabs [role=tab]")];
  const title = document.getElementById("tour-title");

  function select(name) {
    tabs.forEach((tab) => {
      const on = tab.dataset.panel === name;
      tab.setAttribute("aria-selected", on ? "true" : "false");
      const panel = document.getElementById(`panel-${tab.dataset.panel}`);
      if (!panel) return;
      panel.hidden = !on;
      panel.classList.toggle("on", on);
    });
    if (title) title.textContent = TITLES[name] || name;
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => select(tab.dataset.panel));
    tab.addEventListener("keydown", (event) => {
      const i = tabs.indexOf(tab);
      if (event.key === "ArrowRight") {
        event.preventDefault();
        const next = tabs[(i + 1) % tabs.length];
        next.focus();
        select(next.dataset.panel);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        const prev = tabs[(i - 1 + tabs.length) % tabs.length];
        prev.focus();
        select(prev.dataset.panel);
      }
    });
  });
}

function initLightbox() {
  const dialog = document.getElementById("screenshot-dialog");
  const image = document.getElementById("lightbox-image");
  const caption = document.getElementById("lightbox-caption");
  if (!dialog || !image || !caption) return;

  document.querySelectorAll("[data-lightbox]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const lang = document.documentElement.lang.startsWith("zh") ? "zh" : "en";
      const captionKey = trigger.dataset.captionKey;
      const preview = trigger.querySelector("img");
      image.src = trigger.dataset.lightbox;
      image.alt = preview?.alt || "";
      caption.textContent = COPY[lang][captionKey] || "";
      dialog.showModal();
    });
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  const next = document.documentElement.lang.startsWith("zh") ? "en" : "zh";
  applyLang(next);
});

initLang();
initTabs();
initLightbox();
