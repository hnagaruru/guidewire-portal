package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/CoverageInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CoverageInputSet_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/CoverageInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CoverageInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonInput (id=SubClausesButton_Input) at CoverageInputSet.default.pcf: line 56, column 102
    function action_30 () : void {
      SubClausesPopup.push(coverable, coveragePattern, openForEdit, jobWizardHelper)
    }
    
    // 'action' attribute on ButtonInput (id=SubClausesButton_Input) at CoverageInputSet.default.pcf: line 56, column 102
    function action_dest_31 () : pcf.api.Destination {
      return pcf.SubClausesPopup.createDestination(coverable, coveragePattern, openForEdit, jobWizardHelper)
    }
    
    // 'allowToggle' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.default.pcf: line 30, column 90
    function available_34 () : java.lang.Boolean {
      return coveragePattern.allowToggle(coverable)
    }
    
    // 'def' attribute on InputSetRef at CoverageInputSet.default.pcf: line 43, column 106
    function def_onEnter_25 (def :  pcf.ScheduleInputSet_false) : void {
      def.onEnter(coverable.getCoverageConditionOrExclusion(coveragePattern), openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CoverageInputSet.default.pcf: line 43, column 106
    function def_onEnter_27 (def :  pcf.ScheduleInputSet_true) : void {
      def.onEnter(coverable.getCoverageConditionOrExclusion(coveragePattern), openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CoverageInputSet.default.pcf: line 43, column 106
    function def_refreshVariables_26 (def :  pcf.ScheduleInputSet_false) : void {
      def.refreshVariables(coverable.getCoverageConditionOrExclusion(coveragePattern), openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CoverageInputSet.default.pcf: line 43, column 106
    function def_refreshVariables_28 (def :  pcf.ScheduleInputSet_true) : void {
      def.refreshVariables(coverable.getCoverageConditionOrExclusion(coveragePattern), openForEdit)
    }
    
    // 'disablePostOnEnter' attribute on PostOnChange at CoverageInputSet.default.pcf: line 47, column 86
    function disablePostOnEnter_3 () : java.lang.Boolean {
      return not gw.web.rules.APDRulesHelper.hasDependents(coverable, coveragePattern)
    }
    
    // 'label' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.default.pcf: line 30, column 90
    function label_35 () : java.lang.Object {
      return coveragePattern.DisplayName
    }
    
    // 'mode' attribute on InputSetRef at CoverageInputSet.default.pcf: line 43, column 106
    function mode_29 () : java.lang.Object {
      return coverable.getCoverageConditionOrExclusion(coveragePattern) typeis gw.api.domain.Schedule
    }
    
    // 'onChange' attribute on PostOnChange at CoverageInputSet.default.pcf: line 47, column 86
    function onChange_4 () : void {
      gw.web.rules.APDRulesHelper.onChange(coverable, jobWizardHelper)
    }
    
    // 'onToggle' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.default.pcf: line 30, column 90
    function setter_36 (VALUE :  java.lang.Boolean) : void {
      coverable.setCoverageConditionOrExclusionExists(coveragePattern, VALUE)
    }
    
    // 'value' attribute on HiddenInput (id=CovPatternDisplayName_Input) at CoverageInputSet.default.pcf: line 23, column 37
    function valueRoot_1 () : java.lang.Object {
      return coveragePattern
    }
    
    // 'value' attribute on HiddenInput (id=CovPatternDisplayName_Input) at CoverageInputSet.default.pcf: line 23, column 37
    function value_0 () : java.lang.String {
      return coveragePattern.DisplayName
    }
    
    // 'value' attribute on InputIterator (id=CovTermIterator) at CoverageInputSet.default.pcf: line 36, column 53
    function value_24 () : gw.api.domain.covterm.CovTerm[] {
      return coverable.getCoverageConditionOrExclusion(coveragePattern).CovTerms.sortBy( \ term -> term.Pattern.Priority )
    }
    
    // 'visible' attribute on InputSet at CoverageInputSet.default.pcf: line 49, column 108
    function visible_32 () : java.lang.Boolean {
      return gw.api.productedition.APDClauseHierarchyHelper.hasSubClauses(coverable, coveragePattern)
    }
    
    // 'childrenVisible' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.default.pcf: line 30, column 90
    function visible_33 () : java.lang.Boolean {
      return coverable.getCoverageConditionOrExclusion(coveragePattern) != null
    }
    
    // 'visible' attribute on InputDivider at CoverageInputSet.default.pcf: line 60, column 100
    function visible_39 () : java.lang.Boolean {
      return openForEdit or coverable.getCoverageConditionOrExclusion(coveragePattern) != null
    }
    
    property get coverable () : Coverable {
      return getRequireValue("coverable", 0) as Coverable
    }
    
    property set coverable ($arg :  Coverable) {
      setRequireValue("coverable", 0, $arg)
    }
    
    property get coveragePattern () : gw.api.productmodel.ClausePattern {
      return getRequireValue("coveragePattern", 0) as gw.api.productmodel.ClausePattern
    }
    
    property set coveragePattern ($arg :  gw.api.productmodel.ClausePattern) {
      setRequireValue("coveragePattern", 0, $arg)
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
  
  @javax.annotation.Generated("config/web/pcf/shared/coverage/CoverageInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CoverageInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at CoverageInputSet.default.pcf: line 39, column 38
    function def_onEnter_11 (def :  pcf.CovTermInputSet_Typekey) : void {
      def.onEnter(term, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageInputSet.default.pcf: line 39, column 38
    function def_onEnter_13 (def :  pcf.CovTermInputSet_bit) : void {
      def.onEnter(term, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageInputSet.default.pcf: line 39, column 38
    function def_onEnter_15 (def :  pcf.CovTermInputSet_datetime) : void {
      def.onEnter(term, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageInputSet.default.pcf: line 39, column 38
    function def_onEnter_17 (def :  pcf.CovTermInputSet_decimal) : void {
      def.onEnter(term, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageInputSet.default.pcf: line 39, column 38
    function def_onEnter_19 (def :  pcf.CovTermInputSet_default) : void {
      def.onEnter(term, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageInputSet.default.pcf: line 39, column 38
    function def_onEnter_21 (def :  pcf.CovTermInputSet_shorttext) : void {
      def.onEnter(term, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageInputSet.default.pcf: line 39, column 38
    function def_onEnter_5 (def :  pcf.CovTermInputSet_Direct) : void {
      def.onEnter(term, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageInputSet.default.pcf: line 39, column 38
    function def_onEnter_7 (def :  pcf.CovTermInputSet_Option) : void {
      def.onEnter(term, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageInputSet.default.pcf: line 39, column 38
    function def_onEnter_9 (def :  pcf.CovTermInputSet_Package) : void {
      def.onEnter(term, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageInputSet.default.pcf: line 39, column 38
    function def_refreshVariables_10 (def :  pcf.CovTermInputSet_Package) : void {
      def.refreshVariables(term, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageInputSet.default.pcf: line 39, column 38
    function def_refreshVariables_12 (def :  pcf.CovTermInputSet_Typekey) : void {
      def.refreshVariables(term, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageInputSet.default.pcf: line 39, column 38
    function def_refreshVariables_14 (def :  pcf.CovTermInputSet_bit) : void {
      def.refreshVariables(term, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageInputSet.default.pcf: line 39, column 38
    function def_refreshVariables_16 (def :  pcf.CovTermInputSet_datetime) : void {
      def.refreshVariables(term, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageInputSet.default.pcf: line 39, column 38
    function def_refreshVariables_18 (def :  pcf.CovTermInputSet_decimal) : void {
      def.refreshVariables(term, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageInputSet.default.pcf: line 39, column 38
    function def_refreshVariables_20 (def :  pcf.CovTermInputSet_default) : void {
      def.refreshVariables(term, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageInputSet.default.pcf: line 39, column 38
    function def_refreshVariables_22 (def :  pcf.CovTermInputSet_shorttext) : void {
      def.refreshVariables(term, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageInputSet.default.pcf: line 39, column 38
    function def_refreshVariables_6 (def :  pcf.CovTermInputSet_Direct) : void {
      def.refreshVariables(term, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CoverageInputSet.default.pcf: line 39, column 38
    function def_refreshVariables_8 (def :  pcf.CovTermInputSet_Option) : void {
      def.refreshVariables(term, openForEdit, jobWizardHelper)
    }
    
    // 'mode' attribute on InputSetRef at CoverageInputSet.default.pcf: line 39, column 38
    function mode_23 () : java.lang.Object {
      return term.ValueTypeName
    }
    
    property get term () : gw.api.domain.covterm.CovTerm {
      return getIteratedValue(1) as gw.api.domain.covterm.CovTerm
    }
    
    
  }
  
  
}