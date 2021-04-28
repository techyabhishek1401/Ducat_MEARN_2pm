let user = getUser(1);
console.log("user:", user)

function getUser(id) {
    setTimeout(() => ({ id: id, name: "TEST" }), 2000)
}

