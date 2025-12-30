import { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ShowcaseHero from "../components/showcase/ShowcaseHero";
import EventRecap from "../components/showcase/EventRecap";
import WinningProjects from "../components/showcase/WinningProjects";
import Testimonials from "../components/showcase/Testimonials";
import LessonsLearned from "../components/showcase/LessonsLearned";
import BridgeTo2026 from "../components/showcase/BridgeTo2026";

export const metadata: Metadata = {
  title: "2025 Showcase | TyphoonHacks",
  description: "Look back at our 2025 Game Jam - where the TyphoonHacks organizing team started. See the winning projects and participant testimonials.",
};

export default function ShowcasePage() {
  return (
    <>
      <Navigation />
      <main>
        <ShowcaseHero />
        <EventRecap />
        <WinningProjects />
        <Testimonials />
        <LessonsLearned />
        <BridgeTo2026 />
      </main>
      <Footer />
    </>
  );
}
