import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-drama',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './edit-drama.html',
  styleUrl: './edit-drama.css'
})
export class EditDrama implements OnInit {

  name = '';
  status = '';
  bewertung = '';
  folgen = '';
  genre = '';
  beschreibung = '';
  dramaId = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    console.log('EDIT ID:', id);

    this.http.get<any[]>('http://localhost:3000/dramas')
      .subscribe(data => {

        console.log('DATEN:', data);

        const drama = data.find(
          d => String(d._id) === String(id)
        );

        console.log('GEFUNDEN:', drama);

        if (drama) {

          this.dramaId = drama._id;
          this.name = drama.name;
          this.status = drama.status;
          this.bewertung = String(drama.bewertung);
          this.folgen = String(drama.folgen);
          this.genre = drama.genre;
          this.beschreibung = drama.beschreibung;

          // Angular sofort aktualisieren
          this.cdr.detectChanges();
        }
      });
  }

  speichern() {

    const daten = {
      name: this.name,
      status: this.status,
      bewertung: Number(this.bewertung),
      folgen: Number(this.folgen),
      genre: this.genre,
      beschreibung: this.beschreibung
    };

    this.http.put(
      'http://localhost:3000/dramas/' + this.dramaId,
      daten
    ).subscribe(() => {

      console.log('Drama erfolgreich gespeichert!');

    });
  }
}







