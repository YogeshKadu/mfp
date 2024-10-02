import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";
const MountDashboard = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

if (process.env.NODE_ENV === "development") {
  const devElement = document.getElementById("dev-dashboard");
  if (devElement) MountDashboard(devElement);
}

export { MountDashboard };
