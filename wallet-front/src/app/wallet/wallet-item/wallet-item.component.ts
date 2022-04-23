import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Purchase } from 'src/app/shared/interfaces/purchase';
import { PurchaseService } from 'src/app/shared/services/purchases.service';

@Component({
  selector: 'app-wallet-item',
  templateUrl: './wallet-item.component.html',
  styleUrls: ['./wallet-item.component.less']
})
export class WalletItemComponent implements OnInit {

  @Input() purchase!: Purchase;
  @Output() delete = new EventEmitter<Purchase>()

  expand = false;

  exp = true;

  constructor(public purchasesService: PurchaseService) { }

  ngOnInit(): void {

  }

  get formattedPrice(): string {
    return `${this.purchase.price} ₽`;
  }

  toggle(): void {
    this.expand = !this.expand;
    this.edit()
  }

  onClick(): void {
    this.delete.next(this.purchase)
  }

  edit() {
    this.exp = !this.exp;
  }

  updatePurchase(value: Purchase) {
    this.purchasesService.updatePurchase(value)
  }

}
