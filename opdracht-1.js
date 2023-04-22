
// Opdracht 1A
const tvTypes = inventory.map((tvType) =>{
    return tvType.type
});
console.log(tvTypes);

// Opdracht 1B
const soldOutTvs = inventory.filter ((soldOutTv) =>{
    if (soldOutTv.originalStock - soldOutTv.sold === 0){
        return soldOutTv
    }
});
console.log(soldOutTvs);

// Opdracht 1C
const ambilights = inventory.filter((ambilight) => {
    if (ambilight.options.ambiLight === true){
        return ambilight
    }
});
console.log(ambilights);

// Opdracht 1D
sortedTvs = inventory.sort((a, b) => a.price - b.price);
console.log(sortedTvs)


