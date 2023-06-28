function validar(){
    if(document.form1.login.value.length <= 1){
        alert("O campo login foi deixado em branco");
        document.form1.login.focus();
        return false;
    } else {
        if(document.form1.senha.value.length <= 1){
            alert("O campo senha foi deixado em branco!");
            document.form1.senha.focus();
            return false;
        } else {
            alert("Campos preenchidos!");
            return true;
        }
    }
}