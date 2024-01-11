let generateOTP = () => {
    //const otpLength = 6;
  
    const otp = Math.floor(100000 + Math.random() * 900000);
    document.getElementById("otpDisplay").innerText = `${otp}`;
  };
  
  document.getElementById("generateBtn").addEventListener("click", generateOTP);
  window.addEventListener("load", generateOTP);