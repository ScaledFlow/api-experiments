console.log("server.js")

// NPM finnhub
const finnhub = require("finnhub");
const request = require("request");

const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "brvkn6nrh5rd378r3l5g"; // Replace this
const finnhubClient = new finnhub.DefaultApi();

// NPM crypto-price
const price = require('crypto-price')

// Call Crypto Class
const Crypto = require("./crypto")


for (i = 0; i < cryptoTrack.length; i++) {
    price.getCryptoPrice("USD", cryptoTrack[i]).then(obj => { // Base for ex - USD, Crypto for ex - ETH 

        let price = parseFloat(obj.price);
        let priceFix = price.toFixed(2);
        let volChange = parseFloat(obj.change);
        let volChangeFix = volChange.toFixed(2);

        console.log(obj.base + " = " + priceFix + " Change = " + volChangeFix);
    
    }).catch(err => {
        console.log(err)
    });
} 



