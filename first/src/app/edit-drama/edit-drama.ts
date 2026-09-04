import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {

    // ID des Dramas aus der URL holen
    const id = this.route.snapshot.paramMap.get('id');

    console.log('EDIT ID:', id);

    // Alle Dramas vom Backend laden
    this.http.get<any[]>('http://localhost:3000/dramas')
      .subscribe(data => {

        console.log('DATEN:', data);

        // Das Drama mit der passenden ID suchen
        const drama = data.find(
          d => String(d._id) === String(id)
        );

        console.log('GEFUNDEN:', drama);

        if (drama) {

          // Daten des Dramas in das Formular schreiben
          this.dramaId = drama._id;
          this.name = drama.name;
          this.status = drama.status;
          this.bewertung = String(drama.bewertung);
          this.folgen = String(drama.folgen);
          this.genre = drama.genre;
          this.beschreibung = drama.beschreibung;

          // Anzeige aktualisieren
          this.cdr.detectChanges();
        }
      });
  }

  speichern() {

    // Neue Daten aus dem Formular vorbereiten
    const daten = {
      name: this.name,
      status: this.status,
      bewertung: Number(this.bewertung),
      folgen: Number(this.folgen),
      genre: this.genre,
      beschreibung: this.beschreibung
    };

    // Geänderte Daten an das Backend senden
    this.http.put(
      'http://localhost:3000/dramas/' + this.dramaId,
      daten
    ).subscribe(() => {

      console.log('Drama erfolgreich gespeichert!');

      // Nach dem Speichern zurück zur Drama-Liste
      this.router.navigate(['/dramas']);

    });
  }
}
