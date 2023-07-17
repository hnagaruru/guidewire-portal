package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/PolicyLineSummaryPanelSet.WorkersCompLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyLineSummaryPanelSet_WorkersCompLineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/PolicyLineSummaryPanelSet.WorkersCompLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DetailViewPanelExpressionsImpl extends PolicyLineSummaryPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 31, column 57
    function initialValue_2 () : gw.api.productmodel.CoveragePattern[] {
      return wcLine.Pattern.getCoverageCategoryByPublicId("WorkersCompGrp").coveragePatternsForEntity(WorkersCompLine).where(\ c -> c.DisplayName != "Workers' Comp").whereSelectedOrAvailable(wcLine, CurrentLocation.InEditMode)
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 51, column 30
    function sortBy_8 (coveragePattern :  gw.api.productmodel.CoveragePattern) : java.lang.Object {
      return coveragePattern.Priority
    }
    
    // 'value' attribute on TextInput (id=GoverningClass_Input) at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 42, column 49
    function valueRoot_6 () : java.lang.Object {
      return wcLine.GoverningClass
    }
    
    // 'value' attribute on TextInput (id=CoveredStates_Input) at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 38, column 70
    function value_3 () : java.lang.String {
      return wcLine.Jurisdictions*.State.join(",")
    }
    
    // 'value' attribute on InputIterator (id=WCGrpIterator) at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 48, column 63
    function value_40 () : gw.api.productmodel.CoveragePattern[] {
      return wcGroupCoveragePatterns
    }
    
    // 'value' attribute on TextInput (id=GoverningClass_Input) at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 42, column 49
    function value_5 () : java.lang.String {
      return wcLine.GoverningClass.Code
    }
    
    property get wcGroupCoveragePatterns () : gw.api.productmodel.CoveragePattern[] {
      return getVariableValue("wcGroupCoveragePatterns", 1) as gw.api.productmodel.CoveragePattern[]
    }
    
    property set wcGroupCoveragePatterns ($arg :  gw.api.productmodel.CoveragePattern[]) {
      setVariableValue("wcGroupCoveragePatterns", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/PolicyLineSummaryPanelSet.WorkersCompLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'outputConversion' attribute on TextCell (id=RiskID_Cell) at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 91, column 50
    function outputConversion_47 (VALUE :  entity.OfficialID[]) : java.lang.String {
      return officialIDOutputConverter(VALUE)
    }
    
    // 'value' attribute on TextCell (id=StateName_Cell) at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 84, column 51
    function valueRoot_45 () : java.lang.Object {
      return covJuris
    }
    
    // 'value' attribute on TextCell (id=StateName_Cell) at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 84, column 51
    function value_44 () : typekey.Jurisdiction {
      return covJuris.State
    }
    
    // 'value' attribute on TextCell (id=RiskID_Cell) at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 91, column 50
    function value_48 () : entity.OfficialID[] {
      return getOfficialIDs(covJuris)
    }
    
    property get covJuris () : entity.WCJurisdiction {
      return getIteratedValue(2) as entity.WCJurisdiction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/PolicyLineSummaryPanelSet.WorkersCompLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DetailViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 54, column 48
    function def_onEnter_11 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(coveragePattern, wcLine, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 54, column 48
    function def_onEnter_13 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(coveragePattern, wcLine, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 54, column 48
    function def_onEnter_15 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(coveragePattern, wcLine, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 54, column 48
    function def_onEnter_17 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(coveragePattern, wcLine, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 54, column 48
    function def_onEnter_19 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(coveragePattern, wcLine, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 54, column 48
    function def_onEnter_21 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(coveragePattern, wcLine, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 54, column 48
    function def_onEnter_23 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(coveragePattern, wcLine, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 54, column 48
    function def_onEnter_25 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(coveragePattern, wcLine, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 54, column 48
    function def_onEnter_27 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(coveragePattern, wcLine, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 54, column 48
    function def_onEnter_29 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(coveragePattern, wcLine, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 54, column 48
    function def_onEnter_31 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(coveragePattern, wcLine, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 54, column 48
    function def_onEnter_33 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(coveragePattern, wcLine, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 54, column 48
    function def_onEnter_35 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(coveragePattern, wcLine, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 54, column 48
    function def_onEnter_37 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(coveragePattern, wcLine, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 54, column 48
    function def_onEnter_9 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(coveragePattern, wcLine, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 54, column 48
    function def_refreshVariables_10 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(coveragePattern, wcLine, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 54, column 48
    function def_refreshVariables_12 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(coveragePattern, wcLine, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 54, column 48
    function def_refreshVariables_14 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(coveragePattern, wcLine, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 54, column 48
    function def_refreshVariables_16 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(coveragePattern, wcLine, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 54, column 48
    function def_refreshVariables_18 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(coveragePattern, wcLine, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 54, column 48
    function def_refreshVariables_20 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(coveragePattern, wcLine, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 54, column 48
    function def_refreshVariables_22 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(coveragePattern, wcLine, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 54, column 48
    function def_refreshVariables_24 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(coveragePattern, wcLine, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 54, column 48
    function def_refreshVariables_26 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(coveragePattern, wcLine, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 54, column 48
    function def_refreshVariables_28 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(coveragePattern, wcLine, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 54, column 48
    function def_refreshVariables_30 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(coveragePattern, wcLine, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 54, column 48
    function def_refreshVariables_32 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(coveragePattern, wcLine, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 54, column 48
    function def_refreshVariables_34 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(coveragePattern, wcLine, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 54, column 48
    function def_refreshVariables_36 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(coveragePattern, wcLine, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 54, column 48
    function def_refreshVariables_38 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(coveragePattern, wcLine, true, jobWizardHelper)
    }
    
    // 'mode' attribute on InputSetRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 54, column 48
    function mode_39 () : java.lang.Object {
      return coveragePattern.PublicID
    }
    
    property get coveragePattern () : gw.api.productmodel.CoveragePattern {
      return getIteratedValue(2) as gw.api.productmodel.CoveragePattern
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/PolicyLineSummaryPanelSet.WorkersCompLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends PolicyLineSummaryPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on ListViewPanel (id=PolicyLinePerStateConfig_LV) at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 70, column 26
    function available_51 () : java.lang.Boolean {
      return selectedJurisdiction != null
    }
    
    // 'def' attribute on PanelRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 100, column 79
    function def_onEnter_52 (def :  pcf.PolicyLinePerStateConfigDV) : void {
      def.onEnter(wcLine, selectedJurisdiction)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 107, column 85
    function def_onEnter_54 (def :  pcf.WorkersCompClassesInputSet) : void {
      def.onEnter(selectedJurisdiction, wcLine)
    }
    
    // 'def' attribute on PanelRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 100, column 79
    function def_refreshVariables_53 (def :  pcf.PolicyLinePerStateConfigDV) : void {
      def.refreshVariables(wcLine, selectedJurisdiction)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 107, column 85
    function def_refreshVariables_55 (def :  pcf.WorkersCompClassesInputSet) : void {
      def.refreshVariables(selectedJurisdiction, wcLine)
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 78, column 30
    function sortBy_41 (covJuris :  entity.WCJurisdiction) : java.lang.Object {
      return covJuris.State.DisplayName
    }
    
    // 'value' attribute on TextCell (id=StateName_Cell) at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 84, column 51
    function sortValue_42 (covJuris :  entity.WCJurisdiction) : java.lang.Object {
      return covJuris.State
    }
    
    // 'value' attribute on TextCell (id=RiskID_Cell) at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 91, column 50
    function sortValue_43 (covJuris :  entity.WCJurisdiction) : java.lang.Object {
      return getOfficialIDs(covJuris)
    }
    
    // 'value' attribute on RowIterator at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 75, column 49
    function value_50 () : entity.WCJurisdiction[] {
      return wcLine.Jurisdictions
    }
    
    property get selectedJurisdiction () : WCJurisdiction {
      return getCurrentSelection(1) as WCJurisdiction
    }
    
    property set selectedJurisdiction ($arg :  WCJurisdiction) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/PolicyLineSummaryPanelSet.WorkersCompLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyLineSummaryPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 117, column 47
    function def_onEnter_56 (def :  pcf.WCOptionsPanelSet) : void {
      def.onEnter(period, false)
    }
    
    // 'def' attribute on PanelRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 120, column 29
    function def_onEnter_58 (def :  pcf.FormsDV) : void {
      def.onEnter(period)
    }
    
    // 'def' attribute on PanelRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 117, column 47
    function def_refreshVariables_57 (def :  pcf.WCOptionsPanelSet) : void {
      def.refreshVariables(period, false)
    }
    
    // 'def' attribute on PanelRef at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 120, column 29
    function def_refreshVariables_59 (def :  pcf.FormsDV) : void {
      def.refreshVariables(period)
    }
    
    // 'initialValue' attribute on Variable at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 18, column 35
    function initialValue_0 () : entity.PolicyPeriod {
      return line.Branch
    }
    
    // 'initialValue' attribute on Variable at PolicyLineSummaryPanelSet.WorkersCompLine.pcf: line 22, column 44
    function initialValue_1 () : productmodel.WorkersCompLine {
      return line as WorkersCompLine
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
    
    property get period () : entity.PolicyPeriod {
      return getVariableValue("period", 0) as entity.PolicyPeriod
    }
    
    property set period ($arg :  entity.PolicyPeriod) {
      setVariableValue("period", 0, $arg)
    }
    
    property get wcLine () : productmodel.WorkersCompLine {
      return getVariableValue("wcLine", 0) as productmodel.WorkersCompLine
    }
    
    property set wcLine ($arg :  productmodel.WorkersCompLine) {
      setVariableValue("wcLine", 0, $arg)
    }
    
    function getOfficialIDs(covJuris : entity.WCJurisdiction) : entity.OfficialID[] {
      var officialIDs = period.PrimaryNamedInsured.AccountContactRole.AccountContact.Contact.OfficialIDs
            .where( \ o -> o.State == covJuris.State)
      return officialIDs
    }
    
    function officialIDOutputConverter(VALUE : entity.OfficialID[]) : String {
      if (VALUE == null) {return ""}
      var officialIDValues = VALUE.map(\ id -> id.getOfficialIDValue()!=null ? id.getOfficialIDValue() : "")
      return officialIDValues.where(\ val -> val!=null).join(",")
    }
    
    
  }
  
  
}