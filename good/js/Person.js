import { generateId } from "./helper.js";

export const CATEGORY = {
    FRIEND: "Friend",
    FAMILY: "Family",
    JOB: "Job",
    OTHER: "Other",
};

export class Person {
    constructor(data) {
        const { name, age, interests, category } = data;
        if (!name || !age || !interests || !category) {
            throw new Error(
                `Try to create person from data
                ${JSON.stringify(data)}
                Person has to have name, age, interests, category.`
            );
        }
        this.name = name;
        this.age = age;
        this.interests = interests;
        this.category = category;
        this.id = generateId();
    }

    incrementAge() {
        this.age++;
    }

    isYoung() {
        return this.age < 20;
    }

    addInterest(interest) {
        this.interests.push(interest);
    }
}
