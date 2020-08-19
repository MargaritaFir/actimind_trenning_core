

// 5. Реализовать функцию retryOperation

function fn_1() {
	return new Promise((resolve, reject) => {
		const n = Math.floor(Math.random() * 11);
		n > 3 ? reject('error') : resolve(n)
	});
}


function retryOperation(fn, maxAttempts){
let count = 0;
    return new Promise((resolve, reject) => {
        let attempt = () => {
            if(!maxAttempts){
                reject('All attempts is rejected');
            } else {
                fn().then((data) => resolve(data))
                .catch((e) => {
                    maxAttempts--;
                    console.log(`Attempt ${count} is error`);
			count++;
                    setTimeout(() => {attempt()}, 1000);
                })
            }
        };
        attempt();
    })
}

// Используя async/await

const runRetryFunction = async() => {  
    const result = await retryOperation(fn_1, 3)
    .then((result) => result )
    .catch((error) => error);

   console.log(`Result: ${result}`)
}
runRetryFunction();


// Используя then...catch

// retryOperation(fn_1, 2)
// .then((n) => console.log(`Success: ${n}`) )
// .catch((error) => console.log(`Error: ${error}`));



