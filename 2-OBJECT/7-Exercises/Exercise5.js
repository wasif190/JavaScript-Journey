/*
Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
Volume of a cylinder : V = πr2h
where r is the radius and h is the height of the cylinder.
*/

class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
}

// Method to calculate the volume of the cylinder
  calculateVolume() {
    const pi = Math.PI;
    const volume = pi * Math.pow(this.radius, 2) * this.height;
    return volume.toFixed(4);
  }
}

// Create an instance of the Cylinder class with specific values for radius and height
const myCylinder = new Cylinder(3, 5);

// Calculate and display the volume of the cylinder
console.log(`Volume of the cylinder: ${myCylinder.calculateVolume()}`);
