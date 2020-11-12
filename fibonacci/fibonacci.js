module.exports = (num) =>
{
    if(num === 0) return 0;
    if(num === 1) return 1;

    let a = 0, b = 1, f = 1;

    for(let i = 2; i <= num; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
}
