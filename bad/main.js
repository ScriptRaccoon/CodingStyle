// BAD CODE

var L = [
    {
        name: "Anna",
        age: "24",
        interests: ["Running", "Chemistry"],
        category: "friend",
    },
    {
        name: "Lisa",
        age: "19",
        interests: ["Music"],
        category: "family",
    },
    {
        name: "Brian",
        age: "13",
        interests: ["Anime", "Karate"],
        category: "family",
    },
];

L.push({
    name: "Artur",
    age: "23",
    interests: ["Fashion", "Reading"],
    category: "Friend",
});

const number = L.length;
console.log(number);

function older(pers) {
    pers.age = pers.age + 1;
}

older(L[0]);

function newInterest(p, x) {
    p.interests.push(x);
}
newInterest(L[1], "Cinema");

function yng(pers) {
    if (pers.age < 20) return true;
    return false;
}

function friends() {
    var l = [];
    for (let i = 0; i < L.length; i++) {
        if (L[i].category == "friend") {
            l.push(L[i].name);
        }
    }
    return l;
}
console.log("friends", friends());

console.log(L[1]);

console.log(L);

L.splice(0, 1);

function Allinterests() {
    var inter = [];
    for (let i = 0; i < L.length; i++) {
        const person = L[i];
        const pinterests = person.interests;
        for (let j = 0; j < pinterests.length; j++) {
            inter.push(pinterests[j]);
        }
    }
    return inter;
}

console.log(Allinterests());

function SomeContact() {
    var r = Math.random();
    var i = Math.floor(L.length * r);
    return L[i];
}

console.log(SomeContact());
