(function () {
  const pages = [
    {
      title: "Home",
      url: "index.html",
      keywords: "home unique evolution software development custom solutions web mobile cloud devops",
      description: "Unique Evolution - Software development company delivering custom solutions"
    },
    {
      title: "About Us",
      url: "about.html",
      keywords: "about team experience mission expertise software development e-commerce accounting ai machine learning erp analytics",
      description: "Learn about our team, mission, and 25+ years of experience"
    },
    {
      title: "Services",
      url: "service.html",
      keywords: "services web development mobile apps custom software ui ux design cloud solutions devops",
      description: "Our services including web development, mobile apps, UI/UX design, and cloud solutions"
    },
    {
      title: "Contact",
      url: "contact.html",
      keywords: "contact email phone address get in touch sales quote enquiry",
      description: "Get in touch with us for your project enquiries"
    },
    {
      title: "Projects",
      url: "project.html",
      keywords: "projects portfolio work case studies completed",
      description: "View our completed projects and portfolio"
    },
    {
      title: "Blog",
      url: "blog.html",
      keywords: "blog articles news updates insights technology",
      description: "Read our latest articles and technology insights"
    },
    {
      title: "FAQ",
      url: "faq.html",
      keywords: "faq frequently asked questions help support",
      description: "Frequently asked questions about our services"
    },
    {
      title: "Team",
      url: "team.html",
      keywords: "team members staff developers designers engineers",
      description: "Meet our talented team of developers and designers"
    },
    {
      title: "Custom Software Solutions",
      url: "service-single.html",
      keywords: "custom software enterprise applications tailored solutions bespoke development",
      description: "Tailored software solutions designed specifically for your business needs"
    },
    {
      title: "UI/UX Design",
      url: "service.html",
      keywords: "ui ux design user interface user experience wireframe prototype branding",
      description: "User-centered design creating intuitive and engaging digital experiences"
    },
    {
      title: "Web & Mobile Applications",
      url: "service.html",
      keywords: "web application mobile app ios android react native responsive",
      description: "Full-stack web and mobile application development"
    },
    {
      title: "Cloud Solutions & DevOps",
      url: "service.html",
      keywords: "cloud aws azure devops ci cd deployment infrastructure hosting",
      description: "Scalable cloud infrastructure and DevOps practices"
    },
    {
      title: "E-Commerce & Marketplace",
      url: "service.html",
      keywords: "ecommerce e-commerce marketplace online shop store shopping cart payment",
      description: "E-Commerce and marketplace platform development"
    },
    {
      title: "AI & Machine Learning",
      url: "service.html",
      keywords: "ai artificial intelligence machine learning data science automation",
      description: "AI and machine learning solutions for business automation"
    }
  ];

  const input = document.getElementById("siteSearchInput");
  const resultsContainer = document.getElementById("searchResults");

  if (!input || !resultsContainer) return;

  input.addEventListener("input", function () {
    const query = this.value.trim().toLowerCase();

    if (query.length < 2) {
      resultsContainer.innerHTML = "";
      resultsContainer.style.display = "none";
      return;
    }

    const matches = pages.filter(function (page) {
      return (
        page.title.toLowerCase().includes(query) ||
        page.keywords.toLowerCase().includes(query) ||
        page.description.toLowerCase().includes(query)
      );
    });

    if (matches.length === 0) {
      resultsContainer.innerHTML =
        '<div class="search-result-item no-results">No results found</div>';
      resultsContainer.style.display = "block";
      return;
    }

    resultsContainer.innerHTML = matches
      .map(function (page) {
        return (
          '<a href="' + page.url + '" class="search-result-item">' +
          '<strong>' + page.title + '</strong>' +
          '<span>' + page.description + '</span>' +
          '</a>'
        );
      })
      .join("");
    resultsContainer.style.display = "block";
  });

  // Close results when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".header-search-form")) {
      resultsContainer.style.display = "none";
    }
  });

  // Handle Enter key - go to first result
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      var firstLink = resultsContainer.querySelector("a.search-result-item");
      if (firstLink) {
        window.location.href = firstLink.getAttribute("href");
      }
    }
  });
})();
