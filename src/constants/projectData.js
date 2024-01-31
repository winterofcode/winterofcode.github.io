// @ts-ignore
import logo from "../assets/wocLogo1.png"
const newProjectData = [
    {
        organization: 'GDSC NSEC',
        imageUrl: "data:image/png;base64,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",
        projects: [
            {
                id: 1,
                name: "Moksh",
                students: 5,
                codeLink: "https://github.com/akshitagupta15june/Moksh",
                techStack: ["OpenCV", "ML", "HTML", "CSS", "JS", "Reactjs"],
                description: `Moksh is a spiritual productivity tool designed for individuals who want to unlock their potential and
                achieve true balance in life. Our customized spiritual features help you take control of your work, focus
                on what truly matters, and rejuvenate your mind and spirit. By reading Bhagavad Gita, we become soul
                conscious and gain the strength to fight life's challenges. With Moksh, you can overcome the mental
                problems that arise from our body consciousness and find true happiness.
                This platform will help engineers, students, office workers to cope up with stressful environments.
                `,
                mentor: [{
                    name: "Akshita Gupta",
                    linkedin: "https://www.linkedin.com/in/akshita-gupta-a4a895187",
                },],
            },
            {
                id: 2,
                name: "face-X",
                students: 5,
                codeLink: "https://github.com/akshitagupta15june/Face-X",
                techStack: ["OpenCV", "ML", "HTML", "CSS", "JS", "Reactjs"],
                description: `Face-X is a comprehensive repository of algorithms and operations related to facial recognition, which
                includes a range of functionalities from facial filters, image processing, face mask detection, and facial
                attendance systems to animated emotions and facial cartoonification. It encompasses all the possible
                operations that can be performed on the frontal human face, making it a versatile platform for facial related tasks.
                `,
                mentor: [{
                    name: "Akshita Gupta",
                    linkedin: "https://www.linkedin.com/in/akshita-gupta-a4a895187",
                },],
            },
            {
                id: 3,
                name: "PetMe",
                students: 5,
                codeLink: "https://github.com/akshitagupta15june/PetMe",
                techStack: ["OpenCV", "ML", "HTML", "CSS", "JS", "Reactjs"],
                description: `PetMe is an all-in-one platform that allows animals to be adopted, donated to pet lovers, and provides
                emergency medical care to stray animals in need.
                Our mission is to provide a platform that connects animal lovers with pets in need of a forever home,
                while also providing emergency medical care for stray animals in distress. We strive to make a
                difference in the lives of these innocent creatures by offering options to Adopt, Donate and through our
                SOS feature Report stray animals in need of immediate assistance. Together, we can create a better
                world for all animals.
                `,
                mentor: [{
                    name: "Akshita Gupta",
                    linkedin: "https://www.linkedin.com/in/akshita-gupta-a4a895187",
                },],
            },
            {
                id: 4,
                name: `Hedging of financial Derivatives`,
                students: 5,
                codeLink: "https://github.com/Akshat111111/Hedging-of-Financial-Derivatives",
                techStack: ["Financial Programming", "Fintech", " Machine Learning", "Deep Learning"],
                description: `A Hedging is a market neutral trading strategy enabling traders to profit
                from virtually any market conditions: uptrend, downtrend, or sideways
                movement. This strategy is categorized as a statistical arbitrage and
                convergence trading strategy.
                
                `,
                mentor: [{
                    name: "Akshat Sharma",
                    linkedin: "https://www.linkedin.com/in/akshat-sharma11/",
                },],
            },
            {
                id: 5,
                name: "GeoWellAdvisor",
                students: 5,
                codeLink: "https://github.com/047pegasus/GeoWellAdvisor",
                techStack: ["Backend ", "DevOps"],
                description: `GeoWell Advisor is a powerful tool designed to help users determine the feasibility of digging a well at a specific location. Whether you are a farmer, a land developer, or simply someone interested in exploring groundwater resources, GeoWell Advisor provides you with essential information and insights to make informed decisions about well placement.
                `,
                mentor: [{
                    name: "Tanishq Agarwal",
                    linkedin: "https://www.linkedin.com/in/tanishq047/",
                },],
            },
            {
                id: 6,
                name: "DoodleCollab",
                students: 5,
                codeLink: " https://github.com/WikiPortal/DoodleCollab",
                techStack: ["Software Development"],
                description: `DoodleCollab is a cutting-edge application designed to transform the way we collaborate, offering an
                unparalleled whiteboard and sharing experience. Developed using the powerful ReactJS framework, our
                app seamlessly combines intuitive design with advanced functionalities to enhance your collaborative
                efforts.
                
                `,
                mentor: [{
                    name: "Jyotirmoy Roy",
                    linkedin: "https://www.linkedin.com/in/jyotirmoyroy69/",
                },],
            },
            {
                id: 7,
                name: "Acme Rockets",
                students: 7,
                codeLink: " https://github.com/Jagroop2001/AcmeRockets",
                techStack: ["HTML", "Tailwind CSS", "CSS", "JS", "Reactjs"],
                description: `Welcome to the AcmeRockets project! This repository houses the codebase for a captivating static website dedicated to showcasing the innovative rocket-powered products of Acme Rockets. Whether you're an aerospace enthusiast or a curious visitor, this project aims to deliver an immersive experience with its dynamic content and responsive design.
                `,
                mentor: [{
                    name: "Jagroop",
                    linkedin: "https://www.linkedin.com/in/jagroop-singh-3a2a401b4/",
                },],
            },
            {
                id: 8,
                name: "Pages : A book shop landing page ",
                students: 7,
                codeLink: "https://github.com/Jagroop2001/Pages-A-Book-Shop-Website",
                techStack: ["HTML", "Bootstrap", "CSS"],
                description: `I created Pages-A-Book-Shop-Website, a stylish and user-friendly landing page tailored for book enthusiasts. The site, crafted using HTML, Bootstrap, and CSS, ensures a seamless browsing experience. It features a diverse book catalog, intuitive navigation, and responsive design. The GitHub repository here offers transparency and collaboration. As the project's mentor, I oversee its development; connect with me on LinkedIn for insights. Immerse yourself in the world of literature with Pages-A-Book-Shop-Website today
                `,
                mentor: [{
                    name: "Jagroop",
                    linkedin: "https://www.linkedin.com/in/jagroop-singh-3a2a401b4/",
                },],
            },
            {
                id: 9,
                name: "NASA Rocket project",
                students: 7,
                codeLink: "  https://github.com/Jagroop2001/nasa-project-fullstack",
                techStack: ["Node", "MongoDb", "Express", "Reactjs"],
                description: `Fullstack application for controlling space missions and enabling seamless exploration beyond our planet. 🌌🛰
                Build with Node.js and React Application, a powerful combination for building dynamic and scalable web applications with seamless server-side functionality.
               `,
                mentor: [{
                    name: "Jagroop",
                    linkedin: "https://www.linkedin.com/in/jagroop-singh-3a2a401b4/",
                },],
            },
            {
                id: 10,
                name: "Music Player App",
                students: 7,
                codeLink: " https://github.com/Jagroop2001/music-player ",
                techStack: ["Vue js"],
                description: ` This is a simple music player frontend project created using Vuejs

               `,
                mentor: [{
                    name: "Jagroop",
                    linkedin: "https://www.linkedin.com/in/jagroop-singh-3a2a401b4/",
                },],
            },
        ],
        noOfProjects: 10,
    },
    {
        organization: 'Presar',
        imageUrl: "https://presear.com/assets/img/logo.svg",
        projects: [
            {
                id: 1,
                name: "eduAlgo",
                students: 5,
                codeLink: "https://github.com/edualgo/eduAlgo",
                techStack: ["Ai", "Ml", "Python", "Cloud Computing", "Computer Vision"],
                description: `This is a very simple python package made up with python script to study different algorithms for educational purposes.
                `,
                mentor: [{
                    name: "Abhijit Tripathy",
                    linkedin: "https://www.linkedin.com/in/abhijit-tripathy/",
                },
                {
                    name: "ISHWAR",
                    linkedin: "https://www.linkedin.com/in/ishwar-ajgalley-7a86b3203",
                },],
            },
            {
                id: 2,
                name: "Documentation",
                students: 5,
                codeLink: "https://github.com/edualgo/documentation",
                techStack: ["Ai", "Ml", "Python", "Cloud Computing", "Computer Vision"],
                description: `The documentation website for the python package "eduAlgo"
                `,
                mentor: [{
                    name: "Abhijit Tripathy",
                    linkedin: "https://www.linkedin.com/in/abhijit-tripathy/",
                },
                {
                    name: "ISHWAR",
                    linkedin: "https://www.linkedin.com/in/ishwar-ajgalley-7a86b3203",
                },],
            },
            {
                id: 3,
                name: "interview-corner",
                students: 5,
                codeLink: "https://github.com/edualgo/interview-corner",
                techStack: ["Ai", "Ml", "Python", "Cloud Computing", "Computer Vision"],
                description: `Many time, when an interview approaches, candidates start searching for different algorithms in different programming languages for practise. This project aims to build a website which will contain the codes along with the techniques and explanations so that it can be helpful for many.
                `,
                mentor: [{
                    name: "Abhijit Tripathy",
                    linkedin: "https://www.linkedin.com/in/abhijit-tripathy/",
                },
                {
                    name: "ISHWAR",
                    linkedin: "https://www.linkedin.com/in/ishwar-ajgalley-7a86b3203",
                },],
            },
            {
                id: 4,
                name: "Grokking-Machine-Learning",
                students: 5,
                codeLink: "https://github.com/edualgo/Grokking-Machine-Learning",
                techStack: ["Ai", "Ml", "Python", "Cloud Computing", "Computer Vision"],
                description: `This repo aims to contain different machine learning use cases along with the descriptions to the model architectures. This project is a part of eduAlgo.
                `,
                mentor: [{
                    name: "Abhijit Tripathy",
                    linkedin: "https://www.linkedin.com/in/abhijit-tripathy/",
                },
                {
                    name: "ISHWAR",
                    linkedin: "https://www.linkedin.com/in/ishwar-ajgalley-7a86b3203",
                },],
            },
        ],
        noOfProjects: 4,
    },
    {
        organization: 'Eduhub-Community',
        imageUrl: "https://eduhubcommunity.tech/src/images/eduhub/img.png",
        projects: [
            {
                id: 1,
                name: "Eduhub-Community",
                students: 5,
                codeLink: "https://github.com/Eduhub-Community/Eduhub-Community.github.io",
                techStack: ["Blockchain", "Web Development"],
                description: `Eduhub is a community of the people, for the people and by the people. Our vision is to create an environment where people can learn and apply technical knowledge together. Our mission is to build a strong technical community which is open-minded and has an intense desire for consistent learning from one another in the community. We have been conducting and organizing numerous Open Source Programs, Hackathons, Meetups, Conferences and 1:1 Mentorships.

                An Open Source project Website built using HTML, CSS, JavaScript and Bootstrap Php
                `,
                mentor: [{
                    name: "Sahitya Roy",
                    linkedin: "https://www.linkedin.com/in/sahitya-roy-244b941a2/",
                },],
            },

        ],
        noOfProjects: 1,
    },
    {
        organization: 'Subhankar mishra lab',
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/winterofcode-55d97.appspot.com/o/tirtha-logo-light.svg?alt=media&token=91567821-ade8-4f7b-bfdb-a578b7d83583",
        projects: [
            {
                id: 1,
                name: "Tirtha",
                students: 1,
                codeLink: "https://github.com/smlab-niser/tirtha-public/",
                techStack: ["Computer Vision", "Python"],
                description: `Project Tirtha is an academic initiative to create 3D models of heritage sites using crowdsourced images. The word Tirtha is Sanskrit for "a place of pilgrimage", and is commonly used to refer to the sacred sites of Hinduism. Our goal is to preserve and showcase the beauty and cultural significance of heritage sites. We believe that by allowing the general public to contribute to the creation of these models, and by providing open access to these models, we can increase awareness and appreciation of these important cultural landmarks and inspire future generations to maintain them for years to come.
                `,
                mentor: [{
                    name: "Jyotirmaya Shivottam",
                    linkedin: "",
                },],
            },

        ],
        noOfProjects: 1,
    },
    




]
export default newProjectData;