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


function CookieStand(city, min, max, avgCookies) {
    this.city = city;
    this.min = min;
    this.max = max;
    this.avgCookies = avgCookies;
    this.sales = this.generateEstimate();
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

// const seattle = new CookieStand('Seattle', 23, 65, 6.3, []);
// Remember to use that keyword "new" because it is what allows "this." to refer to the currently created object

//But before adding that line of code I first need to add a method for this.generateEstimate and the method needs to go in the prototype
//The method needs to be bound to a given object

CookieStand.prototype.generateEstimate = function(){
    return randomInRange(20, 38) + 'cookies';    
}
//I'm not sure if that line above was writen correctly. It may needd to be written differently

//We also need to add a method to render the data
//The following gives the browser the instructions of what should be done once we call on the render method further below
CookieStand.prototype.render = function(){

    //get the div "container" for SalesData
    const containerElem = document.getElementById('SalesData');

    //each city's data is an article
    const articleElem = document.createElement('article');
    containerElem.appendChild(articleElem);

    //add the article heading
    const headingElem = document.createElement('h2');
    articleElem.appendChild(headingElem);
    headingElem.textContent = this.city;

    //add the paragraph lines
    //?????????

    //add the unordered list
    //?????????

    //add the table here
    const tableElem = document.createElement('table');
    articleElem.appendChild(tableElem);

    const headerRow = document.createElement('tr');
    tableElem.appendChild(headerRow);

    constlocationsHeaderCell = document.createElement('th');
    headerRow.appendChild(locationsHeaderCell);
    locationsHeaderCell.textContent = "Locations";

    constsixAmHeaderCell = document.createElement('th');
    headerRow.appendChild(sixAmHeaderCell);
    sixAmHeaderCell.textContent = "6am";

    constsevenAmHeaderCell = document.createElement('th');
    headerRow.appendChild(sevenAmHeaderCell);
    sevenAmHeaderCell.textContent = "7am";

    consteightAmHeaderCell = document.createElement('th');
    headerRow.appendChild(eightAmHeaderCell);
    eightAmHeaderCell.textContent = "8am";

    constnineAmHeaderCell = document.createElement('th');
    headerRow.appendChild(nineAmHeaderCell);
    nineAmHeaderCell.textContent = "9am";

    consttenAmHeaderCell = document.createElement('th');
    headerRow.appendChild(tenAmHeaderCell);
    tenAmHeaderCell.textContent = "10am";

    constelevenAmHeaderCell = document.createElement('th');
    headerRow.appendChild(elevenAmHeaderCell);
    elevenAmHeaderCell.textContent = "11am";

    constnoonHeaderCell = document.createElement('th');
    headerRow.appendChild(noonHeaderCell);
    noonHeaderCell.textContent = "noon";

    constonePmHeaderCell = document.createElement('th');
    headerRow.appendChild(onePmHeaderCell);
    onePmHeaderCell.textContent = "1pm";

    consttwoPmHeaderCell = document.createElement('th');
    headerRow.appendChild(twoPmHeaderCell);
    twoPmHeaderCell.textContent = "2pm";

    constthreePmHeaderCell = document.createElement('th');
    headerRow.appendChild(threePmHeaderCell);
    threePmHeaderCell.textContent = "3pm";

    constfourPmHeaderCell = document.createElement('th');
    headerRow.appendChild(fourPmHeaderCell);
    fourPmHeaderCell.textContent = "4pm";

    constfivePmHeaderCell = document.createElement('th');
    headerRow.appendChild(fivePmHeaderCell);
    fivePmHeaderCell.textContent = "5pm";

    constsixPmHeaderCell = document.createElement('th');
    headerRow.appendChild(sixPmHeaderCell);
    sixPmHeaderCell.textContent = "6pm";

    constsevenPmHeaderCell = document.createElement('th');
    headerRow.appendChild(sevenPmHeaderCell);
    sevenPmHeaderCell.textContent = "7pm";

    constlocationTotalsHeaderCell = document.createElement('th');
    headerRow.appendChild(locationTotalsHeaderCell);
    locationTotalsHeaderCell.textContent = "Location Totals";
    
}


//Constructed objects can still use standalone functions when needed.
function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


//Constructor functions can still use standalone function when needed.
function randomInRange(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const seattle = new CookieStand('Seattle', 23, 65, 6.3, []);

// Oops!  It sounds like the whole point of using a constructor function was that I should have just written
const tokyo = new CookieStand('Tokyo', 3, 24, 1.2, []);
const dubai = new CookieStand('Dubai', 11, 38, 3.7, []);
const paris = new CookieStand('Paris', 20, 38, 2.3, []);
const lima = new CookieStand('Lima', 2, 16, 4.6, []);

//INSTEAD OF WRITING OUT ALL OF THIS:
//
// function TokyoCookieStand(city, min, max, avgCookies) {
//     this.city = city;
//     this.min = min;
//     this.max = max;
//     this.avgCookies = avgCookies;
//     this.sales = this.generateEstimate();
// }
// TokyoCookieStand.prototype.generateEstimate = function(){
//     return [];    
// }
// const tokyo = new TokyoCookieStand('Tokyo', 3, 24, 1.2, []);


// function DubaiCookieStand(city, min, max, avgCookies) {
//     this.city = city;
//     this.min = min;
//     this.max = max;
//     this.avgCookies = avgCookies;
//     this.sales = this.generateEstimate();
// }
// DubaiCookieStand.prototype.generateEstimate = function(){
//     return [];    
// }
// const dubai = new DubaiCookieStand('Dubai', 11, 38, 3.7, []);


// function ParisCookieStand(city, min, max, avgCookies) {
//     this.city = city;
//     this.min = min;
//     this.max = max;
//     this.avgCookies = avgCookies;
//     this.sales = this.generateEstimate();
// }
// ParisCookieStand.prototype.generateEstimate = function(){
//     return [];    
// }
// const paris = new ParisCookieStand('Paris', 20, 38, 2.3, []);


// function LimaCookieStand(city, min, max, avgCookies,){
//     this.city = city;
//     this.min = min;
//     this.max = max;
//     this.avgCookies = avgCookies;
//     this.sales = this.generateEstimate();
// }
// LimaCookieStand.prototype.generateEstimate = function(){
//     return [];    
// }
// const lima = new LimaCookieStand('Lima', 2, 16, 4.6, []);



seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

