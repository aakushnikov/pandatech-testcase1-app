import { HttpClient } from "@angular/common/http";
import { BaseApiService } from "./base,api,service";
import { Config } from "src/config/config";
import { Injectable } from '@angular/core';
import { IAnimal } from "src/model/animal.interface";

@Injectable()
export class AnimalsApiSerivce extends BaseApiService
{
    constructor(protected override http: HttpClient, protected override config: Config)
    {
        super(http, config);
    }

    public getAll(page: number, limit: number) {
        let options = this.getOptions(this.GET_);
        var url = this.getUrl(page + '-' + limit);
        
        console.info(url);

        return this.http.get(url, options);
    }

    public removeAnimal(name: string)
    {
        const data = {
            "name": name,
          };

        let options = this.getOptions(this.POST_);
        var url = this.getUrl('remove');
        
        console.info(url);

        return this.http.post(url, data, options);
    }

    public addAnimal(name: string)
    {
        const data = {
            "name": name,
          };

        let options = this.getOptions(this.POST_);
        var url = this.getUrl('add');
        
        console.info(url);

        return this.http.post(url, data, options);
    }

}