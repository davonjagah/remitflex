import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { CustomHashLoader } from "../components/HashLoader/Hashloader";

const LandingPage = lazy(() => import("../pages/Landing"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Bills = lazy(() => import("../pages/Bills"));
const SendMoney = lazy(() => import("../pages/SendMoney"));
const VaultPage = lazy(() => import("../pages/VaultScanner"));
const ServicePay = lazy(() => import('../pages/ServicePay'))
const AppRouter = () => {
  return (
    <Suspense fallback={<CustomHashLoader color="#409099" size={60} />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app/:vaultKey" element={<VaultPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Bills />} />
        <Route path="/remit" element={<SendMoney />} /> 
        <Route path="/app" element={<VaultPage />} />
        <Route path="/services/pay" element={<ServicePay />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
