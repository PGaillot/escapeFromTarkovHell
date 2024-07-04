import { Component } from '@angular/core';
import { tarkovApiService } from '../../services/tarkovApi.service';
import { ActivatedRoute } from '@angular/router';
import { ItemDetails } from '../../models/item.model';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.scss',
})
export class ItemDetailsComponent {


  item:ItemDetails | undefined;

  constructor(
    private tarkovApiService: tarkovApiService,
    private route: ActivatedRoute
  ) {
    const param = this.route.snapshot.paramMap.get('tarkovId');

    if (param) {
      this.tarkovApiService
        .getItemDetails(param)
        .then((data) => {
          console.log(data);
          this.item = data;
        })
        .catch((e) => console.error(e));
    }
  }
}
