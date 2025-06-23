const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "courses",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "cuet",
        path: "/common-university-entrance-test-in-dwarka/ ",
        newTab: false,
      },
      {
        id: 42,
        title: "ca",
        path: "/ca-coaching-in-dwarka",
        newTab: false,
      },
      {
        id: 43,
        title: "cs",
        path: "/cs-coaching-in-dwarka/",
        newTab: false,
      },
      {
        id: 48,
        title: "IX & X all subjects",
        path: "/coaching-for-ix-and-x",
        newTab: false,
      },
      {
        id: 46,
        title: "xi & xii commerce",
        path: "/commerce-coaching-in-dwarka",
        newTab: false,
      },
      {
        id: 45,
        title: "clat",
        path: "/clat-coaching-in-dwarka/",
        newTab: false,
      },

      {
        id: 49,
        title: "Neev",
        path: "/neev-for-xi-students-in-dwarka",
        newTab: false,
      },
      {
        id: 50,
        title: "Imarat",
        path: "/imarat-for-xi-students-in-dwarka/",
        newTab: false,
      },
      {
        id: 51,
        title: "Anant",
        path: "/anant-for-xii-students-in-dwarka",
        newTab: false,
      },
    ],
  },
  {
    id: 7,
    title: "Our Centers",
    path: "/our-centers",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: true,
    submenu: [
      {
        id: 41,
        title: "Parents' Desk",
        path: "/contact",
        newTab: false,
      },
      {
        id: 42,
        title: "Branches",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: " Career",
        path: "/contact/career",
        newTab: false,
      },
    ],
  },
];
export default menuData;
