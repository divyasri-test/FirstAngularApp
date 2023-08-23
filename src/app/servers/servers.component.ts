import { Component } from '@angular/core';

@Component({
  selector: 'servers-root',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowAddingServer = false;
  serverCreationStatus = "No server was created!!"
  serverName = 'Default Server';
  serverList = ["testserver1, testserver2"]
  serverCreated = false;
  constructor(){
    setTimeout(() => {this.allowAddingServer = true;}, 2000);
  }
  ngOnInit(){

  }
  onClickButton(){
    this.serverCreated = true;
    this.serverList.push(this.serverName);
    this.serverCreationStatus = "server was created!!, Name is " + this.serverName
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
