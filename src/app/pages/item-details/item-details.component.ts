import { Component, ElementRef, ViewChild } from '@angular/core';
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

  @ViewChild('itemImgBlock', { static: true }) itemImgBlockRef!: ElementRef;
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
          this.initItem()
        })
        .catch((e) => console.error(e));
    }
  }


  initItem(){
    const imgSizeFactor = 4;
    const itemImgBlock:HTMLElement = this.itemImgBlockRef.nativeElement as HTMLElement;
    if(itemImgBlock && this.item){      
      itemImgBlock.style.background = this.item?.backgroundColor;
      // itemImgBlock.style.backgroundImage = `url('${this.item?.baseImageLink}')`;
      // itemImgBlock.style.backgroundSize = 'cover';
      itemImgBlock.style.width = this.item.width * imgSizeFactor + 'rem';
      itemImgBlock.style.height = this.item.height * imgSizeFactor + 'rem';
    } 
  }
}
