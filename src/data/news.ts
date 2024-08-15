import { CMSNewsArticle } from "@/lib/cms/types";

export const newsArticles: CMSNewsArticle[] = [
  {
    id: "news-001",
    slug: "stanford-cs-researchers-breakthrough-protein-folding",
    title:
      "Stanford CS Researchers Achieve Breakthrough in Real-Time Protein Folding Prediction",
    summary:
      "A team led by Professor Ananya Desai has developed a novel transformer architecture that predicts protein structures in under 10 seconds, a 100x speedup over existing methods.",
    body: {
      html: `<p>In a paper published today in Nature Methods, a team from Stanford's Computer Science and Structural Biology departments has unveiled ProteinFormer, a specialized transformer model that achieves state-of-the-art accuracy in protein structure prediction while running fast enough for interactive use.</p>
<p>"The key insight was rethinking the attention mechanism to exploit the physical constraints of protein folding," said Professor Desai, who led the five-year research effort. "We don't need to attend to every possible residue pair — physics tells us which interactions matter."</p>
<p>The model was trained on a curated dataset of over 2 million experimentally determined structures and achieves a median GDT-TS score of 92.4 on the CASP16 benchmark, surpassing AlphaFold 3 while using an order of magnitude less compute at inference time.</p>
<p>The team has released ProteinFormer as open-source software, along with pre-trained weights and an interactive web interface that allows biologists to submit sequences and receive structural predictions in real time.</p>`,
    },
    image: {
      url: "/images/protein-folding.jpg",
      alt: "3D visualization of a protein structure rendered in ribbon diagram with blue and green helices",
      width: 1200,
      height: 630,
    },
    author: "Dr. Rachel Kim",
    authorRole: "Science Communications Officer",
    category: "research",
    publishedAt: "2026-02-25T06:00:00Z",
    featured: true,
  },
  {
    id: "news-002",
    slug: "professor-martinez-elected-national-academy",
    title:
      "Professor Luis Martinez Elected to the National Academy of Engineering",
    summary:
      "The distributed systems researcher is recognized for pioneering contributions to consensus algorithms and fault-tolerant distributed databases.",
    body: {
      html: `<p>Professor Luis Martinez, the Fletcher Jones Professor of Computer Science, has been elected to the National Academy of Engineering (NAE), one of the highest professional distinctions for engineers.</p>
<p>Martinez was cited for "fundamental contributions to the theory and practice of distributed consensus, enabling the reliable distributed systems that underpin modern cloud computing." His work on the Raft consensus algorithm, developed while at Stanford, has become the standard implementation in systems from Kubernetes to CockroachDB.</p>
<p>"I'm deeply honored, and I want to emphasize that this recognition belongs to the extraordinary students and collaborators I've worked with over the past two decades," Martinez said. "The best ideas in my lab have always come from my students."</p>
<p>Martinez joins 18 current Stanford faculty members in the NAE. He is the third member of the Computer Science department to be elected in the last five years.</p>`,
    },
    image: {
      url: "/images/martinez-portrait.jpg",
      alt: "Professor Luis Martinez standing in front of a whiteboard with distributed systems diagrams",
      width: 1200,
      height: 630,
    },
    author: "Communications Staff",
    authorRole: "Stanford Engineering",
    category: "faculty",
    publishedAt: "2026-02-20T14:00:00Z",
    featured: true,
  },
  {
    id: "news-003",
    slug: "phd-students-win-best-paper-at-sosp",
    title: "Three PhD Students Win Best Paper Award at SOSP 2026",
    summary:
      "The award-winning paper introduces a new operating system abstraction for heterogeneous computing that unifies GPU, TPU, and FPGA scheduling.",
    body: {
      html: `<p>Congratulations to PhD students Mei-Ling Wu, Arjun Patel, and Fatima Al-Rashidi, whose paper "HeteroOS: A Unified Abstraction for Heterogeneous Accelerator Scheduling" received the Best Paper Award at the 31st ACM Symposium on Operating Systems Principles (SOSP) in Seoul.</p>
<p>The paper addresses a growing pain point in modern computing: as data centers deploy an increasingly diverse mix of accelerators (GPUs, TPUs, FPGAs, and custom ASICs), existing operating system abstractions fail to provide efficient, unified resource management.</p>
<p>HeteroOS introduces a new scheduling primitive called "compute shards" that abstracts away hardware differences while preserving the ability to exploit hardware-specific optimizations. In evaluation on Google's production workloads, HeteroOS improved accelerator utilization by 34% and reduced job completion times by 22%.</p>
<p>"This is a testament to the incredible depth of systems research happening in our department," said their advisor, Professor Martinez. "These students are tackling problems that will define the next generation of computing infrastructure."</p>`,
    },
    image: {
      url: "/images/sosp-award.jpg",
      alt: "Three smiling PhD students holding a glass trophy on a conference stage",
      width: 1200,
      height: 630,
    },
    author: "Dr. Rachel Kim",
    authorRole: "Science Communications Officer",
    category: "students",
    publishedAt: "2026-02-18T10:00:00Z",
    featured: false,
  },
  {
    id: "news-004",
    slug: "new-center-for-responsible-ai-launches",
    title:
      "Stanford Launches Center for Responsible AI with $50M Founding Gift",
    summary:
      "The new interdisciplinary center will bring together researchers from CS, law, philosophy, and medicine to develop frameworks for safe and equitable AI deployment.",
    body: {
      html: `<p>Stanford University today announced the establishment of the Center for Responsible AI (CRAI), a new interdisciplinary research center funded by a $50 million founding gift from the Hewlett Foundation.</p>
<p>The center will be housed in the School of Engineering but will draw faculty from across the university, including the Law School, the School of Humanities and Sciences, and the School of Medicine. Its mission is to develop technical, legal, and ethical frameworks for ensuring that AI systems are safe, fair, and transparent.</p>
<p>"We are at an inflection point," said Professor Fei-Fei Li, who will serve as the center's inaugural faculty director. "The AI systems we build today will shape society for decades. We have a responsibility to get this right, and that requires bringing together perspectives from far beyond computer science."</p>
<p>The center's initial research agenda includes AI safety in healthcare, algorithmic fairness in criminal justice, environmental impact of large-scale AI training, and governance frameworks for frontier AI models.</p>`,
    },
    image: {
      url: "/images/responsible-ai-center.jpg",
      alt: "Modern glass building exterior with a 'Center for Responsible AI' banner",
      width: 1200,
      height: 630,
    },
    author: "University Communications",
    authorRole: "Stanford News Service",
    category: "announcements",
    publishedAt: "2026-02-15T08:00:00Z",
    featured: true,
  },
  {
    id: "news-005",
    slug: "undergraduate-team-wins-icpc-regionals",
    title:
      "Stanford Undergraduate Team Advances to ICPC World Finals for Fifth Consecutive Year",
    summary:
      "The three-person team solved 11 of 13 problems to win the North America Pacific Northwest Regional, securing a spot at the 2026 World Finals in Shenzhen.",
    body: {
      html: `<p>Stanford's competitive programming team, consisting of sophomores David Park and Priya Sharma and junior Alex Gonzalez, dominated the ICPC North America Pacific Northwest Regional Contest, solving 11 of 13 problems in under four hours to claim first place and a berth at the World Finals.</p>
<p>The team's performance was notable for their speed on geometry and graph theory problems, traditionally the most challenging categories. They were the only team in the region to solve Problem K, a complex geometric optimization that required a novel application of Voronoi diagrams.</p>
<p>"We've been training together since freshman year," said Park. "The key is not just individual skill but knowing how to divide problems efficiently and communicate when you're stuck."</p>
<p>The World Finals will be held in Shenzhen, China, in June 2026, where Stanford will compete against approximately 130 teams from around the world. Stanford's best World Finals finish was 4th place in 2023.</p>`,
    },
    image: {
      url: "/images/icpc-team.jpg",
      alt: "Three undergraduate students in Stanford cardinal t-shirts celebrating with laptops",
      width: 1200,
      height: 630,
    },
    author: "Michael Torres",
    authorRole: "Student Affairs",
    category: "students",
    publishedAt: "2026-02-12T16:00:00Z",
    featured: false,
  },
  {
    id: "news-006",
    slug: "nsf-career-awards-2026",
    title: "Four Junior Faculty Members Receive NSF CAREER Awards",
    summary:
      "The prestigious early-career awards recognize faculty in cryptography, robotics, programming languages, and computational biology.",
    body: {
      html: `<p>Four assistant professors in the Computer Science department have received NSF CAREER Awards, the National Science Foundation's most prestigious honor for early-career faculty. The awards, each providing approximately $600,000 over five years, recognize outstanding research and education contributions.</p>
<p>The recipients are:</p>
<ul>
<li><strong>Professor Amara Okafor</strong> — for research on post-quantum cryptographic protocols for resource-constrained IoT devices</li>
<li><strong>Professor Kenji Tanaka</strong> — for work on learned robotic manipulation in unstructured environments</li>
<li><strong>Professor Sarah Lindström</strong> — for contributions to gradual typing systems that bridge dynamic and static languages</li>
<li><strong>Professor Wei Zhang</strong> — for computational methods integrating single-cell genomics with spatial transcriptomics</li>
</ul>
<p>"These awards reflect the exceptional quality of our junior faculty cohort," said Department Chair Professor Jennifer Widom. "Each of these researchers is pushing the boundaries of their field while being extraordinary educators and mentors."</p>`,
    },
    image: {
      url: "/images/nsf-career.jpg",
      alt: "Four faculty members posing together in front of the Gates Computer Science building",
      width: 1200,
      height: 630,
    },
    author: "Communications Staff",
    authorRole: "Stanford Engineering",
    category: "awards",
    publishedAt: "2026-02-08T09:00:00Z",
    featured: false,
  },
  {
    id: "news-007",
    slug: "partnership-with-nasa-jpl-autonomous-systems",
    title:
      "Department Announces Five-Year Research Partnership with NASA JPL on Autonomous Space Systems",
    summary:
      "The collaboration will develop AI systems for autonomous spacecraft navigation and decision-making for deep-space missions beyond Mars.",
    body: {
      html: `<p>The Stanford Computer Science department and NASA's Jet Propulsion Laboratory (JPL) have signed a five-year cooperative research agreement focused on developing autonomous systems for deep-space exploration.</p>
<p>The partnership, valued at $12 million, will fund joint research projects, doctoral fellowships, and summer internships. Research areas include autonomous navigation for spacecraft operating with multi-hour communication delays, onboard scientific decision-making using reinforcement learning, and fault-tolerant distributed systems for multi-spacecraft missions.</p>
<p>"When a spacecraft is exploring the moons of Jupiter, a round-trip signal takes over an hour," explained Professor Robert Chang, the Stanford principal investigator. "The spacecraft must be capable of making complex decisions entirely on its own. That's an AI problem of extraordinary difficulty and consequence."</p>
<p>The first cohort of four PhD students will begin at JPL this summer, working alongside JPL engineers on simulation environments for the upcoming Europa Clipper mission.</p>`,
    },
    image: {
      url: "/images/nasa-jpl.jpg",
      alt: "Artistic rendering of an autonomous spacecraft approaching Jupiter's moon Europa",
      width: 1200,
      height: 630,
    },
    author: "Dr. Rachel Kim",
    authorRole: "Science Communications Officer",
    category: "research",
    publishedAt: "2026-02-05T11:00:00Z",
    featured: false,
  },
  {
    id: "news-008",
    slug: "cs-department-diversity-report-2025",
    title:
      "CS Department Releases 2025 Diversity & Inclusion Progress Report",
    summary:
      "The annual report shows continued growth in representation with women comprising 38% of incoming PhD students and underrepresented minorities reaching 22%.",
    body: {
      html: `<p>The Computer Science department has published its annual Diversity & Inclusion Progress Report, highlighting sustained improvements in representation across all degree programs and faculty ranks.</p>
<p>Key findings include: women now represent 38% of incoming PhD students (up from 29% five years ago), underrepresented minorities comprise 22% of the incoming class, and the department has hired four tenure-track faculty from underrepresented groups in the past two years.</p>
<p>The report also highlights several programs contributing to these outcomes, including the CS Bridge summer program for incoming students from under-resourced backgrounds, the Peer Mentoring Network that pairs first-year students with advanced students, and the new Teaching Fellowship program that provides pedagogical training focused on inclusive instruction.</p>
<p>"Numbers matter, but they're not enough," said Professor Maria Santos, chair of the department's diversity committee. "We're focused on creating an environment where every student and faculty member can thrive and do their best work."</p>`,
    },
    image: {
      url: "/images/diversity-report.jpg",
      alt: "Diverse group of students collaborating in a modern computer science lab",
      width: 1200,
      height: 630,
    },
    author: "Communications Staff",
    authorRole: "Stanford Engineering",
    category: "announcements",
    publishedAt: "2026-02-01T08:00:00Z",
    featured: false,
  },
];
