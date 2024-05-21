window.onload = function() {
    var tables = document.querySelectorAll('.first, .second, .third, .fourth');
        tables.forEach(function(table) {
    });
    var tariffLink = document.getElementById('tariff-link');
    tariffLink.addEventListener('click', function() {
        tables.forEach(function(table) {
            table.style.display = 'table';
        });
    });
    
    showTable('.first');
    document.getElementById('box1').addEventListener('click', function() {
        showTable('.first');
    });
    document.getElementById('box2').addEventListener('click', function() {
        showTable('.second');
    });
    document.getElementById('box3').addEventListener('click', function() {
        showTable('.third');
    });
    document.getElementById('box4').addEventListener('click', function() {
        showTable('.fourth');
    });
    function showTable(tableClass) {
        tables.forEach(function(table) {
            table.style.display = 'none';
        });

        var tableToShow = document.querySelector(tableClass);
        tableToShow.style.display = 'table';
    }
 };
