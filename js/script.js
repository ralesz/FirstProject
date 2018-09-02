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


$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active'); 
        $('#general').toggleClass('active');
    });

});


$(window).on('load resize', function () {
  if ($(this).width() < 768) {
    $('table tfoot').hide();
  } else {
    $('table tfoot').show();
  }  
});


//działało + onclick="toggle_div_fun('sectionhide')" w htmll

// function toggle_div_fun(id) {
//     var divelement = document.getElementById(id);

//     if(divelement.style.display == 'none')
//         divelement.style.display = 'block';
//     else
//         divelement.style.display = 'none';
// };

//funkcje menu slider
var onel = document.getElementById('one-line');
var onel2 = document.getElementById('one-line2');
var divelement = document.getElementById('sectionhide');

var det = document.querySelector('.button-details');

    det.addEventListener("click", function () {
        (divelement.style.display = 'block') && (onel.style.display = 'none') && (onel2.style.display = 'none');
});


var det = document.querySelector('.button-general');

    det.addEventListener("click", function () {
        (divelement.style.display = 'none') && (onel.style.display = 'block') && (onel2.style.display = 'block');
});





//funkcja schowania dolnego menu
var bottm = document.getElementById('bot');
var bottm1 = document.getElementById('bot1');
var bottm2 = document.getElementById('bot2');

var det = document.querySelector('.quit-button');

    det.addEventListener("click", function () {
        if(bottm.style.display == 'none')
        (bottm.style.display = 'block') && (bottm1.style.display = 'block') && (bottm2.style.display = 'flex');
    else
        (bottm.style.display = 'none') && (bottm1.style.display = 'none') && (bottm2.style.display = 'none');
});


//walidacja formularza

// document.querySelector('form').addEventListener('submit', function(event) {
//   var isFormValidate = true;

//   var emailAddressInput = event.target.querySelector('input[name="email_address"]')
//   if(emailAddressInput.value.indexOf('@') < 0) {
//     isFormValidate = false;
//     emailAddressInput.parentElement.querySelector('.error').innerHTML = 'Błędny adres e-mail';
//   }

//   return !isFormValidate ? event.preventDefault() : true;
// })


