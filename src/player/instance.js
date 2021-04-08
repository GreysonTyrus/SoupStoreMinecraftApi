const { v4: uuidv4 } = require('uuid');
const moment = require('moment');
const intro = require('../items/books/intro')


class Instances{
    constructor(){
        this.list = new Map()
        setInterval(this.cleanExpired, 60*1000);
    }
    add(instance){
        if( instance instanceof Instance){
            this.list.set(instance.id,instance) 
        }
    }
    get(id){
        console.table(this.list)
        if(this.list.has(id)){
            return this.list.get(id)
        }
        return false;
    }
    destroy(id){
        this.list.delete(id)
    }
    cleanExpired(){
        this.list.values.filter(t=>t.lastActivity < moment().subtract(1,"hour")).array.forEach(i => {
            this.destroy(i.id)
        });

    }
}

class Instance{

    constructor(){
        this.id = uuidv4()
        this.journey={}
        this.lastActivity = moment()
        this.maxHealth = 20
        this.health = 20
        this.inventory = [intro]
    }
}

module.exports = {Instance, Instances}