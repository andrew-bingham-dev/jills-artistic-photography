import Spacer from '../Spacer'
import Section from '../section/Section'
import Logo from '../logo/Logo'
import SocialIcons from '../social-icons/SocialIcons'

const Footer: React.FC = () => {
   return (
      <Section name="Footer" bgColor="my-dark-blue">
         <div className="gap-y-40x6x80 flex flex-col px-[4vw] py-[8vw] 1450:px-0">
            <div className="flex flex-col items-center gap-[8vw] text-center text-my-light-beige 900:flex-row 900:justify-between">
               <div className="translate-x-[50.015px] 900:translate-x-0">
                  <Logo type="light" />
               </div>
               <ul className="flex flex-col gap-[4vw] 900:flex-row">
                  <li>Home</li>
                  <li>Portfolio</li>
                  <li>About Me</li>
                  <li>Blog</li>
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
                  <p className="text-para">Website by Koder</p>
               </a>
            </div>
         </div>
      </Section>
   )
}

export default Footer
