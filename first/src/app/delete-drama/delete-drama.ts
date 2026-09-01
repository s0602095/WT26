import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-drama',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './delete-drama.html',
  styleUrl: './delete-drama.css'
})
export class DeleteDrama {

  name = '';
  dramaId = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {

    // ID des Dramas aus der URL holen
    const id = this.route.snapshot.paramMap.get('id');

    // ID speichern, damit wir das richtige Drama löschen können
    this.dramaId = id || '';

    // Alle Dramas vom Backend laden
    this.http.get<any[]>('http://localhost:3000/dramas')
      .subscribe(data => {

        // Drama mit der passenden ID suchen
        const drama = data.find(
          d => String(d._id) === String(id)
        );

        if (drama) {
          // Namen des Dramas anzeigen
          this.name = drama.name;
        }
      });
  }

loeschen() {

  // Drama aus MongoDB löschen
  this.http.delete(
    'http://localhost:3000/dramas/' + this.dramaId
  ).subscribe({
    
    next: () => {

      // Erfolgsmeldung anzeigen
      alert('✅ Drama erfolgreich gelöscht!');

      // Zurück zur Drama-Liste
      this.router.navigate(['/dramas']);

    },

    error: (error) => {

      console.log('Fehler beim Löschen:', error);

      alert('❌ Drama konnte nicht gelöscht werden!');

    }
  });
}
}
