

import Navbar from "@/components/Home/Navbar"
import Section1 from "@/components/Home/Section1"
import Section2 from "@/components/Home/Section2"
import Section3 from "@/components/Home/Section3"

const Home = () => {
  return (
    <div className="dark:text-red dark:bg-black w-screen h-screen overflow-y-auto flex flex-col">

<Navbar />
<Section1 />
<Section2 />
<Section3 />
    </div>
  )
}

export default Home
