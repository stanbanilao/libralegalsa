(function(){const head=document.head;if(head&&!document.querySelector('link[data-libra-brand]')){const brand=document.createElement('link');brand.rel='stylesheet';brand.href='assets/brand.css';brand.dataset.libraBrand='true';head.appendChild(brand);const icon=document.createElement('link');icon.rel='icon';icon.href='/favicon.ico';icon.sizes='any';head.appendChild(icon);let theme=document.querySelector('meta[name="theme-color"]');if(!theme){theme=document.createElement('meta');theme.name='theme-color';head.appendChild(theme)}theme.content='#071827'}})();
(function () {
  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('.nav-links');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('nav-open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
  }

  document.querySelectorAll('.faq-item button').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const symbol = item.querySelector('.faq-symbol');
      const isOpen = item.classList.toggle('is-open');
      answer.hidden = !isOpen;
      symbol.textContent = isOpen ? '−' : '+';
      button.setAttribute('aria-expanded', String(isOpen));
    });
  });

  const leadForm = document.querySelector('#lead-form');
  if (leadForm) {
    leadForm.addEventListener('submit', (event) => {
      event.preventDefault();
      document.querySelector('#form-panel').innerHTML = `
        <div class="success-card" role="status">
          <div class="success-icon">✓</div>
          <h2>Assessment request captured.</h2>
          <p>This concept form is working in demo mode. In production, connect it to Libra Legal SA's approved CRM/email workflow.</p>
          <a class="button button-dark" href="apply.html">Submit another</a>
        </div>`;
    });
  }

  const eligibility = document.querySelector('#eligibility-tool');
  if (eligibility) {
    const state = { paid: '', order: '', consent: '' };
    eligibility.querySelectorAll('[data-group]').forEach((button) => {
      button.addEventListener('click', () => {
        const group = button.dataset.group;
        state[group] = button.dataset.value;
        eligibility.querySelectorAll(`[data-group="${group}"]`).forEach((el) => el.classList.remove('selected'));
        button.classList.add('selected');
        renderResult();
      });
    });
    function renderResult() {
      const box = document.querySelector('#screening-result');
      if (!state.paid || !state.order || !state.consent) {
        box.innerHTML = '<p class="screening-hint">Answer all three questions to see the most likely assessment pathway.</p>';
        return;
      }
      let title = '';
      let text = '';
      if (state.consent === 'no') {
        title = 'Possible listing / process correction route';
        text = 'If you did not validly apply for debt review, your file needs document-level assessment rather than a standard cancellation request. We would first verify Form 16, notices and any court or Tribunal record.';
      } else if (state.paid === 'yes') {
        title = 'Possible clearance-certificate route';
        text = 'If the relevant debts have been discharged and the statutory requirements are met, your matter may be suitable for section 71 clearance processing and credit-profile updating.';
      } else if (state.order === 'yes') {
        title = 'Court-order assessment recommended';
        text = 'Where a debt rearrangement order exists and debts are not yet fully settled, the legal position is more complex. A court-based assessment may be required; removal cannot be promised from this screening alone.';
      } else {
        title = 'Stage-of-process assessment needed';
        text = 'Because you still owe accounts but may not yet have a court order, we need to identify exactly how far the debt review progressed before advising on the lawful next step.';
      }
      box.innerHTML = `<div class="screening-result"><span class="eyebrow">Initial screening</span><h2>${title}</h2><p>${text}</p><a href="apply.html" class="button button-gold">Send this to a consultant</a></div>`;
    }
  }
})();
