import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-drama-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './drama-detail.html',
  styleUrl: './drama-detail.css'
})
export class DramaDetail implements OnInit {

  name = '';
  status = '';
  bewertung = '';
  folgen = '';
  genre = '';
  beschreibung = '';
  bild = '';
  dramaId = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {

    const name = this.route.snapshot.paramMap.get('name');

    console.log('URL:', name);

    this.http.get<any[]>('http://localhost:3000/dramas')
      .subscribe(data => {

        console.log('ALLE DATEN:', data);

        const drama = data.find(d => d.name === name);

        console.log('DRAMA GEFUNDEN:', drama);

        if (drama) {

          this.dramaId = drama._id;
          this.name = drama.name;
          this.status = drama.status;
          this.bewertung = '⭐'.repeat(Number(drama.bewertung));
          this.folgen = String(drama.folgen);
          this.genre = drama.genre;
          this.beschreibung = drama.beschreibung;
          this.bild = 'bilder/' + drama.bild;

          console.log('Folgen:', this.folgen);

          this.cd.detectChanges();
        }

      });
  }
}