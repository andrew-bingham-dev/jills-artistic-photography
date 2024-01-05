import Section from '../components/section/Section'
import Attribute from './Attribute'

const AttributesSection = () => {
   return (
      <Section name="AttributesSection" bgColor="my-light-blue-gradient">
         <div className="grid grid-cols-1 gap-[8vw] px-[4vw] py-[8vw] 700:grid-cols-2 1450:px-0">
            <Attribute
               animDelay={0.2}
               iconUrl="/svg/Heart.svg"
               heading="My Passion"
               description={[
                  "Photography isn't just my job; it's my calling. From the first time I held a camera, I knew this was how I wanted to communicate with the world. There's a certain kind of magic in freezing a fleeting moment and making it last forever, don't you agree?",
               ]}
            />
            <Attribute
               animDelay={0.4}
               iconUrl="/svg/Camera.svg"
               heading="My Skills"
               description={[
                  "Years of experience have sharpened my skills, but every shoot is a new adventure. Whether I'm snapping candid shots at a bustling wedding or capturing the serene beauty of nature, my aim is always the same: to take photos that do more than just document an event. I want my images to speak, to feel, and to be alive. My focus on composition, lighting, and mood ensures that every photo is a piece of art.",
               ]}
            />
            <Attribute
               animDelay={0.6}
               iconUrl="/svg/Rating Circled.svg"
               heading="My Experience"
               description={[
                  "I've been fortunate enough to work on a variety of projects, from intimate family gatherings to corporate events. My portfolio is as diverse as my interests, but there's one thing that ties all my work together: a deep-rooted passion for storytelling. I've received training from some of the best in the industry, and I never stop learning. Every client I work with teaches me something new, adding another layer to my artistic style.",
               ]}
            />
            <Attribute
               animDelay={0.8}
               iconUrl="/svg/Handshake.svg"
               heading="Let's Make Memories Together"
               description={[
                  "So, if you're looking for a photographer who is as invested in capturing your special moments as you are, let's talk. I promise to pour all my creativity, expertise, and care into delivering pictures that you'll treasure forever. Let's make some beautiful memories together, shall we?",
               ]}
            />
         </div>
      </Section>
   )
}

export default AttributesSection
