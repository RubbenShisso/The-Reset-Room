export type Service = {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  price: number;
  duration: string;
  ageRestriction?: string;
  slug: string;
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    id: 'individual',
    title: 'Individual Counselling',
    shortDescription:
      'A confidential space to explore personal challenges, build resilience and support your emotional wellbeing.',
    longDescription:
      'Counselling for individuals seeking support with emotional wellbeing, identity, boundaries, transitions and life stress. Sessions offer a grounded, compassionate space to slow down and understand what is happening in your life with care.',
    price: 350,
    duration: '60 minutes',
    slug: 'individual-counselling',
    image: '/Individual Counselling.png',
    imageAlt: 'An online individual counselling session',
  },
  {
    id: 'adolescent',
    title: 'Adolescent Counselling',
    shortDescription:
      'Supportive, age-appropriate counselling for adolescents navigating emotional, behavioural and developmental challenges.',
    longDescription:
      'Support for adolescents dealing with overwhelm, relationship stress, self-esteem, school pressures, emotional regulation and life changes. Sessions are collaborative, calm and tailored to the young person’s stage of development.',
    price: 250,
    duration: '60 minutes',
    ageRestriction: 'Ages 16+',
    slug: 'adolescent-counselling',
    image: '/Adolescent Counselling.png',
    imageAlt: 'An online adolescent counselling session',
  },
  {
    id: 'couples',
    title: 'Couples Counselling',
    shortDescription:
      'A supportive, non-judgmental environment for couples wanting to improve communication, navigate conflict and strengthen their connection.',
    longDescription:
      'Counselling for couples looking to improve communication, navigate conflict more constructively, understand relational patterns and reconnect with greater care and clarity.',
    price: 500,
    duration: '60 minutes',
    slug: 'couples-counselling',
    image: '/Couples Counselling.png',
    imageAlt: 'An online couples counselling session',
  },
];
