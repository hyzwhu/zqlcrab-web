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
    zoomHero: "放大查看工作台界面截图",
    zoomData: "放大查看数据表格截图",
    zoomSql: "放大查看 SQL 控制台截图",
    zoomSchema: "放大查看表结构截图",
    zoomExplain: "放大查看执行计划截图",
    zoomHistory: "放大查看查询历史截图",
    zoomConnect: "放大查看连接管理截图",
    close: "关闭",
    heroAlt: "zqlcrab SQL 工作台完整窗口",
    dataAlt: "zqlcrab 数据表格完整窗口",
    sqlAlt: "zqlcrab SQL 控制台完整窗口",
    schemaAlt: "zqlcrab 表结构完整窗口",
    explainAlt: "zqlcrab SQL Explain 执行计划",
    historyAlt: "zqlcrab 查询执行历史",
    connectAlt: "zqlcrab 新建连接配置",
    heroCaption: "SQL 控制台：编辑器、执行工具栏与查询结果同屏联动。",
    dataCaption: "数据表格：分页、原位编辑与多格式导出。",
    sqlCaption: "SQL 控制台：编辑器、执行工具栏与查询结果同屏。",
    schemaCaption: "表结构：列类型、约束、默认值与索引入口。",
    explainCaption: "执行计划：可视化节点树与估算成本，快速排查慢查询。",
    historyCaption: "执行历史：留存状态、耗时与行数，支持一键重放与复用。",
    connectCaption: "连接管理：支持 36 种引擎生态与只读生产保护机制。",
    ctaDownload: "打开 Releases 下载",
    ctaSource: "查看源码",
    metaStack: "Rust 2024 · GPUI · macOS / Linux / Windows",
    enginesLead: "同一套适配器，三种引擎。",
    engSqlite: "WAL、内存库、本地文件",
    engPg: "异步驱动、TLS、Schema",
    engMy: "5.7 / 8.x，事务与类型映射",
    wbTitle: "一次会话里做完的事",
    wbLede:
      "下面不是概念图，而是正在真实运行的 zqlcrab：写 SQL、看计划、改数据、查历史，全部在一扇轻盈的原生窗口内流转。",
    tabConsole: "SQL 控制台",
    tabGrid: "数据表格",
    tabSchema: "表结构",
    tabExplain: "执行计划",
    tabHistory: "查询历史",
    tabConnect: "连接管理",
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
    explainH: "节点树形 Explain 分析",
    explainP:
      "一键查看查询计划树、预估代价与最耗时步骤，直观识别全表扫描与性能瓶颈。",
    histH: "完整查询执行足迹",
    histP:
      "状态状态码、耗时毫秒、影响行数与时间戳清晰留存，随时一键重填或重新运行。",
    connectH: "安全受控的连接生态",
    connectP:
      "内置 36 种生态引擎选项，支持一键切换生产只读保护（防止误执行 DROP/DELETE/UPDATE），配置保存在本地。",
    nativeTitle: "为什么不是 Electron",
    nativeLede:
      "拒绝臃肿的 Webview 包装与数百兆的空闲内存占用。zqlcrab 选择 Rust 与 Zed 的 GPUI 引擎，追求极客级性能与纯粹原生质感。",
    nativeCard1H: "GPU 原生加速渲染",
    nativeCard1P:
      "通过 Metal / Vulkan / DirectX 直接与 GPU 对话，稳定保持 120 FPS 高刷新率，数十万行数据滚动丝滑无撕裂。",
    nativeCard2H: "亚毫秒级输入跟手",
    nativeCard2P:
      "消除浏览器 DOM 抽象与多进程消息中转开销。按键直达渲染帧，输入延迟低于 1ms，体验如同本地终端。",
    nativeCard3H: "极致轻量内存占用",
    nativeCard3P:
      "摒弃 Chromium 运行环境与 Node.js 冗余组件，空闲内存仅数十兆，瞬时冷启动无需等待沙盒初始化。",
    nativeCard4H: "纯正操作系统原生集成",
    nativeCard4P:
      "深度遵循平台人机交互，具备原生菜单栏、全局快捷键体系与 CrabStudio 双模主题，专注沉浸而无 Web 感。",
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
    zoomHero: "Enlarge the workbench screenshot",
    zoomData: "Enlarge the data grid screenshot",
    zoomSql: "Enlarge the SQL console screenshot",
    zoomSchema: "Enlarge the schema screenshot",
    zoomExplain: "Enlarge the explain plan screenshot",
    zoomHistory: "Enlarge the query history screenshot",
    zoomConnect: "Enlarge the connection modal screenshot",
    close: "Close",
    heroAlt: "The full zqlcrab SQL console window",
    dataAlt: "The full zqlcrab data grid window",
    sqlAlt: "The full zqlcrab SQL console window",
    schemaAlt: "The full zqlcrab table schema window",
    explainAlt: "zqlcrab SQL Explain execution plan",
    historyAlt: "zqlcrab query execution history",
    connectAlt: "zqlcrab new database connection modal",
    heroCaption: "SQL console: editor, execution toolbar, and live results in one window.",
    dataCaption: "Data grid: paging, in-place edits, and multi-format export.",
    sqlCaption: "SQL console: editor, execution tools, and results in one view.",
    schemaCaption: "Schema: column types, constraints, defaults, and index tools.",
    explainCaption: "Explain plan: visual tree, cost estimate, and bottleneck analysis.",
    historyCaption: "Execution history: status, latency, affected rows, and one-click replay.",
    connectCaption: "Connections: 36 database ecosystems with read-only production guards.",
    ctaDownload: "Download from Releases",
    ctaSource: "View source",
    metaStack: "Rust 2024 · GPUI · macOS / Linux / Windows",
    enginesLead: "One adapter surface. Three engines.",
    engSqlite: "WAL, in-memory, local files",
    engPg: "Async driver, TLS, schemas",
    engMy: "5.7 / 8.x, transactions and types",
    wbTitle: "What one session actually does",
    wbLede:
      "These are not mockups. This is zqlcrab running: write SQL, browse data, inspect schemas, and verify plans in one native window.",
    tabConsole: "SQL console",
    tabGrid: "Data grid",
    tabSchema: "Schema",
    tabExplain: "Explain plan",
    tabHistory: "History",
    tabConnect: "Connections",
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
    explainH: "Tree-structured Explain analysis",
    explainP:
      "Inspect execution nodes, estimated costs, and expensive steps in one click to identify bottlenecks early.",
    histH: "Comprehensive audit footprint",
    histP:
      "Execution status, millisecond latency, affected counts, and timestamps stay ready to reload or rerun.",
    connectH: "Protected connection workflows",
    connectP:
      "Connect across 36 database engine choices with instant read-only guards to protect production workloads.",
    nativeTitle: "Why not Electron",
    nativeLede:
      "No bloated webview wrappers or hundreds of megabytes in idle memory. zqlcrab picks Rust and Zed’s GPUI for raw performance and tactile native feel.",
    nativeCard1H: "GPU-accelerated rendering",
    nativeCard1P:
      "Draws directly through Metal, Vulkan, and DirectX to sustain smooth 120 FPS. Scroll through hundreds of thousands of rows without tears.",
    nativeCard2H: "Sub-millisecond input response",
    nativeCard2P:
      "No browser DOM layers or IPC lag. Keystrokes land straight onto the render frame with sub-1ms latency, feeling as immediate as a terminal.",
    nativeCard3H: "Ultra-lean memory footprint",
    nativeCard3P:
      "No embedded Chromium bundle or background Node runtime. Idle usage sits in tens of megabytes, with instantaneous cold starts.",
    nativeCard4H: "Genuine OS platform integration",
    nativeCard4P:
      "Follows human interface guidelines with native menu bars, global shortcut system, and polished CrabStudio dual themes.",
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
