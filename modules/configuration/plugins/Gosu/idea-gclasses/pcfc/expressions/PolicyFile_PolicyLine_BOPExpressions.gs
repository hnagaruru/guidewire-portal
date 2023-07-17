package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/bop/policyfile/PolicyFile_PolicyLine_BOP.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_PolicyLine_BOPExpressions {
  @javax.annotation.Generated("config/web/pcf/line/bop/policyfile/PolicyFile_PolicyLine_BOP.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_PolicyLine_BOPExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'afterEnter' attribute on Page (id=PolicyFile_PolicyLine_BOP) at PolicyFile_PolicyLine_BOP.pcf: line 11, column 86
    function afterEnter_10 () : void {
      gw.api.web.PebblesUtil.addWebMessages(CurrentLocation, policyPeriod.PolicyFileMessages)
    }
    
    // 'canVisit' attribute on Page (id=PolicyFile_PolicyLine_BOP) at PolicyFile_PolicyLine_BOP.pcf: line 11, column 86
    static function canVisit_11 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriod) and perm.System.pfiledetails
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at PolicyFile_PolicyLine_BOP.pcf: line 24, column 52
    function def_onEnter_0 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.onEnter(policyPeriod.BOPLine, false, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyLine_BOP.pcf: line 30, column 71
    function def_onEnter_2 (def :  pcf.BOPLinePanelSet) : void {
      def.onEnter(policyPeriod.BOPLine, false, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyLine_BOP.pcf: line 32, column 83
    function def_onEnter_4 (def :  pcf.AdditionalInsuredsDV) : void {
      def.onEnter(policyPeriod.BOPLine, false, false, false)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyLine_BOP.pcf: line 41, column 132
    function def_onEnter_6 (def :  pcf.AdditionalCoveragesDV) : void {
      def.onEnter(policyPeriod.BOPLine, policyPeriod.BOPLine.getAdditionalCoverageCategories(), true, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyLine_BOP.pcf: line 47, column 152
    function def_onEnter_8 (def :  pcf.AdditionalExclusionsAndConditionsPanelSet) : void {
      def.onEnter(policyPeriod.BOPLine, policyPeriod.BOPLine.getAdditionalCoverageCategories(), true, null)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at PolicyFile_PolicyLine_BOP.pcf: line 24, column 52
    function def_refreshVariables_1 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.refreshVariables(policyPeriod.BOPLine, false, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyLine_BOP.pcf: line 30, column 71
    function def_refreshVariables_3 (def :  pcf.BOPLinePanelSet) : void {
      def.refreshVariables(policyPeriod.BOPLine, false, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyLine_BOP.pcf: line 32, column 83
    function def_refreshVariables_5 (def :  pcf.AdditionalInsuredsDV) : void {
      def.refreshVariables(policyPeriod.BOPLine, false, false, false)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyLine_BOP.pcf: line 41, column 132
    function def_refreshVariables_7 (def :  pcf.AdditionalCoveragesDV) : void {
      def.refreshVariables(policyPeriod.BOPLine, policyPeriod.BOPLine.getAdditionalCoverageCategories(), true, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyLine_BOP.pcf: line 47, column 152
    function def_refreshVariables_9 (def :  pcf.AdditionalExclusionsAndConditionsPanelSet) : void {
      def.refreshVariables(policyPeriod.BOPLine, policyPeriod.BOPLine.getAdditionalCoverageCategories(), true, null)
    }
    
    // 'parent' attribute on Page (id=PolicyFile_PolicyLine_BOP) at PolicyFile_PolicyLine_BOP.pcf: line 11, column 86
    static function parent_12 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod, asOfDate)
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_PolicyLine_BOP {
      return super.CurrentLocation as pcf.PolicyFile_PolicyLine_BOP
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}