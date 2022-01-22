const links = document.querySelectorAll('.header-menu__item a')
const cardDetails = document.querySelector('.card-details__link-characteristics')

seamless.polyfill()


//card details smooth scroll
cardDetails.addEventListener('click', event=> {
    event.preventDefault();
    seamless.elementScrollIntoView(cardDetails, {
        behavior: "smooth",
        block: "start"
    })
})



// link smooth scroll
links.forEach(element => {

    element.addEventListener('click', event => {
        event.preventDefault();

        const id = element.getAttribute('href').substring(1)
        const section = document.getElementById(id)

        if(section){
            seamless.elementScrollIntoView( section, {
                behavior: "smooth",
                block: "start"
            })
        }
        else{
            seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
                behavior: "smooth",
                block: "center",
                inline: "center",
            })
        }
        
    })

});
