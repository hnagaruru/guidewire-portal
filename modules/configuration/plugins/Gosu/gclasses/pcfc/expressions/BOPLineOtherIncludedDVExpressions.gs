package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPLineOtherIncludedDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BOPLineOtherIncludedDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPLineOtherIncludedDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BOPLineOtherIncludedDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at BOPLineOtherIncludedDV.pcf: line 13, column 36
    function initialValue_0 () : productmodel.BOPLine {
      return policyLine as BOPLine
    }
    
    // 'initialValue' attribute on Variable at BOPLineOtherIncludedDV.pcf: line 17, column 52
    function initialValue_1 () : gw.api.productmodel.CoverageCategory {
      return bopLine.Pattern.getCoverageCategoryByPublicId("BOPOtherIncludedCat")
    }
    
    // 'initialValue' attribute on Variable at BOPLineOtherIncludedDV.pcf: line 22, column 53
    function initialValue_2 () : gw.api.productmodel.CoveragePattern[] {
      return bopOtherIncludedCat.coveragePatternsForEntity(BusinessOwnersLine).whereSelectedOrAvailable(bopLine, CurrentLocation.InEditMode)
    }
    
    // 'sortBy' attribute on IteratorSort at BOPLineOtherIncludedDV.pcf: line 32, column 26
    function sortBy_3 (coveragePattern :  gw.api.productmodel.CoveragePattern) : java.lang.Object {
      return coveragePattern.Priority
    }
    
    // 'value' attribute on InputIterator (id=BOPPropertyRequiredCatIterator) at BOPLineOtherIncludedDV.pcf: line 29, column 59
    function value_35 () : gw.api.productmodel.CoveragePattern[] {
      return bopOtherIncludedCatCoveragePatterns
    }
    
    property get bopLine () : productmodel.BOPLine {
      return getVariableValue("bopLine", 0) as productmodel.BOPLine
    }
    
    property set bopLine ($arg :  productmodel.BOPLine) {
      setVariableValue("bopLine", 0, $arg)
    }
    
    property get bopOtherIncludedCat () : gw.api.productmodel.CoverageCategory {
      return getVariableValue("bopOtherIncludedCat", 0) as gw.api.productmodel.CoverageCategory
    }
    
    property set bopOtherIncludedCat ($arg :  gw.api.productmodel.CoverageCategory) {
      setVariableValue("bopOtherIncludedCat", 0, $arg)
    }
    
    property get bopOtherIncludedCatCoveragePatterns () : gw.api.productmodel.CoveragePattern[] {
      return getVariableValue("bopOtherIncludedCatCoveragePatterns", 0) as gw.api.productmodel.CoveragePattern[]
    }
    
    property set bopOtherIncludedCatCoveragePatterns ($arg :  gw.api.productmodel.CoveragePattern[]) {
      setVariableValue("bopOtherIncludedCatCoveragePatterns", 0, $arg)
    }
    
    property get policyLine () : PolicyLine {
      return getRequireValue("policyLine", 0) as PolicyLine
    }
    
    property set policyLine ($arg :  PolicyLine) {
      setRequireValue("policyLine", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPLineOtherIncludedDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends BOPLineOtherIncludedDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at BOPLineOtherIncludedDV.pcf: line 35, column 44
    function def_onEnter_10 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineOtherIncludedDV.pcf: line 35, column 44
    function def_onEnter_12 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineOtherIncludedDV.pcf: line 35, column 44
    function def_onEnter_14 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineOtherIncludedDV.pcf: line 35, column 44
    function def_onEnter_16 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineOtherIncludedDV.pcf: line 35, column 44
    function def_onEnter_18 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineOtherIncludedDV.pcf: line 35, column 44
    function def_onEnter_20 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineOtherIncludedDV.pcf: line 35, column 44
    function def_onEnter_22 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineOtherIncludedDV.pcf: line 35, column 44
    function def_onEnter_24 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineOtherIncludedDV.pcf: line 35, column 44
    function def_onEnter_26 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineOtherIncludedDV.pcf: line 35, column 44
    function def_onEnter_28 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineOtherIncludedDV.pcf: line 35, column 44
    function def_onEnter_30 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineOtherIncludedDV.pcf: line 35, column 44
    function def_onEnter_32 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineOtherIncludedDV.pcf: line 35, column 44
    function def_onEnter_4 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineOtherIncludedDV.pcf: line 35, column 44
    function def_onEnter_6 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineOtherIncludedDV.pcf: line 35, column 44
    function def_onEnter_8 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineOtherIncludedDV.pcf: line 35, column 44
    function def_refreshVariables_11 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineOtherIncludedDV.pcf: line 35, column 44
    function def_refreshVariables_13 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineOtherIncludedDV.pcf: line 35, column 44
    function def_refreshVariables_15 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineOtherIncludedDV.pcf: line 35, column 44
    function def_refreshVariables_17 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineOtherIncludedDV.pcf: line 35, column 44
    function def_refreshVariables_19 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineOtherIncludedDV.pcf: line 35, column 44
    function def_refreshVariables_21 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineOtherIncludedDV.pcf: line 35, column 44
    function def_refreshVariables_23 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineOtherIncludedDV.pcf: line 35, column 44
    function def_refreshVariables_25 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineOtherIncludedDV.pcf: line 35, column 44
    function def_refreshVariables_27 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineOtherIncludedDV.pcf: line 35, column 44
    function def_refreshVariables_29 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineOtherIncludedDV.pcf: line 35, column 44
    function def_refreshVariables_31 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineOtherIncludedDV.pcf: line 35, column 44
    function def_refreshVariables_33 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineOtherIncludedDV.pcf: line 35, column 44
    function def_refreshVariables_5 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineOtherIncludedDV.pcf: line 35, column 44
    function def_refreshVariables_7 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at BOPLineOtherIncludedDV.pcf: line 35, column 44
    function def_refreshVariables_9 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(coveragePattern, bopLine, true, null)
    }
    
    // 'mode' attribute on InputSetRef at BOPLineOtherIncludedDV.pcf: line 35, column 44
    function mode_34 () : java.lang.Object {
      return coveragePattern.PublicID
    }
    
    property get coveragePattern () : gw.api.productmodel.CoveragePattern {
      return getIteratedValue(1) as gw.api.productmodel.CoveragePattern
    }
    
    
  }
  
  
}