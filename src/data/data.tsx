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
import InstagramIcon from '../components/Icon/InstagramIcon';
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
  title: 'Z. Joseph Pollock\'s Interactive Resume',
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
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
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
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/jpoll962',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/jpoll962',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
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
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/jpoll962',
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
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'August 2018 - May 2023',
    location: 'Utah State University | Jon M. Huntsman School of Business',
    title: 'Bachelors of Science in Economics',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2022 - Present',
    location: 'Anthos Capital',
    title: 'Venture Capital Scout',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'August 2018 - Present',
    location: 'Merrill-Cazier Library',
    title: 'Night Supervisor',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'April 2021 - August 2022',
    location: 'Topology Construction, LLC',
    title: 'Co-Founder',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'November 2020 - October 2021',
    location: 'Roof Vets, LLC',
    title: 'Senior Insurance Specialist',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'July 2015 - August 2018',
    location: 'McDonald\'s',
    title: 'Crew Trainer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'May 2015 - July 2015',
    location: 'Bray\'s Orchard',
    title: 'Farm Hand',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to contact me with any inquiries or opportunities, and I\'d love to work out how we can work together!',
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
      type: ContactType.Instagram,
      text: '@jpoll962',
      href: 'https://www.instagram.com/jpoll962/',
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
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/jpoll962/'},
];
