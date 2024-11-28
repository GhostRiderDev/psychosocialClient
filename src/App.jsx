import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Notification from "./Pages/Dashboard/Notification/Notification";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NotFound from "./Pages/NotFound";
import Appointments from "./Pages/Dashboard/Appointments/Appointments";
import Transaction from "./Pages/Dashboard/Transaction/Transaction";
import TotalIncome from "./Pages/Dashboard/Income/TotalIncome";
import Wallet from "./Pages/Dashboard/Income/Wallet";
import Subscription from "./Pages/Dashboard/Subscription/Subscription";
import Settings from "./Pages/Dashboard/Settings/Settings";
import Signin from "./Pages/Signin/Signin";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";
import Otp from "./Pages/Otp/Otp";
import NewPassword from "./Pages/NewPassword/NewPassword";
import AllTherapist from "./Pages/Dashboard/Therapist/AllTherapist";
import TherapistRequest from "./Pages/Dashboard/Therapist/TherapistRequest";
import AllPatients from "./Pages/Dashboard/Patients/AllPatients";
import MatchedTherapist from "./Pages/Dashboard/Patients/MatchedTherapist";
import PatientsRequest from "./Pages/Dashboard/Patients/PatientsRequest";
import Questionnaires from "./Pages/Questionnaires/Questionnaires";
import PatientRequestDetails from "./Pages/Dashboard/Patients/PatientRequestDetails";
import PatientRequestDetailsAssignTherapist from "./Pages/Dashboard/Patients/PatientRequestDetailsAssignTherapist";
import MatchedRequestDetails from "./Pages/Dashboard/Patients/MatchedRequestDetails";
import MatchedRequestDetailsChangeTherapist from "./Pages/Dashboard/Patients/MatchedRequestDetailsChangeTherapist";
import ManageQuestionnaires from "./Pages/Questionnaires/ManageQuestionnaires";
import Inbox from "./Pages/Inbox/Inbox";
import AddSubscription from "./Pages/Dashboard/Subscription/AddSubscription";
import NumberOfQuestion from "./Pages/Questionnaires/NumberOfQuestion";
import PersonalDetails from "./Pages/PersonalDetails/PersonalDetails";
import EditProfileDetails from "./Pages/PersonalDetails/EditProfileDetails";
import PrivateRoute from "./PrivateRoute";
import AssignList from "./Pages/AssignList/AssignList";
import AssignPatientList from "./Pages/AssignPatientList/AssignPatientList";
import EditSubscription from "./Pages/Dashboard/Subscription/EditSubscription";
import Landing from "./Pages/Landing/Landing";
import Signup from "./Pages/Signup/Signup";

function App() {
  // useEffect(() => {
  //   window.location.reload();
  // },[])
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route path="/allTherapist" element={<AllTherapist />} />
            <Route path="/therapistRequest" element={<TherapistRequest />} />
            <Route path="/:id" element={<NumberOfQuestion />} />
            <Route path="/personal-details" element={<PersonalDetails />} />
            <Route path="/edit-profile/:id" element={<EditProfileDetails />} />
            <Route path="/allPatients" element={<AllPatients />} />
            <Route path="/index" element={<Inbox />} />
            <Route path="/assign-list" element={<AssignList />} />
            <Route path="/assign-list/:id" element={<AssignPatientList />} />
            <Route path="/matchedTherapist" element={<MatchedTherapist />} />
            <Route
              path="/matchedTherapist/:id"
              element={<MatchedRequestDetails />}
            />
            <Route
              path="/matchedTherapist/:id/:id"
              element={<MatchedRequestDetailsChangeTherapist />}
            />
            <Route path="/patientsRequest" element={<PatientsRequest />} />
            <Route
              path="/patientsRequest/:id"
              element={<PatientRequestDetails />}
            />
            <Route
              path="/patientsRequest/assign/:id"
              element={<PatientRequestDetailsAssignTherapist />}
            />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/questionnaires" element={<Questionnaires />} />
            <Route
              path="/add-questionnaires"
              element={<ManageQuestionnaires />}
            />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/totalIncome" element={<TotalIncome />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route
              path="/subscription-update/:id"
              element={<EditSubscription />}
            />
            <Route path="add-subscriptions" element={<AddSubscription />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/settings" element={<Settings />} />
            {/* <Route path="/settings/:dynamic" element={<SettingPage />} /> */}
          </Route>
          <Route path="/auth/login" element={<Signin />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/forget-password" element={<ForgetPassword />} />
          <Route path="/otp/:email" element={<Otp />} />
          <Route path="/new-password/:email" element={<NewPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
