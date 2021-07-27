// creating objects for each location
const location1 = {
  cityName: "Seattle",
  minAvgCust: 23,
  maxAvgCust: 65,
  avgCookiesPerSale: 6.3,
  // returns a random number of customers between the max and min
  randCustPerHour: function (){
    return Math.floor(Math.random() * (this.maxAvgCust - this.minAvgCust) + this.minAvgCust);
  },
  // returns the random number of customers times average cookies sold per customer
  randCookieSoldPerHr: function(){
    return Math.floor(this.randCustPerHour() * this.avgCookiesPerSale);
  }
}
const location2 = {
  cityName: "Tokyo",
  minAvgCust: 3,
  maxAvgCust: 24,
  avgCookiesPerSale: 1.2,
  randCustPerHour: function (){
    return Math.floor(Math.random() * (this.maxAvgCust - this.minAvgCust) + this.minAvgCust);
  },
  randCookieSoldPerHr: function(){
    return Math.floor(this.randCustPerHour() * this.avgCookiesPerSale);
  }
}
const location3 = {
  cityName: "Dubai",
  minAvgCust: 11,
  maxAvgCust: 38,
  avgCookiesPerSale: 3.7,
  randCustPerHour: function (){
    return Math.floor(Math.random() * (this.maxAvgCust - this.minAvgCust) + this.minAvgCust);
  },
  randCookieSoldPerHr: function(){
    return Math.floor(this.randCustPerHour() * this.avgCookiesPerSale);
  }
}
const location4 = {
  cityName: "Paris",
  minAvgCust: 20,
  maxAvgCust: 38,
  avgCookiesPerSale: 2.3,
  randCustPerHour: function (){
    return Math.floor(Math.random() * (this.maxAvgCust - this.minAvgCust) + this.minAvgCust);
  },
  randCookieSoldPerHr: function(){
    return Math.floor(this.randCustPerHour() * this.avgCookiesPerSale);
  }
}
const location5 = {
  cityName: "Lima",
  minAvgCust: 2,
  maxAvgCust: 16,
  avgCookiesPerSale: 4.6,
  randCustPerHour: function (){
    return Math.floor(Math.random() * (this.maxAvgCust - this.minAvgCust) + this.minAvgCust);
  },
  randCookieSoldPerHr: function(){
    return Math.floor(this.randCustPerHour() * this.avgCookiesPerSale);
  }
}
// create an array for all locations
const storeLocations = [location1, location2, location3, location4, location5];

// print values to sales.html page
for (i = 0; i < storeLocations.length; i++){
  const cityHeader = document.createElement("h1");
  cityHeader.innerText = storeLocations[i].cityName;
  console.log(storeLocations[i].cityName);
}



