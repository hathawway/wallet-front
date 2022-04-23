import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPurcaseApiService } from "../interfaces/IPurcaseApiService";
import { Purchase } from "../interfaces/purchase";

// const host = 'http://tfs/';
const host = 'http://localhost:3000';

@Injectable()

export class PurchaseApiService implements IPurcaseApiService {
    
    constructor(private httpService: HttpClient) {}

    getAll(): Observable<Purchase[]> {
        return this.httpService.get<Purchase[]>(host)
    }

    add(purchase: Purchase): Observable<void> {
        return this.httpService.post<void>(host, purchase)
    }

    update(purchase: Purchase) : Observable<void> {
        return this.httpService.patch<void>(host, purchase)
    }

    delete(id: string): Observable<void> {
        return this.httpService.delete<void>(host, {params: {'id':id}})
    }

}