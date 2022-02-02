import { FC, useMemo, useState } from 'react'
import { MdAddCircle, MdArrowRightAlt, MdArticle, MdClose, MdConstruction } from 'react-icons/md'
import { useEventListener } from 'usehooks-ts'

import { Dialog } from '@headlessui/react'

import { featureDisclaimer, features } from '~/data'
import { Feature, FeatureFeature, Resource } from '~/types'

import { IconButton } from './icon-button'

export const Features: FC = () => {
  return (
    <section className='space-y-16 bg-dark py-16 md:space-y-32 md:py-32'>
      <div className='container'>
        <h1 className='mb-8 md:mb-16'>Features of a design system</h1>
        <FeaturesNav features={features} />
      </div>
      <FeatureDisclaimer />
      <div className='container space-y-16 md:space-y-32'>
        {features.map((feature) => (
          <FeatureInfo key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  )
}

const FeatureDisclaimer: FC = () => {
  return (
    <article className='container w-4/5 space-y-4 rounded-md bg-purp p-8 shadow-lg md:w-full md:p-16'>
      <h2>{featureDisclaimer.title}</h2>
      <p>{featureDisclaimer.description}</p>
    </article>
  )
}

const FeaturesNav: FC<{ features: Feature[] }> = ({ features }) => {
  return (
    <nav className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8'>
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
    <article id={feature.id} className='space-y-4 md:space-y-8'>
      <FeatureHeader feature={feature} />
      <div className='flex flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0'>
        <div className='flex-1 space-y-8 md:space-y-16'>
          <span>{feature.description}</span>
          <div className='space-y-4'>
            <h2>Features</h2>
            <FeatureFeatureList featureFeatures={feature.features} />
          </div>
        </div>
        <div className='flex-1 space-y-8 md:space-y-16'>
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
      <div className='flex h-10 w-10 items-center justify-center text-2xl text-white'>{feature.icon}</div>
      <h1 className=' mt-1 text-xl font-medium'>{feature.title}</h1>
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

const FeatureFeatureList: FC<{ featureFeatures: FeatureFeature[] }> = ({ featureFeatures }) => {
  const [selectedFeatureFeature, setSelectedFeatureFeature] = useState<FeatureFeature | null>(null)

  const { previousFeatureFeature, nextFeatureFeature } = useMemo<{
    previousFeatureFeature: FeatureFeature | null
    nextFeatureFeature: FeatureFeature | null
  }>(() => {
    if (!selectedFeatureFeature) return { previousFeatureFeature: null, nextFeatureFeature: null }

    const selectedFeatureFeatureIndex = featureFeatures.indexOf(selectedFeatureFeature)

    const previousFeatureFeature =
      selectedFeatureFeatureIndex === 0 ? null : featureFeatures[selectedFeatureFeatureIndex - 1]

    const nextFeatureFeature =
      selectedFeatureFeatureIndex === featureFeatures.length ? null : featureFeatures[selectedFeatureFeatureIndex + 1]

    return { previousFeatureFeature, nextFeatureFeature }
  }, [featureFeatures, selectedFeatureFeature])

  const handleFeatureFeatureClick = (featureFeature: FeatureFeature) => {
    setSelectedFeatureFeature(featureFeature)
  }

  const handlePreviousFeatureFeatureClick = () => {
    setSelectedFeatureFeature(previousFeatureFeature)
  }
  const handleNextFeatureFeatureClick = () => {
    setSelectedFeatureFeature(nextFeatureFeature)
  }

  const handleDialogCloseClick = () => {
    setSelectedFeatureFeature(null)
  }

  const handleKeyPress = (event: KeyboardEvent) => {
    if (Boolean(selectedFeatureFeature)) {
      if (event.key === 'ArrowRight' && nextFeatureFeature) setSelectedFeatureFeature(nextFeatureFeature)
      else if (event.key === 'ArrowLeft' && previousFeatureFeature) setSelectedFeatureFeature(previousFeatureFeature)
    }
  }

  useEventListener('keyup', handleKeyPress)

  return (
    <>
      <ul className='space-y-4'>
        {featureFeatures.map((featureFeature) => (
          <li key={featureFeature.title}>
            <button className='flex items-center space-x-2' onClick={() => handleFeatureFeatureClick(featureFeature)}>
              <span>
                <MdAddCircle />
              </span>
              <p className='font-medium'>{featureFeature.title}</p>
            </button>
          </li>
        ))}
      </ul>

      <Dialog
        open={Boolean(selectedFeatureFeature)}
        onClose={handleDialogCloseClick}
        className='fixed inset-0 z-10 overflow-y-auto'
      >
        <Dialog.Overlay className='fixed inset-0 bg-dark opacity-50' />
        <div className='flex min-h-screen items-center justify-center'>
          <div className='relative mx-8 w-full max-w-2xl space-y-8 rounded-md bg-light p-8'>
            <div className='flex items-center justify-between'>
              <Dialog.Title className='text-dark'>{selectedFeatureFeature?.title}</Dialog.Title>
              <button
                className='flex h-8 w-8 items-center justify-center rounded-full bg-medium bg-opacity-20 text-dark text-opacity-50 focus:text-opacity-100 hover:bg-opacity-40 hover:text-opacity-100'
                onClick={handleDialogCloseClick}
              >
                <MdClose />
              </button>
            </div>
            <Dialog.Description as='div' className='text-dark'>
              {selectedFeatureFeature?.description}
            </Dialog.Description>

            <div className='flex justify-between'>
              <div>
                {previousFeatureFeature && (
                  <button
                    className='flex items-center space-x-2 rounded-md bg-medium bg-opacity-20 p-2 text-sm font-medium text-dark hover:bg-opacity-40'
                    onClick={handlePreviousFeatureFeatureClick}
                  >
                    <div className='hidden items-center md:flex'>
                      [<MdArrowRightAlt className='rotate-180' />]
                    </div>
                    <span>{previousFeatureFeature.title}</span>
                  </button>
                )}
              </div>

              {nextFeatureFeature && (
                <button
                  className='flex items-center space-x-2 rounded-md bg-medium bg-opacity-20 p-2 text-sm font-medium text-dark hover:bg-opacity-40'
                  onClick={handleNextFeatureFeatureClick}
                >
                  <span>{nextFeatureFeature.title}</span>
                  <span className='hidden items-center md:flex'>
                    [<MdArrowRightAlt />]
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </Dialog>
    </>
  )
}
