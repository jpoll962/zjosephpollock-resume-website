import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Z. Joseph Pollock | Interactive Resume',
  description: "Welcome to Z. Joseph Pollock's Interactive Resume for an extensive view into his experience!",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Z. Joseph Pollock`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm an aspiring <strong className="text-stone-100">venture capitalist</strong>, currently working
        at <strong className="text-stone-100">Anthos Capital</strong> helping connect start-up businesses in the tech. industry
        with financial resources.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me <strong className="text-stone-100">strength training</strong> in the gym,
        plucking my <strong className="text-stone-100">ukulele</strong>, or day-dreaming about the{' '}
        <strong className="text-stone-100">depths of the ocean</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ( 
  <>
    <p>
      I am a computer nerd with an entrepreneurial spirit, a knack for cyber security, and a drive toward investment management.
      Born in a small town in Kentucky, I moved to Utah when I was 18 to begin my higher education at Utah State University where I completed
      a dual Bachelors of Science in Computer Engineering and Economics.
    </p>
    <p>
      Outside of work, I am an avid motorcyclist, hardware developer, and software hobbyist. I discovered my passion for investing during my
      undergraduate where I became the lead stock investor in my Investment course. I dream of researching the bleeding edge of technology
      as I introduce start up tech companies with financial intermediaries.
    </p>
  </>
  ),
  aboutItems: [
    {label: 'Location', text: 'Logan, Utah, USA', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American / Irish / French', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Ukulele, Freemasonry', Icon: SparklesIcon},
    {label: 'Study', text: 'Utah State Univesity', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Anthos Capital, Merrill-Cazier Library', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'German',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Computer Programming',
    skills: [
      {
        name: 'C/C++',
        level: 9,
      },
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'AI/Machine Learning',
        level: 5,
      },
    ],
  },
  {
    name: 'Hardware Development',
    skills: [
      {
        name: 'Aduino',
        level: 9,
      },
      {
        name: 'VHDL',
        level: 8,
      },
      {
        name: 'Verilog',
        level: 7,
      },
      
    ],
  },
  {
    name: 'Venture Capital',
    skills: [
      {
        name: 'Portfolio Management',
        level: 8,
      },
      {
        name: 'Investment Strategies',
        level: 7,
      },
      {
        name: 'Deal Sourcing',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'LED Cube',
    description: 'An LED cube project that showcases innovative design and programming skills to create a visually stunning and interactive 3D display.',
    url: 'https://github.com/jpoll962',
    image: porfolioImage1,
  },
  {
    title: 'Adversarial Training',
    description: 'An Adversarial Training project that leverages cutting-edge machine learning techniques to improve the robustness and security of AI systems.',
    url: 'https://github.com/jpoll962',
    image: porfolioImage2,
  },
  {
    title: 'BookTech RFID Scanner',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/jpoll962',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/jpoll962',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/jpoll962',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/jpoll962',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/jpoll962',
    image: porfolioImage7,
  },
  {
    title: 'InMoov Hand',
    description: 'This project involves the development of a 3D printed forearm and hand utilizing the "open-source 3D printed life-size robot" known as InMoov, created by Gael Langevin. The hardware programming, implemented in C++, enables precise movement control of the hand. This venture combines hardware programming expertise with innovative 3D printing technology, offering a unique opportunity to explore advancements in robotics and prosthetics.',
    url: 'https://github.com/jpoll962/InMoovHand',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/jpoll962',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/jpoll962',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/jpoll962',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2018 - May 2023',
    location: 'Utah State University | College of Engineering',
    title: 'Bachelors of Science in Computer Engineering',
    content: (
      <ul>
        <li>Minor: Mathematics</li>
        <li>Dean's List</li>
      </ul>
    ),
  },
  {
    date: 'August 2018 - May 2023',
    location: 'Utah State University | Jon M. Huntsman School of Business',
    title: 'Bachelors of Science in Economics',
    content: (
      <ul>
        <li>Investment Banking Club</li>
        <li>Finance & Economics Club</li>
        <li>Koch Scholar's Program</li>
      </ul>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2022 - Present',
    location: 'Anthos Capital',
    title: 'Venture Capital Scout',
    content: (
      <ul>
        <li> Analyze over 300 prospective investment opportunities with an emphasis in start-ups in the technology industry </li>
        <li> Connect with over 600 members in discussing and providing feedback to potential Venture Clients </li>
      </ul>
    ),
  },
  {
    date: 'August 2018 - Present',
    location: 'Merrill-Cazier Library',
    title: 'Night Supervisor',
    content: (
      <ul>
        <li> Hired, trained, and managed over a dozen student workers while acting as primary staff member during evening hours </li>
        <li> Assisted clients with library research services, and additional needs </li>
        <li> Implemented new safety protocol with university police </li>
      </ul>
    ),
  },
  {
    date: 'April 2021 - August 2022',
    location: 'Topology Construction, LLC',
    title: 'Co-Founder',
    content: (
      <ul>
        <li> Developed a general contracting company specializing in residential projects, which produced a lucrative profit within the first 30 days </li>
        <li> Led all aspects of business operations, including sales/marketing, project management, budgeting, and investor opportunities until the business sold </li>
      </ul>
    ),
  },
  {
    date: 'November 2020 - October 2021',
    location: 'Roof Vets, LLC',
    title: 'Senior Insurance Specialist',
    content: (
      <ul>
        <li> Estimated Replacement Cost Value of over 200 properties averaging in value of $80,000 </li>
        <li> Communicated with insurance companies to negotiate coverage of replacement for property damages </li>
      </ul>
    ),
  },
  {
    date: 'July 2015 - August 2018',
    location: 'McDonald\'s',
    title: 'Crew Trainer',
    content: (
      <ul>
        <li> Trained incoming employees on policies and procedures for cooking, uniform care, and financial services </li>
        <li> Evaluated client satisfaction through surveys, administering new methods, and increasing client satisfaction such as streamlining the error resolution process by prioritizing client grievances over current orders </li>
        <li> Improved stores ranking from 8th to 2nd out of 13 stores, after 2 months in role </li>
      </ul>
    ),
  },
  {
    date: 'May 2015 - July 2015',
    location: 'Bray\'s Orchard',
    title: 'Farm Hand',
    content: (
      <ul>
        <li> Planted Tobacco along a multi-acre farm which profitted over $1,000 per acre upon harvest </li>
        <li> Thinned and picked Peaches to be sold at the local Peach stand </li>
      </ul>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to contact me with any projects, career prospects, or other opportunities!',
  items: [
    {
      type: ContactType.Email,
      text: 'z.joseph.pollock@gmail.com',
      href: 'mailto:z.joseph.pollock@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Logan, UT, USA',
      href: 'https://goo.gl/maps/xCthEk3jiaueYDBL7',
    },
    {
      type: ContactType.Github,
      text: 'jpoll962',
      href: 'https://github.com/jpoll962',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/jpoll962'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/z-joseph/'},
];
