 var hitObject : GameObject;
 var Range : float = 1;
 
 
 
 function Update (){
 
 
 
 var fwd = transform.TransformDirection (Vector3.forward);
 var hit : RaycastHit;
     if(Physics.Raycast (transform.position, fwd, hit, Range)){
         Debug.DrawRay(transform.position, fwd * Range, Color.red);    
             hitObject = hit.collider.gameObject;
             if(Input.GetMouseButton(1)){
             	if(hit.collider.gameObject.tag=="Stick"|| hit.collider.gameObject.tag=="Log"){
             		 hitObject.transform.parent = gameObject.transform;
             		 hitObject.rigidbody.useGravity = false;
             		 hitObject.rigidbody.isKinematic = true;
            		
            		  
            		 if(Input.GetKey("left")){
             				
             				print("hello");
             		}
            	 }
             }
             if(!Input.GetMouseButton(1)){
             	if(hit.collider.gameObject.tag=="Stick"|| hit.collider.gameObject.tag=="Log"){
             		 hitObject.transform.parent = null;
             		 hitObject.rigidbody.useGravity = true;
             		 hitObject.rigidbody.isKinematic = false;
            	}
             }
            
 
         }
 
     }
 
 