import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Company from './pages/Company'
import Contact from './pages/Contact'
import Blogs from './pages/Blogs'
import BlogPost from './pages/BlogPost'
import PowerFactorCorrection from './pages/PowerFactorCorrection'
import SE1000MCC from './pages/SE1000MCC'
import SE3000Switchboards from './pages/SE3000Switchboards'
import SE200OilWell from './pages/SE200OilWell'
import SE200ESP from './pages/SE200ESP'
import SE200PCP from './pages/SE200PCP'
import SE200ArtificialLift from './pages/SE200ArtificialLift'
import SE200GasCompressor from './pages/SE200GasCompressor'
import SE200Industrial from './pages/SE200Industrial'
import SE200AutomatedPump from './pages/SE200AutomatedPump'
import SE200PumpProcess from './pages/SE200PumpProcess'
import SE200ControlSolutions from './pages/SE200ControlSolutions'
import VFDPackages from './pages/VFDPackages'
import LowVoltageVFD from './pages/LowVoltageVFD'
import CFW11 from './pages/CFW11'
import CFW100 from './pages/CFW100'
import CFW320 from './pages/CFW320'
import CFW500 from './pages/CFW500'
import CFW501 from './pages/CFW501'
import MediumVoltageVFD from './pages/MediumVoltageVFD'
import MVW01 from './pages/MVW01'
import MVW3000 from './pages/MVW3000'
import MotorDatasheets from './pages/MotorDatasheets'
import ReactorDatasheets from './pages/ReactorDatasheets'
import HarmonicFilters from './pages/HarmonicFilters'
import SineFilters from './pages/SineFilters'
import DvdtFilters from './pages/DvdtFilters'
import CFW11Datasheets from './pages/CFW11Datasheets'
import CFW100Datasheets from './pages/CFW100Datasheets'
import CFW300Datasheets from './pages/CFW300Datasheets'
import CFW500Datasheets from './pages/CFW500Datasheets'
import SoftStarterDatasheets from './pages/SoftStarterDatasheets'
import ElectricalServices from './pages/ElectricalServices'
import InfraredSurveys from './pages/InfraredSurveys'
import VfdStartupCommissioning from './pages/VfdStartupCommissioning'
import VfdPreventativeMaintenance from './pages/VfdPreventativeMaintenance'
import PowerQualityAssessments from './pages/PowerQualityAssessments'
import EnergySavingAudits from './pages/EnergySavingAudits'
import SE500MotorStarter from './pages/SE500MotorStarter'
import Support from './pages/Support'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/electrical-services" element={<ElectricalServices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/power-factor-correction" element={<PowerFactorCorrection />} />
            <Route path="/se1000-pds-motor-control-center" element={<SE1000MCC />} />
            <Route path="/se3000-switchboards" element={<SE3000Switchboards />} />
            <Route path="/package-solutions" element={<VFDPackages />} />
            <Route path="/se200-oil-well-drive" element={<SE200OilWell />} />
            <Route path="/se200-esp-drive" element={<SE200ESP />} />
            <Route path="/se200-pcp-pump-drive" element={<SE200PCP />} />
            <Route path="/se200-artificial-lift-controller-drive" element={<SE200ArtificialLift />} />
            <Route path="/se200-gas-compressor-drive" element={<SE200GasCompressor />} />
            <Route path="/se200-industrial-drive" element={<SE200Industrial />} />
            <Route path="/se200-automated-pump-drive" element={<SE200AutomatedPump />} />
            <Route path="/se200-pump-process-drive" element={<SE200PumpProcess />} />
            <Route path="/se200-control-solutions" element={<SE200ControlSolutions />} />
            <Route path="/low-voltage-vfd" element={<LowVoltageVFD />} />
            <Route path="/cfw11" element={<CFW11 />} />
            <Route path="/cfw100" element={<CFW100 />} />
            <Route path="/cfw320" element={<CFW320 />} />
            <Route path="/cfw500" element={<CFW500 />} />
            <Route path="/cfw501" element={<CFW501 />} />
            <Route path="/medium-voltage-vfd" element={<MediumVoltageVFD />} />
            <Route path="/mvw01" element={<MVW01 />} />
            <Route path="/mvw3000" element={<MVW3000 />} />
            <Route path="/motor-datasheets" element={<MotorDatasheets />} />
            <Route path="/reactor-datasheets" element={<ReactorDatasheets />} />
            <Route path="/harmonic-filters" element={<HarmonicFilters />} />
            <Route path="/sine-filters" element={<SineFilters />} />
            <Route path="/dvdt-filters" element={<DvdtFilters />} />
            <Route path="/cfw11-datasheets" element={<CFW11Datasheets />} />
            <Route path="/cfw100-datasheets" element={<CFW100Datasheets />} />
            <Route path="/cfw300-datasheets" element={<CFW300Datasheets />} />
            <Route path="/cfw500-datasheets" element={<CFW500Datasheets />} />
            <Route path="/soft-starter-datasheets" element={<SoftStarterDatasheets />} />
            <Route path="/infrared-surveys" element={<InfraredSurveys />} />
            <Route path="/vfd-startup-commissioning" element={<VfdStartupCommissioning />} />
            <Route path="/vfd-preventative-maintenance" element={<VfdPreventativeMaintenance />} />
            <Route path="/power-quality-assessments" element={<PowerQualityAssessments />} />
            <Route path="/energy-saving-audits" element={<EnergySavingAudits />} />
            <Route path="/se500-motor-starter" element={<SE500MotorStarter />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
