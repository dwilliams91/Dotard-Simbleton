import { getData, nyClient } from './BusinessProvider.js'
import { businessPartnerHTMLCreator } from './Business.js'
export const customerList = () => {

    const contentTarget = document.querySelector(".outputHere")
    const customerArray = getData()
    contentTarget.innerHTML += "<h1>Active Businesses</h1>"

    customerArray.forEach(
        (customerObject) => {
            contentTarget.innerHTML += businessPartnerHTMLCreator(customerObject)
        }
    )
};
export const findNYBusinesses = () => {

    const contentTarget = document.querySelector(".NYBusinesses")
    const customerArray = nyClient
    contentTarget.innerHTML += "<h1>Active Businesses</h1>"

    customerArray.forEach(
        (customerObject) => {
            contentTarget.innerHTML += businessPartnerHTMLCreator(customerObject)
        }
    )
};

