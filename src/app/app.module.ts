import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';
import { CrudProdutosService } from "./crud-produtos.service";
import { CrudUsuariosService } from "./crud-usuarios.service";
import { CrudClientesService } from "./crud-clientes.service";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { TabelaUsuariosComponent } from './tabela-usuarios/tabela-usuarios.component';
import { FormUsuariosComponent } from './form-usuarios/form-usuarios.component';
import { FormClientesComponent } from './form-clientes/form-clientes.component';
import { TabelaClientesComponent } from './tabela-clientes/tabela-clientes.component';

const routes: Routes = [
  { path: '', redirectTo: 'listaProdutos', pathMatch: 'full' },
  { path: 'listaProdutos', component: TabelaProdutosComponent },
  { path: 'edicaoProduto/:cod', component: FormProdutosComponent },
  { path: 'edicaoUsuario/:cod', component: FormProdutosComponent },
  { path: 'edicaoCliente/:cod', component: FormClientesComponent },
  { path: 'novoProduto', component: FormProdutosComponent },
  { path: 'novoUsuario', component: FormUsuariosComponent },
  { path: 'listaUsuarios', component: TabelaUsuariosComponent },
  { path: 'novoCliente', component: FormClientesComponent },
  { path: 'listaClientes', component: TabelaClientesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TabelaProdutosComponent,
    FormProdutosComponent,
    TabelaUsuariosComponent,
    FormUsuariosComponent,
    FormClientesComponent,
    TabelaClientesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    RouterModule.forRoot(routes)  
  ],
  providers: [CrudProdutosService, CrudUsuariosService, CrudClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
