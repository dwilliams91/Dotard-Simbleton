const supplies = [
    {
        id: 1,
        price: 12.99,
        color: "Red",
        brand: "Bloomfield",
        type: "Paint"
    },
    {
        id: 2,
        price: 75.49,
        color: "Brown",
        brand: "Illinois Art",
        type: "Easel"
    },
    {
        id: 3,
        price: 19.99,
        color: "White",
        brand: "Emerson",
        type: "Oil Paint Canvas"
    }
]

export const useSupplies = () => {
    return supplies.slice()
}
export const inexpensiveSupplies = supplies.filter(taco => {
    if (taco.price < 50.00) {
        return true
    }
    return false
})
export const brandNames = supplies.map(supplyObject => {
   
    return supplyObject.brand
})


