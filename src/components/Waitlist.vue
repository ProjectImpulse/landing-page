<template>
    <div id="waitlist-widget">
      <div id="getWaitlistContainer" data-waitlist_id="21134" data-widget_type="WIDGET_1"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "WaitlistWidget",
    mounted() {
      // Dynamically load the external CSS
      const cssLink = document.createElement("link");
      cssLink.rel = "stylesheet";
      cssLink.type = "text/css";
      cssLink.href = "https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css";
      document.head.appendChild(cssLink);
  
      // Dynamically load the external JS and initialize the widget
      const script = document.createElement("script");
      script.src = "https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js";
      script.onload = () => {
        // Ensure the widget is initialized after the script loads
        if (window.getWaitlist) {
          window.getWaitlist();
        }
      };
      document.body.appendChild(script);
    },
  };
  </script>
  