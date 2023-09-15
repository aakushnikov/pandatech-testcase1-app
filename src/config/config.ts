import { Injectable } from "@angular/core";
import * as app from "../config/app.json";

@Injectable()
export class Config {
    public readonly apiBaseUrl: string;

    constructor() {
        this.apiBaseUrl = app.default["apiBaseUrl"]
    }
}
