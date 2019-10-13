import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiImageService {
    private readonly path = '/api/v1/image';

    constructor(private readonly httpClient: HttpClient) {}

    public uploadImage(file: File[]): Observable<string> {
        const uploadData = new FormData();
        uploadData.append('image', file[0]);

        return this.httpClient.post(this.path, uploadData, {
            responseType: 'text',
        });
    }
}
