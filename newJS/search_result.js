document.getElementById("searchinput").innerHTML=localStorage.getItem('texttimkiem')

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
    var html=' ';
    var search=localStorage.getItem('texttimkiem').toLowerCase();

    if(search!='')
    {
          var xmlDoc = xml.responseXML;
        var anime = xmlDoc.getElementsByTagName("Movie");

        for (i = 0; i <anime.length; i++) { 
          var name1=anime[i].getElementsByTagName("Name_1")[0].childNodes[0].nodeValue;
          var name2=anime[i].getElementsByTagName("Name_2")[0].childNodes[0].nodeValue;
          var desciption=anime[i].getElementsByTagName("Description")[0].childNodes[0].nodeValue.substr(0,350);
          var image=anime[i].getElementsByTagName("Image")[0].childNodes[0].nodeValue;
          var id_anime=anime[i].getElementsByTagName("ID_Movie")[0].childNodes[0].nodeValue;
        
        
          if(name1.toLowerCase().indexOf(search)!=-1||name2.toLowerCase().indexOf(search)!=-1)
          {
            html+=   
            '<div class="product__sidebar__comment__item">\n'+
            '                                <div class="product__sidebar__comment__item__pic img_search ">\n'+
            '                                    <img class="" src="img/all/'+image+'" alt="">\n'+
            '                                </div>\n'+
            '                                <div class="product__sidebar__comment__item__text">\n'+
            '                                    <h5><a onclick="localStorage.setItem(\'id\',\''+id_anime+'\');" href="anime-details.html">'+name1+'</a></h5>\n'+
            '                                    <p  id="search_mota">'+desciption+'... <a onclick="localStorage.setItem(\'id\',\''+id_anime+'\');" href="anime-details.html">Xem thêm</a> </p>\n'+
            '                                </div>\n'+
            '                            </div>';
          
          }
        
        }
        if(html==' ')
        {
          html += "Don't have any result";
        }
    }
    else
    {
     html += 'Please input something!';

    }

    document.getElementById('search-result-list').innerHTML=html;

    
    
  }

