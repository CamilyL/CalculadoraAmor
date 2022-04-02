import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  primeiroNome:""
  segundoNome:""
  url = "http://lucasreno.kinghost.net/love-calculator/";
  resultado = 0
  mensagem = ""
  img = ""
  
  constructor(
    public http: HttpClient,
  ){}
 
  enviarDados(){
    console.log(this)
    this.img = "";

    this.http.get<any>(this.url + this.primeiroNome+ "/" + this.segundoNome).subscribe(
      (resposta: any) => {
        this.resultado = resposta;
        if(this.resultado < 20) this.mensagem = "Xéé, desisti!";
        if(this.resultado < 40) this.mensagem = "Rapaizz, vai na fé que dá!";
        if(this.resultado < 60) this.mensagem = "Paga um açaí que o namoro sai";
        if(this.resultado < 80) this.mensagem = "Atitude agora fi";
        else this.mensagem = "Agora parte pro pedido de namoro :)";
      }
    )
  }
}
