
export const SKILLS_DATABASE = {
    // ========================================
    // 🌿 GREEN TREE SKILLS
    // ========================================
    DefenseRatePVP: {
        id: 1,
        name: 'PvP Defense Rate Increase',
        maxLevel: 20,
        requires: [], // Sin requisitos específicos
        rowRequirements: { minRow: 0, minLevel: 0 }, // Fila 0, sin requisitos
        image: '/3rd/green/DefenseRatePVP.webp',
        description: 'PvP defense rate increases by X',
        valueType: 'DefenseratePVP',
        values: [0, 614, 1029, 1415, 1774, 2106, 2413, 2695, 2954, 3190, 3405, 3600, 3775, 3931, 4070, 4193, 4301, 4394, 4474, 4541, 4598]
    },
    DurabilityReduction: {
        id: 2,
        name: 'Durability Reduction (1)',
        maxLevel: 20,
        requires: [],
        rowRequirements: { minRow: 0, minLevel: 0 }, // Fila 0, sin requisitos
        image: '/3rd/green/DurabilityReduction.webp',
        description: 'Durability reduction speed of the weapons and armor equipped decreases by %',
        valueType: 'DurabilityReductionRate',
        values: [0, 18.06, 30.27, 41.64, 52.19, 61.97, 70.99, 79.29, 86.90, 93.85, 100.17, 105.89, 111.03, 115.64, 119.73, 123.34, 126.50, 129.24, 131.59, 133.58, 135.24]
    },
    MaximumSDIncrease: {
        id: 3,
        name: 'Maximum SD Increase',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: {}, // Fila 2, necesita skill +10 en fila anterior
        image: '/3rd/green/MaximumSDIncrease.webp',
        description: 'Max SD increases by X',
        valueType: 'MaximumSDIncrease',
        values: [0, 511, 857, 1179, 1478, 1755, 2011, 2246, 2462, 2659, 2838, 3000, 3145, 3276, 3392, 3494, 3584, 3661, 3728, 3784, 3831]
    },
    autoManaRecovery: {
        id: 4,
        name: 'Auto Mana Recovery Increase',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: {}, // Fila 2, necesita skill +10 en fila anterior
        image: '/3rd/green/recoveryMana.webp',
        description: 'Automatic Mana regeneration increases by %',
        valueType: 'autoManaRecoveryRate',
        values: [
            0,
            1.81,
            3.03,   // Level 2
            4.16,   // Level 3
            5.22,   // Level 4
            6.20,   // Level 5
            7.10,   // Level 6
            7.93,   // Level 7
            8.69,   // Level 8
            9.39,   // Level 9
            10.02,  // Level 10
            10.59,  // Level 11
            11.10,  // Level 12
            11.56,  // Level 13
            11.97,  // Level 14
            12.33,  // Level 15
            12.65,  // Level 16
            12.92,  // Level 17
            13.16,  // Level 18
            13.36,  // Level 19
            13.52   // Level 20
        ]
    },
    DurabilityReduction2: {
        id: 5,
        name: 'Durability Reduction (2)',
        maxLevel: 20,
        requires: [{ skillId: 2, requiredLevel: 10 }], // Requisito específico
        rowRequirements: {}, // Fila 2, necesita skill +10 en fila anterior
        image: '/3rd/green/DurabilityReduction2.webp',
        description: 'Durability reduction speed of equipped accessories (necklace & rings) decreases by %',
        valueType: 'DurabilityReduction2Rate',
        values: [
            0,      // Level 0 (base)
            12.04,  // Level 1
            20.18,  // Level 2
            27.76,  // Level 3
            34.80,  // Level 4
            41.31,  // Level 5
            47.33,  // Level 6
            52.86,  // Level 7
            57.94,  // Level 8
            62.57,  // Level 9
            66.78,  // Level 10
            70.59,  // Level 11
            74.02,  // Level 12
            77.09,  // Level 13
            79.82,  // Level 14
            82.23,  // Level 15
            84.34,  // Level 16
            86.16,  // Level 17
            87.73,  // Level 18
            89.05,  // Level 19
            90.16   // Level 20
        ]
    },
    SDRecoverySpeedIncrease: {
        id: 6,
        name: 'SD Recovery Speed Increase',
        maxLevel: 20,
        requires: [{ skillId: 3, requiredLevel: 10 }], // Requisito específico
        rowRequirements: {}, // Fila 2, necesita skill +10 en fila anterior
        image: '/3rd/green/SDRecoverySpeedIncrease.webp',
        description: 'Automatic SD recovery increases by %',
        valueType: 'SDRecoverySpeedIncreaseRate',
        values: [
            0,     // Level 0 (base)
            1.20,  // Level 1
            2.02,  // Level 2
            2.78,  // Level 3
            3.48,  // Level 4
            4.13,  // Level 5
            4.73,  // Level 6
            5.29,  // Level 7
            5.79,  // Level 8
            6.26,  // Level 9
            6.68,  // Level 10
            7.06,  // Level 11
            7.40,  // Level 12
            7.71,  // Level 13
            7.98,  // Level 14
            8.22,  // Level 15
            8.43,  // Level 16
            8.62,  // Level 17
            8.77,  // Level 18
            8.91,  // Level 19
            9.02   // Level 20
        ]
    },
    AutomaticHPRecoveryIncrease: {
        id: 7,
        name: 'Automatic HP Recovery Increase',
        maxLevel: 20,
        requires: [{ skillId: 4, requiredLevel: 10 }], // Requisito específico
        rowRequirements: {}, // Fila 2, necesita skill +10 en fila anterior
        image: '/3rd/green/recoveryHP.webp',
        description: 'Automatic HP recovery increases by %',
        valueType: 'AutomaticHPRecoveryIncreaseRate',
        values: [
            0,     // Level 0 (base)
            1.20,  // Level 1
            2.02,  // Level 2
            2.78,  // Level 3
            3.48,  // Level 4
            4.13,  // Level 5
            4.73,  // Level 6
            5.29,  // Level 7
            5.79,  // Level 8
            6.26,  // Level 9
            6.68,  // Level 10
            7.06,  // Level 11
            7.40,  // Level 12
            7.71,  // Level 13
            7.98,  // Level 14
            8.22,  // Level 15
            8.43,  // Level 16
            8.62,  // Level 17
            8.77,  // Level 18
            8.91,  // Level 19
            9.02   // Level 20
        ]
    },
    DefenseIncrease: {
        id: 8,
        name: 'Defense Increase',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: {}, // Fila 2, necesita skill +10 en fila anterior
        image: '/3rd/green/DefenseIncrease.webp',
        description: 'Defense Increase by X',
        valueType: 'DefenseIncrease',
        values: [
            0,    // Level 0 (base)
            60,   // Level 1
            100,  // Level 2
            138,  // Level 3
            173,  // Level 4
            206,  // Level 5
            236,  // Level 6
            264,  // Level 7
            289,  // Level 8
            312,  // Level 9
            333,  // Level 10
            352,  // Level 11
            370,  // Level 12
            385,  // Level 13
            399,  // Level 14
            411,  // Level 15
            421,  // Level 16
            430,  // Level 17
            438,  // Level 18
            445,  // Level 19
            450   // Level 20
        ]
    },
    ElementalDEFIncrease: {
        id: 9,
        name: 'Elemental DEF Increase',
        maxLevel: 10,
        requires: [], // Requisito específico
        rowRequirements: {}, // Fila 2, necesita skill +10 en fila anterior
        image: '/3rd/green/ElementalDEFIncrease.webp',
        description: 'Elemental DEF Increase by X',
        valueType: 'ElementalDEFIncrease',
        values: [
            0,   // Level 0 (base)
            3,   // Level 1
            7,   // Level 2
            10,  // Level 3
            14,  // Level 4
            17,  // Level 5
            21,  // Level 6
            24,  // Level 7
            28,  // Level 8
            31,  // Level 9
            35   // Level 10
        ]
    },
    AutomaticAGRecoveryIncrease: {
        id: 10,
        name: 'Automatic AG Recovery Increase',
        maxLevel: 20,
        requires: [{ skillId: 4, requiredLevel: 10 }, { skillId: 7, requiredLevel: 10 }], // Requisito específico
        rowRequirements: {}, // Fila 2, necesita skill +10 en fila anterior
        image: '/3rd/green/AutomaticAGRecoveryIncrease.webp',
        description: 'Automatic AG Recovery Increase by %',
        valueType: 'AutomaticAGRecoveryIncreaseRate',
        values: [
            0,     // Level 0 (base)
            1.20,  // Level 1
            2.02,  // Level 2
            2.78,  // Level 3
            3.48,  // Level 4
            4.13,  // Level 5
            4.73,  // Level 6
            5.29,  // Level 7
            5.79,  // Level 8
            6.26,  // Level 9
            6.68,  // Level 10
            7.06,  // Level 11
            7.40,  // Level 12
            7.71,  // Level 13
            7.98,  // Level 14
            8.22,  // Level 15
            8.43,  // Level 16
            8.62,  // Level 17
            8.77,  // Level 18
            8.91,  // Level 19
            9.02   // Level 20
        ]
    },
    DurabilityReduction3: {
        id: 11,
        name: 'Durability Reduction (3)',
        maxLevel: 20,
        requires: [{ skillId: 5, requiredLevel: 10 }, { skillId: 2, requiredLevel: 10 }], // Requisito específico
        rowRequirements: {}, // Fila 2, necesita skill +10 en fila anterior
        image: '/3rd/green/DurabilityReduction3.webp',
        description: 'Durability reduction speed of the consumable items (Satan, Guardian Angel, Dinorant ,Fenrir) decreases by %',
        valueType: 'DurabilityReduction3Rate',
        values: [
            0,      // Level 0 (base)
            12.04,  // Level 1
            20.18,  // Level 2
            27.76,  // Level 3
            34.80,  // Level 4
            41.31,  // Level 5
            47.33,  // Level 6
            52.86,  // Level 7
            57.94,  // Level 8
            62.57,  // Level 9
            66.78,  // Level 10
            70.59,  // Level 11
            74.02,  // Level 12
            77.09,  // Level 13
            79.82,  // Level 14
            82.23,  // Level 15
            84.34,  // Level 16
            86.16,  // Level 17
            87.73,  // Level 18
            89.05,  // Level 19
            90.16   // Level 20
        ]
    },
    DefenseSuccessRateIncrease: {
        id: 12,
        name: 'Defense Success Rate Increase',
        maxLevel: 20,
        requires: [{ skillId: 8, requiredLevel: 10 }], // Requisito específico
        rowRequirements: {}, // Fila 2, necesita skill +10 en fila anterior
        image: '/3rd/green/DefenseSuccessRateIncrease.webp',
        description: 'Defense success rate increases by %',
        valueType: 'DefenseSuccessRateIncrease',
        values: [
            0,     // Level 0 (base)
            1.20,  // Level 1
            2.02,  // Level 2
            2.78,  // Level 3
            3.48,  // Level 4
            4.13,  // Level 5
            4.73,  // Level 6
            5.29,  // Level 7
            5.79,  // Level 8
            6.26,  // Level 9
            6.68,  // Level 10
            7.06,  // Level 11
            7.40,  // Level 12
            7.71,  // Level 13
            7.98,  // Level 14
            8.22,  // Level 15
            8.43,  // Level 16
            8.62,  // Level 17
            8.77,  // Level 18
            8.91,  // Level 19
            9.02   // Level 20
        ]
    },
    ArmorSetBonusIncrease: {
        id: 13,
        name: 'Armor Set Bonus Increase',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: {}, // Fila 2, necesita skill +10 en fila anterior
        image: '/3rd/green/ArmorSetBonusIncrease.webp',
        description: 'Defense increases by X when a full armor set (helm, armor, pants, gloves and boots) is equipped',
        valueType: 'ArmorSetBonusIncrease',
        values: [
            0,   // Level 0 (base)
            6,   // Level 1
            11,  // Level 2
            15,  // Level 3
            19,  // Level 4
            23,  // Level 5
            27,  // Level 6
            30,  // Level 7
            33,  // Level 8
            36,  // Level 9
            39,  // Level 10
            41,  // Level 11
            43,  // Level 12
            45,  // Level 13
            46,  // Level 14
            48,  // Level 15
            49,  // Level 16
            50,  // Level 17
            51,  // Level 18
            52,  // Level 19
            53   // Level 20
        ]
    },
    Revenge: {
        id: 14,
        name: 'Revenge',
        maxLevel: 20,
        requires: [{ skillId: 13, requiredLevel: 10 }], // Requisito específico
        rowRequirements: {}, // Fila 2, necesita skill +10 en fila anterior
        image: '/3rd/green/Revenge.webp',
        description: 'Returns 1 incoming damage to the dealer with % chance when hit',
        valueType: 'returnDamageRate',
        values: [
            0,     // Level 0 (base)
            1.02,  // Level 1
            1.27,  // Level 2
            1.52,  // Level 3
            1.75,  // Level 4
            1.97,  // Level 5
            2.18,  // Level 6
            2.38,  // Level 7
            2.57,  // Level 8
            2.75,  // Level 9
            2.92,  // Level 10
            3.08,  // Level 11
            3.24,  // Level 12
            3.38,  // Level 13
            3.52,  // Level 14
            3.65,  // Level 15
            3.77,  // Level 16
            3.88,  // Level 17
            3.99,  // Level 18
            4.09,  // Level 19
            4.18   // Level 20
        ]
    },
    energy: {
        id: 15,
        name: 'Energy',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: {}, // Fila 2, necesita skill +10 en fila anterior
        image: '/3rd/green/energy.webp',
        description: 'Energy Increase by X',
        valueType: 'energy',
        values: [
            0,    // Level 0 (base)
            14,   // Level 1
            24,   // Level 2
            33,   // Level 3
            41,   // Level 4
            49,   // Level 5
            56,   // Level 6
            63,   // Level 7
            69,   // Level 8
            75,   // Level 9
            80,   // Level 10
            84,   // Level 11
            88,   // Level 12
            92,   // Level 13
            95,   // Level 14
            98,   // Level 15
            101,  // Level 16
            103,  // Level 17
            105,  // Level 18
            106,  // Level 19
            108   // Level 20
        ]
    },
    stamina: {
        id: 16,
        name: 'Stamina',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: {}, // Fila 2, necesita skill +10 en fila anterior
        image: '/3rd/green/vitality.webp',
        description: 'Stamina Increase by X',
        valueType: 'stamina',
        values: [
            0,    // Level 0 (base)
            14,   // Level 1
            24,   // Level 2
            33,   // Level 3
            41,   // Level 4
            49,   // Level 5
            56,   // Level 6
            63,   // Level 7
            69,   // Level 8
            75,   // Level 9
            80,   // Level 10
            84,   // Level 11
            88,   // Level 12
            92,   // Level 13
            95,   // Level 14
            98,   // Level 15
            101,  // Level 16
            103,  // Level 17
            105,  // Level 18
            106,  // Level 19
            108   // Level 20
        ]
    },
    agility: {
        id: 17,
        name: 'Agility',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: {}, // Fila 2, necesita skill +10 en fila anterior
        image: '/3rd/green/agility.webp',
        description: 'Agility Increase by X',
        valueType: 'agility',
        values: [
            0,    // Level 0 (base)
            14,   // Level 1
            24,   // Level 2
            33,   // Level 3
            41,   // Level 4
            49,   // Level 5
            56,   // Level 6
            63,   // Level 7
            69,   // Level 8
            75,   // Level 9
            80,   // Level 10
            84,   // Level 11
            88,   // Level 12
            92,   // Level 13
            95,   // Level 14
            98,   // Level 15
            101,  // Level 16
            103,  // Level 17
            105,  // Level 18
            106,  // Level 19
            108   // Level 20
        ]
    },
    strength: {
        id: 18,
        name: 'Strength',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: {}, // Fila 2, necesita skill +10 en fila anterior
        image: '/3rd/green/strength.webp',
        description: 'Strength Increase by X',
        valueType: 'strength',
        values: [
            0,    // Level 0 (base)
            14,   // Level 1
            24,   // Level 2
            33,   // Level 3
            41,   // Level 4
            49,   // Level 5
            56,   // Level 6
            63,   // Level 7
            69,   // Level 8
            75,   // Level 9
            80,   // Level 10
            84,   // Level 11
            88,   // Level 12
            92,   // Level 13
            95,   // Level 14
            98,   // Level 15
            101,  // Level 16
            103,  // Level 17
            105,  // Level 18
            106,  // Level 19
            108   // Level 20
        ]
    },
    command: {
        id: 25,
        name: 'Command',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: {}, // Fila 2, necesita skill +10 en fila anterior
        image: '/3rd/green/command.webp',
        description: 'Command Increase by X',
        valueType: 'command',
        values: [
            0,    // Level 0 (base)
            14,   // Level 1
            24,   // Level 2
            33,   // Level 3
            41,   // Level 4
            49,   // Level 5
            56,   // Level 6
            63,   // Level 7
            69,   // Level 8
            75,   // Level 9
            80,   // Level 10
            84,   // Level 11
            88,   // Level 12
            92,   // Level 13
            95,   // Level 14
            98,   // Level 15
            101,  // Level 16
            103,  // Level 17
            105,  // Level 18
            106,  // Level 19
            108   // Level 20
        ]
    },
    wings3def: {
        id: 19,
        name: 'Wings 3rd Defense',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: {}, // Fila 2, necesita skill +10 en fila anterior
        image: '/3rd/green/wings3def.webp',
        description: 'Wings 3rd is equiped , defense increase by X',
        valueType: 'wings3def',
        values: [
            0,   // Level 0 (base)
            12,  // Level 1
            20,  // Level 2
            27,  // Level 3
            34,  // Level 4
            41,  // Level 5
            47,  // Level 6
            52,  // Level 7
            57,  // Level 8
            62,  // Level 9
            66,  // Level 10
            70,  // Level 11
            74,  // Level 12
            77,  // Level 13
            79,  // Level 14
            82,  // Level 15
            84,  // Level 16
            86,  // Level 17
            87,  // Level 18
            89,  // Level 19
            90   // Level 20
        ]
    },
    ProtectionShield: {
        id: 20,
        name: 'Protection Shield',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: {}, // Fila 2, necesita skill +10 en fila anterior
        image: '/3rd/green/ProtectionShield.webp',
        description: 'While equipped with a shield, you have % chance to reduce incoming damage by 1000% of shield block value. If all damage is blocked when this passive is activated, it will be shown as absorbed',
        valueType: 'ProtectionShieldRate',
        values: [
            0,     // Level 0 (base)
            1.00,  // Level 1
            1.82,  // Level 2
            2.58,  // Level 3
            3.28,  // Level 4
            3.93,  // Level 5
            4.53,  // Level 6
            5.09,  // Level 7
            5.59,  // Level 8
            6.06,  // Level 9
            6.48,  // Level 10
            6.86,  // Level 11
            7.20,  // Level 12
            7.51,  // Level 13
            7.78,  // Level 14
            8.02,  // Level 15
            8.23,  // Level 16
            8.42,  // Level 17
            8.57,  // Level 18
            8.71,  // Level 19
            8.82   // Level 20
        ]
    },
    wings3atk: {
        id: 21,
        name: 'Wings 3rd Attack',
        maxLevel: 20,
        requires: [{ skillId: 19, requiredLevel: 10 }], // Requisito específico
        rowRequirements: { minRow: 8, minLevel: 10 }, // Fila 2, necesita skill +10 en fila anterior
        image: '/3rd/green/wings3atk.webp',
        description: 'Wings 3rd is equiped , attack increase by X',
        valueType: 'wings3atk',
        values: [
            0,   // Level 0 (base)
            12,  // Level 1
            20,  // Level 2
            27,  // Level 3
            34,  // Level 4
            41,  // Level 5
            47,  // Level 6
            52,  // Level 7
            57,  // Level 8
            62,  // Level 9
            66,  // Level 10
            70,  // Level 11
            74,  // Level 12
            77,  // Level 13
            79,  // Level 14
            82,  // Level 15
            84,  // Level 16
            86,  // Level 17
            87,  // Level 18
            89,  // Level 19
            90   // Level 20
        ]
    },
    SteelArmor: {
        id: 22,
        name: 'Steel Armor',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: { minRow: 8, minLevel: 10 }, // Fila 2, necesita skill +10 en fila anterior
        image: '/3rd/green/SteelArmor.webp',
        description: 'You have X base armor that is impenetrable, and this armor is not ignored',
        valueType: 'SteelArmor',
        values: [
            0,    // Level 0 (base)
            33,   // Level 1
            56,   // Level 2
            77,   // Level 3
            97,   // Level 4
            115,  // Level 5
            132,  // Level 6
            148,  // Level 7
            162,  // Level 8
            175,  // Level 9
            186,  // Level 10
            197,  // Level 11
            207,  // Level 12
            215,  // Level 13
            223,  // Level 14
            230,  // Level 15
            236,  // Level 16
            241,  // Level 17
            245,  // Level 18
            249,  // Level 19
            252   // Level 20
        ]
    },
    shieldBlockRate: {
        id: 23,
        name: 'Shield Block',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: { minRow: 8, minLevel: 10 }, // Fila 2, necesita skill +10 en fila anterior
        image: '/3rd/green/ShieldBlock.webp',
        description: 'While equipped with a shield, you have % chance to block with a shield and reduce all incoming damage. When this passive is activated, it will be shown as Block',
        valueType: 'shieldBlockRate',
        values: [
            0,     // Level 0 (base)
            1.00,  // Level 1
            1.41,  // Level 2
            1.79,  // Level 3
            2.14,  // Level 4
            2.47,  // Level 5
            2.77,  // Level 6
            3.04,  // Level 7
            3.30,  // Level 8
            3.53,  // Level 9
            3.74,  // Level 10
            3.93,  // Level 11
            4.10,  // Level 12
            4.25,  // Level 13
            4.39,  // Level 14
            4.51,  // Level 15
            4.62,  // Level 16
            4.71,  // Level 17
            4.79,  // Level 18
            4.85,  // Level 19
            4.91   // Level 20
        ]
    },
    WeaponBlockRate: {
        id: 24,
        name: 'Weapon Block',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: {}, // Fila 2, necesita skill +10 en fila anterior
        image: '/3rd/green/WeaponBlockRate.webp',
        description: 'While equipped with a Sword, Mace, Spear, Axe, etc, you have a % chance to block physical attack, and when this passive is activated, it will be shown as Parry',
        valueType: 'weaponBlockRate',
        values: [
            0,     // Level 0 (base)
            1.00,  // Level 1
            1.82,  // Level 2
            2.58,  // Level 3
            3.28,  // Level 4
            3.93,  // Level 5
            4.53,  // Level 6
            5.09,  // Level 7
            5.59,  // Level 8
            6.06,  // Level 9
            6.48,  // Level 10
            6.86,  // Level 11
            7.20,  // Level 12
            7.51,  // Level 13
            7.78,  // Level 14
            8.02,  // Level 15
            8.23,  // Level 16
            8.42,  // Level 17
            8.57,  // Level 18
            8.71,  // Level 19
            8.82   // Level 20
        ]
    },
    // ========================================
    // 🌿 BLUE TREE SKILLS
    // ========================================

    AttackSuccessRateIncrease: {
        id: 25,
        name: 'Attack Success Rate Increase',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: {},
        image: '/3rd/blue/Attack Success Rate Increase.webp',
        description: 'Attack success rate increases by X',
        valueType: 'AttackSuccessrateIncrease',
        values: [
            0,     // Level 0 (base)
            511,   // Level 1
            857,   // Level 2
            1179,  // Level 3
            1478,  // Level 4
            1755,  // Level 5
            2011,  // Level 6
            2246,  // Level 7
            2462,  // Level 8
            2659,  // Level 9
            2838,  // Level 10
            3000,  // Level 11
            3145,  // Level 12
            3276,  // Level 13
            3392,  // Level 14
            3494,  // Level 15
            3584,  // Level 16
            3661,  // Level 17
            3728,  // Level 18
            3784,  // Level 19
            3831   // Level 20
        ]
    },
    FlameStrengthener: {
        id: 26,
        name: 'Flame Strengthener',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: {},
        image: '/3rd/blue/FlameStrengthener.webp',
        description: 'Flame skill damage increases by X',
        valueType: 'FlameStrengthener',
        values: [
            0,    // Level 0 (base)
            12,   // Level 1
            20,   // Level 2
            27,   // Level 3
            34,   // Level 4
            41,   // Level 5
            47,   // Level 6
            52,   // Level 7
            57,   // Level 8
            62,   // Level 9
            66,   // Level 10
            70,   // Level 11
            74,   // Level 12
            77,   // Level 13
            79,   // Level 14
            82,   // Level 15
            84,   // Level 16
            86,   // Level 17
            87,   // Level 18
            89,   // Level 19
            90    // Level 20
        ]
    },
    LightningStrengthener: {
        id: 27,
        name: 'Lightning Strengthener',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: {},
        image: '/3rd/blue/LightningStrengthener.webp',
        description: 'Lightning skill damage increases by X',
        valueType: 'LightningStrengthener',
        values: [
            0,    // Level 0 (base)
            14,   // Level 1
            24,   // Level 2
            33,   // Level 3
            41,   // Level 4
            49,   // Level 5
            56,   // Level 6
            63,   // Level 7
            69,   // Level 8
            75,   // Level 9
            80,   // Level 10
            84,   // Level 11
            88,   // Level 12
            92,   // Level 13
            95,   // Level 14
            98,   // Level 15
            101,  // Level 16
            103,  // Level 17
            105,  // Level 18
            106,  // Level 19
            108   // Level 20
        ]
    },
    ExpansionofWizardryPowerUp: {
        id: 28,
        name: 'Expansion of Wizardry Power Up',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: {},
        image: '/3rd/blue/ExpansionofWizardryPowerUp.webp',
        description: 'Expansion of Wizardry increases max. Wizardry by X %',
        valueType: 'ExpansionofWizardryPowerUp',
        values: [
            0,     // Level 0 (base)
            1.20,  // Level 1
            2.02,  // Level 2
            2.78,  // Level 3
            3.48,  // Level 4
            4.13,  // Level 5
            4.73,  // Level 6
            5.29,  // Level 7
            5.79,  // Level 8
            6.26,  // Level 9
            6.68,  // Level 10
            7.06,  // Level 11
            7.40,  // Level 12
            7.71,  // Level 13
            7.98,  // Level 14
            8.22,  // Level 15
            8.43,  // Level 16
            8.62,  // Level 17
            8.77,  // Level 18
            8.91,  // Level 19
            9.02   // Level 20
        ]
    },
    InfernoStrengthener: {
        id: 29,
        name: 'Inferno Strengthener',
        maxLevel: 20,
        requires: [{ skillId: 26, requiredLevel: 10 }], // Requisito específico
        rowRequirements: {},
        image: '/3rd/blue/InfernoStrengthener.webp',
        description: 'Inferno skill damage increases by X',
        valueType: 'InfernoStrengthener',
        values: [
            0,  // Level 0 (base)
            8,  // Level 1
            15, // Level 2
            21, // Level 3
            27, // Level 4
            32, // Level 5
            37, // Level 6
            41, // Level 7
            45, // Level 8
            49, // Level 9
            52, // Level 10
            55, // Level 11
            58, // Level 12
            60, // Level 13
            63, // Level 14
            64, // Level 15
            66, // Level 16
            68, // Level 17
            69, // Level 18
            70, // Level 19
            71  // Level 20
        ]
    },
    BlastStrengthener: {
        id: 30,
        name: 'Blast Strengthener',
        maxLevel: 20,
        requires: [{ skillId: 27, requiredLevel: 10 }], // Requisito específico
        rowRequirements: {},
        image: '/3rd/blue/BlastStrengthener.webp',
        description: 'Cometfall skill damage increases by X',
        valueType: 'BlastStrengthener',
        values: [
            0,   // Level 0 (base)
            12,  // Level 1
            20,  // Level 2
            27,  // Level 3
            34,  // Level 4
            41,  // Level 5
            47,  // Level 6
            52,  // Level 7
            57,  // Level 8
            62,  // Level 9
            66,  // Level 10
            70,  // Level 11
            74,  // Level 12
            77,  // Level 13
            79,  // Level 14
            82,  // Level 15
            84,  // Level 16
            86,  // Level 17
            87,  // Level 18
            89,  // Level 19
            90   // Level 20
        ]
    },
    ExpansionofWizardryMastery: {
        id: 31,
        name: 'Expansion of Wizardry Mastery',
        maxLevel: 20,
        requires: [{ skillId: 28, requiredLevel: 10 }], // Requisito específico
        rowRequirements: {},
        image: '/3rd/blue/ExpansionofWizardryMastery.webp',
        description: 'Expansion of Wizardry skill increases critical damage rate by X %',
        valueType: 'criticalDamageRate',
        values: [
            0,     // Level 0 (base)
            1.20,  // Level 1
            2.02,  // Level 2
            2.78,  // Level 3
            3.48,  // Level 4
            4.13,  // Level 5
            4.73,  // Level 6
            5.29,  // Level 7
            5.79,  // Level 8
            6.26,  // Level 9
            6.68,  // Level 10
            7.06,  // Level 11
            7.40,  // Level 12
            7.71,  // Level 13
            7.98,  // Level 14
            8.22,  // Level 15
            8.43,  // Level 16
            8.62,  // Level 17
            8.77,  // Level 18
            8.91,  // Level 19
            9.02   // Level 20
        ]
    },
    EvilSpiritStrengthener: {
        id: 32,
        name: 'Evil Spirit Strengthener',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: {},
        image: '/3rd/blue/EvilSpiritStrengthener.webp',
        description: 'Evil Spirit skill damage increases by X',
        valueType: 'EvilSpiritStrengthener',
        values: [
            0,   // Level 0 (base)
            8,   // Level 1
            15,  // Level 2
            21,  // Level 3
            27,  // Level 4
            32,  // Level 5
            37,  // Level 6
            41,  // Level 7
            45,  // Level 8
            49,  // Level 9
            52,  // Level 10
            55,  // Level 11
            58,  // Level 12
            60,  // Level 13
            63,  // Level 14
            64,  // Level 15
            66,  // Level 16
            68,  // Level 17
            69,  // Level 18
            70,  // Level 19
            71   // Level 20
        ]
    },
    MagicMastery: {
        id: 33,
        name: 'Magic Mastery',
        maxLevel: 20,
        requires: [{ skillId: 32, requiredLevel: 10 }], // Requisito específico
        rowRequirements: {},
        image: '/3rd/blue/MagicMastery.webp',
        description: 'Wizardry increases by X',
        valueType: 'MagicMastery',
        values: [
            0,   // Level 0 (base)
            5,   // Level 1
            9,   // Level 2
            13,  // Level 3
            16,  // Level 4
            19,  // Level 5
            22,  // Level 6
            25,  // Level 7
            27,  // Level 8
            29,  // Level 9
            32,  // Level 10
            34,  // Level 11
            35,  // Level 12
            37,  // Level 13
            39,  // Level 14
            40,  // Level 15
            41,  // Level 16
            42,  // Level 17
            43,  // Level 18
            44,  // Level 19
            45   // Level 20
        ]
    },
    MaximumLifeIncrease: {
        id: 34,
        name: 'Maximum Life Increase',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: {},
        image: '/3rd/blue/MaximumLifeIncrease.webp',
        description: 'Max HP increases by X',
        valueType: 'MaximumLifeIncrease',
        values: [
            0,    // Level 0 (base)
            102,  // Level 1
            171,  // Level 2
            235,  // Level 3
            295,  // Level 4
            351,  // Level 5
            402,  // Level 6
            449,  // Level 7
            492,  // Level 8
            531,  // Level 9
            567,  // Level 10
            600,  // Level 11
            629,  // Level 12
            655,  // Level 13
            678,  // Level 14
            698,  // Level 15
            716,  // Level 16
            732,  // Level 17
            745,  // Level 18
            756,  // Level 19
            766   // Level 20
        ]
    },
    DecayStrengthener: {
        id: 35,
        name: 'Decay Strengthener',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: {},
        image: '/3rd/blue/DecayStrengthener.webp',
        description: 'Decay skill damage increases by X',
        valueType: 'DecayStrengthener',
        values: [
            0,   // Level 0 (base)
            12,  // Level 1
            20,  // Level 2
            27,  // Level 3
            34,  // Level 4
            41,  // Level 5
            47,  // Level 6
            52,  // Level 7
            57,  // Level 8
            62,  // Level 9
            66,  // Level 10
            70,  // Level 11
            74,  // Level 12
            77,  // Level 13
            79,  // Level 14
            82,  // Level 15
            84,  // Level 16
            86,  // Level 17
            87,  // Level 18
            89,  // Level 19
            90   // Level 20
        ]

    },
    HellfireStrengthener: {
        id: 36,
        name: 'Hellfire Strengthener',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: {},
        image: '/3rd/blue/HellfireStrengthener.webp',
        description: 'Hellfire skill damage increases by X',
        valueType: 'HellfireStrengthener',
        values: [
            0,   // Level 0 (base)
            14,  // Level 1
            24,  // Level 2
            33,  // Level 3
            41,  // Level 4
            49,  // Level 5
            56,  // Level 6
            63,  // Level 7
            69,  // Level 8
            75,  // Level 9
            80,  // Level 10
            84,  // Level 11
            88,  // Level 12
            92,  // Level 13
            95,  // Level 14
            98,  // Level 15
            101, // Level 16
            103, // Level 17
            105, // Level 18
            106, // Level 19
            108  // Level 20
        ]
    },
    MaximumManaIncrease: {
        id: 37,
        name: 'Maximum Mana Increase',
        maxLevel: 20,
        requires: [{ skillId: 34, requiredLevel: 10 }], // Requisito específico
        rowRequirements: {},
        image: '/3rd/blue/MaximumManaIncrease.webp',
        description: 'Max Mana increases by X',
        valueType: 'MaximumManaIncrease',
        values: [0, 102, 171, 235, 295, 351, 402, 449, 492, 531, 567, 600, 629, 655, 678, 698, 716, 732, 745, 756, 766]
    },
    IceStrengthener: {
        id: 38,
        name: 'Ice Strengthener',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: {},
        image: '/3rd/blue/IceStrengthener.webp',
        description: 'Ice skill damage increases by X',
        valueType: 'IceStrengthener',
        values: [0, 14, 24, 33, 41, 49, 56, 63, 69, 75, 80, 84, 88, 92, 95, 98, 101, 103, 105, 106, 108]
    },
    MeteorStrengthener: {
        id: 208,
        name: 'Meteor Strengthener',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: {},
        image: '/3rd/blue/MeteorStrengthener.webp',
        description: 'Meteor skill damage increases by X',
        valueType: 'MeteorStrengthener',
        values: [0, 14, 24, 33, 41, 49, 56, 63, 69, 75, 80, 84, 88, 92, 95, 98, 101, 103, 105, 106, 108]
    },
    MaximumAGIncrease: {
        id: 39,
        name: 'Maximum AG Increase',
        maxLevel: 20,
        requires: [{ skillId: 37, requiredLevel: 10 }], // Requisito específico
        rowRequirements: {},
        image: '/3rd/blue/MaximumAGIncrease.webp',
        description: 'Max AG increases by X',
        valueType: 'MaximumAGIncrease',
        values: [0, 27, 46, 63, 80, 95, 108, 121, 133, 143, 153, 162, 170, 177, 183, 189, 193, 198, 201, 204, 207]

    },
    IceStormStrengthener: {
        id: 40,
        name: 'Ice Storm Strengthener',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: {},
        image: '/3rd/blue/IceStormStrengthener.webp',
        description: 'Ice Storm skill damage increases by X',
        valueType: 'IceStormStrengthener',
        values: [0, 12, 20, 27, 34, 41, 47, 52, 57, 62, 66, 70, 74, 77, 79, 82, 84, 86, 87, 89, 90]
    },
    NovaStrengthener: {
        id: 41,
        name: 'Nova Strengthener',
        maxLevel: 20,
        requires: [{ skillId: 36, requiredLevel: 10 }], // Requisito específico
        rowRequirements: {},
        image: '/3rd/blue/NovaStrengthener.webp',
        description: '',
        valueType: 'NovaStrengthener',
        values: [0, 12, 20, 27, 34, 41, 47, 52, 57, 62, 66, 70, 74, 77, 79, 82, 84, 86, 87, 89, 90]
    },
    MaxHPBoost: {
        id: 42,
        name: 'Max HP Boost',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: {},
        image: '/3rd/blue/MaxHPBoost.webp',
        description: 'Boosts HP to increase Max HP by X',
        valueType: 'MaxHPBoost',
        values: [0, 189, 285, 375, 460, 539, 613, 682, 746, 806, 862, 913, 960, 1003, 1042, 1078, 1111, 1140, 1166, 1189, 1209]
    },
    EarthPrison: {
        id: 43,
        name: 'Earth Prison',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: {},
        image: '/3rd/blue/EarthPrison.webp',
        description: 'Learn Earth Prison. Inflicts strong damage upon targets and immobilizes them for 5 sec. Cooldown 5 sec. Proper skill for sorcery-type characters.',
        valueType: 'EarthPrison',
        values: []
    },
    Illusion: {
        id: 44,
        name: 'Illusion',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: { minRow: 8, minLevel: 10 },
        image: '/3rd/blue/Illusion.webp',
        description: 'Learns Illusion. Creates the alter ego identical to yourself and attack together. Your alter ego has 30% chance to absorb the damage you receive. Your alter ego disappears after its HP is consumed or duration is over. Cooldown 2 mins',
        valueType: 'Illusion',
        values: []
    },
    IllusEarthPrisonStrengtheneron: {
        id: 45,
        name: 'Earth Prison Strengthener',
        maxLevel: 20,
        requires: [{ skillId: 43, requiredLevel: 10 }], // Requisito específico
        rowRequirements: { minRow: 8, minLevel: 10 },
        image: '/3rd/blue/IllusEarthPrisonStrengtheneron.webp',
        description: 'Increases Earth Prison damage by X, and changes Cooldown to 3 sec',
        valueType: 'IllusEarthPrisonStrengtheneron',
        values: [0, 8, 15, 21, 27, 32, 37, 41, 45, 49, 52, 55, 58, 60, 63, 64, 66, 68, 69, 70, 71]
    },
    // BK
    SwordsFuryMastery: {
        id: 46,
        name: 'Swords Fury Mastery',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: {},
        image: '/3rd/blue/SwordsFuryMastery.webp',
        description: 'When using Swords Fury the range of blow skill attack skill is increased by 1',
        valueType: 'SwordsFuryMastery',
        values: []
    },
    TwistingSlashStrengthener: {
        id: 47,
        name: 'Twisting Slash Strengthener',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: {},
        image: '/3rd/blue/TwistingSlashStrengthener.webp',
        description: 'Twisting Slash skill damage increases by X',
        valueType: 'TwistingSlashStrengthener',
        values: [0, 14, 24, 33, 41, 49, 56, 63, 69, 75, 80, 84, 88, 92, 95, 98, 101, 103, 105, 106, 108]
    },
    StrongBeliefStrengthener: {
        id: 48,
        name: 'Strong Belief Strengthener',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: {},
        image: '/3rd/blue/StrongBeliefStrengthener.webp',
        description: 'When using a Strong Belief skill the basic defense is increased by X',
        valueType: 'StrongBeliefStrengthener',
        values: [0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45]
    },
    AngerBlowStrengthener: {
        id: 49,
        name: 'Anger Blow Strengthener',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: {},
        image: '/3rd/blue/AngerBlowStrengthener.webp',
        description: 'Anger Blow skill damage increases by X',
        valueType: 'AngerBlowStrengthener',
        values: [0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45]
    },
    WeaponMastery: {
        id: 50,
        name: 'Weapon Mastery',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: {},
        image: '/3rd/blue/WeaponMastery.webp',
        description: 'Physical attack power increases by X',
        valueType: 'WeaponMastery',
        values: [0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45]
    },
    SolidProtectionStrengthener: {
        id: 51,
        name: 'Solid Protection Strengthener',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: {},
        image: '/3rd/blue/SolidProtectionStrengthener.webp',
        description: 'HP conversion rate increased by X % when using Solid Protection',
        valueType: 'SolidProtectionStrengthener',
        values: [0, 2.24, 2.79, 3.46, 4.23, 5.08, 6.01, 6.99, 8.04, 9.13, 10.28, 11.48, 12.72, 14.00, 15.32, 16.68, 18.08, 19.51, 20.98, 22.48, 24.01]
    },
    DeathStabStrengthener: {
        id: 52,
        name: 'Death Stab Strengthener',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: {},
        image: '/3rd/blue/DeathStabStrengthener.webp',
        description: 'The blow skills damage is increased by X, and the usable distance is increased to 4',
        valueType: 'DeathStabStrengthener',
        values: [0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45]
    },
    SolidProtectionProficiency: {
        id: 53,
        name: 'Solid Protection Proficiency',
        maxLevel: 20,
        requires: [{ skillId: 51, requiredLevel: 10 }], // Requisito específico
        rowRequirements: {},
        image: '/3rd/blue/SolidProtectionProficiency.webp',
        description: 'The damage taken instead of (Damage Conversion Rate) is increased by X %',
        valueType: 'SolidProtectionProficiency',
        values: [
            0, 1.13, 1.31, 1.52, 1.75, 2.00, 2.26, 2.54, 2.83, 3.13,
            3.44, 3.76, 4.09, 4.43, 4.78, 5.13, 5.49, 5.86, 6.23, 6.61, 7.00
        ]
    },
    DeathStabProficiency: {
        id: 54,
        name: 'Death Stab Proficiency',
        maxLevel: 20,
        requires: [{ skillId: 52, requiredLevel: 10 }], // Requisito específico
        rowRequirements: {},
        image: '/3rd/blue/DeathStabProficiency.webp',
        description: 'Death Stab skill damage increased by X',
        valueType: 'DeathStabProficiency',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32,
            34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ]
    },
    SolidProtectionMastery: {
        id: 55,
        name: 'Solid Protection Mastery',
        maxLevel: 20,
        requires: [{ skillId: 53, requiredLevel: 10 }], // Requisito específico
        rowRequirements: {},
        image: '/3rd/blue/SolidProtectionMastery.webp',
        description: 'Increases the attack damage/power of party members by X when using Solid Protection',
        valueType: 'SolidProtectionMastery',
        values: [
            0, 12, 14, 16, 19, 22, 25, 28, 32, 36, 40,
            44, 48, 52, 57, 62, 67, 72, 78, 84, 90
        ]
    },
    ComboStrengthener: {
        id: 56,
        name: 'Combo Strengthener',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: {},
        image: '/3rd/blue/ComboStrengthener.webp',
        description: 'The combo DMG increases by X %',
        valueType: 'ComboStrengthener',
        values: [
            0, 1.81, 3.03, 4.16, 5.22, 6.20, 7.10, 7.93, 8.69, 9.39, 10.02,
            10.59, 11.10, 11.56, 11.97, 12.33, 12.65, 12.92, 13.16, 13.36, 13.52
        ]
    },
    StrikeofDestructionStrengthener: {
        id: 57, // poné el ID que corresponda
        name: 'Strike of Destruction Strengthener',
        maxLevel: 20, // no tiene valores de niveles
        requires: [{ skillId: 55, requiredLevel: 10 }], // requisitos específicos se pueden agregar si es necesario
        rowRequirements: {},
        image: '/3rd/blue/StrikeofDestructionStrengthener.webp',
        description: 'Strike of Destruction attack motion is shortened, and the damage increases according to the energy stat. The damage count is additionally increases by 1',
        valueType: 'StrikeofDestructionStrengthener',
        values: []
    },
    Rush: {
        id: 58, // poné el ID que corresponda
        name: 'Rush',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/Rush.webp',
        description: "Learns the 'Rush' skill. Quickly rushes to an enemy target within 7 tiles, dealing damage with a powerful blow. Cooldown: 1 second",
        valueType: 'Rush',
        values: []
    },
    StrikeofDestructionMastery: {
        id: 59, // asigná el ID que corresponda
        name: 'Strike of Destruction Mastery',
        maxLevel: 20,
        requires: [{ skillId: 57, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/StrikeofDestructionMastery.webp',
        description: "Strike of Destruction damage range is increased and the ice effect is removed. Skill attack power is increased by 'X'",
        valueType: 'StrikeofDestructionMastery',
        values: [
            0, 40, 48, 56, 65, 75, 85, 96, 108, 120, 133,
            147, 161, 176, 192, 208, 225, 243, 261, 280, 300
        ]
    },
    BloodStorm: {
        id: 60, // asigná el ID correspondiente
        name: 'Blood Storm',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/BloodStorm.webp',
        description: "Learns 'Blood Storm' skill. Inflict DMG to the target within 3 tiles from the caster and those around the target. This skill can be used again after 5 seconds. (Blade Master can be used as a combo and it is recommended for a melee-type character)",
        valueType: 'BloodStorm',
        values: []
    },
    BloodStormStrengthener: {
        id: 61, // asigná el ID correspondiente
        name: 'Blood Storm Strengthener',
        maxLevel: 20,
        requires: [{ skillId: 60, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/BloodStormStrengthener.webp',
        description: "Increase Blood Storm DMG by 'X' and change the cooldown time to 3 seconds",
        valueType: 'BloodStormStrengthener',
        values: [
            0, 11, 19, 27, 34, 40, 46, 52, 57, 62, 66,
            70, 73, 76, 79, 81, 83, 85, 87, 88, 89
        ]
    },
    // ELF
    HealStrengthener: {
        id: 62, // asigná el ID correspondiente
        name: 'Heal Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/HealStrengthener.webp',
        description: "Healing increases by 'X'%",
        valueType: 'HealStrengthener',
        values: [
            0, 5.76, 9.50, 13.02, 16.33, 19.43, 22.33, 25.04, 27.56, 29.90, 32.07,
            34.07, 35.91, 37.60, 39.14, 40.54, 41.81, 42.95, 43.97, 44.88, 45.68
        ]
    },
    TripleShotStrengthener: {
        id: 63, // asigná el ID correspondiente
        name: 'Triple Shot Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/TripleShotStrengthener.webp',
        description: "Triple Shot skill damage increases by 'X'",
        valueType: 'TripleShotStrengthener',
        values: [
            0, 8, 15, 21, 27, 32, 37, 41, 45, 49, 52,
            55, 58, 60, 63, 64, 66, 68, 69, 70, 71
        ]
    },
    SummonedMonsterPowerUp1: {
        id: 64, // asigná el ID correspondiente
        name: 'Summoned Monster Power Up (1)',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/SummonedMonsterPowerUp1.webp',
        description: "Summoned monster's HP increases by 'X'%",
        valueType: 'SummonedMonsterPowerUp1',
        values: [
            0, 60, 100, 138, 173, 206, 236, 264, 289, 312, 333,
            352, 370, 385, 399, 411, 421, 430, 438, 445, 450
        ]
    },
    PenetrationStrengthener: {
        id: 65, // secuencial, ajustable según tu lista
        name: 'Penetration Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/PenetrationStrengthener.webp',
        description: "Penetration skill damage increases by 'X'",
        valueType: 'PenetrationStrengthener',
        values: [
            0, 12, 20, 27, 34, 41, 47, 52, 57, 62, 66,
            70, 74, 77, 79, 82, 84, 86, 87, 89, 90
        ]
    },
    DefenseIncreaseStrengthener: {
        id: 66,
        name: 'Defense Increase Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/DefenseIncreaseStrengthener.webp',
        description: "Defense buff effect increases by 'X'%",
        valueType: 'DefenseIncreaseStrengthener',
        values: [
            0, 5.76, 9.50, 13.02, 16.33, 19.43, 22.33, 25.04, 27.56, 29.90, 32.07,
            34.07, 35.91, 37.60, 39.14, 40.54, 41.81, 42.95, 43.97, 44.88, 45.68
        ]
    },
    TripleShotMastery: {
        id: 67,
        name: 'Triple Shot Mastery',
        maxLevel: 20,
        requires: [{ skillId: 63, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/TripleShotMastery.webp',
        description: "One more arrow will be fired with Triple Shot skill. (Consumed at once by 10 points, you will learn this skill)",
        valueType: 'TripleShotMastery',
        values: []
    },
    SummonedMonsterPowerUp2: {
        id: 68,
        name: 'Summoned Monster Power Up (2)',
        maxLevel: 20,
        requires: [{ skillId: 64, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/SummonedMonsterPowerUp2.webp',
        description: "Summoned monster's Defense increases by 'X'%",
        valueType: 'SummonedMonsterPowerUp2',
        values: [
            0, 60, 100, 138, 173, 206, 236, 264, 289, 312, 333,
            352, 370, 385, 399, 411, 421, 430, 438, 445, 450
        ]
    },
    AttackIncreaseStrengthener: {
        id: 69,
        name: 'Attack Increase Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/AttackIncreaseStrengthener.webp',
        description: "Damage buff effect increases by 'X'%",
        valueType: 'AttackIncreaseStrengthener',
        values: [
            0, 5.76, 9.50, 13.02, 16.33, 19.43, 22.33, 25.04, 27.56, 29.90, 32.07,
            34.07, 35.91, 37.60, 39.14, 40.54, 41.81, 42.95, 43.97, 44.88, 45.68
        ]
    },
    AttackIncreaseMastery: {
        id: 70,
        name: 'Attack Increase Mastery',
        maxLevel: 20,
        requires: [{ skillId: 69, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/AttackIncreaseMastery.webp',
        description: "Attack increase skill effect increases by 'X'%, and skill duration increases per skill level",
        valueType: 'AttackIncreaseMastery',
        values: [
            0, 5.76, 9.50, 13.02, 16.33, 19.43, 22.33, 25.04, 27.56, 29.90, 32.07,
            34.07, 35.91, 37.60, 39.14, 40.54, 41.81, 42.95, 43.97, 44.88, 45.68
        ]
    },
    DefenseIncreaseMastery: {
        id: 71,
        name: 'Defense Increase Mastery',
        maxLevel: 20,
        requires: [{ skillId: 66, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/DefenseIncreaseMastery.webp',
        description: "Defense increase skill effect increases by 'X'%, and skill duration increases per skill level",
        valueType: 'DefenseIncreaseMastery',
        values: [
            0, 5.76, 9.50, 13.02, 16.33, 19.43, 22.33, 25.04, 27.56, 29.90, 32.07,
            34.07, 35.91, 37.60, 39.14, 40.54, 41.81, 42.95, 43.97, 44.88, 45.68
        ],
    },
    IceArrowStrengthener: {
        id: 72,
        name: 'Ice Arrow Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/IceStrengthener.webp',
        description: "Ice Arrow skill damage increases by 'X'",
        valueType: 'IceArrowStrengthener',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32,
            34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },
    HolyBoltStrengthener: {
        id: 73,
        name: 'Holy Bolt Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/HolyBoltStrengthener.webp',
        description: "Holy Bolt skill damage is increased by 'X'",
        valueType: 'HolyBoltStrengthener',
        values: [
            0, 15, 26, 36, 45, 53, 61, 68, 75, 81, 86,
            91, 96, 100, 103, 106, 109, 112, 114, 115, 117
        ],
    },
    Cure: {
        id: 74,
        name: 'Cure',
        maxLevel: 20,
        requires: [{ skillId: 71, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/Cure.webp',
        description: "Learns the 'Cure' skill. Removes the target's abnormal status effect with a certain probability. Reusable after 3 seconds",
        valueType: 'Cure',
        values: [],
    },
    MultiShotStrengthener: {
        id: 75,
        name: 'Multi-Shot Strengthener',
        maxLevel: 20,
        requires: ["Multi-Shot"],
        rowRequirements: {},
        image: '/3rd/blue/MultiShotStrengthener.webp',
        description: "Increases your Multi-Shot skill damage by 'X'",
        valueType: 'MultiShotStrengthener',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32,
            34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },
    PartyHealing: {
        id: 76,
        name: 'Party Healing',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/PartyHealing.webp',
        description: "Learns 'Party Healing'. Additional 3 party members around the target gets healed. The amount healed decreases by 20% every time the target changes. Cooldown: 10 seconds",
        valueType: 'PartyHealing',
        values: [],
    },
    SummonedMonsterPowerUp3: {
        id: 77,
        name: 'Summoned Monster Power Up (3)',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/SummonedMonsterPowerUp3.webp',
        description: "Summoned monster's attack power increases by 'X'%",
        valueType: 'SummonedMonsterPowerUp3',
        values: [
            0, 60, 100, 138, 173, 206, 236, 264, 289, 312, 333,
            352, 370, 385, 399, 411, 421, 430, 438, 445, 450
        ],
    },
    PartyHealingStrengthener: {
        id: 78,
        name: 'Party Healing Strengthener',
        maxLevel: 20,
        requires: [{ skillId: 76, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/PartyHealingStrengthener.webp',
        description: "Party Heal amount increases by 'X'%",
        valueType: '%',
        values: [
            0, 5.76, 9.50, 13.02, 16.33, 19.43, 22.33, 25.04, 27.56, 29.90, 32.07,
            34.07, 35.91, 37.60, 39.14, 40.54, 41.81, 42.95, 43.97, 44.88, 45.68
        ],
    },
    Bless: {
        id: 79,
        name: 'Bless',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/Bless.webp',
        description: "Learns 'Bless' skill. This skill increases all of your target's stats (By 1 for every 100 your energy)",
        valueType: 'Bless',
        values: [],
    },
    PoisonArrow: {
        id: 80,
        name: 'Poison Arrow',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/PoisonArrow.webp',
        description: "Learns 'Poison Arrow'. Inflicts strong damage and poisons the target. Poison effect causes damage (Min. Damage/5) every second and lasts for 10 seconds. Cooldown: 1 sec",
        valueType: 'PoisonArrow',
        values: [],
    },
    SummonSatyros: {
        id: 81,
        name: 'Summon Satyros',
        maxLevel: 20,
        requires: [{ skillId: 77, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/SummonSatyros.webp',
        description: "Learns 'Summon Satyros'. Summons a Satyros to fight for the summoner",
        valueType: 'SummonSatyros',
        values: [],
    },
    ShadowStep: {
        id: 82,
        name: 'Shadow Step',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/ShadowStep.webp',
        description: "Learn 'Shadow Step'. Moves swiftly as far as 5 tiles toward the direction you've chosen. Cooldown: 3 sec",
        valueType: 'ShadowStep',
        values: [],
    },
    BlessStrengthener: {
        id: 83,
        name: 'Bless Strengthener',
        maxLevel: 20,
        requires: [{ skillId: 79, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/BlessStrengthener.webp',
        description: "Bless skill increases stats by 'X'",
        valueType: 'BlessStrengthener',
        values: [
            0, 8, 14, 20, 26, 31, 36, 40, 44, 48, 51,
            54, 57, 60, 62, 64, 65, 67, 68, 69, 70
        ],
    },
    PoisonArrowStrengthener: {
        id: 84,
        name: 'Poison Arrow Strengthener',
        maxLevel: 20,
        requires: [{ skillId: 80, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/PoisonArrowStrengthener.webp',
        description: "Increases Poison Arrow damage and poison damage by 'X', and changes Cooldown to 0.5 sec",
        valueType: 'PoisonArrowStrengthener',
        values: [
            0, 14, 24, 33, 41, 49, 56, 63, 69, 75, 80,
            84, 88, 92, 95, 98, 101, 103, 105, 106, 108
        ],
    },
    Evasion: {
        id: 85,
        name: 'Evasion',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/Evasion.webp',
        description: "Learns the skill 'Evasion'. The skill increases the basic defense success rate by 50% for 7 seconds. This skill can be used again after 60 seconds",
        valueType: 'Evasion',
        values: [],
    },
    // MG
    CycloneStrengthener: {
        id: 86,
        name: 'Cyclone Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/CycloneStrengthener.webp',
        description: "Cyclone skill damage increases by 'X'",
        valueType: 'CycloneStrengthener',
        values: [
            0, 8, 15, 21, 27, 32, 37, 41, 45, 49, 52,
            55, 58, 60, 63, 64, 66, 68, 69, 70, 71
        ],
    },
    PowerSlashStrengthener: {
        id: 87,
        name: 'Power Slash Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/PowerSlashStrengthener.webp',
        description: "Power Slash skill damage increases by 'X'",
        valueType: 'PowerSlashStrengthener',
        values: [
            0, 12, 20, 27, 34, 41, 47, 52, 57, 62, 66,
            70, 74, 77, 79, 82, 84, 86, 87, 89, 90
        ],
    },
    FireSlashStrengthener: {
        id: 88,
        name: 'Fire Slash Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/FireSlashStrengthener.webp',
        description: "Blood Attack skill damage increased by 'X'",
        valueType: 'FireSlashStrengthener',
        values: [
            0, 6, 11, 15, 19, 23, 27, 30, 33, 36, 39,
            41, 43, 45, 46, 48, 49, 50, 51, 52, 53
        ],
    },
    FireSlashMastery: {
        id: 89,
        name: 'Fire Slash Mastery',
        maxLevel: 20,
        requires: [{ skillId: 88, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/FireSlashMastery.webp',
        description: "Fire Slash skill's defense reduction increases by 'X'%",
        valueType: 'FireSlashMastery',
        values: [
            0, 1.81, 3.03, 4.16, 5.22, 6.20, 7.10, 7.93, 8.69, 9.39, 10.02,
            10.59, 11.10, 11.56, 11.97, 12.33, 12.65, 12.92, 13.16, 13.36, 13.52
        ],
    },
    GiganticStormStrengthener: {
        id: 90,
        name: 'Gigantic Storm Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/GiganticStormStrengthener.webp',
        description: "Gigantic Storm skill damage increases by 'X'",
        valueType: 'GiganticStormStrengthener',
        values: [
            0, 6, 11, 15, 19, 23, 27, 30, 33, 36, 39,
            41, 43, 45, 46, 48, 49, 50, 51, 52, 53
        ],
    },
    SpiralChargeStrengthener: {
        id: 91,
        name: 'Spiral Charge Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/SpiralChargeStrengthener.webp',
        description: "The damage caused by using the two-handed sword skill three times increases by 'X'",
        valueType: 'SpiralChargeStrengthener',
        values: [
            0, 6, 12, 19, 26, 35, 43, 53, 62, 72, 83,
            94, 105, 116, 127, 139, 151, 163, 176, 189, 201
        ],
    },
    CrusherChargeStrengthener: {
        id: 92,
        name: 'Crusher Charge Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/CrusherChargeStrengthener.webp',
        description: "Increases the damage caused by the explosion of swords when using a one-handed sword skill three times by 'X'",
        valueType: 'CrusherChargeStrengthener',
        values: [
            0, 6, 9, 12, 15, 19, 23, 27, 32, 36, 41,
            46, 51, 56, 61, 66, 72, 77, 83, 89, 94
        ],
    },
    ElementalChargeStrengthener: {
        id: 93,
        name: 'Elemental Charge Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/ElementalChargeStrengthener.webp',
        description: "Nova damage incurred when using the Havok Spear skill three times increases by 'X'",
        valueType: 'ElementalChargeStrengthener',
        values: [
            0, 10, 15, 20, 26, 32, 39, 46, 53, 60, 68,
            76, 85, 93, 102, 111, 120, 129, 138, 148, 158
        ],
    },
    SpiralChargeMastery: {
        id: 94,
        name: 'Spiral Charge Mastery',
        maxLevel: 20,
        requires: [{ skillId: 91, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/SpiralChargeMastery.webp',
        description: 'Added 1 sword explosion damage that occurs when you use two-handed sword skills three times',
        valueType: 'SpiralChargeMastery',
        values: []
    },
    CrusherChargeMastery: {
        id: 95,
        name: 'Crusher Charge Mastery',
        maxLevel: 20,
        requires: [{ skillId: 92, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/CrusherChargeMastery.webp',
        description: '1 additional sword damage that occurs when use a one-handed sword skill three times',
        valueType: 'CrusherChargeMastery',
        values: []
    },
    ElementalChargeMastery: {
        id: 96,
        name: 'Elemental Charge Mastery',
        maxLevel: 20,
        requires: [{ skillId: 93, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/ElementalChargeMastery.webp',
        description: 'Adds 1 Nova damage that occurs when you use the Havok Spear skill three times',
        valueType: 'ElementalChargeMastery',
        values: []
    },
    //DL
    FireBurstStrengthener: {
        id: 97,
        name: 'Fire Burst Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/FireBurstStrengthener.webp',
        description: "Fire Burst skill damage increases by 'X'",
        valueType: 'FireBurstStrengthener',
        values: [
            0, 8, 15, 21, 27, 32, 37, 41, 45, 49, 52,
            55, 58, 60, 63, 64, 66, 68, 69, 70, 71
        ],
    },
    ForceWaveStrengthener: {
        id: 98,
        name: 'Force Wave Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/ForceWaveStrengthener.webp',
        description: "Force Wave skill damage increases by 'X'",
        valueType: 'ForceWaveStrengthener',
        values: [
            0, 14, 24, 33, 41, 49, 56, 63, 69, 75, 80,
            84, 88, 92, 95, 98, 101, 103, 105, 106, 108
        ],
    },
    DarkHorseStrengthener: {
        id: 99,
        name: 'Dark Horse Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/DarkHorseStrengthener.webp',
        description: "Defense increases by 'X' while equipping Dark Horse",
        valueType: 'DarkHorseStrengthener',
        values: [
            0, 12, 20, 27, 34, 41, 47, 52, 57, 62, 66,
            70, 74, 77, 79, 82, 84, 86, 87, 89, 90
        ],
    },
    CriticalDMGIncreasePowUp: {
        id: 100,
        name: 'Critical DMG Increase PowUp',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/CriticalDMGIncreasePowUp.webp',
        description: "Critical Damage Increase skill increases critical damage by 'X'",
        valueType: 'CriticalDMGIncreasePowUp',
        values: [
            0, 6, 11, 15, 19, 23, 27, 30, 33, 36, 39,
            41, 43, 45, 46, 48, 49, 50, 51, 52, 53
        ],
    },
    EarthshakeStrengthener: {
        id: 101,
        name: 'Earthshake Strengthener',
        maxLevel: 20,
        requires: [{ skillId: 99, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/EarthshakeStrengthener.webp',
        description: "Earthshake skill damage increases by 'X'",
        valueType: 'EarthshakeStrengthener',
        values: [
            0, 8, 15, 21, 27, 32, 37, 41, 45, 49, 52,
            55, 58, 60, 63, 64, 66, 68, 69, 70, 71
        ],
    },
    CriticalDMGIncreasePowUp2: {
        id: 102, // asigna un ID único
        name: 'Critical DMG Increase PowUp (2)',
        maxLevel: 20,
        requires: [{ skillId: 100, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/CriticalDMGIncreasePowUp2.webp',
        description: "Effect duration increases by 'X'",
        valueType: 'CriticalDMGIncreasePowUp2',
        values: [
            0, 8, 14, 20, 26, 31, 36, 40, 44, 48, 51,
            54, 57, 60, 62, 64, 65, 67, 68, 69, 70
        ],
    },
    CriticalDMGIncreasePowUp3: {
        id: 103,
        name: 'Critical DMG Increase PowUp (3)',
        maxLevel: 20,
        requires: [{ skillId: 102, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/CriticalDMGIncreasePowUp3.webp',
        description: "Critical Damage Increase skill increases Critical damage rate by additional 'X'%",
        valueType: 'CriticalDMGIncreasePowUp3',
        values: [
            0, 1.81, 3.03, 4.16, 5.22, 6.20, 7.10, 7.93, 8.69, 9.39, 10.02,
            10.59, 11.10, 11.56, 11.97, 12.33, 12.65, 12.92, 13.16, 13.36, 13.52
        ],
    },
    FireScreamStrengthener: {
        id: 104,
        name: 'Fire Scream Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/FireScreamStrengthener.webp',
        description: "Fire Scream skill damage increases by 'X'",
        valueType: 'FireScreamStrengthener',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32,
            34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },
    ElectricSparkStrengthener: {
        id: 105,
        name: 'Electric Spark Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/ElectricSparkStrengthener.webp',
        description: "Electric Spark skill damage increases by 'X'",
        valueType: 'ElectricSparkStrengthener',
        values: [
            0, 6, 11, 15, 19, 23, 27, 30, 33, 36, 39,
            41, 43, 45, 46, 48, 49, 50, 51, 52, 53
        ],
    },
    FireScreamMastery: {
        id: 106,
        name: 'Fire Scream Mastery',
        maxLevel: 20,
        requires: [{ skillId: 104, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/FireScreamMastery.webp',
        description: "The explosive damage of Fire Scream skill increases by 'X'",
        valueType: 'FireScreamMastery',
        values: [
            0, 11, 19, 27, 34, 40, 46, 52, 57, 62, 66,
            70, 73, 76, 79, 81, 83, 85, 87, 88, 89
        ],
    },
    CriticalDMGIncreaseMastery: {
        id: 107,
        name: 'Critical DMG Increase Mastery',
        maxLevel: 20,
        requires: [{ skillId: 103, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/CriticalDMGIncreaseMastery.webp',
        description: "Critical Damage Increase skill increases Excellent damage rate by additional 'X'%",
        valueType: 'CriticalDMGIncreaseMastery',
        values: [
            0, 1.20, 2.02, 2.78, 3.48, 4.13, 4.73, 5.29, 5.79, 6.26, 6.68,
            7.06, 7.40, 7.71, 7.98, 8.22, 8.43, 8.62, 8.77, 8.91, 9.02
        ],
    },
    ChaoticDiseierStrengthener: {
        id: 108,
        name: 'Chaotic Diseier Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/ChaoticDiseierStrengthener.webp',
        description: "Chaotic Diseier skill damage increases by 'X'",
        valueType: 'ChaoticDiseierStrengthener',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32,
            34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },

    // SUMMONER

    ExplosionStrengthener: {
        id: 109,
        name: 'Explosion Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/ExplosionStrengthener.webp',
        description: "Increases damage Explosion skill by 'X'",
        valueType: 'ExplosionStrengthener',
        values: [
            0, 6, 11, 15, 19, 23, 27, 30, 33, 36, 39,
            41, 43, 45, 46, 48, 49, 50, 51, 52, 53
        ],
    },
    RequiemStrengthener: {
        id: 110,
        name: 'Requiem Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/RequiemStrengthener.webp',
        description: "Increases damage of Requiem skill by 'X'",
        valueType: 'RequiemStrengthener',
        values: [
            0, 1, 2, 3, 4, 5, 6, 7,
            8, 9, 10, 11, 12, 13, 14,
            15, 16, 17, 18, 19, 20
        ]
    },
    PollutionStrengthener: {
        id: 111,
        name: 'Pollution Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/PollutionStrengthener.webp',
        description: "Increases damage of Pollution skill by 'X'",
        valueType: 'PollutionStrengthener',
        values: [
            0, 1, 2, 3, 4, 5, 6, 7,
            8, 9, 10, 11, 12, 13, 14,
            15, 16, 17, 18, 19, 20
        ]
    },
    ChainLightningStrengthener: {
        id: 112,
        name: 'Chain Lightning Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/ChainLightningStrengthener.webp',
        description: "Chain Lightning skill damage increases by 'X'",
        valueType: 'ChainLightningStrengthener',
        values: [
            0, 1, 2, 3, 4, 5, 6, 7,
            8, 9, 10, 11, 12, 13, 14,
            15, 16, 17, 18, 19, 20
        ]
    },
    PollutionStrengthener2: {
        id: 113,
        name: 'Pollution Strengthener 2',
        maxLevel: 20,
        requires: [{ skillId: 111, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/PollutionStrengthener2.webp',
        description: "Increases attack distance of Pullution skill by 1 tile and increases its damage by 'X'",
        valueType: 'PollutionStrengthener2',
        values: [
            0, 1, 2, 3, 4, 5, 6, 7,
            8, 9, 10, 11, 12, 13, 14,
            15, 16, 17, 18, 19, 20
        ]
    },
    SleepStrengthener: {
        id: 114,
        name: 'Sleep Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/SleepStrengthener.webp',
        description: "The success rate of sleep skill increases by 'X'%",
        valueType: 'SleepStrengthener',
        values: [
            0, 1, 2, 3, 4, 5, 6, 7,
            8, 9, 10, 11, 12, 13, 14,
            15, 16, 17, 18, 19, 20
        ]
    },
    PollutionMastery: {
        id: 115,
        name: 'Pollution Mastery',
        maxLevel: 20,
        requires: [{ skillId: 113, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/PollutionMastery.webp',
        description: "Increases number of targets of Pollution skill by 1 and increases its damage by 'X'",
        valueType: 'PollutionMastery',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },

    LightningShockStrengthener: {
        id: 116,
        name: 'Lightning Shock Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/LightningShockStrengthener.webp',
        description: "Lightning Shock skill damage increases by 'X'",
        valueType: 'LightningShockStrengthener',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },
    DrainLifeStrengthener: {
        id: 117,
        name: 'Drain Life Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/DrainLifeStrengthener.webp',
        description: "Drain Life skill damage and the amount of health absorbed increases by 'X'",
        valueType: 'DrainLifeStrengthener',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },
    WeaknessStrengthener: {
        id: 118,
        name: 'Weakness Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/WeaknessStrengthener.webp',
        description: "The attack penalty is increased by 'X' when using Weakness and its duration is increased in stages",
        valueType: 'WeaknessStrengthener',
        values: [
            0, 6, 11, 15, 19, 23, 27, 30, 33, 36, 39, 41, 43, 45, 46, 48, 49, 50, 51, 52, 53
        ],
    },

    InnovationStrengthener: {
        id: 119,
        name: 'Innovation Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/InnovationStrengthener.webp',
        description: "Innovation skill's defense reduction increases by 'X' and duration increase in stages",
        valueType: 'InnovationStrengthener',
        values: [
            0, 6, 11, 15, 19, 23, 27, 30, 33, 36, 39, 41, 43, 45, 46, 48, 49, 50, 51, 52, 53
        ],
    },
    GreatnessMastery: {
        id: 120,
        name: 'Greatness Mastery',
        maxLevel: 20,
        requires: [{ skillId: 118, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/GreatnessMastery.webp',
        description: "Elemental damage reduction is increased by 'X' when using Weakness skill",
        valueType: 'GreatnessMastery',
        values: [
            0, 11, 15, 19, 23, 28, 34, 39, 45, 51, 58, 65, 72, 79, 87, 95, 103, 111, 120, 129, 138
        ],
    },

    InnovationMastery: {
        id: 121,
        name: 'Innovation Mastery',
        maxLevel: 20,
        requires: [{ skillId: 119, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/InnovationMastery.webp',
        description: "Elemental defense reductionn effect is increased by 'X' when using Innovation skill",
        valueType: 'InnovationMastery',
        values: [
            0, 11, 15, 19, 23, 28, 34, 39, 45, 51, 58, 65, 72, 79, 87, 95, 103, 111, 120, 129, 138
        ],
    },
    Blind: {
        id: 122,
        name: 'Blind',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/Blind.webp',
        description: "Learns 'Blind' skill. The skill inflicts DMG to and blinds the target to block its view, greatly reducing its attack success rate with a certain chance. This skill can be used again after 5 seconds",
        valueType: 'Blind',
        values: [],
    },

    // RF

    KillingBlowStrengthener: {
        id: 123,
        name: 'Killing Blow Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/KillingBlowStrengthener.webp',
        description: "Increases Killing Blow attack power by 'X'",
        valueType: 'KillingBlowStrengthener',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },

    BeastUppercutStrengthener: {
        id: 124,
        name: 'Beast Uppercut Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/BeastUppercutStrengthener.webp',
        description: "Increases Beast Uppercut attack power by 'X'",
        valueType: 'BeastUppercutStrengthener',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },

    PhoenixShotStrengthener: {
        id: 125,
        name: 'Phoenix Shot Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/PhoenixShotStrengthener.webp',
        description: "Increases the DMG of Phoenix Shot by 'X'",
        valueType: 'PhoenixShotStrengthener',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },
    KillingBlowMastery: {
        id: 126,
        name: 'Killing Blow Mastery',
        maxLevel: 20,
        requires: [{ skillId: 123, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/KillingBlowMastery.webp',
        description: "The Killing Blow skill has a chance of reducing your target's attack rate by 'X'%",
        valueType: 'KillingBlowMastery',
        values: [
            0, 1.2, 2.02, 2.78, 3.48, 4.13, 4.73, 5.29, 5.79, 6.26, 6.68, 7.06, 7.4, 7.71, 7.98, 8.22, 8.43, 8.62, 8.77, 8.91, 9.02
        ],
    },

    BeastUppercutMastery: {
        id: 127,
        name: 'Beast Uppercut Mastery',
        maxLevel: 20,
        requires: [{ skillId: 124, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/BeastUppercutMastery.webp',
        description: "The Beast Uppercut skill has a chance of reducing the target's defense rate by 'X'%",
        valueType: 'BeastUppercutMastery',
        values: [
            0, 1.2, 2.02, 2.78, 3.48, 4.13, 4.73, 5.29, 5.79, 6.26, 6.68, 7.06, 7.4, 7.71, 7.98, 8.22, 8.43, 8.62, 8.77, 8.91, 9.02
        ],
    },

    PhoenixShotMastery: {
        id: 128,
        name: 'Phoenix Shot Mastery',
        maxLevel: 20,
        requires: [{ skillId: 125, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/PhoenixShotMastery.webp',
        description: "Phoenix Shot increases the defense success rate reduction effect by 'X'%",
        valueType: 'PhoenixShotMastery',
        values: [
            0, 1.2, 2.02, 2.78, 3.48, 4.13, 4.73, 5.29, 5.79, 6.26, 6.68, 7.06, 7.4, 7.71, 7.98, 8.22, 8.43, 8.62, 8.77, 8.91, 9.02
        ],
    },

    ChainDriveStrengthener: {
        id: 129,
        name: 'Chain Drive Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/ChainDriveStrengthener.webp',
        description: "Increases Chain Drive attack power by 'X'",
        valueType: 'ChainDriveStrengthener',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },

    DarkSideStrengthener: {
        id: 130,
        name: 'Dark Side Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/DarkSideStrengthener.webp',
        description: "Increases Dark Side attack power by 'X'",
        valueType: 'DarkSideStrengthener',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },

    DragonRoarStrengthener: {
        id: 131,
        name: 'Dragon Roar Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/DragonRoarStrengthener.webp',
        description: "Increases Dragon Roar attack power by 'X'",
        valueType: 'DragonRoarStrengthener',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },

    DarkSideMastery: {
        id: 132,
        name: 'Dark Side Mastery',
        maxLevel: 20,
        requires: [{ skillId: 130, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/DarkSideMastery.webp',
        description: "Increases the range of Dark Side skill by 1 tile. 10 points are required for skill investment",
        valueType: 'DarkSideMastery',
        values: [

        ],
    },

    DragonSlasherStrengthener: {
        id: 133,
        name: 'Dragon Slasher Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/DragonSlasherStrengthener.webp',
        description: "Increases Dragon Slasher attack power by 'X'",
        valueType: 'DragonSlasherStrengthener',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },

    BloodHowling: {
        id: 134,
        name: 'Blood Howling',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/BloodHowling.webp',
        description: "Learns 'Blood Howling' skill. When the skill is active, other attack skills inflict 200 bleed DMG to the target every 0,5 seconds for 10 seconds with a 1% chance. This skill can be used again after 2 minutes",
        valueType: 'BloodHowling',
        values: [

        ],
    },

    BloodHowlingStrengthener: {
        id: 135,
        name: 'Blood Howling Strengthener',
        maxLevel: 20,
        requires: [{ skillId: 134, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/BloodHowlingStrengthener.webp',
        description: "Increases Blood Howling's bleeding effect by 'X'%",
        valueType: 'BloodHowlingStrengthener',
        values: [
            0, 1.02, 1.27, 1.52, 1.75, 1.97, 2.18, 2.38, 2.57, 2.75, 2.92, 3.08, 3.24, 3.38, 3.52, 3.65, 3.77, 3.88, 3.99, 4.09, 4.18
        ],
    },
    // GL
    LungeStrengthener: {
        id: 136,
        name: 'Lunge Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/LungeStrengthener.webp',
        description: "Lunge skill damage increases by 'X'",
        valueType: 'LungeStrengthener',
        values: [
            0, 12, 20, 27, 34, 41, 47, 52, 57, 62, 66, 70, 74, 77, 79, 82, 84, 86, 87, 89, 90
        ],
    },

    SpinStepPowUp: {
        id: 137,
        name: 'Spin Step PowUp',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/SpinStepPowUp.webp',
        description: "Spin Step skill damage increases by 'X'",
        valueType: 'SpinStepPowUp',
        values: [
            0, 6, 11, 15, 19, 23, 27, 30, 33, 36, 39, 41, 43, 45, 46, 48, 49, 50, 51, 52, 53
        ],
    },

    HarshStrikePowUp: {
        id: 138,
        name: 'Harsh Strike PowUp',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/HarshStrikePowUp.webp',
        description: "Harsh Strike skill damage increases by 'X'",
        valueType: 'HarshStrikePowUp',
        values: [
            0, 8, 15, 21, 27, 32, 37, 41, 45, 49, 52, 55, 58, 60, 63, 64, 66, 68, 69, 70, 71
        ],
    },
    SpinStepMastery: {
        id: 139,
        name: 'Spin Step Mastery',
        maxLevel: 20,
        requires: [{ skillId: 137, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/SpinStepMastery.webp',
        description: "The explosive damage of Spin Step skill increases by 'X'",
        valueType: 'SpinStepMastery',
        values: [
            0, 8, 15, 21, 27, 32, 37, 41, 45, 49, 52, 55, 58, 60, 63, 64, 66, 68, 69, 70, 71
        ],
    },

    HarshStrikeMastery: {
        id: 140,
        name: 'Harsh Strike Mastery',
        maxLevel: 20,
        requires: [{ skillId: 138, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/HarshStrikeMastery.webp',
        description: "Harsh Strike skill's hit damage increases once. (Spends 10 points at once to learn the skill)",
        valueType: 'HarshStrikeMastery',
        values: [

        ],
    },
    ObsidianPowUp: {
        id: 141,
        name: 'Obsidian PowUp',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/ObsidianPowUp.webp',
        description: "Increases skill DMG Boost effect by 'X'%",
        valueType: 'ObsidianPowUp',
        values: [
            0, 7, 12, 16, 20, 24, 28, 31, 34, 37, 40, 42, 44, 46, 47, 49, 50, 51, 52, 53, 54
        ],
    },
    MagicPinPowUp: {
        id: 142,
        name: 'Magic Pin PowUp',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/MagicPinPowUp.webp',
        description: "Magic Pin skill damage increases by 'X'",
        valueType: 'MagicPinPowUp',
        values: [
            0, 8, 15, 21, 27, 32, 37, 41, 45, 49, 52, 55, 58, 60, 63, 64, 66, 68, 69, 70, 71
        ],
    },

    BrechePowUp: {
        id: 143,
        name: 'Breche PowUp',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/BrechePowUp.webp',
        description: "Breche skill damage increases by 'X'",
        valueType: 'BrechePowUp',
        values: [
            0, 8, 15, 21, 27, 32, 37, 41, 45, 49, 52, 55, 58, 60, 63, 64, 66, 68, 69, 70, 71
        ],
    },
    ShiningPeakPowUp: {
        id: 144,
        name: 'Shining Peak PowUp',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/ShiningPeakPowUp.webp',
        description: "Shining Peak skill damage increases by 'X'",
        valueType: 'ShiningPeakPowUp',
        values: [
            0, 11, 19, 27, 34, 40, 46, 52, 57, 62, 66, 70, 73, 76, 79, 81, 83, 85, 87, 88, 89
        ],
    },

    MagicPinMastery: {
        id: 145,
        name: 'Magic Pin Mastery',
        maxLevel: 20,
        requires: [{ skillId: 142, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/MagicPinMastery.webp',
        description: "Increases the range of Magic Pin to 3",
        valueType: 'MagicPinMastery',
        values: [

        ],
    },

    BrecheMastery: {
        id: 146,
        name: 'Breche Mastery',
        maxLevel: 20,
        requires: [{ skillId: 143, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/BrecheMastery.webp',
        description: "Increases the range of Breche to 4. (Spends 10 points at once to learn the skill)",
        valueType: 'BrecheMastery',
        values: [

        ],
    },
    WildBrecheStr: {
        id: 147,
        name: 'Wild Breche Strengthener',
        maxLevel: 20,
        requires: [{ skillId: 146, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/WildBrecheStr.webp',
        description: "Wild Breche skill power increse by 'X'%",
        valueType: 'WildBrecheStr',
        values: [
            0, 12.75, 20.98, 28.72, 36, 42.82, 49.21, 55.26, 60.71, 65.86, 70.63, 75.03, 79.07, 82.76, 86.11, 89.12, 92.06, 94.57, 96.81, 98.81, 100.57
        ],
    },
    OverstingStrengthener: {
        id: 148,
        name: 'Oversting Strengthener',
        maxLevel: 20,
        requires: [{ skillId: 145, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/OverstingStrengthener.webp',
        description: "Oversting skill power increse by 'X'%",
        valueType: 'OverstingStrengthener',
        values: [
            0, 12.75, 20.98, 28.72, 36, 42.82, 49.21, 55.26, 60.71, 65.86, 70.63, 75.03, 79.07, 82.76, 86.11, 89.12, 92.06, 94.57, 96.81, 98.81, 100.57
        ],
    },
    Burst: {
        id: 149,
        name: 'Burst',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/Burst.webp',
        description: "Learns 'Burst' skill. Temporarily increases the chance of True Damage by 5%. Cooldown 60 sec. (Spends 10 points at once to learn the skill)",
        valueType: 'Burst',
        values: [
        ],
    },
    BurstPowUp: {
        id: 150,
        name: 'Burst PowUp',
        maxLevel: 20,
        requires: [{ skillId: 149, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/BurstPowUp.webp',
        description: "Reduces the Cooldown time of Burst skill by 'X' sec",
        valueType: 'BurstPowUp',
        values: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
        ],
    },
    // RUNE
    MagicArrowStrengthener: {
        id: 151,
        name: 'Magic Arrow Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/MagicArrowStrengthener.webp',
        description: "Magic Arrow skill damage increases by 'X'",
        valueType: 'MagicArrowStrengthener',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },
    MagicArrowMastery: {
        id: 152,
        name: 'Magic Arrow Mastery',
        maxLevel: 20,
        requires: [{ skillId: 150, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/MagicArrowMastery.webp',
        description: "Magic Arrow skill damage increases by 'X', and the projectile increases by 1",
        valueType: 'MagicArrowMastery',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },
    BurstStrengthener: {
        id: 153,
        name: 'Burst Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/BurstStrengthener.webp',
        description: "Increase the duration of Burst by 'X' sec",
        valueType: 'BurstStrengthener',
        values: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
        ],
    },

    HasteStrengthener: {
        id: 154,
        name: 'Haste Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/HasteStrengthener.webp',
        description: "Increase the duration of Haste by 'X' sec",
        valueType: 'HasteStrengthener',
        values: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
        ],
    },

    BurstMastery: {
        id: 155,
        name: 'Burst Mastery',
        maxLevel: 20,
        requires: [{ skillId: 152, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/BurstMastery.webp',
        description: "Decrease the cooldown of Burst by 'X' sec",
        valueType: 'BurstMastery',
        values: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
        ],
    },

    HasteMastery: {
        id: 156,
        name: 'Haste Mastery',
        maxLevel: 20,
        requires: [{ skillId: 153, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/HasteMastery.webp',
        description: "Decrease the cooldown of Haste by 'X' sec",
        valueType: 'HasteMastery',
        values: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
        ],
    },
    PlasmaBallStrengthener: {
        id: 157,
        name: 'Plasma Ball Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/PlasmaBallStrengthener.webp',
        description: "Plasma Ball skill damage increases by 'X'",
        valueType: 'PlasmaBallStrengthener',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },
    PlasmaBallMastery: {
        id: 158,
        name: 'Plasma Ball Mastery',
        maxLevel: 20,
        requires: [{ skillId: 156, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/PlasmaBallMastery.webp',
        description: "Plasma Ball skill damage increases by 'X' and the movement distance increases by 1 tile",
        valueType: 'PlasmaBallMastery',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },

    // SLAYER

    SwordInertiaStrengthener: {
        id: 159,
        name: 'Sword Inertia Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/SwordInertiaStrengthener.webp',
        description: "Increases Sword Inertia damage by 'X'",
        valueType: 'SwordInertiaStrengthener',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },
    SwordInertiaMastery: {
        id: 160,
        name: 'Sword Inertia Mastery',
        maxLevel: 20,
        requires: [{ skillId: 159, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/SwordInertiaMastery.webp',
        description: "Sword Inertia skill range increased to 7. (Spends 10 points at once to learn the skill",
        valueType: 'SwordInertiaMastery',
        values: [

        ],
    },
    BatFlockStrengthener: {
        id: 161,
        name: 'Bat Flock Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/BatFlockStrengthener.webp',
        description: "Increases damage of Bat Flock skill by 'X'",
        valueType: 'BatFlockStrengthener',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },
    BatFlockMastery: {
        id: 162,
        name: 'Bat Flock Mastery',
        maxLevel: 20,
        requires: [{ skillId: 161, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/BatFlockMastery.webp',
        description: "Increases time a damage is dealt of Bat Flock by 10 seconds. (Spends 10 points at once to learn the skill",
        valueType: 'BatFlockMastery',
        values: [

        ],
    },
    DetectionStrengthener: {
        id: 163,
        name: 'Detection Strengthener',
        requiresFullInvestment: true,
        maxLevel: 10,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/DetectionStrengthener.webp',
        description: "The range of the detection skill is extended to around 150 tiles. (Spends 10 points at once to learn the skill",
        valueType: 'DetectionStrengthener',
        values: [

        ],
    },

    DemolishStrengthener: {
        id: 164,
        name: 'Demolish Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/DemolishStrengthener.webp',
        description: "Demolish skill cooldown reduced by 'X' second(s)",
        valueType: 'DemolishStrengthener',
        values: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
        ],
    },
    DemolishMastery: {
        id: 165,
        name: 'Demolish Mastery',
        maxLevel: 20,
        requires: [{ skillId: 164, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/DemolishMastery.webp',
        description: "Demolish skill's ignore defensive effect increased by 'X'",
        valueType: 'DemolishMastery',
        values: [
            0, 23, 36, 48, 60, 71, 80, 89, 98, 105, 112, 118, 124, 129, 133, 137, 141, 144, 146, 148, 150
        ],
    },

    // GUN

    IceBreakStrengthener: {
        id: 166,
        name: 'Ice Break Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/IceBreakStrengthener.webp',
        description: "Ice Break skill attack power is increased by 'X'",
        valueType: 'IceBreakStrengthener',
        values: [
            0, 4, 6, 8, 10, 12, 15, 18, 21, 24, 27, 30, 34, 37, 41, 44, 48, 51, 55, 59, 63
        ],
    },

    DeathFireStrengthener: {
        id: 167,
        name: 'Death Fire Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/DeathFireStrengthener.webp',
        description: "Death Fire skill attack power increases by 'X' and attack speed increases by 10. (It does not stack with the attack speed increase effect of Enhanced Death Fire)",
        valueType: 'DeathFireStrengthener',
        values: [
            0, 3, 4, 6, 8, 10, 12, 14, 17, 19, 22, 24, 27, 29, 32, 35, 38, 41, 44, 47, 50
        ],
    },

    DeathIceStrengthener: {
        id: 168,
        name: 'Death Ice Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/DeathIceStrengthener.webp',
        description: "Death Ice skill attack power increases by 'X' and attack speed increases by 10. (It does not stack with the attack speed increase effect of Enhanced Death Ice)",
        valueType: 'DeathIceStrengthener',
        values: [
            0, 3, 4, 6, 8, 10, 12, 14, 17, 19, 22, 24, 27, 29, 32, 35, 38, 41, 44, 47, 50
        ],
    },
    IceBreakMastery: {
        id: 169,
        name: 'Ice Break Mastery',
        maxLevel: 20,
        requires: [{ skillId: 166, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/IceBreakMastery.webp',
        description: "Ice Break skill attack power increased by 'X' and skill range increased by 1 tile",
        valueType: 'IceBreakMastery',
        values: [
            0, 4, 6, 8, 11, 14, 18, 22, 26, 30, 34, 39, 44, 49, 55, 60, 66, 71, 77, 83, 90
        ],
    },

    DeathFireMastery: {
        id: 170,
        name: 'Death Fire Mastery',
        maxLevel: 20,
        requires: [{ skillId: 167, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/DeathFireMastery.webp',
        description: "Death Fire skill attack power increases by 'X', and the range and distance used increase by 1 tile",
        valueType: 'DeathFireMastery',
        values: [
            0, 4, 6, 8, 11, 14, 18, 22, 26, 30, 34, 39, 44, 49, 55, 60, 66, 71, 77, 83, 90
        ],
    },

    DeathIceMastery: {
        id: 171,
        name: 'Death Ice Mastery',
        maxLevel: 20,
        requires: [{ skillId: 168, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/DeathIceMastery.webp',
        description: "Death Ice skill attack power increases by 'X', and the range and distance used increase by 1 tile",
        valueType: 'DeathIceMastery',
        values: [
            0, 4, 6, 8, 11, 14, 18, 22, 26, 30, 34, 39, 44, 49, 55, 60, 66, 71, 77, 83, 90
        ],
    },
    FixedFireStrengthener: {
        id: 172,
        name: 'Fixed Fire Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/FixedFireStrengthener.webp',
        description: "Magical Power is increased by 'X' when using the Fixed Fire buff",
        valueType: 'FixedFireStrengthener',
        values: [
            0, 5, 8, 12, 15, 18, 21, 24, 27, 29, 32, 34, 36, 38, 40, 42, 44, 46, 47, 49, 50
        ],
    },

    DarkPlasmaStrengthener: {
        id: 173,
        name: 'Dark Plasma Strengthener',
        requiresFullInvestment: true,
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/DarkPlasmaStrengthener.webp',
        description: "Number of targets that can be attacked by Dark Plasma skills increased by 1",
        valueType: 'DarkPlasmaStrengthener',
        values: [
            0,
        ],
    },
    FixedFireMastery: {
        id: 174,
        name: 'Fixed Fire Mastery',
        maxLevel: 20,
        requires: [{ skillId: 172, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/FixedFireMastery.webp',
        description: "Attack speed increases by 'X' when using the Fixed Fire buff",
        valueType: 'FixedFireMastery',
        values: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        ],
    },

    DarkPlasmaProficiency: {
        id: 175,
        name: 'Dark Plasma Proficiency',
        maxLevel: 20,
        requires: [{ skillId: 173, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/DarkPlasmaProficiency.webp',
        description: "Dark Plasma duration increased by 'X' seconds",
        valueType: 'DarkPlasmaProficiency',
        values: [
            0, 1, 2
        ],
    },
    DarkPlasmaMastery: {
        id: 176,
        name: 'Dark Plasma Mastery',
        maxLevel: 20,
        requires: [{ skillId: 175, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/DarkPlasmaMastery.webp',
        description: "Dark Plasma skill attack power increased by 'X' and attack range increased by 1 tile",
        valueType: 'DarkPlasmaMastery',
        values: [
            0, 7, 10, 13, 16, 19, 23, 26, 30, 34, 38, 43, 47, 52, 56, 61, 66, 71, 76, 82, 87
        ],
    },

    // KUNDUN

    ShiningBirdStrengthener: {
        id: 177,
        name: 'Shining Bird Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/ShiningBirdStrengthener.webp',
        description: "Increases the damage of Shining Bird skill by 'X'",
        valueType: 'ShiningBirdStrengthener',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },
    ShiningBirdMastery: {
        id: 178,
        name: 'Shining Bird Mastery',
        maxLevel: 20,
        requires: [{ skillId: 177, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/ShiningBirdMastery.webp',
        description: "The usable range of the Shining Bird skill is increased to 7. 10 points are required for skill investment",
        valueType: 'ShiningBirdMastery',
        values: [
            0, 7
        ],
    },
    DragonViolentStrenghtener: {
        id: 179,
        name: 'Dragon Violent Strenghtener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/DragonViolentStrenghtener.webp',
        description: "Increases the damage of Dragon Violent skills by 'X'",
        valueType: 'DragonViolentStrenghtener',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },
    DragonViolentMastery: {
        id: 180,
        name: 'Dragon Violent Mastery',
        maxLevel: 20,
        requires: [{ skillId: 179, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/DragonViolentMastery.webp',
        description: "The usable range of the Dragon Violent skill is increased to 7. 10 points are required for skill investment",
        valueType: 'DragonViolentMastery',
        values: [
            0,
        ],
    },

    // LEMURIA

    MarvelBurstStrengthener: {
        id: 181,
        name: 'Marvel Burst Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/MarvelBurstStrengthener.webp',
        description: "Increases the damage of Marvel Burst skills by 'X'",
        valueType: 'MarvelBurstStrengthener',
        values: [
            0, 8, 15, 21, 27, 32, 37, 41, 45, 49, 52, 55, 58, 60, 63, 64, 66, 68, 69, 70, 71
        ],
    },

    IntensiveCareStrengthener: {
        id: 182,
        name: 'Intensive Care Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/IntensiveCareStrengthener.webp',
        description: "Healing is increased by 'X'%",
        valueType: 'IntensiveCareStrengthener',
        values: [
            0, 4.61, 7.6, 10.42, 13.07, 15.55, 17.87, 20.03, 22.05, 23.92, 25.66, 27.26, 28.73, 30.08, 31.31, 32.44, 33.45, 34.36, 35.18, 35.91, 36.55
        ],
    },
    MarvelBurstMastery: {
        id: 183,
        name: 'Marvel Burst Mastery',
        maxLevel: 20,
        requires: [{ skillId: 181, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/MarvelBurstMastery.webp',
        description: "The damage range of the Marble Burst skill increases by 1 tile. 10 points are required for skill investment",
        valueType: 'MarvelBurstMastery',
        values: [
            0,
        ],
    },

    BeginnerDefenseImprovementStrengthener: {
        id: 184,
        name: 'Beginner Defense Improvement Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/BeginnerDefenseImprovementStrengthener.webp',
        description: "Beginner armor bonus increased by 'X'%",
        valueType: 'BeginnerDefenseImprovementStrengthener',
        values: [
            0, 4.61, 7.6, 10.42, 13.07, 15.55, 17.87, 20.03, 22.05, 23.92, 25.66, 27.26, 28.73, 30.08, 31.31, 32.44, 33.45, 34.36, 35.18, 35.91, 36.55
        ],
    },

    BeginnerAttackPowerImprovementStrengthener: {
        id: 185,
        name: 'Beginner Attack Power Improvement Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/BeginnerAttackPowerImprovementStrengthener.webp',
        description: "Beginner damage bonus increased by 'X'%",
        valueType: 'BeginnerAttackPowerImprovementStrengthener',
        values: [
            0, 4.61, 7.6, 10.42, 13.07, 15.55, 17.87, 20.03, 22.05, 23.92, 25.66, 27.26, 28.73, 30.08, 31.31, 32.44, 33.45, 34.36, 35.18, 35.91, 36.55
        ],
    },

    BeginnerDefenseImprovementMastery: {
        id: 186,
        name: 'Beginner Defense Improvement Mastery',
        maxLevel: 20,
        requires: [{ skillId: 184, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/BeginnerDefenseImprovementMastery.webp',
        description: "Beginner defense enhancement effect is increased by 'X'%, and the duration increases step by step",
        valueType: 'BeginnerDefenseImprovementMastery',
        values: [
            0, 4.61, 7.6, 10.42, 13.07, 15.55, 17.87, 20.03, 22.05, 23.92, 25.66, 27.26, 28.73, 30.08, 31.31, 32.44, 33.45, 34.36, 35.18, 35.91, 36.55
        ],
    },
    BeginnerAttackImprovementMastery: {
        id: 187,
        name: 'Beginner Attack Improvement Mastery',
        maxLevel: 20,
        requires: [{ skillId: 185, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/BeginnerAttackImprovementMastery.webp',
        description: "Beginner damage boost effect is increased by 'X'%, and the duration increases step by step",
        valueType: 'BeginnerAttackImprovementMastery',
        values: [
            0, 4.61, 7.6, 10.42, 13.07, 15.55, 17.87, 20.03, 22.05, 23.92, 25.66, 27.26, 28.73, 30.08, 31.31, 32.44, 33.45, 34.36, 35.18, 35.91, 36.55
        ],
    },
    UnleashMarvelStrenghtener: {
        id: 188,
        name: 'Unleash Marvel Strenghtener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/UnleashMarvelStrenghtener.webp',
        description: "Increases the damage of Unleashed Marble skill by 'X'",
        valueType: 'UnleashMarvelStrenghtener',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },
    UnleashMarvelMastery: {
        id: 189,
        name: 'Unleash Marvel Mastery',
        maxLevel: 20,
        requires: [{ skillId: 188, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/UnleashMarvelMastery.webp',
        description: "The usable range of the Unleashed Marble skill is increased to 7. 10 points are required for skill investment",
        valueType: 'UnleashMarvelMastery',
        values: [
            0,
        ],
    },
    BeginnerBlessStrengthener: {
        id: 190,
        name: 'Beginner Bless Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/BeginnerBlessStrengthener.webp',
        description: "The stat increase effect of Beginner Bless skills is increased by 'X'",
        valueType: 'BeginnerBlessStrengthener',
        values: [
            0, 6, 11, 15, 19, 23, 27, 30, 33, 36, 39, 41, 43, 45, 46, 48, 49, 50, 51, 52, 53
        ],
    },

    // IK

    ChargeSlashStrengthener: {
        id: 191,
        name: 'Charge Slash Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/ChargeSlashStrengthener.webp',
        description: "Increases the damage of Charge Slash skill by 'X'",
        valueType: 'ChargeSlashStrengthener',
        values: [
            0, 3, 4, 6, 8, 10, 12, 14, 17, 19, 22, 24, 27, 29, 32, 35, 38, 41, 44, 47, 50
        ],
    },
    ChargeSlashMastery: {
        id: 192,
        name: 'Charge Slash Mastery',
        maxLevel: 20,
        requires: [{ skillId: 191, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/ChargeSlashMastery.webp',
        description: "The usable range of the Charge Slash skill is increased to 7.",
        valueType: 'ChargeSlashMastery',
        values: [
            0,
        ],
    },

    WindGlaiveStrengthener: {
        id: 193,
        name: 'Wind Glaive Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/WindGlaiveStrengthener.webp',
        description: "Wind Glaive skill damage increased by 'X'",
        valueType: 'WindGlaiveStrengthener',
        values: [
            0, 3, 4, 6, 8, 10, 12, 14, 17, 19, 22, 24, 27, 29, 32, 35, 38, 41, 44, 47, 50
        ],
    },

    IllusionBladeStrengthener: {
        id: 194,
        name: 'Illusion Blade Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/IllusionBladeStrengthener.webp',
        description: "When using Illusion Blade, skill attack power is additionally increased by 'X'",
        valueType: 'IllusionBladeStrengthener',
        values: [
            0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100
        ],
    },

    WindGlaiveMastery: {
        id: 195,
        name: 'Wind Glaive Mastery',
        maxLevel: 20,
        requires: [{ skillId: 193, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/WindGlaiveMastery.webp',
        description: "The usable range of the Wind Glaive skill is increased to 6.",
        valueType: 'WindGlaiveMastery',
        values: [
            0,
        ],
    },
    IllusionBladeMastery: {
        id: 196,
        name: 'Illusion Blade Mastery',
        maxLevel: 20,
        requires: [{ skillId: 194, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/IllusionBladeMastery.webp',
        description: "When using Illusion Blade, attack speed is additionally increased by 'X'",
        valueType: 'IllusionBladeMastery',
        values: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        ],
    },

    IllusionAvatarStrengthener: {
        id: 197,
        name: 'Illusion Avatar Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/IllusionAvatarStrengthener.webp',
        description: "The damage range of the Illusion Avatar skill increases by 1 tile.",
        valueType: 'IllusionAvatarStrengthener',
        values: [
            0,
        ],
    },

    IllusionBladeMastery2: {
        id: 198,
        name: 'Illusion Blade Mastery',
        maxLevel: 20,
        requires: [{ skillId: 196, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/IllusionBladeMastery2.webp',
        description: "When using Illusion Blade, when you deal damage to a monster, all damage received by the monster is increased by 5%",
        valueType: 'IllusionBladeMastery2',
        values: [
            0,
        ],
    },

    IllusionAvatarMastery: {
        id: 199,
        name: 'Illusion Avatar Mastery',
        maxLevel: 20,
        requires: [{ skillId: 197, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/IllusionAvatarMastery.webp',
        description: "Increases the damage of Illusion Avatar skills by 'X'",
        valueType: 'IllusionAvatarMastery',
        values: [
            0, 3, 4, 6, 8, 10, 12, 14, 17, 19, 22, 24, 27, 29, 32, 35, 38, 41, 44, 47, 50
        ],
    },
    BladeStormStrengthener: {
        id: 200,
        name: 'Blade Storm Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/BladeStormStrengthener.webp',
        description: "Blade Storm skill damage increased by 'X'",
        valueType: 'BladeStormStrengthener',
        values: [
            0, 3, 4, 6, 8, 10, 12, 14, 17, 19, 22, 24, 27, 29, 32, 35, 38, 41, 44, 47, 50
        ],
    },
    BladeStormMastery: {
        id: 201,
        name: 'Blade Storm Mastery',
        maxLevel: 20,
        requires: [{ skillId: 200, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/BladeStormMastery.webp',
        description: "Blade Storm skill damage coverage increases by 1 tile.",
        valueType: 'BladeStormMastery',
        values: [
            0,
        ],
    },

    // ALCHEMIST

    AngelHomunculusStrengthener: {
        id: 202,
        name: 'Angel Homunculus Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/AngelHomunculusStrengthener.webp',
        description: "Increases the damage of Angel Homunculus skill by 'X'",
        valueType: 'AngelHomunculusStrengthener',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },
    AngelHomunculusMastery: {
        id: 203,
        name: 'Angel Homunculus Mastery',
        maxLevel: 20,
        requires: [{ skillId: 202, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/AngelHomunculusMastery.webp',
        description: "The number of targets the Angel Homunculus skill can attack increases by 1",
        valueType: 'AngelHomunculusMastery',
        values: [
            0,
        ],
    },
    IgnitionBomberStrengthener: {
        id: 204,
        name: 'Ignition Bomber Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/IgnitionBomberStrengthener.webp',
        description: "The damage of the Ignition Bomber skill increases by 'X'",
        valueType: 'IgnitionBomberStrengthener',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },
    IgnitionBomberMastery: {
        id: 205,
        name: 'Ignition Bomber Mastery',
        maxLevel: 20,
        requires: [{ skillId: 204, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/IgnitionBomberMastery.webp',
        description: "The usable range of the Ignition Bomber skill is increased to 7",
        valueType: 'IgnitionBomberMastery',
        values: [
            0,
        ],
    },
    ConfusionStoneStrengthener: {
        id: 206,
        name: 'Confusion Stone Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/blue/ConfusionStoneStrengthener.webp',
        description: "The time for monsters to be summoned is reduced.",
        valueType: 'ConfusionStoneStrengthener',
        values: [
            0,
        ],
    },
    ConfusionStoneMastery: {
        id: 207,
        name: 'Confusion Stone Mastery',
        maxLevel: 20,
        requires: [{ skillId: 206, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/blue/ConfusionStoneMastery.webp',
        description: "Alchemy rate increases by 'X'% (The alchemy rate affects the experience gained by summoned monsters)",
        valueType: 'ConfusionStoneMastery',
        values: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
        ],
    },

    // ULTIMO ID 208 METEOR STORM ERROR

    // RED SKILLS

    PvPAttackRate: {
        id: 209,
        name: 'PvP Attack Rate',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/AttackRate.webp',
        description: "PvP attack success rate increases by 'X'",
        valueType: 'Attackrate',
        values: [
            0, 818, 1372, 1887, 2366, 2809, 3218, 3594, 3939, 4254, 4541, 4800, 5033, 5242, 5427, 5591, 5734, 5859, 5965, 6055, 6130
        ],
    },
    OneHandedStaffStrengthener: {
        id: 210,
        name: 'One-Handed Staff Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/OneHandedStaffStrengthener.webp',
        description: "Wizardry increases by 'X' while equipping One-Handed Staff",
        valueType: 'OneHandedStaffStrengthener',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },

    TwohandedStaffStrengthener: {
        id: 211,
        name: 'Two-handed Staff Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/TwohandedStaffStrengthener.webp',
        description: "Wizardry is increased by 'X' when equipped with a Two-handed Staff",
        valueType: 'TwohandedStaffStrengthener',
        values: [
            0, 16, 28, 38, 48, 57, 66, 74, 81, 87, 93, 98, 103, 107, 111, 115, 118, 120, 122, 124, 126
        ],
    },

    ShieldStrengthener: {
        id: 212,
        name: 'Shield Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/ShieldStrengthener.webp',
        description: "Defense increases by 'X' while equipping Shield",
        valueType: 'ShieldStrengthener',
        values: [
            0, 8, 14, 20, 26, 31, 36, 40, 44, 48, 51, 54, 57, 60, 62, 64, 65, 67, 68, 69, 70
        ],
    },
    OnehandedStaffMastery: {
        id: 213,
        name: 'One-handed Staff Mastery',
        maxLevel: 20,
        requires: [{ skillId: 210, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/OnehandedStaffMastery.webp',
        description: "Attack speed increases by 'X' while equipping One-handed Staff",
        valueType: 'OnehandedStaffMastery',
        values: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        ],
    },

    TwoHandedStaffMastery: {
        id: 214,
        name: 'Two-Handed Staff Mastery',
        maxLevel: 20,
        requires: [{ skillId: 211, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/TwoHandedStaffMastery.webp',
        description: "PvP attack power increases by additional 'X' while equipping Two-Handed Staff",
        valueType: 'TwoHandedStaffMastery',
        values: [
            0, 16, 28, 38, 48, 57, 66, 74, 81, 87, 93, 98, 103, 107, 111, 115, 118, 120, 122, 124, 126
        ],
    },

    ShieldMastery: {
        id: 215,
        name: 'Shield Mastery',
        maxLevel: 20,
        requires: [{ skillId: 212, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/ShieldMastery.webp',
        description: "Defense Rate increases by 'X' while equipping a Shield",
        valueType: 'ShieldMastery',
        values: [
            0, 18, 20, 27, 34, 41, 47, 52, 57, 62, 66, 70, 74, 77, 79, 82, 84, 86, 87, 89, 90
        ],
    },
    SoulBarrierStrengthener: {
        id: 216,
        name: 'Soul Barrier Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/SoulBarrierStrengthener.webp',
        description: "Damage Reduction increases by additional 'X'%",
        valueType: 'SoulBarrierStrengthener',
        values: [
            0, 1.81, 3.03, 4.16, 5.22, 6.2, 7.1, 7.93, 8.69, 9.39, 10.02, 10.59, 11.1, 11.56, 11.97, 12.33, 12.65, 12.92, 13.16, 13.36, 13.52
        ],
    },

    ManaReduction: {
        id: 217,
        name: 'Mana Reduction',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/ManaReduction.webp',
        description: "Mana cost decreases by 'X'%",
        valueType: 'ManaReduction',
        values: [
            0, 7.22, 12.11, 16.66, 20.88, 24.79, 28.4, 31.72, 34.76, 37.54, 40.07, 42.35, 44.41, 46.25, 47.89, 49.34, 50.6, 51.7, 52.64, 53.43, 54.1
        ],
    },

    MonsterAttackSDIncrement: {
        id: 218,
        name: 'Monster Attack SD Increment',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/MonsterAttackSDIncrement.webp',
        description: "Recovers SD by max SD/'X' when killing a monster",
        valueType: 'MonsterAttackSDIncrement',
        values: [
            0, 9.14, 5.45, 3.96, 3.16, 2.66, 2.32, 2.08, 1.9, 1.76, 1.65, 1.56, 1.49, 1.43, 1.38, 1.34, 1.3, 1.28, 1.25, 1.24, 1.22
        ],
    },

    MonsterAttackLifeIncrement: {
        id: 219,
        name: 'Monster Attack Life Increment',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/MonsterAttackLifeIncrement.webp',
        description: "Restores HP by max HP/'X' when killing a monster",
        valueType: 'MonsterAttackLifeIncrement',
        values: [
            0, 43.19, 25.77, 18.73, 14.94, 12.59, 10.99, 9.84, 8.98, 8.31, 7.79, 7.37, 7.02, 6.75, 6.51, 6.32, 6.17, 6.04, 5.93, 5.84, 5.77
        ],
    },

    SoulBarrierProficiency: {
        id: 220,
        name: 'Soul Barrier Proficiency',
        maxLevel: 20,
        requires: [{ skillId: 216, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/SoulBarrierProficiency.webp',
        description: "Skill duration increases by 'X' second(s)",
        valueType: 'SoulBarrierProficiency',
        values: [
            0, 8, 14, 20, 26, 31, 36, 40, 44, 48, 51, 54, 57, 60, 62, 64, 65, 67, 68, 69, 70
        ],
    },

    MinimumWizardryIncrease: {
        id: 221,
        name: 'Minimum Wizardry Increase',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/MinimumWizardryIncrease.webp',
        description: "Min. Wizardry increases by 'X'",
        valueType: 'MinimumWizardryIncrease',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },

    MonsterAttackManaIncrement: {
        id: 222,
        name: 'Monster Attack Mana Increment',
        maxLevel: 20,
        requires: [{ skillId: 219, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/MonsterAttackManaIncrement.webp',
        description: "Recovers Mana by Max mana/'X' when killing a monster",
        valueType: 'MonsterAttackManaIncrement',
        values: [
            0, 43.19, 25.77, 18.73, 14.94, 12.59, 10.99, 9.84, 8.98, 8.31, 7.79, 7.37, 7.02, 6.75, 6.51, 6.32, 6.17, 6.04, 5.93, 5.84, 5.77
        ],
    },

    SoulBarrierMastery: {
        id: 223,
        name: 'Soul Barrier Mastery',
        maxLevel: 20,
        requires: [{ skillId: 220, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/SoulBarrierMastery.webp',
        description: "Soul Barrier skill increases max. Mana by additional 'X'%",
        valueType: 'SoulBarrierMastery',
        values: [
            0, 1.81, 3.03, 4.16, 5.22, 6.2, 7.1, 7.93, 8.69, 9.39, 10.02, 10.59, 11.1, 11.56, 11.97, 12.33, 12.65, 12.92, 13.16, 13.36, 13.52
        ],
    },

    MaximumWizardryIncrease: {
        id: 224,
        name: 'Maximum Wizardry Increase',
        maxLevel: 20,
        requires: [{ skillId: 221, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/MaximumWizardryIncrease.webp',
        description: "Max. Wizardry increases by 'X'",
        valueType: 'MaximumWizardryIncrease',
        values: [
            0, 6, 11, 15, 19, 23, 27, 30, 33, 36, 39, 41, 43, 45, 46, 48, 49, 50, 51, 52, 53
        ],
    },

    IncreasesCriticalDamageRate: {
        id: 225,
        name: 'Increases Critical Damage Rate',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/IncreasesCriticalDamageRate.webp',
        description: "Critical damage rate increases by 'X'%",
        valueType: 'IncreasesCriticalDamageRate',
        values: [
            0, 1.02, 1.27, 1.52, 1.75, 1.97, 2.18, 2.38, 2.57, 2.75, 2.92, 3.08, 3.24, 3.38, 3.52, 3.65, 3.77, 3.88, 3.99, 4.09, 4.18
        ],
    },

    RestoresAllMana: {
        id: 226,
        name: 'Restores All Mana',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/RestoresAllMana.webp',
        description: "You have a 'X'% chance to fully recover your mana any time you take damage",
        valueType: 'RestoresAllMana',
        values: [
            0, 1.02, 1.27, 1.52, 1.75, 1.97, 2.18, 2.38, 2.57, 2.75, 2.92, 3.08, 3.24, 3.38, 3.52, 3.65, 3.77, 3.88, 3.99, 4.09, 4.18
        ],
    },

    RestoresAllHP: {
        id: 227,
        name: 'Restores All HP',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/RestoresAllHP.webp',
        description: "You have a 'X'% chance to fully recover your HP any time you take damage",
        valueType: 'RestoresAllHP',
        values: [
            0, 1.02, 1.27, 1.52, 1.75, 1.97, 2.18, 2.38, 2.57, 2.75, 2.92, 3.08, 3.24, 3.38, 3.52, 3.65, 3.77, 3.88, 3.99, 4.09, 4.18
        ],
    },

    AbsorbLife: {
        id: 228,
        name: 'Absorb Life',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/AbsorbLife.webp',
        description: "When attacking the target, there is a 50% change of recovering 'X' life for each successful attack",
        valueType: 'AbsorbLife',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },

    IncreasesExcellentDamageRate: {
        id: 229,
        name: 'Increases Excellent Damage Rate',
        maxLevel: 20,
        requires: [{ skillId: 225, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/IncreasesExcellentDamageRate.webp',
        description: "Excellent damage rate increases by 'X'%",
        valueType: 'IncreasesExcellentDamageRate',
        values: [
            0, 1.02, 1.27, 1.52, 1.75, 1.97, 2.18, 2.38, 2.57, 2.75, 2.92, 3.08, 3.24, 3.38, 3.52, 3.65, 3.77, 3.88, 3.99, 4.09, 4.18
        ],
    },
    GrandMagicPowUp: {
        id: 230,
        name: 'Grand Magic PowUp',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/GrandMagicPowUp.webp',
        description: "Increases magical damage by 'X' when attacking an enemy over 4 tiles away",
        valueType: 'GrandMagicPowUp',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },

    RestoresAllSD: {
        id: 231,
        name: 'Restores All SD',
        maxLevel: 20,
        requires: [{ skillId: 227, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/RestoresAllSD.webp',
        description: "'X'% chance to fully recover SD when attacking a target",
        valueType: 'RestoresAllSD',
        values: [
            0, 1.02, 1.27, 1.52, 1.75, 1.97, 2.18, 2.38, 2.57, 2.75, 2.92, 3.08, 3.24, 3.38, 3.52, 3.65, 3.77, 3.88, 3.99, 4.09, 4.18
        ],
    },

    IncreasesDoubleDamageRate: {
        id: 232,
        name: 'Increases Double Damage Rate',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/IncreasesDoubleDamageRate.webp',
        description: "Double damage rate increases by 'X'%",
        valueType: 'IncreasesDoubleDamageRate',
        values: [
            0, 1.02, 1.27, 1.52, 1.75, 1.97, 2.18, 2.38, 2.57, 2.75, 2.92, 3.08, 3.24, 3.38, 3.52, 3.65, 3.77, 3.88, 3.99, 4.09, 4.18
        ],
    },
    AbsorbShield: {
        id: 233,
        name: 'Absorb Shield',
        maxLevel: 20,
        requires: [{ skillId: 228, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/AbsorbShield.webp',
        description: "When attacking the target, there is a 50% chance to recover 'X' SD for each successful attack",
        valueType: 'AbsorbShield',
        values: [
            0, 6, 11, 15, 19, 23, 27, 30, 33, 36, 39, 41, 43, 45, 46, 48, 49, 50, 51, 52, 53
        ],
    },

    IncreasesChanceofIgnoreDef: {
        id: 234,
        name: 'Increases Chance of Ignore Def',
        maxLevel: 20,
        requires: [{ skillId: 232, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/IncreasesChanceofIgnoreDef.webp',
        description: "Chance to inflict damage ignoring enemy's defense increases by 'X'%",
        valueType: 'IncreasesChanceofIgnoreDef',
        values: [
            0, 1.02, 1.27, 1.52, 1.75, 1.97, 2.18, 2.38, 2.57, 2.75, 2.92, 3.08, 3.24, 3.38, 3.52, 3.65, 3.77, 3.88, 3.99, 4.09, 4.18
        ],
    },

    // DK 


    TwoHandedSwordStrengthener: {
        id: 235,
        name: 'Two-Handed Sword Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/TwoHandedSwordStrengthener.webp',
        description: "Physical attack power increases by 'X' when equipped with a two-handed sword",
        valueType: 'Two-HandedSwordStrengthener',
        values: [
            0, 16, 28, 38, 48, 57, 66, 74, 81, 87, 93, 98, 103, 107, 111, 115, 118, 120, 122, 124, 126
        ],
    },

    OneHandedSwordStrengthener: {
        id: 236,
        name: 'One-Handed Sword Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/OneHandedSwordStrengthener.webp',
        description: "Physical attack power increases by 'X' while equipping One-handed Sword. (When equipping 2 swords, 50% increment will be applied to each one)",
        valueType: 'One-HandedSwordStrengthener',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },

    MaceStrengthener: {
        id: 237,
        name: 'Mace Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/MaceStrengthener.webp',
        description: "Physical attack power increases by 'X' while equipping Mace. (When equipping 2 maces, 50% increment will be applied to each one)",
        valueType: 'MaceStrengthener',
        values: [
            0, 6, 11, 15, 19, 23, 27, 30, 33, 36, 39, 41, 43, 45, 46, 48, 49, 50, 51, 52, 53
        ],
    },

    SpearStrengthener: {
        id: 238,
        name: 'Spear Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/SpearStrengthener.webp',
        description: "Physical attack power increases by 'X' while equipping Spear",
        valueType: 'SpearStrengthener',
        values: [
            0, 15, 26, 36, 45, 53, 61, 68, 75, 81, 86, 91, 96, 100, 103, 106, 109, 112, 114, 115, 117
        ],
    },
    TwoHandedSwordMastery: {
        id: 239,
        name: 'Two-Handed Sword Mastery',
        maxLevel: 20,
        requires: [{ skillId: 235, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/TwoHandedSwordMastery.webp',
        description: "'X' PvP attack power bonus will be added while equiping Two-Handed Sword",
        valueType: 'TwoHandedSwordMastery',
        values: [
            0, 15, 26, 36, 45, 53, 61, 68, 75, 81, 86, 91, 96, 100, 103, 106, 109, 112, 114, 115, 117
        ],
    },

    OneHandedSwordMastery: {
        id: 240,
        name: 'One-Handed Sword Mastery',
        maxLevel: 20,
        requires: [{ skillId: 236, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/OneHandedSwordMastery.webp',
        description: "Attack speed increases by 'X' while equipping One-handed Sword",
        valueType: 'OneHandedSwordMastery',
        values: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        ],
    },

    MaceMastery: {
        id: 241,
        name: 'Mace Mastery',
        maxLevel: 20,
        requires: [{ skillId: 237, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/MaceMastery.webp',
        description: "Increases a chance to ignore enemy defenses by 'X'% while equipping Mace",
        valueType: 'MaceMastery',
        values: [
            0, 1.2, 2.02, 2.78, 3.48, 4.13, 4.73, 5.29, 5.79, 6.26, 6.68, 7.06, 7.4, 7.71, 7.98, 8.22, 8.43, 8.62, 8.77, 8.91, 9.02
        ],
    },

    SpearMastery: {
        id: 242,
        name: 'Spear Mastery',
        maxLevel: 20,
        requires: [{ skillId: 238, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/SpearMastery.webp',
        description: "Double Damage rate increases by 'X'% while equipping Spear",
        valueType: 'SpearMastery',
        values: [
            0, 1.2, 2.02, 2.78, 3.48, 4.13, 4.73, 5.29, 5.79, 6.26, 6.68, 7.06, 7.4, 7.71, 7.98, 8.22, 8.43, 8.62, 8.77, 8.91, 9.02
        ],
    },
    SwellLifeStrengthener: {
        id: 243,
        name: 'Swell Life Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/SwellLifeStrengthener.webp',
        description: "Stamina buff effect increases by 'X'%",
        valueType: 'SwellLifeStrengthener',
        values: [
            0, 1.81, 3.03, 4.16, 5.22, 6.2, 7.1, 7.93, 8.69, 9.39, 10.02, 10.59, 11.1, 11.56, 11.97, 12.33, 12.65, 12.92, 13.16, 13.36, 13.52
        ],
    },
    SwellLifeProficiency: {
        id: 244,
        name: 'Swell Life Proficiency',
        maxLevel: 20,
        requires: [{ skillId: 243, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/SwellLifeProficiency.webp',
        description: "Swell Life skill increases Max Mana by additional 'X'%",
        valueType: 'SwellLifeProficiency',
        values: [
            0, 1.81, 3.03, 4.16, 5.22, 6.2, 7.1, 7.93, 8.69, 9.39, 10.02, 10.59, 11.1, 11.56, 11.97, 12.33, 12.65, 12.92, 13.16, 13.36, 13.52
        ],
    },

    MinimumAttackPowerIncrease: {
        id: 245,
        name: 'Minimum Attack Power Increase',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/MinimumAttackPowerIncrease.webp',
        description: "Min. attack power increases by 'X'",
        valueType: 'MinimumAttackPowerIncrease',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },
    SwellLifeMastery: {
        id: 246,
        name: 'Swell Life Mastery',
        maxLevel: 20,
        requires: [{ skillId: 244, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/SwellLifeMastery.webp',
        description: "Swell Life additionally increases max AG by 'X'",
        valueType: 'SwellLifeMastery',
        values: [
            0, 1.81, 3.03, 4.16, 5.22, 6.2, 7.1, 7.93, 8.69, 9.39, 10.02, 10.59, 11.1, 11.56, 11.97, 12.33, 12.65, 12.92, 13.16, 13.36, 13.52
        ],
    },

    MaximumAttackPowerIncrease: {
        id: 247,
        name: 'Maximum Attack Power Increase',
        maxLevel: 20,
        requires: [{ skillId: 245, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/MaximumAttackPowerIncrease.webp',
        description: "Max. attack power increases by 'X'",
        valueType: 'MaximumAttackPowerIncrease',
        values: [
            0, 6, 11, 15, 19, 23, 27, 30, 33, 36, 39, 41, 43, 45, 46, 48, 49, 50, 51, 52, 53
        ],
    },
    BattleMind: {
        id: 248,
        name: 'Battle Mind',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/BattleMind.webp',
        description: "Increases damage by 'X' when attacking an enemy within 2 tiles",
        valueType: 'BattleMind',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },

    // ELF 

    BowStrengthener: {
        id: 249,
        name: 'Bow Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/BowStrengthener.webp',
        description: "Damage increases by 'X' while equipping Bow",
        valueType: 'BowStrengthener',
        values: [
            0, 6, 11, 15, 19, 23, 27, 30, 33, 36, 39, 41, 43, 45, 46, 48, 49, 50, 51, 52, 53
        ],
    },

    CrossbowStrengthener: {
        id: 250,
        name: 'Crossbow Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/CrossbowStrengthener.webp',
        description: "Damage increases by 'X' while equipping Crossbow",
        valueType: 'CrossbowStrengthener',
        values: [
            0, 8, 15, 21, 27, 32, 37, 41, 45, 49, 52, 55, 58, 60, 63, 64, 66, 68, 69, 70, 71
        ],
    },

    BowMastery: {
        id: 251,
        name: 'Bow Mastery',
        maxLevel: 20,
        requires: [{ skillId: 249, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/BowMastery.webp',
        description: "Attack speed increases by 'X' while equipping Bow",
        valueType: 'BowMastery',
        values: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        ],
    },

    CrossbowMastery: {
        id: 252,
        name: 'Crossbow Mastery',
        maxLevel: 20,
        requires: [{ skillId: 250, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/CrossbowMastery.webp',
        description: "PvP attack power increases by additional 'X' while equipping Crossbow",
        valueType: 'CrossbowMastery',
        values: [
            0, 11, 19, 27, 34, 40, 46, 52, 57, 62, 66, 70, 73, 76, 79, 81, 83, 85, 87, 88, 89
        ],
    },
    InfinityArrowStrengthener: {
        id: 253,
        name: 'Infinity Arrow Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/InfinityArrowStrengthener.webp',
        description: "Infinity Arrow damage increases by 'X'%",
        valueType: 'InfinityArrowStrengthener',
        values: [
            0, 1.2, 2.02, 2.78, 3.48, 4.13, 4.73, 5.29, 5.79, 6.26, 6.68, 7.06, 7.4, 7.71, 7.98, 8.22, 8.43, 8.62, 8.77, 8.91, 9.02
        ],
    },

    // DL

    Marksman: {
        id: 254,
        name: 'Marksman',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/Marksman.webp',
        description: "Increases damage by 'X' when attacking an enemy over 4 tiles away",
        valueType: 'Marksman',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },
    DarkSpiritStrengthener: {
        id: 255,
        name: 'Dark Spirit Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/DarkSpiritStrengthener.webp',
        description: "Dark Spirit's attack power increases by 'X'",
        valueType: 'DarkSpiritStrengthener',
        values: [
            0, 6, 11, 15, 19, 23, 27, 30, 33, 36, 39, 41, 43, 45, 46, 48, 49, 50, 51, 52, 53
        ],
    },

    ScepterStrengthener: {
        id: 256,
        name: 'Scepter Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/ScepterStrengthener.webp',
        description: "Attack power increases by 'X' while equipping Scepter",
        valueType: 'ScepterStrengthener',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },

    UseScepterPetStrengthener: {
        id: 257,
        name: 'Use Scepter : Pet Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/UseScepterPetStrengthener.webp',
        description: "Dark Spirit's attack power increases by 'X' while equipping Scepter",
        valueType: 'UseScepterPetStrengthener',
        values: [
            0, 6, 11, 15, 19, 23, 27, 30, 33, 36, 39, 41, 43, 45, 46, 48, 49, 50, 51, 52, 53
        ],
    },
    DarkSpiritStrengthener2: {
        id: 258,
        name: 'Dark Spirit Strengthener (2)',
        maxLevel: 20,
        requires: [{ skillId: 255, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/DarkSpiritStrengthener2.webp',
        description: "Dark Spirit's critical damage rate increases by additional 'X'%",
        valueType: 'DarkSpiritStrengthener2',
        values: [
            0, 1.81, 3.03, 4.16, 5.22, 6.2, 7.1, 7.93, 8.69, 9.39, 10.02, 10.59, 11.1, 11.56, 11.97, 12.33, 12.65, 12.92, 13.16, 13.36, 13.52
        ],
    },

    ScepterMastery: {
        id: 259,
        name: 'Scepter Mastery',
        maxLevel: 20,
        requires: [{ skillId: 256, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/ScepterMastery.webp',
        description: "PvP attack power increases by additional 'X' while equipping Scepter",
        valueType: 'ScepterMastery',
        values: [
            0, 11, 19, 27, 34, 40, 46, 52, 57, 62, 66, 70, 73, 76, 79, 81, 83, 85, 87, 88, 89
        ],
    },

    CommandAttackIncrease: {
        id: 260,
        name: 'Command Attack Increase',
        maxLevel: 20,
        requires: [{ skillId: 257, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/CommandAttackIncrease.webp',
        description: "When a scepter is equipped, DMG increases by 1 for every 'X' Cmd stat",
        valueType: 'CommandAttackIncrease',
        values: [
            0, 38, 26, 20, 17, 14, 13, 12, 11, 10, 9
        ],
    },
    DarkSpiritStrengthener3: {
        id: 261,
        name: 'Dark Spirit Strengthener (3)',
        maxLevel: 20,
        requires: [{ skillId: 258, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/DarkSpiritStrengthener3.webp',
        description: "Dark Spirit's excellent damage rate increases by additional 'X'%",
        valueType: 'DarkSpiritStrengthener3',
        values: [
            0, 1.2, 2.02, 2.78, 3.48, 4.13, 4.73, 5.29, 5.79, 6.26, 6.68, 7.06, 7.4, 7.71, 7.98, 8.22, 8.43, 8.62, 8.77, 8.91, 9.02
        ],
    },
    DarkSpiritStrengthener5: {
        id: 262,
        name: 'Dark Spirit Strengthener (5)',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/DarkSpiritStrengthener5.webp',
        description: "Dark Spirit's double damage rate increases by additional 'X'%",
        valueType: 'DarkSpiritStrengthener5',
        values: [
            0, 1.2, 2.02, 2.78, 3.48, 4.13, 4.73, 5.29, 5.79, 6.26, 6.68, 7.06, 7.4, 7.71, 7.98, 8.22, 8.43, 8.62, 8.77, 8.91, 9.02
        ],
    },

    PetDurabilityStrengthener: {
        id: 263,
        name: 'Pet Durability Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/PetDurabilityStrengthener.webp',
        description: "Pet's life reduction speed decreases by 'X'%",
        valueType: 'PetDurabilityStrengthener',
        values: [
            0, 12.04, 20.18, 27.76, 34.8, 41.31, 47.33, 52.86, 57.94, 62.57, 66.78, 70.59, 74.02, 77.09, 79.82, 82.23, 84.34, 86.16, 87.73, 89.05, 90.16
        ],
    },
    SpiritLord: {
        id: 264,
        name: 'Spirit Lord',
        maxLevel: 20,
        requires: [{ skillId: 262, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/SpiritLord.webp',
        description: "Dark Spirit's chance to inflict dmg ignoring enemy's defense increases by additional 'X'%",
        valueType: 'SpiritLord',
        values: [
            0, 1.02, 1.27, 1.52, 1.75, 1.97, 2.18, 2.38, 2.57, 2.75, 2.92, 3.08, 3.24, 3.38, 3.52, 3.65, 3.77, 3.88, 3.99, 4.09, 4.18
        ],
    },

    DarkSpiritStrengthener4: {
        id: 265,
        name: 'Dark Spirit Strengthener (4)',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/DarkSpiritStrengthener4.webp',
        description: "Dark Spirit's attack speed increases by additional 'X'",
        valueType: 'DarkSpiritStrengthener4',
        values: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
        ],
    },

    // SUMMONER

    StickStrengthener: {
        id: 266,
        name: 'Stick Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/StickStrengthener.webp',
        description: "Wizardry increases by 'X' while equipping Stick",
        valueType: 'StickStrengthener',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },

    OtherWorldTomeStrengthener: {
        id: 267,
        name: 'Other World Tome Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/OtherWorldTomeStrengthener.webp',
        description: "Curse increase by 'X' while equipping the Other World Tome",
        valueType: 'OtherWorldTomeStrengthener',
        values: [
            0, 8, 15, 21, 27, 32, 37, 41, 45, 49, 52, 55, 58, 60, 63, 64, 66, 68, 69, 70, 71
        ],
    },
    StickMastery: {
        id: 268,
        name: 'Stick Mastery',
        maxLevel: 20,
        requires: [{ skillId: 266, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/StickMastery.webp',
        description: "PvP attack power increases by additional 'X' while equipping Stick",
        valueType: 'StickMastery',
        values: [
            0, 11, 19, 27, 34, 40, 46, 52, 57, 62, 66, 70, 73, 76, 79, 81, 83, 85, 87, 88, 89
        ],
    },

    OtherWorldMastery: {
        id: 269,
        name: 'Other World Mastery',
        maxLevel: 20,
        requires: [{ skillId: 267, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/OtherWorldMastery.webp',
        description: "Attack speed increases by 'X' while equipping the Other World Tome",
        valueType: 'OtherWorldMastery',
        values: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        ],
    },
    BerserkerStrengthener: {
        id: 270,
        name: 'Berserker Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/BerserkerStrengthener.webp',
        description: "Berserker skill increases Wizardry by additional 'X'",
        valueType: 'BerserkerStrengthener',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },

    DarknessStrengthener: {
        id: 271,
        name: 'Darkness Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/DarknessStrengthener.webp',
        description: "Increases Curse Damage by 'X' when using Darkness skill",
        valueType: 'DarknessStrengthener',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },

    MinimumWizardryCurseIncrease: {
        id: 272,
        name: 'Minimum Wizardry/Curse Increase',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/MinimumWizardryCurseIncrease.webp',
        description: "Minimum Wizardry and Curse increases by 'X'",
        valueType: 'MinimumWizardryCurseIncrease',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },
    BerserkerMastery: {
        id: 273,
        name: 'Berserker Mastery',
        maxLevel: 20,
        requires: [{ skillId: 270, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/BerserkerMastery.webp',
        description: "Berserker skill increases attack speed by 'X', additionally reduces HP and Defense Decrease effect",
        valueType: 'BerserkerMastery',
        values: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        ],
    },

    DarknessMastery: {
        id: 274,
        name: 'Darkness Mastery',
        maxLevel: 20,
        requires: [{ skillId: 271, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/DarknessMastery.webp',
        description: "Increases defense by 'X' when using Darkness skill and removes HP drop effect",
        valueType: 'DarknessMastery',
        values: [
            0, 40, 67, 92, 115, 137, 157, 176, 192, 208, 222, 235, 246, 256, 265, 273, 280, 286, 292, 296, 300
        ],
    },

    MaximumWizardryCurseIncrease: {
        id: 275,
        name: 'Maximum Wizardry/Curse Increase',
        maxLevel: 20,
        requires: [{ skillId: 272, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/MaximumWizardryCurseIncrease.webp',
        description: "Maximum Wizardry and Curse increase by 'X'",
        valueType: 'MaximumWizardryCurseIncrease',
        values: [
            0, 6, 11, 15, 19, 23, 27, 30, 33, 36, 39, 41, 43, 45, 46, 48, 49, 50, 51, 52, 53
        ],
    },
    PainofCurse: {
        id: 276,
        name: 'Pain of Curse',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/PainofCurse.webp',
        description: "Increases Wizardry and Curse by 'X' when attacking an enemy over 4 tiles away",
        valueType: 'PainofCurse',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },

    // RF
    EquippedWeaponStrengthener: {
        id: 277,
        name: 'Equipped Weapon Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/EquippedWeaponStrengthener.webp',
        description: "Equipping the fist weapon increases attack power by 'X'",
        valueType: 'EquippedWeaponStrengthener',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },

    DefenseSuccessRateIncreasePowUp: {
        id: 278,
        name: 'Defense Success Rate Increase PowUp',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/DefenseSuccessRateIncreasePowUp.webp',
        description: "Increases defense success rate by 'X'%",
        valueType: 'DefenseSuccessRateIncreasePowUp',
        values: [
            0, 5.76, 9.5, 13.02, 16.33, 19.43, 22.33, 25.04, 27.56, 29.9, 32.07, 34.07, 35.91, 37.6, 39.14, 40.54, 41.81, 42.95, 43.97, 44.88, 45.68
        ],
    },
    EquippedWeaponMastery: {
        id: 279,
        name: 'Equipped Weapon Mastery',
        maxLevel: 20,
        requires: [{ skillId: 277, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/EquippedWeaponMastery.webp',
        description: "Equipping the fist weapon increases the chance of dealing double damage by 'X'%",
        valueType: 'EquippedWeaponMastery',
        values: [
            0, 1.2, 2.02, 2.78, 3.48, 4.13, 4.73, 5.29, 5.79, 6.26, 6.68
        ],
    },

    DefSuccessRateIncreaseMastery: {
        id: 280,
        name: 'Def Success Rate Increase Mastery',
        maxLevel: 20,
        requires: [{ skillId: 278, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/DefSuccessRateIncreaseMastery.webp',
        description: "The increase defense success rate skill increases your defense rate by 'X'",
        valueType: 'DefSuccessRateIncreaseMastery',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },

    StaminaIncreaseStrengthener: {
        id: 281,
        name: 'Stamina Increase Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/StaminaIncreaseStrengthener.webp',
        description: "The increase HP skill increases 'STA' by 'X'",
        valueType: 'StaminaIncreaseStrengthener',
        values: [
            0, 11, 19, 27, 34, 40, 46, 52, 57, 62, 66, 70, 73, 76, 79, 81, 83, 85, 87, 88, 89
        ],
    },
    LancePowUp: {
        id: 282,
        name: 'Lance PowUp',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/LancePowUp.webp',
        description: "Physical attack power increases by 'X' while equipping Lance",
        valueType: 'LancePowUp',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },

    CircleShieldPowUp: {
        id: 283,
        name: 'Circle Shield PowUp',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/CircleShieldPowUp.webp',
        description: "Increase Enemy's AG reduction effect by 'X'",
        valueType: 'CircleShieldPowUp',
        values: [
            0, 8, 14, 20, 26, 31, 36, 40, 44, 48, 51, 54, 57, 60, 62, 64, 65, 67, 68, 69, 70
        ],
    },
    LanceMastery: {
        id: 284,
        name: 'Lance Mastery',
        maxLevel: 20,
        requires: [{ skillId: 282, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/LanceMastery.webp',
        description: "Double Damage rate increases by 'X'% while equipping Lance",
        valueType: 'LanceMastery',
        values: [
            0, 1.2, 2.02, 2.78, 3.48, 4.13, 4.73, 5.29, 5.79, 6.26, 6.68, 7.06, 7.4, 7.71, 7.98, 8.22, 8.43, 8.62, 8.77, 8.91, 9.02
        ],
    },

    CircleShieldMastery: {
        id: 285,
        name: 'Circle Shield Mastery',
        maxLevel: 20,
        requires: [{ skillId: 283, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/CircleShieldMastery.webp',
        description: "Increase the chance of AG reduction effect by 'X'% Point(s)",
        valueType: 'CircleShieldMastery',
        values: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
        ],
    },
    WrathPowUp: {
        id: 286,
        name: 'Wrath PowUp',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/WrathPowUp.webp',
        description: "Skill duration increases by 'X' second(s)",
        valueType: 'WrathPowUp',
        values: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
        ],
    },
    WrathProficiency: {
        id: 287,
        name: 'Wrath Proficiency',
        maxLevel: 20,
        requires: [{ skillId: 286, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/WrathProficiency.webp',
        description: "Reduces the Cooldown time of Wrath skill by 'X' sec",
        valueType: 'WrathProficiency',
        values: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
        ],
    },
    WrathMastery: {
        id: 288,
        name: 'Wrath Mastery',
        maxLevel: 20,
        requires: [{ skillId: 287, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/WrathMastery.webp',
        description: "Defense does not drop when Wrath skill is used. (Spends 10 points at once to learn the skill)",
        valueType: 'WrathMastery',
        values: [
            0,
        ],
    },
    IncreasesRetaliationDMG: {
        id: 289,
        name: 'Increases Retaliation DMG',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/IncreasesRetaliationDMG.webp',
        description: "Increases the DMG of Retribution by 'X'%",
        valueType: 'IncreasesRetaliationDMG',
        values: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        ],
    },

    IncreasesRageDMG: {
        id: 290,
        name: 'Increases Rage DMG',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/IncreasesRageDMG.webp',
        description: "Increases the DMG of rage by 'X'%",
        valueType: 'IncreasesRageDMG',
        values: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        ],
    },

    // RUNE

    RuneMaceStrengthener: {
        id: 291,
        name: 'Rune Mace Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/RuneMaceStrengthener.webp',
        description: "Wizardry increases by 'X' when Rune Mace is equipped",
        valueType: 'RuneMaceStrengthener',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },

    RuneMaceMastery: {
        id: 292,
        name: 'Rune Mace Mastery',
        maxLevel: 20,
        requires: [{ skillId: 291, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/RuneMaceMastery.webp',
        description: "Increase Double DMG chance by 'X'% when Rune Mace is equipped",
        valueType: 'RuneMaceMastery',
        values: [
            0, 1.2, 2.02, 2.78, 3.48, 4.13, 4.73, 5.29, 5.79, 6.26, 6.68
        ],
    },

    GrandMagicPowUp: {
        id: 293,
        name: 'Grand Magic PowUp',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/GrandMagicPowUp.webp',
        description: "Increases magical damage by 'X' when attacking an enemy over 4 tiles away",
        valueType: 'GrandMagicPowUp',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },

    // SLAYER

    ShortSwordStrengthener: {
        id: 294,
        name: 'Short Sword Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/ShortSwordStrengthener.webp',
        description: "While equipped with a Short Sword, the damage is increased by 'X'. A 50% per two short swords",
        valueType: 'ShortSwordStrengthener',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },

    ShortSwordMastery: {
        id: 295,
        name: 'Short Sword Mastery',
        maxLevel: 20,
        requires: [{ skillId: 294, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/ShortSwordMastery.webp',
        description: "While equipped with a Short Sword the attack speed is increased by 'X'",
        valueType: 'ShortSwordMastery',
        values: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        ],
    },

    // GUN CRUSHER

    MagicGunStrengthener: {
        id: 296,
        name: 'Magic Gun Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/MagicGunStrengthener.webp',
        description: "Magical Power increased by 'X' when equipped with a Magic Gun. (When 2 magic items are equipped, 50% is applied)",
        valueType: 'MagicGunStrengthener',
        values: [
            0, 8, 9, 10, 11, 12, 14, 15, 17, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 41
        ],
    },

    MagicGunMastery: {
        id: 297,
        name: 'Magic Gun Mastery',
        maxLevel: 20,
        requires: [{ skillId: 297, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/MagicGunMastery.webp',
        description: "Increases the chance of double damage by 'X'% when equipped with a Magic Gun",
        valueType: 'MagicGunMastery',
        values: [
            0, 1.16, 2.08, 2.94, 3.73, 4.47, 5.15, 5.78, 6.35, 6.88, 7.35
        ],
    },

    // KUNDUN

    MagicBookStrengthener: {
        id: 298,
        name: 'Magic Book Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/MagicBookStrengthener.webp',
        description: "Attack speed is increased by 'X' while wearing Magic Book",
        valueType: 'MagicBookStrengthener',
        values: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        ],
    },

    MagicBookMastery: {
        id: 299,
        name: 'Magic Book Mastery',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/MagicBookMastery.webp',
        description: "Double damage chance increases by 'X' when wearing Magic Book",
        valueType: 'MagicBookMastery',
        values: [
            0, 1.2, 2.02, 2.78, 3.48, 4.13, 4.73, 5.29, 5.79, 6.26, 6.68
        ],
    },
    ReflectionBarrierStrengthener: {
        id: 300,
        name: 'Reflection Barrier Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/ReflectionBarrierStrengthener.webp',
        description: "Damage reflectance increased by an additional 'X'%",
        valueType: 'ReflectionBarrierStrengthener',
        values: [
            0, 1.81, 3.03, 4.16, 5.22, 6.2, 7.1, 7.93, 8.69, 9.39, 10.02, 10.59, 11.1, 11.56, 11.97, 12.33, 12.65, 12.92, 13.16, 13.36, 13.52
        ],
    },

    ReflectionBarrierSkills: {
        id: 301,
        name: 'Reflection Barrier Skills',
        maxLevel: 20,
        requires: [{ skillId: 300, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/ReflectionBarrierSkills.webp',
        description: "Duration increased by 'X' seconds",
        valueType: 'ReflectionBarrierSkills',
        values: [
            0, 8, 14, 20, 26, 31, 36, 40, 44, 48, 51, 54, 57, 60, 62, 64, 65, 67, 68, 69, 70
        ],
    },

    ReflectionBarrierMastery: {
        id: 302,
        name: 'Reflection Barrier Mastery',
        maxLevel: 20,
        requires: [{ skillId: 301, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/ReflectionBarrierMastery.webp',
        description: "The maximum mana is increased by an additional 'X'% while using the Reflection Barrier skill",
        valueType: 'ReflectionBarrierMastery',
        values: [
            0, 1.81, 3.03, 4.16, 5.22, 6.2, 7.1, 7.93, 8.69, 9.39, 10.02, 10.59, 11.1, 11.56, 11.97, 12.33, 12.65, 12.92, 13.16, 13.36, 13.52
        ],
    },

    // LEMURIA

    OrbStrengthener: {
        id: 303,
        name: 'Orb Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/OrbStrengthener.webp',
        description: "Increases magic power by 'X' while wearing an orb",
        valueType: 'OrbStrengthener',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },

    OrbMastery: {
        id: 304,
        name: 'Orb Mastery',
        maxLevel: 20,
        requires: [{ skillId: 303, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/OrbMastery.webp',
        description: "Attack speed increased by 'X' while wearing an orb",
        valueType: 'OrbMastery',
        values: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        ],
    },
    // IK
    BladeStrengthener: {
        id: 305,
        name: 'Blade Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/BladeStrengthener.webp',
        description: "While equipped with a Blade, the damage is increased by 'X'.",
        valueType: 'BladeStrengthener',
        values: [
            0, 18, 25, 33, 42, 52, 62, 72, 84, 95, 107, 120, 132, 145, 159, 172, 186, 200, 215, 230, 244
        ],
    },

    BladeMastery: {
        id: 306,
        name: 'Blade Mastery',
        maxLevel: 20,
        requires: [{ skillId: 306, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/BladeMastery.webp',
        description: "Double damage chance increases by 'X'% when wearing a blade",
        valueType: 'BladeMastery',
        values: [
            0, 1.08, 1.69, 2.26, 2.78, 3.27, 3.72, 4.14, 4.52, 4.87, 5.18
        ],
    },

    // ALCHEMIST

    WandStrengthener: {
        id: 307,
        name: 'Wand Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/WandStrengthener.webp',
        description: "Wizardry increases by 'X' when wearing a wand",
        valueType: 'WandStrengthener',
        values: [
            0, 5, 9, 13, 16, 19, 22, 25, 27, 29, 32, 34, 35, 37, 39, 40, 41, 42, 43, 44, 45
        ],
    },

    ElixirStrengthener: {
        id: 308,
        name: 'Elixir Strengthener',
        maxLevel: 20,
        requires: [],
        rowRequirements: {},
        image: '/3rd/red/ElixirStrengthener.webp',
        description: "Attack speed is increased by 'X' when wearing an Elixir",
        valueType: 'ElixirStrengthener',
        values: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        ],
    },
    ElixirMastery: {
        id: 309,
        name: 'Elixir Mastery',
        maxLevel: 20,
        requires: [{ skillId: 308, requiredLevel: 10 }],
        rowRequirements: {},
        image: '/3rd/red/ElixirMastery.webp',
        description: "Double damage chance increases by 'X' when wearing an Elixir",
        valueType: 'ElixirMastery',
        values: [
            0, 1.2, 2.02, 2.78, 3.48, 4.13, 4.73, 5.29, 5.79, 6.26, 6.68
        ],
    },
};

// ========================================
// 🛠️ FUNCIONES DE VALIDACIÓN DE REQUISITOS
// ========================================

// Función para verificar requisitos de fila
export const checkRowRequirements = (skill, skillLevels, skills) => {
    // Si no tiene requisitos de fila, está desbloqueado
    if (!skill.rowRequirements || skill.rowRequirements.minRow === 0) {
        return { canUnlock: true, message: '' };
    }

    const { minRow, minLevel } = skill.rowRequirements;
    const targetRow = minRow - 1; // La fila anterior a la requerida

    // Buscar todos los skills en la fila objetivo
    const skillsInTargetRow = skills.filter(s => s.row === targetRow);

    // Verificar si hay al menos un skill con el nivel requerido en esa fila
    const hasRequiredSkillInRow = skillsInTargetRow.some(s => {
        const currentLevel = skillLevels[s.id] || 0;
        return currentLevel >= minLevel;
    });

    if (!hasRequiredSkillInRow) {
        return {
            canUnlock: false,
            message: `Necesitas al menos 1 skill +${minLevel} en la fila ${targetRow + 1}`
        };
    }

    return { canUnlock: true, message: '' };
};

// Función para verificar requisitos específicos de skills
export const checkSpecificRequirements = (skill, skillLevels) => {
    if (!skill.requires || skill.requires.length === 0) {
        return { canUnlock: true, message: '' };
    }

    for (const requirement of skill.requires) {
        const currentLevel = skillLevels[requirement.skillId] || 0;
        if (currentLevel < requirement.requiredLevel) {
            const requiredSkill = Object.values(SKILLS_DATABASE).find(s => s.id === requirement.skillId);
            return {
                canUnlock: false,
                message: `Necesitas ${requiredSkill?.name || 'Skill desconocido'} +${requirement.requiredLevel}`
            };
        }
    }

    return { canUnlock: true, message: '' };
};

// Función principal para verificar si un skill puede ser desbloqueado
export const canUnlockSkill = (skill, skillLevels, skills) => {
    // 1. Verificar requisitos de fila
    const rowCheck = checkRowRequirements(skill, skillLevels, skills);
    if (!rowCheck.canUnlock) {
        return rowCheck;
    }

    // 2. Verificar requisitos específicos
    const specificCheck = checkSpecificRequirements(skill, skillLevels);
    if (!specificCheck.canUnlock) {
        return specificCheck;
    }

    return { canUnlock: true, message: 'Puede ser desbloqueado' };
};

// Función simple para obtener el valor según el nivel
export const getSkillValue = (skill, level) => {
    if (level < 0 || level > skill.maxLevel) return 0;
    return skill.values[level] || 0;
};

// ========================================
// 🗂️ CONFIGURACIÓN DE SKILLS POR PERSONAJE
// ========================================
export const getSkillRowInfo = (skill) => {
    return {
        hasRowRequirement: skill.rowRequirements && skill.rowRequirements.minRow > 0,
        requiredRow: skill.rowRequirements?.minRow || 0,
        requiredLevel: skill.rowRequirements?.minLevel || 0
    };
};