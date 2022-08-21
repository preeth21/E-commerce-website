const mysql = require('mysql2');
const dotenv = require('dotenv');
let instance = null;
dotenv.config();

const connection = mysql.createConnection({
    host: "localhost" ,
    user: "root",
    password: "2108",
    database: "ecom",
    
});

connection.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    // console.log('db ' + connection.state);
});


class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService();
    }

    async getAllData() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM laptop;";

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
             console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async searchByName(name) {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM laptop WHERE name = ?;";

                connection.query(query, [name], (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });

            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

/*app.get("/laptop",(request, response) => {
    const sqlq="SELECT * FROM laptop;";
    db.query(sqlq,(err,res) =>{
        if (err) {
            throw err;
        }
        console.log(res);
        //response.send(res);
        return res;
    });
     
    
  });

  app.listen(3005,()=>{
    console.log("running");
  });*/

//app.listen(3306);
module.exports= DbService;