
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
 
  
} from "react-router-dom";
import { useState, Suspense, lazy } from 'react';

import Spinner from "./Components/Spinner/Spinner";
import './style.css';

const Loginpage = lazy(() => import('./Pages/Loginpage/Loginpage'));
const F404 = lazy(() => import('./Pages/F404/F404'));

const Studentdashboard = lazy(() => import('./Pages/Studentdashboard/Studentdashboard'));
const Facultydashboard = lazy(() => import('./Pages/Facultydashboard/Facultydashboard'));
const Attendencedashboard = lazy(() => import('./Pages/Attendencedashboard/Attendencedashboard'));
const Transportdashboard = lazy(() => import('./Pages/Transportdashboard/Transportdashboard'));


// student components
const Mydetails = lazy(() => import('./Pages/Mydetails/Mydetails'));
const Mentorform = lazy(() => import('./Pages/Mentorform/Mentorform'));
const Achivements = lazy(() => import('./Pages/Achivements/Achivements'));
const Feedetails = lazy(() => import('./Pages/Feedetails/Feedetails'));
const Materials = lazy(() => import('./Pages/Materials/Materials'));
const Attendence = lazy(() => import('./Pages/Attendence/Attendence'));
const Results = lazy(() => import('./Pages/Results/Results'));

// faculty components
const Award = lazy(() => import('./Facultycomponents/Award/Award'));
const Experience = lazy(() => import('./Facultycomponents/Experience/Experience'));
const Fdp = lazy(() => import('./Facultycomponents/Fdp/Fdp'));
const Funding = lazy(() => import('./Facultycomponents/Funding/Funding'));
const Manageprofile = lazy(() => import('./Facultycomponents/Manageprofile/Manageprofile'));
const Membership = lazy(() => import('./Facultycomponents/Membership/Membership'));
const Qualification = lazy(() => import('./Facultycomponents/Qualification/Qualification'));
const Researchguide = lazy(() => import('./Facultycomponents/Researchguide/Researchguide'));
const Researchwork = lazy(() => import('./Facultycomponents/Researchwork/Researchwork'));

// attendence component
const Takeattendence = lazy(() => import('./Attendencecomponents/Takeattendence/Takeattendence'));
const Viewattendence = lazy(() => import('./Attendencecomponents/Viewattendence/Viewattendence'));



// Transport components
const Businfo = lazy(() => import('./Transportcomponents/Businfo/Businfo'));
const Driverinfo = lazy(() => import('./Transportcomponents/Driverinfo/Driverinfo'));
const Feeinfo = lazy(() => import('./Transportcomponents/Feeinfo/Feeinfo'));
const Dailyreport = lazy(() => import('./Transportcomponents/Dailyreport/Dailyreport'));
const Maintenance = lazy(() => import('./Transportcomponents/Maintenence/Maintenance'));
const Studentinfot = lazy(() => import('./Transportcomponents/Studentinfo/Studentinnfo'));

//Admin module components
const Adminpagec = lazy(() => import('./Pages/Adminpagec/Adminpagec'));
const Addmodules = lazy(() => import('./Adminpanelc/Addmodules/Addmodules'));
const Addmodulefields = lazy(() => import('./Adminpanelc/Addmodulefields/Addmodulefields'));
// 
const Admin_main = lazy(() => import('./Pages/Admin-main/Admin_main'));
const Admin_director = lazy(() => import('./Pages/Admin-director/Admin_director'));
















function App() {
  return (
    <div>
      <Router>
      <Suspense fallback={<Spinner/>}>
        <Routes>
          {/* common urls */}
          <Route path="/spinner" element={<Spinner />} exact />
          <Route path="/" element={<Loginpage />} exact />
          
          
          {/* Main dashboard urls */}
          <Route path="/student-dashboard" element={<Studentdashboard />} exact />
          <Route path="/faculty-dashboard" element={<Facultydashboard />} exact />
          <Route path="/attendence-dashboard" element={<Attendencedashboard />} exact />
          <Route path="/transport-dashboard/:user" element={<Transportdashboard />} exact />
          <Route path="/Admin_main/:user" element={<Admin_main />} exact />
          <Route path="/Admin_director/:user" element={<Admin_director />} exact />



          
          {/* student dashboard urls */}
          <Route path="/student-details" element={<Mydetails />} exact />
          <Route path="/mentorform" element={<Mentorform />} exact />
          <Route path="/achivements" element={<Achivements />} exact />
          <Route path="/fee-details" element={<Feedetails />} exact />
          <Route path="/materials" element={<Materials />} exact />
          <Route path="/attendence" element={<Attendence />} exact />
          <Route path="/results" element={<Results />} exact />

          {/* Faculty dashboard urls */}
          <Route path="/award" element={<Award />} exact />
          <Route path="/experience" element={<Experience />} exact />
          <Route path="/fdp" element={<Fdp />} exact />
          <Route path="/funding" element={<Funding />} exact />
          <Route path="/manage-profile" element={<Manageprofile />} exact />
          <Route path="/membership" element={<Membership />} exact />
          <Route path="/qualification" element={<Qualification />} exact />
          <Route path="/researchguide" element={<Researchguide />} exact />
          <Route path="/researchwork" element={<Researchwork />} exact />

          {/* Attendence urls */}
          <Route path="/takeattendence" element={<Takeattendence />} exact />
          <Route path="/viewattendence" element={<Viewattendence />} exact />

          {/* Transport Urls */}
          <Route path="/businfo/:user" element={<Businfo />} exact />
          <Route path="/driverinfo/:user" element={<Driverinfo />} exact />
          <Route path="/feeinfo/:user" element={<Feeinfo />} exact />
          <Route path="/studentinfo/:user" element={<Studentinfot />} exact />
          <Route path="/maintenance/:user" element={<Maintenance />} exact />
          <Route path="/dailyreport/:user" element={<Dailyreport />} exact />



          {/* Adminpagec */}
          <Route path="/admin-modules" element={<Adminpagec />} exact />
          <Route path="/add-modules" element={<Addmodules />} exact />
          <Route path="/add-modulefields" element={<Addmodulefields />} exact />



















          





          <Route path='*' element={<F404/>}></Route>
        </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
