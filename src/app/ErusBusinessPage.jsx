'use client';
import Header from'../components/common/Header';
 import HeroSection from'./HeroSection';
 import AdministrationSection from'./AdministrationSection';
 import WorkingSection from'./WorkingSection';
 import AdministratorSection from'./AdministratorSection';
 import PricingSection from'./PricingSection';
 import FAQSection from'./FAQSection';
 import Footer from './Footer';
 import AIAdministrationSection from './AIAdministrationSection';

export default function ErusBusinessPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        {/* <AdministrationSection /> */}
        <AIAdministrationSection/>
        <WorkingSection />
        <AdministratorSection />
        <PricingSection />
        <FAQSection />
        <Footer/>
      </main>
    </>
  )
}