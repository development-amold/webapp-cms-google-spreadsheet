
  var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1uXQcv2x6MR4mKlGbWTbkS2GRY8wXeXNengvKEtyvP0w/edit?usp=sharing';
  
  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
  }

 
  function showInfo(data) {
    var html = "<tr>";
      
    // double for-loops to do rows, cells in a table
    for ( i = 0; i < data.length; i++ ) {
        for ( prop in data[i] ) {
            html += "<td>" + data[i][prop] + "</td>";
        }
        html += "</tr><tr>";
    }
    document.getElementById("people-records").innerHTML = html;
  
  }
window.addEventListener('DOMContentLoaded', init)

