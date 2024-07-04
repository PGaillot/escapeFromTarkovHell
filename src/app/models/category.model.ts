export interface ItemCategory {
  id: string;
  name: string;
  normalizedName: string;
  parent: { id: string };
  children: [{ id: string }];
}
