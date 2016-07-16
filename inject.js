// console.log('tumpuk loaded')
// alert('holla')

const wrapScript = (script)=>{
  return `
  (function(){
    chrome = undefined
    ${script}
  })()
  `
}
const subScript2 = `
  console.log('subscript2', chrome)
  subScript = "console.log('subscript injected subscript2')"
  const scriptEl = document.createElement("script");
  scriptEl.textContent = subScript
  document.head.appendChild(scriptEl)
`

const script = `
  console.log(chrome)
  subScript = \`${subScript2}\`
  const scriptEl = document.createElement("script");
  scriptEl.textContent = subScript
  document.head.appendChild(scriptEl)
`
const wrappedScript = wrapScript(script)
const scriptEl = document.createElement("script");
scriptEl.textContent = wrappedScript
document.head.appendChild(scriptEl)
console.log('subScript2', subScript2)
console.log('injected', wrappedScript)
