// creating objects for each location
const location1 = {
  cityName: "Seattle",
  minAvgCust: 23,
  maxAvgCust: 65,
  avgCookiesPerSale: 6.3,
  randHourlyCustomers: [], // stores random number of hourly customer
  cookiesSoldPerHour: [], // stores cookies sold per hour by multiplying random hourly customer by avg cookies per sale
  totalCookiesPerDay: 0,
  // pushes a random number of customers between the max and min to random hourly customers array
  randCustPerHour: function () {
    for (let i = 0; i < this.hoursOpen.length; i++) {
      this.randHourlyCustomers.push(
        Math.floor(
          Math.random() * (this.maxAvgCust - this.minAvgCust) + this.minAvgCust
        )
      );
    }
  },
  // pushes the random number of customers times average cookies sold per customer to new array and adds
  randCookieSoldPerHr: function () {
    for (let i = 0; i < this.hoursOpen.length; i++) {
      this.cookiesSoldPerHour.push(
        Math.floor(this.randHourlyCustomers[i] * this.avgCookiesPerSale)
      );
      this.totalCookiesPerDay += this.cookiesSoldPerHour[i];
    }
  },
  render() {
    // run the function to populate random cookies sold array
    this.randCookieSoldPerHr();
    this.getLocationTableData();
    // get table from DOM
    const table = document.getElementById("table");
    // insert a new row in the table for the hours open for each store
    // let times = table.insertRow();
    // // loop through each hour open in hours open array to create a cell and print the value in each new cell
    // for (let i = 0; i < this.hoursOpen.length; i++) {
    //   let timeCells = times.insertCell();
    //   timeCells.textContent = this.hoursOpen[i];
    // }
    const locationData = table.insertRow();
    for (let i = 0; i < this.locationTableData.length; i++) {
      let dataCells = locationData.insertCell();
      dataCells.textContent = this.locationTableData[i];
    }
  },
  hoursOpen: [
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
  ],
  locationTableData: [],
  getLocationTableData: function () {
    this.locationTableData.push(this.cityName);
    for (let i = 0; i < this.cookiesSoldPerHour.length; i++) {
      this.locationTableData.push(`${this.cookiesSoldPerHour[i]} cookies`);
    }
    this.locationTableData.push(`${this.totalCookiesPerDay} cookies`);
  },
};
const location2 = {
  cityName: "Tokyo",
  minAvgCust: 3,
  maxAvgCust: 24,
  avgCookiesPerSale: 1.2,
  randHourlyCustomers: [],
  cookiesSoldPerHour: [],
  totalCookiesPerDay: 0,
  // returns a random number of customers between the max and min
  randCustPerHour: function () {
    for (let i = 0; i < this.hoursOpen.length; i++) {
      this.randHourlyCustomers.push(
        Math.floor(
          Math.random() * (this.maxAvgCust - this.minAvgCust) + this.minAvgCust
        )
      );
    }
  },
  // pushes the random number of customers times average cookies sold per customer to new array and adds
  randCookieSoldPerHr: function () {
    for (let i = 0; i < this.hoursOpen.length; i++) {
      this.cookiesSoldPerHour.push(
        Math.floor(this.randHourlyCustomers[i] * this.avgCookiesPerSale)
      );
      this.totalCookiesPerDay += this.cookiesSoldPerHour[i];
    }
  },
  render() {
    // run the function to populate random cookies sold array
    this.randCookieSoldPerHr();
    this.getLocationTableData();
    // get table from DOM
    const table = document.getElementById("table");
    // insert a new row in the table for the hours open for each store
    // let times = table.insertRow();
    // // loop through each hour open in hours open array to create a cell and print the value in each new cell
    // for (let i = 0; i < this.hoursOpen.length; i++) {
    //   let timeCells = times.insertCell();
    //   timeCells.textContent = this.hoursOpen[i];
    // }
    const locationData = table.insertRow();
    for (let i = 0; i < this.locationTableData.length; i++) {
      let dataCells = locationData.insertCell();
      dataCells.textContent = this.locationTableData[i];
    }
  },
  hoursOpen: [
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
  ],
  locationTableData: [],
  getLocationTableData: function () {
    this.locationTableData.push(this.cityName);
    for (let i = 0; i < this.cookiesSoldPerHour.length; i++) {
      this.locationTableData.push(`${this.cookiesSoldPerHour[i]} cookies`);
    }
    this.locationTableData.push(`${this.totalCookiesPerDay} cookies`);
  },
};
const location3 = {
  cityName: "Dubai",
  minAvgCust: 11,
  maxAvgCust: 38,
  avgCookiesPerSale: 3.7,
  randHourlyCustomers: [],
  cookiesSoldPerHour: [],
  totalCookiesPerDay: 0,
  // returns a random number of customers between the max and min
  randCustPerHour: function () {
    for (let i = 0; i < this.hoursOpen.length; i++) {
      this.randHourlyCustomers.push(
        Math.floor(
          Math.random() * (this.maxAvgCust - this.minAvgCust) + this.minAvgCust
        )
      );
    }
  },
  // pushes the random number of customers times average cookies sold per customer to new array and adds
  randCookieSoldPerHr: function () {
    for (let i = 0; i < this.hoursOpen.length; i++) {
      this.cookiesSoldPerHour.push(
        Math.floor(this.randHourlyCustomers[i] * this.avgCookiesPerSale)
      );
      this.totalCookiesPerDay += this.cookiesSoldPerHour[i];
    }
  },
  render() {
    // run the function to populate random cookies sold array
    this.randCookieSoldPerHr();
    this.getLocationTableData();
    // get table from DOM
    const table = document.getElementById("table");
    // insert a new row in the table for the hours open for each store
    // let times = table.insertRow();
    // // loop through each hour open in hours open array to create a cell and print the value in each new cell
    // for (let i = 0; i < this.hoursOpen.length; i++) {
    //   let timeCells = times.insertCell();
    //   timeCells.textContent = this.hoursOpen[i];
    // }
    const locationData = table.insertRow();
    for (let i = 0; i < this.locationTableData.length; i++) {
      let dataCells = locationData.insertCell();
      dataCells.textContent = this.locationTableData[i];
    }
  },
  hoursOpen: [
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
  ],
  locationTableData: [],
  getLocationTableData: function () {
    this.locationTableData.push(this.cityName);
    for (let i = 0; i < this.cookiesSoldPerHour.length; i++) {
      this.locationTableData.push(`${this.cookiesSoldPerHour[i]} cookies`);
    }
    this.locationTableData.push(`${this.totalCookiesPerDay} cookies`);
  },
};
const location4 = {
  cityName: "Paris",
  minAvgCust: 20,
  maxAvgCust: 38,
  avgCookiesPerSale: 2.3,
  randHourlyCustomers: [],
  cookiesSoldPerHour: [],
  totalCookiesPerDay: 0,
  // returns a random number of customers between the max and min
  randCustPerHour: function () {
    for (let i = 0; i < this.hoursOpen.length; i++) {
      this.randHourlyCustomers.push(
        Math.floor(
          Math.random() * (this.maxAvgCust - this.minAvgCust) + this.minAvgCust
        )
      );
    }
  },
  // pushes the random number of customers times average cookies sold per customer to new array and adds
  randCookieSoldPerHr: function () {
    for (let i = 0; i < this.hoursOpen.length; i++) {
      this.cookiesSoldPerHour.push(
        Math.floor(this.randHourlyCustomers[i] * this.avgCookiesPerSale)
      );
      this.totalCookiesPerDay += this.cookiesSoldPerHour[i];
    }
  },
  render() {
    // run the function to populate random cookies sold array
    this.randCookieSoldPerHr();
    this.getLocationTableData();
    // get table from DOM
    const table = document.getElementById("table");
    // insert a new row in the table for the hours open for each store
    // let times = table.insertRow();
    // // loop through each hour open in hours open array to create a cell and print the value in each new cell
    // for (let i = 0; i < this.hoursOpen.length; i++) {
    //   let timeCells = times.insertCell();
    //   timeCells.textContent = this.hoursOpen[i];
    // }
    const locationData = table.insertRow();
    for (let i = 0; i < this.locationTableData.length; i++) {
      let dataCells = locationData.insertCell();
      dataCells.textContent = this.locationTableData[i];
    }
  },
  hoursOpen: [
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
  ],
  locationTableData: [],
  getLocationTableData: function () {
    this.locationTableData.push(this.cityName);
    for (let i = 0; i < this.cookiesSoldPerHour.length; i++) {
      this.locationTableData.push(`${this.cookiesSoldPerHour[i]} cookies`);
    }
    this.locationTableData.push(`${this.totalCookiesPerDay} cookies`);
  },
};
const location5 = {
  cityName: "Lima",
  minAvgCust: 2,
  maxAvgCust: 16,
  avgCookiesPerSale: 4.6,
  randHourlyCustomers: [],
  cookiesSoldPerHour: [],
  totalCookiesPerDay: 0,
  // returns a random number of customers between the max and min
  randCustPerHour: function () {
    for (let i = 0; i < this.hoursOpen.length; i++) {
      this.randHourlyCustomers.push(
        Math.floor(
          Math.random() * (this.maxAvgCust - this.minAvgCust) + this.minAvgCust
        )
      );
    }
  },
  // pushes the random number of customers times average cookies sold per customer to new array and adds
  randCookieSoldPerHr: function () {
    for (let i = 0; i < this.hoursOpen.length; i++) {
      this.cookiesSoldPerHour.push(
        Math.floor(this.randHourlyCustomers[i] * this.avgCookiesPerSale)
      );
      this.totalCookiesPerDay += this.cookiesSoldPerHour[i];
    }
  },
  // method for each location to render data to webpage
  render() {
    // run the function to populate random cookies sold array
    this.randCookieSoldPerHr();
    this.getLocationTableData();
    // get table from DOM
    const table = document.getElementById("table");
    // insert a new row in the table for the hours open for each store
    // let times = table.insertRow();
    // // loop through each hour open in hours open array to create a cell and print the value in each new cell
    // for (let i = 0; i < this.hoursOpen.length; i++) {
    //   let timeCells = times.insertTH();
    //   timeCells.textContent = this.hoursOpen[i];
    // }
    const locationData = table.insertRow();
    for (let i = 0; i < this.locationTableData.length; i++) {
      let dataCells = locationData.insertCell();
      dataCells.textContent = this.locationTableData[i];
    }
  },
  // array of hours open
  hoursOpen: [
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
  ],
  locationTableData: [],
  getLocationTableData: function () {
    this.locationTableData.push(this.cityName);
    for (let i = 0; i < this.cookiesSoldPerHour.length; i++) {
      this.locationTableData.push(`${this.cookiesSoldPerHour[i]} cookies`);
    }
    this.locationTableData.push(`${this.totalCookiesPerDay} cookies`);
  },
};
// create an array for all locations
const storeLocations = [location1, location2, location3, location4, location5];


for (let i = 0; i < storeLocations.length; i++) {
  storeLocations[i].randCustPerHour();
}

// loop through each store location and render new lists

for (let i = 0; i < storeLocations.length; i++) {
  storeLocations[i].render();
}

// create a function to render the table's headings

// trying to use constructor to build store locations

// function Location(storeLocation, minValue, maxValue, avgCookiesPerSaleValue){
//   let storeLocation = this.name;
//   let minValue = this.minAvgCust;
//   let maxValue = this.maxAvgCust;
//   let avgCookiesPerSaleValue = this.avgCookiesPerSale;
//   let randHourlyCustomers = [];
//   let cookiesSoldPerHour = [];
//   let totalCookiesPerDay = 0;
//   // returns a random number of customers between the max and min
//   this.randCustPerHour() = function (){
//     for (let i = 0; i < this.hoursOpen.length; i++) {
//       this.randHourlyCustomers.push(
//         Math.floor(
//           Math.random() * (this.maxAvgCust - this.minAvgCust) + this.minAvgCust
//         )
//       );
//     }
//   };
//   // pushes the random number of customers times average cookies sold per customer to new array and adds
//   this.randCookieSoldPerHr = function () {
//     for (let i = 0; i < this.hoursOpen.length; i++) {
//       this.cookiesSoldPerHour.push(
//         Math.floor(this.randHourlyCustomers[i] * this.avgCookiesPerSale)
//       );
//       this.totalCookiesPerDay += this.cookiesSoldPerHour[i];
//     }
//   };
//   // method for each location to render data to webpage
//   this.render() = function() {
//     this.randCookieSoldPerHr();
//     const unorderedList = document.getElementById("location-5-list");
//     for (let i = 0; i < this.hoursOpen.length; i++) {
//       const listItem = document.createElement("li");
//       // 6am: 16 cookies
//       listItem.textContent =
//         this.hoursOpen[i] + ": " + this.cookiesSoldPerHour[i] + " cookies";
//       unorderedList.appendChild(listItem);
//     }
//     const listItem = document.createElement("li");
//     listItem.textContent = "Total: " + this.totalCookiesPerDay + " cookies";
//     unorderedList.appendChild(listItem);
//   };
//   // array of hours open
//   this.hoursOpen = [
//     "6am",
//     "7am",
//     "8am",
//     "9am",
//     "10am",
//     "11am",
//     "12pm",
//     "1pm",
//     "2pm",
//     "3pm",
//     "4pm",
//     "5pm",
//     "6pm",
//     "7pm",
//   ];

// };

// const location1 = new Location("Seattle",23,65,6.3);
// console.log(location1.name);
