function ajout() {
    document.getElementById('list').innerHTML += "<li>Test</li>";
}

function ajout_1() {
    document.getElementById('list').innerHTML += "<li>Test " + (document.getElementById("list").getElementsByTagName("li").length+1) + "</li>";
}

function ajout_2()
{
  var ma_liste = document.getElementById("list");
  var les_li = ma_liste.getElementsByTagName("li");
  var long_ma_liste = les_li.length;
  var num_nouv_li = long_ma_liste + 1;
  var contenu_ma_liste = ma_liste.innerHTML;
  var li_a_ajouter = '  <li id="li' + num_nouv_li + '">Test ' + num_nouv_li + '<\/li>';
alert("Actuellement, " + long_ma_liste + " <li> dans la liste");
  contenu_ma_liste = contenu_ma_liste + li_a_ajouter;
  ma_liste.innerHTML = contenu_ma_liste;
  long_ma_liste = les_li.length;
   
alert("Et maintenant, " + long_ma_liste + " <li> dans la liste");
alert("Le dernier item de la liste est :\n" + li_a_ajouter);
}


function del(){
    var List = document.getElementById('list');
    List.removeChild(List.lastChild);
}

var t;			
t = 12;
function augpolice(){
		t = t + 1;
		document.getElementsByTagName("body")[0].style.fontSize = t + "px";		
}


function dimpolice(){
    t = t - 1;
    document.getElementsByTagName("body")[0].style.fontSize = t + "px";	
}