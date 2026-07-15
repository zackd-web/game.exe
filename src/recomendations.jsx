export const recommendations = {
  comp_fps_tactical: {
    rule: "IF (GENRE = AKSI) AND (MODE = KOMPETITIF) AND (SUBTIPE = FPS TAKTIS)",
    title: "VALORANT / COUNTER-STRIKE 2 / RAINBOW SIX SIEGE",
    specs: "Genre: FPS Taktis | Mode: Multiplayer Ranked | Fokus: Aim, komunikasi, map control",
    desc: "Pilihan ini cocok kalau kamu suka ketegangan tinggi, duel presisi, dan kemenangan yang datang dari disiplin tim. Cocok untuk pemain yang menikmati improvement skill dari waktu ke waktu."
  },

  comp_battle_royale: {
    rule: "IF (GENRE = AKSI) AND (MODE = KOMPETITIF) AND (SUBTIPE = BATTLE ROYALE)",
    title: "APEX LEGENDS / PUBG / FORTNITE",
    specs: "Genre: Battle Royale | Mode: Multiplayer | Fokus: Rotasi, survival, clutch moment",
    desc: "Kalau kamu suka sensasi bertahan sampai akhir sambil looting dan baca posisi map, jalur ini paling pas. Tipe game ini memberi tensi tinggi karena satu keputusan kecil bisa menentukan hidup-mati satu match."
  },

  comp_moba: {
    rule: "IF (GENRE = AKSI) AND (MODE = KOMPETITIF) AND (SUBTIPE = MOBA)",
    title: "DOTA 2 / LEAGUE OF LEGENDS / MOBILE LEGENDS",
    specs: "Genre: MOBA | Mode: 5v5 Competitive | Fokus: Role, objektif map, team fight",
    desc: "Cocok untuk kamu yang suka permainan penuh strategi tim, pembagian role, dan momentum comeback. Game tipe ini bukan cuma soal mekanik, tapi juga pemahaman tempo dan kerja sama."
  },

  single_soulslike: {
    rule: "IF (GENRE = AKSI) AND (MODE = SINGLE PLAYER) AND (SUBTIPE = SOULSLIKE)",
    title: "ELDEN RING / SEKIRO / DARK SOULS III",
    specs: "Genre: Action Soulslike | Mode: Single Player | Fokus: Tantangan tinggi, pattern musuh, kesabaran",
    desc: "Ini cocok untuk kamu yang menikmati tantangan keras dan rasa puas setelah berhasil menaklukkan rintangan sulit. Kemenangan di genre ini terasa earned, bukan dikasih gratis."
  },

  single_shooter_hackslash: {
    rule: "IF (GENRE = AKSI) AND (MODE = SINGLE PLAYER) AND (SUBTIPE = FAST COMBAT)",
    title: "DOOM ETERNAL / DEVIL MAY CRY 5 / HI-FI RUSH",
    specs: "Genre: Fast Action / Shooter / Hack and Slash | Mode: Single Player | Fokus: Tempo cepat, combo, agresi",
    desc: "Kalau kamu ingin aksi yang meledak-ledak dan memuaskan secara mekanik, ini jalurnya. Cocok buat pemain yang suka flow gameplay cepat tanpa harus terlalu banyak mikir strategi panjang."
  },

  single_cinematic_action: {
    rule: "IF (GENRE = AKSI) AND (MODE = SINGLE PLAYER) AND (SUBTIPE = SINEMATIK)",
    title: "GOD OF WAR / SPIDER-MAN REMASTERED / UNCHARTED 4",
    specs: "Genre: Action Adventure | Mode: Single Player | Fokus: Cerita, spectacle, dan combat sinematik",
    desc: "Pilihan ini pas kalau kamu ingin kombinasi aksi seru dan presentasi yang terasa megah. Game seperti ini cocok untuk pemain yang suka pengalaman intens tapi tetap mudah dinikmati."
  },

  survival_monster_horror: {
    rule: "IF (GENRE = AKSI) AND (SUBGENRE = SURVIVAL HORROR) AND (SUMBER = MONSTER)",
    title: "RESIDENT EVIL 4 REMAKE / DEAD SPACE / THE EVIL WITHIN",
    specs: "Genre: Survival Horror | Mode: Single Player | Fokus: Atmosfer, resource management, panik",
    desc: "Cocok untuk kamu yang suka ketegangan konstan, musuh mengerikan, dan resource yang terbatas. Daya tarik utamanya ada di rasa terancam yang terus dipertahankan."
  },

  survival_crafting: {
    rule: "IF (GENRE = AKSI) AND (SUBGENRE = SURVIVAL) AND (SUMBER = DUNIA KERAS)",
    title: "THE FOREST / SONS OF THE FOREST / SUBNAUTICA",
    specs: "Genre: Survival Crafting | Mode: Single / Co-op | Fokus: Crafting, eksplorasi, bertahan hidup",
    desc: "Kalau kamu suka membangun, mencari resource, dan bertahan di lingkungan berbahaya, ini sangat cocok. Jenis game ini memberi kepuasan dari progres pelan-pelan dan adaptasi terhadap dunia."
  },

  survival_coop_horror: {
    rule: "IF (GENRE = AKSI) AND (SUBGENRE = HORROR) AND (MODE = CO-OP)",
    title: "LETHAL COMPANY / PHASMOPHOBIA / THE OUTLAST TRIALS",
    specs: "Genre: Co-op Horror | Mode: Multiplayer Co-op | Fokus: Panik bareng, komunikasi, chaos",
    desc: "Pilihan ini cocok kalau kamu ingin takut tapi tetap seru karena dimainkan bareng teman. Ketegangannya kuat, tapi justru momen panik rame-rame yang bikin pengalaman ini memorable."
  },

  story_emotional: {
    rule: "IF (GENRE = PETUALANGAN) AND (FOKUS = CERITA) AND (SUBTIPE = EMOSIONAL)",
    title: "THE LAST OF US / A PLAGUE TALE / LIFE IS STRANGE",
    specs: "Genre: Story-rich Adventure | Mode: Single Player | Fokus: Emosi, hubungan karakter, drama",
    desc: "Kalau kamu bermain untuk merasakan cerita dan hubungan antar karakter, ini pilihan terbaik. Game seperti ini meninggalkan kesan kuat bukan karena mekaniknya saja, tapi karena emosinya."
  },

  story_choice_based: {
    rule: "IF (GENRE = PETUALANGAN) AND (FOKUS = CERITA) AND (SUBTIPE = CHOICE-BASED)",
    title: "DETROIT: BECOME HUMAN / THE WOLF AMONG US / MASS EFFECT",
    specs: "Genre: Narrative Choice-based | Mode: Single Player | Fokus: Pilihan, konsekuensi, cabang cerita",
    desc: "Cocok untuk pemain yang ingin merasa keputusan mereka benar-benar berarti. Setiap pilihan memberi rasa kepemilikan terhadap cerita dan membuat pengalaman terasa personal."
  },

  story_mystery: {
    rule: "IF (GENRE = PETUALANGAN) AND (FOKUS = CERITA) AND (SUBTIPE = MISTERI)",
    title: "OUTER WILDS / FIREWATCH / ALAN WAKE 2",
    specs: "Genre: Narrative Mystery | Mode: Single Player | Fokus: Rasa penasaran, atmosfer, penemuan",
    desc: "Kalau kamu suka narasi yang membuka dirinya sedikit demi sedikit, kategori ini sangat cocok. Kekuatan utamanya ada pada rasa ingin tahu yang terus dijaga."
  },

  world_fantasy_open: {
    rule: "IF (GENRE = PETUALANGAN) AND (FOKUS = OPEN WORLD) AND (SETTING = FANTASY)",
    title: "ELDEN RING / THE WITCHER 3 / SKYRIM",
    specs: "Genre: Fantasy Open World | Mode: Single Player | Fokus: Eksplorasi, lore, kebebasan",
    desc: "Ini pas buat kamu yang suka tenggelam dalam dunia fantasi luas dengan banyak rahasia. Pengalaman utamanya datang dari eksplorasi dan rasa petualangan yang bebas."
  },

  world_urban_open: {
    rule: "IF (GENRE = PETUALANGAN) AND (FOKUS = OPEN WORLD) AND (SETTING = URBAN/MODERN)",
    title: "GTA V / CYBERPUNK 2077 / WATCH DOGS 2",
    specs: "Genre: Urban Open World | Mode: Single Player | Fokus: Kebebasan, kota hidup, aktivitas sampingan",
    desc: "Kalau kamu suka dunia modern yang penuh gangguan menarik, ini rekomendasi yang pas. Tipe game ini seru karena memberi banyak cara untuk bersenang-senang di luar misi utama."
  },

  world_nature_open: {
    rule: "IF (GENRE = PETUALANGAN) AND (FOKUS = OPEN WORLD) AND (SETTING = ALAM/PETUALANGAN)",
    title: "ZELDA: BREATH OF THE WILD / RED DEAD REDEMPTION 2 / HORIZON ZERO DAWN",
    specs: "Genre: Exploration Open World | Mode: Single Player | Fokus: Discovery, pemandangan, perjalanan",
    desc: "Pilihan ini cocok untuk pemain yang suka menjelajah dan menikmati dunia sebagai bagian dari pengalaman utama. Daya tariknya ada pada rasa perjalanan dan penemuan organik."
  },

  rpg_action_modern: {
    rule: "IF (GENRE = PETUALANGAN) AND (FOKUS = RPG) AND (SUBTIPE = ACTION RPG)",
    title: "CYBERPUNK 2077 / DRAGON'S DOGMA 2 / FINAL FANTASY VII REMAKE",
    specs: "Genre: Action RPG | Mode: Single Player | Fokus: Build, combat dinamis, progression",
    desc: "Kalau kamu ingin RPG yang tetap aktif dan modern secara gameplay, ini jalur terbaik. Cocok buat pemain yang ingin keseimbangan antara progres karakter dan aksi real-time."
  },

  rpg_crpg: {
    rule: "IF (GENRE = PETUALANGAN) AND (FOKUS = RPG) AND (SUBTIPE = CRPG/TURN-BASED)",
    title: "BALDUR'S GATE 3 / DIVINITY: ORIGINAL SIN 2 / DISCO ELYSIUM",
    specs: "Genre: CRPG / Deep Narrative RPG | Mode: Single Player | Fokus: Dialog, pilihan, sistem dalam",
    desc: "Pilihan ini pas kalau kamu suka RPG yang benar-benar dalam dan kaya keputusan. Bukan tipe game yang serba cepat, tapi sangat memuaskan buat pemain yang suka berpikir."
  },

  rpg_loot_progression: {
    rule: "IF (GENRE = PETUALANGAN) AND (FOKUS = RPG) AND (SUBTIPE = LOOT/GRIND)",
    title: "DIABLO IV / BORDERLANDS 3 / MONSTER HUNTER: WORLD",
    specs: "Genre: Loot-based RPG | Mode: Single / Co-op | Fokus: Progression, gear, grind yang nagih",
    desc: "Kalau kamu suka terus naik level, cari loot lebih bagus, dan bikin build makin kuat, rekomendasi ini paling cocok. Kepuasannya datang dari loop progres yang terus bergerak."
  },

  party_chaos_coop: {
    rule: "IF (GENRE = CASUAL) AND (MODE = PARTY) AND (SUBTIPE = CHAOS CO-OP)",
    title: "OVERCOOKED 2 / MOVING OUT / PLATEUP!",
    specs: "Genre: Co-op Chaos | Mode: Multiplayer | Fokus: Koordinasi, panik lucu, kerja sama",
    desc: "Ini cocok untuk mabar rame yang niatnya seru-seruan dan bikin kacau bersama. Bukan soal performa, tapi soal momen panik yang justru jadi bahan ketawa."
  },

  party_light_competitive: {
    rule: "IF (GENRE = CASUAL) AND (MODE = PARTY) AND (SUBTIPE = KOMPETITIF RINGAN)",
    title: "FALL GUYS / STUMBLE GUYS / MARIO PARTY",
    specs: "Genre: Party Competitive | Mode: Multiplayer | Fokus: Lomba ringan, mini-game, fun",
    desc: "Kalau kamu ingin kompetisi tapi tidak terlalu serius, ini pilihan aman. Cocok untuk suasana santai yang tetap memberi rasa menang-kalahan tanpa bikin stres."
  },

  party_duo_coop: {
    rule: "IF (GENRE = CASUAL) AND (MODE = PARTY) AND (SUBTIPE = DUO CO-OP)",
    title: "IT TAKES TWO / A WAY OUT / UNRAVEL TWO",
    specs: "Genre: Duo Co-op Adventure | Mode: Co-op 2 pemain | Fokus: Kerja sama, komunikasi, sinkronisasi",
    desc: "Kategori ini cocok kalau kamu ingin pengalaman dua pemain yang benar-benar saling bergantung. Serunya datang dari kerja sama total, bukan sekadar main berdampingan."
  },

  sim_life_farming: {
    rule: "IF (GENRE = CASUAL) AND (SUBGENRE = SIMULASI) AND (FOKUS = LIFE/FARMING)",
    title: "STARDEW VALLEY / ANIMAL CROSSING / CORAL ISLAND",
    specs: "Genre: Cozy Life Sim | Mode: Single / Co-op | Fokus: Rutinitas santai, farming, relasi",
    desc: "Kalau kamu ingin game yang menenangkan dan bisa dinikmati pelan-pelan, ini sangat cocok. Genre ini memberi rasa nyaman lewat progres kecil yang konsisten."
  },

  sim_city_builder: {
    rule: "IF (GENRE = CASUAL) AND (SUBGENRE = SIMULASI) AND (FOKUS = CITY BUILDER)",
    title: "CITIES: SKYLINES / TIMBERBORN / FROSTPUNK",
    specs: "Genre: City Builder | Mode: Single Player | Fokus: Infrastruktur, tata kota, efisiensi",
    desc: "Ini cocok buat kamu yang suka melihat sistem besar tumbuh dari keputusan kecil. Kepuasan utamanya ada pada merancang dan memperbaiki struktur secara bertahap."
  },

  sim_business_management: {
    rule: "IF (GENRE = CASUAL) AND (SUBGENRE = SIMULASI) AND (FOKUS = BISNIS/MANAJEMEN)",
    title: "TWO POINT HOSPITAL / PLANET ZOO / GAME DEV TYCOON",
    specs: "Genre: Management Sim | Mode: Single Player | Fokus: Optimasi, pelayanan, pertumbuhan",
    desc: "Pilihan ini pas untuk pemain yang suka mengatur sistem kerja dan melihat hasil dari keputusan manajerial. Serunya ada pada eksperimen dan efisiensi."
  },

  indie_puzzle: {
    rule: "IF (GENRE = CASUAL) AND (SUBGENRE = INDIE) AND (FOKUS = PUZZLE)",
    title: "PORTAL 2 / THE TALOS PRINCIPLE / BABA IS YOU",
    specs: "Genre: Puzzle Indie | Mode: Single Player | Fokus: Logika, kreativitas, momen aha",
    desc: "Kalau kamu suka teka-teki cerdas yang memberi kepuasan saat solved, ini sangat cocok. Bukan game cepat, tapi kuat di rasa puas intelektual."
  },

  indie_relaxing: {
    rule: "IF (GENRE = CASUAL) AND (SUBGENRE = INDIE) AND (FOKUS = RELAXING)",
    title: "JOURNEY / ABZU / GRIS",
    specs: "Genre: Relaxing Indie | Mode: Single Player | Fokus: Atmosfer, visual, emosi halus",
    desc: "Ini cocok untuk kamu yang ingin pengalaman tenang, indah, dan tidak terlalu menuntut. Kekuatan utamanya ada pada suasana dan rasa yang ditinggalkan."
  },

  indie_unique: {
    rule: "IF (GENRE = CASUAL) AND (SUBGENRE = INDIE) AND (FOKUS = UNIK/EKSPERIMENTAL)",
    title: "DAVE THE DIVER / INSCRYPTION / CULT OF THE LAMB",
    specs: "Genre: Experimental Indie | Mode: Single Player | Fokus: Ide segar, campuran genre, kejutan",
    desc: "Kalau kamu suka game yang aneh tapi justru berkesan, kategori ini cocok. Biasanya game seperti ini tidak mudah ditebak dan memberi pengalaman berbeda dari arus utama."
  },

  rts_history_war: {
    rule: "IF (GENRE = STRATEGI) AND (TIPE = RTS) AND (SETTING = SEJARAH/PERANG)",
    title: "AGE OF EMPIRES IV / TOTAL WAR / COSSACKS 3",
    specs: "Genre: RTS Historical | Mode: Single / Multiplayer | Fokus: Ekonomi, perang, ekspansi",
    desc: "Pilihan ini cocok kalau kamu suka membangun kekuatan secara bertahap lalu mendominasi medan perang. Ada rasa klasik yang kuat dalam pengelolaan resource dan unit."
  },

  rts_scifi_macro: {
    rule: "IF (GENRE = STRATEGI) AND (TIPE = RTS) AND (SETTING = SCI-FI)",
    title: "STARCRAFT II / SUPREME COMMANDER / ASHES OF THE SINGULARITY",
    specs: "Genre: RTS Sci-Fi | Mode: Single / Multiplayer | Fokus: Macro, micro, tempo tinggi",
    desc: "Kalau kamu menikmati tekanan multitasking dan pengambilan keputusan cepat, ini pilihan terbaik. Game seperti ini sangat rewarding untuk pemain yang suka mengasah efisiensi."
  },

  rts_tactical_field: {
    rule: "IF (GENRE = STRATEGI) AND (TIPE = RTS) AND (FOKUS = TAKTIS LAPANGAN)",
    title: "COMPANY OF HEROES / MEN OF WAR / WARNO",
    specs: "Genre: Tactical RTS | Mode: Single / Multiplayer | Fokus: Posisi, cover, unit control",
    desc: "Kategori ini cocok untuk pemain yang suka detail taktik di medan tempur. Bukan sekadar spam unit, tapi soal posisi, timing, dan keputusan mikro yang tepat."
  },

  turn_tactics_squad: {
    rule: "IF (GENRE = STRATEGI) AND (TIPE = TURN-BASED) AND (FOKUS = SQUAD TACTICS)",
    title: "XCOM 2 / PHANTOM DOCTRINE / GEARS TACTICS",
    specs: "Genre: Turn-based Tactics | Mode: Single Player | Fokus: Positioning, risiko, hit chance",
    desc: "Kalau kamu suka strategi yang tegang meski berbasis giliran, ini sangat cocok. Kekuatan utamanya ada pada keputusan kecil yang berdampak besar."
  },

  turn_grand_strategy: {
    rule: "IF (GENRE = STRATEGI) AND (TIPE = TURN-BASED) AND (FOKUS = GRAND STRATEGY)",
    title: "CIVILIZATION VI / HUMANKIND / OLD WORLD",
    specs: "Genre: Grand Strategy | Mode: Single / Multiplayer | Fokus: Ekspansi, diplomasi, pembangunan jangka panjang",
    desc: "Pilihan ini pas kalau kamu menikmati perencanaan jangka panjang dan perkembangan bertahap. Serunya bukan di satu duel, tapi di gambaran besar."
  },

  turn_compact_strategy: {
    rule: "IF (GENRE = STRATEGI) AND (TIPE = TURN-BASED) AND (FOKUS = RINGKAS TAPI DALAM)",
    title: "INTO THE BREACH / SLAY THE SPIRE / ADVANCE WARS",
    specs: "Genre: Compact Strategy | Mode: Single Player | Fokus: Keputusan efisien, sistem ringkas, replayability",
    desc: "Kalau kamu suka strategi padat tanpa perlu sesi terlalu panjang, kategori ini sangat pas. Ringkas di bentuk, tapi tetap kaya di keputusan."
  },

  mgmt_automation: {
    rule: "IF (GENRE = STRATEGI) AND (TIPE = MANAGEMENT) AND (FOKUS = OTOMASI)",
    title: "FACTORIO / SATISFACTORY / SHAPEZ 2",
    specs: "Genre: Automation Builder | Mode: Single / Co-op | Fokus: Efisiensi produksi, scaling, optimasi",
    desc: "Ini cocok buat kamu yang menikmati membangun sistem kompleks hingga berjalan nyaris sempurna. Kepuasannya datang dari melihat kekacauan berubah jadi mesin yang elegan."
  },

  mgmt_colony: {
    rule: "IF (GENRE = STRATEGI) AND (TIPE = MANAGEMENT) AND (FOKUS = KOLONI/KRISIS)",
    title: "RIMWORLD / OXYGEN NOT INCLUDED / FROSTPUNK",
    specs: "Genre: Colony Management | Mode: Single Player | Fokus: Krisis, kebutuhan, cerita sistemik",
    desc: "Kalau kamu suka sistem yang hidup dan penuh masalah tak terduga, ini pilihan yang sangat kuat. Tiap sesi sering menghasilkan cerita unik dari interaksi sistem."
  },

  mgmt_team_business: {
    rule: "IF (GENRE = STRATEGI) AND (TIPE = MANAGEMENT) AND (FOKUS = TIM/BISNIS)",
    title: "FOOTBALL MANAGER / TWO POINT CAMPUS / PROJECT HOSPITAL",
    specs: "Genre: Management Sim | Mode: Single Player | Fokus: Organisasi, performa, optimasi keputusan",
    desc: "Pilihan ini cocok untuk pemain yang senang mengatur orang, proses, dan target jangka panjang. Serunya datang dari pengelolaan yang rapi dan hasil yang perlahan terasa."
  }
};