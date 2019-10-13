import { Injectable } from '@angular/core';
import { IHint } from '../../hints/interfaces/IHint';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IHintParameters } from '../../hints/interfaces/IHintParameters';

@Injectable({
    providedIn: 'root',
})
export class ApiHintService {
    private readonly path = '/api/v1/hint';

    constructor(private readonly httpClient: HttpClient) {}

    public getHints(): Observable<IHint[]> {
        return this.httpClient.get<IHint[]>(this.path);
    }

    public saveHint(hintParameters: IHintParameters): Observable<IHint> {
        return this.httpClient.post<IHint>(this.path, hintParameters);
    }

    public remove(id: IHint['id']) {
        return this.httpClient.delete(`${this.path}/${id}`);
    }
}
