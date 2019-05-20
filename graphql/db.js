export const people = [
    {
        id: 0,
        name : "gaeng1",
        age : 20,
        gender : "male"
    },
    {
        id: 1,
        name : "gaeng2",
        age : 22,
        gender : "male"
    },
    {
        id: 2,
        name : "gaeng3",
        age : 23,
        gender : "female"
    },
    {
        id: 3,
        name : "gaeng4",
        age : 24,
        gender : "female"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(p => p.id === id) 
    return filteredPeople[0]
}