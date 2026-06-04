(function () {
  const formEl = document.querySelector('[data-form]') || document.querySelector('form');
  if (!formEl) return;

  const nomeInput = document.querySelector('[data-campo-nome]');
  const emailInput = document.querySelector('[data-campo-email]');
  const erroNome = document.querySelector('[data-erro-nome]');
  const erroEmail = document.querySelector('[data-erro-email]');
  const aviso = document.querySelector('[data-aviso]');

  function setErro(el, msg) {
    if (!el) return;
    el.textContent = msg || '';
    el.setAttribute('aria-live', 'polite');
  }

  function limparErros() {
    setErro(erroNome, '');
    setErro(erroEmail, '');
    if (aviso) {
      aviso.textContent = '';
      aviso.style.display = '';
    }
  }

  function validarEmailSimples(valor) {
    return /[@]/.test(String(valor).trim());
  }

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    limparErros();

    const nome = (nomeInput?.value || '');
    const email = (emailInput?.value || '');

    let ok = true;

    if (!nome) {
      setErro(erroNome, 'Digite seu nome.');
      ok = false;
    }

    if (!email) {
      setErro(erroEmail, 'Digite seu e-mail.');
      ok = false;
    } else if (!validarEmailSimples(email)) {
      setErro(erroEmail, 'Digite um e-mail válido.');
      ok = false;
    }

    if (!ok) return;

    if (aviso) {
      aviso.textContent = 'Cadastro recebido!';
    }

    if (nomeInput) nomeInput.value = '';
    if (emailInput) emailInput.value = '';
  });
})();

