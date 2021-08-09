
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, names) {
    return drivers.filter(letterMatch =>
        letterMatch.toLowerCase() === names.toLowerCase()
        )
}

function fuzzyMatch(drivers, names) {
    return drivers.filter(letterMatch =>
        letterMatch.toLowerCase().indexOf(names.toLowerCase()) === 0
        )
}

function matchName(drivers, specificName) {
    return drivers.filter(key => key.name === specificName)
}