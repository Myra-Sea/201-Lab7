const timeSlot = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
//const is used instead of let because the timeSlot column is only ever mean to equal this array



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
    this.custEachHour = [];
    this.cookiesEachHour = [];    
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
    //generate random customers per hour
    for(let i=0; i<hours.length; i++) {
        const numberCustomers = randomInRange(this.min, this.max);
        //push the random number of customers into the custEachHour array
        this.custEachHour.push(numberCustomers);
    }

    //generate random cookies per hour
    //Somehow I need to multiply my this.avgCookies * this.custEachHour
    for(let i=0; i<hours.length; i++) {
        const randCookieNumber = Math.ceil(this.custEachHour * this.avgCookies);
        //push the random number of cookies into the cookiesEachHour array
        this.cookiesEachHour.push(randCookieNumber);
    }
    //I'm not sure what the math.ceil does
    console.log(numberCustomers);
    console.log(randCookieNumber);
    return this.cookiesEachHour;    
}


//We also need to add a method to render the data
//The following gives the browser the instructions of what should be done once we call on the render method further below
CookieStand.prototype.render = function(){

    //get the div "container" for SalesData
    const containerElem = document.getElementById('SalesData');

    //each city's data is an article
    const articleElem = document.createElement('article');
    //append it to the container element
    containerElem.appendChild(articleElem);

    //add the article heading
    const headingElem = document.createElement('h2');
    //append it to the <article> element
    articleElem.appendChild(headingElem);
    headingElem.textContent = this.city;

    //add paragraph lines
    //?????????

    //add an unordered list
    //?????????

    //add the table here
    const tableElem = document.createElement('table');
    //append it to the <article> element
    articleElem.appendChild(tableElem);

    const headerRow = document.createElement('tr');
    //append it to the <table> element
    tableElem.appendChild(headerRow);

    constlocationsHeaderCell = document.createElement('th');
    //append it to the header row in the table
    headerRow.appendChild(locationsHeaderCell);
    locationsHeaderCell.textContent = "Locations";

//Could have used a function FOR loop below
//I also have an hours array in the code that could have been used
//for (let i = 0; i<hours.length; i++);{
//    const currentHour = hours[0];
//Why does the lab review have an i instead of a zero there???
//    const currentHeaderCell = document.createElement('th');
//    headerRow.appendChild(locationsHeaderCell);
//    currentHeaderCell.textContent = currentHour;
// }

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
    

// add a data row
    const dataRow = document.createElement('tr');
// append it to the <table> element
    tableElem.appendChild(dataRow);



}


//Constructed objects can still use standalone functions when needed.
function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



const seattle = new CookieStand('Seattle', 23, 65, 6.3);
console.log(seattle)
// Oops!  It sounds like the whole point of using a constructor function was that I should have just written
const tokyo = new CookieStand('Tokyo', 3, 24, 1.2);
const dubai = new CookieStand('Dubai', 11, 38, 3.7);
const paris = new CookieStand('Paris', 20, 38, 2.3);
const lima = new CookieStand('Lima', 2, 16, 4.6);

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

