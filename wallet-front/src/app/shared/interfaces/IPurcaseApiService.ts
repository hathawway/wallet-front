import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { Purchase } from "./purchase";

export const IPurcaseApiServiceToken = new InjectionToken('IPurcaseApiService')

export interface IPurcaseApiService {
    getAll(): Observable<Purchase[]>;
    add(purchase: Purchase): Observable<void>;
    update(purchase: Purchase): Observable<void>;
    delete(id: string | undefined): Observable<void>;
}