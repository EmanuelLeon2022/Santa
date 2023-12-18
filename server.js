require('dotenv').config()
const express = require('express')
const app = express()
const froots = require('./models/gifts')
const Gift = require('./models/gift')
const mongoose = require('mongoose');
const methodOverride = require('method-override');


app.set("view engine","jsx")
// --> Gives ViewEngine
app.engine("jsx", require("express-react-views").createEngine())
// --> Initializes ViewEngine
app.use(methodOverride('_method'));

app.use(express.urlencoded({extended:false}));
// --> Parse URLencoded responses [req.body*]

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
// --> Intercept reqRes proccess and manage dataFlow



// ---------------------------------[Middleware]


app.get('/gifts', (req,res)=>{
    Gift.find({},(err,allGifts)=>{
        console.log("ALL_GIFTS:", allGifts)
        gifts: allGifts
        res.render('Index',{
            gifts: allGifts
        })
    })
})
// ----------------------------------[Index (R)]

app.get('/gifts/new',(req,res)=>{
    res.render('New')
})
// --------------------------------------[New]

app.post('/gifts',(req,res)=>{
    if(req.body.sure === 'on'){ 
        req.body.sure = true; 
    } else { 
        req.body.sure = false; 
    }
    Gift.create(req.body,(err, createdGift)=>{
        console.log("Created Gift: ",req.body)
        console.log(err)
    })
    res.redirect('/gifts')
    // ---> Add New Fruit to Existing DataSet
})
// ----------------------------------[POST (C)]


app.get('/gifts/:id/edit', (req, res)=>{
    Gift.findById(req.params.id, (err, foundGift)=>{ 
      if(!err){
        res.render(
    		  'Edit',
    		{
    			gift: foundGift 
    		}
    	);
    } else {
      res.send({ msg: err.message })
    }
    });
});
// --------------------------------------[Edit]



app.put('/gifts/:id', (req, res)=>{
    if(req.body.sure === 'on'){
        req.body.sure = true;
    } else {
        req.body.sure = false;
    }
    Gift.findByIdAndUpdate(req.params.id, req.body, (err, updatedGift)=>{
       console.log(updatedGift)
        res.redirect(`/gifts/${req.params.id}`);
    });
});
// -----------------------------------------------[PUT/PATCH (U)]



app.delete('/gifts/:id', (req, res)=>{
    Gift.findByIdAndRemove(req.params.id,(err, data)=>{
        res.redirect('/gifts')
    })
});
// --------------------------------------[Delete (D)]

app.get('/gifts/ribbon', (req, res)=>{
    Fruit.create([
        {
            name:'grapefruit',
            item:'pink',
            sure:true
        },
        {
            name:'grape',
            item:'purple',
            sure:false
        },
        {
            name:'avocado',
            item:'green',
            sure:true
        }
    ], (err, data)=>{
        res.redirect('/gifts');
    })
});






app.get('/gifts/:id', (req,res)=>{
    Gift.findById(req.params.id, (err, foundGift)=>{
        res.render('Show',{
            gift: foundGift
        })
    });
})
// ----------------------------------[Show]



app.listen(3000,()=>{
    console.log("AUGH")
})