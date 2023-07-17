package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/ConfigureRateRoutine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ConfigureRateRoutineExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/ConfigureRateRoutine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ConfigureRateRoutineExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (isNewRoutine :  boolean, srcRateRoutine :  CalcRoutineDefinition, copyVersionType :  gw.rating.flow.util.CopyVersionType) : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=ConfigureRateRoutine) at ConfigureRateRoutine.pcf: line 15, column 175
    function afterCancel_4 () : void {
      doAfterCancel()
    }
    
    // 'afterCommit' attribute on Page (id=ConfigureRateRoutine) at ConfigureRateRoutine.pcf: line 15, column 175
    function afterCommit_5 (TopLocation :  pcf.api.Location) : void {
      RateRoutineDetail.go(rateroutine)
    }
    
    // 'beforeCommit' attribute on Page (id=ConfigureRateRoutine) at ConfigureRateRoutine.pcf: line 15, column 175
    function beforeCommit_6 (pickedValue :  java.lang.Object) : void {
      doBeforeCommit()
    }
    
    // 'canEdit' attribute on Page (id=ConfigureRateRoutine) at ConfigureRateRoutine.pcf: line 15, column 175
    function canEdit_7 () : java.lang.Boolean {
      return perm.System.ratebookedit
    }
    
    // 'canVisit' attribute on Page (id=ConfigureRateRoutine) at ConfigureRateRoutine.pcf: line 15, column 175
    static function canVisit_8 (copyVersionType :  gw.rating.flow.util.CopyVersionType, isNewRoutine :  boolean, srcRateRoutine :  CalcRoutineDefinition) : java.lang.Boolean {
      return perm.System.ratebookedit
    }
    
    // 'def' attribute on ScreenRef at ConfigureRateRoutine.pcf: line 33, column 80
    function def_onEnter_2 (def :  pcf.RateRoutineEditScreen) : void {
      def.onEnter(rateroutine, isNewRoutine, copyVersionType)
    }
    
    // 'def' attribute on ScreenRef at ConfigureRateRoutine.pcf: line 33, column 80
    function def_refreshVariables_3 (def :  pcf.RateRoutineEditScreen) : void {
      def.refreshVariables(rateroutine, isNewRoutine, copyVersionType)
    }
    
    // 'initialValue' attribute on Variable at ConfigureRateRoutine.pcf: line 21, column 37
    function initialValue_0 () : CalcRoutineDefinition {
      return null
    }
    
    // 'initialValue' attribute on Variable at ConfigureRateRoutine.pcf: line 28, column 37
    function initialValue_1 () : CalcRoutineDefinition {
      return isNewRoutine ? (srcRateRoutine != null ? srcRateRoutine.initializeCopy(copyVersionType) : gw.pcf.rating.flow.NewRateRoutineHelper.createNewRoutine()) : srcRateRoutine
    }
    
    // 'parent' attribute on Page (id=ConfigureRateRoutine) at ConfigureRateRoutine.pcf: line 15, column 175
    static function parent_9 (copyVersionType :  gw.rating.flow.util.CopyVersionType, isNewRoutine :  boolean, srcRateRoutine :  CalcRoutineDefinition) : pcf.api.Destination {
      return pcf.RateRoutines.createDestination()
    }
    
    // 'title' attribute on Page (id=ConfigureRateRoutine) at ConfigureRateRoutine.pcf: line 15, column 175
    static function title_10 (copyVersionType :  gw.rating.flow.util.CopyVersionType, isNewRoutine :  boolean, srcRateRoutine :  CalcRoutineDefinition) : java.lang.Object {
      return isNewRoutine ? DisplayKey.get("Web.Rating.RateRoutines.NewRateRoutineTitle") : DisplayKey.get("Web.Rating.RateRoutines.EditRateRoutineTitle")
    }
    
    override property get CurrentLocation () : pcf.ConfigureRateRoutine {
      return super.CurrentLocation as pcf.ConfigureRateRoutine
    }
    
    property get copyVersionType () : gw.rating.flow.util.CopyVersionType {
      return getVariableValue("copyVersionType", 0) as gw.rating.flow.util.CopyVersionType
    }
    
    property set copyVersionType ($arg :  gw.rating.flow.util.CopyVersionType) {
      setVariableValue("copyVersionType", 0, $arg)
    }
    
    property get isNewRoutine () : boolean {
      return getVariableValue("isNewRoutine", 0) as java.lang.Boolean
    }
    
    property set isNewRoutine ($arg :  boolean) {
      setVariableValue("isNewRoutine", 0, $arg)
    }
    
    property get rateroutine () : CalcRoutineDefinition {
      return getVariableValue("rateroutine", 0) as CalcRoutineDefinition
    }
    
    property set rateroutine ($arg :  CalcRoutineDefinition) {
      setVariableValue("rateroutine", 0, $arg)
    }
    
    property get srcRateRoutine () : CalcRoutineDefinition {
      return getVariableValue("srcRateRoutine", 0) as CalcRoutineDefinition
    }
    
    property set srcRateRoutine ($arg :  CalcRoutineDefinition) {
      setVariableValue("srcRateRoutine", 0, $arg)
    }
    
    function doAfterCancel() {
      if (isNewRoutine) {
        RateRoutines.go()
      } else {
        RateRoutineDetail.go(rateroutine)
      }
    }
    
    function doBeforeCommit() {
      if (isNewRoutine) {
        gw.rating.flow.validation.RateRoutineValidation.validateRateRoutineDefinition(rateroutine, TC_LOADSAVE, gw.rating.flow.validation.ValidationGroup.ALL)
      }
    }
    
    
  }
  
  
}