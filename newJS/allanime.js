
function detail(input)
{
    location.replace("anime-details.html");
    localStorage.setItem('id',input);
}

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
      var xmlDoc = xml.responseXML;
      var html=' ';
      var anime = xmlDoc.getElementsByTagName("Movie");
      for (i = 0; i <anime.length; i++) { 
        var views=numberWithCommas(anime[i].getElementsByTagName("Views")[0].childNodes[0].nodeValue) ;
        html +=   
        '<div class="col-lg-4 col-md-6 col-sm-6">\n'+
'           <div onclick="detail(\''+anime[i].getElementsByTagName("ID_Movie")[0].childNodes[0].nodeValue+'\')" class="product__item">\n'+
'               <div class="product__item__pic set-bg"  style="background-image: url('+"'img/all/"+anime[i].getElementsByTagName("Image")[0].childNodes[0].nodeValue+"'"+');">\n'+
'                   <div class="ep">'+anime[i].getElementsByTagName("Status")[0].childNodes[0].nodeValue+'</div>\n'+
'                   <div class="comment"><i class="fa fa-comments"></i> 11</div>\n'+
'                   <div class="view"><i class="fa fa-eye"></i> '+views+'</div>\n'+
'               </div>\n'+
'               <div class="product__item__text">\n'+
'                   <h5><a href="#">'+anime[i].getElementsByTagName("Name_1")[0].childNodes[0].nodeValue+'</a></h5>\n'+
'               </div>\n'+
'           </div>\n'+
'       </div>';
      }
      document.getElementById("listanime").innerHTML = html;
    }

