const container = document.getElementsByTagName("ytd-popup-container")[0];

const observer = new MutationObserver(() => {
   // Lấy element button
   const skipButton = document.getElementById("confirm-button");
   if (skipButton){
      // Nhấn vào button để skip quảng cáo
      skipButton.click();
   }
});

observer.observe(container, {childList: true});