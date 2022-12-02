const str = ("hi", "hello")

const longestWord = (str) => {
    const strArray = str.split(' ')
    const sortedStrArray = strArray.sort(
        (strA, strB) => {
            return strB.length - strA.length;
        }
    );
    return sortedStrArray[0]
}
console.log(longestWord(str))