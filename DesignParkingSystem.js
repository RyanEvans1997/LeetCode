/*

Input
["ParkingSystem", "addCar", "addCar", "addCar", "addCar"]
[[1, 1, 0], [1], [2], [3], [1]]

Output
[null, true, true, false, false]

1 - big
2 - medium
3 - small



*/

function ParkingSystem (big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
};


ParkingSystem.prototype.addCar = function(carType) {
    if(carType == 1 && this.big != 0) {
        this.big--;
        return true;
    } else if(carType == 2 && this.medium != 0) {
        this.medium--;
        return true;
    } else if (carType == 3 && this.small != 0) {
        this.small--;
        return true;
    } 
    return false;
};


let parkingSystem = new ParkingSystem(1, 1, 0);
console.log(parkingSystem.addCar(1)); 
console.log(parkingSystem.addCar(2)); 
console.log(parkingSystem.addCar(3)); 
console.log(parkingSystem.addCar(1)); 

console.log(parkingSystem);

