import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map' ;

@Injectable()
export class GithubService{
    private username='amar061996';
    private client_id='20735701525183cd7692';
    private client_secret='861913725ad1ec1f1b752b80c76b76fb98a2ae08';

    constructor(private _http:Http){
        console.log("Github Service Init.");
    }

    getUser(){
        return this._http.get('https://api.github.com/users/'+this.username)
            .map(res => res.json());
    }

    getRepos(){
        return this._http.get('https://api.github.com/users/'+this.username+'/repos')
            .map(res => res.json());
    }
    updateUsername(username:string){
        this.username=username;
    }

}