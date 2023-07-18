package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPMainCoveragesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HOPMainCoveragesPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPMainCoveragesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DetailViewPanel2ExpressionsImpl extends HOPMainCoveragesPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at HOPMainCoveragesPanelSet.pcf: line 64, column 61
    function initialValue_36 () : gw.api.productmodel.CoveragePattern[] {
      return HOPClausePanelSetHelper.getLineSectionIICoveragesPatterns(hopLine, openForEdit)
    }
    
    // 'sortBy' attribute on IteratorSort at HOPMainCoveragesPanelSet.pcf: line 73, column 34
    function sortBy_37 (coveragePattern :  gw.api.productmodel.CoveragePattern) : java.lang.Object {
      return coveragePattern.Priority
    }
    
    // 'value' attribute on InputIterator (id=liabilityCoveragePatternIterator) at HOPMainCoveragesPanelSet.pcf: line 70, column 67
    function value_69 () : gw.api.productmodel.CoveragePattern[] {
      return liabilityCoveragePatterns
    }
    
    property get liabilityCoveragePatterns () : gw.api.productmodel.CoveragePattern[] {
      return getVariableValue("liabilityCoveragePatterns", 1) as gw.api.productmodel.CoveragePattern[]
    }
    
    property set liabilityCoveragePatterns ($arg :  gw.api.productmodel.CoveragePattern[]) {
      setVariableValue("liabilityCoveragePatterns", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPMainCoveragesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DetailViewPanelExpressionsImpl extends HOPMainCoveragesPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at HOPMainCoveragesPanelSet.pcf: line 37, column 61
    function initialValue_1 () : gw.api.productmodel.CoveragePattern[] {
      return HOPClausePanelSetHelper.getDwellingSectionICoveragesPatterns(dwelling, openForEdit)
    }
    
    // 'sortBy' attribute on IteratorSort at HOPMainCoveragesPanelSet.pcf: line 46, column 34
    function sortBy_2 (coveragePattern :  gw.api.productmodel.CoveragePattern) : java.lang.Object {
      return coveragePattern.Priority
    }
    
    // 'value' attribute on InputIterator (id=dwellingCoveragePatternIterator) at HOPMainCoveragesPanelSet.pcf: line 43, column 67
    function value_34 () : gw.api.productmodel.CoveragePattern[] {
      return dwellingCoveragePatterns
    }
    
    property get dwellingCoveragePatterns () : gw.api.productmodel.CoveragePattern[] {
      return getVariableValue("dwellingCoveragePatterns", 1) as gw.api.productmodel.CoveragePattern[]
    }
    
    property set dwellingCoveragePatterns ($arg :  gw.api.productmodel.CoveragePattern[]) {
      setVariableValue("dwellingCoveragePatterns", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPMainCoveragesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HOPMainCoveragesPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'title' attribute on TitleBar at HOPMainCoveragesPanelSet.pcf: line 31, column 107
    function title_0 () : java.lang.String {
      return hopLine.Pattern.getCoverageCategoryByRefCode(sectionICovCategoryRefCode).DisplayName
    }
    
    // 'title' attribute on TitleBar at HOPMainCoveragesPanelSet.pcf: line 58, column 108
    function title_35 () : java.lang.String {
      return hopLine.Pattern.getCoverageCategoryByRefCode(sectionIICovCategoryRefCode).DisplayName
    }
    
    property get HOPClausePanelSetHelper () : gw.web.line.hop.policy.HOPClausePanelSetHelper {
      return getVariableValue("HOPClausePanelSetHelper", 0) as gw.web.line.hop.policy.HOPClausePanelSetHelper
    }
    
    property set HOPClausePanelSetHelper ($arg :  gw.web.line.hop.policy.HOPClausePanelSetHelper) {
      setVariableValue("HOPClausePanelSetHelper", 0, $arg)
    }
    
    property get dwelling () : HOPDwelling {
      return getRequireValue("dwelling", 0) as HOPDwelling
    }
    
    property set dwelling ($arg :  HOPDwelling) {
      setRequireValue("dwelling", 0, $arg)
    }
    
    property get hopLine () : productmodel.HOPLine {
      return getRequireValue("hopLine", 0) as productmodel.HOPLine
    }
    
    property set hopLine ($arg :  productmodel.HOPLine) {
      setRequireValue("hopLine", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get sectionICovCategoryRefCode () : String {
      return getVariableValue("sectionICovCategoryRefCode", 0) as String
    }
    
    property set sectionICovCategoryRefCode ($arg :  String) {
      setVariableValue("sectionICovCategoryRefCode", 0, $arg)
    }
    
    property get sectionIICovCategoryRefCode () : String {
      return getVariableValue("sectionIICovCategoryRefCode", 0) as String
    }
    
    property set sectionIICovCategoryRefCode ($arg :  String) {
      setVariableValue("sectionIICovCategoryRefCode", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPMainCoveragesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends DetailViewPanel2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 76, column 58
    function def_onEnter_38 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(coveragePattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 76, column 58
    function def_onEnter_40 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(coveragePattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 76, column 58
    function def_onEnter_42 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(coveragePattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 76, column 58
    function def_onEnter_44 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(coveragePattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 76, column 58
    function def_onEnter_46 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(coveragePattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 76, column 58
    function def_onEnter_48 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(coveragePattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 76, column 58
    function def_onEnter_50 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(coveragePattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 76, column 58
    function def_onEnter_52 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(coveragePattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 76, column 58
    function def_onEnter_54 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(coveragePattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 76, column 58
    function def_onEnter_56 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(coveragePattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 76, column 58
    function def_onEnter_58 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(coveragePattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 76, column 58
    function def_onEnter_60 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(coveragePattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 76, column 58
    function def_onEnter_62 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(coveragePattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 76, column 58
    function def_onEnter_64 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(coveragePattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 76, column 58
    function def_onEnter_66 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(coveragePattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 76, column 58
    function def_refreshVariables_39 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(coveragePattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 76, column 58
    function def_refreshVariables_41 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(coveragePattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 76, column 58
    function def_refreshVariables_43 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(coveragePattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 76, column 58
    function def_refreshVariables_45 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(coveragePattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 76, column 58
    function def_refreshVariables_47 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(coveragePattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 76, column 58
    function def_refreshVariables_49 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(coveragePattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 76, column 58
    function def_refreshVariables_51 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(coveragePattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 76, column 58
    function def_refreshVariables_53 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(coveragePattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 76, column 58
    function def_refreshVariables_55 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(coveragePattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 76, column 58
    function def_refreshVariables_57 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(coveragePattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 76, column 58
    function def_refreshVariables_59 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(coveragePattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 76, column 58
    function def_refreshVariables_61 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(coveragePattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 76, column 58
    function def_refreshVariables_63 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(coveragePattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 76, column 58
    function def_refreshVariables_65 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(coveragePattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 76, column 58
    function def_refreshVariables_67 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(coveragePattern, hopLine, openForEdit, null)
    }
    
    // 'mode' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 76, column 58
    function mode_68 () : java.lang.Object {
      return coveragePattern.CodeIdentifier
    }
    
    property get coveragePattern () : gw.api.productmodel.CoveragePattern {
      return getIteratedValue(2) as gw.api.productmodel.CoveragePattern
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPMainCoveragesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DetailViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 49, column 58
    function def_onEnter_11 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(coveragePattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 49, column 58
    function def_onEnter_13 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(coveragePattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 49, column 58
    function def_onEnter_15 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(coveragePattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 49, column 58
    function def_onEnter_17 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(coveragePattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 49, column 58
    function def_onEnter_19 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(coveragePattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 49, column 58
    function def_onEnter_21 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(coveragePattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 49, column 58
    function def_onEnter_23 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(coveragePattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 49, column 58
    function def_onEnter_25 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(coveragePattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 49, column 58
    function def_onEnter_27 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(coveragePattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 49, column 58
    function def_onEnter_29 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(coveragePattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 49, column 58
    function def_onEnter_3 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(coveragePattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 49, column 58
    function def_onEnter_31 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(coveragePattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 49, column 58
    function def_onEnter_5 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(coveragePattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 49, column 58
    function def_onEnter_7 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(coveragePattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 49, column 58
    function def_onEnter_9 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(coveragePattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 49, column 58
    function def_refreshVariables_10 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(coveragePattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 49, column 58
    function def_refreshVariables_12 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(coveragePattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 49, column 58
    function def_refreshVariables_14 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(coveragePattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 49, column 58
    function def_refreshVariables_16 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(coveragePattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 49, column 58
    function def_refreshVariables_18 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(coveragePattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 49, column 58
    function def_refreshVariables_20 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(coveragePattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 49, column 58
    function def_refreshVariables_22 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(coveragePattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 49, column 58
    function def_refreshVariables_24 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(coveragePattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 49, column 58
    function def_refreshVariables_26 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(coveragePattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 49, column 58
    function def_refreshVariables_28 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(coveragePattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 49, column 58
    function def_refreshVariables_30 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(coveragePattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 49, column 58
    function def_refreshVariables_32 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(coveragePattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 49, column 58
    function def_refreshVariables_4 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(coveragePattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 49, column 58
    function def_refreshVariables_6 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(coveragePattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 49, column 58
    function def_refreshVariables_8 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(coveragePattern, dwelling, openForEdit, null)
    }
    
    // 'mode' attribute on InputSetRef at HOPMainCoveragesPanelSet.pcf: line 49, column 58
    function mode_33 () : java.lang.Object {
      return coveragePattern.CodeIdentifier
    }
    
    property get coveragePattern () : gw.api.productmodel.CoveragePattern {
      return getIteratedValue(2) as gw.api.productmodel.CoveragePattern
    }
    
    
  }
  
  
}