// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "An overview of my research directions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-code",
          title: "code",
          description: "Software I developed and contributed to.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/code/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-talks",
              title: "talks",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/talks/";
              },
            },{id: "dropdown-news",
              title: "news",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/news/";
              },
            },{id: "news-the-new-website-is-online-work-in-progress",
          title: 'The new website is online, work in progress!',
          description: "",
          section: "News",},{id: "news-postdoc-position-in-ml-for-atomistic-simulations",
          title: 'PostDoc position in ML for atomistic simulations',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20251201-postdoc.html";
            },},{id: "news-a-new-publication-out-on-2d-materials",
          title: 'A new publication out on 2D Materials!',
          description: "",
          section: "News",},{id: "news-a-new-publication-out-on-journal-of-catalysis",
          title: 'A new publication out on Journal of Catalysis!',
          description: "",
          section: "News",},{id: "news-welcome-to-kai-zhu-a-visiting-student-from-zhejiang-university",
          title: 'Welcome to Kai Zhu, a visiting student from Zhejiang University!',
          description: "",
          section: "News",},{id: "news-new-release-of-mlcolvar-1-3-0",
          title: 'New release of mlcolvar: 1.3.0.',
          description: "",
          section: "News",},{id: "projects-the-role-of-dynamics-in-catalysis",
          title: 'The role of dynamics in catalysis',
          description: "Combining ML and enhanced sampling to unveil the role of dynamics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cat.html";
            },},{id: "projects-deal",
          title: 'deal',
          description: "Data-efficient active learning for machine learning interatomic potential",
          section: "Projects",handler: () => {
              window.location.href = "/projects/code_deal.html";
            },},{id: "projects-franken",
          title: 'franken',
          description: "Transfer learning with GNNs and random Fourier features",
          section: "Projects",handler: () => {
              window.location.href = "/projects/code_franken.html";
            },},{id: "projects-mlcolvar",
          title: 'mlcolvar',
          description: "Machine learning collective variables for enhanced sampling",
          section: "Projects",handler: () => {
              window.location.href = "/projects/code_mlcolvar.html";
            },},{id: "projects-data-driven-collective-variables",
          title: 'Data-driven collective variables',
          description: "Using machine learning to discover CVs for enhanced sampling",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mlcvs.html";
            },},{id: "projects-machine-learning-potentials",
          title: 'Machine learning potentials',
          description: "Active and transfer learning for rare events",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mlp.html";
            },},{id: "talks-plumed-masterclass-machine-learning-collective-variables-with-pytorch",
          title: 'PLUMED Masterclass: Machine learning collective variables with PyTorch',
          description: "Online lectures and hands-on on machine-learning collective variables with PLUMED",
          section: "Talks",handler: () => {
              window.location.href = "/talks/220328-online.html";
            },},{id: "talks-machine-learning-augmented-sampling-for-the-molecular-sciences",
          title: 'Machine Learning Augmented Sampling for the Molecular Sciences',
          description: "CECAM Workshop on machine learning augmented sampling",
          section: "Talks",handler: () => {
              window.location.href = "/talks/220511-lausanne.html";
            },},{id: "talks-chasing-cvs-using-machine-learning-from-methods-development-to-biophysical-applications",
          title: 'Chasing CVs using Machine Learning: from methods development to biophysical applications',
          description: "CECAM Workshop on machine-learning-based collective variables",
          section: "Talks",handler: () => {
              window.location.href = "/talks/220628-paris.html";
            },},{id: "talks-doctoral-school-machine-learning-for-materials-hard-and-soft",
          title: 'Doctoral School: Machine Learning for Materials Hard and Soft',
          description: "Lectures on free energies and enhanced sampling at the ESI-DCAFM-TACO-VDSP Summer School",
          section: "Talks",handler: () => {
              window.location.href = "/talks/220711-vienna.html";
            },},{id: "talks-machine-learning-and-chemistry-are-we-there-yet",
          title: 'Machine Learning and Chemistry: Are We There Yet?',
          description: "MolSSI workshop on machine learning and chemistry",
          section: "Talks",handler: () => {
              window.location.href = "/talks/230531-college-park.html";
            },},{id: "talks-seminar-biomolecular-amp-pharmaceutical-modelling-group-unige",
          title: 'Seminar @ Biomolecular &amp;amp; Pharmaceutical Modelling Group, UNIGE',
          description: "Seminar at the Biomolecular &amp; Pharmaceutical Modelling Group",
          section: "Talks",handler: () => {
              window.location.href = "/talks/230630-geneva.html";
            },},{id: "talks-enhanced-sampling-methods-with-plumed",
          title: 'Enhanced sampling methods with PLUMED',
          description: "CECAM Flagship School on enhanced sampling with PLUMED",
          section: "Talks",handler: () => {
              window.location.href = "/talks/230705-lausanne.html";
            },},{id: "talks-quantum-on-machine-learning-enhanced-sampling",
          title: 'Quantum² on machine learning enhanced sampling',
          description: "CECAM Workshop on machine learning enhanced sampling",
          section: "Talks",handler: () => {
              window.location.href = "/talks/231129-lausanne.html";
            },},{id: "talks-initiative-for-computational-catalysis-inaugural-workshop",
          title: 'Initiative for Computational Catalysis Inaugural Workshop',
          description: "Inaugural workshop of the Initiative for Computational Catalysis",
          section: "Talks",handler: () => {
              window.location.href = "/talks/240219-new-york.html";
            },},{id: "talks-1st-virapid-workshop",
          title: '1st Virapid workshop',
          description: "Virapid (Vienna Research Platform on Accelerating Photoreaction Discovery) workshop on accelerating photoreaction discovery",
          section: "Talks",handler: () => {
              window.location.href = "/talks/240226-vienna.html";
            },},{id: "talks-ictp-atomistic-simulations-seminar-series",
          title: 'ICTP Atomistic Simulations Seminar Series',
          description: "Atomistic Simulations Seminar Series",
          section: "Talks",handler: () => {
              window.location.href = "/talks/240703-trieste.html";
            },},{id: "talks-seminar-impmc-sorbonne-university",
          title: 'Seminar @ IMPMC, Sorbonne University',
          description: "Seminar at the Institute of Mineralogy, Materials Physics and Cosmochemistry, Sorbonne University",
          section: "Talks",handler: () => {
              window.location.href = "/talks/241114-paris.html";
            },},{id: "talks-combining-ai-and-physical-modeling-for-contemporary-simulations",
          title: 'Combining AI and physical modeling for contemporary simulations',
          description: "CECAM and EPFL AI Workshop",
          section: "Talks",handler: () => {
              window.location.href = "/talks/241211-lausanne.html";
            },},{id: "talks-inferring-kinetics-thermodynamics-and-mechanisms-from-enhanced-sampling-simulations",
          title: 'Inferring Kinetics, Thermodynamics, and Mechanisms from Enhanced Sampling Simulations',
          description: "Symposium at the ACS Spring Meeting",
          section: "Talks",handler: () => {
              window.location.href = "/talks/250322-san-diego.html";
            },},{id: "talks-conference-on-frontiers-in-atomistic-simulations-from-physics-to-chemistry-and-biology",
          title: 'Conference on Frontiers in Atomistic Simulations: from Physics to Chemistry and Biology',
          description: "Conference on Frontiers in Atomistic Simulations",
          section: "Talks",handler: () => {
              window.location.href = "/talks/250908-trieste.html";
            },},{id: "talks-conference-on-molecular-modeling-for-energy-and-the-environment",
          title: 'Conference on Molecular Modeling for Energy and the Environment',
          description: "Conference on Molecular Modeling for Energy and the Environment",
          section: "Talks",handler: () => {
              window.location.href = "/talks/251008-lugano.html";
            },},{id: "talks-molsimeng-2025",
          title: 'MolSimEng 2025',
          description: "Molecular Simulation and Engineering workshop",
          section: "Talks",handler: () => {
              window.location.href = "/talks/251017-milan.html";
            },},{id: "talks-berkeley-total-energy-mini-workshop",
          title: 'Berkeley Total Energy Mini Workshop',
          description: "Total Energy Mini Workshop",
          section: "Talks",handler: () => {
              window.location.href = "/talks/260112-berkeley.html";
            },},{id: "talks-seminar-university-di-pisa",
          title: 'Seminar @ University di Pisa',
          description: "Computer Science Department, University of Pisa",
          section: "Talks",handler: () => {
              window.location.href = "/talks/260212-pisa.html";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%75%69%67%69.%62%6F%6E%61%74%69@%69%69%74.%69%74", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/luigibonati", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/luibonati", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-9118-6239# your ORCID ID", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Luigi-Bonati/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=XPXf728AAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://www.iit.it/it/web/guest/people-profile/-/people/luigi-bonati", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
