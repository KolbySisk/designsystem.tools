import { MdExplore, MdExtension, MdImage, MdOutlineGavel, MdTopic, MdTrain } from 'react-icons/md'

import { Feature } from '~/types'

export const siteDescription = 'Everything you need to know about design systems, and the tools to build them.'

export const intro = [
  {
    title: 'Our philosophy',
    content: (
      <div className='space-y-4'>
        <p>
          This resource is maintained to help explain what design systems are, what value they provide, and the features
          that can compose one.
        </p>
        <p>
          There are many possible constructs for a design system, and many tools available to support the effort. This
          site will describe the most common features and recommend the best tools available. Your design system may not
          need every feature described here. Use this information to help you compose the right design system for your
          organization.
        </p>
        <p>
          Want to contribute?{' '}
          <a href='https://github.com/KolbySisk/designsystem.tools' target='_blank' rel='noopener noreferrer'>
            Consider making a pull request
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    title: 'What is a design system?',
    content: (
      <div className='space-y-4'>
        <p>
          A design system is a collection of resources used to standardize design throughout an organization. It acts as
          a single source of truth by documenting a design language, which is used to create reusable resources.
        </p>
        <p>
          There are many possible features that can compose a design system. In addition to resources like design
          guidelines and a component library, there are meta features like infrastructure and governance.
        </p>
      </div>
    ),
  },
  {
    title: 'Why invest in a design system?',
    content: (
      <div className='space-y-4'>
        <p>
          The aspiration of a design system is to standardize design. When design is standardized in an organization it
          enables designers to work with an aligned vision, ensuring products look and feel harmonious.
        </p>
        <p>
          A standardized design also means reusable resources can be built—utilizing those design standards—that
          drastically increases the velocity of design and development.
        </p>
      </div>
    ),
  },
]

export const featureDisclaimer = {
  title: 'Not all design systems are built the same',
  description: `The perfect design system for your organization might not require every feature described here. It may need more than what is described here. It's important to learn about the features that could be part of your design system to determine what construct provides the most value to your organization.`,
}

export const features: Feature[] = [
  {
    id: 'design-language-system',
    title: 'Design language system',
    icon: <MdExplore />,
    description: (
      <div className='space-y-4'>
        <p>
          The design language system is the foundation of a design system. It helps designers to create harmonious
          designs resulting in an organization&apos;s products having a consistent look and feel.
        </p>
        <p>
          It&apos;s an important foundation because every additional resource included in your design system will be
          designed utilizing the design language.
        </p>
      </div>
    ),
    features: [
      {
        title: 'Design vision',
        description: (
          <div className='space-y-4'>
            <p>
              To create a design vision is to create a philosophy of design for an organization. It should not only
              inspire designers, but provide an insight into the goals of design for business teams.
            </p>
            <p>
              The most popular example comes from Jony Ive - designer of the iPod, iPhone and many other Apple products:
            </p>
            <p className='border-l-4 border-dark border-opacity-20 p-2'>
              &quot;Our goal is simple objects, objects that you can&apos;t imagine any other way.&quot;
            </p>
          </div>
        ),
      },
      {
        title: 'Brand guidelines',
        description: (
          <p>
            Establishing brand guidelines is a crucial business practice. These guidelines document how an organization
            presents itself to the world. The guidelines consist of logos, typography, colors, writing tone, imagery—
            and the rules for using them in design.
          </p>
        ),
      },
      {
        title: 'Design guidelines',
        description: (
          <div className='space-y-4'>
            <p>
              The design guidelines document how to apply design principles. These guidelines are often in-depth and how
              strictly they should be followed depends on the rules of the organization.
            </p>
            <p>
              Two great examples are{' '}
              <a href='https://developer.apple.com/design/human-interface-guidelines/'>
                Apple&apos;s Human Interface Guidelines
              </a>
              , and <a href='https://material.io/design'>Google&apos;s Material Design Guidelines.</a>
            </p>
          </div>
        ),
      },
      {
        title: 'Design tokens',
        description: (
          <div className='space-y-4'>
            <p>
              Design tokens are a foundational element of a design system. A design token is a value for a visual
              element such as color, spacing, typography, border radius, and so on. Centralizing these values prevents
              resources from hard-coding them, and ensures flexibility and easier updates. Design tokens are integrated
              into both the UI kit that designers work with, and the component library that engineers work with.
            </p>
            <p>
              It is recommended that your design token solution adheres to the{' '}
              <a href='https://github.com/design-tokens/community-group'>official design token specification</a>. This
              will ensure your design tokens can better integrate with third party tools.
            </p>
          </div>
        ),
      },
    ],
    tools: [
      {
        title: 'Design language checklist',
        link: 'https://www.taskade.com/templates/design/the-ultimate-design-system-checklist',
      },
      {
        title: 'Figma Tokens',
        link: 'https://jansix.at/resources/figma-tokens',
      },
      {
        title: 'Design Tokens (Figma plugin)',
        link: 'https://www.figma.com/community/plugin/888356646278934516/Design-Tokens',
      },
    ],
    articles: [
      {
        title: 'How to develop a Design Language',
        link: 'https://xd.adobe.com/ideas/principles/web-design/how-to-develop-design-language/',
      },
      {
        title: 'Visual Design Language',
        link: 'https://www.smashingmagazine.com/2020/03/visual-design-language-building-blocks/',
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
        description: (
          <div className='space-y-4'>
            <p>
              Code components are the JavaScript components that engineers will pull into their project and interact
              with. They should be available for the specific frameworks utilized by your organization.
            </p>
          </div>
        ),
      },
      {
        title: 'Themability',
        description: (
          <div className='space-y-4'>
            <p>
              Theming is of one of the most important aspects of a component library. It allows components to be styled
              globally, in a single place. Themes should be maintained as a resource of the design system. Engineers can
              pull themes into their project allowing easy theme updates.
            </p>
            <p>
              If your design system utilizes an open source component library it&apos;s important it has a quality
              theming system that is easy to work with. It is also helpful if the theming system supports design tokens
              and adheres to the{' '}
              <a href='https://github.com/design-tokens/community-group'>official design token specification</a>. For
              example Chakra&apos;s theme is based on the{' '}
              <a href='https://system-ui.com/theme/'>System UI Theme Specification</a>, which adheres to the official
              design token specification.
            </p>
          </div>
        ),
      },
      {
        title: 'Styling system',
        description: (
          <div className='space-y-4'>
            <p>
              How components are styled is determined by the component library. Modern component libraries offer these 3
              styling solutions:
            </p>
            <ul className='space-y-2'>
              <li>1. Theme - Provides global styles to all components.</li>
              <li>
                2. Inline - Allows quick customizations for when a component needs to deviate from the theme. A common
                solution for inline styling is the <a href='https://theme-ui.com/sx-prop/'>sx prop</a>.
              </li>
              <li>
                3. Layout - Supports easily creating responsive layouts. Modern component libraries will offer a handful
                of components to assist with layout including: <a href='https://chakra-ui.com/docs/layout/box'>Box</a>,{' '}
                <a href='https://chakra-ui.com/docs/layout/flex'>Flex</a>,{' '}
                <a href='https://chakra-ui.com/docs/layout/grid'>Grid</a>, and{' '}
                <a href='https://chakra-ui.com/docs/layout/stack'>Stack</a>.
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: 'Accessibility',
        description: (
          <div className='space-y-4'>
            <p>
              A huge benefit provided by a component library is centralizing code problems. One common UI problem is
              making components accessible. Your design system should ensure the component library offers accessible
              components. This is a good selling point for adopting an open source component library like Chakra or MUI,
              as they&apos;ve already done the work to ensure their components are accessible.
            </p>
          </div>
        ),
      },
      {
        title: 'Developer experience',
        description: (
          <div className='space-y-4'>
            <p>
              Developer experience explains the interactions and feelings an engineer has when working with a code base.
              You should ensure the component library your design system offers incites a positive developer experience.
              This can be done by ensuring the tools the engineer requires are accessible, their workflow is quick and
              painless, and the features they expect are available.
            </p>
          </div>
        ),
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
      {
        title: 'Radix',
        link: 'https://www.radix-ui.com/',
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
        Design resources is a collection of resources that can be used during the design and development processes.
        Providing these resources in a centralized location makes it easier to find resources when needed, and helps
        establish the design system as the single source of truth.
      </p>
    ),
    features: [
      {
        title: 'UI kit',
        description: (
          <div className='space-y-4'>
            <p>
              A UI kit is a resource designers use in their design tool. It provides the same collection of components
              that engineers use when developing. Here is an example of a{' '}
              <a href='https://www.figma.com/community/file/971408767069651759'>Chakra UI kit</a>.
            </p>
          </div>
        ),
      },
      {
        title: 'Branding assets',
        description: (
          <div className='space-y-4'>
            <p>
              Common design resources designers and engineers reach for are branding assets like logos, fonts, icons,
              and stock imagery. Centralizing these assets as a resource in your design systems makes them more
              accessible to everyone in the organization.
            </p>
          </div>
        ),
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
      <div className='space-y-4'>
        <p>
          The documentation system is a centralized hub where anyone in the organization can gain access to the
          resources.
        </p>
        <p>
          Documentation is the key to a successful design system. It removes friction, creates excitement, and provides
          the information necessary to use the design system properly.
        </p>
      </div>
    ),
    features: [
      {
        title: 'Document information',
        description: (
          <div className='space-y-4'>
            <p>
              The main goal of the document system is to document information so that it is accessible to everyone in
              the organization. The information should explain what the design system is, and how to use it.
            </p>
          </div>
        ),
      },
      {
        title: 'Interactive components',
        description: (
          <div className='space-y-4'>
            <p>
              Rendering interactive components in the documentation system is helpful for everyone in the organization
              to see and use the components in isolation. This provides a way to test the functionality and ux of the
              components.
            </p>
          </div>
        ),
      },
      {
        title: 'Collect feedback',
        description: (
          <div className='space-y-4'>
            <p>
              It&apos;s important to collect feedback from the people using your design system. This is also a possible
              medium to collect feature requests, or maybe even bug requests.
            </p>
          </div>
        ),
      },
      {
        title: 'Roadmap',
        description: (
          <div className='space-y-4'>
            <p>
              The documentation system can also be used to display a roadmap of features planned for the design system.
              This will prevent the same requests being submitted multiple times, and help align strategy.
            </p>
          </div>
        ),
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
        Code infrastructure refers to the ecosystem that makes code available throughout an organization. If you decide
        to roll your own component library, or just provide a theme, you&apos;ll need a way for engineers to pull that
        code into their projects.
      </p>
    ),
    features: [
      {
        title: 'Monorepo',
        description: (
          <div className='space-y-4'>
            <p>
              A monorepo is a single repository where packages provided by your design system can be managed. For more
              information about monorepos and their benefits I highly recommend reading{' '}
              <a href='https://monorepo.tools/'>monorepo.tools</a>.
            </p>
          </div>
        ),
      },
      {
        title: 'CI/CD',
        description: (
          <div className='space-y-4'>
            <p>
              CI/CD is a crucial feature for any project. It enables a continuous method of software development where
              software is built, tested, and deployed. This iterative process helps reduce bugs and enables a faster
              release cycle.
            </p>
          </div>
        ),
      },
    ],
    tools: [
      {
        title: 'Nx',
        link: 'https://nx.dev/',
      },
      {
        title: 'Turborepo',
        link: 'https://turborepo.org/',
      },
      {
        title: 'CircleCI',
        link: 'https://circleci.com/',
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
      <div className='space-y-4'>
        <p>
          The governance system is the protocol for maintaining and updating the design system. Design systems are
          living artifacts and will grow and evolve over time.
        </p>
        <p>The governance system should answer questions like:</p>
        <ul className='list-disc pl-8'>
          <li>who maintains the design system?</li>
          <li>how do others contribute?</li>
          <li>how is quality assessed and assured?</li>
        </ul>
      </div>
    ),
    features: [
      {
        title: 'Governance model',
        description: (
          <div className='space-y-4'>
            <p>
              Before building a design system it&apos;s important to come up with a model which documents who owns it,
              and who can contribute. The{' '}
              <a href='https://medium.com/eightshapes-llc/team-models-for-scaling-a-design-system-2cf9d03be6a0'>
                three models defined by Nathan Curtis
              </a>{' '}
              are:
            </p>
            <ul className='space-y-2'>
              <li>
                Solitary - A single team produces the design system, but their efforts are focused primarily on their
                own needs.
              </li>
              <li>
                Centralized - A single team produces and supports the design system as a primary role of their job.
              </li>
              <li>Federated - Multiple product teams contribute to the design system in a collaborative effort.</li>
            </ul>
          </div>
        ),
      },
      {
        title: 'Contributing guidelines',
        description: (
          <div className='space-y-4'>
            <p>
              If your governance model allows for contributions, it&apos;s important to define how contributions are
              made and the process in which they are merged.
            </p>
          </div>
        ),
      },
    ],
    tools: [
      {
        title: 'GitHub contributing guidelines',
        link: 'https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors',
      },
    ],
    articles: [
      {
        title: 'Managing, Maintaining, and Governing',
        link: 'https://xd.adobe.com/ideas/principles/design-systems/managing-maintaining-governing-design-systems/',
      },
      {
        title: 'Team Models for Scaling a Design System',
        link: 'https://medium.com/eightshapes-llc/team-models-for-scaling-a-design-system-2cf9d03be6a0',
      },
      {
        title: 'Governance by design',
        link: 'https://rangle.io/blog/governance-by-design-building-successful-design-systems/',
      },
    ],
  },
]
