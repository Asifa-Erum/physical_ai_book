/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    // {
    //   type: 'category',
    //   label: 'Introduction',
    //   link: {
    //     type: 'doc',
    //     id: 'introduction/intro', // Link to the intro page
    //   },
    //   items: [
    //     'introduction/intro',
    //   ],
    //   collapsed: false, // Keep introduction expanded by default
    // },
    {
      type: 'category',
      label: 'Foundations of Physical AI',
      link: {
        type: 'doc',
        id: 'chapter-1/lesson-1-1-course-specification',
      },
      items: [
        'chapter-1/lesson-1-1-course-specification',
        'chapter-1/lesson-1-2-technical-foundations',
        'chapter-1/lesson-1-3-performance-and-ethics',
        'chapter-1/lesson-1-4-capstone-scope-and-workflow',
        'chapter-1/lesson-1-5-lab-governance-and-practice',
      ],
    },
    {
      type: 'category',
      label: 'ROS 2 Fundamentals',
      link: {
        type: 'doc',
        id: 'chapter-2/lesson-2-1-ros-2-fundamentals',
      },
      items: [
        'chapter-2/lesson-2-1-ros-2-fundamentals',
        'chapter-2/lesson-2-2-ros-2-development-tools',
        'chapter-2/lesson-2-3-integration-and-capstone',
      ],
    },
    {
      type: 'category',
      label: 'Digital Twins & Simulation',
      link: {
        type: 'doc',
        id: 'chapter-3/lesson-3-1-gazebo-and-physics',
      },
      items: [
        'chapter-3/lesson-3-1-gazebo-and-physics',
        'chapter-3/lesson-3-2-isaac-sim-and-data',
        'chapter-3/lesson-3-3-sensors-and-validation',
        'chapter-3/lesson-3-4-unity-and-visualization',
        'chapter-3/lesson-3-5-sim-to-real-and-best-practices',
      ],
    },
    {
      type: 'category',
      label: 'Perception & Multimodal AI',
      link: {
        type: 'doc',
        id: 'chapter-4/lesson-4-1-perception-foundations',
      },
      items: [
        'chapter-4/lesson-4-1-perception-foundations',
        'chapter-4/lesson-4-2-computer-vision',
        'chapter-4/lesson-4-3-slam-and-mapping',
        'chapter-4/lesson-4-4-multimodal-ai',
      ],
    },
    {
      type: 'category',
      label: 'Autonomy & Agent Control',
      link: {
        type: 'doc',
        id: 'chapter-5/lesson-5-1-autonomy-foundations',
      },
      items: [
        'chapter-5/lesson-5-1-autonomy-foundations',
        'chapter-5/lesson-5-2-planning-and-navigation',
        'chapter-5/lesson-5-3-tasks-and-behavior-trees',
        'chapter-5/lesson-5-4-llm-decision-making',
        'chapter-5/lesson-5-5-embodied-action',
      ],
    },
    {
      type: 'category',
      label: 'Multi-Agent & Fleet Robotics',
      link: {
        type: 'doc',
        id: 'chapter-6/lesson-6-1-multi-agent-foundations',
      },
      items: [
        'chapter-6/lesson-6-1-multi-agent-foundations',
        'chapter-6/lesson-6-2-shared-maps-and-world-models',
      ],
    },
    {
      type: 'category',
      label: 'Deployment & Industrial Robotics',
      link: {
        type: 'doc',
        id: 'chapter-7/lesson-7-1-sim-vs-reality',
      },
      items: [
        'chapter-7/lesson-7-1-sim-vs-reality',
        'chapter-7/lesson-7-2-hardware-and-power',
        'chapter-7/lesson-7-3-safety-and-hrc',
        'chapter-7/lesson-7-4-workflow-integration',
        'chapter-7/lesson-7-5-resilience-and-failover',
        'chapter-7/lesson-7-6-deployment-and-field-test',
      ],
    },
  ],
};

export default sidebars;