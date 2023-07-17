package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_PolicyLine_FormsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_PolicyLine_FormsScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_PolicyLine_FormsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_PolicyLine_FormsScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyLine_FormsScreen.pcf: line 16, column 79
    function def_onEnter_0 (def :  pcf.WarningsPanelSet) : void {
      def.onEnter(policyPeriod.Policy.ContingencyWarningMessages)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyLine_FormsScreen.pcf: line 18, column 46
    function def_onEnter_2 (def :  pcf.PolicyFileFormsDV) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyLine_FormsScreen.pcf: line 16, column 79
    function def_refreshVariables_1 (def :  pcf.WarningsPanelSet) : void {
      def.refreshVariables(policyPeriod.Policy.ContingencyWarningMessages)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyLine_FormsScreen.pcf: line 18, column 46
    function def_refreshVariables_3 (def :  pcf.PolicyFileFormsDV) : void {
      def.refreshVariables(policyPeriod)
    }
    
    property get policyLine () : PolicyLine {
      return getRequireValue("policyLine", 0) as PolicyLine
    }
    
    property set policyLine ($arg :  PolicyLine) {
      setRequireValue("policyLine", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}