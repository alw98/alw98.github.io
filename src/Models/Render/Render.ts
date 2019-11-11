import {makeProgram} from './Utils';
import {mat4} from 'gl-matrix';

export class RenderItem{
    program;
    vao;
    gl;
    renderMode;
    buffers;
    uMat4fvs;
    uConstMat4fvs;
    u1fs;
    renderAmt;
	elem;
	renderBack;
	depthTest;
	elemArrBuff;
	
	constructor(gl, vsSrc, fsSrc){
		this.gl = gl;
		this.program = makeProgram(this.gl, vsSrc, fsSrc);
		this.vao = this.gl.createVertexArray();
		this.gl.bindVertexArray(this.vao);
		this.renderMode = this.gl.TRIANGLES;
		this.buffers = [];
		this.uMat4fvs = [];
		this.uConstMat4fvs = [];
		this.u1fs = [];
        this.elem = false;
        this.renderBack = false;
		this.depthTest = true;
	}
	
    addElemArrBuff(data){
        this.gl.bindVertexArray(this.vao);
        this.elemArrBuff = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.elemArrBuff);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(data), this.gl.STATIC_DRAW);
        this.renderAmt = data.length;
        this.elem = true;
    }
    
	addAttrib(name, data, numC, type, norm, stride, offset){
		let buff = this.gl.createBuffer();
		let aLoc = this.gl.getAttribLocation(this.program, name);
		this.gl.bindVertexArray(this.vao);
		
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buff);
		this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(data), this.gl.STATIC_DRAW);
		
		this.gl.vertexAttribPointer(aLoc, numC, type, norm, stride, offset);
		this.gl.enableVertexAttribArray(aLoc);
		
		this.renderAmt = data.length / numC;
		this.buffers[name] = buff;		
		console.log(this.buffers);
	}
    
    newAttribData(name, data, numC){
        this.gl.bindVertexArray(this.vao);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffers[name]);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(data), this.gl.STATIC_DRAW);
        this.renderAmt = data.length / numC;
    }
	
	addUMat4fv(name){
		this.uMat4fvs[name] = this.gl.getUniformLocation(this.program, name);
	}
	
	
	addConstUMat4fv(name, val){
		this.uConstMat4fvs[name] = {
			uLoc: this.gl.getUniformLocation(this.program, name),
			uMat: val};
	}
	
	addU1f(name){
		this.u1fs[name] = this.gl.getUniformLocation(this.program, name);
	}
	
	render(uMat4fvs, u1fs){
		this.gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
		this.gl.clearDepth(1.0);                 // Clear everything
		this.gl.enable(this.gl.DEPTH_TEST);           // Enable depth testing
		this.gl.depthFunc(this.gl.LEQUAL);            // Near things obscure far things
	  
		// Clear the canvas before we start drawing on it.
	  
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
	  
		// Create a perspective matrix, a special matrix that is
		// used to simulate the distortion of perspective in a camera.
		// Our field of view is 45 degrees, with a width/height
		// ratio that matches the display size of the canvas
		// and we only want to see objects between 0.1 units
		// and 100 units away from the camera.
	  
		const fieldOfView = 45 * Math.PI / 180;   // in radians
		const aspect = this.gl.canvas.clientWidth / this.gl.canvas.clientHeight;
		const zNear = 0.1;
		const zFar = 100.0;
		const projectionMatrix = mat4.create();
	  
		// note: glmatrix.js always has the first argument
		// as the destination to receive the result.
		mat4.perspective(projectionMatrix,
						 fieldOfView,
						 aspect,
						 zNear,
						 zFar);
	  
		// Set the drawing position to the "identity" point, which is
		// the center of the scene.
		const modelViewMatrix = mat4.create();
	  
		// Now move the drawing position a bit to where we want to
		// start drawing the square.
	  
		mat4.translate(modelViewMatrix,     // destination matrix
					   modelViewMatrix,     // matrix to translate
					   [-0.0, 0.0, -6.0]);  // amount to translate
	  
		  this.gl.bindVertexArray(this.vao);
		// Tell WebGL to use our program when drawing
	  
		this.gl.useProgram(this.program);
	  
		// Set the shader uniforms
	  
		this.gl.uniformMatrix4fv(
			this.uMat4fvs['uProjMat'],
			false,
			projectionMatrix);
		this.gl.uniformMatrix4fv(
			this.uMat4fvs['uViewMat'],
			false,
			modelViewMatrix);
	  
		{
			console.log('render?');
		  const offset = 0;
		  const vertexCount = 4;
		  this.gl.drawElements(this.gl.TRIANGLES, this.renderAmt, this.gl.UNSIGNED_SHORT, 0);
		}
	}
    //     if(this.renderAmt === 0) return;
	// 	this.gl.useProgram(this.program);
		
		
	// 	for(let i in uMat4fvs){
	// 		console.log(uMat4fvs[i]);
	// 		this.gl.uniformMatrix4fv(
	// 			this.uMat4fvs[i],
	// 			false,
	// 			uMat4fvs[i]);
	// 	}
		
		
	// 	for(let i in this.uConstMat4fvs){
	// 		this.gl.uniformMatrix4fv(
	// 			this.uConstMat4fvs[i].uLoc,
	// 			false,
	// 			this.uConstMat4fvs[i].uMat);
	// 	}
		
	// 	for(let i in u1fs){
	// 		this.gl.uniform1f(this.u1fs[i], u1fs[i]);
	// 	}
		
	// 	if(this.renderBack)
    //         this.gl.disable(this.gl.CULL_FACE);
    //     else{
    //         this.gl.enable(this.gl.CULL_FACE);
    //         this.gl.cullFace(this.gl.BACK);
    //     }
    //     if(this.depthTest)
	// 		this.gl.enable(this.gl.DEPTH_TEST);
	// 	else this.gl.disable(this.gl.DEPTH_TEST);
		
	// 	this.gl.bindVertexArray(this.vao);
    //     if(!this.elem)
	// 	  this.gl.drawArrays(this.renderMode, 0, this.renderAmt);
    //     else {
    //         this.gl.drawElements(this.gl.TRIANGLES, this.renderAmt, this.gl.UNSIGNED_SHORT, 0);
	// 		console.log('drew elements');
	// 	}
	// }
}