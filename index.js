#!/usr/bin/env node


var travis_pages = require('travis_pages');


var choice = process.argv[2];

if( choice == "install" )
	travis_pages('sK');

else
	buildAPI();

function buildAPI( files ){

	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	string = {
		updated_at: mm+'/'+dd+'/'+yyyy, 
		data: "{{data}}"
	};

	files.forEach(function(ele){
		fs.readFile(process.cwd() + '/' + ele, function read(err, data) {
	    	if (err) {
	        	return ;
	    	}
	    	string.data = data.toString();
	    	fs.outputJsonSync(process.cwd() + '/api/' + ele + '.json', string);
		});
	})
}