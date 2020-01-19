const mongoose = require('mongoose');

const CommentsSchema = new mongoose.Schema({
	comment: {
		type: String,
		minlength: [3, "Enter a valid Comment"],
		validate: {
			validator: function(value){
				return /^[a-zA-Z]+$/.test(value)
			},
			message: "Letters only for comments"
		}
	},
}, {timestamps: true});

const Comment = mongoose.model('Comment', CommentsSchema);