const express = require('express')
const donenv = require('dotenv').config()
const port = process.env.PORT || 5000
const connectDB = require('./backend/config/db')
const { errorHandler } = require('./backend/middleware/errorMiddleware')
const Punky = require('./backend/models/punkyModel')
const asyncHandler = require('express-async-handler')
const axios = require('axios').default;
var MongoClient = require('mongodb').MongoClient;
const cors = require('cors');

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(cors())



app.use('/api/', require('./backend/routes/punkyRoutes'))

app.use(errorHandler)

app.get('/', (req,res) => res.send('Hello all punkys!'))

const getpunky = asyncHandler(async (req, res) => {
    try{

        let ledgerRaw =[];
    for(let i=0; i <= 30 ; i++){
        console.log(i)
        let from = i * 100;
        let to = (i * 100) + 100;
        const ledgerUrl = "https://api.tzkt.io/v1/bigmaps/94628/keys?offset=".concat(from.toString()).concat("&limit=").concat(to.toString());
        var ledgerGet = await axios.get(ledgerUrl);
        ledgerRaw.push.apply(ledgerRaw,ledgerGet.data);

    }
    var verynewLedgerRaw = ledgerRaw.filter((el) => el.value == "1");
    let newLedgerRaw = [...new Set(verynewLedgerRaw)];
    let ownerlist = [];
    for (let i=0; i < newLedgerRaw.length; i++){
        if(parseInt(newLedgerRaw[i]["value"]) === 1){
            if(newLedgerRaw[i]["key"]["address"].slice(0,2) == "tz"){
                ownerlist.push(newLedgerRaw[i]["key"]["address"]);
            }
            }
        }
    const uniqueIds = [];

    const unique = verynewLedgerRaw.filter(element => {
        const isDuplicate = uniqueIds.includes(element.id);
    
        if (!isDuplicate) {
        uniqueIds.push(element.id);
    
        return true;
        }
    });

    const newArr = unique.map(({id,active,hash,firstLevel,lastLevel,updates, ...rest}) => {
        return rest;
      });

      

      const narr = newArr.map((el)=> {
          return {wallet : el.key.address,
        token: el.key.nat,
        value: el.value}
      })
      
    
    MongoClient.connect('mongodb+srv://punky:punky@cluster0.vdpyn.mongodb.net/punky?retryWrites=true&w=majority', function(err, db) {
        if (err) throw err;
        var dbo = db.db("punky");
        var myquery = { value: "1" };
        dbo.collection("punky").deleteMany(myquery, function(err, obj) {
        if (err) throw err;
        console.log(obj.result + " document(s) deleted");
        db.close();
        });
    });

    MongoClient.connect('mongodb+srv://punky:punky@cluster0.vdpyn.mongodb.net/punky?retryWrites=true&w=majority', function(err, db) {
        if (err) throw err;
        var dbo = db.db("punky");
        dbo.collection("punky").insertMany(narr, function(err, res) {
          if (err) throw err;
          console.log("Number of documents inserted: " + res.insertedCount);
          db.close();
        });
      });

    } catch (err) {
        if (err.message === 'You need to initialize BeaconWallet by calling beaconWallet.requestPermissions first'){
        }
        console.log(err);
    }

})



const getcyberpunky = asyncHandler(async (req, res) => {
    try{

        let ledgerRaw =[];
    for(let i=0; i <= 30 ; i++){
        console.log(i)
        let from = i * 100;
        let to = (i * 100) + 100;
        const ledgerUrl = "https://api.tzkt.io/v1/bigmaps/109067/keys?offset=".concat(from.toString()).concat("&limit=").concat(to.toString());
        var ledgerGet = await axios.get(ledgerUrl);
        ledgerRaw.push.apply(ledgerRaw,ledgerGet.data);

    }
    var verynewLedgerRaw = ledgerRaw.filter((el) => el.value == "1");
    let newLedgerRaw = [...new Set(verynewLedgerRaw)];
    let ownerlist = [];
    for (let i=0; i < newLedgerRaw.length; i++){
        if(parseInt(newLedgerRaw[i]["value"]) === 1){
            if(newLedgerRaw[i]["key"]["address"].slice(0,2) == "tz"){
                ownerlist.push(newLedgerRaw[i]["key"]["address"]);
            }
            }
        }
    const uniqueIds = [];

    const unique = verynewLedgerRaw.filter(element => {
        const isDuplicate = uniqueIds.includes(element.id);
    
        if (!isDuplicate) {
        uniqueIds.push(element.id);
    
        return true;
        }
    });

    const newArr = unique.map(({id,active,hash,firstLevel,lastLevel,updates, ...rest}) => {
        return rest;
      });

      

      const narr = newArr.map((el)=> {
          return {wallet : el.key.address,
        token: el.key.nat,
        value: el.value}
      })
      
    
    MongoClient.connect('mongodb+srv://punky:punky@cluster0.vdpyn.mongodb.net/punky?retryWrites=true&w=majority', function(err, db) {
        if (err) throw err;
        var dbo = db.db("cyberpunky");
        var myquery = { value: "1" };
        dbo.collection("punky").deleteMany(myquery, function(err, obj) {
        if (err) throw err;
        console.log(obj.result + " document(s) deleted");
        db.close();
        });
    });

    MongoClient.connect('mongodb+srv://punky:punky@cluster0.vdpyn.mongodb.net/punky?retryWrites=true&w=majority', function(err, db) {
        if (err) throw err;
        var dbo = db.db("cyberpunky");
        dbo.collection("punky").insertMany(narr, function(err, res) {
          if (err) throw err;
          console.log("Number of documents inserted: " + res.insertedCount);
          db.close();
        });
      });

    } catch (err) {
        if (err.message === 'You need to initialize BeaconWallet by calling beaconWallet.requestPermissions first'){
        }
        console.log(err);
    }

})


const getspacepunky = asyncHandler(async (req, res) => {
    try{

        let ledgerRaw =[];
    for(let i=0; i <= 30 ; i++){
        console.log(i)
        let from = i * 100;
        let to = (i * 100) + 100;
        const ledgerUrl = "https://api.tzkt.io/v1/bigmaps/119167/keys?offset=".concat(from.toString()).concat("&limit=").concat(to.toString());
        var ledgerGet = await axios.get(ledgerUrl);
        ledgerRaw.push.apply(ledgerRaw,ledgerGet.data);

    }
    var verynewLedgerRaw = ledgerRaw.filter((el) => el.value == "1");
    let newLedgerRaw = [...new Set(verynewLedgerRaw)];
    let ownerlist = [];
    for (let i=0; i < newLedgerRaw.length; i++){
        if(parseInt(newLedgerRaw[i]["value"]) === 1){
            if(newLedgerRaw[i]["key"]["address"].slice(0,2) == "tz"){
                ownerlist.push(newLedgerRaw[i]["key"]["address"]);
            }
            }
        }
    const uniqueIds = [];

    const unique = verynewLedgerRaw.filter(element => {
        const isDuplicate = uniqueIds.includes(element.id);
    
        if (!isDuplicate) {
        uniqueIds.push(element.id);
    
        return true;
        }
    });

    const newArr = unique.map(({id,active,hash,firstLevel,lastLevel,updates, ...rest}) => {
        return rest;
      });

      

      const narr = newArr.map((el)=> {
          return {wallet : el.key.address,
        token: el.key.nat,
        value: el.value}
      })
      
    
    MongoClient.connect('mongodb+srv://punky:punky@cluster0.vdpyn.mongodb.net/punky?retryWrites=true&w=majority', function(err, db) {
        if (err) throw err;
        var dbo = db.db("spacepunky");
        var myquery = { value: "1" };
        dbo.collection("punky").deleteMany(myquery, function(err, obj) {
        if (err) throw err;
        console.log(obj.result + " document(s) deleted");
        db.close();
        });
    });

    MongoClient.connect('mongodb+srv://punky:punky@cluster0.vdpyn.mongodb.net/punky?retryWrites=true&w=majority', function(err, db) {
        if (err) throw err;
        var dbo = db.db("spacepunky");
        dbo.collection("punky").insertMany(narr, function(err, res) {
          if (err) throw err;
          console.log("Number of documents inserted: " + res.insertedCount);
          db.close();
        });
      });

    } catch (err) {
        if (err.message === 'You need to initialize BeaconWallet by calling beaconWallet.requestPermissions first'){
        }
        console.log(err);
    }

})


const getlegendarypunky = asyncHandler(async (req, res) => {
    try{

        let ledgerRaw =[];
    for(let i=0; i <= 30 ; i++){
        console.log(i)
        let from = i * 100;
        let to = (i * 100) + 100;
        const ledgerUrl = "https://api.tzkt.io/v1/bigmaps/133634/keys?offset=".concat(from.toString()).concat("&limit=").concat(to.toString());
        var ledgerGet = await axios.get(ledgerUrl);
        ledgerRaw.push.apply(ledgerRaw,ledgerGet.data);

    }
    var verynewLedgerRaw = ledgerRaw.filter((el) => el.value == "1");
    let newLedgerRaw = [...new Set(verynewLedgerRaw)];
    let ownerlist = [];
    for (let i=0; i < newLedgerRaw.length; i++){
        if(parseInt(newLedgerRaw[i]["value"]) === 1){
            if(newLedgerRaw[i]["key"]["address"].slice(0,2) == "tz"){
                ownerlist.push(newLedgerRaw[i]["key"]["address"]);
            }
            }
        }
    const uniqueIds = [];

    const unique = verynewLedgerRaw.filter(element => {
        const isDuplicate = uniqueIds.includes(element.id);
    
        if (!isDuplicate) {
        uniqueIds.push(element.id);
    
        return true;
        }
    });

    const newArr = unique.map(({id,active,hash,firstLevel,lastLevel,updates, ...rest}) => {
        return rest;
      });

      

      const narr = newArr.map((el)=> {
          return {wallet : el.key.address,
        token: el.key.nat,
        value: el.value}
      })
      
    
    MongoClient.connect('mongodb+srv://punky:punky@cluster0.vdpyn.mongodb.net/punky?retryWrites=true&w=majority', function(err, db) {
        if (err) throw err;
        var dbo = db.db("legendarypunky");
        var myquery = { value: "1" };
        dbo.collection("punky").deleteMany(myquery, function(err, obj) {
        if (err) throw err;
        console.log(obj.result + " document(s) deleted");
        db.close();
        });
    });

    MongoClient.connect('mongodb+srv://punky:punky@cluster0.vdpyn.mongodb.net/punky?retryWrites=true&w=majority', function(err, db) {
        if (err) throw err;
        var dbo = db.db("legendarypunky");
        dbo.collection("punky").insertMany(narr, function(err, res) {
          if (err) throw err;
          console.log("Number of documents inserted: " + res.insertedCount);
          db.close();
        });
      });

    } catch (err) {
        if (err.message === 'You need to initialize BeaconWallet by calling beaconWallet.requestPermissions first'){
        }
        console.log(err);
    }

})


setInterval(getpunky, 900000);
setInterval(getcyberpunky, 900000);
setInterval(getspacepunky, 900000);
setInterval(getlegendarypunky, 900000);


app.listen(port, () => console.log(`server started on port ${port}`))
