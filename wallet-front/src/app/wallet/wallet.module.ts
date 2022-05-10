import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import { WalletItemComponent } from './wallet-item/wallet-item.component';
import {TuiBadgeModule, TuiInputModule, TuiTextAreaModule} from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';
import { WalletAddComponent } from './wallet-add/wallet-add.component';
import { IPurcaseApiServiceToken } from '../shared/interfaces/IPurcaseApiService';
import { HttpClientModule } from '@angular/common/http'
import { PurchaseApiService } from '../shared/services/purchasesApi.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WalletComponent,
    WalletItemComponent,
    WalletAddComponent,
    WalletAddComponent,
  ],
  exports: [
    WalletComponent,
  ],
  providers: [
    {
      provide: IPurcaseApiServiceToken, 
      useClass: PurchaseApiService
    }
  ],
  imports: [
    CommonModule,
    TuiBadgeModule,
    TuiButtonModule,
    TuiInputModule,
    TuiTextAreaModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class WalletModule { }
