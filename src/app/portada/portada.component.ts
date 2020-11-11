import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {
  Nombre="";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get("http://localhost:8080/consultar").subscribe((resp:any)=>{this.Nombre=resp.nombre});

  }

  submitForm(data) {
    this.http.post("http://localhost:8080/guardar",data).subscribe(()=>{ });
    console.warn(data);
  }


}
