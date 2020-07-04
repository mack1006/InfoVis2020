function main()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();

    screen.init( volume, {
        width: window.innerWidth * 0.7,
        height: window.innerHeight,
        targetDom: document.getElementById('display'),
        enableAutoResize: false
    });

    var bounds = Bounds( volume );
    screen.scene.add( bounds );
 
    var iso = document.getElementById('isovalue');
    var R = document.getElementById('R');
    var G = document.getElementById('G');
    var B = document.getElementById('B');
    var isovalue = Number(iso.value);
    var color = new THREE.Color(Number(R.value),Number(G.value),Number(B.value))
    var surfaces = Isosurfaces( volume, isovalue, screen.light, screen.camera,color);
    screen.scene.add( surfaces );
    


    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth, window.innerHeight ] );
    });

    iso.addEventListener( 'input', change);
    R.addEventListener( 'input', change);
    G.addEventListener( 'input', change);
    B.addEventListener( 'input', change);

    function change() {
	 screen.scene.remove( surfaces );
         isovalue = Number(iso.value);
         color = new THREE.Color(Number(R.value),Number(G.value),Number(B.value))
         surfaces = Isosurfaces( volume, isovalue, screen.light, screen.camera,color);
         screen.scene.add( surfaces );
    }
    screen.loop();
}
