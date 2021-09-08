function init() {
  /** 
   * This API function, enables the anchors' 
   * smooth-scrolling to the corresponding section
   */
  uss.hrefSetup();  
  
  /** 
   * This version would prevent the stop-and-go effect you have when 
   * you click the same anchor more than one time.
   */
  //uss.hrefSetup(null, null, () => {return !uss.isScrolling(window);});
  
  /**
   * This API function, sets the easing of the window to a
   * medium speed(the "QUART" part) ease-in-out function that last exactly 1 second.
   */
   uss.setStepLengthCalculator(
      EASE_IN_OUT_QUART(600), 

      window //window is optional because it's the default value
   ); 
   
   /**
    * This API function allow us to stop the scrolling on a container.
    * In this case, we don't want any more scrolling 
    * if the user scrolls the document with the mousewheel.
    */
    window.addEventListener(
          "wheel", 
          () => uss.stopScrolling(window) //window is optional because it's the default value
    ); 
}