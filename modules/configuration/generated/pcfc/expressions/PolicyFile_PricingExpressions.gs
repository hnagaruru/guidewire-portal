package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Pricing.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_PricingExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Pricing.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends PolicyFile_PricingExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Pricing.pcf: line 57, column 44
    function def_onEnter_12 (def :  pcf.RatingCumulDetailsPanelSet_BOPLine) : void {
      def.onEnter(thePeriod, null, isEditable)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Pricing.pcf: line 57, column 44
    function def_onEnter_14 (def :  pcf.RatingCumulDetailsPanelSet_BusinessAutoLine) : void {
      def.onEnter(thePeriod, null, isEditable)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Pricing.pcf: line 57, column 44
    function def_onEnter_16 (def :  pcf.RatingCumulDetailsPanelSet_CPLine) : void {
      def.onEnter(thePeriod, null, isEditable)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Pricing.pcf: line 57, column 44
    function def_onEnter_18 (def :  pcf.RatingCumulDetailsPanelSet_GLLine) : void {
      def.onEnter(thePeriod, null, isEditable)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Pricing.pcf: line 57, column 44
    function def_onEnter_20 (def :  pcf.RatingCumulDetailsPanelSet_HOPLine) : void {
      def.onEnter(thePeriod, null, isEditable)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Pricing.pcf: line 57, column 44
    function def_onEnter_22 (def :  pcf.RatingCumulDetailsPanelSet_IMLine) : void {
      def.onEnter(thePeriod, null, isEditable)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Pricing.pcf: line 57, column 44
    function def_onEnter_24 (def :  pcf.RatingCumulDetailsPanelSet_ManualLine) : void {
      def.onEnter(thePeriod, null, isEditable)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Pricing.pcf: line 57, column 44
    function def_onEnter_26 (def :  pcf.RatingCumulDetailsPanelSet_PersonalAutoLine) : void {
      def.onEnter(thePeriod, null, isEditable)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Pricing.pcf: line 57, column 44
    function def_onEnter_28 (def :  pcf.RatingCumulDetailsPanelSet_WorkersCompLine) : void {
      def.onEnter(thePeriod, null, isEditable)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Pricing.pcf: line 57, column 44
    function def_onEnter_30 (def :  pcf.RatingCumulDetailsPanelSet_default) : void {
      def.onEnter(thePeriod, null, isEditable)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Pricing.pcf: line 57, column 44
    function def_refreshVariables_13 (def :  pcf.RatingCumulDetailsPanelSet_BOPLine) : void {
      def.refreshVariables(thePeriod, null, isEditable)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Pricing.pcf: line 57, column 44
    function def_refreshVariables_15 (def :  pcf.RatingCumulDetailsPanelSet_BusinessAutoLine) : void {
      def.refreshVariables(thePeriod, null, isEditable)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Pricing.pcf: line 57, column 44
    function def_refreshVariables_17 (def :  pcf.RatingCumulDetailsPanelSet_CPLine) : void {
      def.refreshVariables(thePeriod, null, isEditable)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Pricing.pcf: line 57, column 44
    function def_refreshVariables_19 (def :  pcf.RatingCumulDetailsPanelSet_GLLine) : void {
      def.refreshVariables(thePeriod, null, isEditable)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Pricing.pcf: line 57, column 44
    function def_refreshVariables_21 (def :  pcf.RatingCumulDetailsPanelSet_HOPLine) : void {
      def.refreshVariables(thePeriod, null, isEditable)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Pricing.pcf: line 57, column 44
    function def_refreshVariables_23 (def :  pcf.RatingCumulDetailsPanelSet_IMLine) : void {
      def.refreshVariables(thePeriod, null, isEditable)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Pricing.pcf: line 57, column 44
    function def_refreshVariables_25 (def :  pcf.RatingCumulDetailsPanelSet_ManualLine) : void {
      def.refreshVariables(thePeriod, null, isEditable)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Pricing.pcf: line 57, column 44
    function def_refreshVariables_27 (def :  pcf.RatingCumulDetailsPanelSet_PersonalAutoLine) : void {
      def.refreshVariables(thePeriod, null, isEditable)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Pricing.pcf: line 57, column 44
    function def_refreshVariables_29 (def :  pcf.RatingCumulDetailsPanelSet_WorkersCompLine) : void {
      def.refreshVariables(thePeriod, null, isEditable)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Pricing.pcf: line 57, column 44
    function def_refreshVariables_31 (def :  pcf.RatingCumulDetailsPanelSet_default) : void {
      def.refreshVariables(thePeriod, null, isEditable)
    }
    
    // 'mode' attribute on PanelRef at PolicyFile_Pricing.pcf: line 57, column 44
    function mode_32 () : java.lang.Object {
      return line.Pattern.PublicID
    }
    
    // 'title' attribute on TitleBar at PolicyFile_Pricing.pcf: line 60, column 78
    function title_11 () : java.lang.String {
      return line.Pattern as java.lang.String
    }
    
    // 'visible' attribute on TitleBar at PolicyFile_Pricing.pcf: line 60, column 78
    function visible_10 () : java.lang.Boolean {
      return thePeriod.RepresentativePolicyLines.length > 1
    }
    
    property get line () : entity.PolicyLine {
      return getIteratedValue(1) as entity.PolicyLine
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Pricing.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_PricingExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (refPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'afterEnter' attribute on Page (id=PolicyFile_Pricing) at PolicyFile_Pricing.pcf: line 10, column 64
    function afterEnter_34 () : void {
      gw.api.web.PebblesUtil.addWebMessages(CurrentLocation, thePeriod.PolicyFileMessages)
    }
    
    // 'canVisit' attribute on Page (id=PolicyFile_Pricing) at PolicyFile_Pricing.pcf: line 10, column 64
    static function canVisit_35 (asOfDate :  java.util.Date, refPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.PolicyPeriod.view(refPeriod) and perm.System.pfilepricing
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Pricing.pcf: line 41, column 78
    function def_onEnter_4 (def :  pcf.WarningsPanelSet) : void {
      def.onEnter(refPeriod.Policy.ContingencyWarningMessages)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Pricing.pcf: line 43, column 56
    function def_onEnter_6 (def :  pcf.CostOverridesWarningPanelSet) : void {
      def.onEnter(thePeriod)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Pricing.pcf: line 45, column 54
    function def_onEnter_8 (def :  pcf.PolicyFile_Quote_SummaryDV) : void {
      def.onEnter(thePeriod)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Pricing.pcf: line 41, column 78
    function def_refreshVariables_5 (def :  pcf.WarningsPanelSet) : void {
      def.refreshVariables(refPeriod.Policy.ContingencyWarningMessages)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Pricing.pcf: line 43, column 56
    function def_refreshVariables_7 (def :  pcf.CostOverridesWarningPanelSet) : void {
      def.refreshVariables(thePeriod)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Pricing.pcf: line 45, column 54
    function def_refreshVariables_9 (def :  pcf.PolicyFile_Quote_SummaryDV) : void {
      def.refreshVariables(thePeriod)
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_Pricing.pcf: line 22, column 23
    function initialValue_0 () : boolean {
      return thePeriod.OpenForEdit
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_Pricing.pcf: line 26, column 23
    function initialValue_1 () : boolean {
      return refPeriod.PeriodDisplayStatus == DisplayKey.get("PolicyPeriod.PeriodDisplayStatus.Expired")
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_Pricing.pcf: line 30, column 23
    function initialValue_2 () : boolean {
      return refPeriod.PeriodDisplayStatus == DisplayKey.get("PolicyPeriod.PeriodDisplayStatus.Scheduled")
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_Pricing.pcf: line 34, column 35
    function initialValue_3 () : entity.PolicyPeriod {
      return (isExpired or isScheduled) ? refPeriod : refPeriod.getSlice(asOfDate)
    }
    
    // 'parent' attribute on Page (id=PolicyFile_Pricing) at PolicyFile_Pricing.pcf: line 10, column 64
    static function parent_36 (asOfDate :  java.util.Date, refPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(refPeriod, asOfDate)
    }
    
    // 'value' attribute on PanelIterator (id=cumul) at PolicyFile_Pricing.pcf: line 54, column 45
    function value_33 () : entity.PolicyLine[] {
      return thePeriod.RepresentativePolicyLines
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_Pricing {
      return super.CurrentLocation as pcf.PolicyFile_Pricing
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get isEditable () : boolean {
      return getVariableValue("isEditable", 0) as java.lang.Boolean
    }
    
    property set isEditable ($arg :  boolean) {
      setVariableValue("isEditable", 0, $arg)
    }
    
    property get isExpired () : boolean {
      return getVariableValue("isExpired", 0) as java.lang.Boolean
    }
    
    property set isExpired ($arg :  boolean) {
      setVariableValue("isExpired", 0, $arg)
    }
    
    property get isScheduled () : boolean {
      return getVariableValue("isScheduled", 0) as java.lang.Boolean
    }
    
    property set isScheduled ($arg :  boolean) {
      setVariableValue("isScheduled", 0, $arg)
    }
    
    property get refPeriod () : PolicyPeriod {
      return getVariableValue("refPeriod", 0) as PolicyPeriod
    }
    
    property set refPeriod ($arg :  PolicyPeriod) {
      setVariableValue("refPeriod", 0, $arg)
    }
    
    property get thePeriod () : entity.PolicyPeriod {
      return getVariableValue("thePeriod", 0) as entity.PolicyPeriod
    }
    
    property set thePeriod ($arg :  entity.PolicyPeriod) {
      setVariableValue("thePeriod", 0, $arg)
    }
    
    
  }
  
  
}