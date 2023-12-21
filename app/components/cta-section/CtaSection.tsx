import Spacer from "../Spacer";
import Section from "../section/Section";
import CtaButton from "../cta-button/CtaButton";

const CtaSection: React.FC = () => {
  return (
    <Section name="CtaSection" bgColor="my-medium-blue">
      <Spacer size="x-large" />
      <div className="grid grid-cols-2 grid-rows-1 text-my-light-beige">
        <h2>Capture Your Special Moments</h2>
        <div className="flex flex-col gap-y-8">
          <p>
            I&apos;m Jill Thompson, your go-to freelance photographer for
            capturing life&apos;s most beautiful moments. From weddings and
            portraits to nature scenes, I&apos;m committed to creating images
            you&apos;ll treasure for a lifetime.
          </p>
          <CtaButton />
        </div>
      </div>
      <Spacer size="x-large" />
    </Section>
  );
};

export default CtaSection;
