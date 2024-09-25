function renderProducts(products) {
    let productslist = document.querySelector(".products")

    productslist.innerHTML = ""

    let prodsByCategory = groupByCategory(products)

    for (let key in prodsByCategory) {
    
        let prodSection = document.createElement("div")
        prodSection.classList.add("products__wrapper")
    
        prodSection.innerHTML = `<h2>${key}</h2>`
    
        let prodSectionlist = document.createElement("div")
        prodSectionlist.classList.add("products__list")
        prodSection.id = key
    
        prodsByCategory[key].forEach(prod => {
            prodSectionlist.innerHTML += `
        <div class="products__list-item">
            <img src="${prod.image}" alt="${prod.name}">
            <h3>${prod.name}</h3>
            <div class="row">
                <span class="products__list-count">${prod.quantity}</span>
                <span class="products__list-price">${prod.price} <span>грн</span></span>
            </div>
        </div>`
        })
        prodSection.append(prodSectionlist)
        productslist.append(prodSection)
    }
}

function renderCategoryMenu(products) {
    let categorylist = document.querySelector(".categories")

    categorylist.innerHTML = ""

    let prodsByCategory = groupByCategory(products)

    for (let key in prodsByCategory){
        categorylist.innerHTML += `<a href="#${key}">${key}</a>`
    }
}

function groupByCategory(products) {

    let prodsByCategory = {}

    products.forEach(prod => {
        if (prodsByCategory.hasOwnProperty(prod.subCategory)) {
            prodsByCategory[prod.subCategory].push(prod)
        } else {
            prodsByCategory[prod.subCategory] = []
            prodsByCategory[prod.subCategory].push(prod)
        }
    })

    return prodsByCategory

}
export { renderProducts, renderCategoryMenu }
