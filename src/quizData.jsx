export const quizData = {
  start: {
    text: "JENIS PENGALAMAN GAME APA YANG PALING KAMU CARI SEKARANG?",
    options: [
      { text: "AKSI CEPAT, TEGANG, DAN PENUH ADRENALIN", next: "genre_action" },
      { text: "PETUALANGAN, CERITA, DAN EKSPLORASI", next: "genre_adventure" },
      { text: "SANTAI, FUN, ATAU COCOK BUAT MABAR", next: "genre_casual" },
      { text: "STRATEGI, TAKTIK, DAN MIKIR DALAM", next: "genre_strategy" },
      { text: "OLAHRAGA, BALAP, ATAU ADU MEKANIK", next: "genre_sports" },
      { text: "ROGUELIKE / MATI-ULANG / REPLAY TERUS", next: "genre_roguelike" }
    ]
  },

  // ========== AKSI ==========
  genre_action: {
    text: "MODE BERMAIN MANA YANG PALING COCOK BUAT KAMU?",
    options: [
      { text: "MULTIPLAYER KOMPETITIF, RANKED, LAWAN ORANG", next: "action_competitive_type" },
      { text: "SINGLE PLAYER, FOKUS KE COMBAT DAN PROGRES", next: "action_single_type" },
      { text: "SURVIVAL ATAU HORROR YANG BIKIN PANIK", next: "action_survival_type" },
      { text: "STEALTH / SILUMAN / MAIN DARI BAYANGAN", next: "action_stealth_type" }
    ]
  },

  action_competitive_type: {
    text: "KAMU LEBIH SUKA PERTEMPURAN YANG SEPERTI APA?",
    options: [
      { text: "FPS TAKTIS, TEMBAKAN PRESISI, DAN TEAMPLAY",  next: "filter_platform", stash: "comp_fps_tactical" },
      { text: "BATTLE ROYALE, LOOTING, ROTASI, DAN CLUTCH",  next: "filter_platform", stash: "comp_battle_royale" },
      { text: "MOBA, ROLE, MAP CONTROL, DAN TEAM FIGHT",  next: "filter_platform", stash: "comp_moba" },
      { text: "HERO SHOOTER / ABILITY BASED / CHARACTER KIT",  next: "filter_platform", stash: "comp_hero_shooter" }
    ]
  },

  action_single_type: {
    text: "KAMU MAU AKSINYA LEBIH KE ARAH MANA?",
    options: [
      { text: "COMBAT SULIT, MENANTANG, DAN BUTUH KESABARAN",  next: "filter_platform", stash: "single_soulslike" },
      { text: "FAST-PACED, BRUTAL, DAN BANYAK LEDAKAN",  next: "filter_platform", stash: "single_shooter_hackslash" },
      { text: "AKSI SINEMATIK DENGAN CERITA KUAT",  next: "filter_platform", stash: "single_cinematic_action" },
      { text: "METROIDVANIA / PLATFORMER / MAP TERKUNCI",  next: "filter_platform", stash: "single_metroidvania" }
    ]
  },

  action_survival_type: {
    text: "SUMBER TEGANGNYA MAU DARI MANA?",
    options: [
      { text: "HOROR MONSTER / ZOMBIE / MAKHLUK MENGERIKAN",  next: "filter_platform", stash: "survival_monster_horror" },
      { text: "SURVIVAL DUNIA KERAS, CRAFTING, DAN RESOURCE",  next: "filter_platform", stash: "survival_crafting" },
      { text: "CO-OP HORROR BARENG TEMAN BIAR PANIK BARENG",  next: "filter_platform", stash: "survival_coop_horror" },
      { text: "EXTRACTION / LOOT MASUK-KELUAR / RISIKO TINGGI",  next: "filter_platform", stash: "survival_extraction" }
    ]
  },

  action_stealth_type: {
    text: "GAYA STEALTH YANG KAMU SUKA?",
    options: [
      { text: "INFILTRASI, GADGET, DAN MISI SPY",  next: "filter_platform", stash: "stealth_infiltration" },
      { text: "ASSASSIN / PARKOUR / HIT AND RUN",  next: "filter_platform", stash: "stealth_assassin" },
      { text: "HOROR STEALTH, SEMBUNYI DARI MONSTER",  next: "filter_platform", stash: "stealth_horror" }
    ]
  },

  // ========== PETUALANGAN ==========
  genre_adventure: {
    text: "APA YANG PALING PENTING DALAM GAME PETUALANGAN BUAT KAMU?",
    options: [
      { text: "CERITA YANG KUAT, EMOSIONAL, DAN BERKESAN", next: "adv_story_focus" },
      { text: "DUNIA LUAS, EXPLORATION, DAN KEBEBASAN", next: "adv_world_focus" },
      { text: "RPG, LEVELING, BUILD, DAN LOOT", next: "adv_rpg_focus" },
      { text: "PUZZLE, INVESTIGASI, DAN TEKA-TEKI DUNIA", next: "adv_puzzle_focus" }
    ]
  },

  adv_story_focus: {
    text: "CERITA SEPERTI APA YANG KAMU SUKA?",
    options: [
      { text: "DRAMA EMOSIONAL DAN HUBUNGAN KARAKTER",  next: "filter_platform", stash: "story_emotional" },
      { text: "PILIHAN MORAL, CABANG CERITA, DAN KONSEKUENSI",  next: "filter_platform", stash: "story_choice_based" },
      { text: "MISTERI NARATIF DAN DUNIA YANG BIKIN PENASARAN",  next: "filter_platform", stash: "story_mystery" },
      { text: "SCI-FI / DISTOPIA / TEMA FUTURISTIK",  next: "filter_platform", stash: "story_scifi" }
    ]
  },

  adv_world_focus: {
    text: "DUNIA OPEN WORLD YANG KAMU MAU ITU MODELNYA GIMANA?",
    options: [
      { text: "FANTASY / MEDIEVAL / MONSTER / PEDANG",  next: "filter_platform", stash: "world_fantasy_open" },
      { text: "MODERN / KOTA / KEJAHATAN / KEBEBASAN LIAR",  next: "filter_platform", stash: "world_urban_open" },
      { text: "ALAM / PETUALANGAN / EKSPLORASI YANG TENANG",  next: "filter_platform", stash: "world_nature_open" },
      { text: "POST-APOCALYPSE / DUNIA RUNTUH / SURVIVE",  next: "filter_platform", stash: "world_apocalypse" }
    ]
  },

  adv_rpg_focus: {
    text: "RPG SEPERTI APA YANG PALING NGENA BUAT KAMU?",
    options: [
      { text: "ACTION RPG YANG DINAMIS DAN MODERN",  next: "filter_platform", stash: "rpg_action_modern" },
      { text: "CRPG / TURN-BASED / BANYAK DIALOG DAN PILIHAN",  next: "filter_platform", stash: "rpg_crpg" },
      { text: "LOOTING, GRINDING, DAN PROGRESSION YANG NAGIH",  next: "filter_platform", stash: "rpg_loot_progression" },
      { text: "JRPG / PARTY / TURN-BASED KLASIK MODERN",  next: "filter_platform", stash: "rpg_jrpg" }
    ]
  },

  adv_puzzle_focus: {
    text: "GAYA TEKA-TEKI YANG KAMU CARI?",
    options: [
      { text: "PUZZLE LINGKUNGAN DAN LOGIKA DUNIA",  next: "filter_platform", stash: "puzzle_environmental" },
      { text: "INVESTIGASI, CLUE, DAN DETEKTIF",  next: "filter_platform", stash: "puzzle_investigation" },
      { text: "NARRATIVE PUZZLE / STORY DRIVEN RIDDLE",  next: "filter_platform", stash: "puzzle_narrative" }
    ]
  },

  // ========== CASUAL ==========
  genre_casual: {
    text: "KALAU MAIN SANTAI, KAMU LEBIH SUKA YANG MANA?",
    options: [
      { text: "MABAR KACAU, NGAKAK, DAN BIKIN RUSUH", next: "casual_party_type" },
      { text: "SIMULASI TENANG, BANGUN-BANGUN, DAN NYICIL PROGRES", next: "casual_sim_type" },
      { text: "INDIE / PUZZLE / COZY YANG RINGAN TAPI BERKESAN", next: "casual_indie_type" },
      { text: "RHYTHM / MUSIK / TIMING DAN BEAT", next: "casual_rhythm_type" }
    ]
  },

  casual_party_type: {
    text: "VIBE MABAR YANG KAMU CARI APA?",
    options: [
      { text: "CO-OP KOMPAK TAPI CHAOS",  next: "filter_platform", stash: "party_chaos_coop" },
      { text: "PARTY GAME KOMPETITIF RINGAN",  next: "filter_platform", stash: "party_light_competitive" },
      { text: "GAME DUA ORANG YANG KERJA SAMA TOTAL",  next: "filter_platform", stash: "party_duo_coop" },
      { text: "SOCIAL DEDUCTION / BOHONG / SIAPA PENGKHIANAT",  next: "filter_platform", stash: "party_social_deduction" }
    ]
  },

  casual_sim_type: {
    text: "SIMULASI APA YANG PALING MENARIK BUATMU?",
    options: [
      { text: "FARMING / LIFE SIM / COZY HARIAN",  next: "filter_platform", stash: "sim_life_farming" },
      { text: "CITY BUILDER / NGATUR KOTA / INFRASTRUKTUR",  next: "filter_platform", stash: "sim_city_builder" },
      { text: "MANAGEMENT BISNIS / RUMAH SAKIT / KEBUN BINATANG",  next: "filter_platform", stash: "sim_business_management" },
      { text: "BUILDING CREATIVE / SANDBOX / BANGUN BEBAS",  next: "filter_platform", stash: "sim_creative_sandbox" }
    ]
  },

  casual_indie_type: {
    text: "PENGALAMAN INDIE SEPERTI APA YANG KAMU MAU?",
    options: [
      { text: "PUZZLE CERDAS DAN MEMUASKAN",  next: "filter_platform", stash: "indie_puzzle" },
      { text: "RELAXING, ARTY, DAN ATMOSFERIK",  next: "filter_platform", stash: "indie_relaxing" },
      { text: "INDIE UNIK YANG CAMPUR ADUK TAPI NAGIH",  next: "filter_platform", stash: "indie_unique" },
      { text: "SHORT STORY / WALKING SIM / CERITA PENDEK",  next: "filter_platform", stash: "indie_walking_story" }
    ]
  },

  casual_rhythm_type: {
    text: "RHYTHM GAME MODEL MANA?",
    options: [
      { text: "RHYTHM ARCADE / SCORE CHASING",  next: "filter_platform", stash: "rhythm_arcade" },
      { text: "MUSICAL STORY / BEAT + CERITA",  next: "filter_platform", stash: "rhythm_story" },
      { text: "RHYTHM CO-OP / MAIN BARENG TEMAN",  next: "filter_platform", stash: "rhythm_coop" }
    ]
  },

  // ========== STRATEGI ==========
  genre_strategy: {
    text: "STRATEGI MODEL MANA YANG PALING KAMU SUKA?",
    options: [
      { text: "REAL-TIME, CEPAT, MULTITASKING, DAN NGATUR BANYAK HAL", next: "str_rts_type" },
      { text: "TURN-BASED, TAKTIKAL, DAN PENUH PERHITUNGAN", next: "str_turn_type" },
      { text: "MANAGEMENT, OTOMASI, DAN BANGUN SISTEM", next: "str_management_type" },
      { text: "CARD GAME / DECK / DRAFT / KOMBO KARTU", next: "str_card_type" }
    ]
  },

  str_rts_type: {
    text: "RTS YANG KAMU MAU ITU LEBIH KE ARAH MANA?",
    options: [
      { text: "SEJARAH / PERANG / BANGUN PASUKAN",  next: "filter_platform", stash: "rts_history_war" },
      { text: "SCI-FI / FAKSI / MAKRO DAN MICRO BERAT",  next: "filter_platform", stash: "rts_scifi_macro" },
      { text: "RTS TAKTIS DENGAN POSISI DAN COVER",  next: "filter_platform", stash: "rts_tactical_field" },
      { text: "MOBA-RTS HYBRID / LANE / UNIT CONTROL",  next: "filter_platform", stash: "rts_moba_hybrid" }
    ]
  },

  str_turn_type: {
    text: "GAYA TAKTIKAL APA YANG PALING KAMU SUKA?",
    options: [
      { text: "SQUAD TACTICS / POSITIONING / HIT CHANCE",  next: "filter_platform", stash: "turn_tactics_squad" },
      { text: "GRAND STRATEGY / BANGUN PERADABAN",  next: "filter_platform", stash: "turn_grand_strategy" },
      { text: "TURN-BASED RINGKAS TAPI DALAM",  next: "filter_platform", stash: "turn_compact_strategy" },
      { text: "4X / EKSPLORASI / EKSPANSI / EKSPLOITASI",  next: "filter_platform", stash: "turn_4x" }
    ]
  },

  str_management_type: {
    text: "SISTEM APA YANG PALING SERU BUAT KAMU ATUR?",
    options: [
      { text: "PABRIK, OTOMASI, DAN EFISIENSI PRODUKSI",  next: "filter_platform", stash: "mgmt_automation" },
      { text: "KOLONI, KRISIS, DAN DRAMA SISTEMIK",  next: "filter_platform", stash: "mgmt_colony" },
      { text: "MANAJEMEN TIM / BISNIS / ORGANISASI",  next: "filter_platform", stash: "mgmt_team_business" },
      { text: "LOGISTICS / TRANSPORT / SUPPLY CHAIN",  next: "filter_platform", stash: "mgmt_logistics" }
    ]
  },

  str_card_type: {
    text: "CARD GAME SEPERTI APA?",
    options: [
      { text: "DECKBUILDER ROGUELIKE / RUN BERULANG",  next: "filter_platform", stash: "card_deckbuilder" },
      { text: "TCG / COLLECTIBLE / META DECK",  next: "filter_platform", stash: "card_tcg" },
      { text: "AUTO BATTLER / COMPOSE UNIT DARI KARTU",  next: "filter_platform", stash: "card_autobattler" }
    ]
  },

  // ========== OLAHRAGA / BALAP ==========
  genre_sports: {
    text: "KAMU LEBIH TERTARIK KE ARAH MANA?",
    options: [
      { text: "SIMULASI OLAHRAGA REALISTIS", next: "sports_sim_type" },
      { text: "BALAP MOBIL / MOTOR / DRIFT", next: "sports_racing_type" },
      { text: "FIGHTING / 1V1 / COMBO", next: "sports_fighting_type" }
    ]
  },

  sports_sim_type: {
    text: "OLAHRAGA APA YANG KAMU MAU?",
    options: [
      { text: "SEPAKBOLA / CAREER / MANAGER + MAIN",  next: "filter_platform", stash: "sports_football" },
      { text: "BASKET / NBA STYLE",  next: "filter_platform", stash: "sports_basketball" },
      { text: "OLAHRAGA LAIN / MULTI-SPORT / ARCADE",  next: "filter_platform", stash: "sports_multi" }
    ]
  },

  sports_racing_type: {
    text: "GAYA BALAP YANG KAMU SUKA?",
    options: [
      { text: "SIM RACING REALISTIS / SETUP / TRACK",  next: "filter_platform", stash: "racing_sim" },
      { text: "ARCADE RACING / NITRO / KERASAN",  next: "filter_platform", stash: "racing_arcade" },
      { text: "OPEN WORLD DRIVING / BEBAS / CUSTOM",  next: "filter_platform", stash: "racing_openworld" }
    ]
  },

  sports_fighting_type: {
    text: "FIGHTING YANG COCOK BUAT KAMU?",
    options: [
      { text: "TRADITIONAL 2D / 3D FIGHTER / RANKED",  next: "filter_platform", stash: "fighting_traditional" },
      { text: "PLATFORM FIGHTER / PARTY FIGHT",  next: "filter_platform", stash: "fighting_platform" },
      { text: "BEAT EM UP / CO-OP BRAWLER",  next: "filter_platform", stash: "fighting_brawler" }
    ]
  },

  // ========== ROGUELIKE ==========
  genre_roguelike: {
    text: "ROGUELIKE / RUN BERULANG YANG KAMU MAU?",
    options: [
      { text: "ACTION ROGUELIKE / COMBAT CEPAT", next: "rogue_action_type" },
      { text: "DECK / BUILD / KOMBO SETIAP RUN", next: "rogue_build_type" },
      { text: "STRATEGI / TACTICS / PERHITUNGAN", next: "rogue_strategy_type" }
    ]
  },

  rogue_action_type: {
    text: "ACTION ROGUELIKE SEPERTI APA?",
    options: [
      { text: "BULLET HELL / DODGE / SKILL CEKATAN",  next: "filter_platform", stash: "rogue_bullet_hell" },
      { text: "HACK AND SLASH / WEAPON / SYNERGY",  next: "filter_platform", stash: "rogue_hackslash" },
      { text: "FPS ROGUELIKE / GUN / PROCEDURAL",  next: "filter_platform", stash: "rogue_fps" }
    ]
  },

  rogue_build_type: {
    text: "FOKUS BUILD-NYA KE MANA?",
    options: [
      { text: "DECKBUILDER KARTU",  next: "filter_platform", stash: "card_deckbuilder" },
      { text: "ITEM SYNERGY / BUILD CRAZY",  next: "filter_platform", stash: "rogue_item_synergy" },
      { text: "META PROGRESSION / UNLOCK TERUS",  next: "filter_platform", stash: "rogue_meta_progress" }
    ]
  },

  rogue_strategy_type: {
    text: "STRATEGI ROGUELIKE YANG KAMU SUKA?",
    options: [
      { text: "TURN-BASED TACTICS ROGUELIKE",  next: "filter_platform", stash: "rogue_tactics" },
      { text: "AUTO BATTLER / COMPOSE",  next: "filter_platform", stash: "card_autobattler" },
      { text: "SURVIVAL RUN / WAVE / DEFENSE",  next: "filter_platform", stash: "rogue_survival_wave" }
    ]
  },
     filter_platform: {
    text: "KAMU LEBIH SERING MAIN DI PLATFORM MANA?",
    options: [
      { text: "PC / LAPTOP", platform: "pc", next: "filter_session" },
      { text: "CONSOLE (PS / XBOX / SWITCH)", platform: "console", next: "filter_session" },
      { text: "MOBILE / HP", platform: "mobile", next: "filter_session" },
      { text: "CAMPUR / BEBAS PLATFORM", platform: "any", next: "filter_session" }
    ]
  },

  filter_session: {
    text: "SESI MAIN YANG KAMU MAU SEPERTI APA?",
    options: [
      { text: "CEPAT: 15–40 MENIT, LANGSUNG SERU", finalize: true },
      { text: "STANDAR: 1–2 JAM PER SESI", finalize: true },
      { text: "MARATON: MAU TENGGELAM LAMA", finalize: true },
      { text: "FLEKSIBEL: TERSERAH MOOD", finalize: true }
    ]
  }
};