package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/pa/policy/PALineAdditionalCoveragesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PALineAdditionalCoveragesDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PALineAdditionalCoveragesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InputSetExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at PALineAdditionalCoveragesDV.pcf: line 29, column 61
    function initialValue_0 () : gw.api.productmodel.CoveragePattern[] {
      return paLine.Pattern.getCoverageCategoryByPublicId(category).coveragePatternsForEntity(PersonalAutoLine).whereSelectedOrAvailable(paLine, openForEdit)
    }
    
    // 'value' attribute on InputIterator (id=LineCoveragesIterator) at PALineAdditionalCoveragesDV.pcf: line 35, column 65
    function value_32 () : gw.api.productmodel.CoveragePattern[] {
      return includedCategoryCoveragePatterns
    }
    
    property get includedCategoryCoveragePatterns () : gw.api.productmodel.CoveragePattern[] {
      return getVariableValue("includedCategoryCoveragePatterns", 2) as gw.api.productmodel.CoveragePattern[]
    }
    
    property set includedCategoryCoveragePatterns ($arg :  gw.api.productmodel.CoveragePattern[]) {
      setVariableValue("includedCategoryCoveragePatterns", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PALineAdditionalCoveragesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends InputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at PALineAdditionalCoveragesDV.pcf: line 38, column 50
    function def_onEnter_1 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(coveragePattern, paLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PALineAdditionalCoveragesDV.pcf: line 38, column 50
    function def_onEnter_11 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(coveragePattern, paLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PALineAdditionalCoveragesDV.pcf: line 38, column 50
    function def_onEnter_13 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(coveragePattern, paLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PALineAdditionalCoveragesDV.pcf: line 38, column 50
    function def_onEnter_15 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(coveragePattern, paLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PALineAdditionalCoveragesDV.pcf: line 38, column 50
    function def_onEnter_17 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(coveragePattern, paLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PALineAdditionalCoveragesDV.pcf: line 38, column 50
    function def_onEnter_19 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(coveragePattern, paLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PALineAdditionalCoveragesDV.pcf: line 38, column 50
    function def_onEnter_21 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(coveragePattern, paLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PALineAdditionalCoveragesDV.pcf: line 38, column 50
    function def_onEnter_23 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(coveragePattern, paLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PALineAdditionalCoveragesDV.pcf: line 38, column 50
    function def_onEnter_25 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(coveragePattern, paLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PALineAdditionalCoveragesDV.pcf: line 38, column 50
    function def_onEnter_27 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(coveragePattern, paLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PALineAdditionalCoveragesDV.pcf: line 38, column 50
    function def_onEnter_29 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(coveragePattern, paLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PALineAdditionalCoveragesDV.pcf: line 38, column 50
    function def_onEnter_3 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(coveragePattern, paLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PALineAdditionalCoveragesDV.pcf: line 38, column 50
    function def_onEnter_5 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(coveragePattern, paLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PALineAdditionalCoveragesDV.pcf: line 38, column 50
    function def_onEnter_7 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(coveragePattern, paLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PALineAdditionalCoveragesDV.pcf: line 38, column 50
    function def_onEnter_9 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(coveragePattern, paLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PALineAdditionalCoveragesDV.pcf: line 38, column 50
    function def_refreshVariables_10 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(coveragePattern, paLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PALineAdditionalCoveragesDV.pcf: line 38, column 50
    function def_refreshVariables_12 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(coveragePattern, paLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PALineAdditionalCoveragesDV.pcf: line 38, column 50
    function def_refreshVariables_14 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(coveragePattern, paLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PALineAdditionalCoveragesDV.pcf: line 38, column 50
    function def_refreshVariables_16 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(coveragePattern, paLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PALineAdditionalCoveragesDV.pcf: line 38, column 50
    function def_refreshVariables_18 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(coveragePattern, paLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PALineAdditionalCoveragesDV.pcf: line 38, column 50
    function def_refreshVariables_2 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(coveragePattern, paLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PALineAdditionalCoveragesDV.pcf: line 38, column 50
    function def_refreshVariables_20 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(coveragePattern, paLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PALineAdditionalCoveragesDV.pcf: line 38, column 50
    function def_refreshVariables_22 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(coveragePattern, paLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PALineAdditionalCoveragesDV.pcf: line 38, column 50
    function def_refreshVariables_24 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(coveragePattern, paLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PALineAdditionalCoveragesDV.pcf: line 38, column 50
    function def_refreshVariables_26 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(coveragePattern, paLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PALineAdditionalCoveragesDV.pcf: line 38, column 50
    function def_refreshVariables_28 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(coveragePattern, paLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PALineAdditionalCoveragesDV.pcf: line 38, column 50
    function def_refreshVariables_30 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(coveragePattern, paLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PALineAdditionalCoveragesDV.pcf: line 38, column 50
    function def_refreshVariables_4 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(coveragePattern, paLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PALineAdditionalCoveragesDV.pcf: line 38, column 50
    function def_refreshVariables_6 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(coveragePattern, paLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PALineAdditionalCoveragesDV.pcf: line 38, column 50
    function def_refreshVariables_8 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(coveragePattern, paLine, openForEdit, null)
    }
    
    // 'mode' attribute on InputSetRef at PALineAdditionalCoveragesDV.pcf: line 38, column 50
    function mode_31 () : java.lang.Object {
      return coveragePattern.PublicID
    }
    
    property get coveragePattern () : gw.api.productmodel.CoveragePattern {
      return getIteratedValue(3) as gw.api.productmodel.CoveragePattern
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PALineAdditionalCoveragesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PALineAdditionalCoveragesDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get category () : java.lang.String {
      return getIteratedValue(1) as java.lang.String
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PALineAdditionalCoveragesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PALineAdditionalCoveragesDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on InputIterator (id=categories) at PALineAdditionalCoveragesDV.pcf: line 23, column 42
    function value_33 () : java.lang.String[] {
      return includedCoverageCategories
    }
    
    // 'visible' attribute on InputSet at PALineAdditionalCoveragesDV.pcf: line 18, column 34
    function visible_34 () : java.lang.Boolean {
      return paLine != null
    }
    
    property get includedCoverageCategories () : String[] {
      return getRequireValue("includedCoverageCategories", 0) as String[]
    }
    
    property set includedCoverageCategories ($arg :  String[]) {
      setRequireValue("includedCoverageCategories", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get paLine () : PersonalAutoLine {
      return getRequireValue("paLine", 0) as PersonalAutoLine
    }
    
    property set paLine ($arg :  PersonalAutoLine) {
      setRequireValue("paLine", 0, $arg)
    }
    
    
  }
  
  
}