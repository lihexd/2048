function showNumberAnimate(row, col, number){
	var cell = $('#number-cell-' + row + '-' + col);
	var size = 55;
	if(number >= 100){
		size -= 10;
		if(number >= 1000){
			size -= 10;
		}
	}
	
	cell.css({
		"text-align":"center",
		"line-height":"106.25px",
		"font-size":  size + "px",
		"background-color":getNumberColor(number)
	});
	
	cell.text(number);

	cell.animate({
		width:"106.25px",
		height:"106.25px",
		"top":getTop(row, col),
		"left":getLeft(row, col),
	}, 200);
}

