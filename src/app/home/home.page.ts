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
  mensagem = ''
  imagem = false
  img = "";
  calculando = false;
  
  constructor(
    public http: HttpClient,
  ){}

  async enviarDados() {
    let soma = 0;
    this.imagem = false
    while (soma != 10) {
      this.resultado = Math.floor(Math.random() * 100 + 1);
      this.calculando = true;
      soma += 1;
      await this.delay(75);
    }
    this.calculando = false;

    console.log(this.url + this.primeiroNome + '/' + this.segundoNome);
    this.img = "";
 
    this.http.get<any>(this.url + this.primeiroNome+ "/" + this.segundoNome).subscribe(
      (resposta: any) => {
        this.resultado = resposta;
        if(this.resultado < 20){
          this.mensagem = "Se você tem um sonho, apenas desista!";
          this.img = "../../assets/homemFlor.png";
          this.imagem = true;
        }
        else if(this.resultado < 40){
          this.mensagem = "Vai namorar comigo simm!!";
          this.img = "../../assets/BonecoPalito.jpg";
          this.imagem = true;
        } 
        else if(this.resultado < 60){
          this.mensagem = "Caiu na rede é peixe";
          this.img = "../../assets/açaí.jpg";
          this.imagem = true;
        } 
        else if(this.resultado < 80){
          this.mensagem = "Tchubirau daum daum";
          this.img = "../../assets/cirilo.jpg";
          this.imagem = true;
        } 
        else{ 
          this.mensagem = "A hora é agora! :)";
          this.img = "../../assets/namoro.jpg";
          this.imagem = true;
        } 
      }
    );
  }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
