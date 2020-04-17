const SonicPJs = require('sonic-pi-js');
const pjs = new SonicPJs();

pjs.loop(() => {
  pjs.withSynth(pjs.SYNTH.dsaw, () => {
    pjs.withFx(pjs.FX.slicer, { phase: pjs.choose([0.25, 0.125]) }, () => {
      pjs.withFx(pjs.FX.reverb, { room: 0.5, mix: 0.3 }, () => {

        pjs.createVariable("start_note",
          pjs.choose(
            pjs.chord(
              pjs.choose([":b1", ":b2", ":e1", ":e2", ":b3", ":e3"]),
              ":minor"
            )
          )
        );

        pjs.createVariable("final_note",
          pjs.choose(
            pjs.chord(
              pjs.choose([":b1", ":b2", ":e1", ":e2", ":b3", ":e3"]),
              ":minor"
            )
          )
        );

        pjs.play("start_note",
          {
            release: 8,
            note_slide: 4,
            cutoff: 30,
            cutoff_slide: 4,
            detune: pjs.rrand(0, 0.2),
            pan: pjs.rrand(-1, 0),
            pan_slide: pjs.rrand(4, 8)},
          "p");

          pjs.control("p", { note: "final_note", cutoff: pjs.rrand(80, 120), pan: pjs.rrand(0, 1) });
      })
    })
  })

  pjs.sleep(8);
});