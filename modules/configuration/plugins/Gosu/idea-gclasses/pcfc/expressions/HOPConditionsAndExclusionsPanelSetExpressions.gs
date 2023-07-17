package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPConditionsAndExclusionsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HOPConditionsAndExclusionsPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPConditionsAndExclusionsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DetailViewPanel2ExpressionsImpl extends HOPConditionsAndExclusionsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at HOPConditionsAndExclusionsPanelSet.pcf: line 73, column 62
    function initialValue_68 () : gw.api.productmodel.ExclusionPattern[] {
      return HOPClausePanelSetHelper.getLineExclusionPatterns(hopLine, openForEdit)
    }
    
    // 'initialValue' attribute on Variable at HOPConditionsAndExclusionsPanelSet.pcf: line 78, column 62
    function initialValue_69 () : gw.api.productmodel.ExclusionPattern[] {
      return HOPClausePanelSetHelper.getDwellingExclusionPatterns(dwelling, openForEdit)
    }
    
    // 'sortBy' attribute on IteratorSort at HOPConditionsAndExclusionsPanelSet.pcf: line 99, column 34
    function sortBy_103 (lineExclusionPattern :  gw.api.productmodel.ExclusionPattern) : java.lang.Object {
      return lineExclusionPattern.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at HOPConditionsAndExclusionsPanelSet.pcf: line 87, column 34
    function sortBy_70 (dwellingExclusionPattern :  gw.api.productmodel.ExclusionPattern) : java.lang.Object {
      return dwellingExclusionPattern.Priority
    }
    
    // 'value' attribute on InputIterator (id=dwellingExclusionPatternIterator) at HOPConditionsAndExclusionsPanelSet.pcf: line 84, column 68
    function value_102 () : gw.api.productmodel.ExclusionPattern[] {
      return dwellingExclusionPatterns
    }
    
    // 'value' attribute on InputIterator (id=lineExclusionPatternIterator) at HOPConditionsAndExclusionsPanelSet.pcf: line 96, column 68
    function value_135 () : gw.api.productmodel.ExclusionPattern[] {
      return lineExclusionPatterns
    }
    
    property get dwellingExclusionPatterns () : gw.api.productmodel.ExclusionPattern[] {
      return getVariableValue("dwellingExclusionPatterns", 1) as gw.api.productmodel.ExclusionPattern[]
    }
    
    property set dwellingExclusionPatterns ($arg :  gw.api.productmodel.ExclusionPattern[]) {
      setVariableValue("dwellingExclusionPatterns", 1, $arg)
    }
    
    property get lineExclusionPatterns () : gw.api.productmodel.ExclusionPattern[] {
      return getVariableValue("lineExclusionPatterns", 1) as gw.api.productmodel.ExclusionPattern[]
    }
    
    property set lineExclusionPatterns ($arg :  gw.api.productmodel.ExclusionPattern[]) {
      setVariableValue("lineExclusionPatterns", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPConditionsAndExclusionsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DetailViewPanelExpressionsImpl extends HOPConditionsAndExclusionsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at HOPConditionsAndExclusionsPanelSet.pcf: line 29, column 62
    function initialValue_0 () : gw.api.productmodel.ConditionPattern[] {
      return HOPClausePanelSetHelper.getLineConditionPatterns(hopLine, openForEdit)
    }
    
    // 'initialValue' attribute on Variable at HOPConditionsAndExclusionsPanelSet.pcf: line 34, column 62
    function initialValue_1 () : gw.api.productmodel.ConditionPattern[] {
      return HOPClausePanelSetHelper.getDwellingConditionPatterns(dwelling, openForEdit)
    }
    
    // 'sortBy' attribute on IteratorSort at HOPConditionsAndExclusionsPanelSet.pcf: line 43, column 34
    function sortBy_2 (dwellingConditionPattern :  gw.api.productmodel.ConditionPattern) : java.lang.Object {
      return dwellingConditionPattern.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at HOPConditionsAndExclusionsPanelSet.pcf: line 55, column 34
    function sortBy_35 (lineConditionPattern :  gw.api.productmodel.ConditionPattern) : java.lang.Object {
      return lineConditionPattern.Priority
    }
    
    // 'value' attribute on InputIterator (id=dwellingConditionPatternIterator) at HOPConditionsAndExclusionsPanelSet.pcf: line 40, column 68
    function value_34 () : gw.api.productmodel.ConditionPattern[] {
      return dwellingConditionPatterns
    }
    
    // 'value' attribute on InputIterator (id=lineConditionPatternIterator) at HOPConditionsAndExclusionsPanelSet.pcf: line 52, column 68
    function value_67 () : gw.api.productmodel.ConditionPattern[] {
      return lineConditionPatterns
    }
    
    property get dwellingConditionPatterns () : gw.api.productmodel.ConditionPattern[] {
      return getVariableValue("dwellingConditionPatterns", 1) as gw.api.productmodel.ConditionPattern[]
    }
    
    property set dwellingConditionPatterns ($arg :  gw.api.productmodel.ConditionPattern[]) {
      setVariableValue("dwellingConditionPatterns", 1, $arg)
    }
    
    property get lineConditionPatterns () : gw.api.productmodel.ConditionPattern[] {
      return getVariableValue("lineConditionPatterns", 1) as gw.api.productmodel.ConditionPattern[]
    }
    
    property set lineConditionPatterns ($arg :  gw.api.productmodel.ConditionPattern[]) {
      setVariableValue("lineConditionPatterns", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPConditionsAndExclusionsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HOPConditionsAndExclusionsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
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
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPConditionsAndExclusionsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends DetailViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 58, column 63
    function def_onEnter_36 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(lineConditionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 58, column 63
    function def_onEnter_38 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(lineConditionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 58, column 63
    function def_onEnter_40 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(lineConditionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 58, column 63
    function def_onEnter_42 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(lineConditionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 58, column 63
    function def_onEnter_44 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(lineConditionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 58, column 63
    function def_onEnter_46 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(lineConditionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 58, column 63
    function def_onEnter_48 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(lineConditionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 58, column 63
    function def_onEnter_50 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(lineConditionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 58, column 63
    function def_onEnter_52 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(lineConditionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 58, column 63
    function def_onEnter_54 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(lineConditionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 58, column 63
    function def_onEnter_56 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(lineConditionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 58, column 63
    function def_onEnter_58 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(lineConditionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 58, column 63
    function def_onEnter_60 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(lineConditionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 58, column 63
    function def_onEnter_62 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(lineConditionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 58, column 63
    function def_onEnter_64 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(lineConditionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 58, column 63
    function def_refreshVariables_37 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(lineConditionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 58, column 63
    function def_refreshVariables_39 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(lineConditionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 58, column 63
    function def_refreshVariables_41 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(lineConditionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 58, column 63
    function def_refreshVariables_43 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(lineConditionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 58, column 63
    function def_refreshVariables_45 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(lineConditionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 58, column 63
    function def_refreshVariables_47 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(lineConditionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 58, column 63
    function def_refreshVariables_49 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(lineConditionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 58, column 63
    function def_refreshVariables_51 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(lineConditionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 58, column 63
    function def_refreshVariables_53 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(lineConditionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 58, column 63
    function def_refreshVariables_55 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(lineConditionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 58, column 63
    function def_refreshVariables_57 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(lineConditionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 58, column 63
    function def_refreshVariables_59 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(lineConditionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 58, column 63
    function def_refreshVariables_61 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(lineConditionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 58, column 63
    function def_refreshVariables_63 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(lineConditionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 58, column 63
    function def_refreshVariables_65 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(lineConditionPattern, hopLine, openForEdit, null)
    }
    
    // 'mode' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 58, column 63
    function mode_66 () : java.lang.Object {
      return lineConditionPattern.CodeIdentifier
    }
    
    property get lineConditionPattern () : gw.api.productmodel.ConditionPattern {
      return getIteratedValue(2) as gw.api.productmodel.ConditionPattern
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPConditionsAndExclusionsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends DetailViewPanel2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 90, column 67
    function def_onEnter_71 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(dwellingExclusionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 90, column 67
    function def_onEnter_73 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(dwellingExclusionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 90, column 67
    function def_onEnter_75 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(dwellingExclusionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 90, column 67
    function def_onEnter_77 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(dwellingExclusionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 90, column 67
    function def_onEnter_79 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(dwellingExclusionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 90, column 67
    function def_onEnter_81 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(dwellingExclusionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 90, column 67
    function def_onEnter_83 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(dwellingExclusionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 90, column 67
    function def_onEnter_85 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(dwellingExclusionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 90, column 67
    function def_onEnter_87 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(dwellingExclusionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 90, column 67
    function def_onEnter_89 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(dwellingExclusionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 90, column 67
    function def_onEnter_91 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(dwellingExclusionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 90, column 67
    function def_onEnter_93 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(dwellingExclusionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 90, column 67
    function def_onEnter_95 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(dwellingExclusionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 90, column 67
    function def_onEnter_97 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(dwellingExclusionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 90, column 67
    function def_onEnter_99 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(dwellingExclusionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 90, column 67
    function def_refreshVariables_100 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(dwellingExclusionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 90, column 67
    function def_refreshVariables_72 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(dwellingExclusionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 90, column 67
    function def_refreshVariables_74 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(dwellingExclusionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 90, column 67
    function def_refreshVariables_76 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(dwellingExclusionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 90, column 67
    function def_refreshVariables_78 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(dwellingExclusionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 90, column 67
    function def_refreshVariables_80 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(dwellingExclusionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 90, column 67
    function def_refreshVariables_82 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(dwellingExclusionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 90, column 67
    function def_refreshVariables_84 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(dwellingExclusionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 90, column 67
    function def_refreshVariables_86 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(dwellingExclusionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 90, column 67
    function def_refreshVariables_88 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(dwellingExclusionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 90, column 67
    function def_refreshVariables_90 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(dwellingExclusionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 90, column 67
    function def_refreshVariables_92 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(dwellingExclusionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 90, column 67
    function def_refreshVariables_94 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(dwellingExclusionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 90, column 67
    function def_refreshVariables_96 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(dwellingExclusionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 90, column 67
    function def_refreshVariables_98 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(dwellingExclusionPattern, dwelling, openForEdit, null)
    }
    
    // 'mode' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 90, column 67
    function mode_101 () : java.lang.Object {
      return dwellingExclusionPattern.CodeIdentifier
    }
    
    property get dwellingExclusionPattern () : gw.api.productmodel.ExclusionPattern {
      return getIteratedValue(2) as gw.api.productmodel.ExclusionPattern
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPConditionsAndExclusionsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends DetailViewPanel2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 102, column 63
    function def_onEnter_104 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(lineExclusionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 102, column 63
    function def_onEnter_106 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(lineExclusionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 102, column 63
    function def_onEnter_108 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(lineExclusionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 102, column 63
    function def_onEnter_110 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(lineExclusionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 102, column 63
    function def_onEnter_112 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(lineExclusionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 102, column 63
    function def_onEnter_114 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(lineExclusionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 102, column 63
    function def_onEnter_116 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(lineExclusionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 102, column 63
    function def_onEnter_118 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(lineExclusionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 102, column 63
    function def_onEnter_120 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(lineExclusionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 102, column 63
    function def_onEnter_122 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(lineExclusionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 102, column 63
    function def_onEnter_124 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(lineExclusionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 102, column 63
    function def_onEnter_126 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(lineExclusionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 102, column 63
    function def_onEnter_128 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(lineExclusionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 102, column 63
    function def_onEnter_130 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(lineExclusionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 102, column 63
    function def_onEnter_132 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(lineExclusionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 102, column 63
    function def_refreshVariables_105 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(lineExclusionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 102, column 63
    function def_refreshVariables_107 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(lineExclusionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 102, column 63
    function def_refreshVariables_109 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(lineExclusionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 102, column 63
    function def_refreshVariables_111 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(lineExclusionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 102, column 63
    function def_refreshVariables_113 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(lineExclusionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 102, column 63
    function def_refreshVariables_115 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(lineExclusionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 102, column 63
    function def_refreshVariables_117 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(lineExclusionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 102, column 63
    function def_refreshVariables_119 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(lineExclusionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 102, column 63
    function def_refreshVariables_121 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(lineExclusionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 102, column 63
    function def_refreshVariables_123 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(lineExclusionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 102, column 63
    function def_refreshVariables_125 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(lineExclusionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 102, column 63
    function def_refreshVariables_127 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(lineExclusionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 102, column 63
    function def_refreshVariables_129 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(lineExclusionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 102, column 63
    function def_refreshVariables_131 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(lineExclusionPattern, hopLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 102, column 63
    function def_refreshVariables_133 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(lineExclusionPattern, hopLine, openForEdit, null)
    }
    
    // 'mode' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 102, column 63
    function mode_134 () : java.lang.Object {
      return lineExclusionPattern.CodeIdentifier
    }
    
    property get lineExclusionPattern () : gw.api.productmodel.ExclusionPattern {
      return getIteratedValue(2) as gw.api.productmodel.ExclusionPattern
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPConditionsAndExclusionsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DetailViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 46, column 67
    function def_onEnter_11 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(dwellingConditionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 46, column 67
    function def_onEnter_13 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(dwellingConditionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 46, column 67
    function def_onEnter_15 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(dwellingConditionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 46, column 67
    function def_onEnter_17 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(dwellingConditionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 46, column 67
    function def_onEnter_19 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(dwellingConditionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 46, column 67
    function def_onEnter_21 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(dwellingConditionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 46, column 67
    function def_onEnter_23 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(dwellingConditionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 46, column 67
    function def_onEnter_25 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(dwellingConditionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 46, column 67
    function def_onEnter_27 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(dwellingConditionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 46, column 67
    function def_onEnter_29 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(dwellingConditionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 46, column 67
    function def_onEnter_3 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(dwellingConditionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 46, column 67
    function def_onEnter_31 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(dwellingConditionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 46, column 67
    function def_onEnter_5 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(dwellingConditionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 46, column 67
    function def_onEnter_7 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(dwellingConditionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 46, column 67
    function def_onEnter_9 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(dwellingConditionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 46, column 67
    function def_refreshVariables_10 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(dwellingConditionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 46, column 67
    function def_refreshVariables_12 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(dwellingConditionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 46, column 67
    function def_refreshVariables_14 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(dwellingConditionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 46, column 67
    function def_refreshVariables_16 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(dwellingConditionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 46, column 67
    function def_refreshVariables_18 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(dwellingConditionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 46, column 67
    function def_refreshVariables_20 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(dwellingConditionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 46, column 67
    function def_refreshVariables_22 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(dwellingConditionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 46, column 67
    function def_refreshVariables_24 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(dwellingConditionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 46, column 67
    function def_refreshVariables_26 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(dwellingConditionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 46, column 67
    function def_refreshVariables_28 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(dwellingConditionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 46, column 67
    function def_refreshVariables_30 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(dwellingConditionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 46, column 67
    function def_refreshVariables_32 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(dwellingConditionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 46, column 67
    function def_refreshVariables_4 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(dwellingConditionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 46, column 67
    function def_refreshVariables_6 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(dwellingConditionPattern, dwelling, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 46, column 67
    function def_refreshVariables_8 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(dwellingConditionPattern, dwelling, openForEdit, null)
    }
    
    // 'mode' attribute on InputSetRef at HOPConditionsAndExclusionsPanelSet.pcf: line 46, column 67
    function mode_33 () : java.lang.Object {
      return dwellingConditionPattern.CodeIdentifier
    }
    
    property get dwellingConditionPattern () : gw.api.productmodel.ConditionPattern {
      return getIteratedValue(2) as gw.api.productmodel.ConditionPattern
    }
    
    
  }
  
  
}