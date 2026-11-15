import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = fileURLToPath(new URL('../', import.meta.url))
let html = await readFile(path.join(root, 'dist/index.html'), 'utf8')
// The offline app creates its own DOM, using absolute archive URLs for file://.
// Production HTTP pages retain the fully prerendered HTML and hydrate it.
html = html.replace(/<div id="root">[\s\S]*<\/div>(?=\s*<\/body>)/, '<div id="root"></div>')
for (const match of [...html.matchAll(/<script type="module" crossorigin src="([^"]+)"><\/script>/g)]) {
  const script = await readFile(path.join(root, 'dist', match[1]), 'utf8')
  html = html.replace(match[0], () => `<script type="module">${script.replace(/<\/script/gi, '<\\/script')}</script>`)
}
for (const match of [...html.matchAll(/<link rel="stylesheet" crossorigin href="([^"]+)">/g)]) {
  const css = await readFile(path.join(root, 'dist', match[1]), 'utf8')
  html = html.replace(match[0], () => `<style>${css}</style>`)
}
// Archive navigation from file:// opens the deployed site. In-page dialogs still work offline.
html = html.replace(/href="\/(?!\/)([^"]*)"/g, 'href="https://haohan.sotoolai.com/$1"')
await writeFile(path.join(root, '浩汉-demo.html'), html)
console.log(`Exported 浩汉-demo.html (${Buffer.byteLength(html).toLocaleString()} bytes)`)
