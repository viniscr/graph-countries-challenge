export interface Country {
  _id: number;
  name: string;
  area: number;
  population: number;
  capital: string;
  location: {
    latitude: number;
    longitue: number;
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
