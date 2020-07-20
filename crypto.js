
console.log("crypto.js")

cryptoTrack = ["BTC", "USDC", "LINK", "BSV", "ALGO"];


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