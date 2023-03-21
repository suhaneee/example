

fetch("./curation.json")
.then((res) => {
console.log(res.json());
return res.json()

})
.then((obj) => {
    console.log(obj)
List(obj);
})
