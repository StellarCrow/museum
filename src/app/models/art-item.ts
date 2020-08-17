export interface IArtItem {
  date: number;
  dimensions: [{
    unit: string,
    type: string,
    value: string
  }];
  imageUrl: string;
  title: string;
  colors: [{
    percentage: number,
    hex: string
  }];
  description: string;
  category: string;
  materials: [string];
  author: string;
  tags: [string];
}
