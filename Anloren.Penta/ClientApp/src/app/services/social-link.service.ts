import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ISocialLink } from "./ISocialLink";

@Injectable({
  providedIn: 'root'
})
export class SocialLinkService {

  public constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }

  public get(): Observable<ISocialLink[]> {
    return this.http.get<ISocialLink[]>(this.baseUrl + 'social-links');
  }
}
