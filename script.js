        var time = new Date();
        var deltaTime = 0;
        var opsion  = prompt('Elige  el  personaje: 1. Dino  2. Dino Mom  3. Dino Dad 4.Dino Sister' );

        if (document.readyState == "complete" || document.readyState == "interactive") {
            setTimeout(Init, 1);
        } else {
            document.addEventListener("DOMContentLoaded", Init);
        }

        function Init() {
            time = new Date();
            Start();
            Loop();
        }

        function Loop() {
            deltaTime = (new Date() - time) / 1000;
            time = new Date();
            Update();
            requestAnimationFrame(Loop);
        }


        var buy_live2 = false;
        var live2 = 0;
        
        var sueloY = 22;
        var velY = 0;
        var impulso = 900;
        var gravedad = 2500;
        var dinoPosX = 42;
        var dinoPosY = sueloY;
        var sueloX = 0;
        var velEscenario = 1280 / 3;
        var gameVel = 1;
        var score = 0;

        var parado = false;
        var saltando = false;

        var contenedor;
        var dino;
        var suelo;
        var textoScore;

        var tiempohastaostaculo = 2;
        var tiempoMIN = 0.7;
        var tiempoMAX = 1.8;
        var obstaculoPosY = 16;
        var obstaculos = []; 
        var tipo_obstaculo = "cactus";

        function Start() {
            contenedor = document.querySelector(".box");
            dino = document.querySelector(".dino");
            suelo = document.querySelector(".suelo");
            textoScore = document.querySelector(".score");
            document.addEventListener("keydown", HandleKeyDown);
        }

        function HandleKeyDown(evt) {
            if (evt.keyCode == 32 || evt.keyCode == 38 || evt.keyCode == 87) {
                Saltar();
            }
        }

        function Saltar() {
            if (dinoPosY === sueloY) {
                saltando = true;
                velY = impulso;
                dino.classList.remove("dino-run");
                dino.classList.add("dino-jump");
            }
        }
        function Update() {
            var obst = Math.floor(Math.random() * 2);
            var obst2 = Math.floor(Math.random() * 3);
        if (score == 5 ) {
            live2 =  1;
       
            buy_live2 = true;
        }
     
   
        if (score == 15 ) {
            live2 =  1;
       
            buy_live2 = true;

        }
        if (score == 25 ) {
            live2 =  1;
   
            buy_live2 = true;
        }
            
        if (score == 50 ) {
            window.location.href = "win.html";
        }
                
         if (score > 4) {
                

                if (obst == 0){
                    tipo_obstaculo = "roco";
                }
                else if (obst == 1){
                    tipo_obstaculo = "roco2";
                }
                document.querySelector('.suelo').classList.add('suelo-roca');
                document.querySelector('.suelo').classList.remove('suelo-agua');
                document.querySelector('.suelo').classList.remove('suelo-volcan');
                document.querySelector('.suelo').classList.remove('suelo-cielo');
                document.querySelector('.suelo').classList.remove('suelo-park');
            }
            if (score > 9) {
                if (obst == 0){
                    tipo_obstaculo = "wer";
                }
                else if (obst == 1){
                    tipo_obstaculo = "wer2";
                }
                document.querySelector('.suelo').classList.remove('suelo-park');
                document.querySelector('.suelo').classList.remove('suelo-roca');
                document.querySelector('.suelo').classList.remove('suelo-volcan');
                document.querySelector('.suelo').classList.add('suelo-agua');
                document.querySelector('.suelo').classList.remove('suelo-bruja');
                document.querySelector('.suelo').classList.remove('suelo-cielo');
            }
            if (score > 14) {
                if (obst == 0){
                    tipo_obstaculo = "lava";
                }
                else if (obst == 1){
                    tipo_obstaculo = "lava2";
                }
                document.querySelector('.suelo').classList.remove('suelo-park');
                document.querySelector('.suelo').classList.remove('suelo-roca');
                document.querySelector('.suelo').classList.add('suelo-volcan');
                document.querySelector('.suelo').classList.remove('suelo-agua');
                document.querySelector('.suelo').classList.remove('suelo-bruja');
                document.querySelector('.suelo').classList.remove('suelo-cielo');
            }
            if (score > 19) {

                if (obst == 0){
                    tipo_obstaculo = "bruja";
                }
                else if (obst == 1){
                    tipo_obstaculo = "bruja2";
                }
                document.querySelector('.suelo').classList.remove('suelo-park');
                document.querySelector('.suelo').classList.add('suelo-bruja');
                document.querySelector('.suelo').classList.remove('suelo-agua');
                document.querySelector('.suelo').classList.remove('suelo-volcan');
                document.querySelector('.suelo').classList.remove('suelo-roca');
                document.querySelector('.suelo').classList.remove('suelo-cielo');
            }
            if (score > 24) {

 
                if (obst == 0){
                    tipo_obstaculo = "clo";
                }
                else if (obst == 1){
                    tipo_obstaculo = "clo2";
                }
                 document.querySelector('.suelo').classList.remove('suelo-park');
                document.querySelector('.suelo').classList.remove('suelo-roca');
                document.querySelector('.suelo').classList.add('suelo-cielo');
                document.querySelector('.suelo').classList.remove('suelo-agua');
                document.querySelector('.suelo').classList.remove('suelo-bruja');
                document.querySelector('.suelo').classList.remove('suelo-volcan');
            }
            if (score > 34) {
                
                if (obst2 == 0){
                    tipo_obstaculo = "park";
                }
                else if (obst2 == 1){
                    tipo_obstaculo = "park1";
                }
                else if (obst2 == 2){
                    tipo_obstaculo = "park2";
                }
                
                document.querySelector('.suelo').classList.remove('suelo-roca');
                 document.querySelector('.suelo').classList.remove('suelo-cielo');
                document.querySelector('.suelo').classList.add('suelo-park');
                document.querySelector('.suelo').classList.remove('suelo-agua');
                document.querySelector('.suelo').classList.remove('suelo-bruja');
                document.querySelector('.suelo').classList.remove('suelo-volcan');
            }
            if (score < 5){
                
                if (obst == 0){
                    tipo_obstaculo = "cactus";
                }
                else if (obst == 1){
                    tipo_obstaculo = "cactus2";
                }
                     document.querySelector('.suelo').classList.remove('suelo-park');
                    document.querySelector('.suelo').classList.remove('suelo-agua');
                    document.querySelector('.suelo').classList.remove('suelo-roca');
                    document.querySelector('.suelo').classList.remove('suelo-volcan');
                    document.querySelector('.suelo').classList.remove('suelo-bruja');
                    document.querySelector('.suelo').classList.remove('suelo-cielo');
            }
            if (parado) return;
            MoverSuelo();
            MoverDino();
            DecidirCrearObstaculos();
            MoverObstaculos();
            DetectarColision();
            manejarReinicio();
            if (opsion == 2){
                dino.classList.remove("dino3");
                dino.classList.remove("dino4");
                dino.classList.add("dino2");
                dino.classList.remove("dino6");
            }
            else if (opsion == 1){
                dino.classList.remove("dino2");
                dino.classList.remove("dino3");
                dino.classList.remove("dino4");
                dino.classList.remove("dino5");
                dino.classList.remove("dino6");
            }
            else if (opsion == 3){
                dino.classList.remove("dino2");
                dino.classList.remove("dino4");
                dino.classList.add("dino3");
                dino.classList.remove("dino5");
                dino.classList.remove("dino6");
            }
            else if (opsion == 4){
                dino.classList.remove("dino2");
                dino.classList.remove("dino3");
                dino.classList.remove("dino5");
                dino.classList.add("dino4");
                dino.classList.remove("dino6");
            }
            else if (opsion == 6){
                dino.classList.remove("dino2");
                dino.classList.remove("dino3");
                dino.classList.remove("dino5");
                dino.classList.remove("dino4");
                dino.classList.add("dino6");

            }
        }

        function MoverDino() {
            dinoPosY += velY * deltaTime;
            if (dinoPosY < sueloY) {
                TocarSuelo();
            }
            if (saltando) {
                velY -= gravedad * deltaTime;
            }
            dino.style.bottom = dinoPosY + "px";
        }

        function TocarSuelo() {
            dinoPosY = sueloY;
            velY = 0;
            saltando = false;
            dino.classList.add("dino-run");
            dino.classList.remove("dino-jump");
        }

        function MoverSuelo() {
            sueloX += CalcularDesplazamiento();
            suelo.style.left = -(sueloX % contenedor.clientWidth) + "px";
        }

        function CalcularDesplazamiento() {
            return velEscenario * deltaTime * gameVel;
        }

        function DecidirCrearObstaculos() {
            tiempohastaostaculo -= deltaTime;
            if (tiempohastaostaculo <= 0) {
                CrearObstaculos();
            }
        }

        function CrearObstaculos() {
            var obstaculo = document.createElement("div");
            contenedor.appendChild(obstaculo);
            obstaculo.classList.add(tipo_obstaculo);
            obstaculo.posX = contenedor.clientWidth;
            obstaculo.style.left = contenedor.clientWidth + "px";
            obstaculos.push(obstaculo);
            tiempohastaostaculo = tiempoMIN + Math.random() * (tiempoMAX - tiempoMIN) / gameVel;
        }

        function GanarPuntos() {
            score++;
            textoScore.innerHTML = score;
            gameVel += 0.005;
        }

        function MoverObstaculos() {
            for (var i = obstaculos.length - 1; i >= 0; i--) {
                if (obstaculos[i].posX < -obstaculos[i].clientWidth) {
                    obstaculos[i].parentNode.removeChild(obstaculos[i]);
                    obstaculos.splice(i, 1);
                    GanarPuntos();
                } else {
                    obstaculos[i].posX -= CalcularDesplazamiento();
                    obstaculos[i].style.left = obstaculos[i].posX + "px";
                }
            }
        }

        function DetectarColision() {
            for (var i = 0; i < obstaculos.length; i++) {
                if (obstaculos[i].posX > dinoPosX + dino.clientWidth) {
                    
                    break;
                } else {
                    if  (live2 ==  0){
                        if (isCollision(dino, obstaculos[i], 0, 0, 0, 0)) {
                            Estrellarse();    
                    }
                    }
                    if (live2 == 1) {
                        if (isCollision(dino, obstaculos[i], 0, 0, 0, 0)) {
                        if (obstaculos[i] && obstaculos[i].parentNode) {
                            obstaculos[i].parentNode.removeChild(obstaculos[i]);
                            obstaculos.splice(i, 1);
                            i--; // Ajustamos el índice porque eliminamos un elemento
                            GanarPuntos();
                            live2 = 0;
                        }
                    }
}
                }
            }
        }
    
        function isCollision(a, b, paddingTop, paddingRight, paddingBottom, paddingLeft) {
            var aRect = a.getBoundingClientRect();
            var bRect = b.getBoundingClientRect();
            return !(
                ((aRect.top + aRect.height - paddingBottom) < (bRect.top)) ||
                (aRect.top + paddingTop > (bRect.top + bRect.height)) ||
                ((aRect.left + aRect.width - paddingRight) < bRect.left) ||
                (aRect.left + paddingLeft > (bRect.left + bRect.width))
            );
        }
    function manejarReinicio() {
    if (parado) {
        reset();
    }
}

        function Estrellarse() {
            dino.classList.remove("dino-run");
            dino.classList.add("dino-est");
            parado = true;
        }
        function reset() {
            opsion  = prompt('Elige  el  personaje: 1. Dino  2. Dino Mom  3. Dino Dad 4. Dino Sister' );
            dino.classList.remove("dino-est");
            dino.classList.add("dino-run");
            parado = false;
            score = 0;
            textoScore.innerHTML = score;
            dino.style.left = dinoPosX + "px";
            obstaculos.forEach(o => o.remove());
            obstaculos = [];
            tipo_obstaculo = "cactus";
            suelo.classList.remove('suelo-agua');
            suelo.classList.remove('suelo-roca');
            suelo.classList.remove('suelo-volcan');
            gameVel = 1;
            document.querySelector('.suelo').classList.remove('suelo-bruja');
            document.querySelector('.suelo').classList.remove('suelo-cielo');
            document.querySelector('.suelo').classList.remove('suelo-park');
            if (buy_live2){
                live2 = 1;
            } 
            
        }