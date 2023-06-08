function ID(block, bite) {
	if(bite !== undefined) {
		bite = bite.toLowerCase()
		if(bite == 'i' || bite == 'id') {bite = '#';} else if(bite == 'c' || bite == 'class') {bite = '.';}else if(bite == 'b' || bite == 'block') {bite = '';}
	} else {var bite = '';}
	try {
		return ALL((this.parent.document).querySelectorAll(bite+block));
	} catch (err) {
		return ALL(this.querySelectorAll(bite+block));
	}
	function ALL(mass) {
		if(mass.length == 1) {return mass[0];} 
		return mass;
	}
}
Object.prototype.ID = ID;