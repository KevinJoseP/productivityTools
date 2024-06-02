chrome.webNavigation.onCompleted.addListener(function(details) {
    console.log("Navigated to: ", details.url); // Log the URL being navigated to

    // Check if the URL starts with "https://www.youtube.com" and does NOT include "/embed/"
    if(details.url.startsWith("https://www.youtube.com") && !details.url.includes("/embed/")) {
      console.log("Redirecting from: ", details.url); // Log the URL causing the redirect
      chrome.tabs.update(details.tabId, {url: "https://github.com/donnemartin/system-design-primer/tree/master"});
    }
}, {url: [{hostSuffix: 'youtube.com'}]});

  //https://www.si.umich.edu/programs/master-science-information
  