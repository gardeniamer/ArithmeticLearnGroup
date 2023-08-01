/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start
function ListNode(val) {
    this.val = val
    this.next = null
}


var MyLinkedList = function () {
    this.size = 0
    this.head = null
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {

    if (this.size === 0) return -1;
    if (index < 0 || index >= this.size) return -1;
    let current = this.head
    for (let i = 0; i < index; i++) {
        current = current.next
    }
    return current.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let node = new ListNode(val)
    if (this.size == 0) {
        this.head = node
    }
    else {
        node.next = this.head
        this.head = node
    }
    this.size++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {

    if (this.size == 0) {
        this.addAtHead(val)
    }
    else {
        let current = this.getNode(this.size - 1)
        current.next = new ListNode(val)
    }
    this.size++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this.size) return;
    const current = new ListNode(val)
    if (index <= 0) { return this.addAtHead(val) }
    if (index === this.size) { return this.addAtTail(val) }
    let pre = this.getNode(index - 1)
    current.next = pre.next
    pre.next = current
    this.size++
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (this.size === 0) return;
    if (index < 0 || index >= this.size) return;
    if (index === 0) { this.head = this.head.next }
    if (index > 0 && index < this.size) {
        let pre = this.getNode(index - 1)
        let current = this.getNode(index)
        pre.next = current.next
        this.size--
    }

};

MyLinkedList.prototype.getNode = function (index) {
    if (this.size === 0) return null;
    if (index < 0 || index >= this.size) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
        current = current.next
    }
    return current;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */