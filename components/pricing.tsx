import { CardBody, CardContainer, CardItem } from "./3d-card";
import { CheckIcon } from "lucide-react";

const Pricing = () => {
  return (
    <section className="mt-20">
      <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Free Plan
              <h2 className="text-6xl">$0</h2>
            </CardItem>
            <CardItem
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Experience spaced repetition & neuroscience-backed coding lessons
              for free!
              <ul className="my-4 flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <CheckIcon /> Limited coding course access
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon /> Weekly spaced repetition quizzes
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon /> Hands-on coding projects
                </li>
              </ul>
            </CardItem>
            <div className="flex justify-between items-center mt-8">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Get Started Now
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:bg-black dark:border-[#E2CBFF] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Pro Plan
              <h2 className="text-6xl">$15</h2>
            </CardItem>
            <CardItem
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Unlock the full potential of neuroscience-driven coding education!
              <ul className="my-4 flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <CheckIcon /> Full coding course access
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon /> Personalized spaced repetition schedule
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon /> AI-powered coding assessments
                </li>
              </ul>
            </CardItem>
            <div className="flex justify-between items-center mt-8">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Get Started Now
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Enterprise Plan
              <h2 className="text-6xl">$49</h2>
            </CardItem>
            <CardItem
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Designed for businesses and teams to upskill their workforce!
              <ul className="my-4 flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <CheckIcon /> All pro features
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon /> Team management dashboard
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon /> Company-wide progress tracking
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon /> Custom training plans
                </li>
              </ul>
            </CardItem>
            <div className="flex justify-between items-center mt-8">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Get Started Now
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </section>
  );
};

export default Pricing;
