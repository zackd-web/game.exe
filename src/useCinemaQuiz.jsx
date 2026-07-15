import { useState } from 'react';
import { quizData } from './quizData';

/**
 * Kalau user pilih MOBILE, key PC/console diganti ke key mobile.
 * Key yang sudah cocok di HP dibiarkan.
 */
const MOBILE_MAP = {
  // Aksi kompetitif
  comp_fps_tactical: 'mobile_comp_fps',
  comp_battle_royale: 'mobile_comp_br',
  comp_moba: 'mobile_comp_moba',
  comp_hero_shooter: 'mobile_comp_fps',

  // Single aksi (console-heavy)
  single_soulslike: 'mobile_action_hard',
  single_shooter_hackslash: 'mobile_action_fast',
  single_cinematic_action: 'mobile_action_story',
  single_metroidvania: 'mobile_action_fast',

  // Survival / stealth
  survival_monster_horror: 'mobile_horror',
  survival_crafting: 'mobile_survival',
  survival_coop_horror: 'mobile_horror_coop',
  survival_extraction: 'mobile_comp_br',
  stealth_infiltration: 'mobile_action_story',
  stealth_assassin: 'mobile_action_story',
  stealth_horror: 'mobile_horror',

  // Petualangan / open world (ini yang bikin Zelda/RDR muncul di HP)
  story_emotional: 'mobile_story',
  story_choice_based: 'mobile_story',
  story_mystery: 'mobile_story',
  story_scifi: 'mobile_story',
  world_fantasy_open: 'mobile_open_fantasy',
  world_urban_open: 'mobile_open_urban',
  world_nature_open: 'mobile_open_nature',
  world_apocalypse: 'mobile_open_urban',
  rpg_action_modern: 'mobile_rpg',
  rpg_crpg: 'mobile_rpg',
  rpg_loot_progression: 'mobile_rpg_loot',
  rpg_jrpg: 'mobile_rpg',
  puzzle_environmental: 'mobile_puzzle',
  puzzle_investigation: 'mobile_puzzle',
  puzzle_narrative: 'mobile_story',

  // Casual
  party_chaos_coop: 'mobile_party',
  party_light_competitive: 'mobile_party',
  party_duo_coop: 'mobile_party',
  party_social_deduction: 'mobile_party',
  sim_life_farming: 'mobile_sim_life',
  sim_city_builder: 'mobile_sim_build',
  sim_business_management: 'mobile_sim_build',
  sim_creative_sandbox: 'mobile_sim_build',
  indie_puzzle: 'mobile_puzzle',
  indie_relaxing: 'mobile_cozy',
  indie_unique: 'mobile_cozy',
  indie_walking_story: 'mobile_story',
  rhythm_arcade: 'mobile_rhythm',
  rhythm_story: 'mobile_rhythm',
  rhythm_coop: 'mobile_rhythm',

  // Strategi
  rts_history_war: 'mobile_strategy',
  rts_scifi_macro: 'mobile_strategy',
  rts_tactical_field: 'mobile_strategy',
  rts_moba_hybrid: 'mobile_comp_moba',
  turn_tactics_squad: 'mobile_strategy',
  turn_grand_strategy: 'mobile_strategy',
  turn_compact_strategy: 'mobile_strategy',
  turn_4x: 'mobile_strategy',
  mgmt_automation: 'mobile_sim_build',
  mgmt_colony: 'mobile_sim_build',
  mgmt_team_business: 'mobile_sim_build',
  mgmt_logistics: 'mobile_sim_build',
  card_deckbuilder: 'mobile_card',
  card_tcg: 'mobile_card',
  card_autobattler: 'mobile_card',

  // Olahraga / balap / fighting
  sports_football: 'mobile_sports',
  sports_basketball: 'mobile_sports',
  sports_multi: 'mobile_sports',
  racing_sim: 'mobile_racing',
  racing_arcade: 'mobile_racing',
  racing_openworld: 'mobile_racing',
  fighting_traditional: 'mobile_fighting',
  fighting_platform: 'mobile_party',
  fighting_brawler: 'mobile_fighting',

  // Roguelike
  rogue_bullet_hell: 'mobile_rogue',
  rogue_hackslash: 'mobile_rogue',
  rogue_fps: 'mobile_comp_fps',
  rogue_item_synergy: 'mobile_rogue',
  rogue_meta_progress: 'mobile_rogue',
  rogue_tactics: 'mobile_strategy',
  rogue_survival_wave: 'mobile_rogue'
};

function resolveFinalKey(baseKey, platform) {
  if (!baseKey) return null;
  // PC / console / campur → pakai rekomendasi default (PC/console)
  if (platform !== 'mobile') return baseKey;
  // Mobile → map ke key mobile, fallback aman
  return MOBILE_MAP[baseKey] || 'mobile_fallback';
}

export function useCinemaQuiz() {
  const [currentStep, setCurrentStep] = useState('start');
  const [stepCount, setStepCount] = useState(1);
  const [resultKey, setResultKey] = useState(null);
  const [pendingResult, setPendingResult] = useState(null);
  const [platform, setPlatform] = useState(null);

  const currentData = quizData[currentStep];

  const handleOptionClick = (option) => {
    // Langsung selesai (opsional, kalau masih ada result mentah)
    if (option.result) {
      setResultKey(option.result);
      return;
    }

    // Simpan kandidat rekomendasi, lanjut filter
    if (option.stash) {
      setPendingResult(option.stash);
      setCurrentStep(option.next);
      setStepCount((prev) => prev + 1);
      return;
    }

    // Simpan platform, lanjut ke durasi sesi
    if (option.platform) {
      setPlatform(option.platform);
      setCurrentStep(option.next);
      setStepCount((prev) => prev + 1);
      return;
    }

    // Selesai: gabungkan pending + platform
    if (option.finalize) {
      const finalKey = resolveFinalKey(pendingResult, platform);
      setResultKey(finalKey);
      return;
    }

    // Lanjut pertanyaan biasa
    if (option.next) {
      setCurrentStep(option.next);
      setStepCount((prev) => prev + 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep('start');
    setStepCount(1);
    setResultKey(null);
    setPendingResult(null);
    setPlatform(null);
  };

  const maxSteps = 6;
  const progressPercentage = resultKey
    ? 100
    : Math.min((stepCount / maxSteps) * 100, 95);

  return {
    currentData,
    stepCount,
    resultKey,
    handleOptionClick,
    handleRestart,
    progressPercentage
  };
}