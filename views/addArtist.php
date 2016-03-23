<?php
return "
<div class='addartist' ><h1><span>Upload a track!</span></h1><hr></div>
<form method='post'  action='#'> 
	<input type='text' name='artistname' placeholder='Artistname' maxlength='28'>
 	<input type='file' name='artistimage' accept='image/*' placeholder='Pick an image!'><hr>
 	<input type='text' name='artistlink' placeholder='http://YourLinkToPage.com'><hr>
 	<input type='text' name='artisttracklink' placeholder='http://YourLinkToTrack.com'><hr>

 	<input type='submit' name='submit' value='Upload' />
</form>";

// action='index.php?pagina=upload'enctype='multipart/form-data'