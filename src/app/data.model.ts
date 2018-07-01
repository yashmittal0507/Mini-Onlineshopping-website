export class Item {
    public ItemId: number;
    public ItemName: string;
    public price: number;
    public quantity:number;
    public discount:number;
  
    constructor(ItemId: number, ItemName: string, price: number,quantity:number,discount:number) {
     this.ItemId=ItemId;
     this.ItemName=ItemName;
     this.price=price;
     this.quantity=quantity;
     this.discount=discount;

    }
}