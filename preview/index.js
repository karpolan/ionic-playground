// For binding
var wrapper = document.getElementById("wrapper");
var phone = document.getElementById("phone");
var iframe = document.getElementById("frame");
var switches = document.getElementById("switches");

// Change view by ID
if (switches) {
  switches.addEventListener("click", function(e) {
    // alert("Click: " + e.target.value);
    switch (+e.target.value) {
      case 2: {
        // Landscape
        wrapper.setAttribute("class", "landscape");
        break;
      }
      case 3: {
        // 3D
        wrapper.setAttribute("class", "laying");
        break;
      }
      default: {
        // Portrait
        wrapper.setAttribute("class", "portrait");
        break;
      }
    }
  });
}
