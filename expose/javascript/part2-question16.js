for (let stat in statistics) {
    if (stat.startsWith('r') || statistics[stat] % 2 == 1) {
        console.log(statistics[stat]);
    }
}