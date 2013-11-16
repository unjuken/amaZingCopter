
/*
 * POST actions listing.
 */

var url = require('url');
var ACTION_MOVE = "move";
var ACTION_CURSOR = "cursor";

exports.action = function(req, res){

	console.log(req);

	//Get querydata
	var queryData =url.parse(req.url, true).query;
	var action = queryData.action;
	
	var resJQUERY = "";
	
	//Eval action 
	if(ACTION_MOVE == action){
		var move = queryData.move;
		
		resJQUERY = {Action: action, Move: move, Response: "OK"};
	}
	if(ACTION_CURSOR == action){
		var cursorX = queryData.cursorX;
		var cursorY = queryData.cursorY;
		
		resJQUERY = {Action: action, CursorX:cursorX, CursorY:cursorY, Response: "OK"};
	}
	
	headers = {};
	headers["Connection"] = "close";
	headers["Content-Type"] = "application/json";
	res.writeHead(200, "OK", headers);
	res.end(JSON.stringify(resJQUERY));
	
};