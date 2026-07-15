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
  },
    // ===== TAMBAHAN BARU =====
  comp_hero_shooter: {
    rule: "IF (GENRE = AKSI) AND (MODE = KOMPETITIF) AND (SUBTIPE = HERO SHOOTER)",
    title: "OVERWATCH 2 / MARVEL RIVALS / TEAM FORTRESS 2",
    specs: "Genre: Hero Shooter | Mode: Multiplayer | Fokus: Ability, role, team composition",
    desc: "Cocok kalau kamu suka kompetitif tapi lebih ke kit karakter dan sinergi tim daripada pure aim saja."
  },

  single_metroidvania: {
    rule: "IF (GENRE = AKSI) AND (MODE = SINGLE) AND (SUBTIPE = METROIDVANIA)",
    title: "HOLLOW KNIGHT / DEAD CELLS / ORI AND THE WILL OF THE WISPS",
    specs: "Genre: Metroidvania / Platformer | Mode: Single Player | Fokus: Map, ability, backtracking",
    desc: "Pas buat kamu yang suka buka area baru, skill baru, dan rasa progress dari eksplorasi map yang saling terhubung."
  },

  survival_extraction: {
    rule: "IF (GENRE = AKSI) AND (SUBGENRE = SURVIVAL) AND (MODE = EXTRACTION)",
    title: "ESCAPE FROM TARKOV / HUNT: SHOWDOWN / THE CYCLE: FRONTIER STYLE",
    specs: "Genre: Extraction Shooter | Mode: Multiplayer | Fokus: Loot, risiko, masuk-keluar",
    desc: "Cocok untuk pemain yang suka tensi tinggi: bawa loot, bertahan, dan keluar hidup-hidup. Risiko dan reward terasa langsung."
  },

  stealth_infiltration: {
    rule: "IF (GENRE = AKSI) AND (SUBGENRE = STEALTH) AND (FOKUS = INFILTRASI)",
    title: "METAL GEAR SOLID V / HITMAN WORLD OF ASSASSINATION / SPLINTER CELL",
    specs: "Genre: Stealth / Infiltration | Mode: Single Player | Fokus: Planning, gadget, approach",
    desc: "Untuk kamu yang suka merencanakan rute, menghindari deteksi, dan menyelesaikan misi dengan gaya sendiri."
  },

  stealth_assassin: {
    rule: "IF (GENRE = AKSI) AND (SUBGENRE = STEALTH) AND (FOKUS = ASSASSIN)",
    title: "ASSASSIN'S CREED ODYSSEY / DISHONORED 2 / SHADOWS OF MORDOR",
    specs: "Genre: Action Stealth | Mode: Single Player | Fokus: Parkour, eliminasi, freedom",
    desc: "Cocok kalau kamu ingin stealth yang tetap aktif: bergerak cepat, pilih target, dan main agresif saat perlu."
  },

  stealth_horror: {
    rule: "IF (GENRE = AKSI) AND (SUBGENRE = STEALTH) AND (FOKUS = HOROR)",
    title: "ALIEN: ISOLATION / OUTLAST / AMNESIA: THE BUNKER",
    specs: "Genre: Stealth Horror | Mode: Single Player | Fokus: Hide, audio, ketegangan",
    desc: "Pas buat kamu yang ingin panik sambil bersembunyi, bukan adu tembak. Atmosfer dan ancaman jadi pusat pengalaman."
  },

  story_scifi: {
    rule: "IF (GENRE = PETUALANGAN) AND (FOKUS = CERITA) AND (SETTING = SCI-FI)",
    title: "NIER: AUTOMATA / SOMA / CONTROL",
    specs: "Genre: Sci-Fi Narrative | Mode: Single Player | Fokus: Tema, dunia, twist",
    desc: "Cocok untuk pemain yang suka cerita spekulatif, dunia aneh, dan pertanyaan besar di balik gameplay."
  },

  world_apocalypse: {
    rule: "IF (GENRE = PETUALANGAN) AND (FOKUS = OPEN WORLD) AND (SETTING = APOCALYPSE)",
    title: "THE LAST OF US PART II / DAYS GONE / METRO EXODUS",
    specs: "Genre: Post-Apocalypse Adventure | Mode: Single Player | Fokus: Survive, journey, dunia rusak",
    desc: "Untuk kamu yang ingin dunia runtuh, perjalanan panjang, dan rasa bertahan di tengah kehancuran."
  },

  rpg_jrpg: {
    rule: "IF (GENRE = PETUALANGAN) AND (FOKUS = RPG) AND (SUBTIPE = JRPG)",
    title: "PERSONA 5 ROYAL / SEA OF STARS / OCTOPATH TRAVELER II",
    specs: "Genre: JRPG | Mode: Single Player | Fokus: Party, turn-based, karakter",
    desc: "Cocok kalau kamu suka party, sistem battle bergiliran, dan cast karakter yang kuat di cerita."
  },

  puzzle_environmental: {
    rule: "IF (GENRE = PETUALANGAN) AND (FOKUS = PUZZLE) AND (TIPE = LINGKUNGAN)",
    title: "THE WITNESS / SUPERLIMINAL / MANIFOLD GARDEN",
    specs: "Genre: Environmental Puzzle | Mode: Single Player | Fokus: Observasi, logika ruang",
    desc: "Pas untuk pemain yang suka teka-teki dari lingkungan, perspektif, dan momen 'aha' tanpa combat berat."
  },

  puzzle_investigation: {
    rule: "IF (GENRE = PETUALANGAN) AND (FOKUS = PUZZLE) AND (TIPE = INVESTIGASI)",
    title: "RETURN OF THE OBRA DINN / LA NOIRE / PHOENIX WRIGHT",
    specs: "Genre: Investigation | Mode: Single Player | Fokus: Clue, deduksi, kasus",
    desc: "Cocok kalau kamu senang mengumpulkan petunjuk, menyusun teori, dan memecahkan kasus."
  },

  puzzle_narrative: {
    rule: "IF (GENRE = PETUALANGAN) AND (FOKUS = PUZZLE) AND (TIPE = NARATIF)",
    title: "HEAVEN'S VAULT / HER STORY / OUTER WILDS",
    specs: "Genre: Narrative Puzzle | Mode: Single Player | Fokus: Story, discovery, meaning",
    desc: "Untuk kamu yang ingin puzzle menyatu dengan cerita, bukan teka-teki terpisah dari narasi."
  },

  party_social_deduction: {
    rule: "IF (GENRE = CASUAL) AND (MODE = PARTY) AND (SUBTIPE = SOCIAL DEDUCTION)",
    title: "AMONG US / PROJECT WINTER / TOWN OF SALEM",
    specs: "Genre: Social Deduction | Mode: Multiplayer | Fokus: Bluff, diskusi, pengkhianat",
    desc: "Cocok buat mabar yang penuh tuduhan, bohong, dan ketawa karena saling curiga."
  },

  sim_creative_sandbox: {
    rule: "IF (GENRE = CASUAL) AND (SUBGENRE = SIM) AND (FOKUS = SANDBOX)",
    title: "MINECRAFT / TERRARIA / NO MAN'S SKY",
    specs: "Genre: Sandbox / Creative | Mode: Single / Multi | Fokus: Build, explore, freeform",
    desc: "Pas kalau kamu ingin kebebasan penuh: bangun, eksplor, dan tentukan sendiri tujuan bermain."
  },

  indie_walking_story: {
    rule: "IF (GENRE = CASUAL) AND (SUBGENRE = INDIE) AND (FOKUS = WALKING STORY)",
    title: "WHAT REMAINS OF EDITH FINCH / FIREWATCH / GONE HOME",
    specs: "Genre: Walking Sim / Story | Mode: Single Player | Fokus: Atmosfer, narasi pendek",
    desc: "Cocok untuk sesi singkat yang kuat di emosi dan cerita, tanpa sistem gameplay yang rumit."
  },

  rhythm_arcade: {
    rule: "IF (GENRE = CASUAL) AND (SUBGENRE = RHYTHM) AND (TIPE = ARCADE)",
    title: "OSU! / BEAT SABER / DJMAX RESPECT V",
    specs: "Genre: Rhythm Arcade | Mode: Single Player | Fokus: Timing, score, skill ceiling",
    desc: "Untuk kamu yang suka kejar skor, pattern sulit, dan sensasi 'in the zone' mengikuti beat."
  },

  rhythm_story: {
    rule: "IF (GENRE = CASUAL) AND (SUBGENRE = RHYTHM) AND (TIPE = STORY)",
    title: "HI-FI RUSH / SAYONARA WILD HEARTS / THUMPER",
    specs: "Genre: Rhythm Story / Hybrid | Mode: Single Player | Fokus: Musik + narasi/aksi",
    desc: "Cocok kalau kamu ingin rhythm yang terasa seperti pengalaman, bukan cuma chart score."
  },

  rhythm_coop: {
    rule: "IF (GENRE = CASUAL) AND (SUBGENRE = RHYTHM) AND (MODE = CO-OP)",
    title: "BEAT SABER (MULTI) / CRYPT OF THE NECRODANCER / RHYTHM HEAVEN STYLE PARTY",
    specs: "Genre: Rhythm Co-op / Party | Mode: Multi / Co-op | Fokus: Timing bareng, fun",
    desc: "Pas untuk main bareng teman dengan fokus sinkron ke musik dan momen kocak saat miss."
  },

  rts_moba_hybrid: {
    rule: "IF (GENRE = STRATEGI) AND (TIPE = RTS) AND (SUBTIPE = HYBRID)",
    title: "DOTA UNDERLORDS STYLE / STORMSGATE / HYBRID RTS-MOBA PICKS",
    specs: "Genre: RTS / Hybrid | Mode: Multi / Single | Fokus: Lane, unit, tempo",
    desc: "Untuk pemain yang suka elemen MOBA tapi tetap ingin kontrol unit dan keputusan strategi."
  },

  turn_4x: {
    rule: "IF (GENRE = STRATEGI) AND (TIPE = TURN-BASED) AND (SUBTIPE = 4X)",
    title: "STELLARIS / ENDLESS SPACE 2 / CIVILIZATION VI",
    specs: "Genre: 4X Strategy | Mode: Single / Multi | Fokus: Explore, expand, exploit, exterminate",
    desc: "Cocok kalau kamu suka membangun peradaban atau empire dalam skala besar dan jangka panjang."
  },

  mgmt_logistics: {
    rule: "IF (GENRE = STRATEGI) AND (TIPE = MANAGEMENT) AND (FOKUS = LOGISTIK)",
    title: "TRANSPORT FEVER 2 / WORKERS & RESOURCES / MINDustry",
    specs: "Genre: Logistics / Supply | Mode: Single Player | Fokus: Rute, throughput, bottleneck",
    desc: "Pas buat kamu yang senang merancang alur barang, transport, dan menambal bottleneck sistem."
  },

  card_deckbuilder: {
    rule: "IF (GENRE = STRATEGI OR ROGUELIKE) AND (FOKUS = DECKBUILDER)",
    title: "SLAY THE SPIRE / BALATRO / MONSTER TRAIN",
    specs: "Genre: Deckbuilder | Mode: Single Player | Fokus: Kartu, sinergi, run",
    desc: "Cocok untuk pemain yang suka merakit deck tiap run dan menemukan kombo gila di tengah jalan."
  },

  card_tcg: {
    rule: "IF (GENRE = STRATEGI) AND (FOKUS = TCG)",
    title: "HEARTHSTONE / LEGENDS OF RUNETERRA / MAGIC: THE GATHERING ARENA",
    specs: "Genre: TCG / CCG | Mode: Multiplayer | Fokus: Meta, deck, ladder",
    desc: "Untuk kamu yang suka koleksi kartu, susun deck, dan adu meta di ladder kompetitif."
  },

  card_autobattler: {
    rule: "IF (GENRE = STRATEGI OR ROGUELIKE) AND (FOKUS = AUTOBATTLER)",
    title: "TEAMFIGHT TACTICS / AUTO CHESS / SUPER AUTO PETS",
    specs: "Genre: Autobattler | Mode: Multi / Single | Fokus: Comp, economy, positioning",
    desc: "Pas kalau kamu suka menyusun komposisi, ekonomi, dan lihat unit bertarung otomatis."
  },

  sports_football: {
    rule: "IF (GENRE = OLAHRAGA) AND (SUBTIPE = SEPAKBOLA)",
    title: "EA SPORTS FC / EFOOTBALL / FOOTBALL MANAGER",
    specs: "Genre: Football | Mode: Single / Multi | Fokus: Match, career, tactics",
    desc: "Cocok untuk pecinta bola: main langsung di lapangan atau atur skuat dan taktik dari bangku pelatih."
  },

  sports_basketball: {
    rule: "IF (GENRE = OLAHRAGA) AND (SUBTIPE = BASKET)",
    title: "NBA 2K / NBA LIVE STYLE / PBA STYLE ARCADE",
    specs: "Genre: Basketball | Mode: Single / Multi | Fokus: MyCareer, park, timing",
    desc: "Untuk kamu yang suka basket digital, build pemain, dan momen clutch di quarter terakhir."
  },

  sports_multi: {
    rule: "IF (GENRE = OLAHRAGA) AND (SUBTIPE = MULTI-SPORT)",
    title: "ROCKET LEAGUE / NINTENDO SWITCH SPORTS / KINDA SORTA SPORTS PARTY",
    specs: "Genre: Multi-sport / Arcade Sport | Mode: Multiplayer | Fokus: Skill, fun, sesi pendek",
    desc: "Pas kalau kamu ingin olahraga yang santai, cepat, dan enak buat mabar tanpa sesi terlalu panjang."
  },

  racing_sim: {
    rule: "IF (GENRE = BALAP) AND (TIPE = SIM)",
    title: "ASSETTO CORSA / I RACING / FORZA MOTORSPORT",
    specs: "Genre: Sim Racing | Mode: Single / Multi | Fokus: Physics, setup, track craft",
    desc: "Cocok untuk pemain yang serius soal handling, setup mobil, dan konsistensi di lintasan."
  },

  racing_arcade: {
    rule: "IF (GENRE = BALAP) AND (TIPE = ARCADE)",
    title: "NEED FOR SPEED HEAT / BURNOUT PARADISE / MARIO KART 8",
    specs: "Genre: Arcade Racing | Mode: Single / Multi | Fokus: Speed, power-up, fun",
    desc: "Untuk kamu yang ingin balap seru, agresif, dan tidak terlalu terikat fisika sim penuh."
  },

  racing_openworld: {
    rule: "IF (GENRE = BALAP) AND (TIPE = OPEN WORLD)",
    title: "FORZA HORIZON 5 / THE CREW MOTORFEST / BEAMNG.DRIVE",
    specs: "Genre: Open World Driving | Mode: Single / Multi | Fokus: Explore, cars, free roam",
    desc: "Pas kalau kamu suka keliling map, koleksi mobil, dan sesi free roam yang santai tapi indah."
  },

  fighting_traditional: {
    rule: "IF (GENRE = FIGHTING) AND (TIPE = TRADITIONAL)",
    title: "STREET FIGHTER 6 / TEKKEN 8 / GUILTY GEAR STRIVE",
    specs: "Genre: Fighting | Mode: Versus | Fokus: Combo, footsies, ranked",
    desc: "Cocok untuk adu skill 1v1, lab combo, dan naik rank lewat matchup yang ketat."
  },

  fighting_platform: {
    rule: "IF (GENRE = FIGHTING) AND (TIPE = PLATFORM FIGHTER)",
    title: "SUPER SMASH BROS. ULTIMATE / RIVALS OF AETHER / MULTIVERSUS",
    specs: "Genre: Platform Fighter | Mode: Party / Versus | Fokus: Stage, knockback, free-for-all",
    desc: "Untuk fighting yang lebih party-friendly, stage control, dan mabar kacau yang tetap kompetitif."
  },

  fighting_brawler: {
    rule: "IF (GENRE = FIGHTING) AND (TIPE = BEAT EM UP)",
    title: "STREETS OF RAGE 4 / HADES-ADJACENT BRAWL / TEENAGE MUTANT NINJA TURTLES",
    specs: "Genre: Beat 'em up / Brawler | Mode: Single / Co-op | Fokus: Combo, wave, co-op",
    desc: "Pas buat kamu yang suka hajar musuh bareng teman, combo simple, dan sesi co-op yang lega."
  },

  rogue_bullet_hell: {
    rule: "IF (GENRE = ROGUELIKE) AND (SUBTIPE = BULLET HELL)",
    title: "ENTER THE GUNGEON / HADES / BINDING OF ISAAC",
    specs: "Genre: Action Roguelike | Mode: Single Player | Fokus: Dodge, pattern, run",
    desc: "Cocok kalau kamu suka reflex, pattern musuh, dan run yang semakin gila seiring unlock."
  },

  rogue_hackslash: {
    rule: "IF (GENRE = ROGUELIKE) AND (SUBTIPE = HACK AND SLASH)",
    title: "HADES II / DEAD CELLS / VAMPIRE SURVIVORS-ADJACENT ACTION",
    specs: "Genre: Action Roguelike | Mode: Single Player | Fokus: Weapon, dash, build",
    desc: "Untuk combat cepat, weapon variety, dan rasa 'satu run lagi' yang nagih."
  },

  rogue_fps: {
    rule: "IF (GENRE = ROGUELIKE) AND (SUBTIPE = FPS)",
    title: "GUNFIRE REBORN / ROBOTRON-LIKE / DEEP ROCK GALACTIC ROGUE MODES",
    specs: "Genre: FPS Roguelike | Mode: Single / Co-op | Fokus: Gun, proc, run",
    desc: "Pas buat kamu yang ingin roguelike tapi tetap first-person dan gunplay sebagai inti."
  },

  rogue_item_synergy: {
    rule: "IF (GENRE = ROGUELIKE) AND (FOKUS = ITEM SYNERGY)",
    title: "RISK OF RAIN 2 / NOITA / BROTATO",
    specs: "Genre: Roguelike Build | Mode: Single / Multi | Fokus: Item, scaling, chaos build",
    desc: "Cocok kalau kamu suka build gila dari item stacking dan sinergi yang bikin run terasa unik."
  },

  rogue_meta_progress: {
    rule: "IF (GENRE = ROGUELIKE) AND (FOKUS = META PROGRESSION)",
    title: "HADES / DEAD CELLS / ROGUE LEGACY 2",
    specs: "Genre: Roguelike Progression | Mode: Single Player | Fokus: Unlock, story, power-up permanen",
    desc: "Untuk pemain yang suka setiap kematian tetap terasa maju lewat unlock dan meta progression."
  },

  rogue_tactics: {
    rule: "IF (GENRE = ROGUELIKE) AND (SUBTIPE = TACTICS)",
    title: "INTO THE BREACH / BATTLETECH ROGUE / XCOM-LIKE RUNS",
    specs: "Genre: Tactics Roguelike | Mode: Single Player | Fokus: Grid, planning, tight runs",
    desc: "Pas kalau kamu ingin roguelike yang lebih mikir posisi dan keputusan per giliran."
  },

  rogue_survival_wave: {
    rule: "IF (GENRE = ROGUELIKE) AND (SUBTIPE = SURVIVAL WAVE)",
    title: "VAMPIRE SURVIVORS / BROTATO / HALLS OF TORMENT",
    specs: "Genre: Survival Roguelike | Mode: Single Player | Fokus: Wave, build, survive time",
    desc: "Cocok untuk sesi 'tahan selama mungkin', upgrade cepat, dan build yang meledak di late run."
  },
    // ========== REKOMENDASI MOBILE (dipakai kalau platform = mobile) ==========
  mobile_comp_fps: {
    rule: "IF (GENRE = AKSI) AND (MODE = KOMPETITIF) AND (PLATFORM = MOBILE) AND (SUBTIPE = FPS)",
    title: "CALL OF DUTY MOBILE / PUBG NEW STATE / BLOOD STRIKE",
    specs: "Genre: FPS Mobile | Platform: HP | Fokus: Aim touch/gyro, ranked, sesi cepat",
    desc: "Rekomendasi untuk HP: sensasi FPS kompetitif tanpa harus PC. Cocok untuk ranked singkat dan clutch di layar sentuh."
  },
  mobile_comp_br: {
    rule: "IF (GENRE = AKSI) AND (MODE = KOMPETITIF) AND (PLATFORM = MOBILE) AND (SUBTIPE = BATTLE ROYALE)",
    title: "PUBG MOBILE / FREE FIRE / COD MOBILE BR",
    specs: "Genre: Battle Royale Mobile | Platform: HP | Fokus: Loot, rotasi, clutch",
    desc: "Jalur BR yang wajar di HP. Tetap tensi tinggi, tapi kontrol dan map disesuaikan mobile."
  },
  mobile_comp_moba: {
    rule: "IF (GENRE = AKSI) AND (MODE = KOMPETITIF) AND (PLATFORM = MOBILE) AND (SUBTIPE = MOBA)",
    title: "MOBILE LEGENDS / HONOR OF KINGS / WILDRIFT",
    specs: "Genre: MOBA Mobile | Platform: HP | Fokus: Role, team fight, ranked",
    desc: "MOBA native mobile: match lebih pendek, kontrol sentuh, tetap butuh map sense dan kerja sama."
  },
  mobile_action_hard: {
    rule: "IF (GENRE = AKSI) AND (MODE = SINGLE) AND (PLATFORM = MOBILE) AND (SUBTIPE = SULIT)",
    title: "DEAD CELLS MOBILE / PASCAL'S WAGER / GRIMVALE",
    specs: "Genre: Action sulit di HP | Platform: Mobile | Fokus: Pattern, skill, challenge",
    desc: "Alternatif soulslike/aksi berat yang realistis di HP, bukan port console berat."
  },
  mobile_action_fast: {
    rule: "IF (GENRE = AKSI) AND (MODE = SINGLE) AND (PLATFORM = MOBILE) AND (SUBTIPE = CEPAT)",
    title: "DEAD CELLS / SOUL KNIGHT / SKY FORCE RELOADED",
    specs: "Genre: Fast action mobile | Platform: HP | Fokus: Tempo, skill, run pendek",
    desc: "Aksi cepat yang enak di sesi singkat di HP."
  },
  mobile_action_story: {
    rule: "IF (GENRE = AKSI) AND (MODE = SINGLE) AND (PLATFORM = MOBILE) AND (SUBTIPE = CERITA)",
    title: "GENSHIN IMPACT / HONKAI STAR RAIL / LIFE IS STRANGE MOBILE",
    specs: "Genre: Action / story mobile | Platform: HP | Fokus: Cerita, karakter, progres",
    desc: "Pengalaman aksi/cerita yang memang didesain atau dioptimalkan untuk mobile."
  },
  mobile_horror: {
    rule: "IF (GENRE = HORROR) AND (PLATFORM = MOBILE)",
    title: "DREADOUT MOBILE / HAUNTED HOSPITAL / DEEMO-STYLE HORROR SHORTS / DEATH PARK",
    specs: "Genre: Horror mobile | Platform: HP | Fokus: Atmosfer, jump scare, sesi pendek",
    desc: "Horror yang cocok di HP: singkat, tegang, tanpa butuh PC high-end."
  },
  mobile_horror_coop: {
    rule: "IF (GENRE = HORROR) AND (MODE = CO-OP) AND (PLATFORM = MOBILE)",
    title: "IDENTITY V / DEAD BY DAYLIGHT MOBILE / PROJECT: PLAYTIME STYLE",
    specs: "Genre: Co-op / asym horror mobile | Platform: HP | Fokus: Mabar, panik, chase",
    desc: "Panik bareng di HP—bukan Phasmophobia PC, tapi vibe chase/horror multipemain di mobile."
  },
  mobile_survival: {
    rule: "IF (GENRE = SURVIVAL) AND (PLATFORM = MOBILE)",
    title: "LAST DAY ON EARTH / FROSTPUNK MOBILE / ARK MOBILE",
    specs: "Genre: Survival mobile | Platform: HP | Fokus: Craft, base, bertahan",
    desc: "Survival crafting yang wajar di HP, bukan The Forest / Subnautica PC."
  },
  mobile_story: {
    rule: "IF (GENRE = PETUALANGAN) AND (FOKUS = CERITA) AND (PLATFORM = MOBILE)",
    title: "EPIC / CHOICES / LIFE IS STRANGE / GENSHIN STORY QUESTS",
    specs: "Genre: Story mobile | Platform: HP | Fokus: Narasi, karakter, pilihan",
    desc: "Cerita kuat di HP tanpa harus main TLOU / console exclusive."
  },
  mobile_open_fantasy: {
    rule: "IF (GENRE = OPEN WORLD) AND (SETTING = FANTASY) AND (PLATFORM = MOBILE)",
    title: "GENSHIN IMPACT / TORAM ONLINE / BLACK DESERT MOBILE",
    specs: "Genre: Fantasy open world mobile | Platform: HP | Fokus: Explore, gacha/MMO loop, world",
    desc: "Open world fantasi di HP. Bukan Elden Ring / Skyrim—tapi eksplorasi luas yang memang mobile-first."
  },
  mobile_open_urban: {
    rule: "IF (GENRE = OPEN WORLD) AND (SETTING = URBAN) AND (PLATFORM = MOBILE)",
    title: "GTA SAN ANDREAS DEFINITIVE / GANGSTAR VEGAS / CYBER HUNTER STYLE",
    specs: "Genre: Urban open world mobile | Platform: HP | Fokus: Kota, misi, kebebasan",
    desc: "Open world kota di HP. Bukan GTA V PC—tapi kebebasan urban yang masuk akal di mobile."
  },
  mobile_open_nature: {
    rule: "IF (GENRE = OPEN WORLD) AND (SETTING = ALAM) AND (PLATFORM = MOBILE)",
    title: "GENSHIN IMPACT / SKY: CHILDREN OF THE LIGHT / ALBION ONLINE",
    specs: "Genre: Explore / travel mobile | Platform: HP | Fokus: Dunia, journey, discovery",
    desc: "Eksplorasi alam/dunia indah di HP. Bukan Zelda BOTW / RDR2—itu console/PC."
  },
  mobile_rpg: {
    rule: "IF (GENRE = RPG) AND (PLATFORM = MOBILE)",
    title: "GENSHIN IMPACT / HONKAI STAR RAIL / RAID SHADOW LEGENDS-ALT: ANOTHER EDEN",
    specs: "Genre: RPG mobile | Platform: HP | Fokus: Build, party, progres harian",
    desc: "RPG yang hidup di ekosistem mobile, bukan CRPG PC seperti Baldur's Gate."
  },
  mobile_rpg_loot: {
    rule: "IF (GENRE = RPG) AND (FOKUS = LOOT) AND (PLATFORM = MOBILE)",
    title: "DIABLO IMMORTAL / PATH OF EXILE MOBILE / TORAM ONLINE",
    specs: "Genre: Loot RPG mobile | Platform: HP | Fokus: Grind, gear, build",
    desc: "Loop loot/grind di HP tanpa harus Diablo IV PC."
  },
  mobile_party: {
    rule: "IF (GENRE = PARTY) AND (PLATFORM = MOBILE)",
    title: "STUMBLE GUYS / AMONG US / MONOPOLY GO / FALL GUYS MOBILE",
    specs: "Genre: Party mobile | Platform: HP | Fokus: Mabar, fun, sesi pendek",
    desc: "Party/mabar yang native di HP."
  },
  mobile_sim_life: {
    rule: "IF (GENRE = SIM) AND (FOKUS = LIFE) AND (PLATFORM = MOBILE)",
    title: "HAY DAY / THE SIMS MOBILE / STARDEW VALLEY MOBILE",
    specs: "Genre: Life / farming mobile | Platform: HP | Fokus: Cozy, harian, santai",
    desc: "Life sim / farming yang enak di HP."
  },
  mobile_sim_build: {
    rule: "IF (GENRE = SIM) AND (FOKUS = BUILD) AND (PLATFORM = MOBILE)",
    title: "SIMCITY BUILDIT / TOWNSHIP / POCKET CITY 2",
    specs: "Genre: City / build mobile | Platform: HP | Fokus: Bangun, tata, idle progres",
    desc: "Builder di HP—bukan Cities Skylines PC."
  },
  mobile_puzzle: {
    rule: "IF (GENRE = PUZZLE) AND (PLATFORM = MOBILE)",
    title: "MONUMENT VALLEY / THE ROOM / BABY IS YOU-ALT: LYNE / MONUMENT VALLEY 2",
    specs: "Genre: Puzzle mobile | Platform: HP | Fokus: Logika, sesi pendek",
    desc: "Puzzle sentuh yang cocok di HP."
  },
  mobile_cozy: {
    rule: "IF (GENRE = COZY / INDIE) AND (PLATFORM = MOBILE)",
    title: "ALBION / SKY: CHILDREN OF THE LIGHT / TOCA LIFE WORLD",
    specs: "Genre: Cozy mobile | Platform: HP | Fokus: Santai, visual, low stress",
    desc: "Santai di HP tanpa tuntutan sesi maraton PC."
  },
  mobile_rhythm: {
    rule: "IF (GENRE = RHYTHM) AND (PLATFORM = MOBILE)",
    title: "OSU!DROID / CYTUS II / PHIGROS / BEATSTAR",
    specs: "Genre: Rhythm mobile | Platform: HP | Fokus: Timing, score, chart",
    desc: "Rhythm game yang memang hidup di ekosistem mobile."
  },
  mobile_strategy: {
    rule: "IF (GENRE = STRATEGI) AND (PLATFORM = MOBILE)",
    title: "CLASH ROYALE / PLANTS VS ZOMBIES 2 / CIVILIZATION REVOLUTION 2 / NORTHGARD MOBILE",
    specs: "Genre: Strategy mobile | Platform: HP | Fokus: Taktik, sesi pendek–menengah",
    desc: "Strategi yang wajar di HP—bukan StarCraft / Factorio full PC."
  },
  mobile_card: {
    rule: "IF (GENRE = CARD) AND (PLATFORM = MOBILE)",
    title: "HEARTHSTONE / LEGENDS OF RUNETERRA / SLAY THE SPIRE MOBILE / MARVEL SNAP",
    specs: "Genre: Card / deck mobile | Platform: HP | Fokus: Deck, match pendek",
    desc: "Card game yang sangat cocok di HP."
  },
  mobile_sports: {
    rule: "IF (GENRE = OLAHRAGA) AND (PLATFORM = MOBILE)",
    title: "EA FC MOBILE / eFOOTBALL / NBA INFINITE",
    specs: "Genre: Sports mobile | Platform: HP | Fokus: Match cepat, ranked, event",
    desc: "Olahraga digital di HP."
  },
  mobile_racing: {
    rule: "IF (GENRE = BALAP) AND (PLATFORM = MOBILE)",
    title: "ASPHALT 9 / REAL RACING 3 / NEED FOR SPEED NO LIMITS",
    specs: "Genre: Racing mobile | Platform: HP | Fokus: Race, upgrade, touch control",
    desc: "Balap arcade/sim-lite di HP—bukan Assetto Corsa wheel sim."
  },
  mobile_fighting: {
    rule: "IF (GENRE = FIGHTING) AND (PLATFORM = MOBILE)",
    title: "STREET FIGHTER DUEL / MORTAL KOMBAT MOBILE / SHADOW FIGHT 3",
    specs: "Genre: Fighting mobile | Platform: HP | Fokus: Combo, PvP, fight short",
    desc: "Fighting yang diadaptasi untuk kontrol mobile."
  },
  mobile_rogue: {
    rule: "IF (GENRE = ROGUELIKE) AND (PLATFORM = MOBILE)",
    title: "DEAD CELLS MOBILE / SLAY THE SPIRE / HADES-ALT MOBILE ROGUELIKES / VAMPIRE SURVIVORS-LIKE",
    specs: "Genre: Roguelike mobile | Platform: HP | Fokus: Run, build, one more try",
    desc: "Roguelike yang enak di sesi HP."
  },
  mobile_fallback: {
    rule: "IF (PLATFORM = MOBILE) AND (NO SPECIFIC MOBILE MAPPING)",
    title: "GENSHIN IMPACT / MOBILE LEGENDS / COD MOBILE / STARDEW VALLEY MOBILE",
    specs: "Genre: Mixed mobile picks | Platform: HP | Fokus: Aman, populer, mudah dimulai",
    desc: "Fallback aman kalau preferensi spesifik belum punya mapping mobile. Tetap game yang wajar di HP."
  }
};