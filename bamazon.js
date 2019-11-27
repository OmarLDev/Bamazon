var mySQL = require('mysql');
var inquirer = require('inquirer');

var conn = mySQL.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "BAMAZON" 
});

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
            process.exit();
            closeConnection();
        }
    });
}

function getProducts(){

}

function showCustomerMenu(){
    // inquirer.prompt()

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