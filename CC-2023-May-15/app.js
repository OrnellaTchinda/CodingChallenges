// 876. Middle of the Linked List
// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.



// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:


// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.


// Constraints:

// The number of nodes in the list is in the range [1, 100].
// 1 <= Node.val <= 100
/*
 * @param { ListNode } head
    * @return { ListNode }
        */
var middleNode = function (head) {
    //create an array for all the elements of the linked list
    let arr = [head];

    // loop though the list till the end 
    while (arr[arr.length - 1].next != null)
        // push every element in the array
        arr.push(arr[arr.length - 1].next);
    // Return the middle one 
    return arr[Math.trunc(arr.length / 2)];

};