import { Component, OnInit } from '@angular/core';
import { LabolatorioService } from '../labolatorio.service';

@Component({
  selector: 'app-labolatorio',
  templateUrl: './labolatorio.component.html',
  styleUrls: ['./labolatorio.component.css']
})
export class LabolatorioComponent implements OnInit {

  constructor(private LabolatorioService: LabolatorioService) { }

  ngOnInit(): void {
  }


  get displayOpcao(): string{
    return this.LabolatorioService.opcaoSelecionada;
  }

  get displayPosFila(): number{
    return this.LabolatorioService.posiFila;
  }

  get displayColeta(): number{
    return this.LabolatorioService.totemColeta;
  }

  get displayRetirada(): number{
    return this.LabolatorioService.totemRetirada;
  }

  get displayPrioritario(): number{
    return this.LabolatorioService.totemPriorita;
  }

  get displayTotalFila(): number{
    return this.LabolatorioService.totalFila();
  }

  cliclouButton(qual: string ): void{
    this.LabolatorioService.cliclouButton(qual);
  }
  
  get showPrincipal(): boolean{
    return this.LabolatorioService.showPrincipal;
  }
  get showFilaEscolhida(): boolean{
    return this.LabolatorioService.showFilaEscolhida;
  }
  get showAdministracao(): boolean{
    return this.LabolatorioService.showAdministracao;
  }


}
