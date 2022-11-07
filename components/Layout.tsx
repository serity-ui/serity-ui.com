import Sidebar from './Sidebar'

const Layout = ({ children }: any) => {
  return (
    <div className='flex'>
      <Sidebar />
      <main className='bg-slate-900 flex w-0 flex-1 flex-col overflow-hidden px-12 py-10 text-white'>
        {children}
      </main>
    </div>
  )
}

export default Layout
