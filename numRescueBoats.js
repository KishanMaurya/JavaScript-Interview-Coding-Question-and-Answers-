var numRescueBoats = function(people, limit) {
    people.sort((a,b)=> a-b)
    // for(let i=0; i<people.length; i++){
    //     for(let j=i+1; j<people.length; j++){
    //         if(people[i] + people[j] === limit){

    //         }
    //     }
    // }
    let count =0; 
    let left = 0
    let right = people.length-1;
    while(left <= right){
        let sum  = people[left] + people[right]
        if(sum <= limit){
            count ++;
            left++;
            right--;
        }else{
            count++;
            right++
        }
    }
    return count
};


//Input: people = [1,2], limit = 3
console.log(numRescueBoats([1,2],3))