/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author: Abid Asif 
      Date:   1/29/25

      Filename: js02.js
 */
// declare global constants for the application
const EMP_COST = 100;   // Photographer hourly rate
const BOOK_COST = 350;   // Cost of memory book
const REPRO_COST = 1250; // Cost of reproduction rights
const TRAVEL_COST = 2;   // Cost of travel per mile


// setup the form when the page loads
window.addEventListener("load",setupForm);

// set the form's default values
function setupForm(){
      document.getElementById("photoNum").value = 1;
      document.getElementById("photoHrs").value = 2;
      document.getElementById("makeBook").checked = false;
      document.getElementById("photoRights").checked = false;
      document.getElementById("photoDist").value = 0;

      getEstimate();

      //Add event handlers for each input control
      document.getElementById("photoNum").onchange = getEstimate;
      document.getElementById("photoHrs").onchange = getEstimate;
      document.getElementById("photoDist").onchange = getEstimate;
      document.getElementById("makeBook").onclick = getEstimate;
      document.getElementById("photoRights").onclick = getEstimate;
}

// estimate the total cost of the service
function getEstimate(){
      let totalCost = 0;
      let photographers = document.getElementById("photoNum").value;
      let hours = document.getElementById("photoHrs").value;
      let distance = document.getElementById("photoDist").value;
      let buyBook = document.getElementById("makeBook").checked;
      let buyRights = document.getElementById("photoRights").checked;

      // Add the cost of the photographer for the hours covered
      totalCost += photographers * hours * EMP_COST;

      // Add the cost of distance per photographer per mile
      totalCost += photographers * distance * TRAVEL_COST;

      // Add the cost of the book if purchased
      totalCost += buyBook ? BOOK_COST : 0;

      // Add the cost of photo rights if purchased
      totalCost += buyRights ? REPRO_COST : 0;

      // Display the total cost estimate
      document.getElementById("estimate").innerHTML = "$" + totalCost;
}