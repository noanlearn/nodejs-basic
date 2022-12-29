// const coffee = require("./lib/coffee")
// console.log(coffee)

// --------------------------------------------------------------------
// const { firstName, lastName } = require("./lib/user")
// console.log(firstName+lastName)

// --------------------------------------------------------------------
// // Mengimpor core module http
// const http = require('http'); 

// --------------------------------------------------------------------
// const moment = require('moment');
// const date = moment().format('Do MMMM YYYY')
// console.log(date)

// const welcome = (name) => {
//     console.log(`Hello ${name}`)
// }

// welcome('Novi Andriyani')

// --------------------------------------------------------------------
// // cek dengan Node REPL menambilkan semua object globals
// RUN on Node REPL: Object.getOwnPropertyNames(global)

// RUN: SET NODE_ENV=production && node app.js
// // mengatur nilai variabel host
// const server = new Server({
//     host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
// });

// --------------------------------------------------------------------
// const cpuInformation = process.memoryUsage();
// console.log(cpuInformation);

// --------------------------------------------------------------------
// // RUN: node app.js harry potter
// const firstName = process.argv[2];
// const lastName = process.argv[3];

// console.log(`Hello ${firstName} ${lastName}`);

// --------------------------------------------------------------------
// // memanggil core module event
// const { EventEmitter } = require('events');

// const myEventEmitter = new EventEmitter();

// // fungsi yang akan dijalankan ketika event coffee-order terjadi
// const makeCoffee = (name) => {
//     console.log(`Kopi ${name} telah dibuat!`)
// }

// const makeBill = (price) => {
//     console.log(`Bill sebesar ${price} telah dibuat!`);
// }

// const onCoffeeOrderedListener = ({ name, price }) => {
//     makeCoffee(name)
//     makeBill(price)
// }

// myEventEmitter.on('coffee-order', onCoffeeOrderedListener);

// // // mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
// // myEventEmitter.on('coffee-order', makeCoffee)
// // myEventEmitter.on('coffee-order', makeBill)

// // Memicu event 'coffee-order' terjadi.
// myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 15000 });

// --------------------------------------------------------------------
// const fs = require('fs');

// // buat callback function ketika berhasil/tidak
// const fileReadCallback = (error, data) => {
//     if (error) {
//         console.log('Gagal membaca berkas')
//         return
//     }

//     console.log(data)
// }

// fs.readFile('todo.txt', 'UTF-8', fileReadCallback)

// // jika sync
// const data = fs.readFileSync('todo.txt', 'UTF-8')
// console.log(data)

// --------------------------------------------------------------------