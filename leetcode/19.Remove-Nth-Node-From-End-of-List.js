/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var before = head,
        after  = head;
    var vernier = 0;

    while(after.next!== null){
        if(vernier<n){
            vernier++;
            after = after.next;
        }else{
            before = before.next;
            after  = after.next;
        }
    }
    if(vernier === n){
        before.next = before.next.next;
    }else if(vernier === n-1){
        head = head.next;
    }
    return head;
};