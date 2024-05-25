
 
function Arr(arr,target) {
    for (let i = 0; i < arr.length; i++) {
       
        
        for (let j = 0; j < i+1; j++) {
          if (arr[i]+arr[j]===target) {
            console.log(arr[i],arr[j]);
            
          }
            
        }
    }
}

let arr=[5,6,11,9,3];
Arr(arr,17)
console.log("hello")