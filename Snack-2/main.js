//Snack2
//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

let soccerTeam = [
    { 
        nome: 'Roma',
        punti_fatti: 0,
        falli_subiti:0,

    },
    { 
        nome: 'Milan',
        punti_fatti: 0,
        falli_subiti: 0,

    },
    { 
        nome: 'Inter',
        punti_fatti: 0,
        falli_subiti: 0,

    },
    { 
        nome: 'Cagliari',
        punti_fatti: 0,
        falli_subiti: 0,

    },

]
 console.log(soccerTeam);
 





for( let team of soccerTeam)
    team.punti_fatti = Math.floor(Math.random() *100)

for( let team of soccerTeam)
    team.falli_subiti = Math.floor(Math.random() *100)

console.log(soccerTeam);
