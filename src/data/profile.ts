import portrait from '@/assets/aku.jpg';
import jupyterIcon from '@/assets/icons/jupyter.png';
import mysqlIcon from '@/assets/icons/mysql.svg';
import pythonIcon from '@/assets/icons/python.svg';
import tensorflowIcon from '@/assets/icons/tensorflow.png';
import type {
  Paragraph,
  SocialLink,
  SocialPlatform,
  TechIconItem,
  TextSegment,
} from '@/types/content';

export const profile = {
  fullName: 'Muhammad Faishal Ali Dhiaulhaq',
};

export const socialUrls: Record<SocialPlatform, string> = {
  LinkedIn: 'https://www.linkedin.com/in/muhammad-faishal-51006423a',
  GitHub: 'https://github.com/ishala',
  Instagram: 'https://www.instagram.com/ullhaq_ali',
  WhatsApp: 'https://wa.me/6281252283473',
};

// Urutan tampil di navbar dan footer mengikuti urutan kunci socialUrls
export const socialLinks: SocialLink[] = (Object.keys(socialUrls) as SocialPlatform[]).map(
  (platform) => ({ platform, url: socialUrls[platform] }),
);

export const sections = {
  introduction: { id: 'page1', label: 'Introduction' },
  about: { id: 'page2', label: 'About Me' },
  resume: { id: 'page3', label: 'Resume' },
} as const;

export const navSections = [sections.introduction, sections.about, sections.resume];

export const hero = {
  label: 'Please, take a seat!',
  leadIn: 'My Name Is',
  closing: 'Thanks for the attention!',
};

export const about = {
  portraitSrc: portrait,
  portraitAlt: 'Portrait of Muhammad Faishal Ali Dhiaulhaq',
  // Ukuran intrinsik berkas, dipakai agar browser bisa memesan ruang sebelum gambar termuat
  portraitWidth: 958,
  portraitHeight: 1600,
  techLabel: 'Commonly used',
};

// emphasis menandai frasa yang diwarnai aksen pada judul About
export const aboutTitle: TextSegment[] = [
  { text: 'Data Analytics', emphasis: true },
  { text: ' and ' },
  { text: 'Machine Learning', emphasis: true },
  { text: ' Enthusiast' },
];

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

// width/height adalah ukuran intrinsik tiap berkas, bukan ukuran tampilnya
export const techIcons: TechIconItem[] = [
  { label: 'Python', src: pythonIcon, width: 32, height: 32 },
  { label: 'Jupyter', src: jupyterIcon, width: 1200, height: 1391 },
  { label: 'Tensorflow', src: tensorflowIcon, width: 700, height: 400 },
  { label: 'MySQL', src: mysqlIcon, width: 128, height: 128 },
];
