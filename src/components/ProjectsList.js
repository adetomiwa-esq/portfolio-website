import Xeleron from './../images/xeleron.png';
import Musicanny from './../images/musicanny.png';
import Artsy from './../images/artsy.png';
import Realty from './../images/realty.png';
import Detail from './../images/detail.png';
import Atafrica from './../images/atafrica.png';

export const ProjectsList = [
    {
        imgSrc: Atafrica,
        name: 'Atafrica',
        description: `Atafrica is a simple landing page of a roboadvisor created to advise various users on how to make te most of their money by saving or investing it. It also contains a portfolio section for selecting risk tolerance.`,
        api: 'API - https://atafrica.onrender.com/api/v1/get_stocks',
        url: 'https://robo-advisor.netlify.app',
        technologies: ['React', 'Tailwind-css', 'MongoDB', 'Node-js/express']
    },

    {
        imgSrc: Xeleron,
        name: 'Xeleron dApp',
        description: 'Xeleron is a decentralized application that offers various products such as the ability to pool tokens, swap, farm, stake and launch tokens. I had the opportunity to work along side a team of brilliant developers to bring this project to fruition. And the technologies personally employed by me are listed below.',
        url: 'https://xelerondeployment.vercel.app',
        technologies: ['React', 'Redux-toolkit', 'Tailwind-css']
    },

    {
        imgSrc: Musicanny,
        name: 'Musicanny',
        description: 'I am currently working on this music web application which is to be pitched in the coming weeks to induce investment. The goal is to create a music web application on par with every other top music application',
        url: 'https://musicanny.netlify.app',
        technologies: ['React', 'Redux-toolkit', 'Tailwind-css', 'Typescript']
    },

    {
        imgSrc: Detail,
        name: 'Ade-s Detail',
        description: "This is an auto detailing website to promote the business of cleaning, restoring and removing contaminants from a vehicle's interior.",
        url: 'https://ade-details.netlify.app',
        technologies: ['React', 'Redux-toolkit', 'Tailwind-css', 'Typescript']
    },

    {
        imgSrc: Realty,
        name: 'Home Rentals',
        description: 'A realty website containing a list of available properties for rental in a neighbourhood and prices of rent.',
        url: 'https://main--home-rentals-agency.netlify.app/',
        technologies: ['React', 'Tailwind-css', 'Typescript']
    },

    {
        imgSrc: Artsy,
        name: 'Artsy',
        description: 'A fully functional e-commerce website for ordering various artworks.',
        url: 'https://adetomiwa-esq-artsy-web-app.netlify.app/',
        technologies: ['React', 'Tailwind-css']
    },
]