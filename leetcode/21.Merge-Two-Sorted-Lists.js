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
var mergeTwoLists = function(l1, l2) {
    if(l1 === null) return l2;
    if(l2 === null) return l1;
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