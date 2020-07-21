console.log("server.js")

// Import MySQL connection.
var connection = require("./config/connection.js");


function readCovidCases(day) {
    console.log("Selecting all covid_cnt...\n");
     //connection.query("SELECT covide_death_us_ter FROM covid_deaths_us_ter WHERE DATE(created_at) = '2020-07-21';", function(err, res) {
     connection.query("SELECT covide_death_us_ter FROM covid_deaths_us_ter WHERE DATE(created_at) = '" + getPastDate(day) + "';", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      console.log(res.length);

      let max = 0;
      for (i=0; i < res.length; i++) {
        if (res[i].covide_death_us_ter > max) {
          max = res[i].covide_death_us_ter
        }
      }

      console.log(res[0].covide_death_us_ter);

      console.log("the value of max is = " + max);
      connection.end();
    });
  }
  
  readCovidCases(1);


 var pastDate = getPastDate(0);
 console.log("past date= " + pastDate);

 // Calculate past date.
function getPastDate(days) {
  
  var d = new Date();
  d.setDate(d.getDate() - days);
  var date = d.getDate();
  var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
  var year = d.getFullYear();
  var dateStr = year + "-" + month + "-" + date;

  return dateStr;
}