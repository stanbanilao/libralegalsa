(function(){const head=document.head;if(head&&!document.querySelector('link[data-libra-brand]')){const brand=document.createElement('link');brand.rel='stylesheet';brand.href='assets/brand.css';brand.dataset.libraBrand='true';head.appendChild(brand);const icon=document.createElement('link');icon.rel='icon';icon.href='/favicon.ico';icon.sizes='any';head.appendChild(icon);let theme=document.querySelector('meta[name="theme-color"]');if(!theme){theme=document.createElement('meta');theme.name='theme-color';head.appendChild(theme)}theme.content='#071827'}})();

(function () {
  const CONTACT = {
    landlineDisplay: '021 013 1971',
    landlineHref: '+27210131971',
    whatsappDisplay: '065 653 2987',
    whatsappHref: '27656532987',
    info: 'info@libralegalsa.co.za',
    queries: 'queries@libralegalsa.co.za',
    complaints: 'complain@libralegalsa.co.za'
  };

  const websiteWhatsAppMessage = 'Hi Libra Legal SA, I am contacting you from the Libra Legal SA website and would like guidance about removing my debt review flag. Please assist me with an initial assessment.';
  const websiteWhatsAppUrl = `https://wa.me/${CONTACT.whatsappHref}?text=${encodeURIComponent(websiteWhatsAppMessage)}`;

  const utility = document.querySelector('.utility-inner');
  if (utility) {
    const utilityItems = utility.querySelectorAll(':scope > span');
    if (utilityItems[1]) {
      utilityItems[1].innerHTML = `<b>Call:</b> <a href="tel:${CONTACT.landlineHref}">${CONTACT.landlineDisplay}</a> <span class="utility-divider">·</span> <a href="${websiteWhatsAppUrl}" target="_blank" rel="noopener">WhatsApp ${CONTACT.whatsappDisplay}</a>`;
    }
  }

  document.querySelectorAll('.footer-grid h3').forEach((heading) => {
    if (/default details|contact details/i.test(heading.textContent || '')) {
      const block = heading.parentElement;
      if (block) {
        block.innerHTML = `
          <h3>Contact details</h3>
          <p><a href="tel:${CONTACT.landlineHref}">Landline: ${CONTACT.landlineDisplay}</a></p>
          <p><a href="${websiteWhatsAppUrl}" target="_blank" rel="noopener">WhatsApp: ${CONTACT.whatsappDisplay}</a></p>
          <p><a href="mailto:${CONTACT.info}">${CONTACT.info}</a></p>
          <p><a href="mailto:${CONTACT.queries}">${CONTACT.queries}</a></p>
          <p><a href="mailto:${CONTACT.complaints}">${CONTACT.complaints}</a></p>
          <p>Office address · To be confirmed</p>`;
      }
    }
  });

  if (!document.querySelector('.whatsapp-float')) {
    const whatsapp = document.createElement('a');
    whatsapp.className = 'whatsapp-float';
    whatsapp.href = websiteWhatsAppUrl;
    whatsapp.target = '_blank';
    whatsapp.rel = 'noopener';
    whatsapp.setAttribute('aria-label', 'WhatsApp Libra Legal SA about debt review removal');
    whatsapp.innerHTML = `
      <span class="whatsapp-icon" aria-hidden="true">
        <svg viewBox="0 0 32 32" role="img"><path fill="currentColor" d="M16 3C8.82 3 3 8.6 3 15.5c0 2.43.73 4.7 1.98 6.62L3.4 28.5l6.73-1.5A13.4 13.4 0 0 0 16 28c7.18 0 13-5.6 13-12.5S23.18 3 16 3Zm0 22.7c-1.88 0-3.64-.5-5.15-1.38l-.37-.22-3.99.89.94-3.75-.24-.38a9.98 9.98 0 0 1-1.6-5.36C5.59 9.87 10.25 5.3 16 5.3s10.41 4.57 10.41 10.2S21.75 25.7 16 25.7Zm5.72-7.64c-.31-.15-1.85-.89-2.14-.99-.29-.1-.5-.15-.71.15-.21.3-.82.99-1 1.19-.18.2-.37.22-.68.07-.31-.15-1.32-.47-2.51-1.5-.93-.8-1.56-1.79-1.74-2.09-.18-.3-.02-.46.14-.61.14-.14.31-.37.47-.55.16-.17.21-.3.31-.5.11-.2.05-.37-.03-.52-.08-.15-.71-1.67-.97-2.28-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.37-.29.3-1.1 1.05-1.1 2.56 0 1.51 1.13 2.97 1.29 3.17.16.2 2.22 3.31 5.38 4.64.75.32 1.34.51 1.8.65.76.23 1.45.2 1.99.12.61-.09 1.85-.74 2.11-1.46.26-.72.26-1.33.18-1.46-.08-.12-.29-.2-.6-.35Z"/></svg>
      </span>
      <span class="whatsapp-copy"><strong>Need debt review clarity?</strong><small>WhatsApp our support team</small></span>`;
    document.body.appendChild(whatsapp);
  }

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
      const data = new FormData(leadForm);
      const line = (label, key) => `${label}: ${data.get(key) || 'Not provided'}`;
      const applicationMessage = [
        '[Website Debt Review Flag Removal Application]',
        'Hi Libra Legal SA, I completed the Debt Review Flag Removal application on your website. Please review my details and contact me about the appropriate next step.',
        '',
        line('First name', 'firstName'),
        line('Surname', 'surname'),
        line('Mobile', 'phone'),
        line('Email', 'email'),
        line('Province', 'province'),
        line('Debt review status', 'status'),
        line('Court / Tribunal order', 'order'),
        line('All relevant debts paid', 'paid'),
        line('Home loan status', 'homeLoan'),
        line('Debt counsellor', 'counsellor'),
        line('Approx. year placed under debt review', 'reviewYear'),
        line('Additional notes', 'notes'),
        '',
        'Source: libralegalsa.co.za application page'
      ].join('\n');
      const url = `https://wa.me/${CONTACT.whatsappHref}?text=${encodeURIComponent(applicationMessage)}`;
      window.open(url, '_blank', 'noopener');
      const status = document.querySelector('#application-status');
      if (status) {
        status.innerHTML = `<strong>Your application summary is ready.</strong> WhatsApp should open with your details. Review the message and tap Send to submit it to Libra Legal SA. If WhatsApp did not open, message <a href="${websiteWhatsAppUrl}" target="_blank" rel="noopener">${CONTACT.whatsappDisplay}</a>.`;
        status.hidden = false;
      }
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
