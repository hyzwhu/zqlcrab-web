const COPY = {
  zh: {
    skip: "跳到正文",
    navWorkbench: "工作台",
    navDownload: "下载",
    heroTitle: "GPU 原生的数据库工作台",
    heroLede:
      "zqlcrab 用 Rust 和 Zed 的 GPUI 渲染，而不是 Electron 套一层网页。启动快、输入跟手、内存占用小。给要直接碰 SQLite、PostgreSQL、MySQL 的开发者和 DBA。",
    ctaDownload: "打开 Releases 下载",
    ctaSource: "查看源码",
    metaStack: "Rust 2024 · GPUI · macOS / Linux / Windows",
    enginesLead: "同一套适配器，三种引擎。",
    engSqlite: "WAL、内存库、本地文件",
    engPg: "异步驱动、TLS、Schema",
    engMy: "5.7 / 8.x，事务与类型映射",
    wbTitle: "一次会话里做完的事",
    wbLede:
      "不是功能清单。下面这扇窗口就是客户端：连库、写 SQL、改格子、看表结构、提交前先审 changeset。",
    tabConsole: "SQL 控制台",
    tabGrid: "数据表格",
    tabSchema: "表结构",
    tabHistory: "查询历史",
    safeMode: "只读保护可开",
    consoleH: "格式化、执行、看计划",
    consoleP:
      "Cmd+Enter / Ctrl+Enter 执行。Alt+Shift+F 格式化。Cmd+Shift+E 打开 EXPLAIN 树。查询历史可搜索、可重跑。结果导出 CSV、JSON、Markdown、SQL INSERT。",
    gridH: "改格子，先审再写库",
    gridP:
      "双击编辑。插入空行或克隆一行。删除带删除线。所有 INSERT / UPDATE / DELETE 先收进 changeset，生成一段事务 SQL，确认后才提交。",
    schemaH: "建表时就能看到方言 DDL",
    schemaP:
      "可视化加列、主键、自增、默认值、注释。索引设计器支持多列唯一/普通索引。可以直接执行，或把 DDL 丢进控制台再改。",
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
    ctaDownload: "Download from Releases",
    ctaSource: "View source",
    metaStack: "Rust 2024 · GPUI · macOS / Linux / Windows",
    enginesLead: "One adapter surface. Three engines.",
    engSqlite: "WAL, in-memory, local files",
    engPg: "Async driver, TLS, schemas",
    engMy: "5.7 / 8.x, transactions and types",
    wbTitle: "What one session actually does",
    wbLede:
      "Not a feature grid. This window is the client: connect, write SQL, edit cells, inspect schema, review the changeset before it hits the disk.",
    tabConsole: "SQL console",
    tabGrid: "Data grid",
    tabSchema: "Schema",
    tabHistory: "History",
    safeMode: "Read-only guard",
    consoleH: "Format, run, explain",
    consoleP:
      "Cmd+Enter / Ctrl+Enter runs. Alt+Shift+F formats. Cmd+Shift+E opens the EXPLAIN tree. History is searchable and replayable. Export CSV, JSON, Markdown, or SQL INSERT.",
    gridH: "Edit cells, then review",
    gridP:
      "Double-click to edit. Insert a blank row or clone one. Deletes strike through. INSERT / UPDATE / DELETE land in a changeset and become one transaction script you confirm.",
    schemaH: "Dialect DDL while you design",
    schemaP:
      "Columns, primary keys, serials, defaults, comments. Multi-column unique or normal indexes. Run it, or open the DDL in the console and change it.",
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

document.getElementById("lang-toggle").addEventListener("click", () => {
  const next = document.documentElement.lang.startsWith("zh") ? "en" : "zh";
  applyLang(next);
});

initLang();
initTabs();
