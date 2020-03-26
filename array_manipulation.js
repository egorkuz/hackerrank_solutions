function arrayManipulation(n, queries) {
    let arr = new Array(n)
    arr.fill(0)
    for (let i=0;i<queries.length;i++){
        arr[queries[i][0]-1]+=queries[i][2]
        if(queries[i][1]<n){
            arr[queries[i][1]]-=queries[i][2]
        }
    }
    let max = 0
    let sum = 0
    for (let i=0;i<arr.length;i++) {
        sum+=arr[i]
        max = Math.max(sum,max)
    }
    return max
    // let obj = {}
    // for (let i=0;i<queries.length;i++){
    //     let a = queries[i][0]
    //     let b = queries[i][1]
    //     let c = queries[i][2] 
    //     if(!obj.hasOwnProperty(a)) {
    //         obj[a] = c 
    //     }
    //     else {
    //         obj[a]+= c
    //     }
    //     if(b+1<=n){
    //               if(!obj.hasOwnProperty(b+1)){
    //         obj[b+1] = -c 
    //     }
    //     else {
    //         obj[b+1] -= c 
    //     }}}
    // let val = Object.values(obj)
    // let max = 0
    // let sum = 0
    // for (let i=0;i<val.length;i++) {
    //     sum+=val[i]
    //     max = Math.max(sum,max)
    // }
    // return max
}