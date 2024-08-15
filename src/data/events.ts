import { CMSEvent } from "@/lib/cms/types";

export const events: CMSEvent[] = [
  {
    id: "evt-001",
    slug: "frontiers-in-quantum-computing",
    title: "Frontiers in Quantum Computing: From Theory to Application",
    summary:
      "A distinguished lecture exploring recent breakthroughs in quantum error correction and their implications for scalable quantum computing architectures.",
    body: {
      html: `<p>Join us for a landmark lecture by Professor Elena Vasquez from MIT's Center for Quantum Engineering. Professor Vasquez will present her group's latest findings on topological quantum error correction codes that achieve fault tolerance thresholds previously thought unattainable.</p>
<p>The talk will cover three major themes: the theoretical foundations of surface codes, experimental implementations on superconducting qubit platforms, and a roadmap toward practical quantum advantage in optimization and simulation problems.</p>
<h3>Who Should Attend</h3>
<p>This lecture is designed for graduate students, postdoctoral researchers, and faculty in computer science, physics, and electrical engineering. Undergraduate students with coursework in quantum mechanics are also welcome.</p>
<h3>About the Speaker</h3>
<p>Professor Vasquez is the recipient of the 2025 MacArthur Fellowship and has published over 120 papers in Nature, Science, and Physical Review Letters. Her work on bosonic codes has been cited over 8,000 times.</p>`,
    },
    image: {
      url: "/images/quantum-computing.jpg",
      alt: "Abstract visualization of quantum computing circuits with blue and purple light trails",
      width: 1200,
      height: 630,
    },
    date: "2026-03-15",
    time: "4:00 PM – 5:30 PM PST",
    location: "Hewlett Teaching Center, Room 200",
    category: "lecture",
    featured: true,
    speaker: "Prof. Elena Vasquez",
    speakerTitle: "MIT Center for Quantum Engineering",
    registrationUrl: "https://events.stanford.edu/register/quantum-2026",
    publishedAt: "2026-02-01T09:00:00Z",
  },
  {
    id: "evt-002",
    slug: "machine-learning-for-climate-science",
    title: "Machine Learning for Climate Science Workshop",
    summary:
      "A hands-on two-day workshop on applying deep learning techniques to climate modeling, satellite imagery analysis, and extreme weather prediction.",
    body: {
      html: `<p>The Stanford Institute for Human-Centered AI (HAI) and the School of Earth, Energy & Environmental Sciences present a collaborative workshop at the intersection of machine learning and climate science.</p>
<p>Participants will work with real-world datasets from NOAA and NASA, implementing convolutional neural networks for satellite imagery classification and physics-informed neural networks for climate model emulation.</p>
<h3>Workshop Format</h3>
<p>Day 1 focuses on foundational concepts and guided tutorials. Day 2 is project-based, where teams tackle real climate prediction challenges. All code will be provided in Jupyter notebooks with GPU access via Stanford's Sherlock cluster.</p>
<h3>Prerequisites</h3>
<p>Proficiency in Python and basic familiarity with PyTorch or TensorFlow. Prior coursework in machine learning (CS 229 or equivalent) is strongly recommended.</p>`,
    },
    image: {
      url: "/images/climate-ml.jpg",
      alt: "Satellite view of Earth with data visualization overlays showing climate patterns",
      width: 1200,
      height: 630,
    },
    date: "2026-03-22",
    endDate: "2026-03-23",
    time: "9:00 AM – 5:00 PM PST",
    location: "Gates Computer Science Building, Room 104",
    category: "workshop",
    featured: true,
    speaker: "Prof. Sarah Chen & Dr. Marcus Rivera",
    speakerTitle: "Stanford HAI / School of Earth Sciences",
    registrationUrl: "https://events.stanford.edu/register/climate-ml",
    publishedAt: "2026-02-05T10:00:00Z",
  },
  {
    id: "evt-003",
    slug: "ethics-of-generative-ai",
    title: "The Ethics of Generative AI in Academic Research",
    summary:
      "A faculty-led seminar examining the ethical implications of using large language models in scholarly work, from authorship questions to data integrity.",
    body: {
      html: `<p>As generative AI tools become ubiquitous in research workflows, fundamental questions about academic integrity, authorship, and intellectual property demand urgent attention.</p>
<p>This seminar brings together scholars from computer science, philosophy, law, and the humanities to debate and develop frameworks for responsible AI use in academic research. Panelists will address case studies from recent controversies and propose concrete guidelines.</p>
<h3>Panel Discussion Topics</h3>
<ul>
<li>When does AI assistance cross the line from tool to co-author?</li>
<li>Reproducibility concerns with stochastic AI outputs</li>
<li>Bias propagation in AI-assisted literature reviews</li>
<li>Institutional policy frameworks: what works and what doesn't</li>
</ul>`,
    },
    image: {
      url: "/images/ai-ethics.jpg",
      alt: "Panel discussion in a modern lecture hall with five speakers at a long table",
      width: 1200,
      height: 630,
    },
    date: "2026-04-02",
    time: "2:00 PM – 4:00 PM PST",
    location: "Stanford Law School, Room 180",
    category: "seminar",
    featured: false,
    speaker: "Prof. James Whitfield (moderator)",
    speakerTitle: "Department of Philosophy",
    publishedAt: "2026-02-10T14:00:00Z",
  },
  {
    id: "evt-004",
    slug: "annual-computer-science-colloquium",
    title: "Annual Computer Science Distinguished Colloquium",
    summary:
      "The flagship annual event featuring keynotes from Turing Award winners and rising stars in systems, theory, and AI research.",
    body: {
      html: `<p>The Stanford Computer Science Department is proud to present the 47th Annual Distinguished Colloquium, a full-day event celebrating the breadth and depth of computing research.</p>
<p>This year's theme, "Computing for Humanity," features three keynote addresses, twelve lightning talks from current PhD students, a poster session, and a reception. The colloquium is the department's premier showcase of research excellence.</p>
<h3>Keynote Speakers</h3>
<p>Dr. Yoshua Bengio (Mila), Prof. Shafi Goldwasser (UC Berkeley), and Dr. Jeff Dean (Google DeepMind) will each deliver 45-minute keynotes followed by audience Q&A.</p>
<h3>Student Lightning Talks</h3>
<p>Twelve competitively selected PhD students will present five-minute overviews of their most impactful work, spanning distributed systems, cryptography, natural language processing, and robotics.</p>`,
    },
    image: {
      url: "/images/colloquium.jpg",
      alt: "Packed auditorium during an academic keynote with presenter on a large screen",
      width: 1200,
      height: 630,
    },
    date: "2026-04-18",
    time: "9:00 AM – 6:00 PM PST",
    location: "Memorial Auditorium",
    category: "colloquium",
    featured: true,
    registrationUrl: "https://events.stanford.edu/register/cs-colloquium-2026",
    publishedAt: "2026-01-20T08:00:00Z",
  },
  {
    id: "evt-005",
    slug: "data-structures-teaching-workshop",
    title: "Innovative Approaches to Teaching Data Structures",
    summary:
      "A pedagogy workshop for instructors exploring interactive visualization tools, automated grading systems, and inclusive teaching practices for CS fundamentals.",
    body: {
      html: `<p>Teaching foundational computer science courses effectively remains one of the most impactful challenges in CS education. This workshop gathers educators from across the university to share innovative techniques for teaching data structures and algorithms.</p>
<p>Topics include the use of interactive visualization platforms like VisuAlgo and Algorithm Visualizer, AI-powered automated feedback systems, peer instruction models, and strategies for supporting students from non-traditional backgrounds.</p>
<h3>Hands-On Sessions</h3>
<p>Participants will prototype a teaching module using at least one new tool or technique, with feedback from experienced instructors and educational researchers.</p>`,
    },
    image: {
      url: "/images/teaching-workshop.jpg",
      alt: "Small group of instructors collaborating around a whiteboard with data structure diagrams",
      width: 1200,
      height: 630,
    },
    date: "2026-04-10",
    time: "10:00 AM – 3:00 PM PST",
    location: "Huang Engineering Center, Room 018",
    category: "workshop",
    featured: false,
    publishedAt: "2026-02-15T11:00:00Z",
  },
  {
    id: "evt-006",
    slug: "spring-graduate-social",
    title: "Spring Quarter Graduate Student Social",
    summary:
      "An informal gathering for graduate students across all CS research areas to connect, unwind, and build community at the start of spring quarter.",
    body: {
      html: `<p>Kick off spring quarter by meeting fellow graduate students from across the department's research groups. Whether you're in theory, systems, AI, HCI, or any other area, this is your chance to build connections beyond your lab.</p>
<p>The event features food from local restaurants, lawn games on the Gates courtyard, and short "research speed dating" sessions where you have three minutes to explain your work to someone from a completely different area.</p>
<p>Organized by the CS Graduate Student Council. All CS graduate students (MS and PhD) are welcome. No registration required.</p>`,
    },
    image: {
      url: "/images/graduate-social.jpg",
      alt: "Graduate students socializing outdoors on a sunny campus courtyard",
      width: 1200,
      height: 630,
    },
    date: "2026-04-05",
    time: "5:00 PM – 8:00 PM PST",
    location: "Gates Building Courtyard",
    category: "social",
    featured: false,
    publishedAt: "2026-03-01T09:00:00Z",
  },
  {
    id: "evt-007",
    slug: "neuromorphic-computing-seminar",
    title: "Neuromorphic Computing: Bridging Neuroscience and Silicon",
    summary:
      "An interdisciplinary seminar on brain-inspired computing architectures and their potential to revolutionize energy-efficient AI inference.",
    body: {
      html: `<p>Neuromorphic computing represents a paradigm shift from traditional von Neumann architectures, drawing inspiration from the brain's massively parallel, event-driven processing. This seminar explores the state of the art in neuromorphic hardware, spiking neural networks, and their applications.</p>
<p>Dr. Kwon will present Intel's Loihi 3 architecture and demonstrate real-time sensory processing tasks that achieve three orders of magnitude energy reduction compared to GPU-based approaches.</p>
<h3>Key Topics</h3>
<ul>
<li>Spiking neural network training algorithms</li>
<li>Event-driven sensor fusion for robotics</li>
<li>Memristive devices for in-memory computing</li>
<li>Benchmarking neuromorphic systems against conventional accelerators</li>
</ul>`,
    },
    image: {
      url: "/images/neuromorphic.jpg",
      alt: "Close-up of a neuromorphic computing chip with intricate circuit patterns",
      width: 1200,
      height: 630,
    },
    date: "2026-05-06",
    time: "3:30 PM – 5:00 PM PST",
    location: "Allen Building, Room 101",
    category: "seminar",
    featured: false,
    speaker: "Dr. Min-Jae Kwon",
    speakerTitle: "Intel Labs, Neuromorphic Computing Division",
    publishedAt: "2026-03-10T10:00:00Z",
  },
  {
    id: "evt-008",
    slug: "international-symposium-on-formal-verification",
    title: "International Symposium on Formal Verification of Software Systems",
    summary:
      "A two-day conference bringing together leading researchers in formal methods, program analysis, and verified software engineering.",
    body: {
      html: `<p>The 12th International Symposium on Formal Verification brings together over 200 researchers from academia and industry to present cutting-edge work in formal methods and their practical applications to software reliability.</p>
<p>This year's program features 28 peer-reviewed papers, three invited talks, and two tutorial sessions on emerging tools for automated theorem proving and model checking.</p>
<h3>Highlights</h3>
<p>The symposium will debut a new industry track with presentations from Amazon Web Services, Microsoft Research, and Galois on deploying formal methods at scale in production systems.</p>`,
    },
    image: {
      url: "/images/formal-verification.jpg",
      alt: "Conference attendees reviewing research posters in a well-lit exhibition hall",
      width: 1200,
      height: 630,
    },
    date: "2026-05-14",
    endDate: "2026-05-15",
    time: "8:30 AM – 5:30 PM PST",
    location: "Frances C. Arrillaga Alumni Center",
    category: "conference",
    featured: false,
    registrationUrl: "https://events.stanford.edu/register/fv-symposium-2026",
    publishedAt: "2026-02-20T12:00:00Z",
  },
];
