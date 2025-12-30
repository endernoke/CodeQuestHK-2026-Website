import { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PartnersHero from "../components/partners/PartnersHero";
import WhyPartner from "../components/partners/WhyPartner";
import SponsorshipTiers from "../components/partners/SponsorshipTiers";
import CurrentPartners from "../components/partners/CurrentPartners";
import ProblemStatementPartnership from "../components/partners/ProblemStatementPartnership";
import ContactForm from "../components/partners/ContactForm";
import PartnerFAQ from "../components/partners/PartnerFAQ";

export const metadata: Metadata = {
  title: "Partner With Us | TyphoonHacks 2026",
  description: "Join Hong Kong's most ambitious student hackathon as a sponsor or partner. Access top talent, gain brand visibility, and support STEM education.",
};

export default function PartnersPage() {
  return (
    <>
      <Navigation />
      <main>
        <PartnersHero />
        <WhyPartner />
        <SponsorshipTiers />
        <CurrentPartners />
        <ProblemStatementPartnership />
        <ContactForm />
        <PartnerFAQ />
      </main>
      <Footer />
    </>
  );
}
