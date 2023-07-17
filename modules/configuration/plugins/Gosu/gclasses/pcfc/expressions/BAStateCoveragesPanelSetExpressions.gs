package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policy/BAStateCoveragesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BAStateCoveragesPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BAStateCoveragesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BAStateCoveragesPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at BAStateCoveragesPanelSet.pcf: line 19, column 52
    function initialValue_0 () : gw.api.productmodel.CoverageCategory {
      return baLine.Pattern.getCoverageCategoryByPublicId("BAPVehicleStateGrp")
    }
    
    // 'initialValue' attribute on Variable at BAStateCoveragesPanelSet.pcf: line 23, column 52
    function initialValue_1 () : gw.api.productmodel.CoverageCategory {
      return baLine.Pattern.getCoverageCategoryByPublicId("BAPHiredGrp")
    }
    
    // 'initialValue' attribute on Variable at BAStateCoveragesPanelSet.pcf: line 27, column 52
    function initialValue_2 () : gw.api.productmodel.CoverageCategory {
      return baLine.Pattern.getCoverageCategoryByPublicId("BAPNonownedGrp")
    }
    
    // 'initialValue' attribute on Variable at BAStateCoveragesPanelSet.pcf: line 31, column 52
    function initialValue_3 () : gw.api.productmodel.CoverageCategory {
      return baLine.Pattern.getCoverageCategoryByPublicId("BAPIPCoverageCat")
    }
    
    // 'title' attribute on TitleBar at BAStateCoveragesPanelSet.pcf: line 37, column 52
    function title_4 () : java.lang.String {
      return vehicleStateGroup.DisplayName
    }
    
    // 'title' attribute on TitleBar at BAStateCoveragesPanelSet.pcf: line 65, column 190
    function title_40 () : java.lang.String {
      return pipGroup.DisplayName
    }
    
    // 'visible' attribute on PanelColumn at BAStateCoveragesPanelSet.pcf: line 34, column 174
    function visible_38 () : java.lang.Boolean {
      return baLine.isGarageState(gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(selectedState.State)) or selectedState.Coverages.Count > 0
    }
    
    // 'visible' attribute on TitleBar at BAStateCoveragesPanelSet.pcf: line 65, column 190
    function visible_39 () : java.lang.Boolean {
      return gw.api.domain.StateSet.get( gw.api.domain.StateSet.PIPSTATES ).contains(gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(selectedState.State))
    }
    
    property get baLine () : BusinessAutoLine {
      return getRequireValue("baLine", 0) as BusinessAutoLine
    }
    
    property set baLine ($arg :  BusinessAutoLine) {
      setRequireValue("baLine", 0, $arg)
    }
    
    property get hiredGroup () : gw.api.productmodel.CoverageCategory {
      return getVariableValue("hiredGroup", 0) as gw.api.productmodel.CoverageCategory
    }
    
    property set hiredGroup ($arg :  gw.api.productmodel.CoverageCategory) {
      setVariableValue("hiredGroup", 0, $arg)
    }
    
    property get nonOwnedGroup () : gw.api.productmodel.CoverageCategory {
      return getVariableValue("nonOwnedGroup", 0) as gw.api.productmodel.CoverageCategory
    }
    
    property set nonOwnedGroup ($arg :  gw.api.productmodel.CoverageCategory) {
      setVariableValue("nonOwnedGroup", 0, $arg)
    }
    
    property get openForEdit () : Boolean {
      return getRequireValue("openForEdit", 0) as Boolean
    }
    
    property set openForEdit ($arg :  Boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get pipGroup () : gw.api.productmodel.CoverageCategory {
      return getVariableValue("pipGroup", 0) as gw.api.productmodel.CoverageCategory
    }
    
    property set pipGroup ($arg :  gw.api.productmodel.CoverageCategory) {
      setVariableValue("pipGroup", 0, $arg)
    }
    
    property get selectedState () : BAJurisdiction {
      return getRequireValue("selectedState", 0) as BAJurisdiction
    }
    
    property set selectedState ($arg :  BAJurisdiction) {
      setRequireValue("selectedState", 0, $arg)
    }
    
    property get vehicleStateGroup () : gw.api.productmodel.CoverageCategory {
      return getVariableValue("vehicleStateGroup", 0) as gw.api.productmodel.CoverageCategory
    }
    
    property set vehicleStateGroup ($arg :  gw.api.productmodel.CoverageCategory) {
      setVariableValue("vehicleStateGroup", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BAStateCoveragesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DetailViewPanel2ExpressionsImpl extends BAStateCoveragesPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at BAStateCoveragesPanelSet.pcf: line 71, column 61
    function initialValue_41 () : gw.api.productmodel.CoveragePattern[] {
      return selectedState == null ? null : pipGroup.coveragePatternsForEntity(BAJurisdiction).whereSelectedOrAvailable(selectedState, openForEdit)
    }
    
    // 'sortBy' attribute on IteratorSort at BAStateCoveragesPanelSet.pcf: line 81, column 34
    function sortBy_42 (coveragePattern :  gw.api.productmodel.CoveragePattern) : java.lang.Object {
      return coveragePattern.Priority
    }
    
    // 'value' attribute on InputIterator (id=PIPVehicleStateGrpIterator) at BAStateCoveragesPanelSet.pcf: line 78, column 67
    function value_73 () : gw.api.productmodel.CoveragePattern[] {
      return pipGroupCoveragePatterns
    }
    
    property get pipGroupCoveragePatterns () : gw.api.productmodel.CoveragePattern[] {
      return getVariableValue("pipGroupCoveragePatterns", 1) as gw.api.productmodel.CoveragePattern[]
    }
    
    property set pipGroupCoveragePatterns ($arg :  gw.api.productmodel.CoveragePattern[]) {
      setVariableValue("pipGroupCoveragePatterns", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BAStateCoveragesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DetailViewPanelExpressionsImpl extends BAStateCoveragesPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at BAStateCoveragesPanelSet.pcf: line 43, column 61
    function initialValue_5 () : gw.api.productmodel.CoveragePattern[] {
      return selectedState == null ? null : vehicleStateGroup.coveragePatternsForEntity(BAJurisdiction).whereSelectedOrAvailable(selectedState, openForEdit)
    }
    
    // 'sortBy' attribute on IteratorSort at BAStateCoveragesPanelSet.pcf: line 53, column 34
    function sortBy_6 (coveragePattern :  gw.api.productmodel.CoveragePattern) : java.lang.Object {
      return coveragePattern.Priority
    }
    
    // 'value' attribute on InputIterator (id=BAPVehicleStateGrpIterator) at BAStateCoveragesPanelSet.pcf: line 50, column 67
    function value_37 () : gw.api.productmodel.CoveragePattern[] {
      return vehicleStateGroupCoveragePatterns
    }
    
    property get vehicleStateGroupCoveragePatterns () : gw.api.productmodel.CoveragePattern[] {
      return getVariableValue("vehicleStateGroupCoveragePatterns", 1) as gw.api.productmodel.CoveragePattern[]
    }
    
    property set vehicleStateGroupCoveragePatterns ($arg :  gw.api.productmodel.CoveragePattern[]) {
      setVariableValue("vehicleStateGroupCoveragePatterns", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BAStateCoveragesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends DetailViewPanel2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 83, column 94
    function def_onEnter_43 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 83, column 94
    function def_onEnter_45 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 83, column 94
    function def_onEnter_47 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 83, column 94
    function def_onEnter_49 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 83, column 94
    function def_onEnter_51 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 83, column 94
    function def_onEnter_53 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 83, column 94
    function def_onEnter_55 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 83, column 94
    function def_onEnter_57 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 83, column 94
    function def_onEnter_59 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 83, column 94
    function def_onEnter_61 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 83, column 94
    function def_onEnter_63 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 83, column 94
    function def_onEnter_65 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 83, column 94
    function def_onEnter_67 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 83, column 94
    function def_onEnter_69 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 83, column 94
    function def_onEnter_71 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 83, column 94
    function def_refreshVariables_44 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 83, column 94
    function def_refreshVariables_46 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 83, column 94
    function def_refreshVariables_48 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 83, column 94
    function def_refreshVariables_50 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 83, column 94
    function def_refreshVariables_52 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 83, column 94
    function def_refreshVariables_54 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 83, column 94
    function def_refreshVariables_56 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 83, column 94
    function def_refreshVariables_58 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 83, column 94
    function def_refreshVariables_60 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 83, column 94
    function def_refreshVariables_62 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 83, column 94
    function def_refreshVariables_64 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 83, column 94
    function def_refreshVariables_66 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 83, column 94
    function def_refreshVariables_68 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 83, column 94
    function def_refreshVariables_70 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 83, column 94
    function def_refreshVariables_72 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(coveragePattern, selectedState, openForEdit, null)
    }
    
    property get coveragePattern () : gw.api.productmodel.CoveragePattern {
      return getIteratedValue(2) as gw.api.productmodel.CoveragePattern
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BAStateCoveragesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DetailViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 55, column 94
    function def_onEnter_11 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 55, column 94
    function def_onEnter_13 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 55, column 94
    function def_onEnter_15 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 55, column 94
    function def_onEnter_17 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 55, column 94
    function def_onEnter_19 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 55, column 94
    function def_onEnter_21 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 55, column 94
    function def_onEnter_23 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 55, column 94
    function def_onEnter_25 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 55, column 94
    function def_onEnter_27 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 55, column 94
    function def_onEnter_29 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 55, column 94
    function def_onEnter_31 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 55, column 94
    function def_onEnter_33 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 55, column 94
    function def_onEnter_35 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 55, column 94
    function def_onEnter_7 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 55, column 94
    function def_onEnter_9 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 55, column 94
    function def_refreshVariables_10 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 55, column 94
    function def_refreshVariables_12 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 55, column 94
    function def_refreshVariables_14 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 55, column 94
    function def_refreshVariables_16 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 55, column 94
    function def_refreshVariables_18 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 55, column 94
    function def_refreshVariables_20 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 55, column 94
    function def_refreshVariables_22 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 55, column 94
    function def_refreshVariables_24 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 55, column 94
    function def_refreshVariables_26 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 55, column 94
    function def_refreshVariables_28 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 55, column 94
    function def_refreshVariables_30 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 55, column 94
    function def_refreshVariables_32 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 55, column 94
    function def_refreshVariables_34 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 55, column 94
    function def_refreshVariables_36 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(coveragePattern, selectedState, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BAStateCoveragesPanelSet.pcf: line 55, column 94
    function def_refreshVariables_8 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(coveragePattern, selectedState, openForEdit, null)
    }
    
    property get coveragePattern () : gw.api.productmodel.CoveragePattern {
      return getIteratedValue(2) as gw.api.productmodel.CoveragePattern
    }
    
    
  }
  
  
}