var pointerFlag = 'O';

var cells = ['11', '12', '13', '21', '22', '23', '31', '32', '33', ]
var cell = null;
var xarr = [];
var oarr = [];

function checkWinner() {
	//rows
	if( $.inArray("11", xarr) !== -1 && $.inArray("12", xarr) !== -1 && $.inArray("13", xarr) !== -1) {
		$("#gameResult").html("X is winner");
		_disable();
	}
	if( $.inArray("21", xarr) !== -1 && $.inArray("22", xarr) !== -1 && $.inArray("23", xarr) !== -1) {
		$("#gameResult").html("X is winner");
		_disable();
	}
	if( $.inArray("31", xarr) !== -1 && $.inArray("32", xarr) !== -1 && $.inArray("33", xarr) !== -1) {
		$("#gameResult").html("X is winner");
		_disable();
	}
	//columns
	if( $.inArray("11", xarr) !== -1 && $.inArray("21", xarr) !== -1 && $.inArray("31", xarr) !== -1) {
		$("#gameResult").html("X is winner");
		_disable();
	}
	if( $.inArray("12", xarr) !== -1 && $.inArray("22", xarr) !== -1 && $.inArray("32", xarr) !== -1) {
		$("#gameResult").html("X is winner");
		_disable();
	}
	if( $.inArray("13", xarr) !== -1 && $.inArray("23", xarr) !== -1 && $.inArray("33", xarr) !== -1) {
		$("#gameResult").html("X is winner");
		_disable();
	}
	//diameter
	if( $.inArray("31", xarr) !== -1 && $.inArray("22", xarr) !== -1 && $.inArray("13", xarr) !== -1) {
		$("#gameResult").html("X is winner");
		_disable();
	}
	if( $.inArray("11", xarr) !== -1 && $.inArray("22", xarr) !== -1 && $.inArray("33", xarr) !== -1) {
		$("#gameResult").html("X is winner");
		_disable();
	}

	//rows
	if( $.inArray("11", oarr) !== -1 && $.inArray("12", oarr) !== -1 && $.inArray("13", oarr) !== -1) {
		$("#gameResult").html("O is winner");
		_disable();
	}
	if( $.inArray("21", oarr) !== -1 && $.inArray("22", oarr) !== -1 && $.inArray("23", oarr) !== -1) {
		$("#gameResult").html("O is winner");
		_disable();
	}
	if( $.inArray("31", oarr) !== -1 && $.inArray("32", oarr) !== -1 && $.inArray("33", oarr) !== -1) {
		$("#gameResult").html("O is winner");
		_disable();
	}
	//columns
	if( $.inArray("11", oarr) !== -1 && $.inArray("21", oarr) !== -1 && $.inArray("31", oarr) !== -1) {
		$("#gameResult").html("O is winner");
		_disable();
	}
	if( $.inArray("12", oarr) !== -1 && $.inArray("22", oarr) !== -1 && $.inArray("32", oarr) !== -1) {
		$("#gameResult").html("O is winner");
		_disable();
	}
	if( $.inArray("13", oarr) !== -1 && $.inArray("23", oarr) !== -1 && $.inArray("33", oarr) !== -1) {
		$("#gameResult").html("O is winner");
		_disable();
	}
	//diameter
	if( $.inArray("31", oarr) !== -1 && $.inArray("22", oarr) !== -1 && $.inArray("13", oarr) !== -1) {
		$("#gameResult").html("O is winner");
		_disable();
	}
	if( $.inArray("11", oarr) !== -1 && $.inArray("22", oarr) !== -1 && $.inArray("33", oarr) !== -1) {
		$("#gameResult").html("O is winner");
		_disable();
	}
}
function _disable() {
	for (var i = 0; i < cells.length; i++) {
		var selector = "#" + cells[i];
		$(selector).attr('onclick','').unbind('click');
	}
}
function _click(cellId) {
	// remove user clicked cell form array
	cells.splice(cells.indexOf(cellId),1);
	selector = $("#" + cellId);
	if (selector.html() == '&nbsp;') {
		selector.html(pointerFlag);
		if(pointerFlag == 'X') {
			xarr.push(cellId);
			pointerFlag = 'O';
			selector.css('color', 'red');
		} else {
			oarr.push(cellId);
			pointerFlag = 'X';
			selector.css('color', 'blue');
		}
		// select randoum cell from cells array
		cell = cells[Math.floor(Math.random()*cells.length)];
	}
	checkWinner();
}

$("#11").click(function () {
	if ( $("#11").html() == '&nbsp;' ) {
		_click("11");
		_click(cell);
	}
});
$("#12").click(function () {
	if ( $("#12").html() == '&nbsp;' ) {
		_click("12");
		_click(cell);
	}
});
$("#13").click(function () {
	if ( $("#13").html() == '&nbsp;' ) {
		_click("13");
		_click(cell);
	}
});
$("#21").click(function () {
	if ( $("#21").html() == '&nbsp;' ) {
		_click("21");
		_click(cell);
	}
});
$("#22").click(function () {
	if ( $("#22").html() == '&nbsp;' ) {
		_click("22");
		_click(cell);
	}
});
$("#23").click(function () {
	if ( $("#23").html() == '&nbsp;' ) {
		_click("23");
		_click(cell);
	}
});
$("#31").click(function () {
	if ( $("#31").html() == '&nbsp;' ) {
		_click("31");
		_click(cell);
	}
});
$("#32").click(function () {
	if ( $("#32").html() == '&nbsp;' ) {
		_click("32");
		_click(cell);
	}
});
$("#33").click(function () {
	if ( $("#33").html() == '&nbsp;' ) {
		_click("33");
		_click(cell);
	}
});