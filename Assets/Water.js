#pragma strict

var cam : Transform;
var scrollSpeed : float;

function Start () {
	RenderSettings.fog = false;
	RenderSettings.fogDensity = .04f;
}

function Update () {
	if(cam.transform.position.y < 0){
		RenderSettings.fog = true;
	}
	if(cam.transform.position.y > 0){
		RenderSettings.fog = false;
	}
	

 
	var offset : float = Time.time * scrollSpeed; 
	renderer.material.SetTextureOffset ("_MainTex", Vector2(offset,0)); 
	renderer.material.color.a = .9f;
}