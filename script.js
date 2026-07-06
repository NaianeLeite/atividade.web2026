//dados vindos do banco de dados 

nome= document.getElementById("username");
nome.innerText = " Detalhes em Papel";
nome.innerHTML = "<b>Detalhes em Papel</b>";

 catalogo = document.getElementById("catalogo");
 site = document.getElementById("site");
 whatsapp = document.getElementById("whatsapp");
 shopee = document.getElementById("shopee");

 link = "https://danipapeleira.com.br";
 linkSite = "https://danipapeleira.com.br";
 linkWhatsapp = "https://wa.me/qr/QMTHN4GQVQVSC1";
 linkShopee = "https://shopee.com.br";


catalogo.setAttribute("ref", link);
site.setAttribute("ref", linkSite);
whatsapp.setAttribute("ref", linkWhatsapp);
shopee.setAttribute("ref", linkShopee);


catalogo.addEventListener("click", function () {

    window.location = catalogo.getAttribute("ref");

});

site.addEventListener("click", function () {

    window.location = site.getAttribute("ref");

});

whatsapp.addEventListener("click", function () {

    window.location = whatsapp.getAttribute("ref");

});

shopee.addEventListener("click", function () {

    window.location = shopee.getAttribute("ref");

});
  // botões  das redes sociais
 rede = document.getElementById("rede");
 zap = document.getElementById("zap");
 twitter = document.getElementById("twitter");
 facebook = document.getElementById("facebook");

  // INSTAGRAN
  rede.setAttribute("ref", "https://www.instagram.com/naiane.personalizados?igsh=MWx0cHNyMHdzM3BwaQ==");
  rede.addEventListener("click", function () {
    window.location = rede.getAttribute("ref");
});
// WHATSAPP
zap.setAttribute("ref", "https://wa.me/5581981288721");
zap.addEventListener("click", function () {
    window.location = zap.getAttribute("ref");
});

// TWITTER
twitter.setAttribute("ref", "https://twitter.com");
twitter.addEventListener("click", function () {
    window.location = twitter.getAttribute("ref");
});

// FACEBOOK
facebook.setAttribute("ref", "https://facebook.com");
facebook.addEventListener("click", function () {
    window.location = facebook.getAttribute("ref");
});




