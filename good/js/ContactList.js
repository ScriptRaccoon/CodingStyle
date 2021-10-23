import { getRandomInteger } from "./helper.js";
import { CATEGORY } from "./Person.js";

export class ContactList {
    constructor() {
        this.list = [];
    }
    get size() {
        return this.list.length;
    }
    add(person) {
        if (person.constructor.name == "Person") {
            this.list.push(person);
        } else if (person.constructor.name == "Array") {
            person.forEach((p) => this.add(p));
        } else {
            throw new Error(
                "Can only add a person to the contact list"
            );
        }
    }
    removeByName(name) {
        this.list = this.list.filter((person) => person.name != name);
    }
    removeById(id) {
        this.list = this.list.filter((person) => person.id != id);
    }
    log() {
        console.table(this.list);
    }
    findByName(name) {
        return this.list.find((person) => person.name == name);
    }
    getFriends() {
        return this.list.filter(
            (person) => person.category == CATEGORY.FRIEND
        );
    }
    getAllInterests() {
        return this.list.map((person) => person.interests).flat();
    }
    getRandomContact() {
        if (this.size == 0) return null;
        const randomIndex = getRandomInteger(0, this.size);
        return this.list[randomIndex];
    }
}
