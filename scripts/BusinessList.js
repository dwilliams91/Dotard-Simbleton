import { getData, nyClient,manufactoringClients } from './BusinessProvider.js'
import { businessPartnerHTMLCreator, purchasingAgentsHTMLCreator } from './Business.js'
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

// this function lists just businesses in NY
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


// this function lists just businesses that are manufactoring

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
// this function lists just businesses that are manufactoring

export const purchasingAgentList=()=>{
    const contentTarget=document.querySelector(".agents")
    const customerArray=manufactoringClients
    contentTarget.innerHTML += "<h2>Purchasing Agents</h2>"
    
    customerArray.forEach(
        (customerObject)=>{
            contentTarget.innerHTML+=purchasingAgentsHTMLCreator(customerObject)
        }
    )
}
