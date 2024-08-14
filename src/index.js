module.exports = function reverse (n) {
    const nToStr = n.toString();
    let result = '';
    for (let i = nToStr.length - 1; i >= 0; i -= 1) {
      result = result + nToStr[i];
    } 
    return parseInt(result);
}
