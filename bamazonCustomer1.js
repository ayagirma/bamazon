	var mysql = require ('mysql');
	var inquirer = require('inquirer');
	require ("console.table");
// connection made
	var connection = mysql.createConnection({
		host: 'localhost',
		port: 3306,
		user: 'root',
		password: "Honda@13",
		database: "bamazon_db"
	});
	connection.connect(function(err){
		if (err) throw err;
		// run the start function after the connection is prompt to users.
		console.log("Connected as id: "+connection.threadId);
	    afterConnection(); 
	}); 
     function afterConnection() {
       connection.query("SELECT * FROM products", function(err, res) {
		   
		    if (err) throw err;
		    console.table(res);
		   requestOrder(res);
		  });
    }
	var purchasedProduct = [];
	// The app should then prompt users with two messages.
	var requestOrder = function (info){
		// prompt a user for the information
		inquirer.prompt([
		{	
			name:"id",
			type:"input",
			message: "please type the product id, you would like to buy?",		
		},{
			name: "quantity",
			type: "input",
			message:"how many piece you need?", 
	    }]).then(function(answer){
	    	console.log("answer = " + JSON.stringify(answer));
	    	//connection.query("SELECT * FROM products WHERE id, stock_quantity SET ?", [answer[0]],
	    	 // function (err, res) {
	    	 	console.log(info);
	    		
	    		requestOrder();    	
	    		
	      }
	    );
	   updateProduct();
	}		
   
   var updateProduct = function (){
   	 console.log("updating all the products availability...\n");
   	 var query = connection.query ("UPDATE products SET ? WHERE ? ",
   	 	[
   	 	  {
   	 	    id : ""
   	      },{
   	      	stock_quantity: ""
   	      }], function(err, res){
   	      		console.log("update successfully");
   	      		//requestOrder();
   	           });
    	      } 
  