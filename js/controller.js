var stores = ['Fareway', 'Ace Hardware', 'Caseys', 'The Hatchery']
var sections = ['Produce', 'Meats']

var shoppingModel = new ShoppingList()
var myView = new ShoppingView(shoppingModel)
//shoppingModel.subscribe(redrawTable)


function clickedon() {
    let rowcolids = ['itemname', 'qty', 'store', 'category', 'price', 'priority']
    let vals = {}
    for (let cid of rowcolids) {
        vals[cid] = document.getElementById(cid).value;
    }
    let it = new Item(vals.itemname, vals.qty, vals.priority, vals.store, vals.category, vals.price)
    shoppingModel.addItem(it)
}

function populateSelect(selectId, sList){
	let sel = document.getElementById(selectId, sList)
	for (let s of sList){
		let opt = document.createElement("option")
		opt.value = s
		opt.innerHTML = s
		self.appendChild(opt)
	}
}