export const menuData = [
  {
    label: "HOME",
    href: "/",

  
    // submenu: [
    //   {
    //     homeMenuItems: [
    //       {
    //         imageSrc: "/assets/img/header/home-1.jpg",
    //         title: "Home 01",
    //         buttons: [
    //           { label: "Multi Page", href: "/" },
    //           { label: "One Page", href: "/home-1-one-page" },
    //         ],
    //       },
    //       {
    //         imageSrc: "/assets/img/header/home-2.jpg",
    //         title: "Home 02",
    //         buttons: [
    //           { label: "Multi Page", href: "/home-2" },
    //           { label: "One Page", href: "/home-2-one-page" },
    //         ],
    //       },
    //     ],
    //   },
    // ],
  },
  {
    label: "ABOUT US",
    href: "/about",
  },
  {
    label: "PRODUCTS",
    href: "/products",
   
  },
  {
    label: "SERVICES",
    href: "/service",
  
 
  },
  {
    label: "INFORMATION",
    href: "#",
    iconClass: "fa-regular fa-plus",
    submenu: [
      { label: "PROJECTS", href: "/project" },
      { label: "CLIENTS", href: "/clients" },
      { label: "CAREERS", href: "/careers" },
      { label: "NEWS & UPDATES", href: "/news-grid" },
    ],
  },
  {
    label: "CONTACT US",
    href: "/contact",

  },
 
];

export const onepageLinks = [
  { href: "#about", text: "ABOUT US" },
  { href: "#services", text: "SERVICES" },
  { href: "#projects", text: "PROJECTS" },
  { href: "#team", text: "TEAM" },
  { href: "#blog", text: "BLOG" },
  { href: "#contact", text: "CONTACT" },
];

export const footerLinks = [
  // { name: "About Us", href: "#" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/service" },
  { name: "Projects", href: "/project" },
  { name: "Clients", href: "/clients" },
  { name: "Careers", href: "/careers" },
  { name: "News & Updates", href: "/news-grid" },
];
