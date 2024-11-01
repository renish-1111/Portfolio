// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'renish-1111', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/Portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'renish-1111/Web-Devlopment',
          'renish-1111/Url-Shortener',
          'renish-1111/Blogify',
          'renish-1111/virtual-desktop-assistant',

        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Codebat',
          description:
            'Codebat is a platform where you can learn coding and improve your coding skills.\n It is a platform where you can learn coding and improve your coding skills.',

          imageUrl:
            'https://i.ibb.co/sJbGqtK/image.png',
          link: 'https://codebat-io.netlify.app/',
        },
        {
          title: 'Finance Calculator',
          description:
            'Finance Calculator is a platform where you can calculate your finance related things. Like SIP, EMI, FD, SWP, GST etc.',
          imageUrl:
            'https://i.postimg.cc/brWRp8kJ/brave-screenshot-localhost.png',
          link: 'https://finance-scaler.netlify.app/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Renish Ponkiya',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'renish-ponkiya-299939286',
    instagram: 'renish-1111',
    facebook: 'renish-ponkiya',
    phone: '9687400141',
    email: 'ponkiyarenish@gmail.com',
    twitter: '',
    mastodon: '',
    researchGate: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1rfgk84BKuXwsbFwuXJFZw5rrg22CLhGK/view', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'DSA',
    'Python',
    'Flask',
    'JavaScript',
    'TypeScript',
    'React.js',
    'Node.js',
    'MySQL',
    'MongoDB',
    'Git',
    'Tailwind',
    'Bootstrap',
  ],
  experiences: [
    {
      company: '',
      position: '',
      from: '',
      to: '',
      companyLink: '',
    }
  ],
  certifications: [
    {
      name: 'Google Cloudskillsboost Millstone 1 Completion',
      body: 'Learned about Google Cloud Platform , its services and also completed the lab.',
      year: '27th September 2024',
      link: 'https://drive.google.com/file/d/1S9qlEQ2EsuNQrTq1mZrHdBdmO0NavjBX/view?usp=sharing',
    },
    {
      name: 'LAKSHYA - Internal Hackathon for Smart India Hackathon under SSIP 2.0',
      body: 'Give Presentation on the given problem statement.',
      year: '18th September 2024,',
      link: 'https://drive.google.com/file/d/16Z5DPP9l0O0ZA3n9ZSKOS_RH-C92KrZY/view?usp=sharing',
    },
    {
      name: 'Frolic - Code-A-Thon',
      body: 'Individual website or app built.',
      year: '14th September 2024',
      link: 'https://drive.google.com/file/d/1zZSfG4Ia_-FixeeHcBUvnYPKpoqFotZA/view?usp=drive_link',
    },
    {
      name: 'Code Carnival - An Open Hackathon [36 hrs]',
      body: 'My team work on Personal Devlopment Advisor project in this hackathon.',
      year: '2nd - 3rd March, 2024',
      link: 'https://drive.google.com/file/d/1LM2AL4ZLO241MCGLqeseKMoJkhOR3ieh/view?usp=sharing',
    },
    {
      name: 'TECHNOPLANET 2023 - Blind Coding',
      body: 'Completed the Blind Coding challenge in C language.',
      year: '29th September 2023',
      link: 'https://drive.google.com/file/d/14HfqSvXeb0nEFQWkqFz84J0VvD5JlrIE/view?usp=sharing',
    },
  ],
  educations: [
    {
      institution: 'Goverment Engineering College Rajkot',
      degree: 'B.E. in Computer Engineering (GTU)',
      from: '2022',
      to: '2026',
    },
    {
      institution: 'Tapovan Science School',
      degree: '11th-12th Science (GSEB)',
      from: '2020',
      to: '2022',
    },
    {
      institution: 'Tapovan School',
      degree: '10th (GSEB)',
      from: '2019',
      to: '2020',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description: ''
    }
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'renish_ponkiya', // to hide blog section, keep it empty
    limit: 5, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'procyon', // Options: Auto Light Dark Cupcake Bumblebee Emerald Corporate Synthwave Retro Cyberpunk Valentine Halloween Garden Forest Aqua

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'procyon',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#323232',          // Dark gray primary color
      secondary: '#808080',        // Medium gray for secondary elements
      accent: '#262626',           // Dark accent for consistency
      neutral: '#262626',          // Slightly off-black neutral
      'base-100': '#000000',       // Pure black base background
      'base-200': '#262626',       // Dark gray secondary base
      'bg-base-300': '#252525',    // Subtle background variation
      'base-content': '#ffffff',   // Bright white text for readability

      '--rounded-box': '1.5rem',
      '--rounded-btn': '1.5rem',

      // Text size adjustment
      '--text-base': '1.1rem',     // Slightly larger base text size
      '--text-lg': '1.3rem',       // Larger text size for headers

      // Bullet point color adjustment
      '--bullet-color': '#808080', // Matches secondary color for subtle bullets
    },
  },
};

export default CONFIG;
