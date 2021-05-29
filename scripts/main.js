require('tnt');
if(!Vars.headless){
  Core.app.post(() => {
    Vars.mods.locateMod("dynamics").meta.displayName = "[#333333]dynamics";
  });
};
