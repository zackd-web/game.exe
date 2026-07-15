export const quizData = {
  start: {
    text: "JENIS PENGALAMAN GAME APA YANG PALING KAMU CARI SEKARANG?",
    options: [
      { text: "AKSI CEPAT, TEGANG, DAN PENUH ADRENALIN", next: "genre_action" },
      { text: "PETUALANGAN, CERITA, DAN EKSPLORASI", next: "genre_adventure" },
      { text: "SANTAI, FUN, ATAU COCOK BUAT MABAR", next: "genre_casual" },
      { text: "STRATEGI, TAKTIK, DAN MIKIR DALAM", next: "genre_strategy" }
    ]
  },

  genre_action: {
    text: "MODE BERMAIN MANA YANG PALING COCOK BUAT KAMU?",
    options: [
      { text: "MULTIPLAYER KOMPETITIF, RANKED, LAWAN ORANG", next: "action_competitive_type" },
      { text: "SINGLE PLAYER, FOKUS KE COMBAT DAN PROGRES", next: "action_single_type" },
      { text: "SURVIVAL ATAU HORROR YANG BIKIN PANIK", next: "action_survival_type" }
    ]
  },
  action_competitive_type: {
    text: "KAMU LEBIH SUKA PERTEMPURAN YANG SEPERTI APA?",
    options: [
      { text: "FPS TAKTIS, TEMBAKAN PRESISI, DAN TEAMPLAY", result: "comp_fps_tactical" },
      { text: "BATTLE ROYALE, LOOTING, ROTASI, DAN CLUTCH", result: "comp_battle_royale" },
      { text: "MOBA, ROLE, MAP CONTROL, DAN TEAM FIGHT", result: "comp_moba" }
    ]
  },
  action_single_type: {
    text: "KAMU MAU AKSINYA LEBIH KE ARAH MANA?",
    options: [
      { text: "COMBAT SULIT, MENANTANG, DAN BUTUH KESABARAN", result: "single_soulslike" },
      { text: "FAST-PACED, BRUTAL, DAN BANYAK LEDAKAN", result: "single_shooter_hackslash" },
      { text: "AKSI SINEMATIK DENGAN CERITA KUAT", result: "single_cinematic_action" }
    ]
  },
  action_survival_type: {
    text: "SUMBER TEGANGNYA MAU DARI MANA?",
    options: [
      { text: "HOROR MONSTER / ZOMBIE / MAKHLUK MENGERIKAN", result: "survival_monster_horror" },
      { text: "SURVIVAL DUNIA KERAS, CRAFTING, DAN RESOURCE", result: "survival_crafting" },
      { text: "CO-OP HORROR BARENG TEMAN BIAR PANIK BARENG", result: "survival_coop_horror" }
    ]
  },

  genre_adventure: {
    text: "APA YANG PALING PENTING DALAM GAME PETUALANGAN BUAT KAMU?",
    options: [
      { text: "CERITA YANG KUAT, EMOSIONAL, DAN BERKESAN", next: "adv_story_focus" },
      { text: "DUNIA LUAS, EXPLORATION, DAN KEBEBASAN", next: "adv_world_focus" },
      { text: "RPG, LEVELING, BUILD, DAN LOOT", next: "adv_rpg_focus" }
    ]
  },
  adv_story_focus: {
    text: "CERITA SEPERTI APA YANG KAMU SUKA?",
    options: [
      { text: "DRAMA EMOSIONAL DAN HUBUNGAN KARAKTER", result: "story_emotional" },
      { text: "PILIHAN MORAL, CABANG CERITA, DAN KONSEKUENSI", result: "story_choice_based" },
      { text: "MISTERI NARATIF DAN DUNIA YANG BIKIN PENASARAN", result: "story_mystery" }
    ]
  },
  adv_world_focus: {
    text: "DUNIA OPEN WORLD YANG KAMU MAU ITU MODELNYA GIMANA?",
    options: [
      { text: "FANTASY / MEDIEVAL / MONSTER / PEDANG", result: "world_fantasy_open" },
      { text: "MODERN / KOTA / KEJAHATAN / KEBEBASAN LIAR", result: "world_urban_open" },
      { text: "ALAM / PETUALANGAN / EKSPLORASI YANG TENANG", result: "world_nature_open" }
    ]
  },
  adv_rpg_focus: {
    text: "RPG SEPERTI APA YANG PALING NGENA BUAT KAMU?",
    options: [
      { text: "ACTION RPG YANG DINAMIS DAN MODERN", result: "rpg_action_modern" },
      { text: "CRPG / TURN-BASED / BANYAK DIALOG DAN PILIHAN", result: "rpg_crpg" },
      { text: "LOOTING, GRINDING, DAN PROGRESSION YANG NAGIH", result: "rpg_loot_progression" }
    ]
  },

  genre_casual: {
    text: "KALAU MAIN SANTAI, KAMU LEBIH SUKA YANG MANA?",
    options: [
      { text: "MABAR KACAU, NGAKAK, DAN BIKIN RUSUH", next: "casual_party_type" },
      { text: "SIMULASI TENANG, BANGUN-BANGUN, DAN NYICIL PROGRES", next: "casual_sim_type" },
      { text: "INDIE / PUZZLE / COZY YANG RINGAN TAPI BERKESAN", next: "casual_indie_type" }
    ]
  },
  casual_party_type: {
    text: "VIBE MABAR YANG KAMU CARI APA?",
    options: [
      { text: "CO-OP KOMPAK TAPI CHAOS", result: "party_chaos_coop" },
      { text: "PARTY GAME KOMPETITIF RINGAN", result: "party_light_competitive" },
      { text: "GAME DUA ORANG YANG KERJA SAMA TOTAL", result: "party_duo_coop" }
    ]
  },
  casual_sim_type: {
    text: "SIMULASI APA YANG PALING MENARIK BUATMU?",
    options: [
      { text: "FARMING / LIFE SIM / COZY HARIAN", result: "sim_life_farming" },
      { text: "CITY BUILDER / NGATUR KOTA / INFRASTRUKTUR", result: "sim_city_builder" },
      { text: "MANAGEMENT BISNIS / RUMAH SAKIT / KEBUN BINATANG", result: "sim_business_management" }
    ]
  },
  casual_indie_type: {
    text: "PENGALAMAN INDIE SEPERTI APA YANG KAMU MAU?",
    options: [
      { text: "PUZZLE CERDAS DAN MEMUASKAN", result: "indie_puzzle" },
      { text: "RELAXING, ARTY, DAN ATMOSFERIK", result: "indie_relaxing" },
      { text: "INDIE UNIK YANG CAMPUR ADUK TAPI NAGIH", result: "indie_unique" }
    ]
  },

  genre_strategy: {
    text: "STRATEGI MODEL MANA YANG PALING KAMU SUKA?",
    options: [
      { text: "REAL-TIME, CEPAT, MULTITASKING, DAN NGATUR BANYAK HAL", next: "str_rts_type" },
      { text: "TURN-BASED, TAKTIKAL, DAN PENUH PERHITUNGAN", next: "str_turn_type" },
      { text: "MANAGEMENT, OTOMASI, DAN BANGUN SISTEM", next: "str_management_type" }
    ]
  },
  str_rts_type: {
    text: "RTS YANG KAMU MAU ITU LEBIH KE ARAH MANA?",
    options: [
      { text: "SEJARAH / PERANG / BANGUN PASUKAN", result: "rts_history_war" },
      { text: "SCI-FI / FAKSI / MAKRO DAN MICRO BERAT", result: "rts_scifi_macro" },
      { text: "RTS TAKTIS DENGAN POSISI DAN COVER", result: "rts_tactical_field" }
    ]
  },
  str_turn_type: {
    text: "GAYA TAKTIKAL APA YANG PALING KAMU SUKA?",
    options: [
      { text: "SQUAD TACTICS / POSITIONING / HIT CHANCE", result: "turn_tactics_squad" },
      { text: "GRAND STRATEGY / BANGUN PERADABAN", result: "turn_grand_strategy" },
      { text: "TURN-BASED RINGKAS TAPI DALAM", result: "turn_compact_strategy" }
    ]
  },
  str_management_type: {
    text: "SISTEM APA YANG PALING SERU BUAT KAMU ATUR?",
    options: [
      { text: "PABRIK, OTOMASI, DAN EFISIENSI PRODUKSI", result: "mgmt_automation" },
      { text: "KOLONI, KRISIS, DAN DRAMA SISTEMIK", result: "mgmt_colony" },
      { text: "MANAJEMEN TIM / BISNIS / ORGANISASI", result: "mgmt_team_business" }
    ]
  }
};