import CustomerSection from "./sections/customer/customer";
import DedicatedSection from "./sections/dedicated/dedicated";
import EmpowerSection from "./sections/empower/empower";
import HeroSection from "./sections/hero/hero";
import OathSection from "./sections/oath/oath";
import PowerUpSection from "./sections/power-up/power-up";
import SoldiersSection from "./sections/soldiers/soldiers";

const HomeScreen = () => {
  return (
    <main>
      <HeroSection />
      <EmpowerSection />
      <DedicatedSection />
      <PowerUpSection />
      <CustomerSection />
      <SoldiersSection/>
      <OathSection/>
    </main>
  );
};

export default HomeScreen;
