import smartFitLogo from '../assets/logo.svg'

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col bg-zinc-950 text-white items-center justify-center">
      <img src={smartFitLogo} alt="" className='h-20 w-28' />
      <p>Todos os direitos reservados | Smart Fit &copy; - {currentYear}</p>
    </footer>
  )
}