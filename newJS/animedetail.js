// window.onload=  
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
       var views=numberWithCommas(anime[i].getElementsByTagName("Views")[0].childNodes[0].nodeValue) ;
       var votes=numberWithCommas(anime[i].getElementsByTagName("Votes")[0].childNodes[0].nodeValue);
        if(id==anime[i].getElementsByTagName("ID_Movie")[0].childNodes[0].nodeValue)
        {
          html=   
          '   <div class="row">\n'+
          '                    <div class="col-lg-3">\n'+
          '                     <div class="anime__details__pic set-bg"  style="background-image: url('+"'img/all/"+anime[i].getElementsByTagName("Image")[0].childNodes[0].nodeValue+"'"+');">\n'+
          '                            <div class="comment"><i class="fa fa-comments"></i> 11</div>\n'+
          '                            <div class="view"><i class="fa fa-eye"></i> '+anime[i].getElementsByTagName("Views")[0].childNodes[0].nodeValue+'</div>\n'+
          '                        </div>\n'+
          '                    </div>\n'+
          '                    <div class="col-lg-9">\n'+
          '                        <div class="anime__details__text">\n'+
          '                            <div class="anime__details__title">\n'+
          '                                <h3>'+anime[i].getElementsByTagName("Name_1")[0].childNodes[0].nodeValue+'</h3>\n'+
          '                                <span>'+anime[i].getElementsByTagName("Name_2")[0].childNodes[0].nodeValue+'</span>\n'+
          '                            </div>\n'+
          '                            <div class="anime__details__rating">\n'+
          '                                <div class="rating">\n'+
          '                                    <a href="#"><i class="fa fa-star"></i></a>\n'+
          '                                    <a href="#"><i class="fa fa-star"></i></a>\n'+
          '                                    <a href="#"><i class="fa fa-star"></i></a>\n'+
          '                                    <a href="#"><i class="fa fa-star"></i></a>\n'+
          '                                    <a href="#"><i class="fa fa-star-half-o"></i></a>\n'+
          '                                </div>\n'+
          '                                <span>'+votes+' Votes</span>\n'+
          '                            </div>\n'+
          '                            <p>'+anime[i].getElementsByTagName("Description")[0].childNodes[0].nodeValue+'</p>\n'+
          '                            <div class="anime__details__widget">\n'+
          '                                <div class="row">\n'+
          '                                    <div class="col-lg-6 col-md-6">\n'+
          '                                        <ul>\n'+
          '                                            <li><span>Type:</span> '+anime[i].getElementsByTagName("Type_Anime")[0].childNodes[0].nodeValue+'</li>\n'+
          '                                            <li><span>Date aired:</span> '+anime[i].getElementsByTagName("Year")[0].childNodes[0].nodeValue+'</li>\n'+
          '                                            <li><span>Status:</span> '+anime[i].getElementsByTagName("Status")[0].childNodes[0].nodeValue+'</li>\n'+
          '                                            <li><span>Genre:</span> '+anime[i].getElementsByTagName("Genre")[0].childNodes[0].nodeValue+'</li>\n'+
          '                                        </ul>\n'+
          '                                    </div>\n'+
          '                                    <div class="col-lg-6 col-md-6">\n'+
          '                                        <ul>\n'+
          '                                            <li><span>Rating:</span>'+anime[i].getElementsByTagName("Rating")[0].childNodes[0].nodeValue+' / 10.0</li>\n'+
          '                                            <li><span>Duration:</span>'+anime[i].getElementsByTagName("Duration")[0].childNodes[0].nodeValue+'</li>\n'+
          '                                            <li><span>Quality:</span> HD</li>\n'+
          '                                            <li><span>Views:</span>'+views+'</li>\n'+
          '                                        </ul>\n'+
          '                                    </div>\n'+
          '                                </div>\n'+
          '                            </div>\n'+
          '                            <div class="anime__details__btn">\n'+
          '                                <a href="#" class="follow-btn"><i class="fa fa-heart-o"></i> Follow</a>\n'+
          '                                <a href="anime-watching.html" class="watch-btn"><span>Watch Trailer</span> <i\n'+
          '                                    class="fa fa-angle-right"></i></a>\n'+
          '                                </div>\n'+
          '                            </div>\n'+
          '                        </div>\n'+
          '                    </div>';

          break;

        }
       
      }
      document.getElementById("content_anime").innerHTML = html;
    }