 window.onload=  
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xhttp.open("GET", "data/data_anime.xml", true);
    xhttp.send();
  }


function myFunction(xml) {
    var i;
    var id=localStorage.getItem('id');
    var xmlDoc = xml.responseXML;
    var html=' ';
    var anime = xmlDoc.getElementsByTagName("Movie");
    for (i = 0; i <anime.length; i++) { 
      if(id==anime[i].getElementsByTagName("ID_Movie")[0].childNodes[0].nodeValue)
      {
        html=   
        '  <div class="anime__video__player">\n'+
        '                <div class="video-wrapper">\n'+
        '                    <iframe src="'+anime[i].getElementsByTagName("Trailer")[0].childNodes[0].nodeValue+'" height="315" width="560" allowfullscreen="" frameborder="0">\n'+
        '                    </iframe>\n'+
        '                </div>\n'+
        '            </div>\n'+
        '            <div class="anime__title">\n'+
        '                <div class="section-title">\n'+
        '                    <h5>Trailer: <span id="filmname">'+anime[i].getElementsByTagName("Name_1")[0].childNodes[0].nodeValue+'</span></h5>\n'+
        '                </div>\n'+
        '                <p style="color:white;">'+anime[i].getElementsByTagName("Description")[0].childNodes[0].nodeValue+' </p>\n'+
        '            </div>';

        break;

      }
     
    }
    document.getElementById("trailer").innerHTML = html;
  }

