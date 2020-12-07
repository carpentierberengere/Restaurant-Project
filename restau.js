document.querySelector('.main').innerHTML=''
const main = document.querySelector('.main');

let weekday = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];

const horaire = [
    {
        jour: weekday[1],
        hours_Start1: 10,
        hours_Close1: 15,
        hours_Start2: 18,
        hours_Close2: 23,
    },
    {
        jour: weekday[2],
        hours_Start1: 10,
        hours_Close1: 15,
        hours_Start2: 18,
        hours_Close2: 23,
    },
    {
        jour: weekday[3],
        hours_Start1: 10,
        hours_Close1: 15,
        hours_Start2: 18,
        hours_Close2: 23,
    },
    {
        jour: weekday[4],
        hours_Start1: 10,
        hours_Close1: 15,
        hours_Start2: 18,
        hours_Close2: 23,
    },
    {
        jour: weekday[5],
        hours_Start1: 10,
        hours_Close1: 15,
        hours_Start2: 18,
        hours_Close2: 23,
    },
    {
        jour: weekday[6],
        hours_Start: 12,
        hours_Close: 23,
    },
    {
        jour: weekday[0],
        hours_Start: 12,
        hours_Close: 23,
    },
]

let today = new Date

for (let element of horaire) {
    const week = document.createElement('div')
    if ( weekday[6] == weekday[today.getDay()] || weekday[0] == weekday[today.getDay()]) {
        let heure = today.getHours();
        if (heure >= element.hours_Start && heure <= element.hours_Close) {
            week.style = 'background-color: green;'
        }
        else {
            week.style = 'color: red;'
        }
    }
    else if (element.jour == weekday[today.getDay()] ) {
        let heure = today.getHours();
        if (heure >= element.hours_Start1 && heure < element.hours_Close1 || heure >= element.hours_Start2 && heure < element.hours_Close2) {
            week.style = 'background-color: green;'
        }
        else {
            week.style = 'color: red;'
        }
    }
    main.appendChild(week)

    const jour = document.createElement('p')
    jour.textContent = element.jour
    week.appendChild(jour)

    if (element.jour == 'Sat' || element.jour == 'Sun') {
        const heureDebut = document.createElement('p')
        heureDebut.textContent = element.hours_Start +":00 "+ element.hours_Close +":00"
        week.appendChild(heureDebut)
    }
    else{
        const heureDebut = document.createElement('p')
        heureDebut.textContent = element.hours_Start1 +":00 "+ element.hours_Close1 +":00"
        week.appendChild(heureDebut)
        const heureFin = document.createElement('p')
        heureFin.textContent = element.hours_Start2 +":00 "+ element.hours_Close2 +":00"
        week.appendChild(heureFin)
    }
}