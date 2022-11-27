import Heading from './heading/Heading'
import Text from './text/Text'

interface Props {
  title: string
  description?: string
}

const Header = ({ title, description }: Props) => {
  return (
    <header className='flex flex-col mb-8 mt-16'>
      <Heading as='h1'>{title}</Heading>
      <Text className='mt-4'>{description}</Text>
    </header>
  )
}

export default Header
