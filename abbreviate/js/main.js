
const myword ="Evan Cole";
 let x =myword.split(" "); 
let u =[];
for(let k =0 ; k<x.length;k++)
{
	u[k]=x[k].charAt(0);
}
  console.log(u.join("."));
