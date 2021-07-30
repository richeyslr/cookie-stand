// trying to use constructor to build store locations

// defining hours open outside of objects
let hoursOpen = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

// creating new class named Location to generate coookie stand locations. passing in city names and customer/sales data
function Location(shopCity, minValue, maxValue, avgCookiesPerSaleValue) {
  this.cityName = shopCity;
  this.minAvgCust = minValue;
  this.maxAvgCust = maxValue;
  this.avgCookiesPerSale = avgCookiesPerSaleValue;
  // defining empty arrays and totals counter
  this.randHourlyCustomers = [];
  this.cookiesSoldPerHour = [];
  this.totalCookiesPerDay = 0;
  this.hours = hoursOpen;
  // using this array to mimic table rows
  this.locationTableData = [];
}

// defining Location class methods using same code as previous labs

// pushes a new value gotten by multiplying random hourly customers by avg cookies per customer 
Location.prototype.randCookieSoldPerHr = function () {
  for (let i = 0; i < hoursOpen.length; i++) {
    this.cookiesSoldPerHour.push(
      Math.floor(this.randHourlyCustomers[i] * this.avgCookiesPerSale)
    );
    // adds count to total cookies per location tracker
    this.totalCookiesPerDay += this.cookiesSoldPerHour[i];
  }
};

// pushes a new value inbetween min and max avg customers into random hourly customers array 
Location.prototype.randCustPerHour = function () {
  for (let i = 0; i < hoursOpen.length; i++) {
    this.randHourlyCustomers.push(
      Math.floor(
        Math.random() * (this.maxAvgCust - this.minAvgCust) + this.minAvgCust
      )
    );
  }
};

// loads values into location data array as they will appear in their data rows in the table
Location.prototype.getLocationTableData = function () {
  this.locationTableData.push(this.cityName);
  for (let i = 0; i < this.cookiesSoldPerHour.length; i++) {
    this.locationTableData.push(`${this.cookiesSoldPerHour[i]}`);
  }
  this.locationTableData.push(`${this.totalCookiesPerDay}`);
};

// renders all location specific data into table
Location.prototype.render = function () {
  // run method to generate cookies sold per hour 
  this.randCookieSoldPerHr();
  // run method to load data into location data array
  this.getLocationTableData();
  // get table from DOM
  const table = document.getElementById("table");
  // insert a new row in the table for the hours open for each store
  const locationData = table.insertRow();
  // create a data cell and change text to array values
  for (let i = 0; i < this.locationTableData.length; i++) {
    let dataCells = locationData.insertCell();
    dataCells.textContent = this.locationTableData[i];
  }
};

// creating new locations for each cookie stand city using our factory
let location1 = new Location("Seattle", 23, 65, 2.3);
let location2 = new Location("Tokyo", 3, 24, 1.2);
let location3 = new Location("Dubai", 11, 38, 3.7);
let location4 = new Location("Paris", 20, 38, 2.3);
let location5 = new Location("Lima", 2, 16, 4.6);

// store all new locations in an array for looping
const storeLocations = [location1, location2, location3, location4, location5];

// generate random customers per hour for each location
for (let i = 0; i < storeLocations.length; i++) {
  storeLocations[i].randCustPerHour();
}

// render table data for each new location
for (let i = 0; i < storeLocations.length; i++) {
  storeLocations[i].render();
}


// totals row renders same way as other render methods. inserts new row, then inserts new cells and changes text for value in totals row array
function renderTotalsRow()
{
  let grandTotal = 0;
  const grabTable = document.getElementById("table");
  const locationTotals = grabTable.insertRow();
  let columnTotals = locationTotals.insertCell();
    columnTotals.textContent = "Totals";
  for (let i = 0; i < hoursOpen.length; i++) 
  {
    let hourlyTotals = 0;
    for (let j = 0; j < storeLocations.length; j++) {
      hourlyTotals += storeLocations[j].cookiesSoldPerHour[i];
      grandTotal += storeLocations[j].cookiesSoldPerHour[i];
    }
    columnTotals = locationTotals.insertCell();
    columnTotals.textContent = hourlyTotals;
  }
  columnTotals = locationTotals.insertCell();
    columnTotals.textContent = grandTotal;
}

function renderHeaderRow()
{
  const grabTable = document.getElementById("table");
  let header = grabTable.createTHead();
  const headerDataRow = header.insertRow();
  let headerData = headerDataRow.insertCell();
  headerData.textContent = "Locations/Hours";
  console.log(headerData);
  for (let i = 0; i < hoursOpen.length; i++) 
  {
    headerData = headerDataRow.insertCell();
    headerData.textContent = hoursOpen[i];
    console.log(headerData);
  }
  headerData = headerDataRow.insertCell();
  headerData.textContent = "Totals";
}
renderHeaderRow();
// calling totals row functions to calculate and render totals row
renderTotalsRow();

