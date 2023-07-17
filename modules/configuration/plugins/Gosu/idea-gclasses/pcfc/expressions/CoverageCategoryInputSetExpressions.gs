package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/CoverageCategoryInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CoverageCategoryInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/CoverageCategoryInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CoverageCategoryInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at CoverageCategoryInputSet.pcf: line 27, column 24
    function sortBy_0 (clausePattern :  gw.api.productmodel.ClausePattern) : java.lang.Object {
      return clausePattern.Priority
    }
    
    // 'value' attribute on InputIterator (id=clausePatternIterator) at CoverageCategoryInputSet.pcf: line 24, column 55
    function value_32 () : gw.api.productmodel.ClausePattern[] {
      return gw.api.productedition.APDClauseHierarchyHelper.filterTopLevelClauses(coverable, clausePatterns).orderBy(\clause -> clause.Priority).toTypedArray()
    }
    
    property get clausePatterns () : gw.api.productmodel.ClausePattern[] {
      return getRequireValue("clausePatterns", 0) as gw.api.productmodel.ClausePattern[]
    }
    
    property set clausePatterns ($arg :  gw.api.productmodel.ClausePattern[]) {
      setRequireValue("clausePatterns", 0, $arg)
    }
    
    property get coverable () : Coverable {
      return getRequireValue("coverable", 0) as Coverable
    }
    
    property set coverable ($arg :  Coverable) {
      setRequireValue("coverable", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/coverage/CoverageCategoryInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CoverageCategoryInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 30, column 46
    function def_onEnter_1 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(clausePattern, coverable, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 30, column 46
    function def_onEnter_11 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(clausePattern, coverable, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 30, column 46
    function def_onEnter_13 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(clausePattern, coverable, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 30, column 46
    function def_onEnter_15 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(clausePattern, coverable, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 30, column 46
    function def_onEnter_17 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(clausePattern, coverable, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 30, column 46
    function def_onEnter_19 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(clausePattern, coverable, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 30, column 46
    function def_onEnter_21 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(clausePattern, coverable, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 30, column 46
    function def_onEnter_23 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(clausePattern, coverable, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 30, column 46
    function def_onEnter_25 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(clausePattern, coverable, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 30, column 46
    function def_onEnter_27 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(clausePattern, coverable, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 30, column 46
    function def_onEnter_29 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(clausePattern, coverable, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 30, column 46
    function def_onEnter_3 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(clausePattern, coverable, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 30, column 46
    function def_onEnter_5 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(clausePattern, coverable, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 30, column 46
    function def_onEnter_7 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(clausePattern, coverable, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 30, column 46
    function def_onEnter_9 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(clausePattern, coverable, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 30, column 46
    function def_refreshVariables_10 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(clausePattern, coverable, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 30, column 46
    function def_refreshVariables_12 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(clausePattern, coverable, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 30, column 46
    function def_refreshVariables_14 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(clausePattern, coverable, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 30, column 46
    function def_refreshVariables_16 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(clausePattern, coverable, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 30, column 46
    function def_refreshVariables_18 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(clausePattern, coverable, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 30, column 46
    function def_refreshVariables_2 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(clausePattern, coverable, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 30, column 46
    function def_refreshVariables_20 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(clausePattern, coverable, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 30, column 46
    function def_refreshVariables_22 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(clausePattern, coverable, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 30, column 46
    function def_refreshVariables_24 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(clausePattern, coverable, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 30, column 46
    function def_refreshVariables_26 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(clausePattern, coverable, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 30, column 46
    function def_refreshVariables_28 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(clausePattern, coverable, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 30, column 46
    function def_refreshVariables_30 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(clausePattern, coverable, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 30, column 46
    function def_refreshVariables_4 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(clausePattern, coverable, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 30, column 46
    function def_refreshVariables_6 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(clausePattern, coverable, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 30, column 46
    function def_refreshVariables_8 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(clausePattern, coverable, openForEdit, jobWizardHelper)
    }
    
    // 'mode' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 30, column 46
    function mode_31 () : java.lang.Object {
      return clausePattern.CodeIdentifier
    }
    
    property get clausePattern () : gw.api.productmodel.ClausePattern {
      return getIteratedValue(1) as gw.api.productmodel.ClausePattern
    }
    
    
  }
  
  
}