#pragma strict

var Grounded : boolean;
var water : boolean;
var water1 : boolean;
var cam : Transform;
var water2 : boolean;
var pushing : boolean;
var myForward : Vector3;
var myRight : Vector3;


function Start () {

}

function Update () {
	
	myForward = transform.forward;
	myForward.y = 0f;
	myForward = myForward.normalized;	
	
	myRight = transform.right;
	myRight.y = 0f;
	myRight = myRight.normalized;
	
	if(Input.GetKey("w") && Input.GetKey(KeyCode.LeftShift) && !water1){
		rigidbody.AddForce(new Vector3(myForward.x, 0 , myForward.z) * 50);
	}
	if(Input.GetKey("w") && !Input.GetKey(KeyCode.LeftShift)&& !water1){
		rigidbody.AddForce(new Vector3(myForward.x, 0 , myForward.z) * 40);
	}
	if(Input.GetKeyDown("space") && !Grounded && !water2){
		rigidbody.AddForce(Vector3.up * 1300);
	}
	if(Input.GetKey("a")&& !water1){
		rigidbody.AddForce(new Vector3(myRight.x, 0 , myRight.z) * -40);
	}
	if(Input.GetKey("d")&& !water1){
		rigidbody.AddForce(new Vector3(myRight.x, 0 , myRight.z) * 40);
	}
	if(Input.GetKey("s")&& !water1){
		rigidbody.AddForce(new Vector3(myForward.x, 0 , myForward.z) * -40);
	}
	//water movement
	if(Input.GetKey("w") && Input.GetKey(KeyCode.LeftShift) && water1){
		rigidbody.AddForce(new Vector3(transform.forward.x, 0 , transform.forward.z) * 30);
	}
	if(Input.GetKey("w") && !Input.GetKey(KeyCode.LeftShift)&& water1){
		rigidbody.AddForce(new Vector3(transform.forward.x, 0 , transform.forward.z) * 20);
	}
	if(Input.GetKey("space") && water2){
		rigidbody.AddForce(Vector3.up * 60);
	}
	if(Input.GetKey("a")&& water1){
		rigidbody.AddForce(transform.right * -20);
	}
	if(Input.GetKey("d")&& water1){
		rigidbody.AddForce(transform.right * 20);
	}
	if(Input.GetKey("s")&& water1){
		rigidbody.AddForce(transform.forward * -20);
	}
	
	//Water
	if(transform.position.y <= 0){
		water1 = true;
	}	
	if(transform.position.y >= 0){
		water1 = false;
	}
	if(transform.position.y >= -.5){
		water2 = false;
	}
	if(transform.position.y <= -.5){
		water2 = true;
	}
	
}

function OnCollisionEnter(other : Collision){
	Grounded = false;
	if(other.gameObject.tag == "Raft"){
		transform.position.y = 1;
	}
}
function OnCollisionExit(other : Collision){
	Grounded = true;
}
