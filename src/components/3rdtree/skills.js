
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
        image: '/src/assets/3rd/green/DefenseRatePVP.png',
        description: 'Incrementa el PVP defense rate del personaje.',
        valueType: 'DefenseratePVP',
        values: [0, 614, 1029, 1415, 1774, 2106, 2413, 2695, 2954, 3190, 3405, 3600, 3775, 3931, 4070, 4193, 4301, 4394, 4474, 4541, 4598]
    },
    DurabilityReduction: {
        id: 2,
        name: 'Durability Reduction (1)',
        maxLevel: 20,
        requires: [],
        rowRequirements: { minRow: 0, minLevel: 0 }, // Fila 0, sin requisitos
        image: '/src/assets/3rd/green/DurabilityReduction.png',
        description: 'La velocidad de reducción de durabilidad de las armas y armaduras equipadas disminuye en un %',
        valueType: 'DurabilityReductionRate',
        values: [0, 18.06, 30.27, 41.64, 52.19, 61.97, 70.99, 79.29, 86.90, 93.85, 100.17, 105.89, 111.03, 115.64, 119.73, 123.34, 126.50, 129.24, 131.59, 133.58, 135.24]
    },
    MaximumSDIncrease: {
        id: 3,
        name: 'Maximum SD Increase',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: { minRow: 1, minLevel: 10 }, // Fila 2, necesita skill +10 en fila anterior
        image: '/src/assets/3rd/green/MaximumSDIncrease.png',
        description: 'Incrementa el SD máximo del personaje.',
        valueType: 'MaximumSDIncrease',
        values: [0, 511, 857, 1179, 1478, 1755, 2011, 2246, 2462, 2659, 2838, 3000, 3145, 3276, 3392, 3494, 3584, 3661, 3728, 3784, 3831]
    },
    autoManaRecovery: {
        id: 4,
        name: 'MAuto Mana Recovery Increase',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: { minRow: 1, minLevel: 10 }, // Fila 2, necesita skill +10 en fila anterior
        image: '/src/assets/3rd/green/recoveryMana.png',
        description: 'Aumenta la recuperacion de mana.',
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
        rowRequirements: { minRow: 2, minLevel: 10 }, // Fila 2, necesita skill +10 en fila anterior
        image: '/src/assets/3rd/green/DurabilityReduction2.png',
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
        rowRequirements: { minRow: 2, minLevel: 10 }, // Fila 2, necesita skill +10 en fila anterior
        image: '/src/assets/3rd/green/SDRecoverySpeedIncrease.png',
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
        rowRequirements: { minRow: 2, minLevel: 10 }, // Fila 2, necesita skill +10 en fila anterior
        image: '/src/assets/3rd/green/recoveryHP.png',
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
        rowRequirements: { minRow: 3, minLevel: 10 }, // Fila 2, necesita skill +10 en fila anterior
        image: '/src/assets/3rd/green/DefenseIncrease.png',
        description: 'Defense Increase by',
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
        rowRequirements: { minRow: 3, minLevel: 10 }, // Fila 2, necesita skill +10 en fila anterior
        image: '/src/assets/3rd/green/ElementalDEFIncrease.png',
        description: 'Elemental DEF Increase by',
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
        rowRequirements: { minRow: 3, minLevel: 10 }, // Fila 2, necesita skill +10 en fila anterior
        image: '/src/assets/3rd/green/AutomaticAGRecoveryIncrease.png',
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
        rowRequirements: { minRow: 4, minLevel: 10 }, // Fila 2, necesita skill +10 en fila anterior
        image: '/src/assets/3rd/green/DurabilityReduction3.png',
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
        rowRequirements: { minRow: 4, minLevel: 10 }, // Fila 2, necesita skill +10 en fila anterior
        image: '/src/assets/3rd/green/DefenseSuccessRateIncrease.png',
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
        rowRequirements: { minRow: 5, minLevel: 10 }, // Fila 2, necesita skill +10 en fila anterior
        image: '/src/assets/3rd/green/ArmorSetBonusIncrease.png',
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
        rowRequirements: { minRow: 5, minLevel: 10 }, // Fila 2, necesita skill +10 en fila anterior
        image: '/src/assets/3rd/green/Revenge.png',
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
        rowRequirements: { minRow: 6, minLevel: 10 }, // Fila 2, necesita skill +10 en fila anterior
        image: '/src/assets/3rd/green/energy.png',
        description: 'Energy Increase by',
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
        rowRequirements: { minRow: 6, minLevel: 10 }, // Fila 2, necesita skill +10 en fila anterior
        image: '/src/assets/3rd/green/vitality.png',
        description: 'Stamina Increase by',
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
        rowRequirements: { minRow: 6, minLevel: 10 }, // Fila 2, necesita skill +10 en fila anterior
        image: '/src/assets/3rd/green/agility.png',
        description: 'Agility Increase by',
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
        rowRequirements: { minRow: 6, minLevel: 10 }, // Fila 2, necesita skill +10 en fila anterior
        image: '/src/assets/3rd/green/strength.png',
        description: 'Strength Increase by',
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
    wings3def: {
        id: 19,
        name: 'Wings 3rd Defense',
        maxLevel: 20,
        requires: [], // Requisito específico
        rowRequirements: { minRow: 7, minLevel: 10 }, // Fila 2, necesita skill +10 en fila anterior
        image: '/src/assets/3rd/green/wings3def.png',
        description: 'Wings 3rd is equiped , defense increase by',
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
        rowRequirements: { minRow: 7, minLevel: 10 }, // Fila 2, necesita skill +10 en fila anterior
        image: '/src/assets/3rd/green/ProtectionShield.png',
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
        image: '/src/assets/3rd/green/wings3atk.png',
        description: 'Wings 3rd is equiped , attack increase by',
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
        image: '/src/assets/3rd/green/SteelArmor.png',
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
        image: '/src/assets/3rd/green/ShieldBlock.png',
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
        rowRequirements: { minRow: 7, minLevel: 10 }, // Fila 2, necesita skill +10 en fila anterior
        image: '/src/assets/3rd/green/WeaponBlockRate.png',
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