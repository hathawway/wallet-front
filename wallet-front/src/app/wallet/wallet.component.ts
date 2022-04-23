import { Component, OnInit } from '@angular/core';
import { Purchase } from '../shared/interfaces/purchase';
import { PurchaseService } from '../shared/services/purchases.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.less']
})
export class WalletComponent implements OnInit {

  expanded = false;

  constructor(public purchasesService: PurchaseService) {}

  ngOnInit(): void {
    this.purchasesService.initiliaze()
    this.toggle()
  }

  toggle(): void {
    this.expanded = !this.expanded;
  }

  addPurchase(value: Purchase) {
    this.purchasesService.addPurchase(value)
  }

  delPurchase(value: Purchase): void {
    this.purchasesService.delPurchase(value)
  }


 

}
