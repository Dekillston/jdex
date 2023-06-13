function ID(block, bite) {
	bite = IdSettings(bite);
	try {
		return (this.parent.document).querySelector(bite+block);
	} catch (err) {
		return this.querySelector(bite+block);
	}
}
function IDall(block, bite) {
	bite = IdSettings(bite);
	try {
		return (this.parent.document).querySelectorAll(bite+block);
	} catch (err) {
		return this.querySelectorAll(bite+block);
	}
}
function IdSettings(bite) {
	if(bite !== undefined) {
		bite = bite.toLowerCase()
		if(bite == 'i' || bite == 'id') {return '#';} else if(bite == 'c' || bite == 'class') {return '.';}else if(bite == 'b' || bite == 'block') {return '';}
	} else {return '';}
}
HTMLElement.prototype.ID = ID;
HTMLElement.prototype.IDall = IDall;
//
//
//
//
//
function AJAX(file, fun) {
	var data = this[0];
	try {
		$.ajax({
	        type: "POST",
	        url: file,
	        dataType: "json",
	        data: data,
	        success: function(d) {
	            fun(d);
	        }
	    });
	} catch (err) {
		console.log('%c Error: Non connection jQuery!', 'background: rgb(122, 0, 0, 0.63); color: #ff8c8c');
	}
}
Array.prototype.AJAX = AJAX;
