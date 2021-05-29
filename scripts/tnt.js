function boom(x, y){
  Fx.impactShockwave.at(x, y);
  Fx.massiveExplosion.at(x, y);
  Effect.shake(10, 15, x, y);
  Damage.damage(x, y, 20 * Vars.tilesize, 1000);
  for (let i = 0; i <  6; i++){
    let randX = Mathf.range(15);
    let randY = Mathf.range(15);
    let time = Math.random(0.4);
    Timer.schedule(() => {
      Fx.explosion.at(x + randX, y + randY);
    }, time)
  }
}

let dynamite = extend(GenericCrafter, "dynamite", {
  explosionDelay: 5.5
});

dynamite.buildType = () => extend(GenericCrafter.GenericCrafterBuild, dynamite, {
  onDestroyed(){
    this.super$onDestroyed();
    boom(this.x, this.y);
  }, 
  placed(){
    this.super$placed();
    Timer.schedule(() => {
      if(this.health >= this.maxHealth - 5) boom(this.x, this.y);
    }, this.explosionDelay);
  }
});
