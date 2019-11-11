import {vec3, vec4, mat4, } from 'gl-matrix';

let panAccel = .1;
let panSpeed =  5;
let zoomAccel = .1;
let zoomSpeed = 10;
export class Camera{
    eye;
    look;
    up;
    dist;

	constructor(eye, look, up, dist){
		this.eye = eye;
		this.look = look;
		this.up = up;
		this.dist = dist;
	}
	
	getViewMat(){
		let result = mat4.create();
		let center = vec4.create();
		let toAdd = vec4.create();
		vec3.scale(toAdd, this.look, this.dist);
		vec3.add(center, this.eye, toAdd);
		mat4.lookAt(result, this.eye, center, this.up);
		let scale = mat4.create();
		mat4.fromScaling(scale, [-1, 1, 1]);
		mat4.mul(result, result, scale);
		return result;
	}
	
	moveTo(pos){
		this.eye = pos;
	}
	
	lookAt(pos){
		vec3.sub(this.look, pos, this.eye);
		this.dist = vec3.len(this.look);
		vec3.normalize(this.look, this.look);
		vec3.cross(this.up, this.look, [-1, 0, 0]);
	}
	
	move(dir){
		let right = vec3.create();
		vec3.cross(right, this.up, this.look);
		let toMoveRight = vec3.create();
		vec3.scale(toMoveRight, right, dir[0]);
		
		let toMoveUp = vec3.create();
		vec3.scale(toMoveUp, this.up, dir[1]);
		
		let toMoveForward = vec3.create();
		vec3.scale(toMoveForward, this.look, dir[2]);
		
		let toMove = vec3.create();
		vec3.add(toMove, toMoveRight, toMoveUp);
		vec3.add(toMove, toMove, toMoveForward);
		
		vec3.add(this.eye, this.eye, toMove);
	}
	
	update(delta, vel, mouseChange){
		let dir = vec3.create();
		vec3.scale(dir, vel, delta);
		this.move(dir);
		
		this.rotate(mouseChange[0], mouseChange[1], 0, 1, delta);
	}
	
	rotate(yaw, pitch, roll, speed, delta){
		let right = vec3.create();
		vec3.cross(right, this.up, this.look);
		let tmp1 = vec3.create();		
		let tmp2 = vec3.create();
		let theta = -roll * speed * delta;
		vec3.scale(tmp1, this.up, Math.cos(theta));
		vec3.scale(tmp2, right, Math.sin(theta));
		vec3.add(this.up, tmp1, tmp2);
		
		theta = -yaw * speed * delta;
		vec3.scale(tmp1, this.look, Math.cos(theta));
		vec3.scale(tmp2, right, Math.sin(theta));
		vec3.add(this.look, tmp1, tmp2);
		
		theta = -pitch * speed * delta;
		vec3.scale(tmp1, this.look, Math.cos(theta));
		vec3.scale(tmp2, this.up, Math.sin(theta));
		vec3.add(this.look, tmp1, tmp2);
	}
}