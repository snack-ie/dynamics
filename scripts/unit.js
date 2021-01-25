const you = extend(UnitType, "you", {
        update(me){
               this.super$update(me);
               me.health = me.health - 0.1666666667
        }
});
you.constructor = () => extend(UnitEntity, {});