export class Team {
    constructor() {
        this.members = new Set();
    }

    add(member) {
        if (this.members.has(member)) {
            throw new Error("Character already added")
        }
        this.members.add(member)
    }

    addAll(...members) {
        members.forEach((member) => this.members.add(member))
    }

    toArray() {
        return Array.from(this.members)
    }
}