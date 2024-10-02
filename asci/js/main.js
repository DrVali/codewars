function uniTotal(string) {
  let array1 = string.split("");
  let count = 0;
  //for (let i = 0; i < string.lenght; i++) console.log(string(i));
  array1.map((w) => {
    let k = w.toString();
    count += k.charCodeAt(0);
  });
  
  return count;
}

const s = uniTotal("Mary Had A Little Lamb");
console.log(s);
