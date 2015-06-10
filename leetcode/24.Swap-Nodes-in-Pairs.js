/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    var pNode = head,
		pNode2;
	if(pNode && pNode.next){
		head = pNode.next;
	}else{
		return pNode;
	}
	while(pNode && pNode.next ){
		if(pNode2){
			pNode2.next = pNode.next;
		}
		pNode2 = pNode.next;             
		pNode.next = pNode.next.next;
		pNode2.next = pNode;
		pNode2 = pNode2.next;
		pNode = pNode.next;
	}
	return head;
};