import Sidebar from './Sidebar'

const Layout = ({ children }: any) => {
  return (
    <div className='overflow-hidden bg-slate-900 '>
      <div className='max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8'>
        <Sidebar />
        <div className='lg:pl-[19.5rem] '>
          <main className='max-w-3xl mx-auto relative z-20 flex flex-col overflow-hidden px-12 py-10  xl:max-w-none text-white'>
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}

export default Layout
