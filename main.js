var GAME_LEVELS = [
  [
    "                                                                                ",
    "                                                                                ",
    "                                                                                ",
    "                                                                                ",
    "                                                                                ",
    "                                                                                ",
    "                                                                  xxx           ",
    "                                                   xx      xx    xx!xx          ",
    "                                    o o      xx                  x!!!x          ",
    "                                                                 xx!xx          ",
    "                                   xxxxx                          xvx           ",
    "                                                                            xx  ",
    "  xx                                      o o                                x  ",
    "  x                     o                                                    x  ",
    "  x                                      xxxxx                             o x  ",
    "  x          xxxx       o                                                    x  ",
    "  x  @       x  x                                                xxxxx       x  ",
    "  xxxxxxxxxxxx  xxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxx     xxxxxxx   xxxxxxxxx  ",
    "                              x   x                  x     x                    ",
    "                              x!!!x                  x!!!!!x                    ",
    "                              x!!!x                  x!!!!!x                    ",
    "                              xxxxx                  xxxxxxx                    ",
    "                                                                                ",
    "                                                                                ",
  ],
  [
    "                                      x!!x                        xxxxxxx                                    x!x  ",
    "                                      x!!x                     xxxx     xxxx                                 x!x  ",
    "                                      x!!xxxxxxxxxx           xx           xx                                x!x  ",
    "                                      xx!!!!!!!!!!xx         xx             xx                               x!x  ",
    "                                       xxxxxxxxxx!!x         x                                    o   o   o  x!x  ",
    "                                                xx!x         x     o   o                                    xx!x  ",
    "                                                 x!x         x                                xxxxxxxxxxxxxxx!!x  ",
    "                                                 xvx         x     x   x                        !!!!!!!!!!!!!!xx  ",
    "                                                             xx  |   |   |  xx            xxxxxxxxxxxxxxxxxxxxx   ",
    "                                                              xx!!!!!!!!!!!xx            v                        ",
    "                                                               xxxx!!!!!xxxx                                      ",
    "                                               x     x            xxxxxxx        xxx         xxx                  ",
    "                                               x     x                           x x         x x                  ",
    "                                               x     x                             x         x                    ",
    "                                               x     x                             xx        x                    ",
    "                                               xx    x                             x         x                    ",
    "                                               x     x      o  o     x   x         x         x                    ",
    "               xxxxxxx        xxx   xxx        x     x               x   x         x         x                    ",
    "              xx     xx         x   x          x     x     xxxxxx    x   x   xxxxxxxxx       x                    ",
    "             xx       xx        x o x          x    xx               x   x   x               x                    ",
    "     @       x         x        x   x          x     x               x   x   x               x                    ",
    "    xxx      x         x        x   x          x     x               x   xxxxx   xxxxxx      x                    ",
    "    x x      x         x       xx o xx         x     x               x     o     x x         x                    ",
    "!!!!x x!!!!!!x         x!!!!!!xx     xx!!!!!!!!xx    x!!!!!!!!!!     x     =     x x         x                    ",
    "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxx     x!!!!!!!xx!     xxxxxxxxxxxxx xx  o o  xx                    ",
    "!!!!x x!!!!!!x         x!!!!!x    o                 xx!!!!!!xx !                    xx     xx                     ",
    "!!!!x x!!!!!!x         x!!!!!x                     xx!!!!!!xx  !                     xxxxxxx                      ",
    "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxxxxxx!!!!!!xx   !                                                  ",
    "!!!!x x!!!!!!x         x!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx    !                                                  ",
    "!!!!x x!!!!!!x         x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx     !                                                  ",
  ],
  [
    "                                                                                                              ",
    "                                                                                                              ",
    "                                                                                                              ",
    "                                                                                                              ",
    "                                                                                                              ",
    "                                        o                                                                     ",
    "                                                                                                              ",
    "                                        x                                                                     ",
    "                                        x                                                                     ",
    "                                        x                                                                     ",
    "                                        x                                                                     ",
    "                                       xxx                                                                    ",
    "                                       x x                 !!!        !!!  xxx                                ",
    "                                       x x                 !x!        !x!                                     ",
    "                                     xxx xxx                x          x                                      ",
    "                                      x   x                 x   oooo   x       xxx                            ",
    "                                      x   x                 x          x      x!!!x                           ",
    "                                      x   x                 xxxxxxxxxxxx       xxx                            ",
    "                                     xx   xx      x   x      x                                                ",
    "                                      x   xxxxxxxxx   xxxxxxxx              x x                               ",
    "                                      x   x           x                    x!!!x                              ",
    "                                      x   x           x                     xxx                               ",
    "                                     xx   xx          x                                                       ",
    "                                      x   x= = = =    x            xxx                                        ",
    "                                      x   x           x           x!!!x                                       ",
    "                                      x   x    = = = =x     o      xxx       xxx                              ",
    "                                     xx   xx          x                     x!!!x                             ",
    "                              o   o   x   x           x     x                xxv        xxx                   ",
    "                                      x   x           x              x                 x!!!x                  ",
    "                             xxx xxx xxx xxx     o o  x!!!!!!!!!!!!!!x                   vx                   ",
    "                             x xxx x x xxx x          x!!!!!!!!!!!!!!x                                        ",
    "                             x             x   xxxxxxxxxxxxxxxxxxxxxxx                                        ",
    "                             xx           xx                                         xxx                      ",
    "  xxx                         x     x     x                                         x!!!x                xxx  ",
    "  x x                         x    xxx    x                                          xxx                 x x  ",
    "  x                           x    xxx    xxxxxxx                        xxxxx                             x  ",
    "  x                           x           x                              x   x                             x  ",
    "  x                           xx          x                              x x x                             x  ",
    "  x                                       x       |xxxx|    |xxxx|     xxx xxx                             x  ",
    "  x                xxx             o o    x                              x         xxx                     x  ",
    "  x               xxxxx       xx          x                             xxx       x!!!x          x         x  ",
    "  x               oxxxo       x    xxx    x                             x x        xxx          xxx        x  ",
    "  x                xxx        xxxxxxxxxxxxx  x oo x    x oo x    x oo  xx xx                    xxx        x  ",
    "  x      @          x         x           x!!x    x!!!!x    x!!!!x    xx   xx                    x         x  ",
    "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
    "                                                                                                              ",
    "                                                                                                              ",
  ],
  [
    "                                                                                                  xxx x       ",
    "                                                                                                      x       ",
    "                                                                                                  xxxxx       ",
    "                                                                                                  x           ",
    "                                                                                                  x xxx       ",
    "                          o                                                                       x x x       ",
    "                                                                                             o o oxxx x       ",
    "                   xxx                                                                                x       ",
    "       !  o  !                                                xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx       ",
    "       x     x                                                x   x x   x x   x x   x x   x x   x x           ",
    "       x= o  x            x                                   xxx x xxx x xxx x xxx x xxx x xxx x xxxxx       ",
    "       x     x                                                  x x   x x   x x   x x   x x   x x     x       ",
    "       !  o  !            o                                  xxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxxxx       ",
    "                                                                                                              ",
    "          o              xxx                              xx                                                  ",
    "                                                                                                              ",
    "                                                                                                              ",
    "                                                      xx                                                      ",
    "                   xxx         xxx                                                                            ",
    "                                                                                                              ",
    "                          o                                                     x      x                      ",
    "                                                          xx     xx                                           ",
    "             xxx         xxx         xxx                                 x                  x                 ",
    "                                                                                                              ",
    "                                                                 ||                                           ",
    "  xxxxxxxxxxx                                                                                                 ",
    "  x         x o xxxxxxxxx o xxxxxxxxx o xx                                                x                   ",
    "  x         x   x       x   x       x   x                 ||                  x     x                         ",
    "  x  @      xxxxx   o   xxxxx   o   xxxxx                                                                     ",
    "  xxxxxxx                                     xxxxx       xx     xx     xxx                                   ",
    "        x=                  =                =x   x                     xxx                                   ",
    "        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
    "                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "                                                                                                              ",
  ],
];

var simpleLevelPlan = [
  "                      ",
  "                      ",
  "  x              = x  ",
  "  x         o o    x  ",
  "  x @      xxxxx   x  ",
  "  xxxxx            x  ",
  "      x!!!!!!!!!!!!x  ",
  "      xxxxxxxxxxxxxx  ",
  "                      ",
];

class level {
  constructor(plan) {
    let rows = plan
      .trim()
      .split("\n")
      .map((l) => [...l]);
    this.height = rows.length;
    this.width = rows[0].length;
    this.startActors = [];

    this.rows = rows.map((row, y) => {
      return row.map((ch, x) => {
        let type = levelChars[ch];
        if (typeof type == "string") return type;
        this.startActors.push(type.create(new Vec(x, y), ch));
        return "empty";
      });
    });
  }
}

// Lost or Win
class state {
  constructor(level, actors, status) {
    this.level = level;
    this.actors = actors;
    this.status = status;
  }

  static start(level) {
    return new State(level, level.startActors, "playing");
  }

  get player() {
    return this.actors.find((a) => a.type == "player");
  }
}

// Vec class used for two dimensional values, such as position and size of actors

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }
  times(factor) {
    return new Vec(this.x * factor, this.y * factor);
  }
}

// player class has a property speed that stores its current speed to simulate momentum and gravity

class Player {
  constructor(pos, speed) {
    this.pos = pos;
    this.speed = speed;
  }
  get type() {
    return "player";
  }

  static create(pos) {
    return new Player(pos.plus(new Vec(0, -0.5)), new Vec(0, 0));
  }
}
Player.prototype.size(new Vec(0.8, 1.8));

// Coin class

class Coin {
  constructor(pos, basePos, wooble) {
    this.pos = pos;
    this.basePos = basePos;
    this.wooble = wooble;
  }
  get type() {
    return "coin";
  }

  static create(pos) {
    let basePos = pos.plus(new Vec(0.2, 0.1));
    return new Coin(basePos, basePos, Math.random() * Math.PI * 2);
  }
}
Coin.prototype.size = new Vec(0.6, 0.6);
