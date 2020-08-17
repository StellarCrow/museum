export interface IArtObject {
  dating: {
    sortingDate: number
  };
  dimensions: [{
    unit: string,
    type: string,
    value: string
  }];
  webImage: {
    url: string
  };
  title: string;
  colors: [{
    percentage: number,
    hex: string
  }];
  description: string;
  materials: [string];
  principalMaker: string;
  classification: {
    iconClassDescription: [string]
  };
  acquisition: {
    method: string
  };
}
