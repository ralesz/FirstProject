'use strict';

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


//funkcje menu slider
var onel = document.getElementById('one-line');
var onel2 = document.getElementById('one-line2');
var divelement = document.getElementById('sectionhide');
var FormPage = document.getElementById('FormHide');
var Banerss = document.getElementById('section-baner');


var det = document.querySelector('.button-details');

    det.addEventListener("click", function () {
        (divelement.style.display = 'block') && (onel.style.display = 'none') && (onel2.style.display = 'none') && (FormPage.style.display = 'none') && (Banerss.style.display = 'none');
});

var det = document.querySelector('.button-general');

    det.addEventListener("click", function () {
        (divelement.style.display = 'none') && (onel.style.display = 'block') && (onel2.style.display = 'block') && (FormPage.style.display = 'none') && (Banerss.style.display = 'none');
});

var det = document.querySelector('.button-data');

    det.addEventListener("click", function () {
        (divelement.style.display = 'none') && (onel.style.display = 'none') && (onel2.style.display = 'none') && (FormPage.style.display = 'block') && (Banerss.style.display = 'none');
});

var det = document.querySelector('.button-links');

    det.addEventListener("click", function () {
        (divelement.style.display = 'none') && (onel.style.display = 'none') && (onel2.style.display = 'block') && (FormPage.style.display = 'none') && (Banerss.style.display = 'none');
});

var det = document.querySelector('.button-baner');

    det.addEventListener("click", function () {
        (divelement.style.display = 'none') && (onel.style.display = 'none') && (onel2.style.display = 'none') && (FormPage.style.display = 'none') && (Banerss.style.display = 'block');
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



//funkcja zamknęcia wszystkich modali  
function closeModal() {
  document.getElementById('modal-overlay').classList.remove('show')

    var allModal = document.querySelectorAll('.modal');
    var n;
    for (n = 0; n < allModal.length; n++) {
        allModal[n].classList.remove('show');
    }
}

//przyciski zamykające z klasą js--close-modal
document.querySelectorAll('#modal-overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault()
    closeModal()
  })
})

//zamknięcie modala po kliknięciu w tło overlaya.
document.querySelector('#modal-overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal()
  }
})

//zamykanie poprzez kliknięcie w przycisk Escape
document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal()
  }
})

// //otwieranie modala

    var showModal = function(event){
    event.preventDefault();     

    var id = event.target.getAttribute('href');
    console.log(id);


    document.querySelector('.overlay').classList.remove('show');
    document.querySelector('.modal').classList.remove('show')

    

    document.querySelector('#modal-overlay').classList.add('show')
    document.querySelector(id).classList.add('show');

 };

    var modalLinks = document.querySelectorAll('.show-modal');
    for(var i = 0; i < modalLinks.length; i++){
        modalLinks[i].addEventListener('click', showModal);
    }






