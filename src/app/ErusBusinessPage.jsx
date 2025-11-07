'use client';
import Header from'../components/common/Header';
 import HeroSection from'./HeroSection';
 import WorkingSection from'./WorkingSection';
 import AdministratorSection from'./AdministratorSection';
 import PricingSection from'./PricingSection';
 import FAQSection from'./FAQSection';
 import Footer from './Footer';
 import AIAdministrationSection from './AIAdministrationSection';

export default function ErusBusinessPage() {
  return (
    <div style={{ overflowX: 'hidden', width: '100%' }}>
      <Header />
      <main style={{ overflowX: 'hidden', width: '100%' }}>
        <HeroSection />
        {/* <AdministrationSection /> */}
        <AIAdministrationSection/>
        <WorkingSection />
        <AdministratorSection />
        <PricingSection />
        <FAQSection />
        <Footer/>
      </main>
    </div>
  )
}