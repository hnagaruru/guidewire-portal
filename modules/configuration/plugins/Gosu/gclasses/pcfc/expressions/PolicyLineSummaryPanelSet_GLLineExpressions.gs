package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl/policy/PolicyLineSummaryPanelSet.GLLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyLineSummaryPanelSet_GLLineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl/policy/PolicyLineSummaryPanelSet.GLLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PolicyLineSummaryPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=EUClass_Cell) at PolicyLineSummaryPanelSet.GLLine.pcf: line 53, column 33
    function valueRoot_12 () : java.lang.Object {
      return eU.ClassCode
    }
    
    // 'value' attribute on TextCell (id=EUBasis_Cell) at PolicyLineSummaryPanelSet.GLLine.pcf: line 63, column 33
    function valueRoot_18 () : java.lang.Object {
      return eU.ClassCode.Basis
    }
    
    // 'value' attribute on TextCell (id=EULoc_Cell) at PolicyLineSummaryPanelSet.GLLine.pcf: line 48, column 54
    function valueRoot_9 () : java.lang.Object {
      return eU
    }
    
    // 'value' attribute on TextCell (id=EUClass_Cell) at PolicyLineSummaryPanelSet.GLLine.pcf: line 53, column 33
    function value_11 () : java.lang.String {
      return eU.ClassCode.Code
    }
    
    // 'value' attribute on TextCell (id=ClassCodeDescription_Cell) at PolicyLineSummaryPanelSet.GLLine.pcf: line 58, column 56
    function value_14 () : java.lang.String {
      return eU.ClassCode.Classification
    }
    
    // 'value' attribute on TextCell (id=EUBasis_Cell) at PolicyLineSummaryPanelSet.GLLine.pcf: line 63, column 33
    function value_17 () : java.lang.String {
      return eU.ClassCode.Basis.Code
    }
    
    // 'value' attribute on TextCell (id=EUUnits_Cell) at PolicyLineSummaryPanelSet.GLLine.pcf: line 69, column 33
    function value_20 () : java.lang.Integer {
      return eU.BasisAmount
    }
    
    // 'value' attribute on TextCell (id=EULoc_Cell) at PolicyLineSummaryPanelSet.GLLine.pcf: line 48, column 54
    function value_8 () : entity.PolicyLocation {
      return eU.Location
    }
    
    property get eU () : entity.GLExposure {
      return getIteratedValue(1) as entity.GLExposure
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl/policy/PolicyLineSummaryPanelSet.GLLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyLineSummaryPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput at PolicyLineSummaryPanelSet.GLLine.pcf: line 83, column 29
    function def_onEnter_24 (def :  pcf.CoverageSummaryLV) : void {
      def.onEnter(glLine.GLLineCoveragesAndScheduleCovsWithNoCovTerms.toList(), glLine)
    }
    
    // 'def' attribute on ListViewInput (id=ExclusionSummaryLV) at PolicyLineSummaryPanelSet.GLLine.pcf: line 93, column 57
    function def_onEnter_28 (def :  pcf.CoverageSummaryLV) : void {
      def.onEnter(glLine.GLLineExclusions.toList(), glLine)
    }
    
    // 'def' attribute on ListViewInput (id=ConditionSummaryLV) at PolicyLineSummaryPanelSet.GLLine.pcf: line 103, column 57
    function def_onEnter_32 (def :  pcf.CoverageSummaryLV) : void {
      def.onEnter(glLine.GLLineConditions.toList(), glLine)
    }
    
    // 'def' attribute on ListViewInput (id=GLScheduleCoveragesLVI) at PolicyLineSummaryPanelSet.GLLine.pcf: line 113, column 67
    function def_onEnter_36 (def :  pcf.ScheduleCoverageSummaryLV) : void {
      def.onEnter(glLine.GLScheduleCovsWithCovTerms.toList())
    }
    
    // 'def' attribute on ListViewInput at PolicyLineSummaryPanelSet.GLLine.pcf: line 83, column 29
    function def_refreshVariables_25 (def :  pcf.CoverageSummaryLV) : void {
      def.refreshVariables(glLine.GLLineCoveragesAndScheduleCovsWithNoCovTerms.toList(), glLine)
    }
    
    // 'def' attribute on ListViewInput (id=ExclusionSummaryLV) at PolicyLineSummaryPanelSet.GLLine.pcf: line 93, column 57
    function def_refreshVariables_29 (def :  pcf.CoverageSummaryLV) : void {
      def.refreshVariables(glLine.GLLineExclusions.toList(), glLine)
    }
    
    // 'def' attribute on ListViewInput (id=ConditionSummaryLV) at PolicyLineSummaryPanelSet.GLLine.pcf: line 103, column 57
    function def_refreshVariables_33 (def :  pcf.CoverageSummaryLV) : void {
      def.refreshVariables(glLine.GLLineConditions.toList(), glLine)
    }
    
    // 'def' attribute on ListViewInput (id=GLScheduleCoveragesLVI) at PolicyLineSummaryPanelSet.GLLine.pcf: line 113, column 67
    function def_refreshVariables_37 (def :  pcf.ScheduleCoverageSummaryLV) : void {
      def.refreshVariables(glLine.GLScheduleCovsWithCovTerms.toList())
    }
    
    // 'initialValue' attribute on Variable at PolicyLineSummaryPanelSet.GLLine.pcf: line 17, column 35
    function initialValue_0 () : productmodel.GLLine {
      return line as GLLine
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyLineSummaryPanelSet.GLLine.pcf: line 38, column 32
    function sortBy_1 (eU :  entity.GLExposure) : java.lang.Object {
      return eU.Location.LocationNum
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyLineSummaryPanelSet.GLLine.pcf: line 41, column 32
    function sortBy_2 (eU :  entity.GLExposure) : java.lang.Object {
      return eU.ClassCode.Code
    }
    
    // 'value' attribute on TextCell (id=EULoc_Cell) at PolicyLineSummaryPanelSet.GLLine.pcf: line 48, column 54
    function sortValue_3 (eU :  entity.GLExposure) : java.lang.Object {
      return eU.Location
    }
    
    // 'value' attribute on TextCell (id=EUClass_Cell) at PolicyLineSummaryPanelSet.GLLine.pcf: line 53, column 33
    function sortValue_4 (eU :  entity.GLExposure) : java.lang.Object {
      return eU.ClassCode.Code
    }
    
    // 'value' attribute on TextCell (id=ClassCodeDescription_Cell) at PolicyLineSummaryPanelSet.GLLine.pcf: line 58, column 56
    function sortValue_5 (eU :  entity.GLExposure) : java.lang.Object {
      return eU.ClassCode.Classification
    }
    
    // 'value' attribute on TextCell (id=EUBasis_Cell) at PolicyLineSummaryPanelSet.GLLine.pcf: line 63, column 33
    function sortValue_6 (eU :  entity.GLExposure) : java.lang.Object {
      return eU.ClassCode.Basis.Code
    }
    
    // 'value' attribute on TextCell (id=EUUnits_Cell) at PolicyLineSummaryPanelSet.GLLine.pcf: line 69, column 33
    function sortValue_7 (eU :  entity.GLExposure) : java.lang.Object {
      return eU.BasisAmount
    }
    
    // 'value' attribute on RowIterator at PolicyLineSummaryPanelSet.GLLine.pcf: line 35, column 47
    function value_23 () : entity.GLExposure[] {
      return (line as GeneralLiabilityLine).Exposures
    }
    
    // 'visible' attribute on Label at PolicyLineSummaryPanelSet.GLLine.pcf: line 88, column 58
    function visible_26 () : java.lang.Boolean {
      return not glLine.GLLineExclusions.IsEmpty
    }
    
    // 'visible' attribute on Label at PolicyLineSummaryPanelSet.GLLine.pcf: line 98, column 58
    function visible_30 () : java.lang.Boolean {
      return not glLine.GLLineConditions.IsEmpty
    }
    
    // 'visible' attribute on Label at PolicyLineSummaryPanelSet.GLLine.pcf: line 108, column 68
    function visible_34 () : java.lang.Boolean {
      return not glLine.GLScheduleCovsWithCovTerms.IsEmpty
    }
    
    property get glLine () : productmodel.GLLine {
      return getVariableValue("glLine", 0) as productmodel.GLLine
    }
    
    property set glLine ($arg :  productmodel.GLLine) {
      setVariableValue("glLine", 0, $arg)
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
    
    
  }
  
  
}