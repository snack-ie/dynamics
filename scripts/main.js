var ost = loadMusic("mytime");
require("unit");
Events.on(WorldLoadEvent, e => {
  Vars.control.sound.stop();
  ost.stop();
  ost.play();
});
if(!Vars.headless){
  Core.app.post(() => {
    Vars.mods.locateMod("depression").meta.displayName = "[#333333]depression";
  });
};