import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Placeholder API base URL - replace with your actual API endpoint
  private apiUrl = 'https://api.example.com/v1';

  constructor(private http: HttpClient) { }

  /**
   * Performs a GET request to the specified endpoint.
   * @param endpoint The API endpoint (relative to the base URL).
   * @returns A Promise resolving with the response data.
   */
  get<T>(endpoint: string): Promise<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    return firstValueFrom(this.http.get<T>(url));
  }

  /**
   * Performs a POST request to the specified endpoint.
   * @param endpoint The API endpoint (relative to the base URL).
   * @param data The data to send in the request body.
   * @returns A Promise resolving with the response data.
   */
  post<T>(endpoint: string, data: any): Promise<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    return firstValueFrom(this.http.post<T>(url, data));
  }

  // Add other HTTP methods (PUT, DELETE, etc.) as needed
}
