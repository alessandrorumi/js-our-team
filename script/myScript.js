// Creare l’array di oggetti con le informazioni fornite.
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// Stampare le stesse informazioni su DOM sotto forma di stringhe

// Dichiarazione 1° membro del team
const container = document.getElementById('team-container');

const team = [

  {
    'name': 'Wayne Barnett',
    'role': 'Fouder & CEO',
    'image': 'wayne-barnett-founder-ceo.jpg'
  },

  {
    'name': 'Angela Caroll',
    'role': 'Chief Editor',
    'image': 'angela-caroll-chief-editor.jpg'
  },

  {
    'name': 'Walter Gordon',
    'role': 'Office Manager',
    'image': 'walter-gordon-office-manager.jpg'
  },

  {
    'name': 'Angela Lopez',
    'role': 'Social Media Manager',
    'image': 'angela-lopez-social-media-manager.jpg'
  },

  {
    'name': 'Scott Estrada',
    'role': 'Developer',
    'image': 'scott-estrada-developer.jpg'
  },

  {
    'name': 'Barbara Ramos',
    'role': 'Graphic Designer',
    'image': 'barbara-ramos-graphic-designer.jpg'
  }
  
];

// console.log(team);

// Ciclo elementi in team
for (let i = 0; i < team.length; i++) {
  
  // Variabile associata agli oggetti
  let arrayElement = team[i];

  // Dichiarazione variabile dati dei membri
  let teamData = '';

  // Ciclo oggetti nell'array (in team)
  for (let teamProperties in arrayElement) {
    // console.log(`${teamProperties}: ${arrayElement[teamProperties]}; `);
    teamData += `${teamProperties}: ${arrayElement[teamProperties]}; `;
  }

  // Dati dei membri in DOM (che fatica!)
  container.innerHTML += `<p>${teamData}</p>`;

}