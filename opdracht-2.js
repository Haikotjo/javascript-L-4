// Opdracht 2a
let totalSold = 0;

for (let i = 0; i < inventory.length; i++) {
    totalSold += inventory[i].sold;
}
console.log(totalSold);

// Opdracht 2B
const totalSoldText = document.getElementById("totalSold")
totalSoldText.textContent = `Deze ellende is groen ${totalSold}`

//Opdracht 2c
let totalBought = 0;

for (let i = 0; i < inventory.length; i++) {
    totalBought += inventory[i].originalStock;
}
console.log(totalBought);

//Opdracht 2D
const totalBoughtText = document.getElementById("totalBought")
totalBoughtText.textContent = `Deze shit is blauw ${totalBought}`

// Opdracht 2E
const toltalNeedToSell = totalBought -  totalSold
console.log(toltalNeedToSell)
const toltalNeedToSellText = document.getElementById("toltalNeedToSell")
toltalNeedToSellText.textContent = `Deze shit is rood ${toltalNeedToSell}`