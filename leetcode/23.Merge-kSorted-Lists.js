/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
	if(lists.length === 0) return [];
    while(lists.length > 1){
		var newLists = [];
		if(lists.length % 2 === 1){
			lists.push(null);
		}
		for(var i =0; i<lists.length; i=i+2){
			newLists.push(mergeTwoLists(lists[i], lists[i+1]));
		}
		lists = newLists;
	}
	return lists[0];
};

var mergeTwoLists = function(l1, l2) {
    if(l1 === null ) return l2;
    if(l2 === null ) return l1;
    var head = l1.val<l2.val?l1:l2;
    var p = new ListNode();
    while(l1 || l2){
    	if(l1 && l2){
    		if(l1.val<l2.val){
    			p.next = l1;
    			p = p.next;
    			l1 = l1.next;
    		}else{
    			p.next = l2;
    			p = p.next;
    			l2 = l2.next;
    		}
    	}else if(l1 === null){
    		p.next = l2;
    		return head;
    	}else{
    		p.next = l1;
    		return head;
    	}
    }
};