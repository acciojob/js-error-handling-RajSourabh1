//your code here
let input = document.getElementById("input").value;

class OutOfRangeError extends Error{
	constructor(arg) {
		super(`Expression should only consist of integers and +-/* characters and not ${arg}`)
	    this.name = "OutOfRangeError";
	}
}

class InvalidExprError extends Error{
	constructor() {
		super(`Expression should not have an invalid combination of expression`)
	    this.name = "InvalidExprError";
	}
}