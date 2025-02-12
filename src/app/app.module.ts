import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './components/character/character.component';
import { ServicoCharacterService } from './components/services/servico-character.service'; // Caminho correto
import { HttpClientModule } from '@angular/common/http';  // Adicione esta importação
import { FormsModule } from '@angular/forms';  // Importando o FormsModule

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  // Certifique-se de incluir o HttpClientModule
    FormsModule  // Adicionando o FormsModule


  ],
  providers: [
    ServicoCharacterService  // O serviço já está registrado
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
