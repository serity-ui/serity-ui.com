import Heading from './heading/Heading'

interface Props {
  title: string
  description?: string
}

const Header = ({ title, description }: Props) => {
  return (
    <header className='flex flex-col mb-12 mt-16'>
      <Heading as='h1'>{title}</Heading>
      <p className='mt-4 text-lg text-slate-200'>{description}</p>
    </header>
  )
}

export default Header
