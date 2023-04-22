const totalTv = `${inventory[1].brand} ${inventory[1].type} ${inventory[1].name}`
console.log(totalTv)

function formatPrice(price){
    return `€${price},-`;
}

console.log(formatPrice(356))

function screenSize(sizes){
    let result = '';

    if (sizes.length === 1) {
        result += `${sizes[0]} inch (${sizes[0] * 2.54} cm)`;
    } else {
        for (let i = 0; i < sizes.length; i++) {
            result += `${sizes[i]} inch (${sizes[i] * 2.54} cm)`;
            if (i !== sizes.length - 1) {
                result += ' | ';
            }
        }
    }

    return result;
}

console.log(inventory[5].availableSizes + ' ' + screenSize(inventory[5].availableSizes) + ' ' + inventory[5].name)

const totalTvText = document.getElementById("total-tv");
totalTvText.textContent = ` ${totalTv}
${formatPrice(inventory[1].price)}
${screenSize(inventory[1])}
`
