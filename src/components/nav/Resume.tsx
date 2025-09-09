import { JSX, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Award, BookOpen, Briefcase, Code } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

// Enum for section names
enum Section {
  experience = "Experience",
  education = "Education",
  skills = "Skills",
  awards = "Awards",
}

type SectionDetailsProps = {
  icon: React.ElementType;
  date?: string;
  title: string;
  location: string;
  details?: string[];
};

const SectionDetails = ({
  icon: Icon,
  date,
  title,
  location,
  details,
}: SectionDetailsProps) => {
  return (
    <div className="flex gap-3 items-start">
      <Icon className="text-white bg-rose-300 rounded-2xl w-9 h-9 p-2 shrink-0" />
      <div className="flex flex-col gap-2">
        {date && (
          <span className="text-sm font-bold text-rose-300 font-lato">
            {date}
          </span>
        )}
        <span className="text-xl font-bold font-lato">{title}</span>
        <div className="flex flex-col gap-2">
          <span className="text-lg font-bold font-lato">{location}</span>
          {details && (
            <ul className="font-lato font-light text-m list-disc pl-6 gap-2 flex flex-col">
              {details.map((d) => (
                <li>{d}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

type SkillBarProps = {
  title: string;
  percentage: number;
};

const SkillBar = ({ title, percentage }: SkillBarProps) => {
  return (
    <div>
      <div className="flex justify-between text-sm font-medium mb-1">
        <span className="font-lato font-medium text-m">{title}</span>
        <span>{percentage}%</span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  );
};

const Resume = () => {
  const [activeSection, setActiveSection] = useState<Section | null>(null);

  // Create observers for each section
  const [eduRef, eduInView] = useInView({ threshold: 0.3 });
  const [expRef, expInView] = useInView({ threshold: 0.3 });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.3 });
  const [awardsRef, awardsInView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (eduInView) setActiveSection(Section.education);
    else if (expInView) setActiveSection(Section.experience);
    else if (skillsInView) setActiveSection(Section.skills);
    else if (awardsInView) setActiveSection(Section.awards);
  }, [eduInView, expInView, skillsInView, awardsInView]);

  // Scroll to section
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="resume"
      className="min-h-screen flex justify-center pt-25 px-6 lg:px-20"
    >
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="md:w-1/4 sticky top-24 self-start">
          <ul className="space-y-4">
            {Object.values(Section).map((sec) => (
              <li
                key={sec}
                onClick={() => scrollTo(sec.toLowerCase())}
                className={`cursor-pointer transition ${
                  activeSection === sec
                    ? "text-rose-600 font-semibold"
                    : "text-gray-600"
                }`}
              >
                {activeSection === sec ? `⎯⎯ ${sec}` : sec}
              </li>
            ))}
          </ul>
        </aside>

        {/* Content */}
        <div className="md:w-3/4 space-y-24">
          <section
            id="experience"
            ref={expRef}
            className="flex flex-col min-h-[60vh] gap-4"
          >
            <h3 className="text-3xl font-bold mb-4">Experience</h3>
            <div className="flex flex-col gap-15">
              <SectionDetails
                icon={Briefcase}
                date="DEC 2021 - AUG 2025"
                title="Software Engineer III"
                location="Codesphere"
                details={[
                  "Delivered a full-stack performance upgrade to a user-facing search service, updating search process to reduce file list generation time by 90%(from 2s to 0.2s).",
                  "Implemented multi-profile CI/CD configurations, allowing users to deploy customizable Kubernates-based environments by selecting from multiple pipeline setup.",
                  "Developed a CI stage status monitoring feature within the workspace dashboard, enabling users to visually track deployment status across stages.",
                  "Led React migration from atomic design based lit elements.",
                ]}
              />
              <SectionDetails
                icon={Briefcase}
                date="JAN 2016 - FEB 2018"
                title="Project Manager"
                location="Kakao Entertainment"
                details={[
                  "Led the 2.0 update for iOS, Android and Web services, focusing on UX/UI Improvements to enhance user experience.",
                  "Spearheaded a Webtoon recommendation system marketing campaign, leveraging characteristic database of each Webtoonon DAUMWEBTOON, with a focus on cartoon content and IP business growth.",
                  "Led the design and implementation of a paid subscription plan for Webtoon services, including a platform update for iOS.",
                ]}
              />
            </div>
          </section>

          <section
            id="education"
            ref={eduRef}
            className="flex flex-col min-h-[60vh] gap-4"
          >
            <h3 className="text-3xl font-bold mb-4">Education</h3>
            <div className="flex flex-col gap-15">
              <SectionDetails
                icon={BookOpen}
                date="MAR 2021 - AUG 2024"
                title="BSc. Computer Science"
                location="Hochschule der Medien Stuttgart, Germany"
              />
              <SectionDetails
                icon={BookOpen}
                date="SEP 2019 - OCT 2020"
                title="BSc. Computer Science"
                location="Karlsruhe Institute of Technology, Germany"
              />
              <SectionDetails
                icon={BookOpen}
                date="SEP 2014 - OCT 2015"
                title="MA. in Education"
                location="The University of Sheffield, UK"
              />
              <SectionDetails
                icon={BookOpen}
                date="MAR 2008 - FEB 2012"
                title="BA. English Literature / Library Science"
                location="Catholic University of Daegu, South Korea"
              />
            </div>
          </section>

          <section
            id="skills"
            ref={skillsRef}
            className="flex flex-col min-h-[60vh] gap-4"
          >
            <h3 className="text-3xl font-bold mb-4">Skills</h3>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <span>Languages</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
                  <SkillBar title="Typescript" percentage={99} />
                  <SkillBar title="Python" percentage={90} />
                  <SkillBar title="C#" percentage={80} />
                  <SkillBar title="C++" percentage={80} />
                  <SkillBar title="Java" percentage={85} />
                  <SkillBar title="SQL" percentage={90} />
                </div>
              </div>
              <Separator />
              <div className="flex flex-col gap-5">
                <span>Tools / Frameworks</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
                  <SkillBar title="Node.Js" percentage={99} />
                  <SkillBar title="React" percentage={99} />
                  <SkillBar title="Restful API" percentage={90} />
                  <SkillBar title="Git" percentage={99} />
                  <SkillBar title="Kubernates" percentage={80} />
                  <SkillBar title="Grafana" percentage={80} />
                  <SkillBar title="Docker" percentage={85} />
                  <SkillBar title="Jenkins" percentage={80} />
                  <SkillBar title="MySQL" percentage={85} />
                  <SkillBar title="NoSQL" percentage={99} />
                </div>
              </div>
            </div>
          </section>

          <section
            id="awards"
            ref={awardsRef}
            className="flex flex-col min-h-[60vh] gap-4"
          >
            <h3 className="text-3xl font-bold mb-4">Awards</h3>
            <SectionDetails
              icon={Award}
              date="JUN 2013"
              title="Korean Government Scholarship Program for Study Overseas (KGSP-SO)"
              location="National Institute for International Education (NIIED), Republic of Korea"
              details={[
                "Prestigious scholarship awarded to outstanding international students, providing full financial support—including tuition, living stipend, airfare, and language training for graduate studies in Korea. Selected recipients undergo Korean language training followed by their academic program.",
              ]}
            />
            <SectionDetails
              icon={Award}
              date="MAR 2008 - FEB 2012"
              title="The most outstanding students"
              location="Catholic University of Daegu, Replubic of Korea"
              details={["Awarded for full 8 semesters"]}
            />
          </section>
        </div>
      </div>
    </section>
  );
};

export default Resume;
