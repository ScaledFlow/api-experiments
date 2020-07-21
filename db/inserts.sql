Ticker types (crypto, stock or commodity);

-- Populate ticker_types table
INSERT INTO ticker_types (ticker_type) VALUES ("crypto");
INSERT INTO ticker_types (ticker_type) VALUES ("stock");
INSERT INTO ticker_types (ticker_type) VALUES ("commodity");

SELECT * FROM ticker_types;

-- reflects stock sector reclasification as of 2018 by S&P, Down Jones and MSCI
-- https://www.fxcm.com/markets/insights/the-11-sectors-of-the-sp-500/

-- Populate stock_sectors-2018 table
INSERT INTO stock_sectors_2018 (stock_sector_name) VALUES ("Communication Services");
INSERT INTO stock_sectors_2018 (stock_sector_name) VALUES ("CONSUMER DISCRETIONARY");
INSERT INTO stock_sectors_2018 (stock_sector_name) VALUES ("CONSUMER STAPLES");
INSERT INTO stock_sectors_2018 (stock_sector_name) VALUES ("ENERGY");
INSERT INTO stock_sectors_2018 (stock_sector_name) VALUES ("FINANCIALS");
INSERT INTO stock_sectors_2018 (stock_sector_name) VALUES ("HEALTH CARE");
INSERT INTO stock_sectors_2018 (stock_sector_name) VALUES ("INDUSTRIALS");
INSERT INTO stock_sectors_2018 (stock_sector_name) VALUES ("MATERIALS");
INSERT INTO stock_sectors_2018 (stock_sector_name) VALUES ("REAL ESTATE SECTOR");
INSERT INTO stock_sectors_2018 (stock_sector_name) VALUES ("TECHNOLOGY");
INSERT INTO stock_sectors_2018 (stock_sector_name) VALUES ("UTILITIES");

SELECT * FROM stock_sectors_2018;


