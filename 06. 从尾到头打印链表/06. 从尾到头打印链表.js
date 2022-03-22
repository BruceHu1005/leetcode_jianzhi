/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
	l = [];
	while(head){
		// unshift 函数可以在数组最前插入元素
		l.unshift(head.val);
		head = head.next;
	}
	return l;
};