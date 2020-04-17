const SonicPJs = require('sonic-pi-js');
const pjs = new SonicPJs();

pjs.withFx(pjs.FX.reverb, { mix: 0.2 }, () => {
  pjs.loop(() => {
    pjs.play(
      pjs.choose(
        pjs.scale("Eb2", "major_pentatonic", 3)
      ), { release: 0.1, amp: "rand" }
    );
    pjs.sleep(0.1);
  })
})