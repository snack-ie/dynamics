function boom(x, y){
  Fx.impactExplosion.at(x, y);
  Fx.massiveExplosion.at(x, y);
  Effect.shake(10, 15, x, y);
  Damage.damage(x, y, 20 * Vars.tilesize, 1000);
  for (let i = 0; i <  6; i++){
    let randX = Mathf.range(15);
    let randY = Mathf.range(15);
    let time = Math.random(0.4);
    Timer.schedule(() => {
      Fx.shockWave.at(x + rand, y + rand);
    }, time)
  }
}

let dynamite = extend(GenericCrafter, "dynamite", {});

dynamite.buildType = () => extend(GenericCrafter.GenericCrafterBuild, dynamite, {
  onDestroyed(){
    this.super$onDestroyed();
    boom();
  }, 
  placed(){
    this.super$placed();
    if (this.health >= (this.maxHealth - 5)){
      Timer.schedule(() => {
        if (this.health >= (this.maxHealth - 5)){
          boom(this.x, this.y);
          };
        }, 5);
      } else {
        boom(this.x, this.y);
      };
}});
