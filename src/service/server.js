let beseUrl = "/menu/menu.json"

async function getProducts(currCategory) {
    let fulMenu = await fetch(beseUrl)
    let convertedMenu = await fulMenu.json()
    let filteredmenu = convertedMenu.filter(element => element.category === currCategory)
    return filteredmenu
}

export {getProducts}