import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-delete-drama',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './delete-drama.html',
  styleUrl: './delete-drama.css'
})
export class DeleteDrama {

  name = '';

  constructor(private route: ActivatedRoute) {

    const dramaName = this.route.snapshot.paramMap.get('name');

    if (dramaName === 'twinkling-watermelon') {
      this.name = 'Twinkling Watermelon';
    }

    if (dramaName === 'lovely-runner') {
      this.name = 'Lovely Runner';
    }

    if (dramaName === 'my-bias-my-boss') {
      this.name = 'My Bias, My Boss';
    }

    if (dramaName === 'agent-kim-reactivated') {
      this.name = 'Agent Kim Reactivated';
    }

    if (dramaName === 'my-demon') {
      this.name = 'My Demon';
    }

    if (dramaName === 'bon-appetit-your-majesty') {
      this.name = 'Bon Appétit, Your Majesty';
    }

    if (dramaName === 'business-proposal') {
      this.name = 'Business Proposal';
    }

    if (dramaName === 'alchemy-of-souls') {
      this.name = 'Alchemy of Souls';
    }

    if (dramaName === 'true-beauty') {
      this.name = 'True Beauty';
    }

  }

}
