document.getElementById("inscription").addEventListener("submit",function(e) {
    e.preventDefault();

    var erreur;
    var pseudo = document.getElementById("pseudo");
    var email = document.getElementById("email");
    var email2 = document.getElementById("email2");
    var mdp = document.getElementById("mdp");

    if (!mdp.value){
        erreur = "veuillez renseigner un mot de passe";
    }
    if (!email.value){
        erreur = "veuillez renseigner un email";
    }
    if (!email2.value){
        erreur = "veuillez renseigner a nouveau l'email";
    }
    if (!pseudo.value){
        erreur = "veuillez renseigner un pseudo";
    }




    if (erreur) {
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    }else {
        alert
    }

     alert("formulaire envoyé !")
});

