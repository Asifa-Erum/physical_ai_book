import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import HomepageFeatures from '../components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const chapters = [
  {
    title: 'Chapter 1: Foundations of Physical AI',
    link: '/chapter-1/lesson-1-1-course-specification',
    description: (
      <>
        Lay the groundwork for understanding Physical AI, covering course overview, technical prerequisites, ethics, and capstone project planning.
      </>
    ),
  },
  {
    title: 'Chapter 2: ROS 2 Fundamentals',
    link: '/chapter-2/lesson-2-1-ros-2-fundamentals',
    description: (
      <>
        Dive into the Robot Operating System 2 (ROS 2), learning its core concepts, development tools, and how to build integrated robotic solutions.
      </>
    ),
  },
  {
    title: 'Chapter 3: Digital Twins & Simulation',
    link: '/chapter-3/lesson-3-1-gazebo-and-physics',
    description: (
      <>
        Explore virtual environments for robotics with Gazebo and Isaac Sim, understanding physics, data generation, sensor modeling, and best practices.
      </>
    ),
  },
  {
    title: 'Chapter 4: Perception & Multimodal AI',
    link: '/chapter-4/lesson-4-1-perception-foundations',
    description: (
      <>
        Understand how robots perceive their environment using computer vision, SLAM, mapping, and integrating multiple sensor modalities.
      </>
    ),
  },
  {
    title: 'Chapter 5: Autonomy & Agent Control',
    link: '/chapter-5/lesson-5-1-autonomy-foundations',
    description: (
      <>
        Learn the principles of autonomous behavior, including planning, navigation, task execution with behavior trees, and LLM-driven decision-making.
      </>
    ),
  },
  {
    title: 'Chapter 6: Multi-Agent & Fleet Robotics',
    link: '/chapter-6/lesson-6-1-multi-agent-foundations',
    description: (
      <>
        Investigate the complexities of coordinating multiple robots, focusing on foundational concepts, shared maps, and world models.
      </>
    ),
  },
  {
    title: 'Chapter 7: Deployment & Industrial Robotics',
    link: '/chapter-7/lesson-7-1-sim-vs-reality',
    description: (
      <>
        Bridge the gap from simulation to real-world deployment, covering hardware, power management, safety, and integration for industrial applications.
      </>
    ),
  },
];

function ChapterCard({title, description, link}) {
  return (
    <div className={clsx('col col--4', styles.chapterCardWrapper)}>
      <Link to={link} className={styles.cardLink}>
        <div className={clsx('card', styles.chapterCard)}>
          <div className="card__header">
            <Heading as="h3">{title}</Heading>
          </div>
          <div className={clsx('card__body', styles.cardContent)}>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className={clsx("container", styles.heroContainer)}>
        <div className={styles.heroTextContent}>
          <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
            The Physical AI Textbook
          </Heading>
          <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
            {siteConfig.tagline}
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/introduction/intro">
              Explore the Handbook
            </Link>
          </div>
        </div>
        <div className={styles.heroImageContent}>
          <img
            src="/img/robotics-ai.jpg" // Placeholder image - User should replace this with an AI-generated image
            alt="AI Robot Analyzing Data"
            className={styles.heroImage}
          />
        </div>
      </div>
    </header>
  );
}

function ChapterCards() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {chapters.map((props, idx) => (
            <ChapterCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}


function HomepageCallToAction() {
  return (
    <section className={clsx('hero hero--primary', styles.callToActionSection)}>
      <div className="container">
        <Heading as="h2" className="hero__title">
          Ready to Build the Future?
        </Heading>
        <p className="hero__subtitle">
          Start your journey into Physical AI and transform your ideas into reality.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/introduction/intro">
            Begin Your Exploration
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Welcome"
      description="A Hands-On Guide to Building Intelligent Devices">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <ChapterCards />
        <HomepageCallToAction />
      </main>
    </Layout>
  );
}