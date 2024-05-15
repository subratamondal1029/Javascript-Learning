const band5g = [1, 258, 28, 3, 40, 41, 5, 71, 77, 78, 79, 8].sort()

const poco5gband = [1, 3, 8, 28, 40, 78]
const samsung5gBand = [1, 3, 5, 7, 8, 20, 28, 38, 40, 41, 66, 77, 78];

function checkBandNum(brand){
    let bands = [];
    
    band5g.forEach((band) => {
        if(brand === "samsung"){
            if(samsung5gBand.includes(band)) bands.push(band)
        }else{
           if (poco5gband.includes(band)) bands.push(band);
        }
    })

    return `${bands.length} bands are available in "${brand}" phone | bands are ${bands.join(', ')}`;
}

console.log(checkBandNum("samsung"))
console.log(checkBandNum("poco"))