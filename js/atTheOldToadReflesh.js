const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {

    const searchId = this.potions.indexOf(oldName);
    this.potions.splice(searchId, 1, newName)



  },
};