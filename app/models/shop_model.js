var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var typeObjectId = mongoose.Schema.Types.ObjectId;
//cons
var Shop_Schema = new Schema({
  name: { type: String, default: null },
  address: { type: String, default: 0 },
  tel: { type: Number, default: 0 }
});

module.exports = mongoose.model("Shop", Shop_Schema);

// {
//     "_id": "_id","positionName" : "positionName","dateTime_create" : "dateTime_create"
// }