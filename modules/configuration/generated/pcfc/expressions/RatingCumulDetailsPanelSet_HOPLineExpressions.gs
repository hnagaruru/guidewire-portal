package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/RatingCumulDetailsPanelSet.HOPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingCumulDetailsPanelSet_HOPLineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/RatingCumulDetailsPanelSet.HOPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingCumulDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=AdjustmentsToBasePremiumCosts) at RatingCumulDetailsPanelSet.HOPLine.pcf: line 42, column 124
    function def_onEnter_10 (def :  pcf.HOPAdjustmentsToBasePremiumLV) : void {
      def.onEnter(line)
    }
    
    // 'def' attribute on PanelRef (id=OtherPremiumCosts) at RatingCumulDetailsPanelSet.HOPLine.pcf: line 49, column 105
    function def_onEnter_13 (def :  pcf.HOPOtherPremiumLV) : void {
      def.onEnter(line)
    }
    
    // 'def' attribute on PanelRef (id=ModifierCosts) at RatingCumulDetailsPanelSet.HOPLine.pcf: line 56, column 108
    function def_onEnter_16 (def :  pcf.HOPModifierCostLV) : void {
      def.onEnter(line)
    }
    
    // 'def' attribute on PanelRef (id=TotalCost) at RatingCumulDetailsPanelSet.HOPLine.pcf: line 63, column 55
    function def_onEnter_19 (def :  pcf.HOPTotalCostLV) : void {
      def.onEnter(line.Costs.toList().cast(HOPCost))
    }
    
    // 'def' attribute on PanelRef (id=RatingOverrideButtonDV) at RatingCumulDetailsPanelSet.HOPLine.pcf: line 31, column 40
    function def_onEnter_3 (def :  pcf.RatingOverrideButtonDV) : void {
      def.onEnter(period, period.HOPLine, jobWizardHelper, CurrentLocation.InEditMode)
    }
    
    // 'def' attribute on PanelRef (id=BasePremiumCosts) at RatingCumulDetailsPanelSet.HOPLine.pcf: line 35, column 55
    function def_onEnter_7 (def :  pcf.HOPBasePremiumLV) : void {
      def.onEnter(line)
    }
    
    // 'def' attribute on PanelRef (id=AdjustmentsToBasePremiumCosts) at RatingCumulDetailsPanelSet.HOPLine.pcf: line 42, column 124
    function def_refreshVariables_11 (def :  pcf.HOPAdjustmentsToBasePremiumLV) : void {
      def.refreshVariables(line)
    }
    
    // 'def' attribute on PanelRef (id=OtherPremiumCosts) at RatingCumulDetailsPanelSet.HOPLine.pcf: line 49, column 105
    function def_refreshVariables_14 (def :  pcf.HOPOtherPremiumLV) : void {
      def.refreshVariables(line)
    }
    
    // 'def' attribute on PanelRef (id=ModifierCosts) at RatingCumulDetailsPanelSet.HOPLine.pcf: line 56, column 108
    function def_refreshVariables_17 (def :  pcf.HOPModifierCostLV) : void {
      def.refreshVariables(line)
    }
    
    // 'def' attribute on PanelRef (id=TotalCost) at RatingCumulDetailsPanelSet.HOPLine.pcf: line 63, column 55
    function def_refreshVariables_20 (def :  pcf.HOPTotalCostLV) : void {
      def.refreshVariables(line.Costs.toList().cast(HOPCost))
    }
    
    // 'def' attribute on PanelRef (id=RatingOverrideButtonDV) at RatingCumulDetailsPanelSet.HOPLine.pcf: line 31, column 40
    function def_refreshVariables_4 (def :  pcf.RatingOverrideButtonDV) : void {
      def.refreshVariables(period, period.HOPLine, jobWizardHelper, CurrentLocation.InEditMode)
    }
    
    // 'def' attribute on PanelRef (id=BasePremiumCosts) at RatingCumulDetailsPanelSet.HOPLine.pcf: line 35, column 55
    function def_refreshVariables_8 (def :  pcf.HOPBasePremiumLV) : void {
      def.refreshVariables(line)
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.HOPLine.pcf: line 20, column 23
    function initialValue_0 () : HOPLine {
      return period.HOPLine
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.HOPLine.pcf: line 24, column 27
    function initialValue_1 () : HOPDwelling {
      return line.HOPDwellings?.single()
    }
    
    // 'label' attribute on Verbatim at RatingCumulDetailsPanelSet.HOPLine.pcf: line 37, column 118
    function label_5 () : java.lang.String {
      return DisplayKey.get("Web.PolicyFile.PolicyLine.HOP.DwellingAddress", dwelling.DisplayName)
    }
    
    // 'title' attribute on TitleBar at RatingCumulDetailsPanelSet.HOPLine.pcf: line 27, column 183
    function title_2 () : java.lang.String {
      return DisplayKey.get("Web.Policy.HOP.HOPQuoteScreen.PolicyType", line.HOPCoverageParts.single().CoveragePartType.DisplayName, dwelling.CoverageForm.DisplayName)
    }
    
    // 'visible' attribute on PanelRef (id=OtherPremiumCosts) at RatingCumulDetailsPanelSet.HOPLine.pcf: line 49, column 105
    function visible_12 () : java.lang.Boolean {
      return gw.lob.hop.financials.HOPQuoteDisplayUtil.hasNonZeroCostDataValues(line.OtherCosts)
    }
    
    // 'visible' attribute on PanelRef (id=ModifierCosts) at RatingCumulDetailsPanelSet.HOPLine.pcf: line 56, column 108
    function visible_15 () : java.lang.Boolean {
      return gw.lob.hop.financials.HOPQuoteDisplayUtil.hasNonZeroCostDataValues(line.ModifierCosts)
    }
    
    // 'visible' attribute on PanelRef (id=BasePremiumCosts) at RatingCumulDetailsPanelSet.HOPLine.pcf: line 35, column 55
    function visible_6 () : java.lang.Boolean {
      return line.BasePremiumCosts.HasElements
    }
    
    // 'visible' attribute on PanelRef (id=AdjustmentsToBasePremiumCosts) at RatingCumulDetailsPanelSet.HOPLine.pcf: line 42, column 124
    function visible_9 () : java.lang.Boolean {
      return gw.lob.hop.financials.HOPQuoteDisplayUtil.hasNonZeroCostDataValues(line.AdjustmentsToBasePremiumCosts)
    }
    
    property get dwelling () : HOPDwelling {
      return getVariableValue("dwelling", 0) as HOPDwelling
    }
    
    property set dwelling ($arg :  HOPDwelling) {
      setVariableValue("dwelling", 0, $arg)
    }
    
    property get isEditable () : boolean {
      return getRequireValue("isEditable", 0) as java.lang.Boolean
    }
    
    property set isEditable ($arg :  boolean) {
      setRequireValue("isEditable", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get line () : HOPLine {
      return getVariableValue("line", 0) as HOPLine
    }
    
    property set line ($arg :  HOPLine) {
      setVariableValue("line", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    
  }
  
  
}