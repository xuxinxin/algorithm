/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
	var num1 = getNumber(l1),
		num2 = getNumber(l2);
	return setNumber(num1+num2);
};

function getNumber(l){
	var num = 0,base =1;
	while(l !== null){
		num += l.val*base;
		base = base*10;
		l = l.next;
	}
	return num;
}

function setNumber(num){
	var listArray = [];
	if ( num == 0 ) {
		lp = new ListNode(0);
		return lp;
	};
	while( num >= 1 ){
		lp = new ListNode( num%10 );
		listArray.push(lp);
		if( listArray.length>1 ){
			listArray[listArray.length-2].next = listArray[listArray.length-1];
		}
		num = Math.floor( num/10 );
	}
	return listArray[0];
}

