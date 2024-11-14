var client = false
var SUPABASE_INSTANCE = callInstanceSupabase()

// function getUrlApiSupabase() {
//     return "https://pwtiifufusfauvabgczg.supabase.co";
// }

// function getTokenSupabase() {
//     return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3dGlpZnVmdXNmYXV2YWJnY3pnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkxMTYzNTMsImV4cCI6MjA0NDY5MjM1M30.9ezZ6cRMDJAaphZt_2R8Xi33AExLxXQAFmGYs6xqPME";
// }

function getUrlApiSupabase () {
  return 'https://wbgctstptayrxskwaqld.supabase.co'
}

function getTokenSupabase () {
  // TOKEN DE API
  const token_api_anon =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndiZ2N0c3RwdGF5cnhza3dhcWxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg5NTM5NzgsImV4cCI6MjA0NDUyOTk3OH0.6qOP2ANbwnxHosWnupL8Wbdhl7AtpZNAOrcBZ91Hzzk'

  return token_api_anon
}

function getTokenAuthenticatedUser () {
  const token_api_user_athenticated =
    'eyJhbGciOiJIUzI1NiIsImtpZCI6IkFmQnBlSlN3RnBBYnZXamkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3diZ2N0c3RwdGF5cnhza3dhcWxkLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiJkYjAxYzJiZC1lNDdkLTQ4NzktYmViMC0xYjY1NDg3YTFkMTIiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzI5NjA5MTQyLCJpYXQiOjE3Mjk2MDU1NDIsImVtYWlsIjoiZ2VsdmF6aW9AZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6eyJlbWFpbCI6ImdlbHZhemlvQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicGhvbmVfdmVyaWZpZWQiOmZhbHNlLCJzdWIiOiJkYjAxYzJiZC1lNDdkLTQ4NzktYmViMC0xYjY1NDg3YTFkMTIifSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJwYXNzd29yZCIsInRpbWVzdGFtcCI6MTcyOTYwNTU0Mn1dLCJzZXNzaW9uX2lkIjoiY2QzYmNjYjItM2EwYi00OGRlLWIzYjEtZDFhN2FkZTZiOTM4IiwiaXNfYW5vbnltb3VzIjpmYWxzZX0.kDQRwVCo8ciNoqg1yfbwNjAEsjHX_smHCLWz2kJUpZg'

  return token_api_user_athenticated
}

function callInstanceSupabase () {
  if (!client) {
    let { createClient } = supabase
    let url = getUrlApiSupabase()
    client = createClient(url, getTokenSupabase())
  }
  return client
}

async function listarDados (tabela) {
  let aDados = await getAllDadosFromTabela(tabela)

  getSessionData()

  return aDados
}

async function getAllDadosFromTabela (tabela) {
  let { data: aDadosRetorno, error } = await SUPABASE_INSTANCE.from(tabela)
    .select('*')
    // Ordenando pelo id de forma ascendente, do menor para o maior
    .order('id', { ascending: true })

  if (error) {
    alert('Erro:' + error)
  }

  const dados = aDadosRetorno

  console.log(dados)

  return dados
}

async function inserirUsuario () {
  const usunome_param = document.querySelector('#usunome').value
  const usulogin_param = document.querySelector('#usulogin').value
  const ususenha_param = document.querySelector('#ususenha').value

  const { data, error } = await SUPABASE_INSTANCE.from('usuario')
    .insert([
      {
        usunome: usunome_param,
        usulogin: usulogin_param,
        ususenha: ususenha_param
      }
    ])
    .select()

  if (error) {
    alert('Erro ao inserir!' + JSON.stringify(error))
    return false
  }

  alert('Usuario inserido: ' + JSON.stringify(data))

  // APOS INSERIR USUARIO, ATUALIZA A LISTA NA TELA - CONSULTA
  listarDados('usuario')
}

async function excluirUsuario (usucodigo) {
  const { error } = await SUPABASE_INSTANCE.from('usuario')
    .delete()
    .eq('usucodigo', usucodigo)

  // APOS EXCLUIR USUARIO, ATUALIZA A LISTA NA TELA - CONSULTA
  listarDados('usuario')
}

async function updateUsuario (usucodigo) {
  usucodigo = parseInt(usucodigo)

  // const usucodigo = parseInt(document.querySelector("#combo_usuario").value);
  // const codigoatividade = parseInt(document.querySelector("#codigoatividade").value);
  // const statuscorrecao = document.querySelector("#statuscorrecao").checked ? "SIM" : "NAO";

  const usunome_param = document.querySelector('#usunome').value
  const usulogin_param = document.querySelector('#usulogin').value
  const ususenha_param = document.querySelector('#ususenha').value

  const port = 'usuario'
  const { data, error } = await SUPABASE_INSTANCE.from(port)
    .update([
      {
        usunome: usunome_param,
        usulogin: usulogin_param,
        ususenha: ususenha_param
      }
    ])
    .eq('usucodigo', usucodigo)
    .select()

  // APOS ALTERAR USUARIO, ATUALIZA A LISTA NA TELA - CONSULTA
  listarDados('usuario')
}

async function getProdutoById (id) {
  let { data: produto, error } = await SUPABASE_INSTANCE.from('produto')
    .select('*')
    // Filters
    .eq('id', id)

  return produto
}

async function getSessionData () {
  // autentica o usuario
  const { data, error } = await SUPABASE_INSTANCE.auth.signInWithPassword({
    email: 'gelvazio@gmail.com',
    password: 'uHcnxHbmyLatVHvBCxrM'
  })

  console.log('User authenticated data')

  console.log(data)
  console.log('acces_token:' + data.session.access_token)

  const { dataSession, error2 } = await SUPABASE_INSTANCE.auth.getSession()

  console.log('User authenticated session data')
  console.log(dataSession)
}
