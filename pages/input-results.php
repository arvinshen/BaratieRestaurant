<!DOCTYPE html>
<html>
<body>
  Thank you, your message has been received!! <br>
  Name: <?php echo htmlspecialchars($_POST["name-input"]); ?><br>
  Email: <?php echo htmlspecialchars($_POST["email-input"]); ?><br>
  Phone: <?php echo htmlspecialchars($_POST["telephone-input"]); ?><br>
  Message: <?php echo htmlspecialchars($_POST["message-input"]); ?>
</body>
</html> 

