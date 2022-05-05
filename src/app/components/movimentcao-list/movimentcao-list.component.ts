import { Component, OnInit } from '@angular/core';
import { MovimentacaoService } from '../../services/movimentacao.service';
@Component({
  selector: 'app-movimentcao-list',
  templateUrl: './movimentcao-list.component.html',
  styleUrls: ['./movimentcao-list.component.css']
})
export class MovimentcaoListComponent implements OnInit {
  movimentacoes:any;

  constructor(private movintacaoService: MovimentacaoService) { }

  ngOnInit(): void {
    this.listMovimentacoes();
  }

  listMovimentacoes(): void {
    this.movintacaoService.list().subscribe(
      data => {
        this.movimentacoes = data;
        console.log(data);
      },
      err => {
        console.log(err);
      });
    }

}
