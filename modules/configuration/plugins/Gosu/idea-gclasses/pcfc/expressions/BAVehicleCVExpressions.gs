package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policy/BAVehicleCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BAVehicleCVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BAVehicleCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BAVehicleCVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at BAVehicleCV.pcf: line 40, column 34
    function def_onEnter_3 (def :  pcf.BAGarageLocationInputSet) : void {
      def.onEnter(vehicle, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at BAVehicleCV.pcf: line 88, column 207
    function def_onEnter_44 (def :  pcf.AdditionalCoveragesPanelSet) : void {
      def.onEnter(vehicle, new String[]{"BAPRentalGrp", "BAPTapeDiscRecordGrp", "BAPEquipGrp", "BAPLoanLeaseGapGrp"}, true, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at BAVehicleCV.pcf: line 44, column 114
    function def_onEnter_5 (def :  pcf.VehicleDV) : void {
      def.onEnter(vehicle, policyPeriod, policyPeriod.BusinessAutoLine, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at BAVehicleCV.pcf: line 50, column 70
    function def_onEnter_7 (def :  pcf.AdditionalInterestDetailsDV) : void {
      def.onEnter(vehicle, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at BAVehicleCV.pcf: line 40, column 34
    function def_refreshVariables_4 (def :  pcf.BAGarageLocationInputSet) : void {
      def.refreshVariables(vehicle, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at BAVehicleCV.pcf: line 88, column 207
    function def_refreshVariables_45 (def :  pcf.AdditionalCoveragesPanelSet) : void {
      def.refreshVariables(vehicle, new String[]{"BAPRentalGrp", "BAPTapeDiscRecordGrp", "BAPEquipGrp", "BAPLoanLeaseGapGrp"}, true, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at BAVehicleCV.pcf: line 44, column 114
    function def_refreshVariables_6 (def :  pcf.VehicleDV) : void {
      def.refreshVariables(vehicle, policyPeriod, policyPeriod.BusinessAutoLine, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at BAVehicleCV.pcf: line 50, column 70
    function def_refreshVariables_8 (def :  pcf.AdditionalInterestDetailsDV) : void {
      def.refreshVariables(vehicle, openForEdit)
    }
    
    // 'initialValue' attribute on Variable at BAVehicleCV.pcf: line 22, column 23
    function initialValue_0 () : boolean {
      return (policyPeriod.Job typeis Submission) and (policyPeriod.Job.QuoteType == TC_QUICK)
    }
    
    // 'initialValue' attribute on Variable at BAVehicleCV.pcf: line 26, column 52
    function initialValue_1 () : gw.api.productmodel.CoverageCategory {
      return vehicle.PolicyLine.Pattern.getCoverageCategoryByPublicId("BAPOwnedPhysDamGrp")
    }
    
    // 'initialValue' attribute on Variable at BAVehicleCV.pcf: line 30, column 52
    function initialValue_2 () : gw.api.productmodel.CoverageCategory {
      return vehicle.PolicyLine.Pattern.getCoverageCategoryByPublicId("BAPIPCoverageCat")
    }
    
    // 'title' attribute on TitleBar at BAVehicleCV.pcf: line 59, column 51
    function title_9 () : java.lang.String {
      return physDamCovCategory.DisplayName
    }
    
    property get baPipCategory () : gw.api.productmodel.CoverageCategory {
      return getVariableValue("baPipCategory", 0) as gw.api.productmodel.CoverageCategory
    }
    
    property set baPipCategory ($arg :  gw.api.productmodel.CoverageCategory) {
      setVariableValue("baPipCategory", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEdit () : Boolean {
      return getRequireValue("openForEdit", 0) as Boolean
    }
    
    property set openForEdit ($arg :  Boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get physDamCovCategory () : gw.api.productmodel.CoverageCategory {
      return getVariableValue("physDamCovCategory", 0) as gw.api.productmodel.CoverageCategory
    }
    
    property set physDamCovCategory ($arg :  gw.api.productmodel.CoverageCategory) {
      setVariableValue("physDamCovCategory", 0, $arg)
    }
    
    property get policyPeriod () : entity.PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as entity.PolicyPeriod
    }
    
    property set policyPeriod ($arg :  entity.PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get quickQuote () : boolean {
      return getVariableValue("quickQuote", 0) as java.lang.Boolean
    }
    
    property set quickQuote ($arg :  boolean) {
      setVariableValue("quickQuote", 0, $arg)
    }
    
    property get vehicle () : BusinessVehicle {
      return getRequireValue("vehicle", 0) as BusinessVehicle
    }
    
    property set vehicle ($arg :  BusinessVehicle) {
      setRequireValue("vehicle", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BAVehicleCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DetailViewPanelExpressionsImpl extends BAVehicleCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at BAVehicleCV.pcf: line 65, column 59
    function initialValue_10 () : gw.api.productmodel.CoveragePattern[] {
      return vehicle == null ? null : physDamCovCategory.coveragePatternsForEntity(BusinessVehicle).whereSelectedOrAvailable(vehicle, true)
    }
    
    // 'sortBy' attribute on IteratorSort at BAVehicleCV.pcf: line 75, column 32
    function sortBy_11 (coveragePattern :  gw.api.productmodel.CoveragePattern) : java.lang.Object {
      return coveragePattern.Priority
    }
    
    // 'value' attribute on InputIterator (id=PhysDamCovIterator) at BAVehicleCV.pcf: line 72, column 65
    function value_43 () : gw.api.productmodel.CoveragePattern[] {
      return physDamCovCategoryCoveragePatterns
    }
    
    property get physDamCovCategoryCoveragePatterns () : gw.api.productmodel.CoveragePattern[] {
      return getVariableValue("physDamCovCategoryCoveragePatterns", 1) as gw.api.productmodel.CoveragePattern[]
    }
    
    property set physDamCovCategoryCoveragePatterns ($arg :  gw.api.productmodel.CoveragePattern[]) {
      setVariableValue("physDamCovCategoryCoveragePatterns", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BAVehicleCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DetailViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at BAVehicleCV.pcf: line 78, column 50
    function def_onEnter_12 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(coveragePattern, vehicle, CurrentLocation.InEditMode, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at BAVehicleCV.pcf: line 78, column 50
    function def_onEnter_14 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(coveragePattern, vehicle, CurrentLocation.InEditMode, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at BAVehicleCV.pcf: line 78, column 50
    function def_onEnter_16 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(coveragePattern, vehicle, CurrentLocation.InEditMode, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at BAVehicleCV.pcf: line 78, column 50
    function def_onEnter_18 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(coveragePattern, vehicle, CurrentLocation.InEditMode, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at BAVehicleCV.pcf: line 78, column 50
    function def_onEnter_20 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(coveragePattern, vehicle, CurrentLocation.InEditMode, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at BAVehicleCV.pcf: line 78, column 50
    function def_onEnter_22 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(coveragePattern, vehicle, CurrentLocation.InEditMode, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at BAVehicleCV.pcf: line 78, column 50
    function def_onEnter_24 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(coveragePattern, vehicle, CurrentLocation.InEditMode, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at BAVehicleCV.pcf: line 78, column 50
    function def_onEnter_26 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(coveragePattern, vehicle, CurrentLocation.InEditMode, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at BAVehicleCV.pcf: line 78, column 50
    function def_onEnter_28 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(coveragePattern, vehicle, CurrentLocation.InEditMode, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at BAVehicleCV.pcf: line 78, column 50
    function def_onEnter_30 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(coveragePattern, vehicle, CurrentLocation.InEditMode, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at BAVehicleCV.pcf: line 78, column 50
    function def_onEnter_32 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(coveragePattern, vehicle, CurrentLocation.InEditMode, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at BAVehicleCV.pcf: line 78, column 50
    function def_onEnter_34 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(coveragePattern, vehicle, CurrentLocation.InEditMode, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at BAVehicleCV.pcf: line 78, column 50
    function def_onEnter_36 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(coveragePattern, vehicle, CurrentLocation.InEditMode, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at BAVehicleCV.pcf: line 78, column 50
    function def_onEnter_38 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(coveragePattern, vehicle, CurrentLocation.InEditMode, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at BAVehicleCV.pcf: line 78, column 50
    function def_onEnter_40 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(coveragePattern, vehicle, CurrentLocation.InEditMode, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at BAVehicleCV.pcf: line 78, column 50
    function def_refreshVariables_13 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(coveragePattern, vehicle, CurrentLocation.InEditMode, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at BAVehicleCV.pcf: line 78, column 50
    function def_refreshVariables_15 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(coveragePattern, vehicle, CurrentLocation.InEditMode, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at BAVehicleCV.pcf: line 78, column 50
    function def_refreshVariables_17 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(coveragePattern, vehicle, CurrentLocation.InEditMode, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at BAVehicleCV.pcf: line 78, column 50
    function def_refreshVariables_19 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(coveragePattern, vehicle, CurrentLocation.InEditMode, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at BAVehicleCV.pcf: line 78, column 50
    function def_refreshVariables_21 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(coveragePattern, vehicle, CurrentLocation.InEditMode, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at BAVehicleCV.pcf: line 78, column 50
    function def_refreshVariables_23 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(coveragePattern, vehicle, CurrentLocation.InEditMode, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at BAVehicleCV.pcf: line 78, column 50
    function def_refreshVariables_25 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(coveragePattern, vehicle, CurrentLocation.InEditMode, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at BAVehicleCV.pcf: line 78, column 50
    function def_refreshVariables_27 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(coveragePattern, vehicle, CurrentLocation.InEditMode, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at BAVehicleCV.pcf: line 78, column 50
    function def_refreshVariables_29 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(coveragePattern, vehicle, CurrentLocation.InEditMode, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at BAVehicleCV.pcf: line 78, column 50
    function def_refreshVariables_31 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(coveragePattern, vehicle, CurrentLocation.InEditMode, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at BAVehicleCV.pcf: line 78, column 50
    function def_refreshVariables_33 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(coveragePattern, vehicle, CurrentLocation.InEditMode, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at BAVehicleCV.pcf: line 78, column 50
    function def_refreshVariables_35 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(coveragePattern, vehicle, CurrentLocation.InEditMode, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at BAVehicleCV.pcf: line 78, column 50
    function def_refreshVariables_37 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(coveragePattern, vehicle, CurrentLocation.InEditMode, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at BAVehicleCV.pcf: line 78, column 50
    function def_refreshVariables_39 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(coveragePattern, vehicle, CurrentLocation.InEditMode, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at BAVehicleCV.pcf: line 78, column 50
    function def_refreshVariables_41 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(coveragePattern, vehicle, CurrentLocation.InEditMode, jobWizardHelper)
    }
    
    // 'mode' attribute on InputSetRef at BAVehicleCV.pcf: line 78, column 50
    function mode_42 () : java.lang.Object {
      return coveragePattern.PublicID
    }
    
    property get coveragePattern () : gw.api.productmodel.CoveragePattern {
      return getIteratedValue(2) as gw.api.productmodel.CoveragePattern
    }
    
    
  }
  
  
}