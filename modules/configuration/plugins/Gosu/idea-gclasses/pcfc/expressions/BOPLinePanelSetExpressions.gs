package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPLinePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BOPLinePanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPLinePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BOPLinePanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at BOPLinePanelSet.pcf: line 22, column 52
    function def_onEnter_1 (def :  pcf.BOPLineDV) : void {
      def.onEnter(bopLine, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at BOPLinePanelSet.pcf: line 27, column 44
    function def_onEnter_3 (def :  pcf.BOPLinePropertyDV) : void {
      def.onEnter(bopLine)
    }
    
    // 'def' attribute on PanelRef at BOPLinePanelSet.pcf: line 32, column 49
    function def_onEnter_5 (def :  pcf.BOPLineOtherIncludedDV) : void {
      def.onEnter(bopLine)
    }
    
    // 'def' attribute on PanelRef at BOPLinePanelSet.pcf: line 39, column 41
    function def_onEnter_7 (def :  pcf.BOPLiabilityDV) : void {
      def.onEnter(bopLine)
    }
    
    // 'def' attribute on PanelRef at BOPLinePanelSet.pcf: line 44, column 51
    function def_onEnter_9 (def :  pcf.BOPLineVariablePanelSet) : void {
      def.onEnter(bopLine)
    }
    
    // 'def' attribute on PanelRef at BOPLinePanelSet.pcf: line 44, column 51
    function def_refreshVariables_10 (def :  pcf.BOPLineVariablePanelSet) : void {
      def.refreshVariables(bopLine)
    }
    
    // 'def' attribute on PanelRef at BOPLinePanelSet.pcf: line 22, column 52
    function def_refreshVariables_2 (def :  pcf.BOPLineDV) : void {
      def.refreshVariables(bopLine, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at BOPLinePanelSet.pcf: line 27, column 44
    function def_refreshVariables_4 (def :  pcf.BOPLinePropertyDV) : void {
      def.refreshVariables(bopLine)
    }
    
    // 'def' attribute on PanelRef at BOPLinePanelSet.pcf: line 32, column 49
    function def_refreshVariables_6 (def :  pcf.BOPLineOtherIncludedDV) : void {
      def.refreshVariables(bopLine)
    }
    
    // 'def' attribute on PanelRef at BOPLinePanelSet.pcf: line 39, column 41
    function def_refreshVariables_8 (def :  pcf.BOPLiabilityDV) : void {
      def.refreshVariables(bopLine)
    }
    
    // 'initialValue' attribute on Variable at BOPLinePanelSet.pcf: line 13, column 36
    function initialValue_0 () : productmodel.BOPLine {
      return policyLine as BOPLine
    }
    
    property get bopLine () : productmodel.BOPLine {
      return getVariableValue("bopLine", 0) as productmodel.BOPLine
    }
    
    property set bopLine ($arg :  productmodel.BOPLine) {
      setVariableValue("bopLine", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get policyLine () : PolicyLine {
      return getRequireValue("policyLine", 0) as PolicyLine
    }
    
    property set policyLine ($arg :  PolicyLine) {
      setRequireValue("policyLine", 0, $arg)
    }
    
    
  }
  
  
}