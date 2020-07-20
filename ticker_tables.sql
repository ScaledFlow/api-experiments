

CREATE DATABASE api_experiment_db;

USE api_experiment_db;

-- portolios can be custom or taken from the std_stock_sectors table list. Set is_custom to false if from std_stock_sectors

CREATE TABLE portfolios 
(
    port_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    portfolio_name varchar(50) NOT NULL,
    custom_portfolio_name varchar(50) NOT NULL,
    is_custom BOOLEAN DEFAULT false 
);

CREATE TABLE ticker_types
(
    ticker_type_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ticker_type varchar (50) NOT NULL
);


CREATE TABLE tickers 
(
    ticker_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ticker_symbol varchar(50) NOT NULL,
    ticker_name varchar(50) NOT NULL,
    ticker_type varchar(50) NOT NULL DEFAULT "stock"
);

CREATE TABLE custom_stock_portfolios
(
   custom_stock_portfolio_id int IDENTITY,
)

CREATE TABLE stocks_portfolios 
(
   stock_portfolio_id int IDENTITY,
   EMPLOYEEID int FOREIGN KEY REFERENCES Employee(employee_id),
   STOREID int FOREIGN KEY REFERENCES Store(store_id)
)

CREATE TABLE stock_listing_all
(
    stock_listing_all_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ticker_symbol varchar(50) NOT NULL,
    ticker_name varchar(50) NOT NULL,
    market_cap varchar(50) NOT NULL,
    sector_name varchar(50) NOT NULL,
    subsector_name varchar(50) NOT NULL
)

CREATE TABLE stock_sectors_2018
(
    std_stock_sector_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    stock_sector_name varchar(50) NOT NULL
)

CREATE TABLE covid_count (
    covid_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    covid_date varchar(50) NOT NULL,
    covide_death_us_ter varchar(50) NOT NULL
)

-- https://www.mysqltutorial.org/mysql-datetime/


CREATE TABLE covid_cnt (
    id INT AUTO_INCREMENT PRIMARY KEY,
    created_at DATETIME,
    covide_death_us_ter varchar(50) NOT NULL
);


INSERT INTO test_dt(created_at, covide_death_us_ter)
VALUES(Now(), 138000);


SELECT 
    *
FROM
    covid_cnt
ORDER BY
    DATE(created_at) = '2020-07-20',
    covide_death_us_ter desc;


SELECT 
    MAX(covide_death_us_ter)
FROM
    covid_cnt
WHERE
    DATE(created_at) = '2020-07-20';

SELECT DATE_SUB("2020-07-20", INTERVAL 7 DAY);    