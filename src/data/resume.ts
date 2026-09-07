import type { Certification, Education, Experience, Project } from '@/types/content';

// Judul empat kolom resume di situs lama; "Graduated" dipakai apa adanya, bukan "Education"
export const resumeGroupTitles = {
  experiences: 'Experiences',
  education: 'Graduated',
  certifications: 'Certifications',
  projects: 'Projects',
};

export const experiences: Experience[] = [
  {
    title: 'MACHINE LEARNING COHORT 2023 BATCH 2',
    organization: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
    period: 'August 2023 - January 2024',
    bullets: [
      'Learn about big data concepts and real-world implementation.',
      'Learn about using machine learning on various types of data using Tensorflow',
      'Create a capstone project that has been deployed with a production environment',
      'Collaborate with teams with specific roles',
    ],
  },
  {
    title: 'MAIN COORDINATOR',
    organization: 'Forum Asisten Universitas AMIKOM Yogyakarta',
    period: 'December 2022 - Now',
    bullets: [
      'Become an intermediary for lab assistants with the study program.',
      'Arrange coordination regarding attendance and assistance schedules.',
      'Mediating and resolving internal problems with practicum assistants.',
      'Validate the presence of practicum assistants.',
    ],
  },
  {
    title: 'LAB ASSISTANT',
    organization: 'Universitas AMIKOM Yogyakarta',
    bullets: [
      'Helping students with difficulties during practical classes.',
      'Assist and accompany lecturers in the teaching and learning process in class.',
      'Helping correct and check practical answers to assignments given by lecturers to students.',
    ],
    courses: [
      {
        name: 'Algoritma & Pemrograman',
        period: 'September 2022 - January 2023',
        description:
          'Basic programming algorithms, such as input output, branching structures, decisions, arrays, and sorting using C++.',
        certificateUrl:
          'https://sertifikat.forumasisten.or.id/api/sertifikat/eyJpdiI6IjFnVHBLcWhMOVFOMXNlVW02cXVWOEE9PSIsInZhbHVlIjoicVFJampFMHlETFdlR25KZDJSNTdEaTUzaERNYkRIQzJOVGk5b0VmSFFVb3pSZXZkL3E3MWVQSDhIK2ZkaVhJZiIsIm1hYyI6IjFkYzQwNTA5YjE1YjJiMjQ0NmZlMDk3ZDdhYTI2YjFiMGI2NmMxYjM1MWNjNDA3NTc4MGRmODVhN2VhZmE1ZDYiLCJ0YWciOiIifQ==',
      },
      {
        name: 'Pemrograman Python',
        period: 'March 2023 - July 2023',
        description:
          'Basic programming algorithms, such as input output, branching structures, decisions, arrays, and sorting using Python. Also, learn data analysis techniques to regression.',
        certificateUrl:
          'https://sertifikat.forumasisten.or.id/api/sertifikat/eyJpdiI6InFNVW5yNlo1YlRBbGlBVXIvOEozcXc9PSIsInZhbHVlIjoiRVdTRmpIN3FsTDE3S3g0ODlwNk11ZERaamQzaFArWGFLSUllT1BjckJzWjk4NEE4SFkwWGdZZkdHbnVoSWZpUiIsIm1hYyI6IjllYjY5NjMzMTA1YjdjYTViNmIyNDRkMGU3MzQ2NjIwOTgyMGJkYjBhMDI5MmIxZDg2NDNmOWZhNTZiMGEyNjQiLCJ0YWciOiIifQ==',
      },
      {
        name: 'Struktur Data',
        period: 'March 2023 - July 2023',
        description:
          'Data structures in the C++ programming language such as arrays, stacks, queues, trees, etc',
        certificateUrl:
          'https://sertifikat.forumasisten.or.id/api/sertifikat/eyJpdiI6Inh5UmhZWjlsc2o1N3V6c1dwSGEyR0E9PSIsInZhbHVlIjoiYUhrMDM1cFk5c3dzRS9DQ1B1SjNiUjlxU2g5aElXOU82UWtONHdPc081T2dLbm9Xa3ZpZE9QaVBOQXNianZYUCIsIm1hYyI6ImYxNDA4ZGMyN2QxNWRmYmNkODU0MDBkYTUwZjYzMjdjNmI0Mzc5ODhhZGYwMDQ4ZThhODFiZThhY2Y4YzNmYWYiLCJ0YWciOiIifQ==',
      },
      {
        name: 'Pemrograman',
        period: 'March 2023 - July 2023',
        description:
          'Basic programming algorithms, such as input output, branching structures, decisions, and array using C#.',
        certificateUrl:
          'https://sertifikat.forumasisten.or.id/api/sertifikat/eyJpdiI6InhmOGhzczZvUW51cld2T1JJSHA3T0E9PSIsInZhbHVlIjoiZ2o0ZHk5Z01hQXREcHR4dUp4RXpQaDZKam1nRWhxSDhObWNVOUtESGdqb1JtNTYrbDBJMklNbE92MUJEa0ZiMyIsIm1hYyI6IjE3YWUzZWFkZmMzNDc1ZmE0YTEyZGE2ZDlkMjkxMWJmNTBlMGViN2FjMGQ0MjhkYzViOWRmNmVmNjg5YmE4ZmQiLCJ0YWciOiIifQ==',
      },
      {
        name: 'Pemrograman Python',
        period: 'September 2023 - Now',
        description:
          'Basic programming algorithms, such as input output, branching structures, decisions, arrays, and sorting using Python.',
      },
      {
        name: 'Web Programming II',
        period: 'September 2023 - Now',
        description:
          'The front end implementation uses HTML CSS and Javascript, and the backend uses native PHP and the Laravel framework on Web development case.',
      },
    ],
  },
  {
    title: 'AMCC CODE (Competition of Developers) Committee As Public Relations',
    period: 'May - August 2022',
    bullets: [
      'Connecting organizations with event related committees.',
      'Seek support from sponsors.',
      'Ensure that the jury and examining committee are present for the pitching.',
    ],
  },
  {
    title: 'AMCC Goes to School (AGS)',
    period: 'January - March 2022',
    // Bullet-nya identik dengan entri AMCC CODE di HTML lama; dibiarkan atas keputusan user, yang akan menulis ulang isinya
    bullets: [
      'Connecting organizations with event related committees.',
      'Seek support from sponsors.',
      'Ensure that the jury and examining committee are present for the pitching.',
    ],
  },
];

export const education: Education[] = [
  { institution: 'SMPN 1 Kertosono', period: '2015 - 2018' },
  { institution: 'SMAN 1 Kertosono', major: 'MIPA', period: '2018 - 2021' },
  { institution: 'Universitas AMIKOM Yogyakarta', major: 'S1-Informatika', period: '2021 - Now' },
];

export const certifications: Certification[] = [
  {
    name: 'Tensorflow Developer Certificate',
    date: '03 March 2024',
    issuer: 'Tensorflow',
    url: 'https://www.credential.net/fb131257-648c-4162-8b48-22c7873a8c9f',
  },
  {
    name: 'Associate Data Science',
    date: '27 May 2024',
    issuer: 'Kominfo Digitalent (ID: 19381241110-8)',
    url: 'https://digitalent.kominfo.go.id/cek-sertifikat',
  },
  {
    name: 'Machine Learning Terapan',
    date: '05 March 2024',
    issuer: 'Dicoding',
    url: 'https://www.dicoding.com/certificates/53XEYVM0VPRN',
  },
  {
    name: 'Belajar Analisis Data Dengan Python',
    date: '19 January 2024',
    issuer: 'Dicoding',
    url: 'https://www.dicoding.com/certificates/98XW25EMJPM3',
  },
  {
    name: 'Crash Course on Python',
    date: '26 August 2023',
    issuer: 'Coursera & Google',
    url: 'https://www.coursera.org/account/accomplishments/certificate/4DB2Q94UVAPV',
  },
  {
    name: 'Using Python to Interact with the Operating System',
    date: '28 August 2023',
    issuer: 'Coursera & Google',
    url: 'https://www.coursera.org/account/accomplishments/certificate/JEVE2GBBT3XF',
  },
];

export const projects: Project[] = [
  {
    title: 'Fine-Tuning GPT-2 Model For ABC Notation Generation',
    description:
      "A project that fine-tunes the pretrained GPT-2 model with Kaggle's ABC notation dataset to perform ABC notation generation. The output of the project is a package in PIP that can be used for free.",
  },
  {
    title: 'Travel Destination Recommender By MBTI Type',
    description:
      "A project to recommend tourist destinations for tourists in Yogyakarta based on the user's MBTI type. Users can enter text containing stories of their personal favorite travel ideas and sentiment tests are carried out to determine their MBTI type, then recommend them to the appropriate tourist destinations.",
  },
  {
    title: 'Food Recipe Recommender By Diet Type',
    description:
      'A project to recommend recipes for users on a diet. Users can input nutritional data and recipe keywords and then recommended with Content-Based. The project has been deployed in production environment.',
    url: 'http://kesrupu.sga.dom.my.id/',
  },
  {
    title: 'Dashboard Bicycle Rent Analytic',
    description:
      'A dashboard of the results of the analysis on bicycle rental conducted on the bicycle rental dataset in 2011-2012. The analysis was done on several factors such as hour range, day type, and others. It has been deployed using Streamlit.',
    url: 'https://bike-analysis.streamlit.app/',
  },
];
