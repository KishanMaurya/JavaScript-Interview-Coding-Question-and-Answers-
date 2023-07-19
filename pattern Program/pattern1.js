const pattern1 = ()=>{
    let rows =5;
    for (let i = 0; i < rows; i++) {
        console.log("\n");

        // second loop for printing character in each rows
        for (let j = 0; j <= i; j++) {
            console.log(i);
        }
        // console.log("\n");
    }
    return 0;
}

console.log(pattern1())

  