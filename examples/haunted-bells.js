const SonicPJs = require('sonic-pi-js');

const pjs = new SonicPJs();

pjs.loop(() => {
  pjs.sample(pjs.SAMPLES.perc.bell, { rate: pjs.rrand(0.125, 1.5) });
  pjs.sleep(pjs.rrand(0, 2));
});