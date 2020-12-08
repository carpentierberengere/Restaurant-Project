const cartePanier = []
let pageActuele = document.querySelector(".pageActuelle")
let pageActuelle = pageActuele.textContent



function creerMenu() {
    const carte = document.querySelector(".carte")
    carte.innerHTML = ''


    const positionTitre = document.createElement('div')
    positionTitre.className = 'position has-text-centered'
    carte.appendChild(positionTitre)

    const titre = document.createElement('h1')
    titre.className = 'title is-1'
    titre.textContent = 'MENU'
    positionTitre.appendChild(titre)

    const texteTitre = document.createElement('p')
    texteTitre.className = 'subtitle is-3'
    texteTitre.textContent = 'Takeaway & Delivery Available'
    positionTitre.appendChild(texteTitre)

    const colonne1 = document.createElement('div')
    colonne1.className = 'columns'
    carte.appendChild(colonne1)

    const colonne2 = document.createElement('div')
    colonne2.className = 'columns'
    carte.appendChild(colonne2)

    const colonne3 = document.createElement('div')
    colonne3.className = 'columns'
    carte.appendChild(colonne3)

    const cartes = [{
        colonnes: 'colonne1',
        colonne: 'column is-4',
        img: './images/siderice.png',
        alt: 'Side Rice',
        tagClass: 'tag is-danger',
        tagContent: 'Price : 3€',
        title: 'Side of Rice',
        content: 'Vegetarian sautéed rice, with curcuma, cilantro & lime, topped with fresh cilantro and citrus zest.',
        card: {
            img: './images/siderice.png',
            alt: 'Side Rice',
            tagClass: 'tag is-danger',
            tagContent: 'Price : 3€',
            title: 'Side of Rice',
            content: 'Vegetarian sautéed rice, with curcuma, cilantro & lime, topped with fresh cilantro and citrus zest.'
        }
    }, {
        colonnes: 'colonne1',
        colonne: 'column is-4',
        img: './images/algae.png',
        alt: 'Algae Salad',
        tagClass: 'tag is-warning',
        tagContent: 'Price : 3€',
        title: 'Zesty Algae Salad',
        content: 'Fresh algaes, mixed with a zesty vinaigrette & topped with some toested sesame seeds and chili.',
        card: {
            img: './images/algae.png',
            alt: 'Algae Salad',
            tagClass: 'tag is-warning',
            tagContent: 'Price : 3€',
            title: 'Zesty Algae Salad',
            content: 'Fresh algaes, mixed with a zesty vinaigrette & topped with some toested sesame seeds and chili.'
        }
    }, {
        colonnes: 'colonne1',
        colonne: 'column is-4',
        img: './images/miso.png',
        alt: 'Miso Soup',
        tagClass: 'tag is-danger',
        tagContent: 'Price : 3€',
        title: 'Vegan Miso Soup',
        content: 'Slightly spicy miso soup with spring onions, shiitake mushrooms, toasted sesame oil & tofu.',
        card: {
            img: './images/miso.png',
            alt: 'Miso Soup',
            tagClass: 'tag is-danger',
            tagContent: 'Price : 3€',
            title: 'Vegan Miso Soup',
            content: 'Slightly spicy miso soup with spring onions, shiitake mushrooms, toasted sesame oil & tofu.'
        }
    }, {
        colonnes: 'colonne2',
        colonne: 'column is-3',
        img: './images/ramen1.png',
        alt: 'Spicy Ramen',
        tagClass: 'tag is-link',
        tagContent: 'Price : 15€',
        title: 'Spicy Katsu Ramen',
        content: 'Fresh bowl of ramen noodles, mixed with a spicy chicken broth, katsu fried chicken, eggs, shiitake mushrooms & green onions.',
        card: {
            img: './images/ramen1.png',
            alt: 'Spicy Ramen',
            tagClass: 'tag is-link',
            tagContent: 'Price : 15€',
            title: 'Spicy Katsu Ramen',
            content: 'Fresh bowl of ramen noodles, mixed with a spicy chicken broth, katsu fried chicken, eggs, shiitake mushrooms & green onions.'
        }
    }, {
        colonnes: 'colonne2',
        colonne: 'column is-3',
        img: './images/ramenV2.png',
        alt: 'Vegan Ramen',
        tagClass: 'tag has-background-primary-dark',
        tagContent: 'Price : 15€',
        title: 'Vegan Tofu Ramen',
        content: 'Fresh bowl a vegan noodles, mixed with a miso paste broth & soy cream, shiitake mushrooms, sautéed brocolis & sweet potatoes and topped with teryaki marinated tofu.',
        card: {
            img: './images/ramenV2.png',
            alt: 'Vegan Ramen',
            tagClass: 'tag has-background-primary-dark',
            tagContent: 'Price : 15€',
            title: 'Vegan Tofu Ramen',
            content: 'Fresh bowl a vegan noodles, mixed with a miso paste broth & soy cream, shiitake mushrooms, sautéed brocolis & sweet potatoes and topped with teryaki marinated tofu.'
        }
    }, {
        colonnes: 'colonne2',
        colonne: 'column is-3',
        img: './images/dragonroll.png',
        alt: 'Dragon Cali Roll',
        tagClass: 'tag is-info',
        tagContent: 'Price : 8€',
        title: 'Dragon Cali Roll',
        content: 'California style roll, with shrimp tempura, avocado, spicy sriracha sauce & topped with avocado carpaccio, salmon eggs and some more spicy sauce.',
        card: {
            img: './images/dragonroll.png',
            alt: 'Dragon Cali Roll',
            tagClass: 'tag is-info',
            tagContent: 'Price : 8€',
            title: 'Dragon Cali Roll',
            content: 'California style roll, with shrimp tempura, avocado, spicy sriracha sauce & topped with avocado carpaccio, salmon eggs and some more spicy sauce.'
        }
    }, {
        colonnes: 'colonne2',
        colonne: 'column is-3',
        img: './images/vegancali.png',
        alt: 'Vegan Cali Rolls',
        tagClass: 'tag has-background-grey-light',
        tagContent: 'Price : 8€',
        title: 'Vegan Cali Rolls',
        content: 'California style rolls, with avocado, spicy mango and bokchoi, topped with avocado carpaccio and vegan japanese sweet mayo.',
        card: {
            img: './images/vegancali.png',
            alt: 'Vegan Cali Rolls',
            tagClass: 'tag has-background-grey-light',
            tagContent: 'Price : 8€',
            title: 'Vegan Cali Rolls',
            content: 'California style rolls, with avocado, spicy mango and bokchoi, topped with avocado carpaccio and vegan japanese sweet mayo.'
        }
    }, {
        colonnes: 'colonne3',
        colonne: 'column is-3',
        img: './images/specialrolls.png',
        alt: 'Secial Rolls',
        tagClass: 'tag has-background-primary-dark',
        tagContent: 'Price : 8€',
        title: 'Special Rolls',
        content: 'Ehomaki style rolls, with sautéed bokchoi & mushrooms, fresh grilled shrimps, served with zesty lime sauce.',
        card: {
            img: './images/specialrolls.png',
            alt: 'Secial Rolls',
            tagClass: 'tag has-background-primary-dark',
            tagContent: 'Price : 8€',
            title: 'Special Rolls',
            content: 'Ehomaki style rolls, with sautéed bokchoi & mushrooms, fresh grilled shrimps, served with zesty lime sauce.'
        }
    }, {
        colonnes: 'colonne3',
        colonne: 'column is-3',
        img: './images/sushiburrito.png',
        alt: 'Sushi Burrito',
        tagClass: 'tag is-warning',
        tagContent: 'Price : 15€',
        title: 'Spicy Sushi Burrito',
        content: 'Burrito style roll, filled with shrimp tempura, bokchoi, grated cucumber and carrots, topped with spicy sauce & japanese mayo. </br> Vegan option available',
        card: {
            img: './images/sushiburrito.png',
            alt: 'Sushi Burrito',
            tagClass: 'tag is-warning',
            tagContent: 'Price : 15€',
            title: 'Spicy Sushi Burrito',
            content: 'Burrito style roll, filled with shrimp tempura, bokchoi, grated cucumber and carrots, topped with spicy sauce & japanese mayo. </br> Vegan option available'
        }
    }, {
        colonnes: 'colonne3',
        colonne: 'column is-3',
        img: './images/dateplatter.png',
        alt: 'Date Platter',
        tagClass: 'tag has-background-grey-light',
        tagContent: 'Price : 25€',
        title: 'Platter for Two',
        content: 'Assortiments of different rolls; contains salmon california, spicy tuna california, avocado & soy cream cali rolls. </br> Serves up to 2 people.',
        card: {
            img: './images/dateplatter.png',
            alt: 'Date Platter',
            tagClass: 'tag has-background-grey-light',
            tagContent: 'Price : 25€',
            title: 'Platter for Two',
            content: 'Assortiments of different rolls; contains salmon california, spicy tuna california, avocado & soy cream cali rolls. </br> Serves up to 2 people.'
        }
    }, {
        colonnes: 'colonne3',
        colonne: 'column is-3',
        img: './images/familyplatter.png',
        alt: 'family platter',
        tagClass: 'tag is-warning',
        tagContent: 'Price : 40€',
        title: 'Family&Friends Platter',
        content: 'Assortiment of different rolls; contains salmon nigiri, tuna nigiri, braised eel nigiri, shrimp nigiri, dragon spicy rolls, vegan cali rolls; served with a side of rice, miso soup and kettle of tea of choice. </br> Serves up to 5 people.',
        card: {
            img: './images/familyplatter.png',
            alt: 'family platter',
            tagClass: 'tag is-warning',
            tagContent: 'Price : 40€',
            title: 'Family&Friends Platter',
            content: 'Assortiment of different rolls; contains salmon nigiri, tuna nigiri, braised eel nigiri, shrimp nigiri, dragon spicy rolls, vegan cali rolls; served with a side of rice, miso soup and kettle of tea of choice. </br> Serves up to 5 people.'
        }
    }]


    for (let element of cartes) {

        const colonnes = document.createElement('div')
        colonnes.className = element.colonne

        if (element.colonnes == 'colonne1') {
            colonne1.appendChild(colonnes)
        } else if (element.colonnes == 'colonne2') {
            colonne2.appendChild(colonnes)
        } else if (element.colonnes == 'colonne3') {
            colonne3.appendChild(colonnes)
        }

        const card = document.createElement('div')
        card.className = 'card has-background-warning-light'
        colonnes.appendChild(card)

        const large = document.createElement('div')
        large.className = 'large'
        card.appendChild(large)

        const levelItem = document.createElement('div')
        levelItem.className = 'level-item has-text-centered card-content is-flex is-horizontal-center'
        large.appendChild(levelItem)

        const figure = document.createElement('figure')
        figure.className = 'is-justify-content-center px-7'
        levelItem.appendChild(figure)

        const image = document.createElement('img')
        image.src = element.img
        image.alt = element.alt
        figure.appendChild(image)

        const cardContent = document.createElement('div')
        cardContent.className = 'card-content'
        card.appendChild(cardContent)

        const media = document.createElement('div')
        media.className = 'media'
        cardContent.appendChild(media)

        const mediaContent = document.createElement('div')
        mediaContent.className = 'media-content'
        cardContent.appendChild(mediaContent)

        const tag = document.createElement('span')
        tag.className = element.tagClass
        tag.textContent = element.tagContent
        mediaContent.appendChild(tag)

        const title = document.createElement('p')
        title.className = 'title is-4'
        title.textContent = element.title
        mediaContent.appendChild(title)

        const content = document.createElement('div')
        content.className = 'content'
        cardContent.appendChild(content)

        const description = document.createElement('p')
        description.textContent = element.content
        content.appendChild(description)

        const footer = document.createElement('footer')
        footer.className = 'card-footer'
        cardContent.appendChild(footer)

        const linkPanier = document.createElement('a')
        linkPanier.className = 'card-footer-item fas fa-2x fas fas fa-2x'
        footer.appendChild(linkPanier)

        const span = document.createElement('span')
        span.className = 'icon has-text-black'
        linkPanier.appendChild(span)

        const i = document.createElement('i')
        i.className = 'fas fa-cart-plus'
        span.appendChild(i)
        
        linkPanier.addEventListener('click', () => {
            
            cartePanier.push(element.card)
            console.log(cartePanier)
            return cartePanier
        })
        
    }
    
}
if (pageActuelle == 'menu') {
    creerMenu();
}
console.log(pageActuelle)

    
    if (pageActuelle == 'panier') {
    creerPanier()
}


function creerPanier() {
    console.log(cartePanier)
    const carte = document.querySelector(".carte")

    const positionTitre = document.createElement('div')
    positionTitre.className = 'position has-text-centered'
    carte.appendChild(positionTitre)

    const titre = document.createElement('h1')
    titre.className = 'title is-1'
    titre.textContent = 'Panier'
    positionTitre.appendChild(titre)

    const texteTitre = document.createElement('p')
    texteTitre.className = 'subtitle is-3'
    texteTitre.textContent = 'Takeaway & Delivery Available'
    positionTitre.appendChild(texteTitre)

    



    for (let element of cartePanier) {


        const card = document.createElement('div')
        card.className = 'card has-background-warning-light'
        carte.appendChild(card)

        const large = document.createElement('div')
        large.className = 'large'
        card.appendChild(large)

        const levelItem = document.createElement('div')
        levelItem.className = 'level-item has-text-centered card-content is-flex is-horizontal-center'
        large.appendChild(levelItem)

        const figure = document.createElement('figure')
        figure.className = 'is-justify-content-center px-7'
        levelItem.appendChild(figure)

        const image = document.createElement('img')
        image.src = element.img
        image.alt = element.alt
        figure.appendChild(image)

        const cardContent = document.createElement('div')
        cardContent.className = 'card-content'
        card.appendChild(cardContent)

        const media = document.createElement('div')
        media.className = 'media'
        cardContent.appendChild(media)

        const mediaContent = document.createElement('div')
        mediaContent.className = 'media-content'
        cardContent.appendChild(mediaContent)

        const tag = document.createElement('span')
        tag.className = element.tagClass
        tag.textContent = element.tagContent
        mediaContent.appendChild(tag)

        const title = document.createElement('p')
        title.className = 'title is-4'
        title.textContent = element.title
        mediaContent.appendChild(title)

        const content = document.createElement('div')
        content.className = 'content'
        cardContent.appendChild(content)

        const description = document.createElement('p')
        description.textContent = element.content
        content.appendChild(description)

    }
}
