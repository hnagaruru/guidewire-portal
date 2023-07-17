package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/NewRateTableDefinition.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewRateTableDefinitionExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/NewRateTableDefinition.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewRateTableDefinitionExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    static function __constructorIndex (definitionToCopy :  RateTableDefinition) : int {
      return 1
    }
    
    // 'afterCancel' attribute on Page (id=NewRateTableDefinition) at NewRateTableDefinition.pcf: line 16, column 95
    function afterCancel_4 () : void {
      RateTableDefinitions.go()
    }
    
    // 'afterCancel' attribute on Page (id=NewRateTableDefinition) at NewRateTableDefinition.pcf: line 16, column 95
    function afterCancel_dest_5 () : pcf.api.Destination {
      return pcf.RateTableDefinitions.createDestination()
    }
    
    // 'afterCommit' attribute on Page (id=NewRateTableDefinition) at NewRateTableDefinition.pcf: line 16, column 95
    function afterCommit_6 (TopLocation :  pcf.api.Location) : void {
      RateTableDefinitionDetail.go(tableDefinition)
    }
    
    // 'afterEnter' attribute on Page (id=NewRateTableDefinition) at NewRateTableDefinition.pcf: line 16, column 95
    function afterEnter_7 () : void {
      gw.rating.rtm.validation.RateTableDefinitionValidation.validatePostEnter(tableDefinition)
    }
    
    // 'beforeCommit' attribute on Page (id=NewRateTableDefinition) at NewRateTableDefinition.pcf: line 16, column 95
    function beforeCommit_8 (pickedValue :  java.lang.Object) : void {
      gw.rating.rtm.validation.RateTableDefinitionValidation.validateRateTableDefinition(tableDefinition)
    }
    
    // 'canVisit' attribute on Page (id=NewRateTableDefinition) at NewRateTableDefinition.pcf: line 16, column 95
    static function canVisit_9 (definitionToCopy :  RateTableDefinition) : java.lang.Boolean {
      return perm.System.ratebookedit
    }
    
    // 'def' attribute on ScreenRef at NewRateTableDefinition.pcf: line 30, column 71
    function def_onEnter_2 (def :  pcf.RateTableDefinitionDetailsScreen) : void {
      def.onEnter(tableDefinition, false)
    }
    
    // 'def' attribute on ScreenRef at NewRateTableDefinition.pcf: line 30, column 71
    function def_refreshVariables_3 (def :  pcf.RateTableDefinitionDetailsScreen) : void {
      def.refreshVariables(tableDefinition, false)
    }
    
    // 'initialValue' attribute on Variable at NewRateTableDefinition.pcf: line 24, column 35
    function initialValue_0 () : RateTableDefinition {
      return null
    }
    
    // 'initialValue' attribute on Variable at NewRateTableDefinition.pcf: line 28, column 35
    function initialValue_1 () : RateTableDefinition {
      return definitionToCopy != null ? definitionToCopy.initializeCopy() : new RateTableDefinition()
    }
    
    // 'parent' attribute on Page (id=NewRateTableDefinition) at NewRateTableDefinition.pcf: line 16, column 95
    static function parent_10 (definitionToCopy :  RateTableDefinition) : pcf.api.Destination {
      return pcf.RateTableDefinitions.createDestination()
    }
    
    override property get CurrentLocation () : pcf.NewRateTableDefinition {
      return super.CurrentLocation as pcf.NewRateTableDefinition
    }
    
    property get definitionToCopy () : RateTableDefinition {
      return getVariableValue("definitionToCopy", 0) as RateTableDefinition
    }
    
    property set definitionToCopy ($arg :  RateTableDefinition) {
      setVariableValue("definitionToCopy", 0, $arg)
    }
    
    property get tableDefinition () : RateTableDefinition {
      return getVariableValue("tableDefinition", 0) as RateTableDefinition
    }
    
    property set tableDefinition ($arg :  RateTableDefinition) {
      setVariableValue("tableDefinition", 0, $arg)
    }
    
    
  }
  
  
}