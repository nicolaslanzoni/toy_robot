let fac;
let cur;
let scale = 40;
let dir = {
        r: [1,0],
        u: [0,-1],
        d: [0,1],
        l: [-1,0]
    }
function setup() {
  createCanvas(200, 200);
  rectMode(CORNER);
  createButtons();
  _place(1,2, 'l')
  console.info(cur)
}

function createButtons() {
  mvbtn = createButton('MOVE');
  //button.position(0, 0);
  mvbtn.mousePressed(_move);

  leftbtn = createButton('LEFT');
  //button.position(0, 0);
  leftbtn.mousePressed(_left);
  rightbtn = createButton('RIGHT');
  //button.position(0, 0);
  rightbtn.mousePressed(_right);
  
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
    translate(20,20)
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
  let _cur = p5.Vector.add(cur,fac)
   if (_cur.x >= 5 || _cur.y >= 5 || _cur.x < 0 || _cur.y < 0)
   return null
   else
   cur = _cur
  }
function _right() {
  f = fac.rotate(HALF_PI)
}

function _left() {
  f = fac.rotate(-HALF_PI)
}

