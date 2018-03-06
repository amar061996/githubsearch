import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';
@Component({
  moduleId:module.id,  
  selector: 'github',
  templateUrl:'github.component.html',
  providers:[GithubService]
})
export class GithubComponent  { 
    test:string="amar";
    user:any;
    repos:any;
    username:string;
    error:boolean=false;
    constructor(private _githubService:GithubService){
        console.log("This is github constructor...")

       
    }
    search(){

        this._githubService.updateUsername(this.username);

        this._githubService.getUser().subscribe(user => {
            console.log(user.statusText);
            
            this.user=user;
    });
        this._githubService.getRepos().subscribe(repos => {
        //console.log(user);
        this.repos=repos;
    });
    }
}