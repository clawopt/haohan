import { build } from 'esbuild'
import { createRequire } from 'node:module'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = fileURLToPath(new URL('../', import.meta.url))
const dist = path.join(root, 'dist')
// Keep a single external React instance for both the app and server renderer.
const bundle = await build({
  absWorkingDir: root, entryPoints: ['src/seo.tsx'], bundle: true, write: false,
  platform: 'node', format: 'cjs', packages: 'external', jsx: 'automatic',
  define: { 'process.env.NODE_ENV': '"production"' },
})
const require = createRequire(import.meta.url)
const module = { exports: {} }
new Function('require', 'module', 'exports', bundle.outputFiles[0].text)(require, module, module.exports)
const { renderHome, staticPages, machineDocuments } = module.exports
const template = await readFile(path.join(dist, 'index.html'), 'utf8')
const home = renderHome()
if (!template.includes('<!--seo-head-start-->') || !template.includes('<!--seo-head-end-->') || !template.includes('<div id="root"></div>')) throw new Error('Missing prerender markers in index.html')
await writeFile(path.join(dist, 'index.html'), template.replace(/<!--seo-head-start-->[\s\S]*?<!--seo-head-end-->/, () => home.head).replace('<div id="root"></div>', () => `<div id="root">${home.html}</div>`))
const paths = ['/']
for (const page of staticPages()) {
  if (paths.includes(page.path)) throw new Error(`Duplicate page: ${page.path}`)
  // Browsers and static servers decode URL segments before locating files.
  const decodedPath = decodeURIComponent(page.path)
  const target = path.join(dist, decodedPath.endsWith('/') ? `${decodedPath.slice(1)}index.html` : decodedPath.slice(1))
  await mkdir(path.dirname(target), { recursive: true })
  await writeFile(target, page.html)
  paths.push(page.path)
}
for (const [name, content] of Object.entries(machineDocuments(paths))) await writeFile(path.join(dist, name), content)
console.log(`Prerendered home and ${paths.length - 2} indexable archive pages; generated robots.txt, sitemap.xml and optional LLM text files.`)
