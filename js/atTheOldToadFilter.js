const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },


  addPotion(newPotion) {
    for (const potion of this.potions) {
        if (newPotion.name === potion.name) {
          return `Error! Potion ${newPotion.name} is already in your inventory!`;
        }
    }

    this.potions.push(newPotion);
  },


  removePotion(potionName) {
    let potionIndex = "";
   for (const potion of this.potions) {
   if(Object.values(potion).includes(potionName)){
   potionIndex = this.potions.indexOf(potion);
   this.potions.splice(potionIndex, 1);
   return;
   }
   }
    return `Potion ${potionName} is not in inventory!`;
  },


  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
    if (potion.name === oldName) {
    potion.name = newName;
    return ;
    }
  }
  return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};
