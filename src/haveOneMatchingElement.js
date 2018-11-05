
//NOTE: does not account for duplicates

var haveOneMatchingElement = function(arrA, arrB) {

	return arrA.some(elementOfA => {
		// stops searching if an element of A matches one of B
		return arrB.includes(elementOfA);
	});
};

export default haveOneMatchingElement