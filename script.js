const currentTime = () => {
    let curTime = new Date().toLocaleTimeString(); // Shows time (HH:MM:SS)
    document.getElementById("clock").innerText = curTime;
};

// Run immediately so the clock doesn't start with a 1-second delay
currentTime(); 

// Update every 1000 milliseconds (1 second)
 const Intervalid = setInterval(currentTime, 1000); 
setTimeout(()=>clearInterval(Intervalid),5000);