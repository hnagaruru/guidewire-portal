package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/PolicyLineSummaryPanelSet.HOPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyLineSummaryPanelSet_HOPLineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/PolicyLineSummaryPanelSet.HOPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyLineSummaryPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=AdditionalCoverageLV) at PolicyLineSummaryPanelSet.HOPLine.pcf: line 41, column 33
    function def_onEnter_11 (def :  pcf.CoverageSummaryLV) : void {
      def.onEnter(helper.AdditionalCoverages, hopline)
    }
    
    // 'def' attribute on PanelRef (id=OptionalCoverageLV) at PolicyLineSummaryPanelSet.HOPLine.pcf: line 46, column 31
    function def_onEnter_13 (def :  pcf.CoverageSummaryLV) : void {
      def.onEnter(helper.OptionalCoverages, hopline)
    }
    
    // 'def' attribute on PanelRef (id=ExclusionSummaryLV) at PolicyLineSummaryPanelSet.HOPLine.pcf: line 52, column 45
    function def_onEnter_16 (def :  pcf.CoverageSummaryLV) : void {
      def.onEnter(helper.Exclusions, hopline)
    }
    
    // 'def' attribute on PanelRef (id=ConditionSummaryLV) at PolicyLineSummaryPanelSet.HOPLine.pcf: line 58, column 51
    function def_onEnter_19 (def :  pcf.CoverageSummaryLV) : void {
      def.onEnter(helper.PolicyConditions, hopline)
    }
    
    // 'def' attribute on PanelRef at PolicyLineSummaryPanelSet.HOPLine.pcf: line 25, column 75
    function def_onEnter_2 (def :  pcf.CoveragePartSelectionDV_HOPHomeowners) : void {
      def.onEnter(hopline.Branch)
    }
    
    // 'def' attribute on PanelRef (id=HOPModifierSummaryLV) at PolicyLineSummaryPanelSet.HOPLine.pcf: line 64, column 46
    function def_onEnter_22 (def :  pcf.ModifierSummaryLV) : void {
      def.onEnter(helper.Modifiers)
    }
    
    // 'def' attribute on PanelRef at PolicyLineSummaryPanelSet.HOPLine.pcf: line 25, column 75
    function def_onEnter_4 (def :  pcf.CoveragePartSelectionDV_default) : void {
      def.onEnter(hopline.Branch)
    }
    
    // 'def' attribute on PanelRef (id=SectionICoverageLV) at PolicyLineSummaryPanelSet.HOPLine.pcf: line 31, column 31
    function def_onEnter_7 (def :  pcf.CoverageSummaryLV) : void {
      def.onEnter(helper.SectionICoverages, hopline)
    }
    
    // 'def' attribute on PanelRef (id=SectionIICoverageLV) at PolicyLineSummaryPanelSet.HOPLine.pcf: line 36, column 32
    function def_onEnter_9 (def :  pcf.CoverageSummaryLV) : void {
      def.onEnter(helper.SectionIICoverages, hopline)
    }
    
    // 'def' attribute on PanelRef (id=SectionIICoverageLV) at PolicyLineSummaryPanelSet.HOPLine.pcf: line 36, column 32
    function def_refreshVariables_10 (def :  pcf.CoverageSummaryLV) : void {
      def.refreshVariables(helper.SectionIICoverages, hopline)
    }
    
    // 'def' attribute on PanelRef (id=AdditionalCoverageLV) at PolicyLineSummaryPanelSet.HOPLine.pcf: line 41, column 33
    function def_refreshVariables_12 (def :  pcf.CoverageSummaryLV) : void {
      def.refreshVariables(helper.AdditionalCoverages, hopline)
    }
    
    // 'def' attribute on PanelRef (id=OptionalCoverageLV) at PolicyLineSummaryPanelSet.HOPLine.pcf: line 46, column 31
    function def_refreshVariables_14 (def :  pcf.CoverageSummaryLV) : void {
      def.refreshVariables(helper.OptionalCoverages, hopline)
    }
    
    // 'def' attribute on PanelRef (id=ExclusionSummaryLV) at PolicyLineSummaryPanelSet.HOPLine.pcf: line 52, column 45
    function def_refreshVariables_17 (def :  pcf.CoverageSummaryLV) : void {
      def.refreshVariables(helper.Exclusions, hopline)
    }
    
    // 'def' attribute on PanelRef (id=ConditionSummaryLV) at PolicyLineSummaryPanelSet.HOPLine.pcf: line 58, column 51
    function def_refreshVariables_20 (def :  pcf.CoverageSummaryLV) : void {
      def.refreshVariables(helper.PolicyConditions, hopline)
    }
    
    // 'def' attribute on PanelRef (id=HOPModifierSummaryLV) at PolicyLineSummaryPanelSet.HOPLine.pcf: line 64, column 46
    function def_refreshVariables_23 (def :  pcf.ModifierSummaryLV) : void {
      def.refreshVariables(helper.Modifiers)
    }
    
    // 'def' attribute on PanelRef at PolicyLineSummaryPanelSet.HOPLine.pcf: line 25, column 75
    function def_refreshVariables_3 (def :  pcf.CoveragePartSelectionDV_HOPHomeowners) : void {
      def.refreshVariables(hopline.Branch)
    }
    
    // 'def' attribute on PanelRef at PolicyLineSummaryPanelSet.HOPLine.pcf: line 25, column 75
    function def_refreshVariables_5 (def :  pcf.CoveragePartSelectionDV_default) : void {
      def.refreshVariables(hopline.Branch)
    }
    
    // 'def' attribute on PanelRef (id=SectionICoverageLV) at PolicyLineSummaryPanelSet.HOPLine.pcf: line 31, column 31
    function def_refreshVariables_8 (def :  pcf.CoverageSummaryLV) : void {
      def.refreshVariables(helper.SectionICoverages, hopline)
    }
    
    // 'initialValue' attribute on Variable at PolicyLineSummaryPanelSet.HOPLine.pcf: line 18, column 23
    function initialValue_0 () : HOPLine {
      return line as HOPLine
    }
    
    // 'initialValue' attribute on Variable at PolicyLineSummaryPanelSet.HOPLine.pcf: line 22, column 64
    function initialValue_1 () : gw.web.line.hop.policy.HOPCoverageCategoryHelper {
      return new gw.web.line.hop.policy.HOPCoverageCategoryHelper(hopline)
    }
    
    // 'mode' attribute on PanelRef at PolicyLineSummaryPanelSet.HOPLine.pcf: line 25, column 75
    function mode_6 () : java.lang.Object {
      return hopline.AssociatedPolicyPeriod.Policy.Product.CodeIdentifier
    }
    
    // 'visible' attribute on PanelRef (id=ExclusionSummaryLV) at PolicyLineSummaryPanelSet.HOPLine.pcf: line 52, column 45
    function visible_15 () : java.lang.Boolean {
      return not helper.Exclusions.Empty
    }
    
    // 'visible' attribute on PanelRef (id=ConditionSummaryLV) at PolicyLineSummaryPanelSet.HOPLine.pcf: line 58, column 51
    function visible_18 () : java.lang.Boolean {
      return not helper.PolicyConditions.Empty
    }
    
    // 'visible' attribute on PanelRef (id=HOPModifierSummaryLV) at PolicyLineSummaryPanelSet.HOPLine.pcf: line 64, column 46
    function visible_21 () : java.lang.Boolean {
      return not helper.Modifiers.IsEmpty
    }
    
    property get helper () : gw.web.line.hop.policy.HOPCoverageCategoryHelper {
      return getVariableValue("helper", 0) as gw.web.line.hop.policy.HOPCoverageCategoryHelper
    }
    
    property set helper ($arg :  gw.web.line.hop.policy.HOPCoverageCategoryHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get hopline () : HOPLine {
      return getVariableValue("hopline", 0) as HOPLine
    }
    
    property set hopline ($arg :  HOPLine) {
      setVariableValue("hopline", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get line () : PolicyLine {
      return getRequireValue("line", 0) as PolicyLine
    }
    
    property set line ($arg :  PolicyLine) {
      setRequireValue("line", 0, $arg)
    }
    
    
  }
  
  
}