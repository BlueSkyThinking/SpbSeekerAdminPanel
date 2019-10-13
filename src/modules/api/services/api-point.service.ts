import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPoint } from '../../points/interfaces/IPoint';
import { IPointParameters } from '../../points/interfaces/IPointParameters';

@Injectable({
    providedIn: 'root',
})
export class ApiPointService {
    private readonly path = '/api/v1/point';

    constructor(private readonly httpClient: HttpClient) {}

    public getPoints(): Observable<IPoint[]> {
        return this.httpClient.get<IPoint[]>(this.path);
    }

    public save(
        pointParameters: IPointParameters,
        imgUrl: string
    ): Observable<IPoint> {
        return this.httpClient.post<IPoint>(this.path, {
            ...pointParameters,
            imgUrlList: [imgUrl],
        });
    }

    public remove(id: IPoint['id']) {
        return this.httpClient.delete(`${this.path}/${id}`);
    }
}
