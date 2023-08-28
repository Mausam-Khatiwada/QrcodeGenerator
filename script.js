
let api = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`;
let input = document.getElementById("input");
let btn = document.getElementById('btn');
let QrDiv = document.getElementById("QrDiv");
let QrImage = document.getElementById("QrImage");



btn.addEventListener('click',function(){
		if (input.value=='') {
QrImage.style.display="none";
swal("Failed !", "Please enter a text or URL", "error");
		}
else{
	QrImage.style.display="block";
	let data = api+input.value;
	QrImage.src=data;
}
})






