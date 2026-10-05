const fs = require('node:fs')
const path = require('node:path')
function render(palette) {
  const p = { ...palette }
  for (const [k,v] of Object.entries(palette)) {
    if (!/^#[0-9a-f]{6}$/i.test(v)) throw new Error(`Invalid palette role: ${k}`)
    const rgb = [1,3,5].map(i => parseInt(v.slice(i,i+2),16))
    p[k+'_rgb'] = rgb.join(', ')
  }
  const [r,g,b] = [1,3,5].map(i => parseInt(palette.accent.slice(i,i+2),16)/255)
  const high=Math.max(r,g,b), low=Math.min(r,g,b), delta=high-low, light=(high+low)/2
  let hue=0
  if (delta) hue=(high===r ? (g-b)/delta+(g<b?6:0) : high===g ? (b-r)/delta+2 : (r-g)/delta+4)*60
  p.accent_h=hue.toFixed(2); p.accent_s=(delta ? delta/(1-Math.abs(2*light-1))*100 : 0).toFixed(2); p.accent_l=(light*100).toFixed(2)
  return fs.readFileSync(path.join(__dirname,'template.css'),'utf8').replace(/\{\{(\w+)\}\}/g, (_,k) => {
    if (!(k in p)) throw new Error(`Unknown palette role: ${k}`)
    return p[k]
  })
}
module.exports={render}
if (require.main===module) process.stdout.write(render(require('./default.json')))
