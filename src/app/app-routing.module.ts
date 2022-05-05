import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovimentcaoListComponent } from './components/movimentcao-list/movimentcao-list.component';
import { MovimentcaoNewComponent } from './components/movimentcao-new/movimentcao-new.component';


const routes: Routes = [

  { path: 'movimentacoes', component: MovimentcaoListComponent },
  { path: 'movimentacoes-new', component: MovimentcaoNewComponent },
  { path: '', redirectTo: 'movimentacoes', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
