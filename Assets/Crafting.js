#pragma strict

var Log : int;
var LogCraft : GameObject;
var LogBol : boolean;
var Stick : int;
var StickCraft : GameObject;
var StickBol : boolean;
var TableBol : boolean;
var TableCraft : GameObject;
var Player : boolean;
var PlayerPos : Transform;



function Start () {
}

function Update () {
	if(Stick == 4 && Log == 1){
		Stick = Stick - 4;
		Log = Log - 1;
		var New = Instantiate(TableCraft, Vector3(transform.position.x, transform.position.y, transform.position.z + 2), transform.rotation);
	}
}

function OnTriggerEnter(other : Collider){
	if(other.tag == "Log"){
		Log = Log + 1;
	}
	if(other.tag == "Stick"){
		Stick = Stick + 1;
	}
	if(other.tag == "Survivor"){
		Player = true;
	}
}

function OnTriggerExit(other : Collider){
	if(other.tag == "Log"){
		Log = Log - 1;
	}
	if(other.tag == "Stick"){
		Stick = Stick - 1;
	}
	if(other.tag == "Survivor"){
		Player = false;
	}
}