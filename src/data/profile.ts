import jupyterIcon from '@/assets/icons/jupyter.png';
import mysqlIcon from '@/assets/icons/mysql.svg';
import pythonIcon from '@/assets/icons/python.svg';
import tensorflowIcon from '@/assets/icons/tensorflow.png';
import type { Paragraph, SocialLink, SocialPlatform, TechIconItem } from '@/types/content';

export const profile = {
  fullName: 'Muhammad Faishal Ali Dhiaulhaq',
  wordmark: 'Muhammad Faishal Ali Dhiaulhaq',
  tagline: 'Data Enthusiast & Web Developer',
};

export const socialUrls: Record<SocialPlatform, string> = {
  LinkedIn: 'https://www.linkedin.com/in/muhammad-faishal-51006423a',
  GitHub: 'https://github.com/ishala',
  Instagram: 'https://www.instagram.com/ullhaq_ali',
  WhatsApp: 'https://wa.me/6281252283473',
};

// Urutan tampil di navbar dan footer
export const socialLinks: SocialLink[] = [
  { platform: 'LinkedIn', url: socialUrls.LinkedIn },
  { platform: 'GitHub', url: socialUrls.GitHub },
  { platform: 'Instagram', url: socialUrls.Instagram },
  { platform: 'WhatsApp', url: socialUrls.WhatsApp },
];

export const navSections = [
  { id: 'page1', label: 'Introduction' },
  { id: 'page2', label: 'About Me' },
  { id: 'page3', label: 'Resume' },
] as const;

export const hero = {
  label: 'Please, take a seat!',
  leadIn: 'My Name Is',
  name: 'Muhammad Faishal Ali Dhiaulhaq',
  closing: 'Thanks for the attention!',
};

export const about = {
  label: 'About Me',
  titleAccent: ['Data Analytics', 'Machine Learning'],
  titleNeutral: 'Enthusiast',
  portraitAlt: 'Portrait of Muhammad Faishal Ali Dhiaulhaq',
  techLabel: 'Commonly used',
};

export const aboutParagraphs: Paragraph[] = [
  {
    segments: [
      { text: 'I have an interest in ' },
      { text: 'processing data', emphasis: true },
      { text: ' and ' },
      { text: 'managing a database', emphasis: true },
      { text: ' for the purposes of a ' },
      { text: 'web application', emphasis: true },
      {
        text: '. As time goes by, all forms of information dissemination are now online-based. There is a lot of data scattered around and an analysis needs to be carried out so that it can be useful for making decisions for an agency or company. And using websites that are widely used is also useful to make it easier for users to process data or information every day. Therefore, I am interested in this field with the aim of occupying a position as a "manager" of those objectives.',
      },
    ],
  },
  {
    segments: [
      {
        text: 'Since the beginning, I have always been fascinated by the ability of machine learning to solve complex problems. This fascination led me to learn ',
      },
      { text: 'Python', emphasis: true },
      { text: ', a popular programming language in this field. I started with basic libraries like ' },
      { text: 'NumPy', emphasis: true },
      { text: ' and ' },
      { text: 'Pandas', emphasis: true },
      {
        text: ' to understand data manipulation and statistical analysis. As my skills grew, I started exploring ',
      },
      { text: 'Scikit-learn', emphasis: true },
      {
        text: ', a library that provides various ready-made machine learning algorithms. I experimented with classification, regression, and clustering, honing my ability to build models that could predict and classify data. The desire to learn more led me to ',
      },
      { text: 'TensorFlow', emphasis: true },
      { text: ', a framework that enables the construction of complex ' },
      { text: 'artificial neural networks', emphasis: true },
      {
        text: '. I was fascinated by its flexibility and ability to solve a wide range of tasks, from image recognition to natural language processing. I still have a long way to go in the world of machine learning, but my enthusiasm and dedication continue to burn. I believe with determination and hard work, I can achieve my goal of becoming a machine learning expert who can make a real contribution to the world.',
      },
    ],
  },
];

export const techIcons: TechIconItem[] = [
  { label: 'Python', src: pythonIcon },
  { label: 'Jupyter', src: jupyterIcon },
  { label: 'Tensorflow', src: tensorflowIcon },
  { label: 'MySQL', src: mysqlIcon },
];
