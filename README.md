# api-experiments

For covide date, this program retrieves data created
by the covid-counter program. 

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