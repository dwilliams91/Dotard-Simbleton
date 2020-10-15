export const businessPartnerHTMLCreator=(myArray)=>{
    return `
    
    <section class=clients 
    
    <div class=client__company> <strong> ${myArray.companyName} </strong></div>
    <div class=client__address-street> ${myArray.addressFullStreet} </div>
    <div class=client__address-city> ${myArray.addressCity}, ${myArray.addressStateCode} ${myArray.addressZipCode}</div>
    <br>

    </section>
    `

}

export const purchasingAgentsHTMLCreator=(myArray)=>{
    return `
    
    <section class=clients 
    
    <div class=client__company> <strong> ${myArray.purchasingAgent.nameFirst} ${myArray.purchasingAgent.nameLast} </strong></div>
    <div class=client__address-street> ${myArray.companyName} </div>
    <div class=client__address-city> ${myArray.phoneWork}</div>
    <br>

    </section>
    `

}
