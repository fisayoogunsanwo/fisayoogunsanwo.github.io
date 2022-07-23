let dark = $(".dark-mode-btn");
let darkModeOn = false;

function addDarkMode(){
    // Adding dark mode to background of page
        $(".top-container").addClass("dark-mode-div");
        $(".bottom-container").addClass("dark-mode-div");
        $(".middle-container").addClass("dark-mode-mid-div");
    
    // Adding dark mode to text 
        $("h1").addClass("dark-mode-text");
        $("h2").addClass("dark-mode-mid-text");
        $(".header-link").addClass("dark-mode-mid-text");
        $("p").addClass("dark-mode-text");
        
    
        dark.html("<i class=\"fa-solid fa-sun\"></i>");
        // Saving the state in the cache
        localStorage.setItem("theme", "dark");
    }

function addLightMode(){
         // Removing dark mode to background of page
         $(".top-container").removeClass("dark-mode-div");
         $(".bottom-container").removeClass("dark-mode-div");
         $(".middle-container").removeClass("dark-mode-mid-div");
     
     // Removing dark mode to text 
         $("h1").removeClass("dark-mode-text");
         $("h2").removeClass("dark-mode-mid-text");
         $(".header-link").removeClass("dark-mode-mid-text");
         $("p").removeClass("dark-mode-text");
     
         dark.html("<i class=\"fa-solid fa-moon\"></i>");
         // Saving the state in the cache
         localStorage.setItem("theme", "light");
    }

let toggleDarkMode = () => {

    if(!darkModeOn){
    darkModeOn = true;
    addDarkMode();
    }
    else{
    darkModeOn = false;
    // alert("Dark mode clicked")
    addLightMode();
    }
    }

    if (localStorage.getItem("theme") === "dark") {
        addDarkMode();
      }
      
dark.click(toggleDarkMode);




