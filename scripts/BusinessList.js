import { getData, nyClient,manufactoringClients } from './BusinessProvider.js'
import { businessPartnerHTMLCreator } from './Business.js'
export const customerList = () => {

    const contentTarget = document.querySelector(".businessList")
    const customerArray = getData()
    contentTarget.innerHTML += "<h1>Active Businesses</h1>"

    customerArray.forEach(
        (customerObject) => {
            contentTarget.innerHTML += businessPartnerHTMLCreator(customerObject)
        }
    )
};
export const findNYBusinesses = () => {

    const contentTarget = document.querySelector(".businessList--newYork")
    const customerArray = nyClient
    contentTarget.innerHTML += "<h2>New York Businesses</h2>"

    customerArray.forEach(
        (customerObject) => {
            contentTarget.innerHTML += businessPartnerHTMLCreator(customerObject)
        }
    )
};



export const findManufactoring=()=>{
    const contentTarget=document.querySelector(".businessList--manufacturing")
    const customerArray=manufactoringClients
    contentTarget.innerHTML += "<h2>Manufactoring Businesses</h2>"
    
    customerArray.forEach(
        (customerObject)=>{
            contentTarget.innerHTML+=businessPartnerHTMLCreator(customerObject)
        }
    )
}
