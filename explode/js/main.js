function explode(x){
   
    let score;

    if (typeof x[0] === 'number' && typeof x[1] === 'number') {
        score = x[0] + x[1];
    } 
    else if (typeof x[0] === 'number') {
        score = x[0];
    } 
    else if (typeof x[1] === 'number') {
        score = x[1];
    } 
    else {
        return 'Void!';
    }
    
    let result = Array(score).fill(x);
    return result;

}
const result= explode([6, 'c']);
console.log(result);

