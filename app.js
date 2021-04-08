const express = require('express')
const app = express()
const {Instance, Instances} = require('./src/player/instance')
const lua = require('./src/downloads/game')
 
var instances = new Instances()

var createInstance = function(res){
    var instance = new Instance();
    var id = instance.id
    instances.add(instance)
    res.header("id", id)
    res.send('Welcome')
}

var followJourney = function(req, res){
    var id = req.header('id')
    var instance = instances.get(id)
    if(instance){
        return continueJourney(instance, req, res)
    }
    res.header("id", "reset")
    return res.send('Your journey has ended.')
}

var continueJourney = function(instance, req, res){
    if(!req.params.action){
        return res.send("You have to do something")
    }
    if(instance.journey.continue(req, res)){
        return;
    }
    return res.send("No idea what you want.  Try typing 'actions' to check what you cn do right now.")
}

app.get('/', function (req, res) {

    res.send("Talk to Soup or Greyson")

})
app.get('/game/', function (req, res) {

    if(!req.header('id')){
        return createInstance(res)
    }

    return followJourney(req, res)

})

app.get('/game/journey/:action?', function (req, res) {

    if(!req.header('id')){
        return createInstance(res)
    }

    return followJourney(req, res)

})

app.get('/game/download/',function(req,res){





    res.send(lua)
})
 
app.listen(3000)