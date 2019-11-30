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
          pretitle: "Started studying Data Mining at VGTU"
        },
        {
          timestamp: "2019-07-01",
          tags: [
            "GraphQL",
            "Apollo Client",
            "Apollo Server",
            "React Hooks",
            "React Context"
          ]
        },
        {
          timestamp: "2019-03-20",
          pretitle: "Graduated from VGTU with a",
          title: "Software Engineering degree"
        },
        {
          timestamp: "2018-11-15",
          tags: [
            "React",
            "Redux",
            "Redux Saga",
            "Material UI",
            "JSS (css-in-JS)",
            "Jest (Unit testing)"
          ]
        },
        {
          timestamp: "2018-09-01",
          pretitle: "Started working on a new project with",
          title: "React + Redux"
        },
        {
          timestamp: "2018-07-10",
          tags: ["Atlassian JIRA", "Time management", "Remote communication"]
        },
        {
          timestamp: "2018-05-31",
          pretitle: "Worked for 2 months remotely from",
          title: "Paris, France"
        },
        {
          timestamp: "2018-01-01",
          tags: [
            "Angular Material",
            "Webpack customization",
            "NgRx (Redux-like state management for Angular)"
          ]
        },
        {
          timestamp: "2017-12-01",
          pretitle: "Built a new project UI architecture using",
          title: "Multiple Angular apps"
        },
        {
          timestamp: "2017-08-28",
          tags: [
            "ReactiveX JS",
            "Advanced API flow",
            "Payment integration (MrTango)"
          ]
        },
        {
          timestamp: "2017-08-01",
          pretitle: "Took over an Angular project with advanced usage of",
          title: "RXJS"
        },
        {
          timestamp: "2017-07-01",
          pretitle: "Released a hybrid web app for Windows using",
          title: "Electron"
        },
        {
          timestamp: "2017-06-05",
          tags: [
            "Angular 2+",
            "TypeScript",
            "Bootstrap",
            "HTML",
            "LESS",
            "SCSS"
          ]
        }
      ]
    },
    {
      pretitle: "Started studying Software Engineering at",
      title: "Vilnius Gediminas Technical University",
      start: "2015-09-01",
      end: "2017-04-01"
    },
    {
      pretitle: "Published my first Android app on Google Play",
      start: "2013-10-23",
      end: "2015-09-01",
      events: [
        {
          timestamp: "2014-02-23",
          pretitle: 'Released an "I owe you" app for my friends',
          title: "Skolos v1.0"
        },
        {
          timestamp: "2014-07-02",
          pretitle: "My first (very confused) look at Facebook's",
          title: "Graph API"
        },
        {
          timestamp: "2014-10-24",
          pretitle: "Pitching my dream sharing app idea on",
          title: "App Camp"
        },
        {
          timestamp: "2014-12-21",
          pretitle: "A ground-up UI rebuild for",
          title: "Skolos v2.0"
        }
      ]
    }
  ],
  showcase: {},
  contacts: {}
};
