import Logo from '../logo/Logo'
import SocialIcons from '../social-icons/SocialIcons'
import '../../../styles/koder-link.css'
import Link from 'next/link'

const Footer: React.FC = () => {
   return (
      <section
         id="footer"
         className="sticky bottom-0 overflow-x-clip bg-my-dark-blue"
      >
         <footer className="mx-auto flex max-w-7xl flex-col gap-y-40x6x80 px-[4vw] py-[8vw] 1450:px-0">
            <div className="flex flex-col items-center gap-[8vw] text-center text-my-light-beige 900:flex-row 900:justify-between">
               <div className="translate-x-[50.015px] 900:translate-x-0">
                  <Logo type="light" />
               </div>
               <ul className="flex flex-col gap-[4vw] 900:flex-row">
                  <li>
                     <Link href="/">Home</Link>
                  </li>
                  <li>
                     <Link href="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                     <Link href="/about-me">About Me</Link>
                  </li>
                  <li>
                     <Link href="/blog">Blog</Link>
                  </li>
               </ul>
               <SocialIcons />
            </div>
            <hr />
            <div className="flex flex-col justify-between gap-[4vw] text-center text-my-light-beige 900:flex-row">
               <a href="#">
                  <p className="text-para">
                     © 2023 Jill&apos;s Artistic Photography. All Rights
                     Reserved.
                  </p>
               </a>
               <a href="#">
                  <p className="text-para transition-all ">
                     Website by <span className="koder-link">Koder</span>
                  </p>
               </a>
            </div>
         </footer>
      </section>
   )
}

export default Footer
