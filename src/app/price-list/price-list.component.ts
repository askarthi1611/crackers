import { Component } from '@angular/core';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css'],
})
export class PriceListComponent {
  price_list: any = {};
  data: any = [
    {
      code: 101,
      name: 'Big Regular	',
      price: '310',
      per: 'Box',
      dis: '93',
      req:'',
      item_total:"",
      price_total:""
    },
    {
      code: 102,
      name: 'King Super	',
      price: '210',
      per: 'Box',
      dis: '63',
      req:'',
      item_total:"",
      price_total:""
    },
    {
      code: 103,
      name: 'King Super Double Spin	',
      price: '275',
      per: 'Box',
      dis: '83',
      req:'',
      item_total:"",
      price_total:""
    },
    {
      code: 104,
      name: 'Special Amazing	',
      price: '285',
      per: 'Box',
      dis: '86',
      req:'',
      item_total:"",
      price_total:""
    },
    {
      code: 105,
      name: 'Special Amazing Double Spin	',
      price: '355',
      per: 'Box',
      dis: '107',
      req:'',
      item_total:"",
      price_total:""
    },
    {
      code: 106,
      name: 'Deluxe Charming	',
      price: '470',
      per: 'Box',
      dis: '141',
      req:'',
      item_total:"",
      price_total:""
    },
    {
      code: 107,
      name: 'Deluxe Charming Double Spin	',
      price: '585',
      per: 'Box',
      dis: '176',
      req:'',
      item_total:"",
      price_total:""
    },
  ];
  total:any=0
  dis_total:any=0
  requried(item:any,e:any){
    this.total=0;
    this.dis_total=0;
    item.req=e.value;
    item.price_total=item.price*item.req
    item.item_total=item.dis*item.req
    this.data.map((e:any,l:any)=>{this.total += e.price_total})
    this.data.map((e:any,l:any)=>{this.dis_total += e.item_total})
  }
  ngOnInit(): void {
    this.price_list = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
    };
  }
}
