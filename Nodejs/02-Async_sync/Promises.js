const fs = require('fs');

let done = false;
// promise definition
const isItDoneYet = new Promise((resolve, reject) => {
    //if promise (or conndition) is successfull
    // resolve(success data);
    //else condition is failed or promise is rejected
    // reject(error data);
    if (done) {
        resolve("Promise is resolved");
    }
    else {
        reject("Promise rejected")
    }
});

//consuming promise
// then is called for promise succuess(resolve)
//catch is called for promise failed(err)
isItDoneYet
    .then((success) => {
        console.log(success)
    })
    .catch((error) => {
        console.log(error)
    })


const getFile = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
                return
            }
            resolve(data)
        })
    })
};

getFile('./data.html').then((success) => {
    console.log("filedata:", success)
}).catch(err => {
    console.log("err:", err)
})
