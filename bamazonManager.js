	var inquirer = require("inquirer");
	var mysql = require("mysql");
	var Table = require("easy-table");
	

	var options = ["View products for sale", "View low inventory", "Add to inventory", "Add new product", "Back to main menu"];

	var connection = mysql.createConnection({
			host: 'localhost',
			port: 3306,
			user: 'root',
			password: "Honda@13",
			database: "bamazon_db"
		});

	connection.connect(function(err) {
		console.log("Connected as id: " + connection.threadId);
		start();
		if (err) throw err;
	});

	var start = function (){
		inquirer.prompt([
		{
			name: "manager",
			type: "list",
			message: "\n Hello, manager go to options. \n",
			choices: options
		}
	  ]).then(function(res){
	  	switch (res.manger){
	  		case options[0]:
	  			viewProductsForSale();
	  			break;
	  		case options[1]:
	  			viewLowProducts();
	  			break;
	  		case options[2]:
	  			addToInventory();
	  			break;
	  		case options[3]:
	  			addNewProducts();
	  			break;
	  	}
	  });
	};

	function managerView(){
		inquirer.promp([
		{
			name: "options",
			type: "list",
			message: "the list of avilable products",
			choices: [ "id, product_name,department_name,price,stock_quantity"]	
		}
		]).then(function(res){
			connection.query("SELECT id, product_name,department_name,price,stock_quantity FROM products ORDER BY price", function(err, result){
				if(err) throw err;
				console.log(
					"\n" + 
					Table.print(results, {
						id: {name:"Product ID"},
				        products_name:{name:
				        	"product Name"},
				        department_name:{name:
				        	"Department"},
				        price: {name: "Price"},
				        stock_quantity:{name:
				        	"Stock_Quantity"}
				      })
					);
				    customer();
			    });
			 
		
	});
	}
	

//module.exports = bamazonCustomer1;