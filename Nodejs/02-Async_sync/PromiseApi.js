let t = Promise.resolve(1);
t.then(data => console.log("data:", data));

// let rejected = Promise.reject(new Error('ERROR'));
// rejected.catch((err) => console.log("error:", err));

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 2000)
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 5000)
});
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("REJECT"), 5000)
});


Promise.all([p1, p2, p3])
    .then((result => console.log("result all:", result)))
    .catch(err => console.log("error all:", err));

Promise.race([p1, p2, p3])
    .then((result => console.log("result race:", result)))
    .catch(err => console.log("error race:", err));
