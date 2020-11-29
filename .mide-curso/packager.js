const fs = require('fs')
const S = require('string')

const manifest = JSON.parse(fs.readFileSync('./manifest.json'))

const mecManifest = manifest.unidades.map((u) => ({
  identificador: S(u.id).underscore().s,
  nome: u.titulo,
  descricao: u.descricao,
  permitePorcentagem: true,
  identificadorPai: '',
  topicos: u.aulas.map((a) => ({
    identificadorPai: S(u.id).underscore().s,
    identificador: S(a.id).underscore().s,
    nome: a.titulo
  }))
}))

manifest.unidades.forEach((u) => {
  const identificador = S(u.id).underscore().s

  
  fs.writeFileSync(
    './dist/'+ identificador  +'.html',
    `
      <script>window.location.assign('./index.html')</script>
    `,
    { mode: 0o755 }
  )
})

try {
  fs.writeFileSync(
    './dist/configuracao_conteudo.json',
    JSON.stringify(mecManifest),
    { mode: 0o755 }
  )
} catch (err) {
  // An error occurred
  console.error(err)
}
