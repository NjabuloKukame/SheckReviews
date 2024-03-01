<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $firstName = $_POST["first-name"];
    $lastName = $_POST["last-name"];
    $phoneNumber = $_POST["phone"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Email details
    $to = "njabulokukame60@gmail.com";
    $subject = "New message from $firstName $lastName";
    $body = "Name: $firstName $lastName\n";
    $body .= "Phone: $phoneNumber\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message";

    // Send email
    if (mail($to, $subject, $body)) {
        echo "Your message has been sent successfully!";
    } else {
        echo "Oops! Something went wrong.";
    }
} else {
    // If the form is not submitted, redirect to the contact page
    header("Location: contact.html");
}
?>
