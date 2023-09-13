/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
    return {val, next};
  }
  let node = {};
  if (list1 === null) {
    node = list2;
    return node;
  }
  if (list2 === null) {
    node = list1;
    return node;
  } if (list1.val >= list2.val) {
    node = ListNode(list2.val, mergeTwoLists(list1, list2.next))
  } else {
    node = ListNode(list1.val, mergeTwoLists(list2, list1.next))
  }
return node;
};