package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPLiabilityDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BOPLiabilityDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPLiabilityDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BOPLiabilityDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at BOPLiabilityDV.pcf: line 13, column 36
    function initialValue_0 () : productmodel.BOPLine {
      return policyLine as BOPLine
    }
    
    // 'initialValue' attribute on Variable at BOPLiabilityDV.pcf: line 17, column 52
    function initialValue_1 () : gw.api.productmodel.CoverageCategory {
      return bopLine.Pattern.getCoverageCategoryByPublicId("BOPLiabilityCat")
    }
    
    // 'initialValue' attribute on Variable at BOPLiabilityDV.pcf: line 21, column 52
    function initialValue_2 () : gw.api.productmodel.CoverageCategory {
      return bopLine.Pattern.getCoverageCategoryByPublicId("BOPProgramCat")
    }
    
    // 'initialValue' attribute on Variable at BOPLiabilityDV.pcf: line 26, column 53
    function initialValue_3 () : gw.api.productmodel.CoveragePattern[] {
      return bopLiabilityCat.coveragePatternsForEntity(BusinessOwnersLine).whereSelectedOrAvailable(bopLine, CurrentLocation.InEditMode)
    }
    
    // 'initialValue' attribute on Variable at BOPLiabilityDV.pcf: line 31, column 53
    function initialValue_4 () : gw.api.productmodel.CoveragePattern[] {
      return bopProgramCat.coveragePatternsForEntity(BusinessOwnersLine).whereSelectedOrAvailable(bopLine, CurrentLocation.InEditMode)
    }
    
    // 'sortBy' attribute on IteratorSort at BOPLiabilityDV.pcf: line 41, column 26
    function sortBy_5 (coveragePattern :  gw.api.productmodel.CoveragePattern) : java.lang.Object {
      return coveragePattern.Priority
    }
    
    // 'value' attribute on InputIterator (id=BOPLiabilityCatIterator) at BOPLiabilityDV.pcf: line 38, column 59
    function value_37 () : gw.api.productmodel.CoveragePattern[] {
      return bopLiabilityCatCoveragePatterns
    }
    
    // 'value' attribute on InputIterator (id=BOPRequiredProgramCovs) at BOPLiabilityDV.pcf: line 51, column 59
    function value_70 () : gw.api.productmodel.CoveragePattern[] {
      return bopProgramCatCoveragePatterns
    }
    
    property get bopLiabilityCat () : gw.api.productmodel.CoverageCategory {
      return getVariableValue("bopLiabilityCat", 0) as gw.api.productmodel.CoverageCategory
    }
    
    property set bopLiabilityCat ($arg :  gw.api.productmodel.CoverageCategory) {
      setVariableValue("bopLiabilityCat", 0, $arg)
    }
    
    property get bopLiabilityCatCoveragePatterns () : gw.api.productmodel.CoveragePattern[] {
      return getVariableValue("bopLiabilityCatCoveragePatterns", 0) as gw.api.productmodel.CoveragePattern[]
    }
    
    property set bopLiabilityCatCoveragePatterns ($arg :  gw.api.productmodel.CoveragePattern[]) {
      setVariableValue("bopLiabilityCatCoveragePatterns", 0, $arg)
    }
    
    property get bopLine () : productmodel.BOPLine {
      return getVariableValue("bopLine", 0) as productmodel.BOPLine
    }
    
    property set bopLine ($arg :  productmodel.BOPLine) {
      setVariableValue("bopLine", 0, $arg)
    }
    
    property get bopProgramCat () : gw.api.productmodel.CoverageCategory {
      return getVariableValue("bopProgramCat", 0) as gw.api.productmodel.CoverageCategory
    }
    
    property set bopProgramCat ($arg :  gw.api.productmodel.CoverageCategory) {
      setVariableValue("bopProgramCat", 0, $arg)
    }
    
    property get bopProgramCatCoveragePatterns () : gw.api.productmodel.CoveragePattern[] {
      return getVariableValue("bopProgramCatCoveragePatterns", 0) as gw.api.productmodel.CoveragePattern[]
    }
    
    property set bopProgramCatCoveragePatterns ($arg :  gw.api.productmodel.CoveragePattern[]) {
      setVariableValue("bopProgramCatCoveragePatterns", 0, $arg)
    }
    
    property get policyLine () : PolicyLine {
      return getRequireValue("policyLine", 0) as PolicyLine
    }
    
    property set policyLine ($arg :  PolicyLine) {
      setRequireValue("policyLine", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPLiabilityDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends BOPLiabilityDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 57, column 44
    function def_onEnter_39 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 57, column 44
    function def_onEnter_41 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 57, column 44
    function def_onEnter_43 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 57, column 44
    function def_onEnter_45 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 57, column 44
    function def_onEnter_47 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 57, column 44
    function def_onEnter_49 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 57, column 44
    function def_onEnter_51 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 57, column 44
    function def_onEnter_53 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 57, column 44
    function def_onEnter_55 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 57, column 44
    function def_onEnter_57 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 57, column 44
    function def_onEnter_59 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 57, column 44
    function def_onEnter_61 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 57, column 44
    function def_onEnter_63 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 57, column 44
    function def_onEnter_65 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 57, column 44
    function def_onEnter_67 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 57, column 44
    function def_refreshVariables_40 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 57, column 44
    function def_refreshVariables_42 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 57, column 44
    function def_refreshVariables_44 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 57, column 44
    function def_refreshVariables_46 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 57, column 44
    function def_refreshVariables_48 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 57, column 44
    function def_refreshVariables_50 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 57, column 44
    function def_refreshVariables_52 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 57, column 44
    function def_refreshVariables_54 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 57, column 44
    function def_refreshVariables_56 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 57, column 44
    function def_refreshVariables_58 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 57, column 44
    function def_refreshVariables_60 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 57, column 44
    function def_refreshVariables_62 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 57, column 44
    function def_refreshVariables_64 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 57, column 44
    function def_refreshVariables_66 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 57, column 44
    function def_refreshVariables_68 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'mode' attribute on InputSetRef at BOPLiabilityDV.pcf: line 57, column 44
    function mode_69 () : java.lang.Object {
      return coveragePattern.PublicID
    }
    
    property get coveragePattern () : gw.api.productmodel.CoveragePattern {
      return getIteratedValue(1) as gw.api.productmodel.CoveragePattern
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPLiabilityDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends BOPLiabilityDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 44, column 44
    function def_onEnter_10 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 44, column 44
    function def_onEnter_12 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 44, column 44
    function def_onEnter_14 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 44, column 44
    function def_onEnter_16 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 44, column 44
    function def_onEnter_18 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 44, column 44
    function def_onEnter_20 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 44, column 44
    function def_onEnter_22 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 44, column 44
    function def_onEnter_24 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 44, column 44
    function def_onEnter_26 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 44, column 44
    function def_onEnter_28 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 44, column 44
    function def_onEnter_30 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 44, column 44
    function def_onEnter_32 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 44, column 44
    function def_onEnter_34 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 44, column 44
    function def_onEnter_6 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 44, column 44
    function def_onEnter_8 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 44, column 44
    function def_refreshVariables_11 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 44, column 44
    function def_refreshVariables_13 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 44, column 44
    function def_refreshVariables_15 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 44, column 44
    function def_refreshVariables_17 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 44, column 44
    function def_refreshVariables_19 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 44, column 44
    function def_refreshVariables_21 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 44, column 44
    function def_refreshVariables_23 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 44, column 44
    function def_refreshVariables_25 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 44, column 44
    function def_refreshVariables_27 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 44, column 44
    function def_refreshVariables_29 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 44, column 44
    function def_refreshVariables_31 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 44, column 44
    function def_refreshVariables_33 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 44, column 44
    function def_refreshVariables_35 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 44, column 44
    function def_refreshVariables_7 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLiabilityDV.pcf: line 44, column 44
    function def_refreshVariables_9 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'mode' attribute on InputSetRef at BOPLiabilityDV.pcf: line 44, column 44
    function mode_36 () : java.lang.Object {
      return coveragePattern.PublicID
    }
    
    property get coveragePattern () : gw.api.productmodel.CoveragePattern {
      return getIteratedValue(1) as gw.api.productmodel.CoveragePattern
    }
    
    
  }
  
  
}