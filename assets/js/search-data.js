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
            },},{id: "talks-conference-on-molecular-modeling-for-energy-and-the-environment",
          title: 'Conference on Molecular Modeling for Energy and the Environment',
          description: "Conference",
          section: "Talks",handler: () => {
              window.location.href = "/talks/20251118-example-post.html";
            },},{id: "talks-test",
          title: 'TEST',
          description: "",
          section: "Talks",},{
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
