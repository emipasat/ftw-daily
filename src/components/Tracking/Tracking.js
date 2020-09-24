import ReactGA from "react-ga"; // TODO check double init\

export const initGA = (trackingID) => {           
    ReactGA.initialize(trackingID); 
  }
  
  /**
   * Event - Add custom tracking event.
   * @param {string} category 
   * @param {string} action 
   * @param {string} label 
   */
  export const gaEvent = (category, action, label) => {
    ReactGA.event({
      category: category,
      action: action,
      label: label
    });
  };