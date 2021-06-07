const returnFirstTwoDrivers = function(drivers) {
    let arr = [...drivers];
    arr.splice(2);
    return arr;
};

const returnLastTwoDrivers = function(drivers) {
    let arr = [...drivers];
    arr.splice(-0, arr.length - 2);
    return arr;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare) {
        return multiplier * fare;
    };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, func) {
    return func(drivers);
}