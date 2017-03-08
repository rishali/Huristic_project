const {ipcRenderer} = require('electron')

function validateForm()
 {
  /** var x = document.forms["myForm"]["inputEmail"].value;
	var y = document.forms["myForm"]["inputPassword"].value;**/
		var x=document.getElementById("inputEmail").value;
			var y=document.getElementById("inputPassword").value;
			
			
    if (x == "" || y == "")
	{
        alert("field must be filled out");
        return false;
    }
}

{
	ipcRenderer.send('btn-submit', document.getElementById('inputEmail').value +
		document.getElementById('inputPassword').value)
}






