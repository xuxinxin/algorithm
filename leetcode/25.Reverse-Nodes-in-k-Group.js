/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    var pNode = head,
		pNode2 = head,
		pStart = head,
		flag = 0,
		pEnd;
	var isValid = false;
	if(k = 1 || head==null){
		return head;
	}
	while(pNode){
		// 判断后面是否可以翻转
		if(!isValid){
			for(var i = 0; i<k-1; i++){
				if(pNode.next === null){
					return head;
				}
				pNode = pNode.next;
			}
			pNode = pStart;
			isValid = true;
		}
		//翻转的过程
		if( flag < k-1 ){
			pNode2 = pNode.next;
			pNode.next = pNode.next.next;
			pNode2.next = pStart;
			pStart = pNode2;
			flag++;
		}else{
		// 完成k个节点翻转之后要做一次合并，继续往下翻转
			if(pEnd){
				pEnd.next = pStart;
			}else{
				head = pStart;
			}
			pEnd = pNode;
			pNode = pNode.next;
			pStart = pNode;
			
			isValid = false;
			flag  = 0;
		}
		
	}
	return head;
};