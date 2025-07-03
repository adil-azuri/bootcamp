export interface order{
 id:number
 orderName:string
 orderPrice:number
 lots:number
}

export const orders:order[]=[
    { id:1, orderName:"Adil", orderPrice:1000, lots:2},
    { id:2, orderName:"Budi", orderPrice:5000, lots:3}
]