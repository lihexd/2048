function getTop(row, col){
	return 15 * (row + 1) + 106.25 * row;
}

function getLeft(row, col){
	return 15 * (col + 1) + 106.25 * col;
}

function getNumberColor(number){
	switch(number){
		case 2:return "#eee4da";break;
        case 4:return "#ede0c8";break;
        case 8:return "#f2b179";break;
        case 16:return "#f59563";break;
        case 32:return "#f67c5f";break;
        case 64:return "#f65e3b";break;
        case 128:return "#edcf72";break;
        case 256:return "#edcc61";break;
        case 512:return "#9c0";break;
        case 1024:return "#33b5e5";break;
        case 2048:return "#09c";break;
        case 4096:return "#a6c";break;
        case 8192:return "#93c";break;
	}
	
	return "black";
}


function nospace(board){
	for(var row = 0;row < 4;row++){
		for(var col = 0;col < 4;col++){
			if(board[row][col] == 0){
				return false;
			}
		}
	}
	return true;
}


function moveUp(board){
	var endRow, number, flag;
	flag = 1;
	for(var row = 1;row < 4;row++){
		for(var col = 0;col < 4;col++){
			number = board[row][col];
			if(number == 0){
				continue;
			}
			else{
				endRow = row;
				while(endRow - 1 >= 0 && board[endRow - 1][col] == 0){
					endRow--;
				}
				if(endRow - 1 >=  0 && board[endRow - 1][col] == board[row][col]){
					board[endRow - 1][col] *= 2;
					board[row][col] = 0;
					flag = 0;
				}
				else{
					if(endRow != row){
						board[endRow][col] = board[row][col];
					    board[row][col] = 0;
					    flag = 0;
					}	
				}
				$("#number-cell-" + row + '-' + col).animate({
						"top":getTop(endRow, col),
				}, 400);
			}
			
		}
	}
	return flag;
}


function moveDown(board){
	var endRow, number, flag;
	flag = 1;
	for(var row = 2;row >= 0;row--){
		for(var col = 0;col < 4;col++){
			number = board[row][col];
			if(number == 0){
				continue;
			}
			else{
				
				endRow = row;
				while(endRow + 1 <= 3 && board[endRow + 1][col] == 0){
					endRow++;
				}
				if(endRow + 1 <= 3 && board[endRow + 1][col] == board[row][col]){
					board[endRow + 1][col] *= 2;
					board[row][col] = 0;
					flag = 0
				}
				else{
					if(endRow != row){
						board[endRow][col] = board[row][col];
					    board[row][col] = 0;
					    
					    flag = 0;
					}
				}
				$("#number-cell-" + row + '-' + col).animate({
						"top":getTop(endRow, col),
				}, 400);
			}
			
		}
	}
	return flag;
}

function moveLeft(board){
	var endCol, number, flag;
	flag = 1;
	for(var col = 1;col < 4;col++){
		for(var row = 0;row < 4;row++){
			number = board[row][col];
			if(number == 0){
				continue;
			}
			else{
				endCol = col;
				while(endCol - 1 >= 0 && board[row][endCol - 1] == 0){
					endCol--;
				}
				if(endCol - 1 >=  0 && board[row][endCol - 1] == board[row][col]){
					board[row][endCol - 1] *= 2;
					board[row][col] = 0;
					flag = 0;
				}
				else{
					if(endCol != col){
						board[row][endCol] = board[row][col];
					    board[row][col] = 0;
					    flag = 0;
					}
				}
				$("#number-cell-" + row + '-' + col).animate({
						"left":getLeft(row, endCol),
				}, 400);
			}
			
		}
	}
	return flag;
}

function moveRight(board){
	var endCol, number, flag;
	flag = 1;
	for(var col = 3;col >= 0;col--){
		for(var row = 0;row < 4;row++){
			number = board[row][col];
			if(number == 0){
				continue;
			}
			else{
				endCol = col;
				while(endCol + 1 <= 3 && board[row][endCol + 1] == 0){
					endCol++;
				}
				if(endCol + 1 <=  3 && board[row][endCol + 1] == board[row][col]){
					board[row][endCol + 1] *= 2;
					board[row][col] = 0;
					flag = 0;
				}
				else{
					if(endCol != col){
						board[row][endCol] = board[row][col];
					    board[row][col] = 0;
					    flag = 0;
					}
				}
				
			}
			$("#number-cell-" + row + '-' + col).animate({
					"left":getLeft(row, endCol),
			}, 400);
		}
	}
	return flag;
}