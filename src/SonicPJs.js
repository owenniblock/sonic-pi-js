var SonicPJs = function() {

  this.SYNTH = {
    beep:           "beep",
    blade:          "blade",
    bnoise:         "bnoise",
    chipbass:       "chipbass",
    chiplead:       "chiplead",
    chipnoise:      "chipnoise",
    cnoise:         "cnoise",
    darkAmbience:   "dark_ambience",
    dpulse:         "dpulse",
    dsaw:           "dsaw",
    dtri:           "dtri",
    dullBell:       "dull_bell",
    fm:             "fm",
    gnoise:         "gnoise",
    growl:          "growl",
    hollow:         "hollow",
    hoover:         "hoover",
    modBeep:        "mod_beep",
    modDSaw:        "mod_dsaw",
    mod_FM:         "mod_fm",
    modPulse:       "mod_pulse",
    modSaw:         "mod_saw",
    modSine:        "mod_sine",
    modTri:         "mod_tri",
    noise:          "noise",
    piano:          "piano",
    pluck:          "pluck",
    pnoise:         "pnoise",
    prettyBell:     "pretty_bell",
    prophet:        "prophet",
    pulse:          "pulse",
    saw:            "saw",
    sine:           "sine",
    soundIn:        "sound_in",
    soundInStereo:  "sound_in_stereo",
    square:         "square",
    subpulse:       "subpulse",
    supersaw:       "supersaw",
    tb303:          "tb303",
    techSaws:       "tech_saws",
    tri:            "tri",
    zawa:           "zawa"
  };

  this.FX = {
    autotuner:      "autotuner",
    bandEQ:         "band_eq",
    bitcrusher:     "bitcrusher",
    bpf:            "bpf",
    compressor:     "compressor",
    distortion:     "distortion",
    echo:           "echo",
    eq:             "eq",
    flanger:        "flanger",
    gverb:          "gverb",
    hpf:            "hpf",
    ixiTechno:      "ixi_techno",
    krush:          "krush",
    level:          "level",
    lpf:            "lpf",
    mono:           "mono",
    nbpf:           "nbpf",
    nhpf:           "nhpf",
    nlpf:           "nlpf",
    normaliser:     "normaliser",
    nrbpf:          "nrbpf",
    nrhpf:          "nrhpf",
    nrlpf:          "nrlpf",
    octaver:        "octaver",
    pan:            "pan",
    panslicer:      "panslicer",
    pingPong:       "ping_pong",
    pitchShift:     "pitch_shift",
    rbpf:           "rbpf",
    record:         "record",
    reverb:         "reverb",
    rhpf:           "rhpf",
    ringMod:        "ring_mod",
    rlpf:           "rlpf",
    slicer:         "slicer",
    soundOut:       "sound_out",
    soundOutStereo: "sound_out_stereo",
    tanh:           "tanh",
    tremolo:        "tremolo",
    vowel:          "vowel",
    whammy:         "whammy",
    wobble:         "wobble"
  };

  this.SAMPLES = {
    ambi: {
      choir:      "ambi_choir",
      darkWhoosh: "ambi_dark_woosh",
      drone:      "ambi_drone",
      glassHum:   "ambi_glass_hum",
      glassRub:   "ambi_glass_rub",
      hauntedHum: "ambi_haunted_hum",
      lunarLand:  "ambi_lunar_land",
      piano:      "ambi_piano",
      sauna:      "ambi_sauna",
      softBuzz:   "ambi_soft_buzz",
      swoosh:     "ambi_swoosh"
    },

    bass: {
      dnbF:     "bass_dnb_f",
      dropC:    "bass_drop_c",
      hardC:    "bass_hard_c",
      hitC:     "bass_hit_c",
      thickC:   "bass_thick_c",
      voxyC:    "bass_voxy_c",
      voxyHitC: "bass_voxy_hit_c",
      woodsyC:  "bass_woodsy_c"
    },

    bd: {
      eightOhEight:      "bd_808",
      ada:      "bd_ada",
      boom:     "bd_boom",
      fat:      "bd_fat",
      gas:      "bd_gas",
      haus:     "bd_haus",
      klub:     "bd_klub",
      mehackit: "bd_mehackit",
      pure:     "bd_pure",
      sone:     "bd_sone",
      tek:      "bd_tek",
      zome:     "bd_zome",
      zum:      "bd_zum"
    },

    drum: {
      bassHard:     "drum_bass_hard",
      bassSoft:     "drum_bass_soft",
      cowbell:      "drum_cowbell",
      cymbalClosed: "drum_cymbal_closed",
      cymbalHard:   "drum_cymbal_hard",
      cymbolOpen:   "drum_cymbal_open",
      cymbalPedal:  "drum_cymbal_pedal",
      cymbalSoft:   "drum_cymbal_soft",
      heavyKick:    "drum_heavy_kick",
      roll:         "drum_roll",
      snareHard:    "drum_snare_hard",
      snareSoft:    "drum_snare_soft",
      splashHard:   "drum_splash_hard",
      splashSoft:   "drum_splash_soft",
      tomHiHard:    "drum_tom_hi_hard",
      tomHiSoft:    "drum_tom_hi_soft",
      tomLoHard:    "drum_tom_lo_hard",
      tomLowSoft:   "drum_tom_lo_soft",
      tomMidHard:   "drum_tom_mid_hard",
      tomMidSoft:   "drum_tom_mid_soft"
    },

    elec: {
      beep:         "elec_beep",
      bell:         "elec_bell",
      blip:         "elec_blip",
      blip2:        "elec_blip2",
      blup:         "elec_blup",
      bong:         "elec_bong",
      chime:        "elec_chime",
      cymbal:       "elec_cymbal",
      filt_snare:   "elec_filt_snare",
      flip:         "elec_flip",
      fuzz_tom:     "elec_fuzz_tom",
      hi_snare:     "elec_hi_snare",
      hollow_kick:  "elec_hollow_kick",
      lo_snare:     "elec_lo_snare",
      mid_snare:    "elec_mid_snare",
      ping:         "elec_ping",
      plip:         "elec_plip",
      pop:          "elec_pop",
      snare:        "elec_snare",
      soft_kick:    "elec_soft_kick",
      tick:         "elec_tick",
      triangle:     "elec_triangle",
      twang:        "elec_twang",
      twip:         "elec_twip",
      wood:         "elec_wood"
    },

    glitch: {
      bass_g: "glitch_bass_g",
      perc1:  "glitch_perc1",
      perc2:  "glitch_perc2",
      perc3:  "glitch_perc3",
      perc4:  "glitch_perc4",
      perc5:  "glitch_perc5",
      robot1: "glitch_robot1",
      robot2: "glitch_robot2"
    },

    guit: {
      e_fifths:   "guit_e_fifths",
      e_slide:    "guit_e_slide",
      em9:        "guit_em9",
      harmonics:  "guit_harmonics"
    },

    loop: {
      threeD_printer: "loop_3d_printer",
      amen:           "loop_amen",
      amen_full:      "loop_amen_full",
      breakbeat:      "loop_breakbeat",
      compus:         "loop_compus",
      drone_g_97:     "loop_drone_g_97",
      electric:       "loop_electric",
      garzul:         "loop_garzul",
      industrial:     "loop_industrial",
      mehackit1:      "loop_mehackit1",
      mehackit2:      "loop_mehackit2",
      mika:           "loop_mika",
      perc1:          "loop_perc1",
      perc2:          "loop_perc2",
      safari:         "loop_safari",
      tabla:          "loop_tabla",
      weirdo:         "loop_weirdo"
    },

    mehackit: {
      phone1: "mehackit_phone1",
      phone2: "mehackit_phone2",
      phone3: "mehackit_phone3",
      phone4: "mehackit_phone4",
      robot1: "mehackit_robot1",
      robot2: "mehackit_robot2",
      robot3: "mehackit_robot3",
      robot4: "mehackit_robot4",
      robot5: "mehackit_robot5",
      robot6: "mehackit_robot6",
      robot7: "mehackit_robot7"
    },

    misc: {
      burp:     "misc_burp",
      cineboom: "misc_cineboom",
      crow:     "misc_crow"
    },

    perc: {
      bell:     "perc_bell",
      bell2:    "perc_bell2",
      door:     "perc_door",
      impact1:  "perc_impact1",
      impact2:  "perc_impact2",
      snap:     "perc_snap",
      snap2:    "perc_snap2",
      swash:    "perc_swash",
      swoosh:   "perc_swoosh",
      till:     "perc_till"
    },

    sn: {
      dolf:     "sn_dolf",
      dub:      "sn_dub",
      generic:  "sn_generic",
      zome:     "sn_zome"
    },

    tabla: {
      dhec: "tabla_dhec", 
      ghe1: "tabla_ghe1", 
      ghe2: "tabla_ghe2", 
      ghe3: "tabla_ghe3", 
      ghe4: "tabla_ghe4", 
      ghe5: "tabla_ghe5", 
      ghe6: "tabla_ghe6", 
      ghe7: "tabla_ghe7", 
      ghe8: "tabla_ghe8", 
      ke1: "tabla_ke1", 
      ke2: "tabla_ke2", 
      ke3: "tabla_ke3", 
      na: "tabla_na", 
      na_o: "tabla_na_o", 
      na_s: "tabla_na_s", 
      re: "tabla_re", 
      tas1: "tabla_tas1", 
      tas2: "tabla_tas2", 
      tas3: "tabla_tas3", 
      te1: "tabla_te1", 
      te2: "tabla_te2", 
      te_m: "tabla_te_m", 
      te_ne: "tabla_te_ne", 
      tun1: "tabla_tun1", 
      tun2: "tabla_tun2", 
      tun3: "tabla_tun3"
    },
    vinyl: {
      backspin: "vinyl_backspin",
      hiss: "vinyl_hiss",
      rewind: "vinyl_rewind",
      scratch: "vinyl_scratch"
    }
  };

  this.choose = (input) => {
    return `choose(${formatInputValues(input)})`;
  };

  this.chord = (tonic, name) => {
    return `chord(${formatInputValues(tonic)}, ${name})`;
  };

  this.scale = (tonic, name, numOctaves = 1) => {
    return `scale(:${tonic}, :${name}, num_octaves: ${numOctaves})`;
  };

  this.rrand = (min, max) => {
    return `rrand(${min}, ${max})`;
  };

  this.play = (input, params = null, name = null) => {
    if (name) {
      console.log(`${name} = play ${formatInputValues(input)}${getParameterString(params)}`);
    }
    else {
      console.log(`play ${formatInputValues(input)}${getParameterString(params)}`);
    }
  };

  this.sleep = (time) => {
    console.log(`sleep ${time.toString()}`);
  };

  this.sample = (sampleName, params) => {
    console.log(`sample :${sampleName}${getParameterString(params)}`)
  };

  this.control = (input, params) => {
    console.log(`control ${input}${getParameterString(params)}`)
  };

  this.useSynth = (name) => {
    console.log(`use_synth :${name}`)
  };

  this.createVariable = (name, value) => {
    console.log(`${name} = ${value}`);
  }

  this.withSynth = (name, innerFunc) => {
    console.log(`with_synth :${name} do`);
    innerFunc();
    console.log(`end`);
  };

  this.loop = (innerFunc) => {
    console.log(`loop do`);
    innerFunc();
    console.log(`end`);
  };

  this.liveLoop = (name, innerFunc) => {
    console.log(`live_loop :${name} do`);
    innerFunc();
    console.log(`end`);
  };

  this.withFx = (name, params, innerFunc) => {
    console.log(`with_fx :${name}${getParameterString(params)} do`);
    innerFunc();
    console.log(`end`);
  };

  getParameterString = (params) => {
    parameters = "";

    for (let key in params) {
      parameters += `, ${key}: ${params[key]}`;
    }

    return parameters;
  };

  formatInputValues = (input) => {
    if (Array.isArray(input)) {
      return `[${input.toString()}]`;
    }

    return input.toString();
  };
};

module.exports = SonicPJs;