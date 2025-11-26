export type PropertyType = {
  name: string;
  type: "1 Bedroom Expandable to 2" | "1 Bedroom Expandable to 3" | "2 Bedroom Terrace" | "2 Bedroom Semi-Detached Expandable to 3";
  img: string;
  bathrooms: number;
  floorSpace: number;
  plotSize: string;
  price: number;
  floorPlan: {
    layout: string;
    map: string;
  }
  cashTerms: {
    minimum: number;
    sixMonths: number;
    twelveMonths: number;
  };
  mortgageTerms: {
    loanAmount: number;
    minimumCash: number;
    tenure: number;
    baseRate: number;
    monthlyRepayment: number;
    monthlyIncome: number;
  };
  propertyRentalValue: {
    rentValue: number;
    averageYield: number;
  };
  unitsLeft: number;
}

export const propertyList: PropertyType[] = [
  {
    name: "Opal",
    type: "1 Bedroom Expandable to 2",
    img: "https://cdn.prod.website-files.com/5b7fc1dce825746280869575/5b869bc9fa512c763089002e_opal.jpg",
    bathrooms: 1.5,
    floorSpace: 61,
    price: 50000,
    plotSize: "35ft x 70ft",
    floorPlan: {
      layout: "https://cdn.prod.website-files.com/5b7fc1dce825746280869575/5b7fc51b8e9ed80add952468_1%20BEDROOM%20EXPANDED%20TO%203.jpg",
      map: "https://cdn.prod.website-files.com/5b7fc1dce825746280869575/5b8968a15dbd74338a6781b8_1%20BEDROOM%20EXP.%20TO%202%20%26%203-1_min-min.png"
    },
    cashTerms: {
      minimum: 7500,
      sixMonths: 7370,
      twelveMonths: 3810
    },
    mortgageTerms: {
      loanAmount: 42500,
      minimumCash: 7500,
      tenure: 15,
      baseRate: 12.75,
      monthlyRepayment: 617,
      monthlyIncome: 1541
    },
    propertyRentalValue: {
      rentValue: 160,
      averageYield: 5
    },
    unitsLeft: 12
  },
  {
    name: "Beryl",
    type: "1 Bedroom Expandable to 3",
    img: "https://cdn.prod.website-files.com/5b7fc1dce825746280869575/5b869bc9e92258d8763cc467_beryl.jpg",
    bathrooms: 1.5,
    floorSpace: 61,
    plotSize: "35ft x 80ft",
    price: 60000,
    floorPlan: {
      layout: "https://cdn.prod.website-files.com/5b7fc1dce825746280869575/5b7fc51b8e9ed80add952468_1%20BEDROOM%20EXPANDED%20TO%203.jpg",
      map: "https://cdn.prod.website-files.com/5b7fc1dce825746280869575/5b8968a15dbd74338a6781b8_1%20BEDROOM%20EXP.%20TO%202%20%26%203-1_min-min.png"
    },
    cashTerms: {
      minimum: 9000,
      sixMonths: 8840,
      twelveMonths: 4583
    },
    mortgageTerms: {
      loanAmount: 45900,
      minimumCash: 9000,
      tenure: 15,
      baseRate: 12.75,
      monthlyRepayment: 574,
      monthlyIncome: 1434
    },
    propertyRentalValue: {
      rentValue: 160,
      averageYield: 5
    },
    unitsLeft: 0
  },
  {
    name: "Alexandra",
    type: "2 Bedroom Terrace",
    img: "https://cdn.prod.website-files.com/5b7fc1dce825746280869575/5b7fc51d8d1590c519e2daa5_terrace-min.png",
    bathrooms: 2.5,
    floorSpace: 95,
    plotSize: "25ft x 60ft",
    price: 70000,
    floorPlan: {
      layout: "https://cdn.prod.website-files.com/5b7fc1dce825746280869575/5b7fc51ce8257459f286970d_2BEDROOM%20TERRACE.jpg",
      map: "https://cdn.prod.website-files.com/5b7fc1dce825746280869575/5b8a1fdeb8c5082f93fabd18_2%20BEDROOM%20TERRACE_-1.png",
    },
    cashTerms: {
      minimum: 10500,
      sixMonths: 10320,
      twelveMonths: 5330
    },
    mortgageTerms: {
      loanAmount: 59500,
      minimumCash: 10500,
      tenure: 15,
      baseRate: 12.75,
      monthlyRepayment: 744,
      monthlyIncome: 1858
    },
    propertyRentalValue: {
      rentValue: 200,
      averageYield: 5
    },
    unitsLeft: 5
  },
  {
    name: "Jade",
    type: "2 Bedroom Semi-Detached Expandable to 3",
    img: "https://cdn.prod.website-files.com/5b7fc1dce825746280869575/5b869bc8fa512c44f789002d_jade.jpg",
    bathrooms: 2.5,
    floorSpace: 90,
    plotSize: "35ft x 80ft",
    price: 75000,
    floorPlan: {
      layout: "https://cdn.prod.website-files.com/5b7fc1dce825746280869575/5b7fc51be82574fa6c86970c_2BEDROOM%20SEMI%20DETACHED%20EXPANDABLE%20TO%203.jpg",
      map: "https://cdn.prod.website-files.com/5b7fc1dce825746280869575/5b8a1fd2902f3d372aa6710b_2%20BEDROOM%20SEMI-DETACHED%20EXP.%203-1.png"
    },
    cashTerms: {
      minimum: 11250,
      sixMonths: 11050,
      twelveMonths: 5710
    },
    mortgageTerms: {
      loanAmount: 63750,
      minimumCash: 11250,
      tenure: 15,
      baseRate: 12.75,
      monthlyRepayment: 797,
      monthlyIncome: 1990
    },
    propertyRentalValue: {
      rentValue: 240,
      averageYield: 5
    },
    unitsLeft: 8
  }
]