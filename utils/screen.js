import { getWindowSize } from "../src/components/WindowSize";

/**
 * Because Next.js does SSR, it does not have access to Window and Document APIs serverside.
 * NOTE: any component that calls this method should be dynamically imported.
 * This will allow it to capture the client's browser data
 */
export const displayMobileView = () => {
  return getWindowSize().width < 600;
};

export default displayMobileView;
