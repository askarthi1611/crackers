import { Component, OnInit, TemplateRef } from '@angular/core';
import { PriceListService } from './price-list.service';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css'],
})
export class PriceListComponent implements OnInit{
  data:any=[]
  price_list: any = {};
  modalRef?: any;
  constructor(private priceService:PriceListService) {
    jQuery.get("http://ipinfo.io",function(e){
      console.log(e)
      priceService.ipinfo(e)
      $(".ipconfig").html(JSON.stringify(e));
  },"jsonp")
  }
  fetching_data:any=[]
  fetch(){
    this.priceService.fetchData();
    setTimeout(() => {
    console.log(this.priceService.data);
    this.data=this.priceService.data
    }, 2000);
  }
  user:any=''
  mobile:any=''
  code:any=''
  name:any=''
  price:any=''
  per:any=''
  save(){
    const user={
      user:this.user,
      mobile:this.mobile,
      code:this.code,
      name:this.name,
      price:this.price,
      per:this.per,

    }
    console.log(user,this.priceService.validuser(user));
    if (!this.priceService.validuser(user)) {
      alert("Enter a value")
    }
  }

  total:any=0
  dis_total:any=0
  dis_percent:any=70;
  percent_active:any=true;
  serch_arr:any=[];
  percent(e:any){
    if (e.value<=90) {
    this.dis_percent=e.value
    this.data_refresh()
    }else{
      e.value=90;
      alert(`Maximum 90% offer avaiable`)
    }
  }
  temp_arr:any=[]
  search(ev:any){
      // Declare variables
  var input:any, filter, table:any, tr, td, i, txtValue;
  filter = ev.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    for (let j = 0; j < tr[i].getElementsByTagName("td").length; j++) {
      let td=tr[i].getElementsByTagName("td")[j];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }            
    }
  }
  }
  requried(item:any,e:any){
    console.log(item);
    if (e.value<=100) {
      this.total=0;
      this.dis_total=0;
      item.req=e.value;
      item.price_total=item.price*item.req
      item.item_total=item.dis*item.req
      this.data.map((e:any,l:any)=>{this.total += e.price_total})
      this.data.map((e:any,l:any)=>{this.dis_total += e.item_total})  
    }else{
      e.value=100;
      alert(`Maximum 100 ${item.name} allowed at a time `)
    }
  }
  requried1(item:any,e:any){
    console.log(item,e);
    if (e.value<=100) {
      this.total=0;
      this.dis_total=0;
      item.req=e.value;
      item.price_total=item.price*item.req
      item.item_total=item.dis*item.req
      this.data.map((e:any,l:any)=>{this.total += e.price_total*1})
      this.data.map((e:any,l:any)=>{this.dis_total += e.item_total*1})  
    }else{
      e.value=100;
      alert(`Maximum 100 ${item.name} allowed at a time `)
    }
  }
  data_refresh(){
    this.data.map((e:any,l:any)=>{e.dis = Math.ceil(e.price-(e.price*(this.dis_percent/100)))})
  }
  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement; // Cast to HTMLInputElement
    const inputValue = inputElement.value; // Access the value property
    console.log('Input value:', inputValue);
    return inputValue
  }
  ngAfterViewInit(){
  }
  ngOnInit(): void {
    
    this.data_refresh();
    console.log(navigator,navigator.geolocation);
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    
    function success(pos:any) {
      const crd = pos.coords;
    
      console.log("Your current position is:");
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
    }
    
    function error(err:any) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    navigator.geolocation.getCurrentPosition(success, error, options);
    
    this.price_list = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
    };
  }
}
