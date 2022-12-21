import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Lawyer } from 'src/app/Model/lawyer.model';
import { LoginService } from 'src/app/services/login.service';
import { LawyerCasesService } from 'src/app/services/lawyer-cases.service';

@Component({
  selector: 'app-profile-lawyer',
  templateUrl: './profile-lawyer.component.html',
  styleUrls: ['./profile-lawyer.component.scss']
})
export class ProfileLawyerComponent implements OnInit {
  lawyer!:Lawyer;
  

  constructor(private http: HttpClient, private loginService: LoginService, private lawyerCasesService: LawyerCasesService) { }

  token : string | null ="" ;
  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(){
    this.loginService.getLawyer()
    .subscribe(
      result => {
        this.lawyer = result;
      }
    );
  }
  
  setImage(event: any){
    const fd=new FormData();
    const file =<File>event.target.files[0];
    fd.append("file",file,file.name);
    
    this.http.post("http://localhost:3000/auth-lawyer/picture/"+this.token,fd)
        .subscribe((result:any) => {
           this.lawyer.image=result.image;
        }) ;
  }

}
