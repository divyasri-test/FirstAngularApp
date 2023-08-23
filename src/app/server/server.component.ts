import { Component } from "@angular/core"

@Component({
selector: 'server-root',
templateUrl: '../server/server.component.html',
styles: [`
    .online{
        color:white;
    }
`]
})
export class ServerComponent{
    serverId: number = 10;
    status: string = "offline";
    constructor(){
        this.status = Math.random() > 0.5 ? 'online' : 'offline';
    }
    serverStatus(){
        return this.status;
    }
    getColor(){
        return this.status === 'online' ? 'green' : 'red';
    }
}
