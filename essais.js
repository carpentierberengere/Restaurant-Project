let now = new Date()
    let openDelay = (Math.floor(Math.random() * (40 - 31) + 30)) * 60 * 60
    let closeDelay = (Math.floor(Math.random() * (50 - 31) + 30)) * 60 * 1000
    let deliveryTime
    let openingHours = 1020
    let delayToOpening
    let heuree = now.getHours()
    let minutee = now.getMinutes()
    heuree *= 60
    minutee += heuree
    console.log(minutee);

    deliveryTime = openingHours - minutee
    console.log(deliveryTime);
    
    let a = 1
    if (a == 0) {
        if ((now.getHours() >= hours_Start1 && now.getHours() < hours_Close1) && now.getDay() >= 0) {
            console.log('midi')
            openingHours = now
            openingHours.setHours(11)
            openingHours.setMinutes(00)
            openingHours.setSeconds(00)
            delayToOpening = openingHours.getTime() - now.getTime()
            deliveryTime = now.getTime() + delayToOpening + closeDelay
        }else if ((now.getHours() > 17 && now.getHours() < 22) && now.getDay() >= 0) {
            console.log('soir')
            openingHours = now
            openingHours.setHours(17)
            openingHours.setMinutes(00)
            openingHours.setSeconds(00)
            delayToOpening = openingHours.getTime() - now.getTime()
            deliveryTime = now.getTime() + delayToOpening + closeDelay
            console.log(deliveryTime / (1000 * 60 * 60))   
        }
    }
    else {
        heuree *=60
        minutee += heuree
        console.log(minutee);

        deliveryTime = openingHours - minutee
        console.log(deliveryTime)

        deliveryTime += openDelay
        console.log(deliveryTime / (1000 * 60 * 60))
        console.log(deliveryTime);
    }