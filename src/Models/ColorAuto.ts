import {Theme} from './Theme';

const DEBUG = false;
let p5, parent, w, h;
const xRes = 200, yRes = 200, maxLev = 4, simSteps = 1;
let grid;
let lastTheme
let background
let curColor;
let alive : Pair[];

export const setup = (p: any, par: any) => {
  p5 = p;
  p5.disableFriendlyErrors = true;
  parent = par;
  w = window.innerWidth;
  h = window.innerHeight - 40;
  grid = Array(xRes).fill(0).map(x => Array(yRes));
  for(let x = 0; x < grid.length; x++){
    for(let y = 0; y < grid[0].length; y++){
      let robit = new Robit();
      grid[x][y] = robit;
    }
  } 
  alive = [];
  lastTheme = Theme;
  background = Theme === 'dark' ? 0 : 255; 
  curColor = {r: 255, g: 0, b: 0};
  let canvas = p5.createCanvas(w, h).parent(parent).canvas;
  canvas.className += " automaton-canvas"
  canvas.addEventListener('touchmove', function(e) {
  
          e.preventDefault();
  
  }, false);
}

export const draw = (p5: any) => {
  const hw = w/2, hh = h/2, ma = Math.max(w, h), hma = ma/2;
  setupCanvasForDraw(p5, hw, hh);
  if(DEBUG) drawBackLines(p5, ma, hma);
  if(DEBUG) drawGridPoints(p5, ma, hma);
  updateGrid();
  drawGrid(p5, ma, hma);

    if(p5.frameCount % 25 === 0)
      console.log(p5.frameRate());
}

const updateGrid = () => {
  for(let i = 0; i < simSteps; i++){
    alive.forEach(pair => {
      let x = pair.l, y = pair.r;
      let cur = grid[x][y];
      if(!cur.exists){
        console.log("something dead is alive");
        return;
      }
      let dx = Math.floor(Math.random() * 3 - 1);
      let dy = Math.floor(Math.random() * 3 - 1);
      if((x !== 0 || dx !== -1) && (x !== xRes - 1 || dx !== 1)){
        if((y !== 0 || dy !== -1) && (y !== yRes - 1 || dy !== 1)){
          let f = grid[x + dx][y + dy];
          if(!f.exists && cur.level > 0){
            f.set(cur.c.r, cur.c.g, cur.c.b, cur.level - 1);
            alive.push(new Pair(x + dx, y + dy));

          } else if(f.exists){
            if(cur.c.r === 255 && f.c.b === 255){

              if(f.level === 0)
                f.set(255, 0, 0, 0);
              else f.level--;
              if(cur.level < maxLev) cur.level++;

            } else if(cur.c.g === 255 && f.c.r === 255){

              if(f.level === 0)
                f.set(0, 255, 0, 0);
              else f.level--;
              if(cur.level < maxLev) cur.level++;

            } else if(cur.c.b === 255 && f.c.g === 255){

              if(f.level === 0)
                f.set(0, 0, 255, 0);
              else f.level--;
              if(cur.level < maxLev) cur.level++;


            }
          }
        }
      }
    });
  }
  
}

export const windowResized = (p5: any) => {
  w = window.innerWidth;
  h = window.innerHeight - 40;
  p5.resizeCanvas(w, h);
}

export const mouseDragged = (p5) => {
  let x = p5.mouseX, y = p5.mouseY;
  if(x < 0 || x > w || y < 0 || y > h)
    return;
  const adjX = x - w / 2;
  const adjY = -(y - h / 2);
  let pair = getGridIndex(adjX, adjY);
  let robit = grid[pair.l][pair.r];
  if(!robit.exists)
    alive.push(pair);
  robit.set(curColor.r, curColor.g, curColor.b, maxLev);
}

export const mouseReleased = async (p5) => {
  let b = curColor;
  await new Promise(resolve => setTimeout(resolve, 1));
  if(b !== curColor)
    return;
  mouseDragged(p5);
}

export const colorRed = () => {
  curColor = {r: 255, g: 0, b: 0};
}

export const colorGreen = () => {
  curColor = {r: 0, g: 255, b: 0};
}

export const colorBlue = () => {
  curColor = {r: 0, g: 0, b: 255};
}
const drawGrid = (p5, ma, hma) => {
  const dx = ma / xRes, dy = ma / yRes;
  let  ystart, xstart, yend, xend;
  if(w === h){
    ystart = -hma;
    yend = hma;
    xstart = -hma;
    xend = hma;
  } else if(ma === w){
    ystart = -hma + (Math.ceil(((w / 2) - (h / 2)) / dy) - 1) * dy;
    yend = h / 2 + dy;
    yend = yend > hma ? h / 2 : yend;
    xstart = -hma;
    xend = hma;
  } else {
    xstart = -hma + (Math.ceil(((h / 2) - (w / 2)) / dy) - 1) * dx;
    xend = w / 2 + dx;
    xend = xend > hma ? w / 2 : xend;
    ystart = -hma;
    yend = hma;

  }
  alive.sort((a, b) => {
    let c1 = grid[a.l][a.r];
    let aval = c1.c.r * 3 + c1.c.g * 2 + c1.c.b;
    let c2 = grid[b.l][b.r];
    let bval = c2.c.r * 3 + c2.c.g * 2 + c2.c.b;
    return aval - bval;
  });
  p5.noStroke();
  let lastFill;
  alive.forEach(pair => {
    let xi = pair.l, yi = pair.r, x, y;
    x = -hma + xi * dx;
    y = -hma + yi * dx;
    if(x < xstart || x > xend || y < ystart || y > yend)
      return;
    let robit = grid[xi][yi];
    if(!lastFill || (robit.c.r !== lastFill.r || robit.c.g !== lastFill.g || robit.c.b !== lastFill.b)){
      lastFill = robit.c;
      p5.fill(robit.c.r, robit.c.g, robit.c.b);  
    }       
    p5.rect(x, y, dx, dy);
  });
}

const getGridIndex = (x, y) => {
  const ma = Math.max(w, h), hma = ma/2;
  const dx = ma / xRes, dy = ma / yRes;
  let xind = Math.floor((x + hma) / dx);
  let yind = Math.floor((y + hma) / dy);
  return new Pair(xind, yind);
}

const setupCanvasForDraw = (p5, hw, hh) => {
  p5.background(background);
  p5.stroke(255);
  p5.strokeWeight(1);
  p5.translate(hw, hh);
  p5.scale(1, -1);
  if(background % 255 !== 0)
    background += Theme === 'dark' ? -5 : 5;
  if(lastTheme !== Theme)
    background += Theme === 'dark' ? -5 : 5;
  lastTheme = Theme;
}

const drawBackLines = (p5, ma, hma) => {
  const dx = ma / xRes, dy = ma / yRes;
  let  ystart, xstart, yend, xend;
  if(ma === w){
    ystart = -hma + (Math.ceil(((w / 2) - (h / 2)) / dy) - 1) * dy;
    yend = h / 2 + dy;
    xstart = -hma - dx;
    xend = hma + dx;
  } else {
    xstart = -hma + (Math.ceil(((h / 2) - (w / 2)) / dy) - 1) * dx;
    xend = w / 2 + dx;
    ystart = -hma - dy;
    yend = hma + dy;
  }
  for(let x = xstart; x <= xend; x += dx)
    p5.line(x, -hma, x, hma);

  for(let y = ystart; y <= yend; y += dy)
    p5.line(-hma, y, hma, y);
}

const drawGridPoints = (p5, ma, hma) => {
  const dx = ma / xRes, dy = ma / yRes;
  let  ystart, xstart, yend, xend;
  if(ma === w){
    ystart = -hma + (Math.ceil(((w / 2) - (h / 2)) / dy) - 1) * dy;
    yend = h / 2 + dy;
    xstart = -hma - dx;
    xend = hma + dx;
  } else {
    xstart = -hma + (Math.ceil(((h / 2) - (w / 2)) / dy) - 1) * dx;
    xend = w / 2 + dx;
    ystart = -hma - dy;
    yend = hma + dy;
  }
  for(let y = ystart; y <= yend; y += dy){
      for(let x = xstart; x <= xend; x += dx){
        //p5.circle(x, y, 0);
      }
  }
}

class Robit{
  c: { r: number; g: number; b: number; };
  exists: boolean;
  level: number;

  constructor(){
    this.c = {r: 255, g: 255, b: 255};
    this.exists = false;
    this.level = 0;
  }

  kill(){
    this.exists = false;
  }

  set(r, g, b, level){
    this.c = {r, g, b};
    this.level = level;
    this.exists = true;
  }
}

class Pair{
  l:number;
  r:number;
  
  constructor(l, r){
    this.l = l;
    this.r = r;
  }
}