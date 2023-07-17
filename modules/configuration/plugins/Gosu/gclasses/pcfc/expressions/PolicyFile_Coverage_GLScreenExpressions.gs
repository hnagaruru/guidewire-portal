package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl/policyfile/PolicyFile_Coverage_GLScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_Coverage_GLScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl/policyfile/PolicyFile_Coverage_GLScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_Coverage_GLScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on PanelRef at PolicyFile_Coverage_GLScreen.pcf: line 20, column 56
    function available_2 () : java.lang.Boolean {
      return policyPeriod.getLineExists(policyPeriod.GLLine.Pattern)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at PolicyFile_Coverage_GLScreen.pcf: line 12, column 50
    function def_onEnter_0 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.onEnter(policyPeriod.GLLine, false, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Coverage_GLScreen.pcf: line 32, column 149
    function def_onEnter_10 (def :  pcf.AdditionalExclusionsAndConditionsPanelSet) : void {
      def.onEnter(policyPeriod.GLLine, policyPeriod.GLLine.getAdditionalCoverageCategories() , true, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Coverage_GLScreen.pcf: line 38, column 80
    function def_onEnter_12 (def :  pcf.AdditionalInsuredsDV) : void {
      def.onEnter(policyPeriod.GLLine, false, true, false)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Coverage_GLScreen.pcf: line 20, column 56
    function def_onEnter_3 (def :  pcf.PolicyLineDV_GLLine) : void {
      def.onEnter(policyPeriod.GLLine, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Coverage_GLScreen.pcf: line 20, column 56
    function def_onEnter_5 (def :  pcf.PolicyLineDV_PersonalAutoLine) : void {
      def.onEnter(policyPeriod.GLLine, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Coverage_GLScreen.pcf: line 26, column 109
    function def_onEnter_8 (def :  pcf.AdditionalCoveragesDV) : void {
      def.onEnter(policyPeriod.GLLine, new String[]{"GLGroup"}, false, null)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at PolicyFile_Coverage_GLScreen.pcf: line 12, column 50
    function def_refreshVariables_1 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.refreshVariables(policyPeriod.GLLine, false, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Coverage_GLScreen.pcf: line 32, column 149
    function def_refreshVariables_11 (def :  pcf.AdditionalExclusionsAndConditionsPanelSet) : void {
      def.refreshVariables(policyPeriod.GLLine, policyPeriod.GLLine.getAdditionalCoverageCategories() , true, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Coverage_GLScreen.pcf: line 38, column 80
    function def_refreshVariables_13 (def :  pcf.AdditionalInsuredsDV) : void {
      def.refreshVariables(policyPeriod.GLLine, false, true, false)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Coverage_GLScreen.pcf: line 20, column 56
    function def_refreshVariables_4 (def :  pcf.PolicyLineDV_GLLine) : void {
      def.refreshVariables(policyPeriod.GLLine, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Coverage_GLScreen.pcf: line 20, column 56
    function def_refreshVariables_6 (def :  pcf.PolicyLineDV_PersonalAutoLine) : void {
      def.refreshVariables(policyPeriod.GLLine, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Coverage_GLScreen.pcf: line 26, column 109
    function def_refreshVariables_9 (def :  pcf.AdditionalCoveragesDV) : void {
      def.refreshVariables(policyPeriod.GLLine, new String[]{"GLGroup"}, false, null)
    }
    
    // 'mode' attribute on PanelRef at PolicyFile_Coverage_GLScreen.pcf: line 20, column 56
    function mode_7 () : java.lang.Object {
      return policyPeriod.GLLine.Pattern.PublicID
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}