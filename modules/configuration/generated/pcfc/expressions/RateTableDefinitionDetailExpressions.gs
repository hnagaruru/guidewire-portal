package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateTableDefinitionDetailExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateTableDefinitionDetailExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (tableDefinition :  RateTableDefinition) : int {
      return 0
    }
    
    // 'afterEnter' attribute on Page (id=RateTableDefinitionDetail) at RateTableDefinitionDetail.pcf: line 14, column 39
    function afterEnter_4 () : void {
      gw.rating.rtm.validation.RateTableDefinitionValidation.validatePostEnter(tableDefinition)
    }
    
    // 'beforeCommit' attribute on Page (id=RateTableDefinitionDetail) at RateTableDefinitionDetail.pcf: line 14, column 39
    function beforeCommit_5 (pickedValue :  java.lang.Object) : void {
      gw.rating.rtm.validation.RateTableDefinitionValidation.validateRateTableDefinition(tableDefinition)
    }
    
    // 'beforeValidate' attribute on Page (id=RateTableDefinitionDetail) at RateTableDefinitionDetail.pcf: line 14, column 39
    function beforeValidate_6 (pickedValue :  java.lang.Object) : void {
      gw.web.rating.RateTableDefinitionUIHelper.canUpdateDefinition(tableDefinition, rateTablesUsingDefinition, errorStatus)
    }
    
    // 'canVisit' attribute on Page (id=RateTableDefinitionDetail) at RateTableDefinitionDetail.pcf: line 14, column 39
    static function canVisit_7 (tableDefinition :  RateTableDefinition) : java.lang.Boolean {
      return perm.System.ratebookview
    }
    
    // 'def' attribute on ScreenRef at RateTableDefinitionDetail.pcf: line 29, column 88
    function def_onEnter_2 (def :  pcf.RateTableDefinitionDetailsScreen) : void {
      def.onEnter(tableDefinition, errorStatus.ErrorFound)
    }
    
    // 'def' attribute on ScreenRef at RateTableDefinitionDetail.pcf: line 29, column 88
    function def_refreshVariables_3 (def :  pcf.RateTableDefinitionDetailsScreen) : void {
      def.refreshVariables(tableDefinition, errorStatus.ErrorFound)
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetail.pcf: line 23, column 37
    function initialValue_0 () : List<RateTable> {
      return tableDefinition.tablesUsingDefinition()
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetail.pcf: line 27, column 69
    function initialValue_1 () : gw.web.rating.RateTableDefinitionUIHelper.ErrorStatus {
      return new gw.web.rating.RateTableDefinitionUIHelper.ErrorStatus() {:ErrorFound = false}
    }
    
    // 'parent' attribute on Page (id=RateTableDefinitionDetail) at RateTableDefinitionDetail.pcf: line 14, column 39
    static function parent_8 (tableDefinition :  RateTableDefinition) : pcf.api.Destination {
      return pcf.RateTableDefinitions.createDestination()
    }
    
    // 'title' attribute on Page (id=RateTableDefinitionDetail) at RateTableDefinitionDetail.pcf: line 14, column 39
    static function title_9 (tableDefinition :  RateTableDefinition) : java.lang.Object {
      return tableDefinition.TableName
    }
    
    override property get CurrentLocation () : pcf.RateTableDefinitionDetail {
      return super.CurrentLocation as pcf.RateTableDefinitionDetail
    }
    
    property get errorStatus () : gw.web.rating.RateTableDefinitionUIHelper.ErrorStatus {
      return getVariableValue("errorStatus", 0) as gw.web.rating.RateTableDefinitionUIHelper.ErrorStatus
    }
    
    property set errorStatus ($arg :  gw.web.rating.RateTableDefinitionUIHelper.ErrorStatus) {
      setVariableValue("errorStatus", 0, $arg)
    }
    
    property get rateTablesUsingDefinition () : List<RateTable> {
      return getVariableValue("rateTablesUsingDefinition", 0) as List<RateTable>
    }
    
    property set rateTablesUsingDefinition ($arg :  List<RateTable>) {
      setVariableValue("rateTablesUsingDefinition", 0, $arg)
    }
    
    property get tableDefinition () : RateTableDefinition {
      return getVariableValue("tableDefinition", 0) as RateTableDefinition
    }
    
    property set tableDefinition ($arg :  RateTableDefinition) {
      setVariableValue("tableDefinition", 0, $arg)
    }
    
    
  }
  
  
}