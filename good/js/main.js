// GOOD CODE

import { ContactList } from "./ContactList.js";
import { Person, CATEGORY } from "./Person.js";

const contactList = new ContactList();

contactList.add([
    new Person({
        name: "Anna",
        age: "24",
        interests: ["Running", "Chemistry"],
        category: CATEGORY.FRIEND,
    }),
    new Person({
        name: "Lisa",
        age: "19",
        interests: ["Music"],
        category: CATEGORY.FAMILY,
    }),
    new Person({
        name: "Brian",
        age: "13",
        interests: ["Anime", "Karate"],
        category: CATEGORY.FAMILY,
    }),
]);

contactList.add(
    new Person({
        name: "Artur",
        age: "23",
        interests: ["Fashion", "Reading"],
        category: CATEGORY.FRIEND,
    })
);

contactList.log();

const size = contactList.size;
console.log("size of contact list", contactList.size);
console.log({ size });

contactList.findByName("Anna")?.incrementAge();

contactList.log();

contactList.findByName("Lisa")?.addInterest("Cinema");

contactList.log();

console.log("Friends:");
console.table(contactList.getFriends());

console.log("Lisa:");
console.dir(contactList.findByName("Lisa"));

contactList.removeByName("Anna");

contactList.log();

console.log("All interests:");
console.dir(contactList.getAllInterests());

console.log("get random contact:");
console.dir(contactList.getRandomContact());
