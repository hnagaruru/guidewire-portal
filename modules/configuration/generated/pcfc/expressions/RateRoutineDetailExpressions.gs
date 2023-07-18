package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateRoutineDetailExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateRoutineDetailExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (rateroutine :  CalcRoutineDefinition) : int {
      return 0
    }
    
    static function __constructorIndex (rateroutine :  CalcRoutineDefinition, rateBook :  RateBook) : int {
      return 2
    }
    
    static function __constructorIndex (rateroutine :  CalcRoutineDefinition, displayImportMessage :  boolean) : int {
      return 1
    }
    
    // 'afterCancel' attribute on Page (id=RateRoutineDetail) at RateRoutineDetail.pcf: line 11, column 30
    function afterCancel_4 () : void {
      RateRoutines.go(rateroutine)
    }
    
    // 'afterCancel' attribute on Page (id=RateRoutineDetail) at RateRoutineDetail.pcf: line 11, column 30
    function afterCancel_dest_5 () : pcf.api.Destination {
      return pcf.RateRoutines.createDestination(rateroutine)
    }
    
    // 'afterCommit' attribute on Page (id=RateRoutineDetail) at RateRoutineDetail.pcf: line 11, column 30
    function afterCommit_6 (TopLocation :  pcf.api.Location) : void {
      RateRoutines.go(rateroutine)
    }
    
    // 'def' attribute on ScreenRef at RateRoutineDetail.pcf: line 38, column 62
    function def_onEnter_2 (def :  pcf.RateRoutineDetailsScreen) : void {
      def.onEnter(rateroutine, rateBook)
    }
    
    // 'def' attribute on ScreenRef at RateRoutineDetail.pcf: line 38, column 62
    function def_refreshVariables_3 (def :  pcf.RateRoutineDetailsScreen) : void {
      def.refreshVariables(rateroutine, rateBook)
    }
    
    // 'initialValue' attribute on Variable at RateRoutineDetail.pcf: line 29, column 67
    function initialValue_0 () : gw.pcf.rating.rateroutine.RateRoutineDetailUIHelper {
      return new gw.pcf.rating.rateroutine.RateRoutineDetailUIHelper(rateroutine)
    }
    
    // 'initialValue' attribute on Variable at RateRoutineDetail.pcf: line 33, column 23
    function initialValue_1 () : boolean {
      return not rateRoutineDetailUI.performValidation()
    }
    
    // 'parent' attribute on Page (id=RateRoutineDetail) at RateRoutineDetail.pcf: line 11, column 30
    static function parent_7 (displayImportMessage :  boolean, rateBook :  RateBook, rateroutine :  CalcRoutineDefinition) : pcf.api.Destination {
      return pcf.RateRoutines.createDestination(rateroutine)
    }
    
    // 'title' attribute on Page (id=RateRoutineDetail) at RateRoutineDetail.pcf: line 11, column 30
    static function title_8 (displayImportMessage :  boolean, rateBook :  RateBook, rateroutine :  CalcRoutineDefinition) : java.lang.Object {
      return rateroutine.Name
    }
    
    override property get CurrentLocation () : pcf.RateRoutineDetail {
      return super.CurrentLocation as pcf.RateRoutineDetail
    }
    
    property get displayImportMessage () : boolean {
      return getVariableValue("displayImportMessage", 0) as java.lang.Boolean
    }
    
    property set displayImportMessage ($arg :  boolean) {
      setVariableValue("displayImportMessage", 0, $arg)
    }
    
    property get hasValidationError () : boolean {
      return getVariableValue("hasValidationError", 0) as java.lang.Boolean
    }
    
    property set hasValidationError ($arg :  boolean) {
      setVariableValue("hasValidationError", 0, $arg)
    }
    
    property get rateBook () : RateBook {
      return getVariableValue("rateBook", 0) as RateBook
    }
    
    property set rateBook ($arg :  RateBook) {
      setVariableValue("rateBook", 0, $arg)
    }
    
    property get rateRoutineDetailUI () : gw.pcf.rating.rateroutine.RateRoutineDetailUIHelper {
      return getVariableValue("rateRoutineDetailUI", 0) as gw.pcf.rating.rateroutine.RateRoutineDetailUIHelper
    }
    
    property set rateRoutineDetailUI ($arg :  gw.pcf.rating.rateroutine.RateRoutineDetailUIHelper) {
      setVariableValue("rateRoutineDetailUI", 0, $arg)
    }
    
    property get rateroutine () : CalcRoutineDefinition {
      return getVariableValue("rateroutine", 0) as CalcRoutineDefinition
    }
    
    property set rateroutine ($arg :  CalcRoutineDefinition) {
      setVariableValue("rateroutine", 0, $arg)
    }
    
    
  }
  
  
}