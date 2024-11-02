import LottieCard from "../lottie-card";
import LappyGuy from "@/lotties/LappyGuy";
import PencilDark from "@/lotties/PencilAnimationDark";
import PencilLight from "@/lotties/PencilAnimationLight";
import Writter from "@/lotties/Writter";
import gsap from "gsap";
import { useEffect } from "react";

const Section2 = () => {
    const tl =  gsap.timeline();
    useEffect(() => {
        // Animate each lottie-card
   
    const randomX = Math.floor(Math.random() * 100);
    const randomY = Math.floor(Math.random() * 100);
    
    tl.from(".lottie-card", {
        x: randomX,
        y: randomY,
        opacity: 0,
        duration: 1,
        stagger: 0.5

});

    }, [tl]); 

    return (
        <section className="section-2 p-10">
            <header className="section-2-header h-[8rem] w-full flex justify-center items-center flex-col gap-2 mt-8">
                <h2 className="capitalize text-3xl font-semibold">
                    elevate your productivity
                </h2>
                <small className="text-base">
                    capture your thoughts, organize your ideas, and streamline your work all in one place.
                </small>
            </header>

            <div className="main-outer w-full grid place-items-center">
                <div className="main-inner flex flex-col gap-8">
                    <section className="flex flex-col md:flex-row gap-8">
                        <LottieCard LottieComponent={LappyGuy} heading="Maximize Productivity" subtext="Elevate Your Note-Taking Experience with Our Versatile Notebook Feature. Personalize your notes, add multimedia content." />
                        <LottieCard LottieComponent={Writter} heading="Personalize Your Notes" subtext="Unlock the full potential of your note-taking journey with our customizable notebook, tailor your notes to your unique needs and preferences." />
                    </section>
                    <section className="flex flex-col md:flex-row gap-8">
                        <LottieCard LottieComponent={PencilDark} heading="Effortless Organization" subtext="Stay Organized and Focused with Our Intuitive Planner. Plan your tasks, set reminders, and manage your schedule with ease. Never miss a deadline or forget a crucial meeting again." />
                        <LottieCard LottieComponent={PencilLight} heading="Streamline Your Workflow" subtext="Experience the Ultimate in Note-Taking Flexibility with Our Versatile Notebook. Capture your ideas, organize your thoughts, and bring your projects to life with ease." />
                    </section>
                </div>
            </div>
        </section>
    );
}

export default Section2;
