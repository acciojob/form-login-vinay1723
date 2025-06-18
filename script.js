function getFormvalue() {
    //Write your code here
     let fname = document.querySelector('input[name="fname"]');
     let lname = document.querySelector('input[name="lname"]');

	let res = fname.value +" "+ lname.value;
	 res = res.trim().split(" ").map((wrd) => wrd.replace(/[^a-z]/gi,"")).join(" ");
	alert(res);
}
