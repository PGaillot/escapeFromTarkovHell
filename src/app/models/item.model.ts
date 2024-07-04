import { ItemCategory } from "./category.model"
import { HistoricalPrice } from "./historicalPrices.model"

export interface ItemDetails{
    id: string
    name: string
    shortName: string
    iconLink: string
    description: string
    basePrice:number
    updated:string
    width:number
    height:number
    backgroundColor:string
    gridImageLink:string
    baseImageLink:string
    inspectImageLink:string
    hasGrid:boolean
    wikiLink:string
    weight:number
    types:string[]
    categories:ItemCategory[]
    handbookCategories:ItemCategory[]
    historicalPrices:HistoricalPrice[]
}