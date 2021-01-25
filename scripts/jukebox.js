const happy = extend(StatusEffect, "happy", {
   update(unit, time){
	   unit.maxHealth = unit.maxHealth + (unit.maxHealth * 10%)
	   unit.health = unit.health + (unit.health * 10%)
	}
});

const hapbox = extend(ItemTurret, "hapbox", {
  init(){
    this.super$init();
  }
});
hapbox.buildType = () => extend(turret.turretBuild, hapbo, {
       validateTarget(){
        if(this.target != null){
            if(Units.closest(this.team, this.x, this.y, this.range(), u => u.checkTarget(true, true)) != null || Units.closestEnemy(this.team, this.x, this.y, this.range(), u => u.checkTarget(true, true)) != null){
                return true;
            }
            else{
                return false;
            }
        }
        else if(this.isControlled() == true || this.logicControlled() == true){
            return true;
        }
        else{
            return false;
        }
    }
});
hapbox.ammo(Vars.content.getByName(ContentType.item,"coal"), hap)