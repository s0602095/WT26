import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-drama-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './drama-detail.html',
  styleUrl: './drama-detail.css'
})
export class DramaDetail {

  name = '';
  status = '';
  bewertung = '';
  folgen = '';
  genre = '';
  beschreibung = '';

  constructor(private route: ActivatedRoute) {

    const dramaName = this.route.snapshot.paramMap.get('name');

    if (dramaName === 'lovely-runner') {
      this.name = 'Lovely Runner';
      this.status = 'Geschaut ✅';
      this.bewertung = '⭐⭐⭐⭐⭐';
      this.folgen = '16';
      this.genre = 'Romance · Fantasy · Comedy';
      this.beschreibung = 'Lovely Runner ist ein romantisches K-Drama über Im Sol und Ryu Sun-jae.';
    }

    if (dramaName === 'my-bias-my-boss') {
      this.name = 'My Bias, My Boss';
      this.status = 'Schaue ich gerade 👀';
      this.bewertung = '⭐⭐⭐⭐⭐';
      this.folgen = '12';
      this.genre = 'Romance · Comedy';
      this.beschreibung = 'Eine romantische Geschichte über Arbeit, Liebe und unerwartete Gefühle.';
    }

    if (dramaName === 'agent-kim-reactivated') {
      this.name = 'Agent Kim Reactivated';
      this.status = 'Noch offen ⏳';
      this.bewertung = '⭐⭐⭐⭐';
      this.folgen = '12';
      this.genre = 'Action · Romance · Comedy';
      this.beschreibung = 'Eine spannende Geschichte mit Action, Humor und Romantik.';
    }

    if (dramaName === 'my-demon') {
      this.name = 'My Demon';
      this.status = 'Geschaut ✅';
      this.bewertung = '⭐⭐⭐⭐⭐';
      this.folgen = '16';
      this.genre = 'Fantasy · Romance · Comedy';
      this.beschreibung = 'Ein Dämon und eine Geschäftsfrau kommen sich auf unerwartete Weise näher.';
    }

    if (dramaName === 'bon-appetit-your-majesty') {
      this.name = 'Bon Appétit, Your Majesty';
      this.status = 'Schaue ich gerade 👀';
      this.bewertung = '⭐⭐⭐⭐⭐';
      this.folgen = '12';
      this.genre = 'Romance · Historical · Fantasy';
      this.beschreibung = 'Eine Köchin findet sich plötzlich in einer außergewöhnlichen Welt wieder.';
    }

    if (dramaName === 'business-proposal') {
      this.name = 'Business Proposal';
      this.status = 'Geschaut ✅';
      this.bewertung = '⭐⭐⭐⭐⭐';
      this.folgen = '12';
      this.genre = 'Romance · Comedy';
      this.beschreibung = 'Ein Blind Date entwickelt sich zu einer überraschenden Liebesgeschichte.';
    }

    if (dramaName === 'alchemy-of-souls') {
      this.name = 'Alchemy of Souls';
      this.status = 'Geschaut ✅';
      this.bewertung = '⭐⭐⭐⭐⭐';
      this.folgen = '20';
      this.genre = 'Fantasy · Romance · Action';
      this.beschreibung = 'Eine magische Geschichte über Liebe, Schicksal und Seelenwechsel.';
    }

    if (dramaName === 'twinkling-watermelon') {
      this.name = 'Twinkling Watermelon';
      this.status = 'Geschaut ✅';
      this.bewertung = '⭐⭐⭐⭐⭐';
      this.folgen = '16';
      this.genre = 'Romance · Fantasy · Music';
      this.beschreibung = 'Ein junger Musiker reist durch die Zeit und entdeckt seine Familie und die Liebe.';
    }

    if (dramaName === 'queen-of-tears') {
      this.name = 'Queen of Tears';
      this.status = 'Geschaut ✅';
      this.bewertung = '⭐⭐⭐⭐⭐';
      this.folgen = '16';
      this.genre = 'Romance · Drama · Comedy';
      this.beschreibung = 'Ein Ehepaar versucht, seine Beziehung trotz großer Schwierigkeiten zu retten.';
    }

    if (dramaName === 'true-beauty') {
      this.name = 'True Beauty';
      this.status = 'Schaue ich gerade 👀';
      this.bewertung = '⭐⭐⭐⭐⭐';
      this.folgen = '16';
      this.genre = 'Romance · Comedy · School';
      this.beschreibung = 'Eine Schülerin entdeckt mit Make-up eine neue Seite an sich und findet unerwartete Liebe.';
    }

  }
}