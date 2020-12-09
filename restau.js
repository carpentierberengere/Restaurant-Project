document.querySelector('.horaire').innerHTML=''
const horaire = document.querySelector('.horaire');
let weekday = [ 'Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam' ];

const horaires = [
    {
        jour: weekday[1],
        hours_Start1: 11,
        hours_Close1: 14,
        hours_Start2: 18,
        hours_Close2: 22,
    },
    {
        jour: weekday[2],
        hours_Start1: 11,
        hours_Close1: 14,
        hours_Start2: 18,
        hours_Close2: 22,
    },
    {
        jour: weekday[3],
        hours_Start1: 11,
        hours_Close1: 14,
        hours_Start2: 18,
        hours_Close2: 22,
    },
    {
        jour: weekday[4],
        hours_Start1: 11,
        hours_Close1: 14,
        hours_Start2: 18,
        hours_Close2: 22,
    },
    {
        jour: weekday[5],
        hours_Start1: 11,
        hours_Close1: 14,
        hours_Start2: 18,
        hours_Close2: 22,
    },
    {
        jour: weekday[6],
        hours_Start1: 11,
        hours_Close1: 14,
        hours_Start2: 18,
        hours_Close2: 22,
    },
    {
        jour: weekday[0],
        hours_Start1: 11,
        hours_Close1: 14,
        hours_Start2: 18,
        hours_Close2: 22,
    },
]

let today = new Date

for (let element of horaires) {
    const alljour = document.createElement("div")
    alljour.className= 'jour'
    if (element.jour == weekday[today.getDay()] ) {
        let heure = today.getHours();
        if ((heure >= element.hours_Start1 && heure < element.hours_Close1) || (heure >= element.hours_Start2 && heure < element.hours_Close2)) {
            alljour.style = 'border: 3px green dashed;'
        }
        else {
            alljour.style = 'border: 3px red dashed;'
        }
    }
    horaire.appendChild(alljour)

    const day = document.createElement('p')
    day.textContent = element.jour
    alljour.appendChild(day)
    const heurematin = document.createElement('p')
    heurematin.textContent = element.hours_Start1+":30 "+element.hours_Close1+":00"
    alljour.appendChild(heurematin)
    const heuresoir = document.createElement('p')
    heuresoir.textContent = element.hours_Start2+":00 "+element.hours_Close2+":30"
    alljour.appendChild(heuresoir)
}