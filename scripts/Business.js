export const businessPartnerHTMLCreator=(myArray)=>{
    return `
    
    <section class=clients 
    <div class=client__name>${myArray.purchasingAgent.nameFirst} ${myArray.purchasingAgent.nameLast}</div>
    <div class=client__company> ${myArray.companyName} </div>
    <div class=client__address-street> ${myArray.addressFullStreet} </div>
    <div class=client__address-city> ${myArray.addressCity}, ${myArray.addressStateCode} ${myArray.addressZipCode}</div>
    <br>

    </section>
    `

}