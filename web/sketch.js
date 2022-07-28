let fac;
let cur;
let scale = 40;
let dir = {
        u: [1,0],
        r: [0,1],
        l: [0,-1],
        d: [-1,0]
    }
function setup() {
  createCanvas(200, 200);
  rectMode(CORNER);
  createButtons();
  _place(0,0, 'u')
  _move()
  _right()
  _right()
  _move()
  console.info(cur)
}

function createButtons() {
  mvbtn = createButton('MOVE');
  //button.position(0, 0);
  mvbtn.mousePressed(_move);
  rightbtn = createButton('RIGHT');
  //button.position(0, 0);
  rightbtn.mousePressed(_right);
  leftbtn = createButton('LEFT');
  //button.position(0, 0);
  leftbtn.mousePressed(_left);
  
}

function draw() {
    background(220);
    rectMode(CORNER);
    fill(255)
    for(let i=0;i<5;i++){
        for(let j=0;j<5;j++){
            rect(i *scale,j*scale, scale,scale)
        }
    }
    translate(100,100)
    fill(100)
    rectMode(CENTER);
    rect(cur.x *scale,cur.y*scale, scale,scale)
    let tt = p5.Vector.add(cur,fac)
    line(cur.x*scale,cur.y*scale,tt.x*scale,tt.y*scale)
}

function _place(x,y,f) {
  cur = createVector(x,y)
  fac = createVector(...dir[f])
}
function _move() {
  cur = p5.Vector.add(cur,fac)
}
function _right() {
  f = fac.rotate(HALF_PI)
}

function _left() {
  f = fac.rotate(-HALF_PI)
}

