import React from 'react';
import Matter from "matter-js";
import '../css/App.css';

const Mater = () => {

    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Bodies = Matter.Bodies,
        Composite = Matter.Composite


// create an engine
    var engine = Engine.create();

// create a renderer
    var render = Render.create({
        element: document.body,
        engine: engine,
        wireframes: false,
        background: 'rgb(255,0,0)' // or '#ff0000' or other valid color string

    });

    var boxA = Bodies.circle(200, 200, 20, 20,);

    function randomMovement(){

        setInterval(function(){
            let randomNumber = Math.random()*760;
            let randomNumber2 = Math.random()*560;

            boxA = Bodies.circle(randomNumber, randomNumber2, 20, {
                render: {
                    fillStyle: 'red'
                }
            });
            Composite.add(engine.world, [boxA]);
            },1500)


    }

    randomMovement();


// create two boxes and a ground
    var ground = Bodies.rectangle(400, 610, 810, 50, { isStatic: true });
    var leftWall = Bodies.rectangle(-45, 210, 110, 800, { isStatic: true });
    var rightWall = Bodies.rectangle(840, 210, 110, 800, { isStatic: true });
    var ceiling = Bodies.rectangle(400, -10, 810, 50, { isStatic: true });
    engine.world.gravity.y = 0;

// add all of the bodies to the world
    Composite.add(engine.world, [ground,leftWall,rightWall,ceiling]);

// run the renderer
    Render.run(render);

// create runner
    var runner = Runner.create();

// run the engine
    Runner.run(runner, engine);

    return (
        <div>

        </div>
    );
};

export default Mater;