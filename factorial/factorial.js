module.exports = (num) => {
    if(num === 0 || num === 1) {
        return 1;
    } else {
        let result = 1;
        for(let i = num; i >= 1; i--) {
            result = result * i;
        }
        return result;
    }
}
