class FlaskStorageManager{

    constructor(model) {
        let self = this
        model.subscribe(function(slist, msg) {
            self.saveFlask(slist)
        })
    }

    saveFlask(slist) {
        let ls_list = JSON.stringify({newItems:slist.newItems})
        let post_string="/shoppinglist"

        let config={}
        config.method='POST'
        config.body=ls_list
        config.header={'Content-Type':'application/json','Accept':'application/json'}

        fetch(post_string,config)
    }

    loadFlask(){
        let model=this.model
        this.model.removeAll()

        let config={}
        config.method='GET'
        config.header={'Content-Type':'application/json','Accept':'application/json'}

        get_string="/shoppinglist"

        let fromFlask=fetch(get_string, config)
            .then(function (response) { return response.json() })
            .catch(error => console.error("error: ", error))
            .then(function (myJson) {
                myJson=JSON.stringify(myJson)
                let restoredList=JSON.parse(myJson)
                if (restoredList!=null){
                    for (let val of restoredList){
                        let item = new Item(val.name, val.quantity, val.priority, val.store,
                            val.section, val.price)
                        model.addItem(item)
                    }
                }
            })
    }
}