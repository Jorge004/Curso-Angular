import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Bienvenido a mi primera aplicación con Angular'
  tasks = signal([
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear componentes',
    'Crear servicio'
  ]);
  name = signal('Jorge');
  age = 23;
  disabled = true
  img = 'https://w3schools.com/howto/img_avatar.png'

  person = {
    name: 'Jorge',
    age: '23',
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  }


  clickHandler(){
    alert('Hola')
  }

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
