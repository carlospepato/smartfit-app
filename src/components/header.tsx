import smartFitLogo from '../assets/logo.svg'

export function Header() {
  return (
    <header className="bg-zinc-950 text-white flex items-center justify-center">
      <img src={smartFitLogo} alt="" className='h-28 w-28' />
    </header>
  )
}