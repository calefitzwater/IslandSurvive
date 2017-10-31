#pragma strict

var delay : boolean;
var hit : int;
var maxHits : int;
var fall : boolean;
var speed : int;
var log : GameObject;



function Start () {
	hit = 0;
	delay = false;
	rigidbody.isKinematic = true;
}

function Update () {
	if(hit == maxHits){
		fall = true;
	}
	if(fall){
		rigidbody.isKinematic = false;
		rigidbody.AddForce(transform.forward * speed);
		Destroy1();
	}
}
function OnTriggerStay(other : Collider){
	if(other.tag == "Survivor"){
		if(Input.GetMouseButtonDown(0) && !delay){
			hit = hit + 1;
			delay = true;
			Timer();
		}
	}
}
			 
			 
function Timer(){
	if(delay){
		yield WaitForSeconds(1);
		delay = false;
	}
}

function Destroy1(){
	yield WaitForSeconds(6);
	Destroy(gameObject);
	var position : Vector3= Vector3(Random.Range(-1.0, 1.0), 0, Random.Range(-1.0, 1.0));
	Instantiate(log, transform.position + Vector3(0,0,0) + position, Quaternion.identity);
	Instantiate(log, transform.position + Vector3(2,2,0) + position, Quaternion.identity);
	Instantiate(log, transform.position + Vector3(5,5,0) + position, Quaternion.identity);
}
	
	
	
	