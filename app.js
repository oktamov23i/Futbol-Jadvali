const players = [
    { name: "Lionel Messi", age: 36, position: "Hujumchi" },
    { name: "Cristiano Ronaldo", age: 38, position: "Hujumchi" },
    { name: "Kevin De Bruyne", age: 32, position: "Yarim himoyachi" },
    { name: "Virgil van Dijk", age: 32, position: "Himoyachi" },
    { name: "Kylian Mbappé", age: 25, position: "Hujumchi" },
    { name: "Neymar Jr.", age: 31, position: "Hujumchi" },
    { name: "Robert Lewandowski", age: 35, position: "Hujumchi" },
    { name: "Mohamed Salah", age: 31, position: "Hujumchi" },
    { name: "Sergio Ramos", age: 37, position: "Himoyachi" },
    { name: "Eden Hazard", age: 33, position: "Yarim himoyachi" },
    { name: "Paul Pogba", age: 30, position: "Yarim himoyachi" },
    { name: "Manuel Neuer", age: 37, position: "Darvozabon" },
    { name: "Luka Modric", age: 38, position: "Yarim himoyachi" },
    { name: "Erling Haaland", age: 23, position: "Hujumchi" },
    { name: "Phil Foden", age: 23, position: "Yarim himoyachi" },
    { name: "Marcus Rashford", age: 26, position: "Hujumchi" }
];

function addPlayer() {
    const randomIndex = Math.floor(Math.random() * players.length);
    const player = players[randomIndex];

    const table = document.getElementById('playerTable');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${table.rows.length + 1}</td>
        <td>${player.name}</td>
        <td>${player.age}</td>
        <td>${player.position}</td>
    `;

    table.appendChild(row);
}