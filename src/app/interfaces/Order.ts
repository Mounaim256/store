export interface Order{
    orderId?:string,
    userId?: string,
    goodsId?: string[],
    dataOrder?: string,
    stateOfOrder?: string,
    totalPrice?: number,
    paymentMethod?:string
}