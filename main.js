
/////////////////////// Part 1 ///////////////////////
const radius = 5
const area = 3.1415 * radius * radius
const minSpacePerPlant = 0.8
const numPlantsToStart = 20

// can't have a fraction of a plant
const maxCapacity = Math.floor(area / minSpacePerPlant)

console.log(area, minSpacePerPlant, maxCapacity)

function predictGrowth(numWeeks) {

    // number of plants doubles every week
    const numPlants = numPlantsToStart * 2 ** numWeeks

    // can't have a fraction of a plant
    const eightyPercentOfMax = Math.floor(maxCapacity * .80)
    const fiftyPercentOfMax = Math.floor(maxCapacity * .50)

    console.log(numPlants, fiftyPercentOfMax, eightyPercentOfMax)
    //monitored
    if (numPlants >= fiftyPercentOfMax
        && numPlants <= eightyPercentOfMax) {
        console.log(`
Week: ${numWeeks}
Number of plants: ${numPlants} 
Fifty % of maxCapacity: ${fiftyPercentOfMax} 
Eighty % of maxCapacity: ${eightyPercentOfMax}
Result: monitored\n`)
    }

    //pruned
    else if (numPlants > eightyPercentOfMax) {
        console.log(`
Week: ${numWeeks}
Number of plants: ${numPlants} 
Eighty % of maxCapacity: ${eightyPercentOfMax} 
Result: pruned\n`)
    }

    //planted
    else if (numPlants < fiftyPercentOfMax) {
        console.log(`
Week: ${numWeeks}
Number of plants: ${numPlants} 
Fifty % of maxCapacity: ${fiftyPercentOfMax} 
Result: planted\n`)
    }
}

predictGrowth(0)
predictGrowth(1)
predictGrowth(2)
predictGrowth(3)

