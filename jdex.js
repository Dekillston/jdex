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
Object.prototype.ID = ID;
Object.prototype.IDall = IDall;
