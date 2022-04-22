import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-profile-client',
  templateUrl: './profile-client.component.html',
  styleUrls: ['./profile-client.component.scss']
})
export class ProfileClientComponent implements OnInit {

  constructor(private http: HttpClient) { }

  token : string | null ="" ;
  client={
    firstName:"",
    familyName:"",
    age:"",
    adress:"",
    email:"",
    image:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
  }
  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(){
    this.token =localStorage.getItem("token");
    this.http.get('http://localhost:3000/auth-client/clientInfo/'+this.token)
    .subscribe((result :any)  => {
      console.log(result);
      this.client.firstName=result.firstName ;
      this.client.familyName=result.familyName;
      this.client.age=result.age;
      this.client.adress=result.adress;
      this.client.email=result.email;
      console.log(this.client);
    });
  }

  setImage(event: any){
    const file = event.target.files[0].name ;
    console.log(file);
    let reader = new FileReader();
    reader.onload = () => {
      //file.fileAsBase64 = reader.result.toString();
      this.client.image= file ;
      this.http.post("http://localhost:3000/auth-client/picture/"+this.token,file)
        .subscribe(result => console.log(result)) ;
      
  
  }
  }

}
