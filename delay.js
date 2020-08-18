// 4. Реализовать функцию delay

function delay(time){
    console.log(`Wait ${time}`)
   return new Promise((resolve, reject) => {
       setTimeout(() => resolve("result"), time);
   }) 
}

delay(3000).then(() => console.log('Done'));