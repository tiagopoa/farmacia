import { Component, OnInit } from '@angular/core';
import { CrudUsuariosService } from '../crud-usuarios.service';
import { Usuarios } from "../usuario";
import { Router } from "@angular/router";

@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.css']
})
export class FormUsuariosComponent implements OnInit {
	titulo = "Cadastro de Usuários";
	usuario:Usuarios;

  constructor(private servico:CrudUsuariosService, private router:Router) { }
  ngOnInit() { this.usuario = new Usuarios(); }

    salvarUsuario(){
    	this.servico.adicionarUsuario(this.usuario);
    	this.router.navigate(['/listaUsuarios']);
    }

    cancelar(){
    	this.router.navigate(['/listaUsuarios']);
    }

}
