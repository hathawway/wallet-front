import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Purchase } from 'src/app/shared/interfaces/purchase';

@Component({
  selector: 'app-wallet-add',
  templateUrl: './wallet-add.component.html',
  styleUrls: ['./wallet-add.component.less']
})
export class WalletAddComponent implements OnInit {

  @Output() add = new EventEmitter<Purchase>();
  @Output() update = new EventEmitter<Purchase>();

  @Input() purchase!: Purchase;
  
  form!: FormGroup;
  

  constructor() { 
    
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(this.purchase === undefined ? null : this.purchase.id),
      title: new FormControl(this.purchase === undefined ? null : this.purchase.title, Validators.required),
      price: new FormControl(this.purchase === undefined ? null : this.purchase.price, Validators.required),
      comment: new FormControl(this.purchase === undefined ? null : this.purchase.comment)
  })
  }

  submit() {
    if (this.form.get('id')?.value === null) {
      this.add.emit({
        title: this.form.get('title')?.value,
        price: Number(this.form.get('price')?.value),
        comment: this.form.get('comment')?.value
      });
      this.form.reset()
    } else {
      this.update.emit({
        id: this.form.get('id')?.value,
        title: this.form.get('title')?.value,
        price: Number(this.form.get('price')?.value),
        comment: this.form.get('comment')?.value
      });
    }  
    
  }

}
