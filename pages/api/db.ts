const db = {
  personalDetails: {
    name: 'Noel Manabat',
    about:
      'Noel is a results-oriented software engineer with 8 years of experience building smart websites. Worked on different kinds of projects handling everything from product ideation to development, maintenance and ultimately client acquisition. Meaningful and efficient communication is one of his highlighting skills and he considers it one of the most important qualifications of a remote engineer.',
    work: {
      company: 'Solveit',
      designation: 'Senior Frontend Engineer',
      logo: '/images/companies/solveit.png'
    },
    logo: '/images/logo2.png',
    resume: 'https://drive.google.com/file/d/1_zccAIr40nT_T36Am5WC2Xk6HtM_GgGY/view?usp=sharing',
    profile_img: '/images/me.png',
    calendyUrl: 'https://calendly.com/noel-manabat/30min',
    socialMedia: [
      {
        link: 'mailto:noel2manabat@gmail.com',
        image_file: '/images/icons/mail.svg',
        alt_text: 'Email'
      },
      {
        link: 'https://www.linkedin.com/in/noel-manabat-mananoel/',
        image_file: '/images/icons/linkedin.svg',
        alt_text: 'LinkedIn'
      },
      {
        link: 'https://github.com/mananoel',
        image_file: '/images/icons/github.svg',
        alt_text: 'Github'
      }
    ]
  },
  projectDetails: [
    {
      slug: 'getautumn',
      tagline:
        'Autumn analyzes existing data sources in your workplace like calendars, chat messages, and email to give you insights on how your team is feeling, and what to do about it, without sacrificing privacy. Backed by expert research in Pyschology and Artificial Intelligence from the University of Toronto, Cambridge, and Stanford.',
      description:
        'Autumn integrates seamlessly with your existing tools, like Slack, Calendar, and Email to passively measure performance and well-being trends across your teams. Empower your people leaders with expert-curated resources and recommendations automatically tailored to the needs of their teams. Save time and money on manager trainings.',
      img: '/images/projects/autumn.png',
      name: 'Autumn',
      tags: ['Next.js', 'Firebase', 'TypeScript', 'Node.js'],
      github: 'https://github.com/mananoel',
      category: ['web', 'app'],
      url: 'https://www.getautumn.com',
      featured: false
    },
    {
      slug: 'badi',
      img: '/images/projects/badi.PNG',
      name: 'Badi',
      tags: ['Tailwind CSS', 'ReactJS', 'MySQL'],
      category: ['web'],
      url: 'https://badi.com/',
      github: 'https://github.com/mananoel',
      featured: false,
      description:
        'We shift the traditional and outdated way of renting to a more human, modern and disruptive approach by satisfying everyone involved in the process thanks to the power of AI, Data and UX. Since launch, Badi has successfully matched more than 6M people around the world and has reached a milestone of 600,000 rental listings. Backed by $46 million from US and international investors including Spark Capital, Goodwater Capital and Mangrove Capital Partners,  Badi is one of the fastest-growing Proptech startups in Spain.',
      tagline:
        'A new generation rental marketplace by offering a more honest, transparent and personalised rental experience to our worldwide community.'
    },
    {
      slug: 'collective health',
      tagline:
        'Collective Health delivers a connected healthcare experience for companies across the nation who want the best for their employees.',
      img: '/images/projects/collective-health.png',
      name: 'Collective Health',
      url: 'https://collectivehealth.com/',
      github: 'https://github.com/mananoel',
      tags: ['ReactJS', 'TypeScript', 'MongoDB'],
      category: ['web'],
      featured: true,
      description:
        'While medical technology continues to take giant steps forward, somehow the systems driving health coverage are still stuck in the past. The experience we have today is confusing. It’s painful. And we all deserve better. Collective Health was founded on the belief that better is possible. '
    },
    {
      slug: 'thirty-thirty Coffee',
      tagline:
        'An E-commerce platform via which they can easily sell coffee products for all coffee lovers at their customer’s doorstep',
      description:
        'The client was looking for a system where he can sell all the coffee products with the following three aspects i.e. technical, presentation, and realistic. The main challenge here with us is to make an E-commerce website where clients can take orders from the customers take the payment from the selected gateway choice and deliver the correct product to the correct customer.',
      img: '/images/projects/thirty-thirty coffee.PNG',
      name: 'Thirty-Thirty Coffee',
      url: 'https://thirty-thirtycoffee.com/',
      tags: ['ReactJS', 'Laravel', 'MySQL'],
      github: 'https://github.com/mananoel',
      category: ['web'],
      featured: false
    },
    {
      slug: 'boards&beyond',
      tagline:
        'Boards & Beyond supports medical students with on-demand video libraries and question banks designed to build a solid foundation of understanding that goes beyond memorization.',
      img: '/images/projects/Boards&Beyond.PNG',
      name: 'Boards&Beyond',
      url: 'https://www.boardsbeyond.com',
      tags: ['HTML', 'CSS', 'JavaScript', 'Angular'],
      github: 'https://github.com/mananoel',
      category: ['web'],
      featured: false,
      description:
        'Boards & Beyond Content is designed and taught by Dr. Jason Ryan, an award-winning educator with years of experience teaching students. Dr. Ryan has created videos filled with insights that will maximize your understanding. The content is clear, concise, and easy to understand. The videos are updated throughout the year in order to cover the newest drugs, mechanisms, and science.'
    },
    {
      slug: 'dynamo fitness',
      tagline:
        'Ranked as one of the best e-commerce platforms for purchasing Gym equipment in Australia this platform has changed the game completely. One can get equipment for Strength, Cardio, Cross Training, Boxing, etc at a single place.',
      description:
        'The major challenges while creating the site were the management of data and the design of the website. The design has to be created in such a way that all the products are visible but, they should not make the website look overcrowded. Also, hassle-free registrations and ordering of products had to be integrated to optimize the shopping experience for users.',
      img: '/images/projects/Dynamo Fitness.PNG',
      name: 'Dynamo Fitness',
      tags: ['HTML', 'CSS', 'Laravel', 'Firebase'],
      category: ['web'],
      github: 'https://github.com/mananoel',
      url: 'https://dynamofitness.com.au/',
      featured: false
    },
    {
      slug: 'safa',
      tagline:
        'Safa Automotive is a Dubai based 3M auto care center which provides tinting and car protection services. The company provides a range of services for vehicles, homes, as well as corporations.',
      description:
        'The objective behind creating the site was to boost the sales, so the website needed to be appealing as well as informative. The design has to be made in such a way that people can easily understand the purpose and the features of the company. So, the major challenge was to create a website that is full of content, but still has fast processing, so customers can learn about all the services without facing any kind of hassles.',
      img: '/images/projects/safa.PNG',
      name: 'Safa',
      url: 'http://www.safa.ae/',
      tags: ['Laravel', 'HTML', 'CSS', 'MongoDB'],
      category: ['web'],
      github: 'https://github.com/mananoel',
      featured: true
    },
    {
      slug: 'sheet plastics',
      tagline:
        'Sheet Plastics, one of the largest e-retailers of plastic sheets having an extensive presence across the UK. Using this platform, people can buy plastic sheets of different types, size, and colors with ease.',
      description:
        'The website design should be appealing and the interface should be simple” were the first words of the client, when asked about the requirements. Other requirements included, a price calculator to provide instant price quotes to customers, a responsive website that can be easily accessed through any device, and a CMS through which the available products can be easily managed.',
      img: '/images/projects/sheet plastics.PNG',
      name: 'Sheet Plastics',
      url: 'https://www.sheetplastics.co.uk/',
      github: 'https://github.com/mananoel',
      tags: ['ReactJS', 'NodeJS', 'ExpressJS', 'MySQL', 'TypeScript'],
      category: ['web'],
      featured: true
    },
    {
      slug: 'subbers',
      img: '/images/projects/subbers.PNG',
      name: 'Subbers',
      url: 'https://subbers.dk/',
      github: 'https://github.com/mananoel',
      tags: ['ReactJS', 'CSS', 'TypeScript', 'MySQL'],
      category: ['web'],
      featured: true,
      tagline:
        'Subbers is a platform where job seekers can browse for jobs based on daily wages, listed and posted by multiple companies from different industries.',
      description:
        ' The main purpose of this platform is to provide a daily wages job to the job seekers where their performance will be counted as Subber points. After the completion of each job, they will receive subbers points based on the duration of their shift, on the other hand, the company will shortlist multiple candidates based on their experience and other details like education, personal details, etc. Once the job is done, the company can easily pay them through the system.'
    },
    {
      slug: 'proflowers',
      tagline:
        'Proflowers is a leader in online gift-giving and flower delivery, providing customers around the world with a marketplace of beautiful bouquets, long-lasting plants, and gourmet gift baskets. Shop our collections to find the right gift for any occasion, and give them something unforgettable today. ',
      img: '/images/projects/proflowers.png',
      name: 'Proflowers',
      tags: ['Next.js', 'Tailwind CSS', 'Node.js', 'TypeScript'],
      url: 'https://www.proflowers.com/',
      category: ['web'],
      featured: false,
      description:
        "Flowers and plants are always a great gift for those you hold dear, or even yourself. Whether you're shopping for birthday flowers for your mom or you want to surprise your husband at the office with a lush bonsai plant, we've got you covered. Browse indoor plants perfect for the hard-working college student, bountiful flower arrangements bursting with magnificent blooms, and designer floral arrangements you can't find elsewhere. No matter the occasion, online flower deliveries will make your day shine!"
    }
  ],
  companyDetails: [
    {
      name: 'Solveit',
      logo_url: '/images/companies/solveit.png',
      featured: true,
      position: 'Senior Frontend Engineer',
      startDate: 'Oct 2021',
      responsibilities: [
        'Worked with different clients and customers from Europe and United States and provided them best web solutions.',
        'Translated Figma designs into responsive pixel perfect UI using React, React Storybook, TypeScript, Tailwind CSS and MUI.',
        'Structured the store and utilized RTK Query for APIs in Reduxjs toolkit for a better performance and code optimization.',
        'Increased test coverage of the application by writing unit and e2e tests using Jest and Cypress.',
        'Participated in building customer-facing web applications and MVPs with Vue.js, Express.js, PostgreSQL and Node.js.',
        'Led a team of 3 engineers as a frontend lead to ship new features according to diverse clients requests',
        'Worked as a cross-functional developer following the agile principle and actively participated in important meetings.'
      ],
      order: 1
    },
    {
      name: 'LifeOmic',
      position: 'Software Engineer',
      featured: true,
      logo_url: '/images/companies/lifeomic.png',
      startDate: 'Oct 2019',
      endDate: 'Sep 2021',
      responsibilities: [
        'Turned the class-based components into reusable functional components by utilizing and defining custom hooks across the project.',
        'Built the shared packages using React which could be highly reused across repositories to make the designs consistent and match the design guidelines and ADA compliance',
        'Maintained complex technology infrastructure and collaborated with the product team to implement new features and strategically plan for future products.',
        'Worked with React and converting existing JavaScript based Redux state to TypeScript based Redux Toolkit.',
        'Contributed to the internal Web dev team by authoring two NPM packages to implement custom Google Analytics and Facebook tags within our Next.js applications.',
        'Performed code review and had pair programming session to be on the same page.'
      ],
      order: 2
    },
    {
      name: 'Finastra',
      position: 'Frontend Enginner',
      logo_url: '/images/companies/finastra.png',
      featured: true,
      startDate: 'Jan 2017',
      endDate: 'Aug 2019',
      responsibilities: [
        'Involved in PI discussion and planning',
        'Assigned in handling application enhancements, defects, and bugs.',
        'Took part in updating the website using React, Redux and MUI, resulting in an 18% increase number of monthly users.',
        'Ushered in and implemented a test strategy in Jest and React Testing Library, resulting in test coverage of 97% of all client code.',
        'Refactored existing 7 React codebase with better quality of code by adopting React hooks, callbacks.',
        'Performed code review and had pair programming session to be on the same page.',
        'Enhanced the previous banking management system sections using ReactJS, React native & redux for customer and financial management.',
        'Resolved defects/bugs during QA testing, pre-production, production, and post-release patches.'
      ],
      order: 3
    },
    {
      name: 'Upwork',
      position: 'Web Developer',
      logo_url: '/images/companies/upwork.png',
      featured: true,
      startDate: 'Oct 2014',
      endDate: 'Nov 2016',
      responsibilities: [
        'Discussed project progress with customers, collected feedback on different stages and directly addressed concerns.',
        'Worked with customers to build a plugin architecture for their existing software to enable them to ramp up the number of developers working on their code.',
        'Consulted with clients on the most appropriate design options based on their major marketing goals.',
        'Maintained PHP/CodeIgniter based legacy code base and rebuilt using MERN stack.',
        'Participated in several big projects for different customers and companies using jQuery and Bootstrap.',
        'Studied software programming principles like DRY(Don’t Repeat Yourself), KISS (Keep it Simple, Stupid).',
        'Refactored existing 7 React codebase with better quality of code by adopting React hooks, callbacks',
        'Reduced code duplication by using front end design pattern and style guide to keep the code DRY.'
      ],
      order: 4
    }
  ]
};

export default db;
