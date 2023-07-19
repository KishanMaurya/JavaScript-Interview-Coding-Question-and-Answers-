// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

const mergeTwoSortedList = (list1, list2)=>{

    let merge = [...list1,...list2]
    merge.sort((a,b)=> a-b)
    return merge
}

console.log(mergeTwoSortedList([1,2,4],[1,3,4]))