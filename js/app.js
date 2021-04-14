'use strict';

let operationHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let oop = [];
let sum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let container = document.getElementById('tableContainer');
let tabel = document.createElement('table');
container.appendChild(tabel);
let CityForm = document.getElementById('add-shop-form');


function City(name, minCust, maxCus, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCus = maxCus;
  this.avgCookie = avgCookie;
  this.avgCustPerHr = [];
  this.cookPurchEachHr = [];
  this.sum = 0;
  oop.push(this);
}
City.prototype.render = function () {
  let row = document.createElement('tr');
  tabel.appendChild(row);
  let storeName = document.createElement('th');
  row.appendChild(storeName);
  storeName.textContent = this.name;
  for (let i = 0; i < this.cookPurchEachHr.length; i++) {
    let td = document.createElement("td");
    row.appendChild(td);
    td.textContent = this.avgCustPerHr[i];
  }
  let th = document.createElement("th");
  row.appendChild(th);
  th.textContent = this.sum;
}
City.prototype.avgCust = function () {
  for (let i = 0; i < operationHour.length; i++) {
    this.avgCustPerHr[i] = randomValue(this.minCust, this.maxCus);
    this.cookPurchEachHr[i] = Math.floor(this.avgCustPerHr[i] * this.avgCookie);
    this.sum += this.avgCustPerHr[i];
    sum[i] += this.avgCustPerHr[i];
  }
}
function renderallCitys() {
  heder();
  for (var i in oop) {
    oop[i].avgCust();
    oop[i].render();
  }
  footr();
}
function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function heder() {
  let tr = document.createElement('tr');
  tabel.appendChild(tr);
  let th = document.createElement("th");
  tr.appendChild(th);
  th.textContent = 'location';
  for (let i = 0; i < operationHour.length; i++) {
    let th = document.createElement("th");
    tr.appendChild(th);
    th.textContent = operationHour[i];
  }
  let total = document.createElement("th");
  tr.appendChild(total);
  total.textContent = 'total';
}
function footr() {
  let tr = document.createElement('tr');
  tabel.appendChild(tr);
  let total = document.createElement("th");
  tr.appendChild(total);
  total.textContent = 'total';
  let x = 0;
  for (let i = 0; i < sum.length; i++) {
    let td = document.createElement("th");
    tr.appendChild(td);
    td.textContent = sum[i];
    x += sum[i];
  }
  let td = document.createElement("th");
  tr.appendChild(td);
  td.textContent = x;
}
function addNewCity(event) {
  event.preventDefault();
  let loction = event.target.shopLocation.value;
  let newMinCust = parseInt(event.target.minCust.value);
  let newMaxCust = parseInt(event.target.maxCust.value);
  let newCookiesPerSale = parseInt(event.target.cookiesPerSale.value);
  let x = new City(loction, newMinCust, newMaxCust, newCookiesPerSale);
  tabel.innerHTML = '';
  heder();
  renderallCitys();
  footr();
}
CityForm.addEventListener('submit', addNewCity);
let seattel = new City('seattel', 23, 65, 6.3);
let Tokyo = new City('Tokyo', 3, 24, 1.2);
let Dubai = new City('Dubai', 11, 38, 3.7);
let Paris = new City('Paris', 20, 38, 2.3);
let Lima = new City('Lima', 2, 16, 4.6);
renderallCitys();
console.log(oop)