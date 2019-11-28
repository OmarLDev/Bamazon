var mySQL = require('mysql');
var inquirer = require('inquirer');

var conn = mySQL.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "BAMAZON" 
});

var productIds = [];

function createConnection(){
    conn.connect((err) => {
        if(err) console.log(err);
    });
}

function closeConnection(){
    conn.end();
}

//TODO: Validate if user exists before prompting for password
//function userExists(){}

function getUserRole(username, password){
    conn.query(`SELECT role FROM users WHERE username = ? AND password = ?`,[
        username, 
        password
    ], (err, res) => {
        if(err) console.log(err);
        if(res[0]){
            console.log(res[0].role);
            role = res[0].role;
            switch(role){
                case 'Customer':
                    showCustomerMenu();
                    break;
            }
        }else{
            console.log('Sorry, user not found');
            quit();
        }
    });
}

function getProducts(){
    conn.query(`SELECT * FROM products `,[

    ], (err, res) => {
        if(err) console.log(err);
            res.forEach(element => {
                console.log(`id: ${element.item_id} | name : ${element.product_name} | price : $${element.price}`)
            });
            showPurchaseMenu();
    });

}

function purchaseItem(){
    

}

function showPurchaseMenu(){
    inquirer.prompt([{
        type: 'list',
        name: 'confirmation',
        choices: ['Yes','No'],
        message: 'Do you know the ID of the item you want to buy?'
    }]).then((response) => {
        if(response.confirmation === 'Yes'){
            purchaseItem();
        }else{
            getProducts();
        }
    });
}

function showCustomerMenu(){
    inquirer.prompt([{
        type : 'list',
        message : 'Please select what you want to do',
        name : 'selection',
        choices : ['Show items','Purchase', 'Exit']
    }]).then((response) => {
        switch(response.selection){
            case 'Show items':
                getProducts();
                break;
            case 'Purchase':
                showPurchaseMenu();
                break;
            case 'Exit':
                console.log('Thanks for visiting Bamazon. Good bye!');
                quit();
                break;
        }
    });
}

function quit(){
    closeConnection();
    process.exit();
}

function start(){
    inquirer.prompt([{
        type : 'input',
        message: 'Welcome, please enter your username',
        name : 'username'
    },{
        type : 'password',
        message : 'Please enter your password',
        name : 'password'
    }]).then((response) => {
        createConnection();
        getUserRole(response.username.trim(), response.password.trim());
    });
}

start();