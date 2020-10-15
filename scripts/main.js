import {getData,nyClient} from './BusinessProvider.js'
import {customerList,findNYBusinesses} from './BusinessList.js'
import { useSupplies,inexpensiveSupplies } from './SupplyDataProvider.js'
getData()
customerList()
console.log(nyClient)
findNYBusinesses()
