const unique = (str) => {
    let myArr = str.split('')
    let uniqueArr = []
    
    for(let i = 0; i < myArr.length; i++){
        if(uniqueArr.includes(myArr[i])){
            return false
        } else{
            uniqueArr.push(myArr[i])
        }
    }
    return true
}
console.log(unique(`monday`))
console.log(unique(`moonday`))