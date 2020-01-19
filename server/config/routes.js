const trip = require('../controllers/portfolio.js');
const path = require('path');

module.exports = function(app){
	app.get('/', (request, response)=>{
		trip.index(request, response);
	});

	app.all("*", (req,res,next) => {
  	res.sendFile(path.resolve("./public/dist/public/index.html"))
	});
}