import { Team } from "../team";

test("Testing add character in team", () => {
    const team = new Team()

    team.add("Warrior")

    expect(team.toArray()).toEqual(["Warrior"])
})

test("Testing add group of character in team", () => {
    const team = new Team()

    team.addAll("Warrior", "Warlock", "Druid")

    expect(team.toArray()).toEqual(["Warrior", "Warlock", "Druid"])
})

test("Testing to catch error", () => {
    const team = new Team()

    team.add("Warrior")

    expect(() => {team.add("Warrior")}).toThrow("Character already added")
})