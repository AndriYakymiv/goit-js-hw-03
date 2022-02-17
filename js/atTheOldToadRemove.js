const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {

  for (let i = 0; i < this.potions.length; i += 1) {
    if (potionName === this.potions[i]) {
      this.potions.splice(i, 1)
    }

  }

  },
};