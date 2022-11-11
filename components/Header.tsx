interface Props {
  title: string
  description?: string
}

const Header = ({ title, description }: Props) => {
  return (
    <header className='flex flex-col mb-12 mt-16'>
      <h1 className='text-3xl sm:text-4x1 font-extrabold text-slate-200 tracking-tight'>
        {title}
      </h1>
      <p className='mt-4 text-lg text-slate-300'>{description}</p>
    </header>
  )
}

export default Header
