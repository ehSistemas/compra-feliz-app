import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { environment } from '../../../environments/environment';
import { ProdutoModel } from './produto.model';
import { DescricaoProdutoModel } from './descricao-produto.model';
import { Http } from '@angular/http'
import { map } from 'rxjs/operators';

@Injectable()
export class CompraFelizService {

  produtosResult: Observable<ProdutoModel[]>;
  descricaoProdutosResult: Observable<DescricaoProdutoModel[]>;
  constructor(private _httpService: Http) {

  }

  public buscarProdutos(): Observable<ProdutoModel[]> {
    this.produtosResult = this._httpService.get('/api/product/buscar-produtos').pipe(
      map(response => response.json() as ProdutoModel[]));

    return this.produtosResult;
  }

  public buscarProdutoAutoComplete(valor: string): Observable<ProdutoModel[]> {

    let resultado = this._httpService.get('/api/product/buscar-produtos-nome', { params: {nome: valor}}).pipe(
      map(response => response.json() as ProdutoModel[]));

    return resultado;
  }

  public buscarProdutoPorId(idProduto: number): Observable<ProdutoModel> {
    
    let resultado = this._httpService.get('/api/product/buscar-produtos-id', { params: { id: idProduto } }).pipe(
      map(response => response.json() as ProdutoModel));

    return resultado;
  }
  
  public buscarDescricaoProduto(idProduto: number): Observable<DescricaoProdutoModel> {

    let resultado  = this._httpService.get('/api/product/buscar-descricao-produtos', { params: { idProduto: idProduto } }).pipe(
      map(response => response.json() as DescricaoProdutoModel));

    return resultado;

  }
}
