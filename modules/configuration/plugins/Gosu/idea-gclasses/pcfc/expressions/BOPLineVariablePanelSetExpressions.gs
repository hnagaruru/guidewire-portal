package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPLineVariablePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BOPLineVariablePanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPLineVariablePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BOPContractorCovsDVExpressionsImpl extends BOPLineVariablePanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at BOPLineVariablePanelSet.pcf: line 50, column 55
    function initialValue_37 () : gw.api.productmodel.CoveragePattern[] {
      return bopContractorCat.coveragePatternsForEntity(BusinessOwnersLine).whereSelectedOrAvailable(bopLine, CurrentLocation.InEditMode)
    }
    
    // 'value' attribute on InputIterator (id=BOPContractorCovs) at BOPLineVariablePanelSet.pcf: line 57, column 61
    function value_69 () : gw.api.productmodel.CoveragePattern[] {
      return bopContractorCatCoveragePatterns
    }
    
    // 'visible' attribute on DetailViewPanel (id=BOPContractorCovsDV) at BOPLineVariablePanelSet.pcf: line 45, column 109
    function visible_70 () : java.lang.Boolean {
      return bopLine.SmallBusinessType == TC_CONTRACTOR or bopLine.SmallBusinessType==TC_CONTRACTOR_LAND
    }
    
    property get bopContractorCatCoveragePatterns () : gw.api.productmodel.CoveragePattern[] {
      return getVariableValue("bopContractorCatCoveragePatterns", 1) as gw.api.productmodel.CoveragePattern[]
    }
    
    property set bopContractorCatCoveragePatterns ($arg :  gw.api.productmodel.CoveragePattern[]) {
      setVariableValue("bopContractorCatCoveragePatterns", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPLineVariablePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BOPLineVariablePanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at BOPLineVariablePanelSet.pcf: line 13, column 36
    function initialValue_0 () : productmodel.BOPLine {
      return policyLine as BOPLine
    }
    
    // 'initialValue' attribute on Variable at BOPLineVariablePanelSet.pcf: line 17, column 52
    function initialValue_1 () : gw.api.productmodel.CoverageCategory {
      return bopLine.Pattern.getCoverageCategoryByPublicId("BOPContractorCat")
    }
    
    // 'initialValue' attribute on Variable at BOPLineVariablePanelSet.pcf: line 21, column 52
    function initialValue_2 () : gw.api.productmodel.CoverageCategory {
      return bopLine.Pattern.getCoverageCategoryByPublicId("BOPGuestCovCat")
    }
    
    property get bopContractorCat () : gw.api.productmodel.CoverageCategory {
      return getVariableValue("bopContractorCat", 0) as gw.api.productmodel.CoverageCategory
    }
    
    property set bopContractorCat ($arg :  gw.api.productmodel.CoverageCategory) {
      setVariableValue("bopContractorCat", 0, $arg)
    }
    
    property get bopGuestCovCat () : gw.api.productmodel.CoverageCategory {
      return getVariableValue("bopGuestCovCat", 0) as gw.api.productmodel.CoverageCategory
    }
    
    property set bopGuestCovCat ($arg :  gw.api.productmodel.CoverageCategory) {
      setVariableValue("bopGuestCovCat", 0, $arg)
    }
    
    property get bopLine () : productmodel.BOPLine {
      return getVariableValue("bopLine", 0) as productmodel.BOPLine
    }
    
    property set bopLine ($arg :  productmodel.BOPLine) {
      setVariableValue("bopLine", 0, $arg)
    }
    
    property get policyLine () : PolicyLine {
      return getRequireValue("policyLine", 0) as PolicyLine
    }
    
    property set policyLine ($arg :  PolicyLine) {
      setRequireValue("policyLine", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPLineVariablePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BOPMotelCovsDVExpressionsImpl extends BOPLineVariablePanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at BOPLineVariablePanelSet.pcf: line 29, column 55
    function initialValue_3 () : gw.api.productmodel.CoveragePattern[] {
      return bopGuestCovCat.coveragePatternsForEntity(BusinessOwnersLine).whereSelectedOrAvailable(bopLine, CurrentLocation.InEditMode)
    }
    
    // 'value' attribute on InputIterator (id=BOPGuestCovs) at BOPLineVariablePanelSet.pcf: line 36, column 61
    function value_35 () : gw.api.productmodel.CoveragePattern[] {
      return bopGuestCovCatCoveragePatterns
    }
    
    // 'visible' attribute on DetailViewPanel (id=BOPMotelCovsDV) at BOPLineVariablePanelSet.pcf: line 24, column 55
    function visible_36 () : java.lang.Boolean {
      return bopLine.SmallBusinessType == TC_MOTEL
    }
    
    property get bopGuestCovCatCoveragePatterns () : gw.api.productmodel.CoveragePattern[] {
      return getVariableValue("bopGuestCovCatCoveragePatterns", 1) as gw.api.productmodel.CoveragePattern[]
    }
    
    property set bopGuestCovCatCoveragePatterns ($arg :  gw.api.productmodel.CoveragePattern[]) {
      setVariableValue("bopGuestCovCatCoveragePatterns", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPLineVariablePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends BOPContractorCovsDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 60, column 46
    function def_onEnter_38 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 60, column 46
    function def_onEnter_40 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 60, column 46
    function def_onEnter_42 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 60, column 46
    function def_onEnter_44 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 60, column 46
    function def_onEnter_46 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 60, column 46
    function def_onEnter_48 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 60, column 46
    function def_onEnter_50 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 60, column 46
    function def_onEnter_52 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 60, column 46
    function def_onEnter_54 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 60, column 46
    function def_onEnter_56 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 60, column 46
    function def_onEnter_58 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 60, column 46
    function def_onEnter_60 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 60, column 46
    function def_onEnter_62 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 60, column 46
    function def_onEnter_64 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 60, column 46
    function def_onEnter_66 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 60, column 46
    function def_refreshVariables_39 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 60, column 46
    function def_refreshVariables_41 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 60, column 46
    function def_refreshVariables_43 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 60, column 46
    function def_refreshVariables_45 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 60, column 46
    function def_refreshVariables_47 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 60, column 46
    function def_refreshVariables_49 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 60, column 46
    function def_refreshVariables_51 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 60, column 46
    function def_refreshVariables_53 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 60, column 46
    function def_refreshVariables_55 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 60, column 46
    function def_refreshVariables_57 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 60, column 46
    function def_refreshVariables_59 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 60, column 46
    function def_refreshVariables_61 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 60, column 46
    function def_refreshVariables_63 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 60, column 46
    function def_refreshVariables_65 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 60, column 46
    function def_refreshVariables_67 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'mode' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 60, column 46
    function mode_68 () : java.lang.Object {
      return coveragePattern.PublicID
    }
    
    property get coveragePattern () : gw.api.productmodel.CoveragePattern {
      return getIteratedValue(2) as gw.api.productmodel.CoveragePattern
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPLineVariablePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends BOPMotelCovsDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 39, column 46
    function def_onEnter_10 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 39, column 46
    function def_onEnter_12 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 39, column 46
    function def_onEnter_14 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 39, column 46
    function def_onEnter_16 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 39, column 46
    function def_onEnter_18 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 39, column 46
    function def_onEnter_20 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 39, column 46
    function def_onEnter_22 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 39, column 46
    function def_onEnter_24 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 39, column 46
    function def_onEnter_26 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 39, column 46
    function def_onEnter_28 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 39, column 46
    function def_onEnter_30 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 39, column 46
    function def_onEnter_32 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 39, column 46
    function def_onEnter_4 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 39, column 46
    function def_onEnter_6 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 39, column 46
    function def_onEnter_8 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 39, column 46
    function def_refreshVariables_11 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 39, column 46
    function def_refreshVariables_13 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 39, column 46
    function def_refreshVariables_15 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 39, column 46
    function def_refreshVariables_17 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 39, column 46
    function def_refreshVariables_19 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 39, column 46
    function def_refreshVariables_21 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 39, column 46
    function def_refreshVariables_23 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 39, column 46
    function def_refreshVariables_25 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 39, column 46
    function def_refreshVariables_27 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 39, column 46
    function def_refreshVariables_29 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 39, column 46
    function def_refreshVariables_31 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 39, column 46
    function def_refreshVariables_33 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 39, column 46
    function def_refreshVariables_5 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 39, column 46
    function def_refreshVariables_7 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 39, column 46
    function def_refreshVariables_9 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'mode' attribute on InputSetRef at BOPLineVariablePanelSet.pcf: line 39, column 46
    function mode_34 () : java.lang.Object {
      return coveragePattern.PublicID
    }
    
    property get coveragePattern () : gw.api.productmodel.CoveragePattern {
      return getIteratedValue(2) as gw.api.productmodel.CoveragePattern
    }
    
    
  }
  
  
}