import { Component, OnInit } from '@angular/core';
import { ServicoCharacterService } from '../services/servico-character.service';  // Caminho correto
import { Character } from '../services/servico-character.service';  // Importe a interface Character

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  dados: Character[] = [];
  dadosFiltrados: Character[] = [];
  erro: string = '';
  paginaAtual: number = 1;
  totalPaginas: number = 1;
  pesquisa: string = '';

  constructor(private servicoCharacterService: ServicoCharacterService) {}

  ngOnInit() {
    this.carregarDados();
  }

  carregarDados() {
    this.servicoCharacterService.getDados(this.paginaAtual).subscribe(
      (res) => {
        this.dados = res.data;
        this.dadosFiltrados = res.data;  // Inicializa com todos os dados
        this.totalPaginas = Math.ceil(this.dadosFiltrados.length / 10); // Calcula o total de páginas
        this.erro = '';
      },
      (erro) => {
        console.error('Erro ao buscar dados', erro);
        this.erro = 'Ocorreu um erro ao carregar os dados. Tente novamente mais tarde.';
      }
    );
  }

  proximaPagina() {
    if (this.paginaAtual < this.totalPaginas) {
      this.paginaAtual++;
    }
  }

  paginaAnterior() {
    if (this.paginaAtual > 1) {
      this.paginaAtual--;
    }
  }

  filtrarDados() {
    if (this.pesquisa.trim() === '') {
      this.dadosFiltrados = this.dados;
    } else {
      this.dadosFiltrados = this.dados.filter(character =>
        character.name.toLowerCase().includes(this.pesquisa.toLowerCase())
      );
    }
    this.paginaAtual = 1;  // Volta para a primeira página após pesquisa
    this.totalPaginas = Math.ceil(this.dadosFiltrados.length / 10); // Recalcula as páginas disponíveis
  }

  getDadosPaginaAtual(): Character[] {
    const startIndex = (this.paginaAtual - 1) * 10;
    const endIndex = startIndex + 10;
    return this.dadosFiltrados.slice(startIndex, endIndex);
  }
}
