const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Portfolio', {useNewUrlParser: true});
require('../config/mongoose.js');
const { Http } = require('@status/codes');
const Comment = mongoose.model('Comment');

module.exports = {
	index: function(request, response){
		Comment.find({}, (error, comment)=>{
			if(error){
				console.log("Index Error");
				response.json(error);
			}
			else{
				console.log("Index: Good");
				response.json(comment);
			}
		})
	}
}