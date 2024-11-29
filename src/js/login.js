    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const emailGabriel ="gabriel.vieira138@etec.sp.gov.br";
    const emailCleifson ="cleifson.roque@etec.sp.gov.br";
    const emailAntonio ="antonio.xavier3@etec.sp.gov.br";
    const emailLavinia ="lavinia.inocencio@etec.sp.gov.br";
    const senhaGabriel ="1234"
    const senhaCleifson ="1234"
    const senhaAntonio ="1234"
    const senhaLavinia ="1234"

    function teste(){
        const emailvalor = email.value;
        const senhaValor = senha.value;
    if((emailvalor == emailGabriel && senhaValor == senhaGabriel)){
        alert("Bem vindo Gabriel");
    }
    else if((emailvalor == emailCleifson && senhaValor == senhaCleifson)){
        alert("Bem vindo Cleifson");
    }
    else if((emailvalor == emailAntonio && senhaValor == senhaAntonio)){
        alert("Bem vindo Antonio");
    }
    else if((emailvalor == emailLavinia && senhaValor == senhaLavinia)){
        alert("Bem vinda Lavinia");
    }
    else{
        alert("fez merda");
    }
    }

    function mostrarSenha() {
        var passwordField = document.getElementById("senha");
        if (passwordField.type === "password") {
            passwordField.type = "text";
    
        } else {
            passwordField.type = "password";
    
        }
    }

    function mostrarConfirmar() {
        var passwordField = document.getElementById("confirmar-senha");
        if (passwordField.type === "password") {
            passwordField.type = "text";
    
        } else {
            passwordField.type = "password";
    
        }
    }