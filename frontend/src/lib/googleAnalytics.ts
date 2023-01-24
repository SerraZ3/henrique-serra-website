import ReactGA from "react-ga";
const googleAnalytics = {
  useAnalyticsEventTracker: (category: string = "default") => {
    const eventTracker = (action = "-", label = "-") => {
      ReactGA.event({ category, action, label });
    };
    return eventTracker;
  },
};
export default googleAnalytics;
