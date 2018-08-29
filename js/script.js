var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // 1
    type: 'bar',
    data: {
        // 2
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        // 3
        datasets: [{
            // 4
            label: "Signups",
            // 5
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            // 6   
            data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
        },
        {
            label: "FTD",
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
        },
        {
            label: "Earned",
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
            // 7
            hidden: true,
        }]
    },
});


// document.querySelector('.hamburger').addEventListener('click', function(e) {
//   e.preventDefault();
//   toggleMenu()
// });


// function toggleMenu(visible) {
//   document.querySelector('.sidebar').classList.toggle('show', visible)
// };


function myFunction() {
    var x = document.getElementById('myDIV');
    if (x.style.visibility === 'collapse') {
        x.style.visibility = 'visible';
    } else {
        x.style.visibility = 'collapse';
    }
}


$(window).on('load resize', function () {
  if ($(this).width() < 768) {
    $('table tfoot').hide();
  } else {
    $('table tfoot').show();
  }  
});


$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active'); 
        $('#general').toggleClass('active');
    });

});


// $(document).ready(function () {
//     $('#detailsCollapse').on('click', function () {
//         $('#table-stat').toggleClass('display-none', 'display-block'); 
//     });

// });

// function detailsFunction () {
//     $(#table-stat).toggleClass('display-none', 'display-block'); 
// }
