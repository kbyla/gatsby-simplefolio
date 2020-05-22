import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'abdelhamid kbyla | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'hello i am a begener developer',
  name: 'abdelhamid kbyla',
  subtitle: 'i can creat for you alsome websites with reasnable price',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'kbyla.jpg',
  paragraphOne: 'i have taken alot of programming course in the university as a physics major and also in online courses like udemy',
  paragraphTwo: 'the reason why you should chose me because i love alot this job and i am always developping my selfe',
  paragraphThree: 'finaly takes for taking time to read about me',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'simplefolio',
    info: 'this a website to add simplefolio about you',
    info2: 'very sipmple and easy',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'robofriends',
    info: 'a simple websiete just for learning the basics of react',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'robofriends redux',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'mindbraind',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'contact me for awsome service',
  btn: 'email me',
  email: 'abdelhamid.kbyla@uit.ac.ma',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
