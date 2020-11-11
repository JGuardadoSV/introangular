import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './portada/portada.component.html',
  styleUrls: ['./portada/portada.component.css']
})
export class AppComponent {
  Nombre="";
  Id=0;
  Personas=[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get("http://localhost:8080/consultar").subscribe((resp:any)=>{
      this.Nombre=resp.nombre,
      this.Id=resp.id
    });

    this.http.get("http://localhost:8080/consultarlista").subscribe((resp:any)=>{
      this.Personas=resp
    });

  }

  submitForm(data) {
    this.http.post("http://localhost:8080/guardar",data).subscribe(()=>{ });
    
    console.warn(data);
  }

}
