# zqlcrab-web

Public site for [zqlcrab](https://github.com/hyzwhu/zqlcrab), hosted at [alcheme.top](https://alcheme.top).

Static HTML. GitHub Pages serves the files; Cloudflare DNS should point `alcheme.top` at Pages.

## Cloudflare DNS

The domain already uses Cloudflare nameservers (`anahi.ns.cloudflare.com`, `walt.ns.cloudflare.com`). There is no apex A/CNAME yet. In the `alcheme.top` zone, add **DNS only** (grey cloud) records so GitHub can verify the domain:

| Type | Name | Target | Proxy |
| :--- | :--- | :--- | :--- |
| CNAME | `@` | `hyzwhu.github.io` | DNS only |
| CNAME | `www` | `hyzwhu.github.io` | DNS only |

SSL/TLS mode: **Full**. After GitHub shows the domain as verified, HTTPS can be enforced in the Pages settings.

Equivalent A records if you prefer not to flatten CNAME:

`185.199.108.153` `185.199.109.153` `185.199.110.153` `185.199.111.153`

## Local

```bash
python3 -m http.server 4173
```

Open http://127.0.0.1:4173

## Links

- App: https://github.com/hyzwhu/zqlcrab
- Releases: https://github.com/hyzwhu/zqlcrab/releases
- This site: https://github.com/hyzwhu/zqlcrab-web
