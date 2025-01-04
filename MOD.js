const RubyMod = {
    onLoad: function() {
        this.registerItems();
        this.registerRecipes();
    },

    registerItems: function() {
        const rubyMaterial = {
            durability: 1000,
            efficiency: 6,
            attackDamage: 4,
            enchantability: 15,
            miningLevel: 2,
        };

        this.ruby = new Item("ruby", {
            type: "gem",
            group: "materials",
            texture: this.getRubyTexture(),
        });

        this.rubyPickaxe = new Item("ruby_pickaxe", {
            type: "pickaxe",
            material: rubyMaterial,
            group: "tools",
            texture: this.getRubyPickaxeTexture(),
        });

        this.rubyAxe = new Item("ruby_axe", {
            type: "axe",
            material: rubyMaterial,
            group: "tools",
            texture: this.getRubyAxeTexture(),
        });

        this.rubySword = new Item("ruby_sword", {
            type: "sword",
            material: rubyMaterial,
            group: "combat",
            texture: this.getRubySwordTexture(),
        });

        this.rubyHelmet = new Item("ruby_helmet", {
            type: "armor",
            material: rubyMaterial,
            slot: "head",
            texture: this.getRubyHelmetTexture(),
        });

        this.rubyChestplate = new Item("ruby_chestplate", {
            type: "armor",
            material: rubyMaterial,
            slot: "chest",
            texture: this.getRubyChestplateTexture(),
        });

        this.rubyLeggings = new Item("ruby_leggings", {
            type: "armor",
            material: rubyMaterial,
            slot: "legs",
            texture: this.getRubyLeggingsTexture(),
        });

        this.rubyBoots = new Item("ruby_boots", {
            type: "armor",
            material: rubyMaterial,
            slot: "feet",
            texture: this.getRubyBootsTexture(),
        });
    },

    registerRecipes: function() {
        const recipeList = [
            {
                output: "ruby_pickaxe",
                pattern: ["RRR", " S ", " S "],
                key: {
                    R: "ruby",
                    S: "stick",
                },
            },
            {
                output: "ruby_axe",
                pattern: ["RR ", "RS ", " S "],
                key: {
                    R: "ruby",
                    S: "stick",
                },
            },
            {
                output: "ruby_sword",
                pattern: [" R ", " R ", " S "],
                key: {
                    R: "ruby",
                    S: "stick",
                },
            },
            {
                output: "ruby_helmet",
                pattern: ["RRR", "R R", "   "],
                key: {
                    R: "ruby",
                },
            },
            {
                output: "ruby_chestplate",
                pattern: ["R R", "RRR", "RRR"],
                key: {
                    R: "ruby",
                },
            },
            {
                output: "ruby_leggings",
                pattern: ["RRR", "R R", "R R"],
                key: {
                    R: "ruby",
                },
            },
            {
                output: "ruby_boots",
                pattern: ["   ", "R R", "R R"],
                key: {
                    R: "ruby",
                },
            },
        ];

        for (const recipe of recipeList) {
            Recipe.register(recipe.output, recipe.pattern, recipe.key);
        }
    },

    getRubyTexture: function() {
        return "https://raw.githubusercontent.com/adsf1234-hacker/ECHO-CLIENT-MODS/main/ruby.png";
    },
    
    getRubyPickaxeTexture: function() {
        return "https://raw.githubusercontent.com/adsf1234-hacker/ECHO-CLIENT-MODS/main/ruby_pickaxe.png";
    },
    
    getRubyAxeTexture: function() {
        return "https://raw.githubusercontent.com/adsf1234-hacker/ECHO-CLIENT-MODS/main/ruby_axe.png";
    },
    
    getRubySwordTexture: function() {
        return "https://raw.githubusercontent.com/adsf1234-hacker/ECHO-CLIENT-MODS/main/ruby_sword.png";
    },
    
    getRubyHelmetTexture: function() {
        return "https://raw.githubusercontent.com/adsf1234-hacker/ECHO-CLIENT-MODS/main/ruby_helmet.png";
    },
    
    getRubyChestplateTexture: function() {
        return "https://raw.githubusercontent.com/adsf1234-hacker/ECHO-CLIENT-MODS/main/ruby_chestplate.png";
    },
    
    getRubyLeggingsTexture: function() {
        return "https://raw.githubusercontent.com/adsf1234-hacker/ECHO-CLIENT-MODS/main/ruby_leggings.png";
    },
    
    getRubyBootsTexture: function() {
        return "https://raw.githubusercontent.com/adsf1234-hacker/ECHO-CLIENT-MODS/main/ruby_boots.png";
    },
};

RubyMod.onLoad();
