// skillConfigs.js - CONFIGURACIÓN CON SISTEMA DE FILAS MEJORADO
import { SKILLS_DATABASE } from './skills.js';

export const skillConfigs = {
  'Dark Wizard': {
    green: [
      // FILA 1 (Skills iniciales)
      { skillId: 'DefenseRatePVP', row: 0, col: 3 },
      { skillId: 'DurabilityReduction', row: 0, col: 0 },

      // FILA 2 (Skills que requieren fila anterior)
      { skillId: 'MaximumSDIncrease', row: 1, col: 1 },
      { skillId: 'autoManaRecovery', row: 1, col: 3 },
      // FILA 3
      { skillId: 'DurabilityReduction2', row: 2, col: 0 },
      { skillId: 'SDRecoverySpeedIncrease', row: 2, col: 1 },
      { skillId: 'AutomaticHPRecoveryIncrease', row: 2, col: 3 },
      // FILA 4
      { skillId: 'DefenseIncrease', row: 3, col: 1 },
      { skillId: 'ElementalDEFIncrease', row: 3, col: 2 },
      { skillId: 'AutomaticAGRecoveryIncrease', row: 3, col: 3 },
      // FILA 5
      { skillId: 'DurabilityReduction3', row: 4, col: 0 },
      { skillId: 'DefenseSuccessRateIncrease', row: 4, col: 1 },
      // FILA 6
      { skillId: 'ArmorSetBonusIncrease', row: 5, col: 2 },
      { skillId: 'Revenge', row: 5, col: 3 },
      // FILA 7
      { skillId: 'energy', row: 6, col: 0 },
      { skillId: 'stamina', row: 6, col: 1 },
      { skillId: 'agility', row: 6, col: 2 },
      { skillId: 'strength', row: 6, col: 3 },

      //FILA 8
      { skillId: 'wings3def', row: 7, col: 1 },
      { skillId: 'ProtectionShield', row: 7, col: 3 },

      // FILA 9
      { skillId: 'wings3atk', row: 8, col: 1 },
      { skillId: 'SteelArmor', row: 8, col: 2 },
      { skillId: 'shieldBlockRate', row: 8, col: 3 },

    ],
    blue: [
      // FILA 1 (Skills iniciales)
      { skillId: 'AttackSuccessRateIncrease', row: 0, col: 0 },
      // FILA 2 (Skills que requieren fila anterior)
      { skillId: 'FlameStrengthener', row: 1, col: 0 },
      { skillId: 'LightningStrengthener', row: 1, col: 1 },
      { skillId: 'ExpansionofWizardryPowerUp', row: 1, col: 2 },
      // FILA 3 (Skills que requieren fila anterior)
      { skillId: 'InfernoStrengthener', row: 2, col: 0 },
      { skillId: 'BlastStrengthener', row: 2, col: 1 },
      { skillId: 'ExpansionofWizardryMastery', row: 2, col: 2 },
      // FILA 4 (Skills que requieren fila anterior)
      { skillId: 'EvilSpiritStrengthener', row: 3, col: 0 },
      { skillId: 'MagicMastery', row: 3, col: 1 },
      { skillId: 'MaximumLifeIncrease', row: 3, col: 2 },
      { skillId: 'DecayStrengthener', row: 3, col: 3 },
      // FILA 5 (Skills que requieren fila anterior)
      { skillId: 'HellfireStrengthener', row: 4, col: 1 },
      { skillId: 'MaximumManaIncrease', row: 4, col: 2 },
      { skillId: 'IceStrengthener', row: 4, col: 3 },
      // FILA 6 (Skills que requieren fila anterior)
      { skillId: 'MeteorStrengthener', row: 5, col: 0 },
      { skillId: 'MaximumAGIncrease', row: 5, col: 2 },
      { skillId: 'IceStormStrengthener', row: 5, col: 3 },
      // FILA 7 (Skills que requieren fila anterior)
      { skillId: 'NovaStrengthener', row: 6, col: 1 },
      { skillId: 'MaxHPBoost', row: 6, col: 2 },
      // FILA 8 (Skills que requieren fila anterior)
      { skillId: 'EarthPrison', row: 7, col: 1 },
      // FILA 9 (Skills que requieren fila anterior)
      { skillId: 'Illusion', row: 8, col: 0 },
      { skillId: 'IllusEarthPrisonStrengtheneron', row: 8, col: 1 },
    ],
    red: [
      // FILA 1 (Skills iniciales)
      { skillId: 'PvPAttackRate', row: 0, col: 0 },
      // FILA 2 
      { skillId: 'OneHandedStaffStrengthener', row: 1, col: 0 },
      { skillId: 'TwohandedStaffStrengthener', row: 1, col: 1 },
      { skillId: 'ShieldStrengthener', row: 1, col: 2 },
      // FILA 3 
      { skillId: 'OnehandedStaffMastery', row: 2, col: 0 },
      { skillId: 'TwoHandedStaffMastery', row: 2, col: 1 },
      { skillId: 'ShieldMastery', row: 2, col: 2 },
      // FILA 4 
      { skillId: 'SoulBarrierStrengthener', row: 3, col: 0 },
      { skillId: 'ManaReduction', row: 3, col: 1 },
      { skillId: 'MonsterAttackSDIncrement', row: 3, col: 2 },
      { skillId: 'MonsterAttackLifeIncrement', row: 3, col: 3 },
      // FILA 5 
      { skillId: 'SoulBarrierProficiency', row: 4, col: 0 },
      { skillId: 'MinimumWizardryIncrease', row: 4, col: 1 },
      { skillId: 'MonsterAttackManaIncrement', row: 4, col: 3 },
      // FILA 6 
      { skillId: 'SoulBarrierMastery', row: 5, col: 0 },
      { skillId: 'MaximumWizardryIncrease', row: 5, col: 1 },
      { skillId: 'IncreasesCriticalDamageRate', row: 5, col: 3 },
      // FILA 7 
      { skillId: 'RestoresAllMana', row: 6, col: 0 },
      { skillId: 'RestoresAllHP', row: 6, col: 1 },
      { skillId: 'AbsorbLife', row: 6, col: 2 },
      { skillId: 'IncreasesExcellentDamageRate', row: 6, col: 3 },
      // FILA 8 
      { skillId: 'GrandMagicPowUp', row: 7, col: 0 },
      { skillId: 'RestoresAllSD', row: 7, col: 1 },
      { skillId: 'IncreasesDoubleDamageRate', row: 7, col: 3 },
      // FILA 9 
      { skillId: 'AbsorbShield', row: 8, col: 2 },
      { skillId: 'IncreasesChanceofIgnoreDef', row: 8, col: 3 },
    ]
  },
  'Dark Knight': {
    green: [
      // FILA 1 (Skills iniciales)
      { skillId: 'DefenseRatePVP', row: 0, col: 3 },
      { skillId: 'DurabilityReduction', row: 0, col: 0 },

      // FILA 2 (Skills que requieren fila anterior)
      { skillId: 'MaximumSDIncrease', row: 1, col: 1 },
      { skillId: 'autoManaRecovery', row: 1, col: 3 },
      // FILA 3
      { skillId: 'DurabilityReduction2', row: 2, col: 0 },
      { skillId: 'SDRecoverySpeedIncrease', row: 2, col: 1 },
      { skillId: 'AutomaticHPRecoveryIncrease', row: 2, col: 3 },
      // FILA 4
      { skillId: 'DefenseIncrease', row: 3, col: 1 },
      { skillId: 'ElementalDEFIncrease', row: 3, col: 2 },
      { skillId: 'AutomaticAGRecoveryIncrease', row: 3, col: 3 },
      // FILA 5
      { skillId: 'DurabilityReduction3', row: 4, col: 0 },
      { skillId: 'DefenseSuccessRateIncrease', row: 4, col: 1 },
      // FILA 6
      { skillId: 'ArmorSetBonusIncrease', row: 5, col: 2 },
      { skillId: 'Revenge', row: 5, col: 3 },
      // FILA 7
      { skillId: 'energy', row: 6, col: 0 },
      { skillId: 'stamina', row: 6, col: 1 },
      { skillId: 'agility', row: 6, col: 2 },
      { skillId: 'strength', row: 6, col: 3 },

      //FILA 8
      { skillId: 'wings3def', row: 7, col: 1 },

      // FILA 9
      { skillId: 'wings3atk', row: 8, col: 1 },
      { skillId: 'SteelArmor', row: 8, col: 2 },
    ],
    blue: [
      // FILA 1 (Skills iniciales)
      { skillId: 'AttackSuccessRateIncrease', row: 0, col: 0 },
      // FILA 2 
      { skillId: 'SwordsFuryMastery', row: 1, col: 0 },
      { skillId: 'TwistingSlashStrengthener', row: 1, col: 1 },
      { skillId: 'StrongBeliefStrengthener', row: 1, col: 2 },
      { skillId: 'AngerBlowStrengthener', row: 1, col: 3 },
      // FILA 3
      { skillId: 'WeaponMastery', row: 2, col: 1 },
      { skillId: 'SolidProtectionStrengthener', row: 2, col: 2 },
      // FILA 4
      { skillId: 'DeathStabStrengthener', row: 3, col: 0 },
      { skillId: 'SolidProtectionProficiency', row: 3, col: 2 },
      { skillId: 'MaximumLifeIncrease', row: 3, col: 3 },
      // FILA 5
      { skillId: 'DeathStabProficiency', row: 4, col: 0 },
      { skillId: 'SolidProtectionMastery', row: 4, col: 2 },
      { skillId: 'MaximumManaIncrease', row: 4, col: 3 },
      // FILA 6
      { skillId: 'ComboStrengthener', row: 5, col: 0 },
      { skillId: 'StrikeofDestructionStrengthener', row: 5, col: 2 },
      { skillId: 'MaximumAGIncrease', row: 5, col: 3 },
      // FILA 7
      { skillId: 'Rush', row: 6, col: 0 },
      { skillId: 'StrikeofDestructionMastery', row: 6, col: 2 },
      { skillId: 'MaxHPBoost', row: 6, col: 3 },
      // FILA 8
      { skillId: 'BloodStorm', row: 7, col: 1 },
      // FILA 9
      { skillId: 'BloodStormStrengthener', row: 8, col: 1 },
    ],
    red: [
      // FILA 1 (Skills iniciales)
      { skillId: 'PvPAttackRate', row: 0, col: 0 },
      // FILA 2 
      { skillId: 'TwoHandedSwordStrengthener', row: 1, col: 0 },
      { skillId: 'OneHandedSwordStrengthener', row: 1, col: 1 },
      { skillId: 'MaceStrengthener', row: 1, col: 2 },
      { skillId: 'SpearStrengthener', row: 1, col: 3 },
      // FILA 3 
      { skillId: 'TwoHandedSwordMastery', row: 2, col: 0 },
      { skillId: 'OneHandedSwordMastery', row: 2, col: 1 },
      { skillId: 'MaceMastery', row: 2, col: 2 },
      { skillId: 'SpearMastery', row: 2, col: 3 },
      // FILA 4 
      { skillId: 'SwellLifeStrengthener', row: 3, col: 0 },
      { skillId: 'ManaReduction', row: 3, col: 1 },
      { skillId: 'MonsterAttackSDIncrement', row: 3, col: 2 },
      { skillId: 'MonsterAttackLifeIncrement', row: 3, col: 3 },
      // FILA 5 
      { skillId: 'SwellLifeProficiency', row: 4, col: 0 },
      { skillId: 'MinimumAttackPowerIncrease', row: 4, col: 1 },
      { skillId: 'MonsterAttackManaIncrement', row: 4, col: 3 },
      // FILA 6 
      { skillId: 'SwellLifeMastery', row: 5, col: 0 },
      { skillId: 'MaximumAttackPowerIncrease', row: 5, col: 1 },
      { skillId: 'IncreasesCriticalDamageRate', row: 5, col: 3 },
      // FILA 7 
      { skillId: 'RestoresAllMana', row: 6, col: 0 },
      { skillId: 'RestoresAllHP', row: 6, col: 1 },
      { skillId: 'AbsorbLife', row: 6, col: 2 },
      { skillId: 'IncreasesExcellentDamageRate', row: 6, col: 3 },
      // FILA 8 
      { skillId: 'BattleMind', row: 7, col: 0 },
      { skillId: 'RestoresAllSD', row: 7, col: 1 },
      { skillId: 'IncreasesDoubleDamageRate', row: 7, col: 3 },
      // FILA 9 
      { skillId: 'AbsorbShield', row: 8, col: 2 },
      { skillId: 'IncreasesChanceofIgnoreDef', row: 8, col: 3 },
    ]
  },
  'Fairy Elf': {
    green: [
      // FILA 1 (Skills iniciales)
      { skillId: 'DefenseRatePVP', row: 0, col: 3 },
      { skillId: 'DurabilityReduction', row: 0, col: 0 },

      // FILA 2 (Skills que requieren fila anterior)
      { skillId: 'MaximumSDIncrease', row: 1, col: 1 },
      { skillId: 'autoManaRecovery', row: 1, col: 3 },
      // FILA 3
      { skillId: 'DurabilityReduction2', row: 2, col: 0 },
      { skillId: 'SDRecoverySpeedIncrease', row: 2, col: 1 },
      { skillId: 'AutomaticHPRecoveryIncrease', row: 2, col: 3 },
      // FILA 4
      { skillId: 'DefenseIncrease', row: 3, col: 1 },
      { skillId: 'ElementalDEFIncrease', row: 3, col: 2 },
      { skillId: 'AutomaticAGRecoveryIncrease', row: 3, col: 3 },
      // FILA 5
      { skillId: 'DurabilityReduction3', row: 4, col: 0 },
      { skillId: 'DefenseSuccessRateIncrease', row: 4, col: 1 },
      // FILA 6
      { skillId: 'ArmorSetBonusIncrease', row: 5, col: 2 },
      { skillId: 'Revenge', row: 5, col: 3 },
      // FILA 7
      { skillId: 'energy', row: 6, col: 0 },
      { skillId: 'stamina', row: 6, col: 1 },
      { skillId: 'agility', row: 6, col: 2 },
      { skillId: 'strength', row: 6, col: 3 },

      //FILA 8
      { skillId: 'wings3def', row: 7, col: 1 },
      { skillId: 'ProtectionShield', row: 7, col: 3 },

      // FILA 9
      { skillId: 'wings3atk', row: 8, col: 1 },
      { skillId: 'SteelArmor', row: 8, col: 2 },
      { skillId: 'shieldBlockRate', row: 8, col: 3 },

    ],
    blue: [
      // FILA 1 (Skills iniciales)
      { skillId: 'AttackSuccessRateIncrease', row: 0, col: 0 },
      // FILA 2 
      { skillId: 'HealStrengthener', row: 1, col: 0 },
      { skillId: 'TripleShotStrengthener', row: 1, col: 2 },
      { skillId: 'SummonedMonsterPowerUp1', row: 1, col: 3 },
      // FILA 3 
      { skillId: 'PenetrationStrengthener', row: 2, col: 0 },
      { skillId: 'DefenseIncreaseStrengthener', row: 2, col: 1 },
      { skillId: 'TripleShotMastery', row: 2, col: 2 },
      { skillId: 'SummonedMonsterPowerUp2', row: 2, col: 3 },
      // FILA 4
      { skillId: 'AttackIncreaseStrengthener', row: 3, col: 0 },
      { skillId: 'WeaponMastery', row: 3, col: 2 },
      { skillId: 'MaximumLifeIncrease', row: 3, col: 3 },
      // FILA 5 
      { skillId: 'AttackIncreaseMastery', row: 4, col: 0 },
      { skillId: 'DefenseIncreaseMastery', row: 4, col: 1 },
      { skillId: 'IceArrowStrengthener', row: 4, col: 2 },
      { skillId: 'MaximumManaIncrease', row: 4, col: 3 },
      // FILA 6 
      { skillId: 'HolyBoltStrengthener', row: 5, col: 0 },
      { skillId: 'Cure', row: 5, col: 1 },
      { skillId: 'MultiShotStrengthener', row: 5, col: 2 },
      { skillId: 'MaximumAGIncrease', row: 5, col: 3 },
      // FILA 7 
      { skillId: 'PartyHealing', row: 6, col: 0 },
      { skillId: 'MaxHPBoost', row: 6, col: 2 },
      { skillId: 'SummonedMonsterPowerUp3', row: 6, col: 3 },
      // FILA 8 
      { skillId: 'PartyHealingStrengthener', row: 7, col: 0 },
      { skillId: 'Bless', row: 7, col: 1 },
      { skillId: 'PoisonArrow', row: 7, col: 2 },
      { skillId: 'SummonSatyros', row: 7, col: 3 },
      // FILA 9
      { skillId: 'ShadowStep', row: 8, col: 0 },
      { skillId: 'BlessStrengthener', row: 8, col: 1 },
      { skillId: 'PoisonArrowStrengthener', row: 8, col: 2 },
      { skillId: 'Evasion', row: 8, col: 3 },
    ],
    red: [
      // FILA 1 (Skills iniciales)
      { skillId: 'PvPAttackRate', row: 0, col: 0 },
      // FILA 2 
      { skillId: 'BowStrengthener', row: 1, col: 0 },
      { skillId: 'CrossbowStrengthener', row: 1, col: 1 },
      { skillId: 'ShieldStrengthener', row: 1, col: 2 },
      // FILA 3 
      { skillId: 'BowMastery', row: 2, col: 0 },
      { skillId: 'CrossbowMastery', row: 2, col: 1 },
      { skillId: 'ShieldMastery', row: 2, col: 2 },
      // FILA 4 
      { skillId: 'ManaReduction', row: 3, col: 1 },
      { skillId: 'MonsterAttackSDIncrement', row: 3, col: 2 },
      { skillId: 'MonsterAttackLifeIncrement', row: 3, col: 3 },
      // FILA 5 
      { skillId: 'InfinityArrowStrengthener', row: 4, col: 0 },
      { skillId: 'MinimumAttackPowerIncrease', row: 4, col: 1 },
      { skillId: 'MonsterAttackManaIncrement', row: 4, col: 3 },
      // FILA 6 
      { skillId: 'MaximumAttackPowerIncrease', row: 5, col: 1 },
      { skillId: 'IncreasesCriticalDamageRate', row: 5, col: 3 },
      // FILA 7 
      { skillId: 'RestoresAllMana', row: 6, col: 0 },
      { skillId: 'RestoresAllHP', row: 6, col: 1 },
      { skillId: 'AbsorbLife', row: 6, col: 2 },
      { skillId: 'IncreasesExcellentDamageRate', row: 6, col: 3 },
      // FILA 8 
      { skillId: 'Marksman', row: 7, col: 0 },
      { skillId: 'RestoresAllSD', row: 7, col: 1 },
      { skillId: 'IncreasesDoubleDamageRate', row: 7, col: 3 },
      // FILA 9 
      { skillId: 'AbsorbShield', row: 8, col: 2 },
      { skillId: 'IncreasesChanceofIgnoreDef', row: 8, col: 3 },
    ]
  },
  'Magic Gladiator': {
    green: [
      // FILA 1 (Skills iniciales)
      { skillId: 'DefenseRatePVP', row: 0, col: 3 },
      { skillId: 'DurabilityReduction', row: 0, col: 0 },

      // FILA 2 (Skills que requieren fila anterior)
      { skillId: 'MaximumSDIncrease', row: 1, col: 1 },
      { skillId: 'autoManaRecovery', row: 1, col: 3 },
      // FILA 3
      { skillId: 'DurabilityReduction2', row: 2, col: 0 },
      { skillId: 'SDRecoverySpeedIncrease', row: 2, col: 1 },
      { skillId: 'AutomaticHPRecoveryIncrease', row: 2, col: 3 },
      // FILA 4
      { skillId: 'DefenseIncrease', row: 3, col: 1 },
      { skillId: 'ElementalDEFIncrease', row: 3, col: 2 },
      { skillId: 'AutomaticAGRecoveryIncrease', row: 3, col: 3 },
      // FILA 5
      { skillId: 'DurabilityReduction3', row: 4, col: 0 },
      { skillId: 'DefenseSuccessRateIncrease', row: 4, col: 1 },
      // FILA 6
      { skillId: 'ArmorSetBonusIncrease', row: 5, col: 2 },
      { skillId: 'Revenge', row: 5, col: 3 },
      // FILA 7
      { skillId: 'energy', row: 6, col: 0 },
      { skillId: 'stamina', row: 6, col: 1 },
      { skillId: 'agility', row: 6, col: 2 },
      { skillId: 'strength', row: 6, col: 3 },

      //FILA 8
      { skillId: 'wings3def', row: 7, col: 1 },
      { skillId: 'ProtectionShield', row: 7, col: 3 },
      { skillId: 'WeaponBlockRate', row: 7, col: 2 },

      // FILA 9
      { skillId: 'wings3atk', row: 8, col: 1 },
      { skillId: 'SteelArmor', row: 8, col: 2 },
      { skillId: 'shieldBlockRate', row: 8, col: 3 },

    ],
    blue: [
      // FILA 1 
      { skillId: 'AttackSuccessRateIncrease', row: 0, col: 0 },
      // FILA 2 
      { skillId: 'CycloneStrengthener', row: 1, col: 0 },
      { skillId: 'LightningStrengthener', row: 1, col: 1 },
      { skillId: 'TwistingSlashStrengthener', row: 1, col: 2 },
      { skillId: 'PowerSlashStrengthener', row: 1, col: 3 },
      // FILA 3
      { skillId: 'FlameStrengthener', row: 2, col: 0 },
      { skillId: 'BlastStrengthener', row: 2, col: 1 },
      { skillId: 'WeaponMastery', row: 2, col: 3 },
      // FILA 4 
      { skillId: 'FireSlashStrengthener', row: 3, col: 0 },
      { skillId: 'EvilSpiritStrengthener', row: 3, col: 1 },
      { skillId: 'MagicMastery', row: 3, col: 2 },
      { skillId: 'MaximumLifeIncrease', row: 3, col: 3 },
      // FILA 5
      { skillId: 'FireSlashMastery', row: 4, col: 0 },
      { skillId: 'GiganticStormStrengthener', row: 4, col: 2 },
      { skillId: 'MaximumManaIncrease', row: 4, col: 3 },
      // FILA 6 
      { skillId: 'SpiralChargeStrengthener', row: 5, col: 0 },
      { skillId: 'CrusherChargeStrengthener', row: 5, col: 1 },
      { skillId: 'ElementalChargeStrengthener', row: 5, col: 2 },
      { skillId: 'MaximumAGIncrease', row: 5, col: 3 },
      // FILA 7 
      { skillId: 'SpiralChargeMastery', row: 6, col: 0 },
      { skillId: 'CrusherChargeMastery', row: 6, col: 1 },
      { skillId: 'ElementalChargeMastery', row: 6, col: 2 },
      { skillId: 'MaxHPBoost', row: 6, col: 3 },
      // FILA 8 
      { skillId: 'BloodStorm', row: 7, col: 1 },
      { skillId: 'EarthPrison', row: 7, col: 2 },
      // FILA 9 
      { skillId: 'BloodStormStrengthener', row: 8, col: 1 },
      { skillId: 'IllusEarthPrisonStrengtheneron', row: 8, col: 2 },
    ],
    red: [
      // FILA 1 (Skills iniciales)
      { skillId: 'PvPAttackRate', row: 0, col: 0 },
      // FILA 2
      { skillId: 'TwoHandedSwordStrengthener', row: 1, col: 0 },
      { skillId: 'OneHandedSwordStrengthener', row: 1, col: 1 },
      { skillId: 'OneHandedStaffStrengthener', row: 1, col: 2 },
      { skillId: 'TwohandedStaffStrengthener', row: 1, col: 3 },
      // FILA 3 
      { skillId: 'TwoHandedSwordMastery', row: 2, col: 0 },
      { skillId: 'OneHandedSwordMastery', row: 2, col: 1 },
      { skillId: 'OnehandedStaffMastery', row: 2, col: 2 },
      { skillId: 'TwoHandedStaffMastery', row: 2, col: 3 },
      // FILA 4 
      { skillId: 'ManaReduction', row: 3, col: 1 },
      { skillId: 'MonsterAttackSDIncrement', row: 3, col: 2 },
      { skillId: 'MonsterAttackLifeIncrement', row: 3, col: 3 },
      // FILA 5 
      { skillId: 'MinimumWizardryIncrease', row: 4, col: 0 },
      { skillId: 'MinimumAttackPowerIncrease', row: 4, col: 1 },
      { skillId: 'MonsterAttackManaIncrement', row: 4, col: 3 },
      // FILA 6 
      { skillId: 'MaximumWizardryIncrease', row: 5, col: 0 },
      { skillId: 'MaximumAttackPowerIncrease', row: 5, col: 1 },
      { skillId: 'IncreasesCriticalDamageRate', row: 5, col: 3 },
      // FILA 7 
      { skillId: 'RestoresAllMana', row: 6, col: 0 },
      { skillId: 'RestoresAllHP', row: 6, col: 1 },
      { skillId: 'AbsorbLife', row: 6, col: 2 },
      { skillId: 'IncreasesExcellentDamageRate', row: 6, col: 3 },
      // FILA 8 
      { skillId: 'RestoresAllSD', row: 7, col: 1 },
      { skillId: 'IncreasesDoubleDamageRate', row: 7, col: 3 },
      // FILA 9 
      { skillId: 'AbsorbShield', row: 8, col: 2 },
      { skillId: 'IncreasesChanceofIgnoreDef', row: 8, col: 3 },
    ]
  },
  'Dark Lord': {
    green: [
      // FILA 1 (Skills iniciales)
      { skillId: 'DefenseRatePVP', row: 0, col: 3 },
      { skillId: 'DurabilityReduction', row: 0, col: 0 },

      // FILA 2 (Skills que requieren fila anterior)
      { skillId: 'MaximumSDIncrease', row: 1, col: 1 },
      { skillId: 'autoManaRecovery', row: 1, col: 3 },
      // FILA 3
      { skillId: 'DurabilityReduction2', row: 2, col: 0 },
      { skillId: 'SDRecoverySpeedIncrease', row: 2, col: 1 },
      { skillId: 'AutomaticHPRecoveryIncrease', row: 2, col: 3 },
      // FILA 4
      { skillId: 'DefenseIncrease', row: 3, col: 1 },
      { skillId: 'ElementalDEFIncrease', row: 3, col: 2 },
      { skillId: 'AutomaticAGRecoveryIncrease', row: 3, col: 3 },
      // FILA 5
      { skillId: 'DurabilityReduction3', row: 4, col: 0 },
      { skillId: 'DefenseSuccessRateIncrease', row: 4, col: 1 },
      // FILA 6
      { skillId: 'ArmorSetBonusIncrease', row: 5, col: 2 },
      { skillId: 'Revenge', row: 5, col: 3 },
      { skillId: 'command', row: 5, col: 0 },
      // FILA 7
      { skillId: 'energy', row: 6, col: 0 },
      { skillId: 'stamina', row: 6, col: 1 },
      { skillId: 'agility', row: 6, col: 2 },
      { skillId: 'strength', row: 6, col: 3 },

      //FILA 8
      { skillId: 'wings3def', row: 7, col: 1 },
      { skillId: 'ProtectionShield', row: 7, col: 3 },
      { skillId: 'WeaponBlockRate', row: 7, col: 2 },

      // FILA 9
      { skillId: 'wings3atk', row: 8, col: 1 },
      { skillId: 'SteelArmor', row: 8, col: 2 },
      { skillId: 'shieldBlockRate', row: 8, col: 3 },

    ],
    blue: [
      // FILA 1 (Skills iniciales)
      { skillId: 'AttackSuccessRateIncrease', row: 0, col: 0 },
      // FILA 2
      { skillId: 'FireBurstStrengthener', row: 1, col: 0 },
      { skillId: 'ForceWaveStrengthener', row: 1, col: 1 },
      { skillId: 'DarkHorseStrengthener', row: 1, col: 2 },
      // FILA 3
      { skillId: 'CriticalDMGIncreasePowUp', row: 2, col: 1 },
      { skillId: 'EarthshakeStrengthener', row: 2, col: 2 },
      { skillId: 'WeaponMastery', row: 2, col: 3 },
      // FILA 4
      { skillId: 'CriticalDMGIncreasePowUp2', row: 3, col: 1 },
      { skillId: 'MaximumLifeIncrease', row: 3, col: 3 },
      // FILA 5
      { skillId: 'CriticalDMGIncreasePowUp3', row: 4, col: 1 },
      { skillId: 'FireScreamStrengthener', row: 4, col: 2 },
      { skillId: 'MaximumManaIncrease', row: 4, col: 3 },
      // FILA 6
      { skillId: 'ElectricSparkStrengthener', row: 5, col: 0 },
      { skillId: 'FireScreamMastery', row: 5, col: 2 },
      { skillId: 'MaximumAGIncrease', row: 5, col: 3 },
      // FILA 7
      { skillId: 'CriticalDMGIncreaseMastery', row: 6, col: 1 },
      { skillId: 'ChaoticDiseierStrengthener', row: 6, col: 2 },
      { skillId: 'MaxHPBoost', row: 6, col: 3 },
    ],
    red: [
      // FILA 1 (Skills iniciales)
      { skillId: 'PvPAttackRate', row: 0, col: 0 },
      // FILA 2
      { skillId: 'DarkSpiritStrengthener', row: 1, col: 0 },
      { skillId: 'ScepterStrengthener', row: 1, col: 1 },
      { skillId: 'ShieldStrengthener', row: 1, col: 2 },
      { skillId: 'UseScepterPetStrengthener', row: 1, col: 3 },
      // FILA 3 
      { skillId: 'DarkSpiritStrengthener2', row: 2, col: 0 },
      { skillId: 'ScepterMastery', row: 2, col: 1 },
      { skillId: 'ShieldMastery', row: 2, col: 2 },
      { skillId: 'CommandAttackIncrease', row: 2, col: 3 },
      // FILA 4 
      { skillId: 'DarkSpiritStrengthener3', row: 3, col: 0 },
      { skillId: 'ManaReduction', row: 3, col: 1 },
      { skillId: 'MonsterAttackSDIncrement', row: 3, col: 2 },
      { skillId: 'MonsterAttackLifeIncrement', row: 3, col: 3 },
      // FILA 5 
      { skillId: 'DarkSpiritStrengthener5', row: 4, col: 0 },
      { skillId: 'PetDurabilityStrengthener', row: 4, col: 1 },
      { skillId: 'MinimumAttackPowerIncrease', row: 4, col: 2 },
      { skillId: 'MonsterAttackManaIncrement', row: 4, col: 3 },
      // FILA 6 
      { skillId: 'SpiritLord', row: 5, col: 0 },
      { skillId: 'DarkSpiritStrengthener4', row: 5, col: 1 },
      { skillId: 'MaximumAttackPowerIncrease', row: 5, col: 2 },
      { skillId: 'IncreasesCriticalDamageRate', row: 5, col: 3 },
      // FILA 7 
      { skillId: 'RestoresAllMana', row: 6, col: 0 },
      { skillId: 'RestoresAllHP', row: 6, col: 1 },
      { skillId: 'AbsorbLife', row: 6, col: 2 },
      { skillId: 'IncreasesExcellentDamageRate', row: 6, col: 3 },
      // FILA 8 
      { skillId: 'RestoresAllSD', row: 7, col: 1 },
      { skillId: 'IncreasesDoubleDamageRate', row: 7, col: 3 },
      // FILA 9 
      { skillId: 'AbsorbShield', row: 8, col: 2 },
      { skillId: 'IncreasesChanceofIgnoreDef', row: 8, col: 3 },
    ]
  },
  'Summoner': {
    green: [
      // FILA 1 (Skills iniciales)
      { skillId: 'DefenseRatePVP', row: 0, col: 3 },
      { skillId: 'DurabilityReduction', row: 0, col: 0 },

      // FILA 2 (Skills que requieren fila anterior)
      { skillId: 'MaximumSDIncrease', row: 1, col: 1 },
      { skillId: 'autoManaRecovery', row: 1, col: 3 },
      // FILA 3
      { skillId: 'DurabilityReduction2', row: 2, col: 0 },
      { skillId: 'SDRecoverySpeedIncrease', row: 2, col: 1 },
      { skillId: 'AutomaticHPRecoveryIncrease', row: 2, col: 3 },
      // FILA 4
      { skillId: 'DefenseIncrease', row: 3, col: 1 },
      { skillId: 'ElementalDEFIncrease', row: 3, col: 2 },
      { skillId: 'AutomaticAGRecoveryIncrease', row: 3, col: 3 },
      // FILA 5
      { skillId: 'DurabilityReduction3', row: 4, col: 0 },
      { skillId: 'DefenseSuccessRateIncrease', row: 4, col: 1 },
      // FILA 6
      { skillId: 'ArmorSetBonusIncrease', row: 5, col: 2 },
      { skillId: 'Revenge', row: 5, col: 3 },
      // FILA 7
      { skillId: 'energy', row: 6, col: 0 },
      { skillId: 'stamina', row: 6, col: 1 },
      { skillId: 'agility', row: 6, col: 2 },
      { skillId: 'strength', row: 6, col: 3 },

      //FILA 8
      { skillId: 'wings3def', row: 7, col: 1 },

      // FILA 9
      { skillId: 'wings3atk', row: 8, col: 1 },
      { skillId: 'SteelArmor', row: 8, col: 2 },
    ],
    blue: [
      // FILA 1 (Skills iniciales)
      { skillId: 'AttackSuccessRateIncrease', row: 0, col: 0 },
      // FILA 2
      { skillId: 'ExplosionStrengthener', row: 1, col: 0 },
      { skillId: 'RequiemStrengthener', row: 1, col: 1 },
      { skillId: 'PollutionStrengthener', row: 1, col: 2 },
      // FILA 3
      { skillId: 'ChainLightningStrengthener', row: 2, col: 0 },
      { skillId: 'PollutionStrengthener2', row: 2, col: 2 },
      { skillId: 'SleepStrengthener', row: 2, col: 3 },
      // FILA 4
      { skillId: 'LightningShockStrengthener', row: 3, col: 0 },
      { skillId: 'PollutionMastery', row: 3, col: 2 },
      { skillId: 'MaximumLifeIncrease', row: 3, col: 3 },
      // FILA 5
      { skillId: 'MagicMastery', row: 4, col: 0 },
      { skillId: 'DrainLifeStrengthener', row: 4, col: 2 },
      { skillId: 'MaximumManaIncrease', row: 4, col: 3 },
      // FILA 6
      { skillId: 'WeaknessStrengthener', row: 5, col: 0 },
      { skillId: 'InnovationStrengthener', row: 5, col: 1 },
      { skillId: 'MaximumAGIncrease', row: 5, col: 3 },
      // FILA 7
      { skillId: 'GreatnessMastery', row: 6, col: 0 },
      { skillId: 'InnovationMastery', row: 6, col: 1 },
      { skillId: 'MaxHPBoost', row: 6, col: 3 },
      // FILA 8
      { skillId: 'Blind', row: 7, col: 1 },
    ],
    red: [
      // FILA 1 (Skills iniciales)
      { skillId: 'PvPAttackRate', row: 0, col: 0 },
      // FILA 2
      { skillId: 'StickStrengthener', row: 1, col: 0 },
      { skillId: 'OtherWorldTomeStrengthener', row: 1, col: 1 },
      // FILA 3
      { skillId: 'StickMastery', row: 2, col: 0 },
      { skillId: 'OtherWorldMastery', row: 2, col: 1 },
      // FILA 4 
      { skillId: 'ManaReduction', row: 3, col: 1 },
      { skillId: 'MonsterAttackSDIncrement', row: 3, col: 2 },
      { skillId: 'MonsterAttackLifeIncrement', row: 3, col: 3 },
      // FILA 5 
      { skillId: 'BerserkerStrengthener', row: 4, col: 0 },
      { skillId: 'DarknessStrengthener', row: 4, col: 1 },
      { skillId: 'MinimumWizardryCurseIncrease', row: 4, col: 2 },
      { skillId: 'MonsterAttackManaIncrement', row: 4, col: 3 },
      // FILA 6 
      { skillId: 'BerserkerMastery', row: 5, col: 0 },
      { skillId: 'DarknessMastery', row: 5, col: 1 },
      { skillId: 'MaximumWizardryCurseIncrease', row: 5, col: 2 },
      { skillId: 'IncreasesCriticalDamageRate', row: 5, col: 3 },
      // FILA 7 
      { skillId: 'RestoresAllMana', row: 6, col: 0 },
      { skillId: 'RestoresAllHP', row: 6, col: 1 },
      { skillId: 'AbsorbLife', row: 6, col: 2 },
      { skillId: 'IncreasesExcellentDamageRate', row: 6, col: 3 },
      // FILA 8 
      { skillId: 'PainofCurse', row: 7, col: 0 },
      { skillId: 'RestoresAllSD', row: 7, col: 1 },
      { skillId: 'IncreasesDoubleDamageRate', row: 7, col: 3 },
      // FILA 9 
      { skillId: 'AbsorbShield', row: 8, col: 2 },
      { skillId: 'IncreasesChanceofIgnoreDef', row: 8, col: 3 },

    ]
  },
  'Rage Fighter': {
    green: [
      // FILA 1 (Skills iniciales)
      { skillId: 'DefenseRatePVP', row: 0, col: 3 },
      { skillId: 'DurabilityReduction', row: 0, col: 0 },

      // FILA 2 (Skills que requieren fila anterior)
      { skillId: 'MaximumSDIncrease', row: 1, col: 1 },
      { skillId: 'autoManaRecovery', row: 1, col: 3 },
      // FILA 3
      { skillId: 'DurabilityReduction2', row: 2, col: 0 },
      { skillId: 'SDRecoverySpeedIncrease', row: 2, col: 1 },
      { skillId: 'AutomaticHPRecoveryIncrease', row: 2, col: 3 },
      // FILA 4
      { skillId: 'DefenseIncrease', row: 3, col: 1 },
      { skillId: 'ElementalDEFIncrease', row: 3, col: 2 },
      { skillId: 'AutomaticAGRecoveryIncrease', row: 3, col: 3 },
      // FILA 5
      { skillId: 'DurabilityReduction3', row: 4, col: 0 },
      { skillId: 'DefenseSuccessRateIncrease', row: 4, col: 1 },
      // FILA 6
      { skillId: 'ArmorSetBonusIncrease', row: 5, col: 2 },
      { skillId: 'Revenge', row: 5, col: 3 },
      // FILA 7
      { skillId: 'energy', row: 6, col: 0 },
      { skillId: 'stamina', row: 6, col: 1 },
      { skillId: 'agility', row: 6, col: 2 },
      { skillId: 'strength', row: 6, col: 3 },

      //FILA 8
      { skillId: 'wings3def', row: 7, col: 1 },

      // FILA 9
      { skillId: 'wings3atk', row: 8, col: 1 },
      { skillId: 'SteelArmor', row: 8, col: 2 },
    ],
    blue: [
      // FILA 1 (Skills iniciales)
      { skillId: 'AttackSuccessRateIncrease', row: 0, col: 0 },
      // FILA 2
      { skillId: 'KillingBlowStrengthener', row: 1, col: 0 },
      { skillId: 'BeastUppercutStrengthener', row: 1, col: 1 },
      { skillId: 'PhoenixShotStrengthener', row: 1, col: 2 },
      // FILA 3
      { skillId: 'KillingBlowMastery', row: 2, col: 0 },
      { skillId: 'BeastUppercutMastery', row: 2, col: 1 },
      { skillId: 'PhoenixShotMastery', row: 2, col: 2 },
      // FILA 4
      { skillId: 'MaximumLifeIncrease', row: 3, col: 2 },
      { skillId: 'WeaponMastery', row: 3, col: 3 },
      // FILA 5
      { skillId: 'ChainDriveStrengthener', row: 4, col: 0 },
      { skillId: 'DarkSideStrengthener', row: 4, col: 1 },
      { skillId: 'MaximumManaIncrease', row: 4, col: 2 },
      { skillId: 'DragonRoarStrengthener', row: 4, col: 3 },
      // FILA 6
      { skillId: 'MaximumAGIncrease', row: 5, col: 2 },
      // FILA 7
      { skillId: 'MaxHPBoost', row: 6, col: 0 },
      { skillId: 'DarkSideMastery', row: 6, col: 1 },
      { skillId: 'DragonSlasherStrengthener', row: 6, col: 2 },
      // FILA 8
      { skillId: 'BloodHowling', row: 7, col: 1 },
      // FILA 9
      { skillId: 'BloodHowlingStrengthener', row: 8, col: 1 },
    ],
    red: [
      // FILA 1 (Skills iniciales)
      { skillId: 'PvPAttackRate', row: 0, col: 0 },
      // FILA 2
      { skillId: 'EquippedWeaponStrengthener', row: 1, col: 0 },
      { skillId: 'DefenseSuccessRateIncreasePowUp', row: 1, col: 1 },
      // FILA 3
      { skillId: 'EquippedWeaponMastery', row: 2, col: 0 },
      { skillId: 'DefSuccessRateIncreaseMastery', row: 2, col: 1 },
      // FILA 4 
      { skillId: 'StaminaIncreaseStrengthener', row: 3, col: 0 },
      { skillId: 'ManaReduction', row: 3, col: 1 },
      { skillId: 'MonsterAttackSDIncrement', row: 3, col: 2 },
      { skillId: 'MonsterAttackLifeIncrement', row: 3, col: 3 },
      // FILA 5 
      { skillId: 'MinimumAttackPowerIncrease', row: 4, col: 1 },
      { skillId: 'MonsterAttackManaIncrement', row: 4, col: 3 },
      // FILA 6 
      { skillId: 'MaximumAttackPowerIncrease', row: 5, col: 1 },
      { skillId: 'IncreasesCriticalDamageRate', row: 5, col: 3 },
      // FILA 7 
      { skillId: 'RestoresAllMana', row: 6, col: 0 },
      { skillId: 'RestoresAllHP', row: 6, col: 1 },
      { skillId: 'AbsorbLife', row: 6, col: 2 },
      { skillId: 'IncreasesExcellentDamageRate', row: 6, col: 3 },
      // FILA 8 
      { skillId: 'RestoresAllSD', row: 7, col: 1 },
      { skillId: 'IncreasesDoubleDamageRate', row: 7, col: 3 },
      // FILA 9 
      { skillId: 'AbsorbShield', row: 8, col: 2 },
      { skillId: 'IncreasesChanceofIgnoreDef', row: 8, col: 3 },
    ]
  },
  'Grow Lancer': {
    green: [
      // FILA 1 (Skills iniciales)
      { skillId: 'DefenseRatePVP', row: 0, col: 3 },
      { skillId: 'DurabilityReduction', row: 0, col: 0 },

      // FILA 2 (Skills que requieren fila anterior)
      { skillId: 'MaximumSDIncrease', row: 1, col: 1 },
      { skillId: 'autoManaRecovery', row: 1, col: 3 },
      // FILA 3
      { skillId: 'DurabilityReduction2', row: 2, col: 0 },
      { skillId: 'SDRecoverySpeedIncrease', row: 2, col: 1 },
      { skillId: 'AutomaticHPRecoveryIncrease', row: 2, col: 3 },
      // FILA 4
      { skillId: 'DefenseIncrease', row: 3, col: 1 },
      { skillId: 'ElementalDEFIncrease', row: 3, col: 2 },
      { skillId: 'AutomaticAGRecoveryIncrease', row: 3, col: 3 },
      // FILA 5
      { skillId: 'DurabilityReduction3', row: 4, col: 0 },
      { skillId: 'DefenseSuccessRateIncrease', row: 4, col: 1 },
      // FILA 6
      { skillId: 'ArmorSetBonusIncrease', row: 5, col: 2 },
      { skillId: 'Revenge', row: 5, col: 3 },
      // FILA 7
      { skillId: 'energy', row: 6, col: 0 },
      { skillId: 'stamina', row: 6, col: 1 },
      { skillId: 'agility', row: 6, col: 2 },
      { skillId: 'strength', row: 6, col: 3 },

      //FILA 8
      { skillId: 'wings3def', row: 7, col: 1 },
      { skillId: 'ProtectionShield', row: 7, col: 3 },

      // FILA 9
      { skillId: 'wings3atk', row: 8, col: 1 },
      { skillId: 'SteelArmor', row: 8, col: 2 },
      { skillId: 'shieldBlockRate', row: 8, col: 3 },
    ],
    blue: [
      // FILA 1 (Skills iniciales)
      { skillId: 'AttackSuccessRateIncrease', row: 0, col: 0 },
      // FILA 2
      { skillId: 'LungeStrengthener', row: 1, col: 0 },
      { skillId: 'SpinStepPowUp', row: 1, col: 2 },
      { skillId: 'HarshStrikePowUp', row: 1, col: 1 },
      // FILA 3
      { skillId: 'WeaponMastery', row: 2, col: 3 },
      // FILA 4
      { skillId: 'ObsidianPowUp', row: 3, col: 0 },
      { skillId: 'SpinStepMastery', row: 3, col: 2 },
      { skillId: 'HarshStrikeMastery', row: 3, col: 1 },
      { skillId: 'MaximumLifeIncrease', row: 3, col: 3 },
      // FILA 5
      { skillId: 'BrechePowUp', row: 4, col: 1 },
      { skillId: 'MagicPinPowUp', row: 4, col: 2 },
      { skillId: 'MaximumManaIncrease', row: 4, col: 3 },
      // FILA 6
      { skillId: 'ShiningPeakPowUp', row: 5, col: 0 },
      { skillId: 'BrecheMastery', row: 5, col: 1 },
      { skillId: 'MagicPinMastery', row: 5, col: 2 },
      { skillId: 'MaximumAGIncrease', row: 5, col: 3 },
      // FILA 7
      { skillId: 'WildBrecheStr', row: 6, col: 1 },
      { skillId: 'OverstingStrengthener', row: 6, col: 2 },
      { skillId: 'MaxHPBoost', row: 6, col: 3 },
      // FILA 8
      { skillId: 'Burst', row: 7, col: 1 },
      // FILA 9
      { skillId: 'BurstPowUp', row: 8, col: 1 },
    ],
    red: [
      // FILA 1 (Skills iniciales)
      { skillId: 'PvPAttackRate', row: 0, col: 0 },
      // FILA 2 
      { skillId: 'LancePowUp', row: 1, col: 0 },
      { skillId: 'CircleShieldPowUp', row: 1, col: 1 },
      { skillId: 'ShieldStrengthener', row: 1, col: 3 },
      // FILA 3 
      { skillId: 'LanceMastery', row: 2, col: 0 },
      { skillId: 'CircleShieldMastery', row: 2, col: 1 },
      { skillId: 'ShieldMastery', row: 2, col: 3 },
      // FILA 4 
      { skillId: 'WrathPowUp', row: 3, col: 0 },
      { skillId: 'ManaReduction', row: 3, col: 1 },
      { skillId: 'MonsterAttackSDIncrement', row: 3, col: 2 },
      { skillId: 'MonsterAttackLifeIncrement', row: 3, col: 3 },
      // FILA 5 
      { skillId: 'WrathProficiency', row: 4, col: 0 },
      { skillId: 'MinimumAttackPowerIncrease', row: 4, col: 1 },
      { skillId: 'MonsterAttackManaIncrement', row: 4, col: 3 },
      // FILA 6 
      { skillId: 'WrathMastery', row: 5, col: 0 },
      { skillId: 'MaximumAttackPowerIncrease', row: 5, col: 1 },
      { skillId: 'IncreasesCriticalDamageRate', row: 5, col: 3 },
      // FILA 7 
      { skillId: 'RestoresAllMana', row: 6, col: 0 },
      { skillId: 'RestoresAllHP', row: 6, col: 1 },
      { skillId: 'AbsorbLife', row: 6, col: 2 },
      { skillId: 'IncreasesExcellentDamageRate', row: 6, col: 3 },
      // FILA 8 
      { skillId: 'RestoresAllSD', row: 7, col: 1 },
      { skillId: 'IncreasesDoubleDamageRate', row: 7, col: 3 },
      // FILA 9 
      { skillId: 'IncreasesRetaliationDMG', row: 8, col: 0 },
      { skillId: 'IncreasesRageDMG', row: 8, col: 1 },
      { skillId: 'AbsorbShield', row: 8, col: 2 },
      { skillId: 'IncreasesChanceofIgnoreDef', row: 8, col: 3 },
    ]
  },
  'Rune Mage': {
    green: [
      // FILA 1 (Skills iniciales)
      { skillId: 'DefenseRatePVP', row: 0, col: 3 },
      { skillId: 'DurabilityReduction', row: 0, col: 0 },

      // FILA 2 (Skills que requieren fila anterior)
      { skillId: 'MaximumSDIncrease', row: 1, col: 1 },
      { skillId: 'autoManaRecovery', row: 1, col: 3 },
      // FILA 3
      { skillId: 'DurabilityReduction2', row: 2, col: 0 },
      { skillId: 'SDRecoverySpeedIncrease', row: 2, col: 1 },
      { skillId: 'AutomaticHPRecoveryIncrease', row: 2, col: 3 },
      // FILA 4
      { skillId: 'DefenseIncrease', row: 3, col: 1 },
      { skillId: 'ElementalDEFIncrease', row: 3, col: 2 },
      { skillId: 'AutomaticAGRecoveryIncrease', row: 3, col: 3 },
      // FILA 5
      { skillId: 'DurabilityReduction3', row: 4, col: 0 },
      { skillId: 'DefenseSuccessRateIncrease', row: 4, col: 1 },
      // FILA 6
      { skillId: 'ArmorSetBonusIncrease', row: 5, col: 2 },
      { skillId: 'Revenge', row: 5, col: 3 },
      // FILA 7
      { skillId: 'energy', row: 6, col: 0 },
      { skillId: 'stamina', row: 6, col: 1 },
      { skillId: 'agility', row: 6, col: 2 },
      { skillId: 'strength', row: 6, col: 3 },

      //FILA 8
      { skillId: 'wings3def', row: 7, col: 1 },
      { skillId: 'ProtectionShield', row: 7, col: 3 },

      // FILA 9
      { skillId: 'wings3atk', row: 8, col: 1 },
      { skillId: 'SteelArmor', row: 8, col: 2 },
      { skillId: 'shieldBlockRate', row: 8, col: 3 },

    ],
    blue: [
      // FILA 1 (Skills iniciales)
      { skillId: 'AttackSuccessRateIncrease', row: 0, col: 0 },
      // FILA 2
      { skillId: 'ExpansionofWizardryPowerUp', row: 1, col: 0 },
      { skillId: 'FlameStrengthener', row: 1, col: 2 },
      { skillId: 'MagicArrowStrengthener', row: 1, col: 3 },
      // FILA 3
      { skillId: 'ExpansionofWizardryMastery', row: 2, col: 0 },
      { skillId: 'InfernoStrengthener', row: 2, col: 2 },
      { skillId: 'MagicArrowMastery', row: 2, col: 3 },
      // FILA 4
      { skillId: 'BurstStrengthener', row: 3, col: 0 },
      { skillId: 'HasteStrengthener', row: 3, col: 1 },
      { skillId: 'MaximumLifeIncrease', row: 3, col: 2 },
      { skillId: 'MagicMastery', row: 3, col: 3 },
      // FILA 5
      { skillId: 'BurstMastery', row: 4, col: 0 },
      { skillId: 'HasteMastery', row: 4, col: 1 },
      { skillId: 'MaximumManaIncrease', row: 4, col: 2 },
      // FILA 6
      { skillId: 'IceStormStrengthener', row: 5, col: 0 },
      { skillId: 'MaximumAGIncrease', row: 5, col: 2 },
      { skillId: 'PlasmaBallStrengthener', row: 5, col: 3 },
      // FILA 7
      { skillId: 'MaxHPBoost', row: 6, col: 2 },
      { skillId: 'PlasmaBallMastery', row: 6, col: 3 },
      // FILA 8
      { skillId: 'EarthPrison', row: 7, col: 1 },
      // FILA 9
      { skillId: 'IllusEarthPrisonStrengtheneron', row: 8, col: 1 },
    ],
    red: [
      // FILA 1
      { skillId: 'PvPAttackRate', row: 0, col: 0 },
      // FILA 2 
      { skillId: 'RuneMaceStrengthener', row: 1, col: 0 },
      { skillId: 'ShieldStrengthener', row: 1, col: 2 },
      // FILA 3 
      { skillId: 'RuneMaceMastery', row: 2, col: 0 },
      { skillId: 'ShieldMastery', row: 2, col: 2 },
      // FILA 4 
      { skillId: 'ManaReduction', row: 3, col: 1 },
      { skillId: 'MonsterAttackSDIncrement', row: 3, col: 2 },
      { skillId: 'MonsterAttackLifeIncrement', row: 3, col: 3 },
      // FILA 5 
      { skillId: 'MinimumWizardryIncrease', row: 4, col: 1 },
      { skillId: 'MonsterAttackManaIncrement', row: 4, col: 3 },
      // FILA 6 
      { skillId: 'MaximumWizardryIncrease', row: 5, col: 1 },
      { skillId: 'IncreasesCriticalDamageRate', row: 5, col: 3 },
      // FILA 7 
      { skillId: 'RestoresAllMana', row: 6, col: 0 },
      { skillId: 'RestoresAllHP', row: 6, col: 1 },
      { skillId: 'AbsorbLife', row: 6, col: 2 },
      { skillId: 'IncreasesExcellentDamageRate', row: 6, col: 3 },
      // FILA 8 
      { skillId: 'GrandMagicPowUp', row: 7, col: 0 },
      { skillId: 'RestoresAllSD', row: 7, col: 1 },
      { skillId: 'IncreasesDoubleDamageRate', row: 7, col: 3 },
      // FILA 9 
      { skillId: 'AbsorbShield', row: 8, col: 2 },
      { skillId: 'IncreasesChanceofIgnoreDef', row: 8, col: 3 },
    ]
  },
  'Slayer': {
    green: [
      // FILA 1 (Skills iniciales)
      { skillId: 'DefenseRatePVP', row: 0, col: 3 },
      { skillId: 'DurabilityReduction', row: 0, col: 0 },

      // FILA 2 (Skills que requieren fila anterior)
      { skillId: 'MaximumSDIncrease', row: 1, col: 1 },
      { skillId: 'autoManaRecovery', row: 1, col: 3 },
      // FILA 3
      { skillId: 'DurabilityReduction2', row: 2, col: 0 },
      { skillId: 'SDRecoverySpeedIncrease', row: 2, col: 1 },
      { skillId: 'AutomaticHPRecoveryIncrease', row: 2, col: 3 },
      // FILA 4
      { skillId: 'DefenseIncrease', row: 3, col: 1 },
      { skillId: 'ElementalDEFIncrease', row: 3, col: 2 },
      { skillId: 'AutomaticAGRecoveryIncrease', row: 3, col: 3 },
      // FILA 5
      { skillId: 'DurabilityReduction3', row: 4, col: 0 },
      { skillId: 'DefenseSuccessRateIncrease', row: 4, col: 1 },
      // FILA 6
      { skillId: 'ArmorSetBonusIncrease', row: 5, col: 2 },
      { skillId: 'Revenge', row: 5, col: 3 },
      // FILA 7
      { skillId: 'energy', row: 6, col: 0 },
      { skillId: 'stamina', row: 6, col: 1 },
      { skillId: 'agility', row: 6, col: 2 },
      { skillId: 'strength', row: 6, col: 3 },

      //FILA 8
      { skillId: 'wings3def', row: 7, col: 1 },
      { skillId: 'ProtectionShield', row: 7, col: 3 },
      { skillId: 'WeaponBlockRate', row: 7, col: 2 },

      // FILA 9
      { skillId: 'wings3atk', row: 8, col: 1 },
      { skillId: 'SteelArmor', row: 8, col: 2 },
      { skillId: 'shieldBlockRate', row: 8, col: 3 },

    ],
    blue: [
      // FILA 1 (Skills iniciales)
      { skillId: 'AttackSuccessRateIncrease', row: 0, col: 0 },
      // FILA 2
      { skillId: 'CycloneStrengthener', row: 1, col: 0 },
      { skillId: 'SwordInertiaStrengthener', row: 1, col: 3 },
      // FILA 3
      { skillId: 'TwistingSlashStrengthener', row: 2, col: 0 },
      { skillId: 'AngerBlowStrengthener', row: 2, col: 1 },
      { skillId: 'SwordInertiaStrengthener', row: 2, col: 3 },
      // FILA 4
      { skillId: 'MaximumLifeIncrease', row: 3, col: 2 },
      { skillId: 'WeaponMastery', row: 3, col: 3 },
      // FILA 5
      { skillId: 'MaximumManaIncrease', row: 4, col: 2 },
      // FILA 6
      { skillId: 'BatFlockStrengthener', row: 5, col: 1 },
      { skillId: 'MaximumAGIncrease', row: 5, col: 2 },
      // FILA 7
      { skillId: 'BatFlockMastery', row: 6, col: 1 },
      { skillId: 'MaxHPBoost', row: 6, col: 2 },
      // FILA 8
      { skillId: 'DetectionStrengthener', row: 7, col: 0 },
      { skillId: 'Rush', row: 7, col: 2 },
      { skillId: 'DemolishStrengthener', row: 7, col: 3 },
      // FILA 9
      { skillId: 'DemolishMastery', row: 8, col: 3 },
    ],
    red: [
      // FILA 1
      { skillId: 'PvPAttackRate', row: 0, col: 0 },
      // FILA 2 
      { skillId: 'ShortSwordStrengthener', row: 1, col: 0 },
      // FILA 3 
      { skillId: 'ShortSwordMastery', row: 2, col: 0 },
      // FILA 4 
      { skillId: 'ManaReduction', row: 3, col: 1 },
      { skillId: 'MonsterAttackSDIncrement', row: 3, col: 2 },
      { skillId: 'MonsterAttackLifeIncrement', row: 3, col: 3 },
      // FILA 5 
      { skillId: 'MinimumAttackPowerIncrease', row: 4, col: 1 },
      { skillId: 'MonsterAttackManaIncrement', row: 4, col: 3 },
      // FILA 6 
      { skillId: 'MaximumAttackPowerIncrease', row: 5, col: 1 },
      { skillId: 'IncreasesCriticalDamageRate', row: 5, col: 3 },
      // FILA 7 
      { skillId: 'RestoresAllMana', row: 6, col: 0 },
      { skillId: 'RestoresAllHP', row: 6, col: 1 },
      { skillId: 'AbsorbLife', row: 6, col: 2 },
      { skillId: 'IncreasesExcellentDamageRate', row: 6, col: 3 },
      // FILA 8 
      { skillId: 'BattleMind', row: 7, col: 0 },
      { skillId: 'RestoresAllSD', row: 7, col: 1 },
      { skillId: 'IncreasesDoubleDamageRate', row: 7, col: 3 },
      // FILA 9 
      { skillId: 'AbsorbShield', row: 8, col: 2 },
      { skillId: 'IncreasesChanceofIgnoreDef', row: 8, col: 3 },
    ]

  },
  'Gun Crusher': {
    green: [
      // FILA 1 (Skills iniciales)
      { skillId: 'DefenseRatePVP', row: 0, col: 3 },
      { skillId: 'DurabilityReduction', row: 0, col: 0 },

      // FILA 2 (Skills que requieren fila anterior)
      { skillId: 'MaximumSDIncrease', row: 1, col: 1 },
      { skillId: 'autoManaRecovery', row: 1, col: 3 },
      // FILA 3
      { skillId: 'DurabilityReduction2', row: 2, col: 0 },
      { skillId: 'SDRecoverySpeedIncrease', row: 2, col: 1 },
      { skillId: 'AutomaticHPRecoveryIncrease', row: 2, col: 3 },
      // FILA 4
      { skillId: 'DefenseIncrease', row: 3, col: 1 },
      { skillId: 'ElementalDEFIncrease', row: 3, col: 2 },
      { skillId: 'AutomaticAGRecoveryIncrease', row: 3, col: 3 },
      // FILA 5
      { skillId: 'DurabilityReduction3', row: 4, col: 0 },
      { skillId: 'DefenseSuccessRateIncrease', row: 4, col: 1 },
      // FILA 6
      { skillId: 'ArmorSetBonusIncrease', row: 5, col: 2 },
      { skillId: 'Revenge', row: 5, col: 3 },
      // FILA 7
      { skillId: 'energy', row: 6, col: 0 },
      { skillId: 'stamina', row: 6, col: 1 },
      { skillId: 'agility', row: 6, col: 2 },
      { skillId: 'strength', row: 6, col: 3 },

      //FILA 8
      { skillId: 'wings3def', row: 7, col: 1 },

      // FILA 9
      { skillId: 'wings3atk', row: 8, col: 1 },
      { skillId: 'SteelArmor', row: 8, col: 2 },
    ],
    blue: [
      // FILA 1 (Skills iniciales)
      { skillId: 'AttackSuccessRateIncrease', row: 0, col: 0 },
      // FILA 2
      { skillId: 'IceBreakStrengthener', row: 1, col: 1 },
      { skillId: 'DeathFireStrengthener', row: 1, col: 2 },
      { skillId: 'DeathIceStrengthener', row: 1, col: 3 },
      // FILA 3
      { skillId: 'IceBreakMastery', row: 2, col: 1 },
      { skillId: 'DeathFireMastery', row: 2, col: 2 },
      { skillId: 'DeathIceMastery', row: 2, col: 3 },
      // FILA 4
      { skillId: 'MagicMastery', row: 3, col: 0 },
      { skillId: 'MaximumLifeIncrease', row: 3, col: 3 },
      // FILA 5
      { skillId: 'FixedFireStrengthener', row: 4, col: 0 },
      { skillId: 'DarkPlasmaStrengthener', row: 4, col: 1 },
      { skillId: 'MaximumManaIncrease', row: 4, col: 3 },
      // FILA 6
      { skillId: 'FixedFireMastery', row: 5, col: 0 },
      { skillId: 'DarkPlasmaProficiency', row: 5, col: 1 },
      { skillId: 'MaximumAGIncrease', row: 5, col: 3 },
      // FILA 7
      { skillId: 'DarkPlasmaMastery', row: 6, col: 1 },
      { skillId: 'MaxHPBoost', row: 6, col: 3 },
    ],
    red: [
      // FILA 1
      { skillId: 'PvPAttackRate', row: 0, col: 0 },
      // FILA 2 
      { skillId: 'MagicGunStrengthener', row: 1, col: 1 },
      // FILA 3 
      { skillId: 'MagicGunMastery', row: 2, col: 1 },
      // FILA 4 
      { skillId: 'ManaReduction', row: 3, col: 1 },
      { skillId: 'MonsterAttackSDIncrement', row: 3, col: 2 },
      { skillId: 'MonsterAttackLifeIncrement', row: 3, col: 3 },
      // FILA 5 
      { skillId: 'MinimumWizardryIncrease', row: 4, col: 1 },
      { skillId: 'MonsterAttackManaIncrement', row: 4, col: 3 },
      // FILA 6 
      { skillId: 'MaximumWizardryIncrease', row: 5, col: 1 },
      { skillId: 'IncreasesCriticalDamageRate', row: 5, col: 3 },
      // FILA 7 
      { skillId: 'RestoresAllMana', row: 6, col: 0 },
      { skillId: 'RestoresAllHP', row: 6, col: 1 },
      { skillId: 'AbsorbLife', row: 6, col: 2 },
      { skillId: 'IncreasesExcellentDamageRate', row: 6, col: 3 },
      // FILA 8 
      { skillId: 'RestoresAllSD', row: 7, col: 1 },
      { skillId: 'IncreasesDoubleDamageRate', row: 7, col: 3 },
      // FILA 9 
      { skillId: 'AbsorbShield', row: 8, col: 2 },
      { skillId: 'IncreasesChanceofIgnoreDef', row: 8, col: 3 },
    ]
  },
  'White Wizard': {
    green: [
      // FILA 1 (Skills iniciales)
      { skillId: 'DefenseRatePVP', row: 0, col: 3 },
      { skillId: 'DurabilityReduction', row: 0, col: 0 },

      // FILA 2 (Skills que requieren fila anterior)
      { skillId: 'MaximumSDIncrease', row: 1, col: 1 },
      { skillId: 'autoManaRecovery', row: 1, col: 3 },
      // FILA 3
      { skillId: 'DurabilityReduction2', row: 2, col: 0 },
      { skillId: 'SDRecoverySpeedIncrease', row: 2, col: 1 },
      { skillId: 'AutomaticHPRecoveryIncrease', row: 2, col: 3 },
      // FILA 4
      { skillId: 'DefenseIncrease', row: 3, col: 1 },
      { skillId: 'ElementalDEFIncrease', row: 3, col: 2 },
      { skillId: 'AutomaticAGRecoveryIncrease', row: 3, col: 3 },
      // FILA 5
      { skillId: 'DurabilityReduction3', row: 4, col: 0 },
      { skillId: 'DefenseSuccessRateIncrease', row: 4, col: 1 },
      // FILA 6
      { skillId: 'ArmorSetBonusIncrease', row: 5, col: 2 },
      { skillId: 'Revenge', row: 5, col: 3 },
      // FILA 7
      { skillId: 'energy', row: 6, col: 0 },
      { skillId: 'stamina', row: 6, col: 1 },
      { skillId: 'agility', row: 6, col: 2 },
      { skillId: 'strength', row: 6, col: 3 },

      //FILA 8
      { skillId: 'wings3def', row: 7, col: 1 },

      // FILA 9
      { skillId: 'wings3atk', row: 8, col: 1 },
      { skillId: 'SteelArmor', row: 8, col: 2 },
    ],
    blue: [
      // FILA 1 (Skills iniciales)
      { skillId: 'AttackSuccessRateIncrease', row: 0, col: 0 },
      // FILA 2
      { skillId: 'ShiningBirdStrengthener', row: 1, col: 0 },
      { skillId: 'LightningStrengthener', row: 1, col: 1 },
      { skillId: 'ExpansionofWizardryPowerUp', row: 1, col: 2 },
      // FILA 3
      { skillId: 'ShiningBirdMastery', row: 2, col: 0 },
      { skillId: 'BlastStrengthener', row: 2, col: 1 },
      { skillId: 'ExpansionofWizardryMastery', row: 2, col: 2 },
      // FILA 4
      { skillId: 'MagicMastery', row: 3, col: 2 },
      { skillId: 'MaximumLifeIncrease', row: 3, col: 3 },
      // FILA 5
      { skillId: 'IceStrengthener', row: 4, col: 0 },
      { skillId: 'MaximumManaIncrease', row: 4, col: 2 },
      // FILA 6
      { skillId: 'DragonViolentStrenghtener', row: 5, col: 1 },
      { skillId: 'MaximumAGIncrease', row: 5, col: 2 },
      // FILA 7
      { skillId: 'DragonViolentMastery', row: 6, col: 1 },
      { skillId: 'MaxHPBoost', row: 6, col: 2 },
      // FILA 8
      { skillId: 'EarthPrison', row: 7, col: 1 },
      // FILA 9
      { skillId: 'Illusion', row: 8, col: 0 },
      { skillId: 'IllusEarthPrisonStrengtheneron', row: 8, col: 1 },
    ],
    red: [
      // FILA 1
      { skillId: 'PvPAttackRate', row: 0, col: 0 },
      // FILA 2 
      { skillId: 'OneHandedStaffStrengthener', row: 1, col: 0 },
      { skillId: 'MagicBookStrengthener', row: 1, col: 2 },
      // FILA 3 
      { skillId: 'TwohandedStaffStrengthener', row: 2, col: 0 },
      { skillId: 'MagicBookMastery', row: 2, col: 2 },
      // FILA 4 
      { skillId: 'ReflectionBarrierStrengthener', row: 3, col: 0 },
      { skillId: 'ManaReduction', row: 3, col: 1 },
      { skillId: 'MonsterAttackSDIncrement', row: 3, col: 2 },
      { skillId: 'MonsterAttackLifeIncrement', row: 3, col: 3 },
      // FILA 5 
      { skillId: 'ReflectionBarrierSkills', row: 4, col: 0 },
      { skillId: 'MinimumWizardryIncrease', row: 4, col: 1 },
      { skillId: 'MonsterAttackManaIncrement', row: 4, col: 3 },
      // FILA 6 
      { skillId: 'ReflectionBarrierMastery', row: 5, col: 0 },
      { skillId: 'MaximumWizardryIncrease', row: 5, col: 1 },
      { skillId: 'IncreasesCriticalDamageRate', row: 5, col: 3 },
      // FILA 7 
      { skillId: 'RestoresAllMana', row: 6, col: 0 },
      { skillId: 'RestoresAllHP', row: 6, col: 1 },
      { skillId: 'AbsorbLife', row: 6, col: 2 },
      { skillId: 'IncreasesExcellentDamageRate', row: 6, col: 3 },
      // FILA 8 
      { skillId: 'GrandMagicPowUp', row: 7, col: 0 },
      { skillId: 'RestoresAllSD', row: 7, col: 1 },
      { skillId: 'IncreasesDoubleDamageRate', row: 7, col: 3 },
      // FILA 9 
      { skillId: 'AbsorbShield', row: 8, col: 2 },
      { skillId: 'IncreasesChanceofIgnoreDef', row: 8, col: 3 },
    ]
  },
  'Mage': {
    green: [
      // FILA 1 (Skills iniciales)
      { skillId: 'DefenseRatePVP', row: 0, col: 3 },
      { skillId: 'DurabilityReduction', row: 0, col: 0 },

      // FILA 2 (Skills que requieren fila anterior)
      { skillId: 'MaximumSDIncrease', row: 1, col: 1 },
      { skillId: 'autoManaRecovery', row: 1, col: 3 },
      // FILA 3
      { skillId: 'DurabilityReduction2', row: 2, col: 0 },
      { skillId: 'SDRecoverySpeedIncrease', row: 2, col: 1 },
      { skillId: 'AutomaticHPRecoveryIncrease', row: 2, col: 3 },
      // FILA 4
      { skillId: 'DefenseIncrease', row: 3, col: 1 },
      { skillId: 'ElementalDEFIncrease', row: 3, col: 2 },
      { skillId: 'AutomaticAGRecoveryIncrease', row: 3, col: 3 },
      // FILA 5
      { skillId: 'DurabilityReduction3', row: 4, col: 0 },
      { skillId: 'DefenseSuccessRateIncrease', row: 4, col: 1 },
      // FILA 6
      { skillId: 'ArmorSetBonusIncrease', row: 5, col: 2 },
      { skillId: 'Revenge', row: 5, col: 3 },
      // FILA 7
      { skillId: 'energy', row: 6, col: 0 },
      { skillId: 'stamina', row: 6, col: 1 },
      { skillId: 'agility', row: 6, col: 2 },
      { skillId: 'strength', row: 6, col: 3 },

      //FILA 8
      { skillId: 'wings3def', row: 7, col: 1 },
      { skillId: 'ProtectionShield', row: 7, col: 3 },

      // FILA 9
      { skillId: 'wings3atk', row: 8, col: 1 },
      { skillId: 'SteelArmor', row: 8, col: 2 },
      { skillId: 'shieldBlockRate', row: 8, col: 3 },

    ],
    blue: [
      // FILA 1 (Skills iniciales)
      { skillId: 'AttackSuccessRateIncrease', row: 0, col: 0 },
      // FILA 2
      { skillId: 'MarvelBurstStrengthener', row: 1, col: 0 },
      { skillId: 'FlameStrengthener', row: 1, col: 1 },
      { skillId: 'ExpansionofWizardryPowerUp', row: 1, col: 2 },
      { skillId: 'IntensiveCareStrengthener', row: 1, col: 3 },
      // FILA 3
      { skillId: 'MarvelBurstMastery', row: 2, col: 0 },
      { skillId: 'InfernoStrengthener', row: 2, col: 1 },
      { skillId: 'ExpansionofWizardryMastery', row: 2, col: 2 },
      { skillId: 'BeginnerDefenseImprovementStrengthener', row: 2, col: 3 },
      // FILA 4
      { skillId: 'MagicMastery', row: 3, col: 0 },
      { skillId: 'BeginnerAttackPowerImprovementStrengthener', row: 3, col: 1 },
      { skillId: 'MaximumLifeIncrease', row: 3, col: 2 },
      { skillId: 'BeginnerDefenseImprovementMastery', row: 3, col: 3 },
      // FILA 5
      { skillId: 'IceStrengthener', row: 4, col: 0 },
      { skillId: 'BeginnerAttackImprovementMastery', row: 4, col: 1 },
      { skillId: 'MaximumManaIncrease', row: 4, col: 2 },
      // FILA 6
      { skillId: 'IceStormStrengthener', row: 5, col: 0 },
      { skillId: 'UnleashMarvelStrenghtener', row: 5, col: 1 },
      { skillId: 'MaximumAGIncrease', row: 5, col: 2 },
      { skillId: 'Cure', row: 5, col: 3 },
      // FILA 7
      { skillId: 'UnleashMarvelMastery', row: 6, col: 1 },
      { skillId: 'MaxHPBoost', row: 6, col: 2 },
      // FILA 8
      { skillId: 'EarthPrison', row: 7, col: 1 },
      { skillId: 'BeginnerBlessStrengthener', row: 7, col: 3 },
      // FILA 9
      { skillId: 'IllusEarthPrisonStrengtheneron', row: 8, col: 1 },
    ],
    red: [
      // FILA 1 (Skills iniciales)
      { skillId: 'PvPAttackRate', row: 0, col: 0 },
      // FILA 2 
      { skillId: 'OrbStrengthener', row: 1, col: 0 },
      { skillId: 'ShieldStrengthener', row: 1, col: 2 },
      // FILA 3 
      { skillId: 'OrbMastery', row: 2, col: 0 },
      { skillId: 'ShieldMastery', row: 2, col: 2 },
      // FILA 4 
      { skillId: 'ManaReduction', row: 3, col: 0 },
      { skillId: 'MonsterAttackSDIncrement', row: 3, col: 2 },
      { skillId: 'MonsterAttackLifeIncrement', row: 3, col: 3 },
      // FILA 5 
      { skillId: 'MinimumWizardryIncrease', row: 4, col: 0 },
      { skillId: 'MonsterAttackManaIncrement', row: 4, col: 3 },
      // FILA 6 
      { skillId: 'MaximumWizardryIncrease', row: 5, col: 0 },
      { skillId: 'IncreasesCriticalDamageRate', row: 5, col: 3 },
      // FILA 7 
      { skillId: 'RestoresAllMana', row: 6, col: 0 },
      { skillId: 'RestoresAllHP', row: 6, col: 1 },
      { skillId: 'AbsorbLife', row: 6, col: 2 },
      { skillId: 'IncreasesExcellentDamageRate', row: 6, col: 3 },
      // FILA 8 
      { skillId: 'GrandMagicPowUp', row: 7, col: 0 },
      { skillId: 'RestoresAllSD', row: 7, col: 1 },
      { skillId: 'IncreasesDoubleDamageRate', row: 7, col: 3 },
      // FILA 9 
      { skillId: 'AbsorbShield', row: 8, col: 2 },
      { skillId: 'IncreasesChanceofIgnoreDef', row: 8, col: 3 },
    ]
  },
  'Illusion Knight': {
    green: [
      // FILA 1 (Skills iniciales)
      { skillId: 'DefenseRatePVP', row: 0, col: 3 },
      { skillId: 'DurabilityReduction', row: 0, col: 0 },

      // FILA 2 (Skills que requieren fila anterior)
      { skillId: 'MaximumSDIncrease', row: 1, col: 1 },
      { skillId: 'autoManaRecovery', row: 1, col: 3 },
      // FILA 3
      { skillId: 'DurabilityReduction2', row: 2, col: 0 },
      { skillId: 'SDRecoverySpeedIncrease', row: 2, col: 1 },
      { skillId: 'AutomaticHPRecoveryIncrease', row: 2, col: 3 },
      // FILA 4
      { skillId: 'DefenseIncrease', row: 3, col: 1 },
      { skillId: 'ElementalDEFIncrease', row: 3, col: 2 },
      { skillId: 'AutomaticAGRecoveryIncrease', row: 3, col: 3 },
      // FILA 5
      { skillId: 'DurabilityReduction3', row: 4, col: 0 },
      { skillId: 'DefenseSuccessRateIncrease', row: 4, col: 1 },
      // FILA 6
      { skillId: 'ArmorSetBonusIncrease', row: 5, col: 2 },
      { skillId: 'Revenge', row: 5, col: 3 },
      // FILA 7
      { skillId: 'energy', row: 6, col: 0 },
      { skillId: 'stamina', row: 6, col: 1 },
      { skillId: 'agility', row: 6, col: 2 },
      { skillId: 'strength', row: 6, col: 3 },

      //FILA 8
      { skillId: 'wings3def', row: 7, col: 1 },
      { skillId: 'ProtectionShield', row: 7, col: 3 },
      { skillId: 'WeaponBlockRate', row: 7, col: 2 },

      // FILA 9
      { skillId: 'wings3atk', row: 8, col: 1 },
      { skillId: 'SteelArmor', row: 8, col: 2 },
      { skillId: 'shieldBlockRate', row: 8, col: 3 },

    ],
    blue: [
      // FILA 1 (Skills iniciales)
      { skillId: 'AttackSuccessRateIncrease', row: 0, col: 0 },
      // FILA 2
      { skillId: 'ChargeSlashStrengthener', row: 1, col: 0 },
      // FILA 3
      { skillId: 'ChargeSlashMastery', row: 2, col: 0 },
      { skillId: 'WeaponMastery', row: 2, col: 1 },
      { skillId: 'WindGlaiveStrengthener', row: 2, col: 2 },
      // FILA 4
      { skillId: 'IllusionBladeStrengthener', row: 3, col: 0 },
      { skillId: 'WindGlaiveMastery', row: 3, col: 2 },
      { skillId: 'MaximumLifeIncrease', row: 3, col: 3 },
      // FILA 5
      { skillId: 'IllusionBladeMastery', row: 4, col: 0 },
      { skillId: 'IllusionAvatarStrengthener', row: 4, col: 1 },
      { skillId: 'MaximumManaIncrease', row: 4, col: 3 },
      // FILA 6
      { skillId: 'IllusionBladeMastery2', row: 5, col: 0 },
      { skillId: 'IllusionAvatarMastery', row: 5, col: 1 },
      { skillId: 'MaximumAGIncrease', row: 5, col: 3 },
      // FILA 7
      { skillId: 'BladeStormStrengthener', row: 6, col: 2 },
      { skillId: 'MaxHPBoost', row: 6, col: 3 },
      // FILA 8
      { skillId: 'BladeStormMastery', row: 7, col: 2 },
    ],
    red: [
      // FILA 1
      { skillId: 'PvPAttackRate', row: 0, col: 0 },
      // FILA 2 
      { skillId: 'BladeStrengthener', row: 1, col: 0 },
      // FILA 3 
      { skillId: 'BladeMastery', row: 2, col: 0 },
      // FILA 4 
      { skillId: 'ManaReduction', row: 3, col: 1 },
      { skillId: 'MonsterAttackSDIncrement', row: 3, col: 2 },
      { skillId: 'MonsterAttackLifeIncrement', row: 3, col: 3 },
      // FILA 5 
      { skillId: 'MinimumAttackPowerIncrease', row: 4, col: 1 },
      { skillId: 'MonsterAttackManaIncrement', row: 4, col: 3 },
      // FILA 6 
      { skillId: 'MaximumAttackPowerIncrease', row: 5, col: 1 },
      { skillId: 'IncreasesCriticalDamageRate', row: 5, col: 3 },
      // FILA 7 
      { skillId: 'RestoresAllMana', row: 6, col: 0 },
      { skillId: 'RestoresAllHP', row: 6, col: 1 },
      { skillId: 'AbsorbLife', row: 6, col: 2 },
      { skillId: 'IncreasesExcellentDamageRate', row: 6, col: 3 },
      // FILA 8 
      { skillId: 'BattleMind', row: 7, col: 0 },
      { skillId: 'RestoresAllSD', row: 7, col: 1 },
      { skillId: 'IncreasesDoubleDamageRate', row: 7, col: 3 },
      // FILA 9 
      { skillId: 'AbsorbShield', row: 8, col: 2 },
      { skillId: 'IncreasesChanceofIgnoreDef', row: 8, col: 3 },
    ]
  },

  'Alchemist': {
    green: [
      // FILA 1 (Skills iniciales)
      { skillId: 'DefenseRatePVP', row: 0, col: 3 },
      { skillId: 'DurabilityReduction', row: 0, col: 0 },

      // FILA 2 (Skills que requieren fila anterior)
      { skillId: 'MaximumSDIncrease', row: 1, col: 1 },
      { skillId: 'autoManaRecovery', row: 1, col: 3 },
      // FILA 3
      { skillId: 'DurabilityReduction2', row: 2, col: 0 },
      { skillId: 'SDRecoverySpeedIncrease', row: 2, col: 1 },
      { skillId: 'AutomaticHPRecoveryIncrease', row: 2, col: 3 },
      // FILA 4
      { skillId: 'DefenseIncrease', row: 3, col: 1 },
      { skillId: 'ElementalDEFIncrease', row: 3, col: 2 },
      { skillId: 'AutomaticAGRecoveryIncrease', row: 3, col: 3 },
      // FILA 5
      { skillId: 'DurabilityReduction3', row: 4, col: 0 },
      { skillId: 'DefenseSuccessRateIncrease', row: 4, col: 1 },
      // FILA 6
      { skillId: 'ArmorSetBonusIncrease', row: 5, col: 2 },
      { skillId: 'Revenge', row: 5, col: 3 },
      // FILA 7
      { skillId: 'energy', row: 6, col: 0 },
      { skillId: 'stamina', row: 6, col: 1 },
      { skillId: 'agility', row: 6, col: 2 },
      { skillId: 'strength', row: 6, col: 3 },

      //FILA 8
      { skillId: 'wings3def', row: 7, col: 1 },

      // FILA 9
      { skillId: 'wings3atk', row: 8, col: 1 },
      { skillId: 'SteelArmor', row: 8, col: 2 },

    ],
    blue: [
      // FILA 1 (Skills iniciales)
      { skillId: 'AttackSuccessRateIncrease', row: 0, col: 0 },
      // FILA 2
      { skillId: 'AngelHomunculusStrengthener', row: 1, col: 0 },
      { skillId: 'FlameStrengthener', row: 1, col: 1 },
      { skillId: 'ExpansionofWizardryPowerUp', row: 1, col: 2 },
      { skillId: 'LightningStrengthener', row: 1, col: 3 },
      // FILA 3
      { skillId: 'AngelHomunculusMastery', row: 2, col: 0 },
      { skillId: 'InfernoStrengthener', row: 2, col: 1 },
      { skillId: 'ExpansionofWizardryMastery', row: 2, col: 2 },
      { skillId: 'BlastStrengthener', row: 2, col: 3 },
      // FILA 4
      { skillId: 'MagicMastery', row: 3, col: 0 },
      { skillId: 'MaximumLifeIncrease', row: 3, col: 2 },
      { skillId: 'DecayStrengthener', row: 3, col: 3 },
      // FILA 5
      { skillId: 'MaximumManaIncrease', row: 4, col: 2 },
      { skillId: 'IceStrengthener', row: 4, col: 3 },
      // FILA 6
      { skillId: 'MeteorStrengthener', row: 5, col: 0 },
      { skillId: 'IgnitionBomberStrengthener', row: 5, col: 1 },
      { skillId: 'MaximumAGIncrease', row: 5, col: 2 },
      { skillId: 'IceStormStrengthener', row: 5, col: 3 },
      // FILA 7
      { skillId: 'IgnitionBomberMastery', row: 6, col: 1 },
      { skillId: 'MaxHPBoost', row: 6, col: 2 },
      // FILA 8
      { skillId: 'EarthPrison', row: 7, col: 1 },
      { skillId: 'ConfusionStoneStrengthener', row: 7, col: 3 },
      // FILA 9
      { skillId: 'Illusion', row: 8, col: 0 },
      { skillId: 'IllusEarthPrisonStrengtheneron', row: 8, col: 1 },
      { skillId: 'ConfusionStoneMastery', row: 8, col: 3 },
    ],
    red: [
      // FILA 1 (Skills iniciales)
      { skillId: 'PvPAttackRate', row: 0, col: 0 },
      // FILA 2 
      { skillId: 'WandStrengthener', row: 1, col: 0 },
      { skillId: 'ElixirStrengthener', row: 1, col: 2 },
      // FILA 3 

      { skillId: 'ElixirMastery', row: 2, col: 2 },
      // FILA 4 
      { skillId: 'ManaReduction', row: 3, col: 1 },
      { skillId: 'MonsterAttackSDIncrement', row: 3, col: 2 },
      { skillId: 'MonsterAttackLifeIncrement', row: 3, col: 3 },
      // FILA 5 
      { skillId: 'MinimumWizardryIncrease', row: 4, col: 1 },
      { skillId: 'MonsterAttackManaIncrement', row: 4, col: 3 },
      // FILA 6 
      { skillId: 'MaximumWizardryIncrease', row: 5, col: 1 },
      { skillId: 'IncreasesCriticalDamageRate', row: 5, col: 3 },
      // FILA 7 
      { skillId: 'RestoresAllMana', row: 6, col: 0 },
      { skillId: 'RestoresAllHP', row: 6, col: 1 },
      { skillId: 'AbsorbLife', row: 6, col: 2 },
      { skillId: 'IncreasesExcellentDamageRate', row: 6, col: 3 },
      // FILA 8 
      { skillId: 'GrandMagicPowUp', row: 7, col: 0 },
      { skillId: 'RestoresAllSD', row: 7, col: 1 },
      { skillId: 'IncreasesDoubleDamageRate', row: 7, col: 3 },
      // FILA 9 
      { skillId: 'AbsorbShield', row: 8, col: 2 },
      { skillId: 'IncreasesChanceofIgnoreDef', row: 8, col: 3 },
    ]
  },
};

// Función para calcular dinámicamente los requisitos de fila basados en la posición actual
export const calculateRowRequirements = (skillConfig, row) => {
  // Si es fila 0, no tiene requisitos
  if (row === 0) {
    return { minRow: 0, minLevel: 0 };
  }

  // Para cualquier otra fila, requiere skill +10 en la fila anterior
  return { minRow: row, minLevel: 10 };
};

// Modificar getSkillData para incluir requisitos dinámicos
export const getSkillData = (skillId, row, col) => {
  const skillData = SKILLS_DATABASE[skillId];
  if (!skillData) {
    return {
      id: skillId,
      name: `Unknown Skill (${skillId})`,
      row,
      col,
      maxLevel: 20,
      requires: [],
      rowRequirements: { minRow: 0, minLevel: 0 },
      image: '/3rd/new_Master_Icon_01.webp',
      description: 'Skill no encontrado',
      valueType: 'Unknown',
      values: Array(21).fill(0)
    };
  }

  // Sobrescribir rowRequirements con el cálculo dinámico
  return {
    ...skillData,
    row,
    col,
    // Calcular requisitos de fila basados en la posición actual
    rowRequirements: calculateRowRequirements(skillData, row)
  };
};

// Verificar si un skill puede ser aumentado (incluyendo requisitos de fila)
export const canIncreaseSkill = (skill, skillLevels, allSkills) => {
  // Si ya está en nivel 0, verificar si puede ser desbloqueado
  const currentLevel = skillLevels[skill.id] || 0;

  if (currentLevel === 0) {
    // Verificar requisitos de fila
    if (skill.rowRequirements && skill.rowRequirements.minRow > 0) {
      const { minRow, minLevel } = skill.rowRequirements;
      const targetRow = minRow - 1;

      // Buscar skills en la fila anterior
      const skillsInTargetRow = allSkills.filter(s => s.row === targetRow);
      const hasRequiredSkillInRow = skillsInTargetRow.some(s => {
        const level = skillLevels[s.id] || 0;
        return level >= minLevel;
      });

      if (!hasRequiredSkillInRow) {
        return false;
      }
    }
  }

  // Verificar requisitos específicos de skills
  if (skill.requires && skill.requires.length > 0) {
    return skill.requires.every(req => {
      const requiredSkillLevel = skillLevels[req.skillId] || 0;
      return requiredSkillLevel >= req.requiredLevel;
    });
  }

  return true;
};

// Verificar si un skill está bloqueado
export const isSkillLocked = (skill, skillLevels, allSkills) => {
  const currentLevel = skillLevels[skill.id] || 0;

  // Si ya tiene nivel > 0, no está bloqueado
  if (currentLevel > 0) return false;

  // Si no puede ser aumentado desde nivel 0, está bloqueado
  return !canIncreaseSkill(skill, skillLevels, allSkills);
};

// Obtener mensaje de requisitos para el tooltip
export const getRequirementMessage = (skill, skillLevels, allSkills) => {
  const messages = [];

  // Verificar requisitos de fila
  if (skill.rowRequirements && skill.rowRequirements.minRow > 0) {
    const { minRow, minLevel } = skill.rowRequirements;
    const targetRow = minRow - 1;

    const skillsInTargetRow = allSkills.filter(s => s.row === targetRow);
    const hasRequiredSkillInRow = skillsInTargetRow.some(s => {
      const level = skillLevels[s.id] || 0;
      return level >= minLevel;
    });

    if (!hasRequiredSkillInRow) {
      messages.push(`Requiere 1 skill +${minLevel} en fila ${targetRow + 1}`);
    }
  }

  // Verificar requisitos específicos
  if (skill.requires && skill.requires.length > 0) {
    skill.requires.forEach(req => {
      const currentLevel = skillLevels[req.skillId] || 0;
      if (currentLevel < req.requiredLevel) {
        const requiredSkill = Object.values(SKILLS_DATABASE).find(s => s.id === req.skillId);
        messages.push(`Requiere ${requiredSkill?.name || 'Skill'} +${req.requiredLevel}`);
      }
    });
  }

  return messages;
};