import { Injectable } from '@angular/core';
import { request, gql } from 'graphql-request';
import { HideoutItem } from '../models/hideout-item.model';
import { ItemDetails } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class tarkovApiService {
  private BASE_URL = 'https://api.tarkov.dev/graphql';

  getTarkovItem(itemName: string, itemId: string): Promise<any> {
    const query = gql`
    {
      items(name: "${itemName}") {
        id
        name
        shortName
        iconLink
      }
    }
    `;

    return request(this.BASE_URL, query)
      .then((data) => data)
      .catch((error) => {
        throw new Error(`Error fetching items: ${error.message}`);
      });
  }

  getItemDetails(itemId: string): Promise<ItemDetails> {
    const query = gql`
      query {
        item(lang: fr, id: "${itemId}") {
          id
          name
          shortName
          iconLink
          description
          basePrice
          updated
          width
          height
          backgroundColor
          gridImageLink
          baseImageLink
          inspectImageLink
        }
      }
    `;

    return request<{ item: any }>(this.BASE_URL, query)
      .then((data) => data.item)
      .catch((error) => {
        throw new Error(`Error fetching item details: ${error.message}`);
      });
  }

  getHideoutStations(lang: string = 'fr'): Promise<HideoutItem> {
    const query = gql`
      {
        hideoutStations(lang :${lang}){
            id
            name
            imageLink          
            levels{          
              level
              stationLevelRequirements{
                station{
                  name
                }
                level             
              }
              itemRequirements{
                quantity    
                  item{
                id
                name
                iconLink
              }
              }
            }
          }
      }
      `;

    return request<HideoutItem>(this.BASE_URL, query)
      .then((data) => data)
      .catch((error) => {
        throw new Error(`Error fetching items: ${error.message}`);
      });
  }
}
