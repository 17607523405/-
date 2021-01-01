import request from './serives'
export function getdetail(iid){
  return request({
    url:'detail',
    data:{
      iid
    }
  })
}
export class Goodsinfo{
  constructor (iteminfo,cloums,services){
    this.title=iteminfo.title;
    this.desc=iteminfo.desc;
    this.newprice=iteminfo.price;
    this.discount=iteminfo.discountDesc;
    this.oldprice=iteminfo.oldPrice;
    this.colums=cloums;
    this.servies=services;
    this.realPrice=iteminfo.lowNowPrice
  }
}
export class Shopinfo{
  constructor(shopInfo) {
    this.logo=shopInfo.shopLogo;
    this.name=shopInfo.name;
    this.fans=shopInfo.cFans;
    this.sells=shopInfo.cSells;
    this.score=shopInfo.score;
    this.goodcount=shopInfo.cGoods
  }
}