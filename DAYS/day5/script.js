// async - Promise

//Creation of Promise
// let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve("Done!!");
//         // reject("not done!");
//     }, 2000);
// });
// console.log(promise);
// use of promise
// promise
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (err) {
//         console.log(err);
//     });
// console.log("Hello");

function GetData(n) {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (n % 2 === 0) {
                resolve("Number is Even");
            } else {
                reject("Number is Odd!");
            }
        }, 2000);
    });
    return promise;
}
// console.log(GetData(11));

// use of function promise - approach no. 1
// GetData(11)
//     .then(function (res) {
//         console.log(res);
//     })
//     .catch(function (err) {
//         console.log(err);
//     });

// ASYNC AWAIT / use of function promise - approach no. 2
async function resolver() {
    console.log(1);
    try {
        let result = await GetData(11);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
    console.log(3);
}
resolver();
