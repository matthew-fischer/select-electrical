import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Company from './pages/Company'
import Services from './pages/Services'
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
import LowVoltageVFD from './pages/LowVoltageVFD'
import CFW11 from './pages/CFW11'
import CFW100 from './pages/CFW100'
import CFW300 from './pages/CFW300'
import CFW500 from './pages/CFW500'
import CFW700 from './pages/CFW700'
import CFW701 from './pages/CFW701'
import CFW501 from './pages/CFW501'
import MediumVoltageVFD from './pages/MediumVoltageVFD'
import MVW01 from './pages/MVW01'
import MVW3000 from './pages/MVW3000'

export default function App() {
  return (
    <BrowserRouter basename="/select-electrical">
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/power-factor-correction" element={<PowerFactorCorrection />} />
            <Route path="/se1000-pds-motor-control-center" element={<SE1000MCC />} />
            <Route path="/se3000-switchboards" element={<SE3000Switchboards />} />
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
            <Route path="/cfw300" element={<CFW300 />} />
            <Route path="/cfw500" element={<CFW500 />} />
            <Route path="/cfw700" element={<CFW700 />} />
            <Route path="/cfw701" element={<CFW701 />} />
            <Route path="/cfw501" element={<CFW501 />} />
            <Route path="/medium-voltage-vfd" element={<MediumVoltageVFD />} />
            <Route path="/mvw01" element={<MVW01 />} />
            <Route path="/mvw3000" element={<MVW3000 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
