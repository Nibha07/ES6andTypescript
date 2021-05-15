var Order={
    id:1,
    title:'glasses',
    Price: 300,
    printOrder(){
        return {id:this.id,title:this.title,Price:this.Price};
    },
    getPrice(){
        return this.Price;
    }
};
var amount={};
Object.assign(amount,Order);
console.log(amount);