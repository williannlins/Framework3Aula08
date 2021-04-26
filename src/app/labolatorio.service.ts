import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LabolatorioService {

  private _showPrincipal: boolean = true;
  private _showFilaEscolhida: boolean = false;
  private _showAdministracao: boolean= false;
  private totemColetaExames: number = 0;
  private totemRetiradaResultados: number = 0;
  private totemPrioritario: number = 0;
  private opcaoEscolhida: string;
  private posFila: number;
  
  constructor() {

   }

  
  get showPrincipal(): boolean{
    return this._showPrincipal;
  }
  get showFilaEscolhida(): boolean{
    return this._showFilaEscolhida;
  }
  get showAdministracao(): boolean{
    return this._showAdministracao;
  }

  get totemColeta(): number{
    return this.totemColetaExames;
  }
  get totemRetirada(): number{
    return this.totemRetiradaResultados;
  }
  get totemPriorita(): number{
    return this.totemPrioritario;
  }
  get posiFila():number{
    return this.posFila;
  }
  get opcaoSelecionada(): string{
    return this.opcaoEscolhida;
  }

  totalFila(): number{
    return this.totemColetaExames+this.totemRetiradaResultados+this.totemPrioritario;
  }

  cliclouButton(qual : string): void{
    this._showPrincipal = false;
    this._showFilaEscolhida = true;
    if(qual == 'coleta'){
      this.totemColetaExames++;
      this.opcaoEscolhida = 'Coleta de exames';
      this.posFila = this.totemColetaExames;

    }else if(qual == 'retirada'){
      this.totemRetiradaResultados++;
      this.opcaoEscolhida = 'Retirada de resultados';
      this.posFila = this.totemRetiradaResultados;

    }else if(qual == 'prioritario'){
      this.totemPrioritario++;
      this.opcaoEscolhida = 'Melhor idade - Prioritario';
      this.posFila = this.totemPrioritario;

    }else if(qual == 'administracao'){
      this._showAdministracao = true; 
      this._showFilaEscolhida = false;

    }else if(qual == 'voltar'){
      this._showPrincipal = true;
      this._showFilaEscolhida = false;
      this._showFilaEscolhida = false;
      this._showAdministracao = false;
      this.opcaoEscolhida = "";
    }

  } 
}
