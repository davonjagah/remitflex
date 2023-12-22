import { TransactionType } from "../types/components.types"

export const ProductsArray = [{
    id: 1,
    title: "Airtime",
    img: "/assets/svg/fone.svg",
    path: "airtime"
}, 
{
    id: 2,
    title: "Data bundles",
    img: "/assets/svg/DeviceMobileCamera.svg",
    path: ""
}, 
{
    id: 3,
    title: "Internet",
    img: "/assets/svg/Globe.svg",
    path: ""
},
{
    id: 4,
    title: "Electricity",
    img: "/assets/svg/Lightbulb.svg",
    path: ""
},
{
    id: 5,
    title: "Cable TV",
    img: "/assets/svg/TelevisionSimple.svg",
    path: ""
},
    {
        id: 6,
        title: "More to Come!",
        img: "/assets/paperplane.png",
        path: ""
    }
]

export const Amount = [50, 100, 200, 500]
export const transactionData : TransactionType[]= [{
    id: 1,
    title: "Send to Ikwuesan Emmanuel",
    date: "26 June 2023",
    reason: "School fees",
    price: "$299",
    status: "Failed"
},
{       
        id: 2,
        title: "Send to Ikwuesan Emmanuel",
        date: "26 June 2023",
        reason: "School fees",
        price: "$299",
        status: "In Progress"
} , 
{
    id: 3,
    title: "Send to David Mark",
    date: "26 June 2023",
    reason: "School fees",
    price: "$299",
    status: "Success"
}]