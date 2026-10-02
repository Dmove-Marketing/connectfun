// Calendário (flatpickr) sob demanda: a lib (~70 KB com o locale) só é baixada quando a pessoa
// toca/foca o campo de data, em vez de rodar no carregamento da página.
type FP = typeof import('flatpickr').default;
let fpPromise: Promise<FP> | null = null;

function loadFlatpickr(): Promise<FP> {
  if (!fpPromise) {
    fpPromise = Promise.all([import('flatpickr'), import('flatpickr/dist/l10n/pt.js')]).then(([m, l10n]) => {
      m.default.localize(l10n.Portuguese);
      return m.default;
    });
  }
  return fpPromise;
}

export function attachDatepicker(el: HTMLInputElement) {
  if ((el as any)._flatpickr || el.dataset.dpLazy) return;
  el.dataset.dpLazy = '1';
  el.readOnly = true; // evita abrir o teclado do celular antes do calendário
  const init = () => {
    loadFlatpickr().then((flatpickr) => {
      if ((el as any)._flatpickr) return;
      const fp = flatpickr(el, { dateFormat: 'd/m/Y', minDate: 'today', disableMobile: true, allowInput: false });
      fp.open();
    });
  };
  el.addEventListener('focus', init, { once: true });
  el.addEventListener('pointerdown', init, { once: true });
}
