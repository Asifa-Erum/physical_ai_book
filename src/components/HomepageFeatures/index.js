import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css'; // Assuming styles will be in a new css module

const FeatureList = [
  {
    title: 'Hands-On Robotics',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default, // Placeholder SVG
    description: (
      <>
        Dive into practical projects with ROS 2, Gazebo, and Isaac Sim to build and simulate intelligent physical systems.
      </>
    ),
  },
  {
    title: 'AI Integration',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default, // Placeholder SVG
    description: (
      <>
        Learn to integrate cutting-edge AI, including computer vision, SLAM, and LLM-driven decision-making, into your robots.
      </>
    ),
  },
  {
    title: 'Real-World Deployment',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default, // Placeholder SVG
    description: (
      <>
        Bridge the gap from simulation to reality with best practices for hardware, safety, and multi-agent fleet management.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}