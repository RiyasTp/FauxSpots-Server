var db = require("../config/connection")
const Promise = require("promise")
var collection = require("../config/collections")



module.exports = {

    addProduct: (product, callback) => {
        db.get().collection(collection.PRODUCT_COLLECTION).insertOne(product).then((data) => {
            callback({ added: true })
        }).catch((err) => console.log(err))
    },


}