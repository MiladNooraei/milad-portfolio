---
import BaseLayout from "@/layouts/BaseLayout.astro";
import Content from "@/components/widgets/Content.astro";
import Content2 from "@/components/widgets/Content2.astro";

const base = "/milad-portfolio/";

const metadata = {
  title: "About",
  description:
    "Learn more about Milad Nooraei, a Master of Data Science student at Monash University with experience in analytics, programming, and data visualization.",
};
---

<BaseLayout {metadata}>
  <Content
    tagline="Profile"
    title="About Me"
    description={[
      "I’m Milad Nooraei, a Master of Data Science student at Monash University with a background in computer engineering and hands-on experience in data analysis, programming, and data visualization.",
      "I enjoy working with data to uncover patterns, communicate insights clearly, and support better decision-making across real-world domains including healthcare, digital platforms, and consumer data.",
    ]}
  />

  <!-- Education -->
  <Content2 title="Education" tagline="Academic Background">
    <Fragment>
      <div class="text-left space-y-8 text-muted-foreground">

        <div>
          <p class="text-lg font-semibold text-foreground">
            Master of Data Science —
            <a
              href="https://www.monash.edu/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-400 hover:text-blue-300 underline underline-offset-4"
            >
              Monash University
            </a>,
            Melbourne, Australia
          </p>

          <ul class="list-disc ml-6 mt-3 space-y-2">
            <li>2025 – Present</li>
            <li><strong>GPA:</strong> 85.1 / 100 (≈ 3.63 / 4.0)</li>
            <li>
              <strong>Relevant Coursework:</strong> Statistical Data Modelling,
              Foundations of Data Science, IT Research and Innovation Methods,
              Project Management, Introduction to Python Programming,
              Introduction to Databases, Mathematical Foundations for Data Science and AI,
              Introduction to Computer Architecture and Networks
            </li>
          </ul>
        </div>

        <div>
          <p class="text-lg font-semibold text-foreground">
            Bachelor of Computer Engineering —
            <a
              href="https://shirazu.ac.ir/en/home"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-400 hover:text-blue-300 underline underline-offset-4"
            >
              Shiraz University
            </a>,
            Shiraz, Iran
          </p>

          <ul class="list-disc ml-6 mt-3 space-y-2">
            <li>2020 – 2024</li>
            <li>
              Focus: Programming, algorithms, systems, software development, and core computer engineering foundations
            </li>
          </ul>
        </div>

      </div>
    </Fragment>
  </Content2>

  <!-- Experience -->
  <Content2
    isReversed={true}
    title="Experience"
    description={[
      "Data Analyst — Shiraz University of Medical Sciences: Worked on ICU patient datasets and applied APACHE-based analytical methods to generate clinical insights.",
      "Data Analysis Intern — Quera: Built hands-on experience with Python, SQL, statistics, dashboards, web scraping, and analytical workflows.",
      "Teaching Assistant — Shiraz University: Supported courses in Python programming, object-oriented programming, and modeling.",
    ]}
    tagline="Professional Experience"
  />

  <!-- Activities -->
  <Content2
    title="Leadership & Activities"
    description={[
      "Data & AI Officer — Monash Data & AI Society",
      "Hour of Code — Contributed to event marketing, content creation, and Python teaching for high school students",
      "ACM Scientific Association — Organized events and supported ICPC-related activities",
      "SampCode — Co-organized the event and helped manage teams and execution",
    ]}
    tagline="Leadership & Involvement"
  />

  <!-- Skills -->
  <Content2
    isReversed={true}
    title="Skills"
    description={[
      "Programming: Python, R, SQL, Java, C",
      "Data Analysis & Visualization: Pandas, NumPy, Matplotlib, Seaborn, Plotly, Power BI",
      "Machine Learning: Scikit-learn",
      "Databases: MySQL, Oracle",
      "Tools: Jupyter Notebook, Visual Studio Code, Streamlit, Git",
    ]}
    tagline="Technical Skills"
  />

  <!-- Personal -->
  <Content2
    title="Beyond Data"
    tagline="Personal"
    description={[
      "Outside of my academic and professional work, I enjoy music and play the piano.",
      "I’m also interested in exploring new activities, and I’m currently planning to start figure ice skating.",
    ]}
  />

  <!-- Career -->
  <Content2
    title="What I’m Looking For"
    description={[
      "I’m currently building my portfolio for data analyst and technology-focused roles where I can apply analytical thinking, technical skills, and problem-solving to real business or operational challenges.",
      "I’m especially interested in opportunities that involve data analysis, visualization, insight generation, and using data to support strategic decisions.",
    ]}
    tagline="Career Direction"
    actions={[
      {
        text: "View Projects",
        href: `${base}services/`,
        variant: "primary",
        icon: "lucide:folder-open",
      },
      {
        text: "Contact Me",
        href: `${base}contact/`,
        variant: "secondary",
        icon: "lucide:mail",
      },
    ]}
  />
</BaseLayout>