import { Component, OnInit } from '@angular/core';
import { CrudClientesService } from '../crud-clientes.service';
import { Clientes } from "../cliente";
import { Router } from "@angular/router";

@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.component.html',
  styleUrls: ['./form-clientes.component.css']
})
export class FormClientesComponent implements OnInit {
	titulo = "Cadastro de Clientes";
	cliente:Clientes;

  constructor(private servico:CrudClientesService, private router:Router) { }
  ngOnInit() { this.cliente = new Clientes(); }

    salvarCliente(){
    	this.servico.adicionarCliente(this.cliente);
    	this.router.navigate(['/listaclientes']);
    }

    cancelar(){
    	this.router.navigate(['/listaClientes']);
    }

}