console.log("server.js")

// Import MySQL connection.
var connection = require("./config/connection.js");


// NPM 
const finnhub = require("finnhub");
const request = require("request");
const price = require('crypto-price')

// Require modules
const Cmdty = require("./cmdty")
const Crypto = require("./crypto")
const Stock = require("./crypto")


// Initialize Finnhub
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "brvkn6nrh5rd378r3l5g"; // Replace this
const finnhubClient = new finnhub.DefaultApi();

// Process stock


// Process Commodity ETFs



// Process crypto currencies
console.log("----------------------------------------------------------------------------------------------")
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

// Covid Status
request(
    "https://finnhub.io/api/v1/covid19/us?token=brvkn6nrh5rd378r3l5g",
    { json: true },
    (err, res, body) => {
      if (err) {
        console.log("covid error");
        return console.log(err);
      }
      console.log(body.length);
  
      // Add up total deaths for the day
      let deaths = 0;
      for (i = 0; i < body.length; i++) {
        deaths = deaths + body[i].death;
      }
  
      console.log("total deaths = " + deaths);
      //createCovidCase();
      console.log(body[0]);
    }
  );


  function intervalFunc(arg) {
    console.log(`arg was => ${arg}`);
    request(
        "https://finnhub.io/api/v1/covid19/us?token=brvkn6nrh5rd378r3l5g",
        { json: true },
        (err, res, body) => {
          if (err) {
            console.log("covid error");
            return console.log(err);
          }
          console.log(body.length);
      
          // Add up total deaths for the day
          let deaths = 0;
          for (i = 0; i < body.length; i++) {
            deaths = deaths + body[i].death;
          }
      
          console.log("total deaths = " + deaths);
          console.log(body[0]);
          let d = new Date();
          let n = d.getDate();
          let h = d.getHours();
          let m = d.getMinutes();
        //   console.log(n);
           console.log(d);
        //   console.log(h);
        //   console.log(m);
        }
      );
  }

  setInterval(intervalFunc, 900000, "test");
  
//   let num = 5;

//   for (i = 0; i < num; i++) {
//       setTimeout(myFunc, 15000, 'test');
//   }


function multiSearch() {
    var query = "SELECT * FROM covid_cnt";
    connection.query(query, function(err, res) {
    //   for (var i = 0; i < res.length; i++) {
    //     console.log(res[i].artist);
    //   }
        console.log("return from multiSearch = " + res)
    
      //runSearch();
    });
  }
  //multiSearch();

function readCovidCases() {
    console.log("Selecting all covid_cnt...\n");
    connection.query("SELECT * FROM covid_cnt", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res[0]);
      connection.end();
    });
  }
  
  readCovidCases();

  function createCovidCase(count) {
    console.log("Insert covid death count...\n");
   
    var datetime = new Date();
    console.log("date time value = " + datetime);

    var query = connection.query(
      "INSERT INTO covid_cnt SET ?",
      {
        created_at: datetime,
        covide_death_us_ter: count
      },
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " product inserted!\n");
      }
    );
      // logs the actual query being run
  console.log(query.sql);
}
  
createCovidCase(500000);


var datetime = new Date();
console.log(datetime.toISOString().slice(0,10));