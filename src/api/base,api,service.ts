import { Config } from "src/config/config";
import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subscription } from 'rxjs';

@Injectable()
export abstract class BaseApiService implements OnDestroy {
    protected controller: string = "";
    protected baseUrl: string = "";
    protected readonly POST_: string = "POST";
    protected readonly GET_: string = "GET";
    protected readonly PUT_: string = "PUT";
    protected readonly DELETE_: string = "DELETE";

    private readonly subscriptions: Subscription[] = [];

    public username: string | undefined = "test";
	public password: string | undefined = "test";

    constructor(protected http: HttpClient, protected config: Config)
    {
        this.baseUrl = config.apiBaseUrl;
    }

    protected getUrl(action: string) {
        return new URL(
            this.controller.concat("/", action),
            this.baseUrl).href;
    }

    protected getOptions(type: string)
    {
        return {
            method: type,
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic ".concat(window.btoa(this.username + ':' + this.password)),
            }
          };
    }

    public subscribe(
		method: Observable<any>,
		observerNext?: (value: Object) => void,
		observerError?: (value: Object) => void,
		observerComplete?: () => void) {
		var sc = method
			.subscribe({
				next: (data) => observerNext ? observerNext(data) : undefined,
				error: (err) => observerError ? observerError(err) : undefined,
				complete: () => observerComplete ? observerComplete() : undefined
			});
		this.subscriptions.push(sc);
	}

    
	ngOnDestroy(): void {
		this.subscriptions.forEach((sc) => {
			sc.unsubscribe();
		});
	}
}