import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteActivatedEvent, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.css']
})
export class AutocompleteActoresComponent {

  control: FormControl = new FormControl();

  actores = [
            {nombre: 'Tom Holland 1', imagen: 'https://th.bing.com/th/id/OIP.wOYrylBWQUkmPkqnQZLbFQAAAA?pid=ImgDet&rs=1'},
            {nombre: 'Tom Holland 2', imagen: 'https://th.bing.com/th/id/OIP.wOYrylBWQUkmPkqnQZLbFQAAAA?pid=ImgDet&rs=1'},
            {nombre: 'Tom Holland 3', imagen: 'https://th.bing.com/th/id/OIP.wOYrylBWQUkmPkqnQZLbFQAAAA?pid=ImgDet&rs=1'},
            ]

  optionSelected(event: MatAutocompleteSelectedEvent){
    console.log(event.option.value);
  }
}
