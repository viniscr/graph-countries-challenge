export interface Country {
  _id: string;
  name: string;
  area: number;
  population: number;
  capital: string;
  location: {
    latitude: number;
    longitude: number;
  };
  topLevelDomains: [
    {
      name: string;
    }
  ];
  flag: {
    svgFile: string;
  };
}
