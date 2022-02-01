import { FC } from 'react'
import { MdAddCircle, MdArticle, MdConstruction } from 'react-icons/md'

import { featureDisclaimer, features } from '~/data'
import { Feature, FeatureFeature, Resource } from '~/types'

import { IconButton } from './icon-button'

export const Features: FC = () => {
  return (
    <section className='space-y-32 bg-dark py-32'>
      <div className='container'>
        <h1 className='mb-16'>Features of a design system</h1>
        <FeaturesNav features={features} />
      </div>
      <FeatureDisclaimer />
      <div className='container space-y-32'>
        {features.map((feature) => (
          <FeatureInfo key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  )
}

const FeatureDisclaimer: FC = () => {
  return (
    <article className='container space-y-4 rounded-md bg-purp p-16 shadow-lg'>
      <h2>{featureDisclaimer.title}</h2>
      <p>{featureDisclaimer.description}</p>
    </article>
  )
}

const FeaturesNav: FC<{ features: Feature[] }> = ({ features }) => {
  return (
    <nav className='grid grid-cols-2 gap-8'>
      {features.map((feature) => (
        <IconButton key={feature.id} icon={feature.icon} link={`#${feature.id}`}>
          {feature.title}
        </IconButton>
      ))}
    </nav>
  )
}

const FeatureInfo: FC<{ feature: Feature }> = ({ feature }) => {
  return (
    <article id={feature.id} className='space-y-8'>
      <FeatureHeader feature={feature} />
      <div className='flex space-x-8'>
        <div className='flex-1 space-y-16'>
          <span>{feature.description}</span>
          <div className='space-y-4'>
            <h2>Features</h2>
            <FeatureFeatureList featurefeatures={feature.features} />
          </div>
        </div>
        <div className='flex-1 space-y-16'>
          {feature.tools && (
            <div className='space-y-4'>
              <h2>Tools</h2>
              <FeatureResourceList resources={feature.tools} variant='tools' />
            </div>
          )}
          {feature.articles && (
            <div className='space-y-4'>
              <h2>Articles</h2>
              <FeatureResourceList resources={feature.articles} variant='articles' />
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

const FeatureHeader: FC<{ feature: Feature }> = ({ feature }) => {
  const handleFeatureHeaderClick = () => {
    window.location.hash = `#${feature.id}`
  }

  return (
    <button
      className='flex w-full items-center rounded-md border-2 border-gold p-3 hover:bg-purp'
      onClick={handleFeatureHeaderClick}
    >
      <div className='flex h-10 w-10 items-center justify-center text-2xl'>{feature.icon}</div>
      <p className=' mt-1 text-xl font-medium'>{feature.title}</p>
    </button>
  )
}

const FeatureResourceList: FC<{ resources: Resource[]; variant: 'tools' | 'articles' }> = ({ resources, variant }) => {
  return (
    <ul className='space-y-4'>
      {resources.map((resource) => (
        <li key={resource.title}>
          <IconButton
            icon={variant === 'tools' ? <MdConstruction /> : <MdArticle />}
            link={resource.link}
            variant='small-n-light'
            openLinkNewTab
          >
            {resource.title}
          </IconButton>
        </li>
      ))}
    </ul>
  )
}

const FeatureFeatureList: FC<{ featurefeatures: FeatureFeature[] }> = ({ featurefeatures }) => {
  const handleFeatureFeatureClick = () => {
    alert('show modal')
  }

  return (
    <ul className='space-y-4'>
      {featurefeatures.map((featurefeature) => (
        <li key={featurefeature.title}>
          <button className='flex items-center space-x-2' onClick={handleFeatureFeatureClick}>
            <span>
              <MdAddCircle />
            </span>
            <p className='font-medium'>{featurefeature.title}</p>
          </button>
        </li>
      ))}
    </ul>
  )
}