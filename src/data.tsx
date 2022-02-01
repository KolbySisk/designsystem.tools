import { MdExplore, MdExtension, MdImage, MdOutlineGavel, MdTopic, MdTrain } from 'react-icons/md'

import { Feature } from '~/types'

export const siteDescription = 'Everything you need to know about design systems, and the tools to build them.'

export const intro = [
  {
    title: 'Our philosophy',
    content: (
      <>
        <p>
          We maintain this resource to help explain what design systems are, what value they provide, and the features
          that can compose one.
        </p>
        <p>
          There are many possible constructs for a design system, and many tools available to support the effort. We
          will describe the most common features and recommend the best tools available. Your design system may not need
          every feature described here. Use this information to help you compose the right design system for your
          organization.
        </p>
      </>
    ),
  },
  {
    title: 'What is a design system?',
    content: (
      <>
        <p>
          A design system is a collection of resources used to standardize design throughout an entire organization. It
          acts as a single source of truth by documenting a design language which is used to create reusable resources.
        </p>
        <p>
          There are many possible features that can compose a design system. In addition to the resources there are
          other considerations
        </p>
      </>
    ),
  },
  {
    title: 'Why invest in a design system?',
    content: (
      <>
        <p>
          The aspiration of a design system is to standardize design. When design is standardized in an organization it
          enables designers to work with an aligned vision, ensuring products look and feel harmonious.
        </p>
        <p>
          A standardized design also means reusable resources can be built—utilizing those design standards—that
          drastically increases the velocity of design and development.
        </p>
      </>
    ),
  },
]

export const featureDisclaimer = {
  title: 'Not all design systems are built the same',
  description:
    'The perfect design system for your organization might not require every feature described here. It may need more than what is described here. It’s important to learn about the features that could be part of your design system to determine what construct provides the most value to your organization.',
}

export const features: Feature[] = [
  {
    id: 'design-language-system',
    title: 'Design language system',
    icon: <MdExplore />,
    description: (
      <p>
        The design language system is the foundation of a design system. It helps designers to create harmonious designs
        resulting in an organization’s products having a consistent look and feel.
      </p>
    ),
    features: [
      {
        title: 'Design vision',
        description: '',
      },
      {
        title: 'Brand guidelines',
        description: '',
      },
      {
        title: 'Design guidelines',
        description: '',
      },
      {
        title: 'Grammar',
        description: '',
      },
      {
        title: 'Design tokens',
        description: '',
      },
    ],
    tools: [
      {
        title: 'Design language checklist',
        link: 'https://www.taskade.com/templates/design/the-ultimate-design-system-checklist',
      },
    ],
    articles: [
      {
        title: 'How to develop a Design Language',
        link: 'https://xd.adobe.com/ideas/principles/web-design/how-to-develop-design-language/',
      },
      {
        title: 'Design Language System',
        link: 'https://uxplanet.org/design-language-system-d438f4aa30e0',
      },
    ],
  },
  {
    id: 'component-library',
    title: 'Component library',
    icon: <MdExtension />,
    description: (
      <p>
        The component library is a collection of reusable components—themed according to the design language—that enable
        engineers to work quicker by providing components with UX best practices, accessibility, and extensibility baked
        in.
      </p>
    ),
    features: [
      {
        title: 'Code components',
        description: '',
      },
      {
        title: 'Styling system',
        description: '',
      },
      {
        title: 'Themability',
        description: '',
      },
      {
        title: 'Accessibility',
        description: '',
      },
      {
        title: 'Developer experience',
        description: '',
      },
    ],
    tools: [
      {
        title: 'Chakra UI',
        link: 'https://chakra-ui.com/',
      },
      {
        title: 'MUI',
        link: 'https://mui.com/',
      },
      {
        title: 'Mantine',
        link: 'https://mantine.dev/',
      },
    ],
    articles: [
      {
        title: 'When to build a custom component library',
        link: 'https://blog.logrocket.com/choosing-when-to-build-a-custom-react-component-library/',
      },
      {
        title: 'Choosing the right component library',
        link: 'https://engineering.udacity.com/choosing-the-right-component-library-for-your-design-system-mui-vs-chakra-45c4c949d150',
      },
      {
        title: 'System UI Theme Specification',
        link: 'https://system-ui.com/theme/',
      },
    ],
  },
  {
    id: 'design-resources',
    title: 'Design resources',
    icon: <MdImage />,
    description: (
      <p>
        Design resources are a collection of resources that can be used during the design and development processes.
        Providing these resources in a centralized location makes it easier to find resources when needed, and works as
        a single source of truth.
      </p>
    ),
    features: [
      {
        title: 'UI kit',
        description: '',
      },
      {
        title: 'Branding',
        description: '',
      },
      {
        title: 'Stocks',
        description: '',
      },
      {
        title: 'Fonts',
        description: '',
      },
      {
        title: 'Icons',
        description: '',
      },
    ],
    tools: [
      {
        title: 'Chakra Figma UI kit',
        link: 'https://www.figma.com/community/file/971408767069651759',
      },
      {
        title: 'MUI Figma UI kit',
        link: 'https://www.figma.com/community/file/912837788133317724',
      },
    ],
  },
  {
    id: 'documentation-system',
    title: 'Documentation system',
    icon: <MdTopic />,
    description: (
      <>
        <p className='mb-4'>
          The documentation system is a centralized hub where anyone in the organization can gain access to the
          resources. It is most commonly in the form of a website.
        </p>
        <p>
          Documentation is the key to a successful design system. It removes friction, creates excitment, and provides
          the information necessary to use the design system properly.
        </p>
      </>
    ),
    features: [
      {
        title: 'Document information',
        description: '',
      },
      {
        title: 'Interactive components',
        description: '',
      },
      {
        title: 'Collect feedback',
        description: '',
      },
      {
        title: 'Roadmap',
        description: '',
      },
    ],
    tools: [
      {
        title: 'zeroheight',
        link: 'https://zeroheight.com/',
      },
      {
        title: 'Storybook',
        link: 'https://storybook.js.org/',
      },
      {
        title: 'Docusaurus',
        link: 'https://docusaurus.io/',
      },
    ],
    articles: [
      {
        title: 'The Key to a Successful Design System',
        link: 'https://xd.adobe.com/ideas/principles/design-systems/documentation-key-to-successful-design-system/',
      },
    ],
  },
  {
    id: 'code-infrastructure',
    title: 'Code infrastructure',
    icon: <MdTrain />,
    description: (
      <p>
        Code infrastructure refers to the echosystem that makes code available throughout an organization. If you decide
        to roll your own component library, or just provide a theme, you’ll need a way for product engineers to pull
        that code into their projects.
      </p>
    ),
    features: [
      {
        title: 'Monorepo',
        description: '',
      },
      {
        title: 'CI/CD',
        description: '',
      },
      {
        title: 'Repository manager',
        description: '',
      },
    ],
    tools: [
      {
        title: 'GitHub',
        link: 'https://github.com/',
      },
      {
        title: 'Nx',
        link: 'https://nx.dev/',
      },
      {
        title: 'CircleCI',
        link: 'https://circleci.com/',
      },
      {
        title: 'Artifactory',
        link: 'https://jfrog.com/artifactory/',
      },
    ],
    articles: [
      {
        title: 'monorepo.tools',
        link: 'https://monorepo.tools',
      },
    ],
  },
  {
    id: 'governance-system',
    title: 'Governance system',
    icon: <MdOutlineGavel />,
    description: (
      <>
        <p className='mb-4'>
          The governance system is the protocol for maintaining and updating the design system. Design systems are
          living artifacts and will grow and evolve over time.
        </p>
        <p>The governance system should answer questions like:</p>
        <ul className='list-disc pl-8'>
          <li>who maintains the design system?</li>
          <li>how/if others can contribute?</li>
          <li>how quality is assessed and assured?</li>
        </ul>
      </>
    ),
    features: [
      {
        title: 'Governance model',
        description: '',
      },
      {
        title: 'Contributing guidelines',
        description: '',
      },
    ],
    articles: [
      {
        title: 'Managing, Maintaining, and Governing',
        link: 'https://xd.adobe.com/ideas/principles/design-systems/managing-maintaining-governing-design-systems/',
      },
      {
        title: 'Governance by design',
        link: 'https://rangle.io/blog/governance-by-design-building-successful-design-systems/',
      },
    ],
  },
]
