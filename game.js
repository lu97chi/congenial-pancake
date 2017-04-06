var tablero;
var direccion;
alert("Utilize las flechas para moverse\n y presione el boton play")
var fondo = {
	x:0,
	y:0,
	imagenURL: "Media/fondo.png",
	imagenOK: false
};

var level2 = {
	imagenURL: "Media/fondo.png",
	imagenOK: false
}

var level3 = {
	imagenURL: "Media/fondo.png",
	imagenOK: false
}

var level4 = {
	imagenURL: "Media/fondo.png",
	imagenOK: false
}

var level5 = {
	imagenURL: "Media/fondo.png",
	imagenOK: false
}

var tifis={
	x:0,
	y:0,
	frenteOK: false,
	atrasOK: false,
    izqOK: false,
	derOK: false,
	velocidad: 50
	
};

var liz= {
	x:450,
	y:450,
	lizaOK:false
};

var teclas= 
{
	up: 38,
	down: 40,
	left: 37,
	right: 39,
	a:65,
	enter:13
};



function arranque () {
    b= document.getElementById("botoncito");

    b.addEventListener("click", inicio);
    
 }

function inicio()
{ 
    var canvas = document.getElementById("campo");
	tablero = canvas.getContext("2d");
	
	fondo.imagen = new Image();
	fondo.imagen.src= fondo.imagenURL;
	fondo.imagen.onload= confirmarFondo;

	tifis.frente = new Image();
	tifis.frente.src= "Media/diana-frente.png" ;
	tifis.frente.onload= confirmarFrente;

	tifis.atras = new Image();
	tifis.atras.src= "Media/diana-atras.png";
	tifis.atras.onload= confirmarAtras;

	tifis.izq = new Image();
	tifis.izq.src= "Media/diana-izq.png";
	tifis.izq.onload= confirmarIzq;

	tifis.der = new Image();
	tifis.der.src= "Media/diana-der.png";
	tifis.der.onload= confirmarDer;

	liz.liza = new Image()
	liz.liza.src= "Media/liz.png"
	liz.liza.onload=confirmarLiz
    
	document.addEventListener("keydown", teclado);
	direccion=codigo;
}

function teclado(evento)
{
	
var codigo= evento.keyCode;
	if (codigo== teclas.up) 
		{
          tifis.y -= tifis.velocidad;
          if (tifis.y<0) 
          	{
          		tifis.y+= tifis.velocidad;
          	};
          if (tifis.x==200 && tifis.y== 200) 
          	{
          		tifis.y+= tifis.velocidad;
          	};
          if (tifis.x<=100 && tifis.y==200) 
          	{
          		tifis.y+= tifis.velocidad;
          	};
          if (tifis.x>=150 && tifis.y==350) 
          	{
          		tifis.y+= tifis.velocidad;
          	};
		}
	
	if (codigo== teclas.down) 
		{
			tifis.y += tifis.velocidad;
			if (tifis.y>=460) 
				{
					tifis.y-= tifis.velocidad;
				};
			if (tifis.x<=100 && tifis.y==200) 
				{
					tifis.y-= tifis.velocidad;
				};
		    if (tifis.x>=150 && tifis.y==350) 
		    	{
		    		tifis.y-= tifis.velocidad;
		    	};
		}
	if (codigo== teclas.left) 
		{
			tifis.x -= tifis.velocidad;
			if (tifis.x<0) 
				{
					tifis.x+= tifis.velocidad;
				};
			if (tifis.x==100 && tifis.y==200) 
				{
					tifis.x+= tifis.velocidad;
				};
			if (tifis.x==200 && tifis.y<=200) 
				{
					tifis.x+= tifis.velocidad;
				};
		}
    if (codigo== teclas.right) 
		{
			tifis.x += tifis.velocidad;
			if (tifis.x >=480) 
				{
					tifis.x -= tifis.velocidad;
				};
			if (tifis.x==150 && tifis.y==350) 
				{
					tifis.x -= tifis.velocidad;
				};
			if (tifis.x==200 && tifis.y<=200) 
				{
					tifis.x -= tifis.velocidad;
				};
		}

		dibujar(codigo)
	if (codigo== teclas.a) 
		{
            alert("Fire")
		}

	
	if (tifis.x==liz.x && tifis.y==liz.y) 
		{
			inicio2()
			if (tifis.x==liz.x && tifis.y==liz.y) 
				{
					inicio3()
					if (tifis.x==liz.x && tifis.y==liz.y) 
						{
							inicio4()
						};
				};
		};

}

function inicio2()
{
	level2.imagen = new Image();
	level2.imagen.src= level2.imagenURL;
	level2.imagen.onload= confirmarLvl2;
}

function inicio3()
{
	level3.imagen = new Image();
	level3.imagen.src= level3.imagenURL;
	level3.imagen.onload= confirmarLvl3;
}

function inicio4()
{
	level4.imagen = new Image();
	level4.imagen.src= level4.imagenURL;
	level4.imagen.onload= confirmarLvl4;
}

function confirmarLvl2()
{
	level2.imagenOK=true
	dibujar()
}

function confirmarLvl3()
{
	level3.imagenOK=true
	dibujar()
}

function confirmarLvl4()
{
	level4.imagenOK=true
	dibujar()
}
function confirmarFondo () 
{
 fondo.imagenOK= true
 dibujar()
}

function confirmarFrente () 
{
 tifis.frenteOK= true
 dibujar()
}

function confirmarAtras () 
{
 tifis.atrasOK= true
 dibujar()
}

function confirmarDer () 
{
 tifis.derOK= true
 dibujar()
}

function confirmarIzq () 
{
 tifis.izqOK= true
 dibujar()
}

function confirmarLiz()
{
	liz.lizaOK= true
	dibujar()
}

function dibujar (direccion) 
{
     if (fondo.imagenOK) 
		{
          tablero.drawImage(fondo.imagen,fondo.x,fondo.y)
		}
	
     var tifisOrientada= tifis.frente;

if (tifis.frenteOK && tifis.atrasOK && tifis.derOK && tifis.izqOK) 
		{
	        if(direccion == teclas.down || direccion == undefined){
	        	
            tifisOrientada = tifis.frente;
        
	       }
		 

			 if(direccion == teclas.up)
				{
					tifisOrientada = tifis.atras;
				};
			
			if (direccion == teclas.left) 
				{
					tifisOrientada = tifis.izq;
				};
			if (direccion == teclas.right) 
				{
					tifisOrientada = tifis.der;
				};

		};
	tablero.drawImage(tifisOrientada,tifis.x,tifis.y)
		

	if (liz.lizaOK) 
		{
			tablero.drawImage(liz.liza, liz.x, liz.y)
		}
	if (level2.imagenOK) 
		{
			tablero.drawImage(level2.imagen,0,0)

		};
	if (level2.imagenOK) 
		{
			if (tifis.frenteOK && tifis.atrasOK && tifis.derOK && tifis.izqOK) 
		{
	        if(direccion == teclas.down || direccion == undefined){
	        	
            tifisOrientada = tifis.frente;
        
	       }
		 

			 if(direccion == teclas.up)
				{
					tifisOrientada = tifis.atras;
				};
			
			if (direccion == teclas.left) 
				{
					tifisOrientada = tifis.izq;
				};
			if (direccion == teclas.right) 
				{
					tifisOrientada = tifis.der;
				};
				tablero.drawImage(tifisOrientada,tifis.x,tifis.y)
		};
	}
	if (level2.imagenOK) 
		{
			tablero.drawImage(liz.liza, 250, 200)
		}
	if (level3.imagenOK) 
		{
			tablero.drawImage(level3.imagen,0,0)
		};
	if (level3.imagenOK) 
		{
			if (tifis.frenteOK && tifis.atrasOK && tifis.derOK && tifis.izqOK) 
		{
	        if(direccion == teclas.down || direccion == undefined){
	        	
            tifisOrientada = tifis.frente;
        
	       }
		 

			 if(direccion == teclas.up)
				{
					tifisOrientada = tifis.atras;
				};
			
			if (direccion == teclas.left) 
				{
					tifisOrientada = tifis.izq;
				};
			if (direccion == teclas.right) 
				{
					tifisOrientada = tifis.der;
				};
				tablero.drawImage(tifisOrientada,tifis.x,tifis.y)
		};
	if (level3.imagenOK) 
		{
			tablero.drawImage(liz.liza, 100, 100)
		};


}
};

