export function getRandomInteger(a, b) {
    return a + Math.floor((b - a) * Math.random());
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function generateId(length = 20) {
    let id = "";
    for (let i = 0; i < length; i++) {
        const index = getRandomInteger(0, chars.length);
        id += chars[index];
    }
    return id;
}
