import { Inject, Injectable } from "@angular/core";
import { IPurcaseApiService, IPurcaseApiServiceToken } from "../interfaces/IPurcaseApiService";
import { Purchase } from "../interfaces/purchase";

@Injectable({
    providedIn: 'root'
})

export class PurchaseService {

    private _purchases: Purchase[] = [];
    private _summary = 0;

    constructor(@Inject(IPurcaseApiServiceToken) private service: IPurcaseApiService) {}

    get summary(): number {
        return this._summary;
    }

    get purchases(): Purchase[] {
        return this._purchases;
    }

    initiliaze(): void {
        this.service.getAll().subscribe( (purchases) => {
            this._purchases = purchases;
            this.updateSummary();
        })        
    }

    addPurchase(purchase: Purchase): void {
        this.service.add(purchase).subscribe( () => {
            this.initiliaze()
        })
    }

    delPurchase(purchase: Purchase) {
        this.service.delete(purchase?.id).subscribe( () => {
            this.initiliaze();
        })
    }

    updateSummary(): void {
        this._summary = this._purchases.reduce((sum, p) => p.price + sum, 0);
    }

    updatePurchase(purchase: Purchase): void {
        this.service.update(purchase).subscribe( () => {
            this.initiliaze()
        })
    }


}