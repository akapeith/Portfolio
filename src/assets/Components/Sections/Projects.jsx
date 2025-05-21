import FadeinLeft from "../FadeInLeft" 

export const Projects = ()=>{
    return <section id="projects" className="min-h-screen flex items-center 
    justify-center py-20">
        <FadeinLeft>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400
            text-center bg-clip-text text-transparent">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-blue-500 hover:-translate-y-1
                hover:border-blue-500/30
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl  font-bold mb-2"> 🛒Fullstack E-commerce Store</h3>
                    <p className="text-gray-400 mb-4">A fully functional eCommerce platform that allows users to browse 
                        products, add them to the cart, and complete 
                        purchases using integrated payment gateways. Admins can manage products, 
                        view orders, and monitor user activity from a simple dashboard.</p>
                        <div>
                            {["ReactJS","NodeJS", "SQL"].map((tech,key)=>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 
                            rounded-full 
                            text-sm hover:bg-blue-500/20 
                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all cursor-pointer">
                                {tech}
                            </span>
                            ))}
                        </div>
                </div>
                      <div className="p-6 rounded-xl border border-blue-500 hover:-translate-y-1
                hover:border-blue-500/30 
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl  font-bold mb-2"> 🍽️Restaurant Menu Web App</h3>
                    <p className="text-gray-400 mb-4">A modern, mobile-friendly restaurant menu 
                        website where customers can view categories, dishes, prices, and details.
                         Includes an optional QR-code generator for digital table menus and an 
                         admin panel to manage items.</p>
                        <div>
                            {["React Native","SQL", "qrcode.react"].map((tech,key)=>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 
                            rounded-full 
                            text-sm hover:bg-blue-500/20 
                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all cursor-pointer">
                                {tech}
                            </span>
                            ))}
                        </div>
                </div>
                      <div className="p-6 rounded-xl border border-blue-500 hover:-translate-y-1
                hover:border-blue-500/30 
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl  font-bold mb-2">💼Portfolio websites</h3>
                    <p className="text-gray-400 mb-4">A sleek, responsive personal or business portfolio
                         website designed to showcase projects, skills, services, and contact details.
                          Ideal for freelancers, developers, designers, or agencies to present their 
                          work and attract potential clients.</p>
                        <div>
                            {["React","TailwindCSS"].map((tech,key)=>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 
                            rounded-full 
                            text-sm hover:bg-blue-500/20 
                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all cursor-pointer">
                                {tech}
                            </span>
                            ))}
                        </div>
                </div>
                          <div className="p-6 rounded-xl border border-blue-500 hover:-translate-y-1
                hover:border-blue-500/30 
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl  font-bold mb-2">✅ Task Management App</h3>
                    <p className="text-gray-400 mb-4">A sleek and responsive task management application where 
                        users can create, update, organize, and delete their daily tasks. The app allows 
                        categorizing tasks, setting deadlines, and marking them as complete. It helps users 
                        stay organized and boost productivity with an intuitive interface and smooth user 
                        experience.</p>
                        <div>
                            {["ReactNative","Firebase"].map((tech,key)=>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 
                            rounded-full 
                            text-sm hover:bg-blue-500/20 
                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all cursor-pointer">
                                {tech}
                            </span>
                            ))}
                        </div>
                </div>
            </div>
        </div>
        </FadeinLeft>
    </section>
}