let SUPABASE_INSTANCE = callInstanceSupabase();

function getTokenSupabase() {
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndiZ2N0c3RwdGF5cnhza3dhcWxkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyODk1Mzk3OCwiZXhwIjoyMDQ0NTI5OTc4fQ.0Sr6SO5gPQxSUNGoLb_LfvU7Cxgth7AST7-kc8aomlQ";
}

function callInstanceSupabase() {
    const { createClient } = supabase;
    const url = "https://wbgctstptayrxskwaqld.supabase.co";
    const client = createClient(url, getTokenSupabase());
    return client;
}

async function getAllExerciciosUsuario() {
    const usucodigo = 1; //parseInt(document.querySelector("#usucodigo_logado").value);
    const codigoatividade = 1; //parseInt(document.querySelector("#codigoatividade").value);

    let { data: exercicioaluno, error } = await SUPABASE_INSTANCE
        .from('exercicioaluno')
        .select("*")
        // Filters
        .eq('usucodigo', usucodigo)
        .eq('codigoatividade', codigoatividade);

    const aDados = exercicioaluno;
    return aDados;
}

async function getDadosExercicioBancoDados(usucodigo, codigoatividade, codigoexercicio) {
    let { data: exercicioaluno, error } = await SUPABASE_INSTANCE
        .from('exercicioaluno')
        .select("*")
        // Filters
        .eq('usucodigo', usucodigo)
        .eq('codigoatividade', codigoatividade)
        .eq('codigoexercicio', parseInt(codigoexercicio));

    const aDados = exercicioaluno[0];

    return aDados;
}

async function existeExercicioAluno(codigoexercicio) {
    const usucodigo = parseInt(document.querySelector("#usucodigo_logado").value);
    const codigoatividade = parseInt(document.querySelector("#codigoatividade").value);

    // WITH FILTERING
    let { data: exercicioaluno, error } = await SUPABASE_INSTANCE
        .from('exercicioaluno')
        .select("*")
        // Filters
        .eq('usucodigo', usucodigo)
        .eq('codigoatividade', codigoatividade)
        .eq('codigoexercicio', parseInt(codigoexercicio));

    if (Array.isArray(exercicioaluno)) {
        if (exercicioaluno.length > 0) {
            return true;
        }
    }

    return false;

    // WITH FILTERING
    // let { data: exercicioaluno, error } = await SUPABASE_INSTANCE
    //     .from('exercicioaluno')
    //     .select("*")
    //     // Filters
    //     .eq('column', 'Equal to')
    //     .gt('column', 'Greater than')
    //     .lt('column', 'Less than')
    //     .gte('column', 'Greater than or equal to')
    //     .lte('column', 'Less than or equal to')
    //     .like('column', '%CaseSensitive%')
    //     .ilike('column', '%CaseInsensitive%')
    //     .is('column', null)
    //     .in('column', ['Array', 'Values'])
    //     .neq('column', 'Not equal to')
    //     // Arrays
    //     .contains('array_column', ['array', 'contains'])
    //     .containedBy('array_column', ['contained', 'by'])
}

async function confirmarCorrecao(codigoexercicio) {
    const usucodigo_logado = parseInt(document.querySelector("#usucodigo_logado").value);
    const usucodigo = parseInt(document.querySelector("#combo_usuario").value);

    if (usucodigo_logado == usucodigo && usucodigo != 1) {
        mostraMensagem("Você não tem permissão para corrigir seu proprio exercicio!");
        return false;
    }

    const existeExercicio = await existeExercicioAluno(codigoexercicio);
    if (existeExercicio) {
        const response = await updateExercicioAluno(codigoexercicio);
    } else {
        const response = await insereExercicioAluno(codigoexercicio);
    }

    // fecha o modal de Exercicios
    document.querySelector("#acaoFecharModal").click();

    // Recarrega a consulta
    document.querySelector("#detalheAllExercicios").click();
}

async function updateExercicioAluno(codigoexercicio) {
    codigoexercicio = parseInt(codigoexercicio);

    const usucodigo = parseInt(document.querySelector("#combo_usuario").value);
    const codigoatividade = parseInt(document.querySelector("#codigoatividade").value);
    const statuscorrecao = document.querySelector("#statuscorrecao").checked ? "SIM" : "NAO";
    const exerciciofeito = document.querySelector("#exerciciofeito").checked ? "SIM" : "NAO";
    const exerciciorodando = document.querySelector("#exerciciorodando").checked ? "SIM" : "NAO";
    const exerciciocorreto = document.querySelector("#exerciciocorreto").checked ? "SIM" : "NAO";

    const port = "exercicioaluno";
    const { data, error } = await SUPABASE_INSTANCE
        .from(port)
        .update([{
            usucodigo: usucodigo,
            codigoatividade: codigoatividade,
            codigoexercicio: codigoexercicio,
            statuscorrecao: statuscorrecao,
            exerciciofeito: exerciciofeito,
            exerciciorodando: exerciciorodando,
            exerciciocorreto: exerciciocorreto
        }])
        .eq('usucodigo', usucodigo)
        .eq('codigoatividade', codigoatividade)
        .eq('codigoexercicio', parseInt(codigoexercicio))
        .select();
}

async function insereExercicioAluno(codigoexercicio) {
    codigoexercicio = parseInt(codigoexercicio);

    // Pega o usuario do combo selecionado
    const usucodigo = parseInt(document.querySelector("#combo_usuario").value);


    const codigoatividade = parseInt(document.querySelector("#codigoatividade").value);
    const exerciciofeito = document.querySelector("#exerciciofeito").checked ? "SIM" : "NAO";
    const exerciciorodando = document.querySelector("#exerciciorodando").checked ? "SIM" : "NAO";
    const exerciciocorreto = document.querySelector("#exerciciocorreto").checked ? "SIM" : "NAO";
    const statuscorrecao = document.querySelector("#statuscorrecao").checked ? "SIM" : "NAO";

    const port = "exercicioaluno";
    const { data, error } = await SUPABASE_INSTANCE
        .from(port)
        .insert([{
            usucodigo: usucodigo,
            codigoatividade: codigoatividade,
            codigoexercicio: codigoexercicio,
            statuscorrecao: statuscorrecao,
            exerciciofeito: exerciciofeito,
            exerciciorodando: exerciciorodando,
            exerciciocorreto: exerciciocorreto
        }])
        .select();

    console.log(`Inserindo dados de:${port}`);

    if (error != null) {
        console.log("Erro ao inserir!" + port + "Erro:" + JSON.stringify(error));
    }

    console.log(data);
}

async function insereUsuarioAluno(usucodigo, usunome, usulogin, usuemail, ususenha) {

    const port = "usuario";
    const { data, error } = await SUPABASE_INSTANCE
        .from(port)
        .insert([{
            usucodigo: usucodigo,
            usunome: usunome,
            usulogin: usulogin,
            usuemail: usuemail,
            ususenha: ususenha
        }])
        .select();

    console.log(`Inserindo dados de:${port}`);

    if (error != null) {
        console.log("Erro ao inserir!" + port + "Erro:" + JSON.stringify(error));
    }

    console.log(data);
}

async function existeUsuarioAluno(usucodigo) {
    // WITH FILTERING
    let { data: usuario, error } = await SUPABASE_INSTANCE
        .from('usuario')
        .select("*")
        // Filters
        .eq('usucodigo', parseInt(usucodigo));

    if (Array.isArray(usuario)) {
        if (usuario.length > 0) {
            return true;
        }
    }

    return false;
}

function listarDados(tabela) {
    let aDados = getAllDadosFromTabela(tabela);
    aDados.then(function (data) {
        console.log("dados retornados!!!!");
        console.log(data);
        document.querySelector("#resultado").innerHTML = JSON.stringify(data);
    });
}

async function getAllDadosFromTabela(tabela) {
    let { data: aDadosRetorno, error } = await SUPABASE_INSTANCE
        .from(tabela)
        .select("*");

    if (error) {
        alert("Erro:" + error);
    }

    const dados = aDadosRetorno;

    console.log(dados);

    return dados;
}

async function loginSupabase() {
    const email = "gelvaziosenac2022@gmail.com";
    const password = "FQ@xLh~?4a7ppuL";

    // const UserSupabase = SUPABASE_INSTANCE.auth.getUser();

    const { aDados, error } = await SUPABASE_INSTANCE
        .auth
        .signInWithPassword({ email, password });

    debugger;

    document.querySelector("#resultado").innerHTML = JSON.stringify(aDados);

    console.log("Data Supabase:");
    console.log(JSON.stringify(aDados));
}

async function cadastrarLoginSupabase() {
    const email = "gelvazio@gmail.com";
    const password = "Senac.2024";

    const { data, error } = await SUPABASE_INSTANCE
        .auth.signUp({
            email,
            password
        });

    document.querySelector("#resultado").innerHTML = JSON.stringify(data);

    console.log("Data Supabase Usuario Cadastrado:");

    console.log(JSON.stringify(data));
}


async function cadastrarUsuarioSupabase2() {

    // documentacao
    // https://supabase.com/docs/guides/auth/passwords
    const { data, error } = await SUPABASE_INSTANCE.auth.signUp({
        // email: 'gelvazio@saisrv.tech',
        email: 'gelvazio@gmail.com',
        password: 'saisrv.2024!'
    });

    if (error) {
        alert("Error:" + error);
    }

    console.log("Data Supabase Usuario Cadastrado:");

    console.log(JSON.stringify(data));
}

async function cadastrarUsuarioSupabase() {
    // const email = "gelvazio@gmail.com";
    // const password = "Senac.123456";


    const { data, error } = await SUPABASE_INSTANCE
        .from('usuario')
        .insert([
            { nome: 'Teste 123' },
            { email: 'teste@email.com' },
            { info: 'Info Usuario' },
            { senha: '123456' },
            { permissao: 1 },
            { grupo: 1 },
            { cargo: 1 },
        ])
        .select();

    document.querySelector("#resultado").innerHTML = JSON.stringify(data);

    console.log("Data Supabase Usuario Cadastrado:");

    console.log(JSON.stringify(data));
}

function loadVariaveis() {
    const apiKey = getApiKey();

    alert(apiKey);
}

