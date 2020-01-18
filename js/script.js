// ------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

// Create an empty scene
var scene = new THREE.Scene();

// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 4;

// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#4033FF");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

// ------------------------------------------------
// FUN STARTS HERE
// ------------------------------------------------

// Create a Cube Mesh with basic material
var num = 90
var l = [];

var geometry = new THREE.BoxGeometry( .1, .1, .1);
var material = new THREE.MeshBasicMaterial( { color: "#01ADFF" } );

var x = -7
var y = -3.5
var z = 0

var row = 0
for (i = 0; i < num; i++) {
		for( j = 0; j < num; j++) {
			var cube = new THREE.Mesh( geometry, material );
			l[row + j] = cube
			l[row + j].position.set(x, y, z);
			scene.add( cube );
			x += .17;
			console.log(row + j);
	}
	row += num;
	y += .17;
	x = -7;
}

// Render Loop

var render = function () {
  requestAnimationFrame( render );
  row = 0
  for ( i = 0; i < num; i++) {
  	for ( j = 0; j < num; j++ ) {
  		
  		l[row + j].rotation.x += .01;
  		l[row + j].rotation.y += .01;
  	}
  	row += num
  }
	
  

  // Render the scene
  renderer.render(scene, camera);
};

render();