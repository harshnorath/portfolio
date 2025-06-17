<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set your email
    $to = "your-email@example.com"; // Replace with your email
    $subject = "New message from: " . $name;

    // Email content
    $body = "You have received a new message from your website contact form.\n\n";
    $body .= "Name: " . $name . "\n";
    $body .= "Email: " . $email . "\n";
    $body .= "Message:\n" . $message;

    // Send the email
    if (mail($to, $subject, $body)) {
        echo "Message sent successfully!";
    } else {
        echo "Sorry, there was an error sending your message.";
    }
}
?>
