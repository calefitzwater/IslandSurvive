#pragma strict

var Survivor : Transform;

function Start () {

}

function Update () {
	if(transform.position.y < 0){
		transform.position.y = 0;
		transform.rotation.x = 0;
		transform.rotation.z = 0;
	}
}

function OnCollisionStay(other : Collision){
	if(other.gameObject.tag == "Survivor"){
		transform.position.x = other.transform.position.x;
		transform.position.z = other.transform.position.z;
		transform.rotation.y = other.transform.rotation.y;
	}
	
}

function OnCollisionEnter(other : Collision){
	if(other.gameObject.tag != "Survivor" && other.gameObject.tag != "Water"){ 
		Survivor.position.y = Survivor.position.y + 1;
		Survivor.rigidbody.AddForce(Survivor.transform.forward * 500);
		Survivor.rigidbody.AddForce(Vector3.up * 1000);
	}
	
}