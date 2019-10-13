import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategoryParameters } from '../../category/interfaces/ICategoryParameters';
import { ICategory } from '../../category/interfaces/ICategory';

@Injectable({
    providedIn: 'root',
})
export class ApiCategoryService {
    private readonly path = '/api/v1/category';

    constructor(private httpClient: HttpClient) {}

    public getHints(): Observable<ICategory[]> {
        return this.httpClient.get<ICategory[]>(this.path);
    }

    public save(
        categoryParameters: ICategoryParameters
    ): Observable<ICategory> {
        return this.httpClient.post<ICategory>(this.path, categoryParameters);
    }

    public remove(id: ICategory['id']) {
        return this.httpClient.delete(`${this.path}/${id}`);
    }
}
