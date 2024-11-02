import { Button } from "../ui/button"


const Section1 = () => {
    return (
        <section className="section-1 text-[#fefdf9] bg-[#756047] dark:bg-[#181818] w-full flex items-center p-4 justify-center flex-col md:flex-row">
            <div className="hero-text w-[45%] flex justify-center items-center flex-col mb-4">
                <h1 className=" font-medium text-4xl mb-4">
                    Discover the Power of Note-Taking with Our
                </h1>
                <h4 className="font-normal">
                    Effortlessly organize your thoughts, jot down ideas, and stay on top of your tasks with our cutting-edge note-taking application. Designed for maximum productivity and seamless user experience, our app is the ultimate solution for modern note-taking needs
                </h4>

                <Button className=" mt-4 text-black bg-yellow-300 dark:bg-yellow-400 dark:text-[#686767]">Try it Now</Button>
            </div>
            <div className="hero-image w-[45%] h-full">
                <img src="/hero.png" className="w-full h-full object-contain" alt="hero" />
            </div>

        </section>
    )
}

export default Section1
