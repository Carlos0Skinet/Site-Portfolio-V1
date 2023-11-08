<?php

    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $celular = addslashes($_POST['celular']);
    $mensagem = addslashes($_POST['mensagem']);

    $para = "carlos.gabriel.business00@gmail.com";
    $assunto = "Contato - siteportfolio";

    $corpo = "Nome: ".$nome."\n"."Email: ".$email."\n"."Celular: ".$celular."\n"."Mensagem: ".";

    $cabeca = "From: carlos.gabriel.business00@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($para,$assunto,$corpo,$cabeca)){
        echo("Mensagem enviada com sucesso!")
    }else{
        echo("Houve um erro ao enviar a mensagem... :(")
    }

?>