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
    this.randCookieSoldPerHr();
    const unorderedList = document.getElementById("location-1-list");
    for (let i = 0; i < this.hoursOpen.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent =
        this.hoursOpen[i] + ": " + this.cookiesSoldPerHour[i] + " cookies";
      unorderedList.appendChild(listItem);
    }
    const listItem = document.createElement("li");
    listItem.textContent = "Total: " + (this.totalCookiesPerDay) + " cookies";
    unorderedList.appendChild(listItem);
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
    this.randCookieSoldPerHr();
    const unorderedList = document.getElementById("location-2-list");
    for (let i = 0; i < this.hoursOpen.length; i++) {
      const listItem = document.createElement("li");
      // 6am: 16 cookies
      listItem.textContent =
        this.hoursOpen[i] + ": " + this.cookiesSoldPerHour[i] + " cookies";
      unorderedList.appendChild(listItem);
    }
    const listItem = document.createElement("li");
    listItem.textContent = "Total: " + this.totalCookiesPerDay + " cookies";
    unorderedList.appendChild(listItem);
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
    this.randCookieSoldPerHr();
    const unorderedList = document.getElementById("location-3-list");
    for (let i = 0; i < this.hoursOpen.length; i++) {
      const listItem = document.createElement("li");
      // 6am: 16 cookies
      listItem.textContent =
        this.hoursOpen[i] + ": " + this.cookiesSoldPerHour[i] + " cookies";
      unorderedList.appendChild(listItem);
    }
    const listItem = document.createElement("li");
    listItem.textContent = "Total: " + this.totalCookiesPerDay + " cookies";
    unorderedList.appendChild(listItem);
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
    this.randCookieSoldPerHr();
    const unorderedList = document.getElementById("location-4-list");
    for (let i = 0; i < this.hoursOpen.length; i++) {
      const listItem = document.createElement("li");
      // 6am: 16 cookies
      listItem.textContent =
        this.hoursOpen[i] + ": " + this.cookiesSoldPerHour[i] + " cookies";
      unorderedList.appendChild(listItem);
    }
    const listItem = document.createElement("li");
    listItem.textContent = "Total: " + this.totalCookiesPerDay + " cookies";
    unorderedList.appendChild(listItem);
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
    this.randCookieSoldPerHr();
    const unorderedList = document.getElementById("location-5-list");
    for (let i = 0; i < this.hoursOpen.length; i++) {
      const listItem = document.createElement("li");
      // 6am: 16 cookies
      listItem.textContent =
        this.hoursOpen[i] + ": " + this.cookiesSoldPerHour[i] + " cookies";
      unorderedList.appendChild(listItem);
    }
    const listItem = document.createElement("li");
    listItem.textContent = "Total: " + this.totalCookiesPerDay + " cookies";
    unorderedList.appendChild(listItem);
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
};
// create an array for all locations
const storeLocations = [location1, location2, location3, location4, location5];

// loop through each locations method to generate list data
for (let i = 0; i < storeLocations.length; i++) {
  storeLocations[i].randCustPerHour();
}
// loop through each store location and render new lists
for (let i = 0; i < storeLocations.length; i++) {
  storeLocations[i].render();
}
