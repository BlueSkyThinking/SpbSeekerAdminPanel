import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IHint } from '../../hints/interfaces/IHint';
import { ICategoryParameters } from '../../category/interfaces/ICategoryParameters';

@Injectable({
    providedIn: 'root',
})
export class ApiCategoryService {
    private readonly path = '/api/v1/category';

    constructor(private httpClient: HttpClient) {}

    public getHints(): Observable<IHint[]> {
        return this.httpClient.get<IHint[]>(this.path);
    }

    public getSave(categoryParameters: ICategoryParameters) {
        return this.httpClient.post(this.path, categoryParameters);
    }

    public remove(id: IHint['id']) {
        return this.httpClient.delete(`${this.path}/${id}`);
    }
}
