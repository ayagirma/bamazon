yagi@DESKTOP-6FIUK42 MINGW64 ~/desktop/Bootcamp-Homework/bamazondb (master)
$ node bamazonCustomer1.js
Connected as id: 61
id  product_name  grocery      price  stock_quantity
--  ------------  -----------  -----  --------------
1   beef          grocery      6.5    100
2   egg           grocery      1.5    100
3   milk          grocery      2.5    100
4   tv            electronics  99.9   100
5   laptop        electronics  750    100
6   pen           stationery   0.5    100
7   notePad       stationery   1.3    25
8   book          stationery   18     100
9   tshirt        cloth        21     100

? please type the product id, you would like to buy?
 8
? how many piece you need? 10
answer = {"id":"8","quantity":"10"}
updating all the products availability...

[ RowDataPacket {
    id: 1,
    product_name: 'beef',
    grocery: 'grocery',
    price: 6.5,
    stock_quantity: 100 },
  RowDataPacket {
    id: 2,
    product_name: 'egg',
    grocery: 'grocery',
    price: 1.5,
    stock_quantity: 100 },
  RowDataPacket {
    id: 3,
    product_name: 'milk',
    grocery: 'grocery',
    price: 2.5,
    stock_quantity: 100 },
  RowDataPacket {
    id: 4,
    product_name: 'tv',
    grocery: 'electronics',
    price: 99.9,
    stock_quantity: 100 },
  RowDataPacket {
    id: 5,
    product_name: 'laptop',
    grocery: 'electronics',
    price: 750,
    stock_quantity: 100 },
  RowDataPacket {
    id: 6,
    product_name: 'pen',
    grocery: 'stationery',
    price: 0.5,
    stock_quantity: 100 },
  RowDataPacket {
    id: 7,
    product_name: 'notePad',
    grocery: 'stationery',
    price: 1.3,
    stock_quantity: 25 },
  RowDataPacket {
    id: 8,
    product_name: 'book',
    grocery: 'stationery',
    price: 18,
    stock_quantity: 100 },
  RowDataPacket {
    id: 9,
    product_name: 'tshirt',
    grocery: 'cloth',
    price: 21,
    stock_quantity: 100 } ]
? please type the product id, you would like to buy?
 update successfully