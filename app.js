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
  this.locationTableData = [];
}

// defining Location class methods using same code as previous labs

Location.prototype.randCookieSoldPerHr = function () {
  for (let i = 0; i < hoursOpen.length; i++) {
    this.cookiesSoldPerHour.push(
      Math.floor(this.randHourlyCustomers[i] * this.avgCookiesPerSale)
    );
    this.totalCookiesPerDay += this.cookiesSoldPerHour[i];
  }
};
Location.prototype.randCustPerHour = function () {
  for (let i = 0; i < hoursOpen.length; i++) {
    this.randHourlyCustomers.push(
      Math.floor(
        Math.random() * (this.maxAvgCust - this.minAvgCust) + this.minAvgCust
      )
    );
  }
};
Location.prototype.getLocationTableData = function () {
  this.locationTableData.push(this.cityName);
  for (let i = 0; i < this.cookiesSoldPerHour.length; i++) {
    this.locationTableData.push(`${this.cookiesSoldPerHour[i]} cookies`);
  }
  this.locationTableData.push(`${this.totalCookiesPerDay} cookies`);
};
Location.prototype.render = function () {
  this.randCookieSoldPerHr();
  this.getLocationTableData();
  // get table from DOM
  const table = document.getElementById("table");
  // insert a new row in the table for the hours open for each store
  const locationData = table.insertRow();
  for (let i = 0; i < this.locationTableData.length; i++) {
    let dataCells = locationData.insertCell();
    dataCells.textContent = this.locationTableData[i];
  }
};

// creating new 
let location1 = new Location("Seattle", 23, 65, 2.3);
let location2 = new Location("Tokyo", 3, 24, 1.2);
let location3 = new Location("Dubai", 11, 38, 3.7);
let location4 = new Location("Paris", 20, 38, 2.3);
let location5 = new Location("Lima", 2, 16, 4.6);
console.log(location1.cityName);
const storeLocations = [location1, location2, location3, location4, location5];

for (let i = 0; i < storeLocations.length; i++) {
  storeLocations[i].randCustPerHour();
}

// loop through each store location and render new lists

for (let i = 0; i < storeLocations.length; i++) {
  storeLocations[i].render();
}

const totalsRow = [" "];

function getTotalsRow()
{
  // add all locations' 1st values in cookies sold per hour array
  for (let i = 0; i < location1.cookiesSoldPerHour.length; i++) 
  {
    let totals = (location1.cookiesSoldPerHour[i] + location2.cookiesSoldPerHour[i] + location3.cookiesSoldPerHour[i] + location4.cookiesSoldPerHour + location5.cookiesSoldPerHour[i])
  totalsRow.push(totals);
  }
}
getTotalsRow();
console.log(totalsRow);