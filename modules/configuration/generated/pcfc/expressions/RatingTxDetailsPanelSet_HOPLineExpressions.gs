package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/RatingTxDetailsPanelSet.HOPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingTxDetailsPanelSet_HOPLineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/RatingTxDetailsPanelSet.HOPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingTxDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=BasePremiumCostChanges) at RatingTxDetailsPanelSet.HOPLine.pcf: line 60, column 56
    function def_onEnter_10 (def :  pcf.HOPCostChangeDetailLV) : void {
      def.onEnter(line, basePremiumCostChanges)
    }
    
    // 'def' attribute on PanelRef (id=AdjBasePremiumCostChanges) at RatingTxDetailsPanelSet.HOPLine.pcf: line 67, column 59
    function def_onEnter_13 (def :  pcf.HOPCostChangeDetailLV) : void {
      def.onEnter(line, adjBasePremiumCostChanges)
    }
    
    // 'def' attribute on PanelRef (id=OtherPremiumCostChanges) at RatingTxDetailsPanelSet.HOPLine.pcf: line 74, column 57
    function def_onEnter_16 (def :  pcf.HOPCostChangeDetailLV) : void {
      def.onEnter(line, otherPremiumCostChanges)
    }
    
    // 'def' attribute on PanelRef (id=ModifierCostChanges) at RatingTxDetailsPanelSet.HOPLine.pcf: line 81, column 53
    function def_onEnter_19 (def :  pcf.HOPCostChangeDetailLV) : void {
      def.onEnter(line, modifierCostChanges)
    }
    
    // 'def' attribute on PanelRef (id=BasePremiumCostChanges) at RatingTxDetailsPanelSet.HOPLine.pcf: line 60, column 56
    function def_refreshVariables_11 (def :  pcf.HOPCostChangeDetailLV) : void {
      def.refreshVariables(line, basePremiumCostChanges)
    }
    
    // 'def' attribute on PanelRef (id=AdjBasePremiumCostChanges) at RatingTxDetailsPanelSet.HOPLine.pcf: line 67, column 59
    function def_refreshVariables_14 (def :  pcf.HOPCostChangeDetailLV) : void {
      def.refreshVariables(line, adjBasePremiumCostChanges)
    }
    
    // 'def' attribute on PanelRef (id=OtherPremiumCostChanges) at RatingTxDetailsPanelSet.HOPLine.pcf: line 74, column 57
    function def_refreshVariables_17 (def :  pcf.HOPCostChangeDetailLV) : void {
      def.refreshVariables(line, otherPremiumCostChanges)
    }
    
    // 'def' attribute on PanelRef (id=ModifierCostChanges) at RatingTxDetailsPanelSet.HOPLine.pcf: line 81, column 53
    function def_refreshVariables_20 (def :  pcf.HOPCostChangeDetailLV) : void {
      def.refreshVariables(line, modifierCostChanges)
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.HOPLine.pcf: line 26, column 23
    function initialValue_0 () : HOPLine {
      return thePeriod.HOPLine
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.HOPLine.pcf: line 30, column 27
    function initialValue_1 () : HOPDwelling {
      return line.HOPDwellings?.single()
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.HOPLine.pcf: line 35, column 57
    function initialValue_2 () : gw.lob.hop.financials.HOPQuoteDisplayUtil {
      return new gw.lob.hop.financials.HOPQuoteDisplayUtil(line, false)
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.HOPLine.pcf: line 40, column 59
    function initialValue_3 () : java.util.List<entity.HOPTransaction> {
      return quoteDisplayUtil.getBasePremiumCostChangeDetails()
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.HOPLine.pcf: line 44, column 59
    function initialValue_4 () : java.util.List<entity.HOPTransaction> {
      return quoteDisplayUtil.getAdjustmentsToBasePremiumCostChangeDetails()
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.HOPLine.pcf: line 48, column 59
    function initialValue_5 () : java.util.List<entity.HOPTransaction> {
      return quoteDisplayUtil.getOtherPremiumCostChangeDetails()
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.HOPLine.pcf: line 52, column 59
    function initialValue_6 () : java.util.List<entity.HOPTransaction> {
      return quoteDisplayUtil.getModificationCostChangeDetails()
    }
    
    // 'label' attribute on Verbatim at RatingTxDetailsPanelSet.HOPLine.pcf: line 62, column 118
    function label_8 () : java.lang.String {
      return DisplayKey.get("Web.PolicyFile.PolicyLine.HOP.DwellingAddress", dwelling.DisplayName)
    }
    
    // 'title' attribute on TitleBar at RatingTxDetailsPanelSet.HOPLine.pcf: line 55, column 183
    function title_7 () : java.lang.String {
      return DisplayKey.get("Web.Policy.HOP.HOPQuoteScreen.PolicyType", line.HOPCoverageParts.single().CoveragePartType.DisplayName, dwelling.CoverageForm.DisplayName)
    }
    
    // 'visible' attribute on PanelRef (id=AdjBasePremiumCostChanges) at RatingTxDetailsPanelSet.HOPLine.pcf: line 67, column 59
    function visible_12 () : java.lang.Boolean {
      return adjBasePremiumCostChanges.HasElements
    }
    
    // 'visible' attribute on PanelRef (id=OtherPremiumCostChanges) at RatingTxDetailsPanelSet.HOPLine.pcf: line 74, column 57
    function visible_15 () : java.lang.Boolean {
      return otherPremiumCostChanges.HasElements
    }
    
    // 'visible' attribute on PanelRef (id=ModifierCostChanges) at RatingTxDetailsPanelSet.HOPLine.pcf: line 81, column 53
    function visible_18 () : java.lang.Boolean {
      return modifierCostChanges.HasElements
    }
    
    // 'visible' attribute on PanelRef (id=BasePremiumCostChanges) at RatingTxDetailsPanelSet.HOPLine.pcf: line 60, column 56
    function visible_9 () : java.lang.Boolean {
      return basePremiumCostChanges.HasElements
    }
    
    property get adjBasePremiumCostChanges () : java.util.List<entity.HOPTransaction> {
      return getVariableValue("adjBasePremiumCostChanges", 0) as java.util.List<entity.HOPTransaction>
    }
    
    property set adjBasePremiumCostChanges ($arg :  java.util.List<entity.HOPTransaction>) {
      setVariableValue("adjBasePremiumCostChanges", 0, $arg)
    }
    
    property get basePremiumCostChanges () : java.util.List<entity.HOPTransaction> {
      return getVariableValue("basePremiumCostChanges", 0) as java.util.List<entity.HOPTransaction>
    }
    
    property set basePremiumCostChanges ($arg :  java.util.List<entity.HOPTransaction>) {
      setVariableValue("basePremiumCostChanges", 0, $arg)
    }
    
    property get dwelling () : HOPDwelling {
      return getVariableValue("dwelling", 0) as HOPDwelling
    }
    
    property set dwelling ($arg :  HOPDwelling) {
      setVariableValue("dwelling", 0, $arg)
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
    
    property get modifierCostChanges () : java.util.List<entity.HOPTransaction> {
      return getVariableValue("modifierCostChanges", 0) as java.util.List<entity.HOPTransaction>
    }
    
    property set modifierCostChanges ($arg :  java.util.List<entity.HOPTransaction>) {
      setVariableValue("modifierCostChanges", 0, $arg)
    }
    
    property get otherPremiumCostChanges () : java.util.List<entity.HOPTransaction> {
      return getVariableValue("otherPremiumCostChanges", 0) as java.util.List<entity.HOPTransaction>
    }
    
    property set otherPremiumCostChanges ($arg :  java.util.List<entity.HOPTransaction>) {
      setVariableValue("otherPremiumCostChanges", 0, $arg)
    }
    
    property get quoteDisplayUtil () : gw.lob.hop.financials.HOPQuoteDisplayUtil {
      return getVariableValue("quoteDisplayUtil", 0) as gw.lob.hop.financials.HOPQuoteDisplayUtil
    }
    
    property set quoteDisplayUtil ($arg :  gw.lob.hop.financials.HOPQuoteDisplayUtil) {
      setVariableValue("quoteDisplayUtil", 0, $arg)
    }
    
    property get revOpenForEdit () : boolean {
      return getRequireValue("revOpenForEdit", 0) as java.lang.Boolean
    }
    
    property set revOpenForEdit ($arg :  boolean) {
      setRequireValue("revOpenForEdit", 0, $arg)
    }
    
    property get thePeriod () : PolicyPeriod {
      return getRequireValue("thePeriod", 0) as PolicyPeriod
    }
    
    property set thePeriod ($arg :  PolicyPeriod) {
      setRequireValue("thePeriod", 0, $arg)
    }
    
    property get totalCostLabel () : String {
      return getRequireValue("totalCostLabel", 0) as String
    }
    
    property set totalCostLabel ($arg :  String) {
      setRequireValue("totalCostLabel", 0, $arg)
    }
    
    property get totalPremLabel () : String {
      return getRequireValue("totalPremLabel", 0) as String
    }
    
    property set totalPremLabel ($arg :  String) {
      setRequireValue("totalPremLabel", 0, $arg)
    }
    
    
  }
  
  
}