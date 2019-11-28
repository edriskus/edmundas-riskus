import { LandingPage } from "../types/Landing";

export const landingPage: LandingPage = {
  hero: {
    primary: "Edmundas",
    secondary: "Riškus",
    story: `
      Front-end developer at Mediapark, a Data Mining student at VGTU 
      and generally a geek in my free time, with a passion for clean code, 
      huge obsession with cool (mostly Japanese) cars and deep respect for Pink Floyd 
      and other musical geniuses of the 70s and 80s. 
    `
  },
  timeline: [
    {
      pretitle: "Started working as a Frontend developer at",
      title: "Mediapark UAB",
      start: "2017-04-01",
      events: [
        {
          timestamp: "2019-09-01",
          pretitle: "Started studying Data Mining Technologies at VGTU"
        },
        {
          timestamp: "2019-06-01",
          pretitle: "Graduated from VGTU with a",
          title: "Software Engineering degree"
        }
      ]
    },
    {
      pretitle: "Started studying Software Engineering at",
      title: "Vilnius Gediminas Technical University",
      start: "2015-09-01",
      end: "2017-04-01"
    }
  ],
  showcase: {},
  contacts: {}
};
