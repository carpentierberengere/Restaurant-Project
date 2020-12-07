const body = document.querySelector('body')
body.innerHTML = ''

const section = document.createElement('section')
section.className = 'container'
body.appendChild(section)

const positionTitre = document.createElement('div')
positionTitre.className = 'position'
section.appendChild(positionTitre)

const titre = document.createElement('h1')
titre.className = 'title is-1'
titre.textContent = 'MENU'
positionTitre.appendChild(titre)

const texteTitre = document.createElement('p')
texteTitre.className = 'subtitle is-3'
texteTitre.textContent = 'Takeaway & Delivery Available'
positionTitre.appendChild(texteTitre)

const colonne = document.createElement('div')
colonne.className = 'columns'
section.appendChild(colonne)

const cartes = [{
    img: './images/siderice.png',
    alt: 'Side Rice',
    tagClass: 'tag is-danger',
    tagContent: 'Price : 3€',
    title: 'Side of Rice',
    content: 'Vegetarian sautéed rice, with curcuma, cilantro & lime, topped with fresh cilantro and citrus zest.'
},{
    img: './images/algae.png',
    alt: 'Algae Salad',
    tagClass: 'tag is-warning',
    tagContent: 'Price : 3€',
    title: 'Zesty Algae Salad',
    content: 'Fresh algaes, mixed with a zesty vinaigrette & topped with some toested sesame seeds and chili.'
},{
    img: './images/miso.png',
    alt: 'Miso Soup',
    tagClass: 'tag is-danger',
    tagContent: 'Price : 3€',
    title: 'Vegan Miso Soup',
    content: 'Slightly spicy miso soup with spring onions, shiitake mushrooms, toasted sesame oil & tofu.'
},{
    img: './images/ramen1.png',
    alt: 'Spicy Ramen',
    tagClass: 'tag is-link',
    tagContent: 'Price : 15€',
    title: 'Spicy Katsu Ramen',
    content: 'Fresh bowl of ramen noodles, mixed with a spicy chicken broth, katsu fried chicken, eggs, shiitake mushrooms & green onions.'
},{
    img: './images/ramenV2.png',
    alt: 'Vegan Ramen',
    tagClass: 'tag has-background-primary-dark',
    tagContent: 'Price : 15€',
    title: 'Vegan Tofu Ramen',
    content: 'Fresh bowl a vegan noodles, mixed with a miso paste broth & soy cream, shiitake mushrooms, sautéed brocolis & sweet potatoes and topped with teryaki marinated tofu.'
},{
    img: './images/dragonroll.png',
    alt: 'Dragon Cali Roll',
    tagClass: 'tag is-info',
    tagContent: 'Price : 8€',
    title: 'Side of Rice',
    content: 'California style roll, with shrimp tempura, avocado, spicy sriracha sauce & topped with avocado carpaccio, salmon eggs and some more spicy sauce.'
},{
    img: './images/vegancali.png',
    alt: 'Vegan Cali Rolls',
    tagClass: 'tag has-background-grey-light',
    tagContent: 'Price : 8€',
    title: 'Vegan Cali Rolls',
    content: 'California style rolls, with avocado, spicy mango and bokchoi, topped with avocado carpaccio and vegan japanese sweet mayo.'
},{
    img: './images/specialrolls.png',
    alt: 'Secial Rolls',
    tagClass: 'tag has-background-primary-dark',
    tagContent: 'Price : 8€',
    title: 'Special Rolls',
    content: 'Ehomaki style rolls, with sautéed bokchoi & mushrooms, fresh grilled shrimps, served with zesty lime sauce.'
},{
    img: './images/dateplatter.png',
    alt: 'Date Platter',
    tagClass: 'tag has-background-grey-light',
    tagContent: 'Price : 25€',
    title: 'Platter for Two',
    content: 'Assortiments of different rolls; contains salmon california, spicy tuna california, avocado & soy cream cali rolls. </br> Serves up to 2 people.'
},{
    img: './images/familyplatter.png',
    alt: 'family platter',
    tagClass: 'tag is-warning',
    tagContent: 'Price : 40€',
    title: 'Family&Friends Platter',
    content: 'Assortiment of different rolls; contains salmon nigiri, tuna nigiri, braised eel nigiri, shrimp nigiri, dragon spicy rolls, vegan cali rolls; served with a side of rice, miso soup and kettle of tea of choice. </br> Serves up to 5 people.'
    }]


   