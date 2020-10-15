import { getData, nyClient,manufactoringClients, searchBusinesses } from './BusinessProvider.js'
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
// this function displays the purchasing agents


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


const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            

            /*
                When user presses enter, find the matching business.
                You can use the `.includes()` method strings to
                see if a smaller string is part of a larger string.

                Example:
                    business.companyName.includes(keyPressEvent.target.value)
            */
           const customerArray = getData()

            const foundBusiness = customerArray.find(business => business.companyName.includes(keyPressEvent.target.value))

            companySearchResultArticle.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        }
    });