<html>
<head>
<title>PHP Test</title>
</head>
<body>
<?php echo '<p>Hello World</p>'; ?>
<?php
     $output = shell_exec('./s.sh');
     echo "<pre>$output</pre>";
?>
</body>
</html>
