// ============================================================================
// Interview Problem: Constant Time Stack Max
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Iterate over a Singly Linked List of primitives backwards. When finished,
// return a string representing the original linked list's values backwards
// in the following format:
//
//                             'A -> B -> C -> D'
//
// ------------
// Constraints:
// ------------
//
// (1) Your function must be iterative, not recursive.
// (2) Your function must consume O(n) space.
// (3) Employee either a Stack, Queue, or some combination of the two in your
//     solution. (Implement any data structures you need, as you need them.)
//
//
// -----------
// Let's code!
// -----------

function iterateAcrossLinkedListBackwards(linkedList) {
  // TODO: Implement the iterateAcrossLinkedListBackwards function here
  if (linkedList.length === 0) return "";

  let node = linkedList.head;
  let values = [node.value];
  for (let i = 1; i < linkedList.length; i++) {
    node = node.next;
    values.unshift(node.value + "");
  }

  return values.join(" -> ");
}

exports.iterateAcrossLinkedListBackwards = iterateAcrossLinkedListBackwards;
