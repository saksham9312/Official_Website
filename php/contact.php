<?php

$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$message = $_REQUEST['message'];
$subject = $_REQUEST['subject'];
$category = $_REQUEST['category'];

if (empty($name) || empty($email) || empty($email) || empty($email) || empty($email) )
{
    echo"Please Fill All The Required Fields"
}
else
{
    mail("saksham271.sg@gmail.com", "Contact @ www.saksham-gupta.com", $message, "$subject", "From: $name <$email>");
    echo "<script type='text/javascript'> alert('Hey, $name , Your Message Has Been 
    Recieved By Me! I'll Respond You ASAP!  '); 
    window.history.log(-1);
    </script>"
}

?>