import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-illustration-un',
  templateUrl: './illustration-un.component.html',
  styleUrls: ['./illustration-un.component.css']
})
export class IllustrationUnComponent implements OnInit {
  editForm: FormGroup;
  specialites = ['Polyvalent', 'Charpentier', 'Chauffagiste', 'Couvreur', 'Electricien', 'Grutier', 'Maçon', 'Plaquiste', 'Plombier'];

  constructor() {
  }

  ngOnInit() {
    this.editForm = new FormGroup({
      nom: new FormControl(undefined, [Validators.required, Validators.minLength(6)]),
      prenom: new FormControl(undefined, [Validators.required, Validators.minLength(4)]),
      tel: new FormControl(undefined, [Validators.required, Validators.minLength(6), Validators.pattern('([0-9]{2}.){4}[0-9][0-9]')]),
      specialite: new FormControl('Polyvalent'),
    });
  }
  onSubmit() {
    console.info(this.editForm.value);
  }
  get nom() {
    return this.editForm.get('nom');
  }
  get prenom() {
    return this.editForm.get('prenom');
  }
  get tel() {
    return this.editForm.get('tel');
  }
}
