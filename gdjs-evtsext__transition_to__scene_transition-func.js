
if (typeof gdjs.evtsExt__Transition_To__Scene_Transition !== "undefined") {
  gdjs.evtsExt__Transition_To__Scene_Transition.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Transition_To__Scene_Transition = {};
gdjs.evtsExt__Transition_To__Scene_Transition.idToCallbackMap = new Map();
gdjs.evtsExt__Transition_To__Scene_Transition.GDDarkenObjects1= [];
gdjs.evtsExt__Transition_To__Scene_Transition.GDDarkenObjects2= [];


gdjs.evtsExt__Transition_To__Scene_Transition.asyncCallback25901396 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, eventsFunctionContext.getArgument("Scene"), false);
}
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Transition_To__Scene_Transition.idToCallbackMap.set(25901396, gdjs.evtsExt__Transition_To__Scene_Transition.asyncCallback25901396);
gdjs.evtsExt__Transition_To__Scene_Transition.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.evtsExt__Transition_To__Scene_Transition.asyncCallback25901396(runtimeScene, eventsFunctionContext, asyncObjectsList)), 25901396, asyncObjectsList);
}
}

}


};gdjs.evtsExt__Transition_To__Scene_Transition.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Darken"), gdjs.evtsExt__Transition_To__Scene_Transition.GDDarkenObjects1);
{for(var i = 0, len = gdjs.evtsExt__Transition_To__Scene_Transition.GDDarkenObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Transition_To__Scene_Transition.GDDarkenObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectOpacityTween2("", 255, "linear", 0.2, false);
}
}

{ //Subevents
gdjs.evtsExt__Transition_To__Scene_Transition.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Transition_To__Scene_Transition.func = function(runtimeScene, Darken, Tween, Scene, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Darken": Darken
},
  _objectArraysMap: {
"Darken": gdjs.objectsListsToArray(Darken)
},
  _behaviorNamesMap: {
"Tween": Tween
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Transition_To"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Transition_To"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Scene") return Scene;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Transition_To__Scene_Transition.GDDarkenObjects1.length = 0;
gdjs.evtsExt__Transition_To__Scene_Transition.GDDarkenObjects2.length = 0;

gdjs.evtsExt__Transition_To__Scene_Transition.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Transition_To__Scene_Transition.GDDarkenObjects1.length = 0;
gdjs.evtsExt__Transition_To__Scene_Transition.GDDarkenObjects2.length = 0;


return;
}

gdjs.evtsExt__Transition_To__Scene_Transition.registeredGdjsCallbacks = [];