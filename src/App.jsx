import { LoadingScreen } from "./assets/Components/LoadingScreen"
import { Navbar } from "./assets/Components/Navbar"
import { MobileMenu } from "./assets/Components/MobileMenu"
import { Home } from "./assets/Components/Sections/Home"
import { About } from "./assets/Components/Sections/About"
import "../src/index.css"
import { useState } from "react"
import "../src/App.css"
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    {!isLoaded && <LoadingScreen onComplete={() =>setIsLoaded(true)}/>}
      <div
      className={`min-h-screen transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}
      >

      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Home/>
      <About/>
    </div>
    </>
  )
}

export default App
