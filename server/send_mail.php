<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = htmlspecialchars($_POST['nom']);
    $prenom = htmlspecialchars($_POST['prenom']);
    $email = htmlspecialchars($_POST['email']);
    $tel = htmlspecialchars($_POST['tel']);

    $to = "haroundjihane@gmail.com";
    $subject = "Nouveau message depuis le formulaire de contact";
    $message = "Nom: $nom\nPrénom: $prenom\nEmail: $email\nTéléphone: $tel";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Message envoyé avec succès !";
    } else {
        echo "Erreur lors de l'envoi du message.";
    }
}
?>
