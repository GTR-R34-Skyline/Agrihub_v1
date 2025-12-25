import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import WhatIsAgriHub from "@/components/landing/WhatIsAgriHub";
import WhoIsItFor from "@/components/landing/WhoIsItFor";
import KeyFeatures from "@/components/landing/KeyFeatures";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import DownloadSection from "@/components/landing/DownloadSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AgriHub – A Smarter Way to Buy & Sell Agricultural Products</title>
        <meta 
          name="description" 
          content="AgriHub connects farmers and buyers directly through a transparent digital marketplace. Download the app to start buying or selling fresh agricultural products today." 
        />
        <meta name="keywords" content="agriculture, marketplace, farmers, buyers, fresh produce, farm products, AgriHub" />
        <meta property="og:title" content="AgriHub – Agricultural Marketplace App" />
        <meta property="og:description" content="Connect directly with farmers and buyers. Download the AgriHub app today." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://agrihub.app" />
      </Helmet>

      <main>
        <Navbar />
        <Hero />
        <div id="about">
          <WhatIsAgriHub />
        </div>
        <WhoIsItFor />
        <div id="features">
          <KeyFeatures />
        </div>
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <DownloadSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
