import { CMSPage } from "@/lib/cms/types";

export const pages: CMSPage[] = [
  {
    id: "page-about",
    slug: "about",
    title: "About the Department",
    subtitle:
      "Pioneering research and education in computer science since 1965",
    body: {
      html: `<p>The Computer Science Department is one of the premier computer science programs in the world, consistently ranked among the top departments globally. Founded in 1965, the department has been at the forefront of transformative advances in computing, from the development of early internet protocols to the creation of foundational technologies in artificial intelligence, networking, databases, and programming languages.</p>

<h2>Our Mission</h2>
<p>We pursue groundbreaking research that advances the frontiers of computing while educating the next generation of innovators, scholars, and leaders. Our work spans the full breadth of computer science, from theoretical foundations to systems that serve billions of people worldwide.</p>

<h2>By the Numbers</h2>
<ul>
<li><strong>42</strong> tenure-line faculty and 28 teaching faculty</li>
<li><strong>320+</strong> PhD students across all research areas</li>
<li><strong>720+</strong> MS students</li>
<li><strong>850+</strong> undergraduate CS majors</li>
<li><strong>18</strong> research labs and centers</li>
<li><strong>$95M</strong> in annual research funding</li>
</ul>

<h2>Research Areas</h2>
<p>Our faculty and students pursue research across the entire spectrum of computer science:</p>
<ul>
<li><strong>Artificial Intelligence</strong> — machine learning, natural language processing, computer vision, robotics</li>
<li><strong>Systems</strong> — operating systems, distributed systems, networking, security</li>
<li><strong>Theory</strong> — algorithms, complexity theory, cryptography</li>
<li><strong>Human-Computer Interaction</strong> — design, accessibility, social computing</li>
<li><strong>Computational Biology</strong> — genomics, protein engineering, drug discovery</li>
<li><strong>Graphics & Vision</strong> — rendering, 3D reconstruction, generative models</li>
</ul>

<h2>Our Community</h2>
<p>What sets our department apart is not just the quality of our research but the collaborative, supportive community we've built. Our students regularly co-author papers with faculty from other departments and collaborate with researchers at the university's interdisciplinary institutes, including the Institute for Human-Centered AI, the Bio-X program, and the Institute for the Environment.</p>

<p>We are deeply committed to broadening participation in computing. Through programs like CS Bridge, Section Leading, and our Teaching Fellowship initiative, we create pathways for students from all backgrounds to discover and excel in computer science.</p>

<h2>Location</h2>
<p>The department is primarily located in the Computer Science Building and the Integrated Systems Center, situated at the heart of the engineering quad. Our facilities include state-of-the-art research labs, collaborative workspaces, and teaching facilities designed to foster creativity and innovation.</p>`,
    },
    image: {
      url: "/images/cs-building.jpg",
      alt: "The Computer Science Building, a modern sandstone building with palm trees",
      width: 1200,
      height: 630,
    },
  },
  {
    id: "page-home",
    slug: "home",
    title: "Department of Computer Science",
    subtitle: "Advancing the frontiers of computing for humanity",
    body: {
      html: `<p>The Computer Science Department is a world leader in research and education, pioneering advances across artificial intelligence, systems, theory, and interdisciplinary computing. Our community of exceptional scholars, students, and staff works together to solve the most important challenges of our time.</p>`,
    },
    image: {
      url: "/images/campus.jpg",
      alt: "Aerial view of the university campus with modern buildings and surrounding greenery",
      width: 1920,
      height: 600,
    },
  },
];
