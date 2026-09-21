# zqlcrab-web

Public site for [zqlcrab](https://github.com/hyzwhu/zqlcrab), hosted at [zqlcrab.alcheme.top](https://zqlcrab.alcheme.top).

Static HTML. GitHub Pages serves the files; Cloudflare DNS points `zqlcrab.alcheme.top` at Pages.

## Cloudflare DNS

The domain uses Cloudflare nameservers (`anahi.ns.cloudflare.com`, `walt.ns.cloudflare.com`). In the `alcheme.top` zone, add this **DNS only** (grey cloud) record so GitHub can verify the domain:

| Type | Name | Target | Proxy |
| :--- | :--- | :--- | :--- |
| CNAME | `zqlcrab` | `hyzwhu.github.io` | DNS only |

SSL/TLS mode: **Full**. After GitHub shows the domain as verified, HTTPS can be enforced in the Pages settings.

## Local

```bash
python3 -m http.server 4173
```

Open http://127.0.0.1:4173

## Links

- App: https://github.com/hyzwhu/zqlcrab
- Releases: https://github.com/hyzwhu/zqlcrab/releases
- This site: https://github.com/hyzwhu/zqlcrab-web
