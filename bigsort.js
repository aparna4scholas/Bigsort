

let array = [8,1,2,5,3];
//console.log(array);
for(let a=0;a<array.length-1;a++)
{  
    for(let b=a+1;b<array.length;b++)

        if(array[a] > array[b])
        {   console.log(array[0]);
            let temp = array[a];
            array[a] = array[b];
            array[b] = temp;
        }
        console.log(array);
    }

 console.log(array);
 /*function sum(){
       sum = array[0]+array[1];
      return sum;
 }
 sum();

 console.log("sum of two small numbers is :" +sum);*/