import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const MatterComponent = () => {
	const canvasRef = useRef(null);

	useEffect(() => {
		// module aliases
		var Engine = Matter.Engine,
			Render = Matter.Render,
			Runner = Matter.Runner,
			Bodies = Matter.Bodies,
			Composite = Matter.Composite;

		// create an engine
		var engine = Engine.create();

		// create a renderer
		var render = Render.create({
			canvas: canvasRef.current,

			engine: engine,
			options: {
				height: window.innerHeight,
				width: document.documentElement.clientWidth
			}
		});

		// create two boxes and a ground
		var boxA = Bodies.rectangle(550, 200, 80, 80);
		var boxB = Bodies.rectangle(600, 50, 80, 80);
		var boxC = Bodies.rectangle(650, 150, 80, 80);
		var boxD = Bodies.rectangle(700, 100, 80, 80);
		var ground = Bodies.rectangle(750, 610, 750, 40, { isStatic: true });

		// add all of the bodies to the world
		Composite.add(engine.world, [boxA, boxB, boxC, boxD,	 ground]);

		// run the renderer
		Render.run(render);

		// create runner
		var runner = Runner.create();

		// run the engine
		Runner.run(runner, engine);
	}, []);

	return (
		<canvas
			ref={canvasRef}
		></canvas>
	);
};

export default MatterComponent;
