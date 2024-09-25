import { getProducts } from "../service/server.js"
import {renderProducts, renderCategoryMenu} from "../service/render.js"
import { addGrabbing } from "../service/grabbing.js"

getProducts("Десерти").then((products) => {
    renderCategoryMenu(products)
    renderProducts(products)
    addGrabbing(".categories")
})