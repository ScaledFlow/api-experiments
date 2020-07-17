
console.log("crypto.js")

cryptoTrack = ["BTC", "LINK", "BSV", "ALGO"];


class Crypto {
    constructor(name, price) {
      this.ticker = name;
      this.price = price;
    }

    getPrice() {
        console.log(`The price is ${this.price}`);
      }
    }


module.exports = Crypto;