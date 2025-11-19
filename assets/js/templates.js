
export const TEMPLATES = {
  home: `
    <section aria-labelledby="home-title" class="grid">
      <div class="col-12 card">
        <h1 id="home-title">Bem-vindo à ONG Esperança</h1>
        <img src="assets/img/banner.png" alt="Crianças em ação social">
        <p>Promovemos impacto social por meio de educação, saúde e desenvolvimento comunitário.</p>
      </div>

      <div class="col-6 card">
        <h2>Nossa Missão</h2>
        <p>Transformar vidas através de projetos sociais sustentáveis e inclusivos.</p>
      </div>

      <div class="col-6 card">
        <h2>Valores</h2>
        <ul>
          <li>Transparência</li>
          <li>Compromisso</li>
          <li>Empatia</li>
        </ul>
      </div>
    </section>
  `,

  projetos: `
    <section aria-labelledby="projetos-title">
      <h1 id="projetos-title">Projetos Sociais</h1>
      <div class="grid">
        <article class="col-6 card project-card" aria-labelledby="proj1-title">
          <h2 id="proj1-title">Projeto Sementes do Futuro</h2>
          <img src="assets/img/projeto1.jpg" alt="Crianças estudando">
          <p>Reforço escolar para crianças entre 6 e 14 anos.</p>
          <span class="badge primary" aria-hidden="true">Educação</span>
        </article>

        <article class="col-6 card project-card" aria-labelledby="proj2-title">
          <h2 id="proj2-title">Como Ser Voluntário</h2>
          <img src="assets/img/voluntarios.jpg" alt="Voluntários reunidos">
          <p>Participe das nossas ações e faça a diferença.</p>
          <span class="badge" aria-hidden="true">Comunidade</span>
        </article>
      </div>
    </section>
  `,

  cadastro: `
    <section aria-labelledby="cadastro-title">
      <h1 id="cadastro-title">Cadastro de Voluntário / Doador</h1>

      <div id="alert-area" role="status" aria-live="polite"></div>

      <form id="cadastroForm" novalidate>
        <fieldset>
          <legend>Dados pessoais</legend>
          <label for="nome">Nome completo *</label>
          <input id="nome" name="nome" type="text" required minlength="3" aria-required="true">

          <label for="email">E-mail *</label>
          <input id="email" name="email" type="email" required aria-required="true">

          <label for="cpf">CPF *</label>
          <input id="cpf" name="cpf" type="text" inputmode="numeric" placeholder="000.000.000-00" required aria-required="true">

          <label for="telefone">Telefone *</label>
          <input id="telefone" name="telefone" type="text" inputmode="tel" placeholder="(00) 00000-0000" required aria-required="true">

          <label for="nascimento">Data de nascimento *</label>
          <input id="nascimento" name="nascimento" type="date" required aria-required="true">
        </fieldset>

        <fieldset>
          <legend>Endereço</legend>
          <label for="cep">CEP *</label>
          <input id="cep" name="cep" type="text" inputmode="numeric" placeholder="00000-000" required>

          <label for="endereco">Endereço *</label>
          <input id="endereco" name="endereco" type="text" required>

          <label for="cidade">Cidade *</label>
          <input id="cidade" name="cidade" type="text" required>

          <label for="estado">Estado *</label>
          <select id="estado" name="estado" required>
            <option value="">Selecione</option>
            <option value="SP">SP</option>
            <option value="RJ">RJ</option>
            <option value="MG">MG</option>
          </select>
        </fieldset>

        <fieldset>
          <legend>Preferências</legend>
          <label><input type="checkbox" id="newsletter" name="newsletter"> Quero receber newsletter</label>
          <label for="interesse">Interesse</label>
          <select id="interesse" name="interesse" required>
            <option value="voluntariado">Voluntariado</option>
            <option value="doacao">Doação</option>
            <option value="outros">Outros</option>
          </select>
        </fieldset>

        <div class="form-actions">
          <button class="btn" type="submit">Enviar cadastro</button>
          <button class="btn ghost" type="reset">Limpar</button>
        </div>
      </form>
    </section>
  `
};
