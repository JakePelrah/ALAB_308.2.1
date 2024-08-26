const radius = 5
const area = 3.1415 * radius ** 2
const minSpacePerPlant = 0.8
const numPlantsToStart = 20

// can't have a fraction of a plant
const maxCapacity = Math.floor(area / minSpacePerPlant)


function predictGrowth(numWeeks) {

    // number of plants doubles every week
    const numPlants = numPlantsToStart * numWeeks ** 2

    const eightyPercentOfMax = Math.floor(maxCapacity * .80)
    const fiftyPercentOfMax = Math.floor(maxCapacity * .50)


    //pruned
    if (numPlants > eightyPercentOfMax) {
        console.log(`
Week: ${numWeeks}
Number of plants: ${numPlants} 
Eighty % of maxCapacity: ${eightyPercentOfMax} 
Result: pruned\n`)
    }
    //monitored
    else if (numPlants > fiftyPercentOfMax
        && numPlants <= eightyPercentOfMax) {
        console.log(`
Week: ${numWeeks}
Number of plants: ${numPlants} 
Fifty % of maxCapacity: ${fiftyPercentOfMax} 
Eighty % of maxCapacity: ${eightyPercentOfMax}
Result: monitored\n`)
    }
    //planted
    else if (numPlants <= fiftyPercentOfMax) {
        console.log(`
Week: ${numWeeks}
Number of plants: ${numPlants} 
Fifty % of maxCapacity: ${fiftyPercentOfMax} 
Result: planted\n`)
    }
}


predictGrowth(1)
predictGrowth(2)
predictGrowth(3)
