export const makeProgram = (gl, vsSource, fsSource) => {
	let vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
	let fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
	if(!vertexShader || !fragmentShader) return null;
	
	let program = gl.createProgram();
	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	gl.linkProgram(program);
	
	if(!gl.getProgramParameter(program, gl.LINK_STATUS)){
		alert('Fatal error linking program. See console.');
		console.error('Error linking program. ' + gl.getProgramInfoLog(program));
		 return null;
	}
	return program;
}

function loadShader(gl, type, source){
	let shader = gl.createShader(type);
	
	gl.shaderSource(shader, source);
	
	gl.compileShader(shader);
	if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)){
		alert('Fatal error compiling shader. See console');
		console.error('Error compiling shader. ' + gl.getProgramInfoLog(shader));
		return null;
	}
	return shader;
}

export const getProgramInfo = (gl, p) =>{
	return {
		program: p,
		attribLoc: {
			aPos: gl.getAttribLocation(p, 'aPos'),
			aColor: gl.getAttribLocation(p, 'aColor'),
			aNorm: gl.getAttribLocation(p, 'aNorm'),
		},
		uniformLoc: {
			projMat: gl.getUniformLocation(p, 'uProjMat'),
			modelMat: gl.getUniformLocation(p, 'uModelMat'),
			viewMat: gl.getUniformLocation(p, 'uViewMat'),
			lightPos: gl.getUniformLocation(p, 'uLightPos'),
			time: gl.getUniformLocation(p, 'uTime'),
			audio: gl.getUniformLocation(p, 'uAudio'),
		},
	};
}

export const initGl = (canvas) => {
	let gl = canvas.getContext('webgl2');
	
	if(!gl){
		console.error('WebGL2 not supported. Using experimental.');
		gl = canvas.getContext('experimental-webgl');
	}
	
	if(!gl){
		console.error('WebGL2 not supported. Exiting.');
		return;
	}
	
	console.log('WebGL loaded');
	
	
	gl.clearColor(0, 0, 0, 1);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	gl.enable(gl.DEPTH_TEST);
	gl.enable(gl.CULL_FACE);
    gl.blendFuncSeparate( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA,
                             gl.ZERO, gl.ONE );
    gl.enable(gl.BLEND);

	return gl;
}