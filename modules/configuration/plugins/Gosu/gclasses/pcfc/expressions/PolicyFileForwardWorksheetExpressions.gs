package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyFileForwardWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFileForwardWorksheetExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFileForwardWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFileForwardWorksheetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, conditionType :  String) : int {
      return 0
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForwardWorksheet.pcf: line 23, column 58
    function action_1 () : void {
      ArchivedLocationGroup.go(policyPeriod)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForwardWorksheet.pcf: line 32, column 67
    function action_10 () : void {
      gw.document.DocumentsActionsUIHelper.goInNewDocumentFromTemplateWorksheet(policyPeriod)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForwardWorksheet.pcf: line 26, column 57
    function action_4 () : void {
      NewNoteWorksheet.goInWorkspace(policyPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForwardWorksheet.pcf: line 29, column 66
    function action_7 () : void {
      NewDocumentsLinkedWorksheet.goInWorkspace(policyPeriod)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForwardWorksheet.pcf: line 23, column 58
    function action_dest_2 () : pcf.api.Destination {
      return pcf.ArchivedLocationGroup.createDestination(policyPeriod)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForwardWorksheet.pcf: line 26, column 57
    function action_dest_5 () : pcf.api.Destination {
      return pcf.NewNoteWorksheet.createDestination(policyPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForwardWorksheet.pcf: line 29, column 66
    function action_dest_8 () : pcf.api.Destination {
      return pcf.NewDocumentsLinkedWorksheet.createDestination(policyPeriod)
    }
    
    // 'canVisit' attribute on Forward (id=PolicyFileForwardWorksheet) at PolicyFileForwardWorksheet.pcf: line 8, column 30
    static function canVisit_12 (conditionType :  String, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriod)
    }
    
    // 'condition' attribute on ForwardCondition at PolicyFileForwardWorksheet.pcf: line 32, column 67
    function condition_11 () : java.lang.Boolean {
      return conditionType == "NewDocumentCreate"
    }
    
    // 'condition' attribute on ForwardCondition at PolicyFileForwardWorksheet.pcf: line 23, column 58
    function condition_3 () : java.lang.Boolean {
      return policyPeriod.PolicyTerm.CheckArchived
    }
    
    // 'condition' attribute on ForwardCondition at PolicyFileForwardWorksheet.pcf: line 26, column 57
    function condition_6 () : java.lang.Boolean {
      return conditionType == "NewNote"
    }
    
    // 'condition' attribute on ForwardCondition at PolicyFileForwardWorksheet.pcf: line 29, column 66
    function condition_9 () : java.lang.Boolean {
      return conditionType == "NewDocumentsLink"
    }
    
    // 'initialValue' attribute on Variable at PolicyFileForwardWorksheet.pcf: line 20, column 30
    function initialValue_0 () : java.util.Date {
      return policyPeriod.EditEffectiveDate
    }
    
    // 'parent' attribute on Forward (id=PolicyFileForwardWorksheet) at PolicyFileForwardWorksheet.pcf: line 8, column 30
    static function parent_13 (conditionType :  String, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyForward.createDestination()
    }
    
    override property get CurrentLocation () : pcf.PolicyFileForwardWorksheet {
      return super.CurrentLocation as pcf.PolicyFileForwardWorksheet
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get conditionType () : String {
      return getVariableValue("conditionType", 0) as String
    }
    
    property set conditionType ($arg :  String) {
      setVariableValue("conditionType", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}