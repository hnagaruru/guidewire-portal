package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/NewManualUWIssuePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewManualUWIssuePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/NewManualUWIssuePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewManualUWIssuePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    // 'afterCommit' attribute on Popup (id=NewManualUWIssuePopup) at NewManualUWIssuePopup.pcf: line 13, column 71
    function afterCommit_4 (TopLocation :  pcf.api.Location) : void {
      issue.Bundle.commit(); 
    }
    
    // 'afterEnter' attribute on Popup (id=NewManualUWIssuePopup) at NewManualUWIssuePopup.pcf: line 13, column 71
    function afterEnter_5 () : void {
      issue.ShortDescription = DisplayKey.get("Web.UWIssue.ShortDescription.ManualDefault")
    }
    
    // 'beforeCommit' attribute on Popup (id=NewManualUWIssuePopup) at NewManualUWIssuePopup.pcf: line 13, column 71
    function beforeCommit_6 (pickedValue :  java.lang.Object) : void {
      issue.IssueKey = issue.FixedId as java.lang.String; issue.addCreateHistory(null)
    }
    
    // 'def' attribute on PanelRef at NewManualUWIssuePopup.pcf: line 30, column 104
    function def_onEnter_2 (def :  pcf.NewUWIssueDelegateDV) : void {
      def.onEnter(issue, UWIssueType.finder.findUWIssueTypeByCheckingSet(TC_MANUAL))
    }
    
    // 'def' attribute on PanelRef at NewManualUWIssuePopup.pcf: line 30, column 104
    function def_refreshVariables_3 (def :  pcf.NewUWIssueDelegateDV) : void {
      def.refreshVariables(issue, UWIssueType.finder.findUWIssueTypeByCheckingSet(TC_MANUAL))
    }
    
    // 'initialValue' attribute on Variable at NewManualUWIssuePopup.pcf: line 22, column 30
    function initialValue_0 () : entity.UWIssue {
      return new UWIssue(policyPeriod)
    }
    
    // EditButtons at NewManualUWIssuePopup.pcf: line 27, column 32
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    override property get CurrentLocation () : pcf.NewManualUWIssuePopup {
      return super.CurrentLocation as pcf.NewManualUWIssuePopup
    }
    
    property get issue () : entity.UWIssue {
      return getVariableValue("issue", 0) as entity.UWIssue
    }
    
    property set issue ($arg :  entity.UWIssue) {
      setVariableValue("issue", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}