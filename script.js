let generateOTP = () => {
  
    const otp = Math.floor(100000 + Math.random() * 900000);
    document.getElementById("otpDisplay").innerText = `${otp}`;
  };
  
  document.getElementById("generateBtn").addEventListener("click", generateOTP);
  window.addEventListener("load", generateOTP);