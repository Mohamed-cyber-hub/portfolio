import TravelWithMe from '../../assets/images/projects/capture_20240908122716079.bmp';
import Mycompound from '../../assets/images/projects/mycompound.bmp';
import PersonalBudgetTracker from '../../assets/images/projects/Personal Budget Tracker.png';
import AnimeServerAction from '../../assets/images/projects/Anime-Server-Action.png';
import OnlineBusinessSolution from '../../assets/images/projects/OnlineBussines Sloution.bmp';
import ThinkNoteBad from '../../assets/images/projects/ThinkNoteBad.png'
import mernProductManger from '../../assets/images/projects/mern-product-manger.bmp';



export const AllOfMyProjects = [
    {
        id: 1,
        image: mernProductManger,
        name: 'MERN Product Manager',
        description: 'A full-stack application that allows users to manage products, including adding, editing, and deleting them. The application is built using React, Node.js, Express, and MongoDB.',
        technologies: ['React', 'Node', 'Express', 'MongoDB'],
        repository: 'https://github.com/Mohamed-cyber-hub/mern-product-manager',
        liveDemo: 'https://mern-product-manager-frontend.vercel.app/',
    },
    {
        id: 1,
        image: ThinkNoteBad,
        name: 'ThinkNote Bad',
        description: 'A simple note-taking application built with React and Node.js.',
        technologies: ['React', 'Node', 'Express', 'MongoDB'],
        repository: 'https://github.com/Mohamed-cyber-hub/thinkborad',
        liveDemo: 'https://thinkborad-frontend.vercel.app/  ',
    },
    {
        id: 2,
        image: OnlineBusinessSolution,
        name: 'Online Business Solution',
        description: 'Online Business Solution is a modern landing page application that allows users to search for businesses and get information about them. The application has a user-friendly interface and is optimized for mobile devices for a seamless user experience.',
        technologies: ['React', 'React Awesome Reveal', 'TailwindCSS', 'React Icons', 'React Router Dom' ],
        repository: 'https://github.com/Mohamed-cyber-hub/online-bussines-sloution',
        liveDemo: 'https://online-bussines-sloution.vercel.app/',
    },

    {
        id: 4,
        image: TravelWithMe,
        name: 'Travel With Me',
        description: 'A Modern Frontend UI Design for Travel Website. This application is a travel website that allows users to search for destinations, book flights, hotels, and rental cars, and make payments for their trips',
        technologies:['NextJS', 'TypeScript', 'TailwindCSS', 'React-Router-Dom'],
        repository: 'https://github.com/Mohamed-cyber-hub/travel-with-me',
        liveDemo: 'https://travel-with-me-seven.vercel.app/',
    },
    {
        id: 5,
        image: Mycompound,
        name: 'Mycompound',
        description: ' Mycompound is a platform that deliver smart city solutions within a gated community providing an unparalleled living experience for residents and beneficiaries and a data-driven management approach for developers',
        technologies: ['ReactJS', 'Vite', 'TailwindCSS', 'React-Router-Dom', 'Redux', 'Framer Motion', 'Axios', 'CLX', 'Material UI', 'Recharts',], 
        repository: 'https://github.com/Mohamed-cyber-hub/mycompound',
        liveDemo: 'https://my-compound.com/teamspage'
    },
    {
        id: 8,
        image: PersonalBudgetTracker,
        name: 'Personal Budget Tracker',
        description:' This application helps users to track their expenses and income, also you can add, edit, and delete transactions, also you can add, edit, and delete categories',
        technologies: ['React', 'Bootstrap', 'React Dom'],
        repository:'https://github.com/Mohamed-cyber-hub/personal-budget-tracker-2',
        liveDemo: 'https://personal-budget-tracker-2.vercel.app/',
    },
    {
        id: 9,
        image: AnimeServerAction,
        name: 'Anime Server Action',
        description: ' This application is a server action application that allows users to search for anime and get information about them',
        technologies: ['React', 'NextJS', 'TailwindCSS', 'Typescript', 'Framer Motion'],
        repository: 'https://github.com/Mohamed-cyber-hub/Anime-Server-Action',
        liveDemo: 'https://anime-server-action.vercel.app/'
    }
];