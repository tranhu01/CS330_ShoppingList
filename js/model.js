'use strict;'

var ViewThing = require('./view')

class Subject{
    constructor(){
        this.handlers = []
    }

    subsribe(fn){
        this.handlers.push(fn);
    }

    unsubscribe(fn){
        this.handlers = this.handlers.filter(
            function(item){
                if (item !== fn){
                    return item;
                }
            }
        );
    }

    publish(msg, someobj){
        var scope = someobj || window;
        for (let fn of this.handlers){
            fn(scope, msg)
        }
    }
}


class Item extends Subject{
    constructor(name, quantity, priority, store, section, price) {
        super()
        this.name = name;
        this.priority = priority;
        this.store = store;
        this.section = section;
        this.price = price;

        this.purchased = false;
    }

    get name(){
        return this.name
    }
    set name(newName){
        this.name = newName
        this.publish("changeName", this)
    }
    get priority(){
        return this.priority
    }
    set priority(newPriority){
        this.priority = newPriority
        this.publish("changePriority", this)
    }
    get store(){
        return this.store
    }
    set store(newStore){
        this.store = newStore
        this.publish("changeStore", this)
    }
    get section(){
        return this.section
    }
    set section(newSection){
        this.section = newSection
        this.publish("changeSection", this)
    }
    get price(){
        return this.price
    }
    set price(newPrice){
        this.price = newPrice
        this.publish("changePrice", this)
    }

}

class ShoppingList extends Subject{
    constructor() {
        super()
        this.Items = []
    }

    get ShoppingList(){
        return this.Items
    }

    get length(){
        return this.Items.length
    }
    addItem(it) {
        this.Items.push(it)
        this.publish('Add Item', this)
    }
}
