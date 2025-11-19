
(async function () {

  let TEMPLATES, ValidatorsModule, StorageModule;
  try {
    const modTemplates = await import('./templates.js');
    TEMPLATES = modTemplates.TEMPLATES;
    const modValidators = await import('./validators.js');
    ValidatorsModule = modValidators.Validators;
    const modStorage = await import('./storage.js');
    StorageModule = modStorage.Storage;
  } catch (err) {
    
    TEMPLATES = window.TEMPLATES;
    ValidatorsModule = window.Validators;
    StorageModule = window.Storage;
  }

  const appRoot = document.querySelector('.app-root');

  function render(route='home') {
    const content = TEMPLATES[route] || TEMPLATES.home;
    appRoot.innerHTML = content;
  
    if (route === 'cadastro') initForm();
    const mainHeading = appRoot.querySelector('h1') || appRoot.querySelector('h2');
    if (mainHeading) mainHeading.tabIndex = -1, mainHeading.focus();
  }

  function router() {
    const route = location.hash.replace('#','') || 'home';
    render(route);
  }

  window.addEventListener('hashchange', router);
  window.addEventListener('load', router);

  function initForm() {
    const form = document.getElementById('cadastroForm');
    const alertArea = document.getElementById('alert-area');

    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // coletar campos
      const data = {
        nome: form.nome.value.trim(),
        email: form.email.value.trim(),
        cpf: form.cpf.value.trim(),
        telefone: form.telefone.value.trim(),
        nascimento: form.nascimento.value,
        cep: form.cep ? form.cep.value.trim() : '',
        endereco: form.endereco ? form.endereco.value.trim() : '',
        cidade: form.cidade ? form.cidade.value.trim() : '',
        estado: form.estado ? form.estado.value : '',
        interesse: form.interesse ? form.interesse.value : '',
        newsletter: form.newsletter ? form.newsletter.checked : false
      };

      const errors = [];

      if (!ValidatorsModule.isRequired(data.nome) || !ValidatorsModule.minLength(data.nome,3)) errors.push('Nome inválido.');
      if (!ValidatorsModule.isEmail(data.email)) errors.push('E-mail inválido.');
      if (!ValidatorsModule.isCPF(data.cpf)) errors.push('CPF inválido. Use 000.000.000-00.');
      if (!ValidatorsModule.isPhone(data.telefone)) errors.push('Telefone inválido.');
      if (!ValidatorsModule.isRequired(data.nascimento)) errors.push('Data de nascimento obrigatória.');
      if (!ValidatorsModule.isRequired(data.cep)) errors.push('CEP obrigatório.');

      if (errors.length) {
        alertArea.innerHTML = `<div class="alert error" role="alert">${errors.join('<br>')}</div>`;
        return;
      }

 
      StorageModule.saveForm(data);
      alertArea.innerHTML = `<div class="alert success" role="status">Cadastro enviado com sucesso!</div>`;
      form.reset();
    });

    
    const inputs = form.querySelectorAll('input,select,button,textarea');
    inputs.forEach((el, idx) => el.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' && el.tagName !== 'TEXTAREA' && el.type !== 'submit') {
       
        ev.preventDefault();
        const next = inputs[idx+1];
        if (next) next.focus();
      }
    }));
  }

})();
