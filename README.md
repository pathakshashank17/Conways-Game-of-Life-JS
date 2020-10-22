<h1 align="center">Conway's Game of Life</h1>
<p align="center">
    <img src="examples/Crawler.gif">
</p>

Conway's Game of Life is a cellular automaton (yes, its automaton) devised by British mathematician John Horton Conway (May his soul rest in peace 🙏) in 1970. It is a zero player game, i.e. its evolution is determined by its intial state. It is Turing complete.

This static app hosts 50 x 50 grid using which one can set the initial state of the population. Hosted at [Github page](https://pathakshashank17.github.io/Conways-Game-of-Life-JS/). Currently the grid is not optimized for mobile devices, so please use desktop version of the site if possible.

## Rules
- Any live cell with fewer than two live neighbours dies, as if by underpopulation.
- Any live cell with two or three live neighbours lives on to the next generation.
- Any live cell with more than three live neighbours dies, as if by overpopulation.
- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

## Examples
### Still life
<p float="left">
  <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Game_of_life_block_with_border.svg" width="100" alt="Block" style="padding-right:10px"/>
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/Game_of_life_beehive.svg" width="100" alt="Block" style="padding-right:10px"/> 
  <img src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Game_of_life_loaf.svg" width="100" alt="Block" style="padding-right:10px"/>
</p>

### Oscillator
<p float="left">
  <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Game_of_life_blinker.gif" width="100" alt="Blinker" style="padding-right:10px"/>
  <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Game_of_life_toad.gif" width="100" alt="Toad" style="padding-right:10px"/> 
  <img src="https://upload.wikimedia.org/wikipedia/commons/0/07/Game_of_life_pulsar.gif" width="100" alt="Pulsar" style="padding-right:10px"/>
</p>

### Spaceships
<p float="left">
  <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Game_of_life_animated_glider.gif" width="100" alt="Glider" style="padding-right:10px"/>
  <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Game_of_life_animated_LWSS.gif" width="130" alt="Light Weight Spaceship" style="padding-right:10px"/>
</p>

### Gun
<p float="left">
  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Gospers_glider_gun.gif" width="250" alt="Gosper's Glider Gun" style="padding-right:10px"/>
</p>

<p align="center">
All info and resources cited from <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Conway's Game of Life</a> on Wikipedia
</p>