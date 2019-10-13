import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITravel } from '../../travel/interfaces/ITravel';
import { ITravelParameters } from '../../travel/interfaces/ITravelParameters';

@Injectable({
    providedIn: 'root',
})
export class ApiTravelService {
    public readonly path = '/api/v1/travel';

    constructor(private readonly httpClient: HttpClient) {}

    public getTravels(): Observable<ITravel[]> {
        return this.httpClient.get<ITravel[]>(this.path);
    }

    public save(travelParameters: ITravelParameters): Observable<ITravel> {
        return this.httpClient.post<ITravel>(this.path, travelParameters);
    }

    public remove(id: ITravel['id']) {
        return this.httpClient.delete(`${this.path}/${id}`);
    }
}
