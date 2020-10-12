import { getData } from './BusinessProvider.js'
import { businessPartnerHTMLCreator } from './Business.js'
export const customerList = () => {

    const contentTarget = document.querySelector(".outputHere")
    const customerArray = getData()
    contentTarget.innerHTML += "<h1>Customers</h1>"

    customerArray.forEach(
        (customerObject) => {
            contentTarget.innerHTML += businessPartnerHTMLCreator(customerObject)
        }
    )
};

