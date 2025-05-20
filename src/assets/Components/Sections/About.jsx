import FadeInRight from "../FadeInRight";
export const About = () =>{

    const frontEndSkills = ["ReactJS", "React Native", "TailWindCSS"];
    const backEndSkills = ["MongoDB", "SQL", "NodeJS"];

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <FadeInRight>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400
            text-center bg-clip-text text-transparent">About Me</h2>
            <div className="rounded-xl p-8 border-blue-500 border hover:-translate-y-1 
            transition-all">
                <p className="text-gray-300 mb-6">I'm a full-stack developer passionate about 
                    building responsive and user-friendly web and mobile experiences. 
                    With a strong focus on clean design and efficient code, 
                    I enjoy turning ideas into real, functional products that people love to 
                    use.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                        {frontEndSkills.map((tech, key) =>(
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 
                            rounded-full 
                            text-sm hover:bg-blue-500/20 
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition cursor-pointer">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                        {backEndSkills.map((tech, key) =>(
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 
                            rounded-full 
                            text-sm hover:bg-blue-500/20 
                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition cursor-pointer">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-blue-500 border hover:-translate-y-1
                transition-all">
                    <h3 className="text-xl font-bold mb-4"> 🎓Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-3">
                        <li>
                            <strong> Pursuing B.S. Degree in Computer Science</strong> at IUL
                        </li>
                        <li>
                            Relevant CourseWork: Data Structures, Web Development, 
                            Mobile Apps Development
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-blue-500 border hover:-translate-y-1
                transition-all">
                    <h3 className="text-xl font-bold mb-4"> 🏢Work Experience</h3>
                    <div className="space-y-4 text-gray-300">
                        <h4 className="bold">Freelance (2024-Present)</h4>
                        <p>Developed and maintained mobile apps for local businesses and portfolio sites for them</p>

                    </div>
                </div>


            </div>
        </div>
        </FadeInRight>
    </section>
} 