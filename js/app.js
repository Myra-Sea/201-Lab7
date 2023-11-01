//Every cookie stand object has a 
//city: 'string',
//min: number,
//max: number,
//avgCookies: number,
//sales: [array],

// We created Lab 6 using object literals
// However, since every cookie stand object NEEDS to have those same key/value pairs, we should have constructor functions
// Start the name of a constructor function with a capital letter and pass arguments into it

// Example: 
// function = Kitten(name, interests, isGoodWithDogs){
//      this.name = name;
//      this.interests = interests;    
//}



function SeattleCookieStand(city, min, max, avgCookies) {
    this.city = city;
    this.min = min;
    this.max = max;
    this.avgCookies = avgCookies;
    this.sales = this.estimate();
}

// THE ABOVE ALLOWS THE CONVERSION OF

// const seattle = {
//     city: 'Seattle',
//     min: 23,
//     max: 65,
//     avgCookies: 6.3,
//     sales: [],
// }

// INTO

const seattle = new SeattleCookieStand('Seattle', 23, 65, 6.3, []);

//The method needs to go in the prototype

SeattleCookieStand.prototype.estimate = function(){
    return [];    
}
//The array in the array line needs to be filled in above
 

function TokyoCookieStand(city, min, max, avgCookies) {
    this.city = city;
    this.min = min;
    this.max = max;
    this.avgCookies = avgCookies;
    this.sales = this.estimate();
}
const tokyo = new TokyoCookieStand('Tokyo', 3, 24, 1.2, []);


function DubaiCookieStand(city, min, max, avgCookies) {
    this.city = city;
    this.min = min;
    this.max = max;
    this.avgCookies = avgCookies;
    this.sales = this.estimate();
}
const dubai = new DubaiCookieStand('Dubai', 11, 38, 3.7, []);


function ParisCookieStand(city, min, max, avgCookies) {
    this.city = city;
    this.min = min;
    this.max = max;
    this.avgCookies = avgCookies;
    this.sales = this.estimate();
}
const paris = new ParisCookieStand('Paris', 20, 38, 2.3, []);


function LimaCookieStand(city, min, max, avgCookies,){
    this.city = city;
    this.min = min;
    this.max = max;
    this.avgCookies = avgCookies;
    this.sales = this.estimate();
}
const lima = new LimaCookieStand('Lima', 2, 16, 4.6, []);


{

    //add the table here
    const table = document.createElement('table');
    articleElem.appendChild(tableElem);

    const headerRow = document.createElement('tr');
    tableElem.appendChild(headerRow);

    
}

//Constructed objects can still use standalone functions when needed.
function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
