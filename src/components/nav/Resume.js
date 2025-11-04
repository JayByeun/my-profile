import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Award, BookOpen, Briefcase } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
// Enum for section names
var Section;
(function (Section) {
    Section["experience"] = "Experience";
    Section["education"] = "Education";
    Section["skills"] = "Skills";
    Section["awards"] = "Awards";
})(Section || (Section = {}));
const SectionDetails = ({ icon: Icon, date, title, location, details, }) => {
    return (_jsxs("div", { className: "flex gap-3 items-start", children: [_jsx(Icon, { className: "text-white bg-rose-300 rounded-2xl w-9 h-9 p-2 shrink-0" }), _jsxs("div", { className: "flex flex-col gap-2", children: [date && (_jsx("span", { className: "text-sm font-bold text-rose-300 font-lato", children: date })), _jsx("span", { className: "text-xl font-bold font-lato", children: title }), _jsxs("div", { className: "flex flex-col gap-2", children: [_jsx("span", { className: "text-lg font-bold font-lato", children: location }), details && (_jsx("ul", { className: "font-lato font-light text-m list-disc pl-6 gap-2 flex flex-col", children: details.map((d) => (_jsx("li", { children: d }))) }))] })] })] }));
};
const SkillBar = ({ title, percentage }) => {
    return (_jsxs("div", { children: [_jsxs("div", { className: "flex justify-between text-sm font-medium mb-1", children: [_jsx("span", { className: "font-lato font-medium text-m", children: title }), _jsxs("span", { children: [percentage, "%"] })] }), _jsx(Progress, { value: percentage, className: "h-2" })] }));
};
const Resume = () => {
    const [activeSection, setActiveSection] = useState(null);
    // Create observers for each section
    const [eduRef, eduInView] = useInView({ threshold: 0.3 });
    const [expRef, expInView] = useInView({ threshold: 0.3 });
    const [skillsRef, skillsInView] = useInView({ threshold: 0.3 });
    const [awardsRef, awardsInView] = useInView({ threshold: 0.3 });
    useEffect(() => {
        if (eduInView) {
            setActiveSection(Section.education);
        }
        else if (expInView) {
            setActiveSection(Section.experience);
        }
        else if (skillsInView) {
            setActiveSection(Section.skills);
        }
        else {
            setActiveSection(Section.awards);
        }
    }, [eduInView, expInView, skillsInView, awardsInView]);
    // Scroll to section
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
    return (_jsx("section", { id: "resume", className: "min-h-screen flex justify-center px-6 lg:px-20", children: _jsxs("div", { className: "flex flex-row gap-8 py-10 md:py-20", children: [_jsx("aside", { className: "hidden md:flex md:w-1/4 sticky top-24 self-start", children: _jsx("ul", { className: "space-y-4", children: Object.values(Section).map((sec) => (_jsx("li", { onClick: () => scrollTo(sec.toLowerCase()), className: `cursor-pointer transition ${activeSection === sec
                                ? "text-rose-600 font-semibold"
                                : "text-gray-600"}`, children: activeSection === sec ? `⎯⎯ ${sec}` : sec }, sec))) }) }), _jsxs("div", { className: "md:w-3/4 space-y-24", children: [_jsxs("section", { id: "experience", ref: expRef, className: "flex flex-col min-h-[60vh] gap-4", children: [_jsx("h3", { className: "text-3xl font-bold mb-4", children: "Experience" }), _jsxs("div", { className: "flex flex-col gap-15", children: [_jsx(SectionDetails, { icon: Briefcase, date: "DEC 2021 - AUG 2025", title: "Software Engineer III", location: "Codesphere", details: [
                                                "Delivered a full-stack performance upgrade to a user-facing search service, updating search process to reduce file list generation time by 90%(from 2s to 0.2s).",
                                                "Implemented multi-profile CI/CD configurations, allowing users to deploy customizable Kubernates-based environments by selecting from multiple pipeline setup.",
                                                "Developed a CI stage status monitoring feature within the workspace dashboard, enabling users to visually track deployment status across stages.",
                                                "Led React migration from atomic design based lit elements.",
                                            ] }), _jsx(SectionDetails, { icon: Briefcase, date: "JAN 2016 - FEB 2018", title: "Project Manager", location: "Kakao Entertainment", details: [
                                                "Led the 2.0 update for iOS, Android and Web services, focusing on UX/UI Improvements to enhance user experience.",
                                                "Spearheaded a Webtoon recommendation system marketing campaign, leveraging characteristic database of each Webtoonon DAUMWEBTOON, with a focus on cartoon content and IP business growth.",
                                                "Led the design and implementation of a paid subscription plan for Webtoon services, including a platform update for iOS.",
                                            ] })] })] }), _jsxs("section", { id: "education", ref: eduRef, className: "flex flex-col min-h-[60vh] gap-4", children: [_jsx("h3", { className: "text-3xl font-bold mb-4", children: "Education" }), _jsxs("div", { className: "flex flex-col gap-15", children: [_jsx(SectionDetails, { icon: BookOpen, date: "MAR 2021 - AUG 2024", title: "BSc. Computer Science", location: "Hochschule der Medien Stuttgart, Germany" }), _jsx(SectionDetails, { icon: BookOpen, date: "SEP 2019 - OCT 2020", title: "BSc. Computer Science", location: "Karlsruhe Institute of Technology, Germany" }), _jsx(SectionDetails, { icon: BookOpen, date: "SEP 2014 - OCT 2015", title: "MA. in Education", location: "The University of Sheffield, UK" }), _jsx(SectionDetails, { icon: BookOpen, date: "MAR 2008 - FEB 2012", title: "BA. English Literature / Library Science", location: "Catholic University of Daegu, South Korea" })] })] }), _jsxs("section", { id: "skills", ref: skillsRef, className: "flex flex-col min-h-[60vh] gap-4", children: [_jsx("h3", { className: "text-3xl font-bold mb-4", children: "Skills" }), _jsxs("div", { className: "flex flex-col gap-10", children: [_jsxs("div", { className: "flex flex-col gap-5", children: [_jsx("span", { children: "Languages" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl", children: [_jsx(SkillBar, { title: "Typescript", percentage: 99 }), _jsx(SkillBar, { title: "Python", percentage: 90 }), _jsx(SkillBar, { title: "C#", percentage: 80 }), _jsx(SkillBar, { title: "C++", percentage: 80 }), _jsx(SkillBar, { title: "Java", percentage: 85 }), _jsx(SkillBar, { title: "SQL", percentage: 90 })] })] }), _jsx(Separator, {}), _jsxs("div", { className: "flex flex-col gap-5", children: [_jsx("span", { children: "Tools / Frameworks" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl", children: [_jsx(SkillBar, { title: "Node.Js", percentage: 99 }), _jsx(SkillBar, { title: "React", percentage: 99 }), _jsx(SkillBar, { title: "Restful API", percentage: 90 }), _jsx(SkillBar, { title: "Git", percentage: 99 }), _jsx(SkillBar, { title: "Kubernates", percentage: 80 }), _jsx(SkillBar, { title: "Grafana", percentage: 80 }), _jsx(SkillBar, { title: "Docker", percentage: 85 }), _jsx(SkillBar, { title: "Jenkins", percentage: 80 }), _jsx(SkillBar, { title: "MySQL", percentage: 85 }), _jsx(SkillBar, { title: "NoSQL", percentage: 99 })] })] })] })] }), _jsxs("section", { id: "awards", ref: awardsRef, className: "flex flex-col min-h-[60vh] gap-4", children: [_jsx("h3", { className: "text-3xl font-bold mb-4", children: "Awards" }), _jsx(SectionDetails, { icon: Award, date: "JUN 2013", title: "Korean Government Scholarship Program for Study Overseas (KGSP-SO)", location: "National Institute for International Education (NIIED), Republic of Korea", details: [
                                        "Prestigious scholarship awarded to outstanding international students, providing full financial support—including tuition, living stipend, airfare, and language training for graduate studies in Korea. Selected recipients undergo Korean language training followed by their academic program.",
                                    ] }), _jsx(SectionDetails, { icon: Award, date: "MAR 2008 - FEB 2012", title: "The most outstanding students", location: "Catholic University of Daegu, Replubic of Korea", details: ["Awarded for full 8 semesters"] })] })] })] }) }));
};
export default Resume;
