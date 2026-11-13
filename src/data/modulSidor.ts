// Sidans bas, till exempel /sf1681 på GitHub Pages och tom lokalt.
export const bas = import.meta.env.BASE_URL.replace(/\/$/, '');

// Moduler som är klara. Nyckeln är modulnumret.
export const modulSidor: Record<number, string> = {
  1: `${bas}/moduler/01-vektorrum/`,
  2: `${bas}/moduler/02-linjara-avbildningar/`,
  3: `${bas}/moduler/03-kvotrum/`,
  4: `${bas}/moduler/04-egenvarden/`,
  5: `${bas}/moduler/05-minimalpolynom/`,
  6: `${bas}/moduler/06-samtidig-diagonalisering/`,
  7: `${bas}/moduler/07-jordans-normalform/`,
  8: `${bas}/moduler/08-inre-produktrum/`,
  9: `${bas}/moduler/09-hilbertrum/`,
  10: `${bas}/moduler/10-duala-rum/`,
  11: `${bas}/moduler/11-rekursion-och-differentialekvationer/`,
  12: `${bas}/moduler/12-adjungerade-operatorer/`,
  13: `${bas}/moduler/13-unitara-operatorer/`,
};
