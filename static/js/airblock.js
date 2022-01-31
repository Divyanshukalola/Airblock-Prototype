// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar_airblock");










// Charts


// Aircraft Miles Vs Status
var xValues = ["A45HJ37DH39", "A45HJ37DH40", "A45HJ37DH41", "A45HJ37DH42", "A45HJ37DH43"];
var yValues = [55000, 49000, 4400, 24000, 1500];
var barColors = ["#00CB14", "#ECF100","#FF7A00","#00CB14","#D20000"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
    }
  }
});
