# Tizen-App-2048

## 概述

2048是一款非常流行的数字益智游戏。这款游戏的玩法很简单但是很容易让人产生兴趣。玩家通过控制上下左右四个键来控制网格中16个小方块的整体移动方向，移动过程中数字相同的方块会合并为一个两倍数字的方块，每滑动一次会随机出现一个新的2或者4的方块，玩家如果不能及时消除小数字的方块就会造成网格被占满，游戏就会结束。如果你能够在网格被占满之前拼出2048，那你就获胜了。。

## 算法介绍

2048基于TIZEN web project开发，主要使用了Html与Javascript技术。通过四个按钮控制方块内小方块的整体移动，实现方块的合并累计等工作。

```js
var board = new Array();

$(document).ready(function(){
	$("#newGame").bind("click", function(){
	    newgame();
	});
		
	newgame();
});


function newgame(){
	//初始化格子
	initialize();
	
	//生成两个随机数
	generateOneNumber();
	generateOneNumber();

	
	//加上监听事件
	var flag;
	$(document).keydown(function(event){
		var flag;
		switch(event.keyCode){
			case 37:flag = moveLeft(board);
			        break;
			case 38:flag = moveUp(board);
			        break;
			case 39:flag = moveRight(board);
			        break;
			case 40:flag = moveDown(board);
			        break;
		}	
		
		if(flag == 0){
			generateOneNumber();
		}
		
		updateBoardView();
		
	});
	
	$('#up').click(function(){
		flag = moveUp(board);
		if(flag == 0){
			generateOneNumber();
		}
		updateBoardView();
	});
	$('#left').click(function(){
		flag = moveLeft(board);
		if(flag == 0){
			generateOneNumber();
		}
		updateBoardView();
	});
	$("#right").click(function(){
		flag = moveRight(board);
		if(flag == 0){
			generateOneNumber();
		}	
		updateBoardView();
	});
	$("#down").click(function(){
		flag = moveDown(board);
		if(flag == 0){
			generateOneNumber();
		}
		updateBoardView();
	});
	updateBoardView();
}

function initialize(){
	//初始化格子的位置和值
	for(var row = 0;row < 4;row++){
		board[row] = new Array();		
		for(var col = 0;col < 4;col++){
			board[row][col] = 0;
			$('#grid-cell-' + row + '-' + col).css(
				{
					"top": getTop(row, col),
					"left":getLeft(row, col)
				}
			);
		}
	}	
	updateBoardView();
}

function updateBoardView(){
	$(".number-cell").remove();	
	for(var row = 0;row < 4;row++){
		for(var col = 0;col < 4;col++){
			$(".grid-container").append('<div class="number-cell" id="number-cell-' + row + '-' + col + '"></div>');
		    var numberCell = $('#number-cell-' + row + '-' + col);
		    if(board[row][col] == 0){
		    	numberCell.css({
		    		"width":0,
		    		"height":0,
		    		"top":getTop(row, col) + 53,
				    "left":getLeft(row, col) + 53
		    	});
		    }
		    else{
		    	var size = 55;
		    	var number = board[row][col];
	            if(number >= 100){
		            size -= 10;
		            if(number >= 1000){
			            size -= 10;
		            }
	            }
	            var color = number >= 8 ? "white" : "#776E65";
		    	numberCell.css({
		    		"text-align":"center",
		            "line-height":"106.25px",
		            "font-size":  size + "px",
		    		"background-color":getNumberColor(board[row][col]),
		    		"color": color,
		    		"width":106.25,
		    		"height":106.25,
		    		"top":getTop(row, col),
				    "left":getLeft(row, col)
		    	});
		    	
		    	numberCell.text(board[row][col]);
		    }
		}
	}
}

function generateOneNumber(){
	if(!nospace(board)){
		var number = Math.random() >= 0.7 ? 4 : 2;	
		while(true){
			var row = parseInt(Math.floor(Math.random() * 4));
		    var col = parseInt(Math.floor(Math.random() * 4));
			if(board[row][col] == 0){
				board[row][col] = number;
				break;
			}
		}
	}
}
```
