class PowerOfTwoMaxHeap {
    constructor(x) {
      this.x = x;
      this.heap = [];
    }
  
    insert(value) {
      this.heap.push(value);
      this.bubbleUp(this.heap.length - 1);
    }
  
    popMax() {
      if (this.heap.length === 0) return null;
      const max = this.heap[0];
      const end = this.heap.pop();
      if (this.heap.length > 0) {
        this.heap[0] = end;
        this.sinkDown(0);
      }
      return max;
    }
  
    bubbleUp(index) {
      const parentIndex = this.getParentIndex(index);
      if (index > 0 && this.heap[index] > this.heap[parentIndex]) {
        this.swap(index, parentIndex);
        this.bubbleUp(parentIndex);
      }
    }
  
    sinkDown(index) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      let maxChildIndex = null;
      if (leftChildIndex < this.heap.length) {
        maxChildIndex = leftChildIndex;
      }
      if (rightChildIndex < this.heap.length &&
          this.heap[rightChildIndex] > this.heap[leftChildIndex]) {
        maxChildIndex = rightChildIndex;
      }
      if (maxChildIndex !== null && this.heap[index] < this.heap[maxChildIndex]) {
        this.swap(index, maxChildIndex);
        this.sinkDown(maxChildIndex);
      }
    }
  
    getParentIndex(index) {
      return Math.floor((index - 1) / this.x);
    }
  
    getLeftChildIndex(index) {
      return index * this.x + 1;
    }
  
    getRightChildIndex(index) {
      return index * this.x + this.x + 1;
    }
  
    swap(index1, index2) {
      const temp = this.heap[index1];
      this.heap[index1] = this.heap[index2];
      this.heap[index2] = temp;
    }
  }
  