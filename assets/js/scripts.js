const templates = {
    home: `
        <section class="hero">
            <h1>Bem-vindo à ONG Esperança</h1>
            <p>Transformando vidas por meio de projetos sociais.</p>
        </section>

        <section>
            <h2>Nossa Missão</h2>
            <p>Gerar impacto social através de educação e desenvolvimento comunitário.</p>
        </section>

        <section>
            <h2>Valores</h2>
            <ul>
                <li>Transparência</li>
                <li>Compromisso</li>
                <li>Empatia</li>
            </ul>
        </section>
    `,

    projetos: `
        <h1>Projetos Sociais</h1>
        <div class="grid">
            <div class="card">
                <h2>Projeto Sementes do Futuro</h2>
                <span class="badge primary">Educação</span>
                <p>Reforço escolar para crianças de 6 a 14 anos.</p>
            </div>

            <div class="card">
                <h2>Voluntariado</h2>
                <span class="badge">Ação Social</span>
                <p>Participe das nossas ações comunitárias.</p>
            </div>
        </div>
    `,

    cadastro: `
        <h1>Cadastro de Voluntário / Doador</h1>

        <div id="alert-area"></div>

        <form id="cadastroForm">
            <label>Nome completo *</label>
            <input id="nome" type="text" required minlength="3">

            <label>E-mail *</label>
            <input id="email" type="email" required>

            <label>CPF *</label>
            <input id="cpf" type="text" placeholder="000.000.000-00">

            <label>Telefone *</label>
            <input id="telefone" type="text" placeholder="(00) 00000-0000">

            <label>Data de nascimento *</label>
            <input id="nascimento" type="date">

            <button class="btn" type="submit">Enviar cadastro</button>
        </form>
    `
};

function loadPage(route) {
    const app = document.getElementById("app");
    app.innerHTML = templates[route] || templates.home;

    if (route === "cadastro") initFormValidation();
}

function router() {
    const route = location.hash.replace("#", "") || "home";
    loadPage(route);
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);


function initFormValidation() {
    const form = document.getElementById("cadastroForm");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const cpf = document.getElementById("cpf");
        const telefone = document.getElementById("telefone");
        const nascimento = document.getElementById("nascimento");

        let erros = [];

        if (nome.value.trim().length < 3)
            erros.push("O nome deve ter pelo menos 3 caracteres.");

        if (!email.value.includes("@"))
            erros.push("E-mail inválido.");

        if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf.value))
            erros.push("CPF inválido. Use o formato 000.000.000-00.");

        if (telefone.value.length < 10)
            erros.push("Telefone inválido.");

        if (!nascimento.value)
            erros.push("Informe uma data de nascimento.");

        if (erros.length > 0) {
            showAlert(erros.join("<br>"), "error");
            return;
        }

        showAlert("Cadastro enviado com sucesso!", "success");
        form.reset();
    });
}



function showAlert(msg, type = "success") {
    const alertArea = document.getElementById("alert-area");
    alertArea.innerHTML = `
        <div class="alert ${type}">
            ${msg}
        </div>
    `;

    setTimeout(() => {
        alertArea.innerHTML = "";
    }, 4000);
}

