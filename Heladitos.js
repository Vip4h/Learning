
let iceCreamFlavors = [
    { name: "chocolate", type: "chocolate", price: 2 },
    { name: "Fresicah", type: "fruta", price: 1 },
    { name: "Vainilla", type: "vainilla", price: 2 },
    { name: "Pistachote", type: "nuces", price: 1.5 },
    { name: "ferrero", type: "chocolate", price: 2 },
    { name: "MentaChocolata", type: "chocolate", price: 1.5 },
    { name: "Frambuesa", type: "fruta", price: 1 },
];

let transactions = [];

transactions.push({ scoops:["chocolate", "Vainilla", "Mentachocolata"], total: 5.5 })
transactions.push({ scoops:["Frambuesa", "Fresicah"], total: 2 })
transactions.push({ scoops:["Vainilla", "Vainilla"], total: 4 })



let flavorDistribution = transactions.reduce((acc, curr) => {
    curr.scoops.forEach(scoop => {
      if (!acc[scoop]) {
        acc[scoop] = 0;
      }
      acc[scoop]++;
    })
    return acc;
  }, {})