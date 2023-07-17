package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/parts/contractorsequip/ContractorsEquipmentPartPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContractorsEquipmentPartPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/parts/contractorsequip/ContractorsEquipmentPartPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContractorsEquipmentPartPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at ContractorsEquipmentPartPanelSet.pcf: line 163, column 101
    function def_onEnter_123 (def :  pcf.ScheduledEquipmentPanelSet) : void {
      def.onEnter(contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at ContractorsEquipmentPartPanelSet.pcf: line 169, column 74
    function def_onEnter_125 (def :  pcf.QuestionSetsDV) : void {
      def.onEnter(questionSets, policyPeriod.IMLine, null)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at ContractorsEquipmentPartPanelSet.pcf: line 35, column 50
    function def_onEnter_4 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.onEnter(contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at ContractorsEquipmentPartPanelSet.pcf: line 163, column 101
    function def_refreshVariables_124 (def :  pcf.ScheduledEquipmentPanelSet) : void {
      def.refreshVariables(contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at ContractorsEquipmentPartPanelSet.pcf: line 169, column 74
    function def_refreshVariables_126 (def :  pcf.QuestionSetsDV) : void {
      def.refreshVariables(questionSets, policyPeriod.IMLine, null)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at ContractorsEquipmentPartPanelSet.pcf: line 35, column 50
    function def_refreshVariables_5 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.refreshVariables(contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'value' attribute on TypeKeyInput (id=coinsurance_Input) at ContractorsEquipmentPartPanelSet.pcf: line 63, column 58
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      contractorsEquipmentPart.Coinsurance = (__VALUE_TO_SET as typekey.Coinsurance)
    }
    
    // 'value' attribute on TextInput (id=perOccurrenceLimit_Input) at ContractorsEquipmentPartPanelSet.pcf: line 69, column 56
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      contractorsEquipmentPart.PerOccurrenceLimit = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on BooleanRadioInput (id=reporting_Input) at ContractorsEquipmentPartPanelSet.pcf: line 74, column 69
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      contractorsEquipmentPart.Reporting = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=contrEqContractorType_Input) at ContractorsEquipmentPartPanelSet.pcf: line 56, column 61
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      contractorsEquipmentPart.ContractorType = (__VALUE_TO_SET as typekey.ContractorType)
    }
    
    // 'editable' attribute on PanelSet (id=ContractorsEquipmentPartPanelSet) at ContractorsEquipmentPartPanelSet.pcf: line 7, column 43
    function editable_127 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'initialValue' attribute on Variable at ContractorsEquipmentPartPanelSet.pcf: line 20, column 52
    function initialValue_0 () : gw.api.productmodel.CoverageCategory {
      return contractorsEquipmentPart.InlandMarineLine.Pattern.getCoverageCategoryByPublicId("ContractorsEquipPartCategory")
    }
    
    // 'initialValue' attribute on Variable at ContractorsEquipmentPartPanelSet.pcf: line 24, column 52
    function initialValue_1 () : gw.api.productmodel.CoverageCategory {
      return contractorsEquipmentPart.InlandMarineLine.Pattern.getCoverageCategoryByPublicId("ContractorsEquipPolicywideUnscheduled")
    }
    
    // 'initialValue' attribute on Variable at ContractorsEquipmentPartPanelSet.pcf: line 28, column 35
    function initialValue_2 () : entity.PolicyPeriod {
      return contractorsEquipmentPart.InlandMarineLine.Branch
    }
    
    // 'initialValue' attribute on Variable at ContractorsEquipmentPartPanelSet.pcf: line 32, column 49
    function initialValue_3 () : gw.api.productmodel.QuestionSet[] {
      return new gw.api.productmodel.QuestionSet[]{contractorsEquipmentPart.InlandMarineLine.Branch.Policy.Product.getQuestionSetByPublicId( "ContractorsEquipmentQuestion" )}
    }
    
    // 'value' attribute on TypeKeyInput (id=contrEqContractorType_Input) at ContractorsEquipmentPartPanelSet.pcf: line 56, column 61
    function valueRoot_8 () : java.lang.Object {
      return contractorsEquipmentPart
    }
    
    // 'value' attribute on TypeKeyInput (id=coinsurance_Input) at ContractorsEquipmentPartPanelSet.pcf: line 63, column 58
    function value_10 () : typekey.Coinsurance {
      return contractorsEquipmentPart.Coinsurance
    }
    
    // 'value' attribute on TextInput (id=perOccurrenceLimit_Input) at ContractorsEquipmentPartPanelSet.pcf: line 69, column 56
    function value_14 () : java.lang.Integer {
      return contractorsEquipmentPart.PerOccurrenceLimit
    }
    
    // 'value' attribute on BooleanRadioInput (id=reporting_Input) at ContractorsEquipmentPartPanelSet.pcf: line 74, column 69
    function value_18 () : java.lang.Boolean {
      return contractorsEquipmentPart.Reporting
    }
    
    // 'value' attribute on TypeKeyInput (id=contrEqContractorType_Input) at ContractorsEquipmentPartPanelSet.pcf: line 56, column 61
    function value_6 () : typekey.ContractorType {
      return contractorsEquipmentPart.ContractorType
    }
    
    property get contractorsEquipPartCategory () : gw.api.productmodel.CoverageCategory {
      return getVariableValue("contractorsEquipPartCategory", 0) as gw.api.productmodel.CoverageCategory
    }
    
    property set contractorsEquipPartCategory ($arg :  gw.api.productmodel.CoverageCategory) {
      setVariableValue("contractorsEquipPartCategory", 0, $arg)
    }
    
    property get contractorsEquipPolicywideUnscheduled () : gw.api.productmodel.CoverageCategory {
      return getVariableValue("contractorsEquipPolicywideUnscheduled", 0) as gw.api.productmodel.CoverageCategory
    }
    
    property set contractorsEquipPolicywideUnscheduled ($arg :  gw.api.productmodel.CoverageCategory) {
      setVariableValue("contractorsEquipPolicywideUnscheduled", 0, $arg)
    }
    
    property get contractorsEquipmentPart () : ContractorsEquipPart {
      return getRequireValue("contractorsEquipmentPart", 0) as ContractorsEquipPart
    }
    
    property set contractorsEquipmentPart ($arg :  ContractorsEquipPart) {
      setRequireValue("contractorsEquipmentPart", 0, $arg)
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
    
    property get policyPeriod () : entity.PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as entity.PolicyPeriod
    }
    
    property set policyPeriod ($arg :  entity.PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    property get questionSets () : gw.api.productmodel.QuestionSet[] {
      return getVariableValue("questionSets", 0) as gw.api.productmodel.QuestionSet[]
    }
    
    property set questionSets ($arg :  gw.api.productmodel.QuestionSet[]) {
      setVariableValue("questionSets", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/parts/contractorsequip/ContractorsEquipmentPartPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DetailViewPanel2ExpressionsImpl extends ContractorsEquipmentPartPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ContractorsEquipmentPartPanelSet.pcf: line 113, column 65
    function initialValue_55 () : gw.api.productmodel.CoveragePattern[] {
      return contractorsEquipmentPart == null ? null : contractorsEquipPolicywideUnscheduled.coveragePatternsForEntity(ContractorsEquipPart).whereSelectedOrAvailable(contractorsEquipmentPart, openForEdit)
    }
    
    // 'sortBy' attribute on IteratorSort at ContractorsEquipmentPartPanelSet.pcf: line 123, column 38
    function sortBy_56 (coveragePattern :  gw.api.productmodel.CoveragePattern) : java.lang.Object {
      return coveragePattern.Priority
    }
    
    // 'value' attribute on InputIterator (id=policywideUnscheduledCovs) at ContractorsEquipmentPartPanelSet.pcf: line 120, column 71
    function value_88 () : gw.api.productmodel.CoveragePattern[] {
      return unscheduledEquipmentCoveragePatterns
    }
    
    property get unscheduledEquipmentCoveragePatterns () : gw.api.productmodel.CoveragePattern[] {
      return getVariableValue("unscheduledEquipmentCoveragePatterns", 1) as gw.api.productmodel.CoveragePattern[]
    }
    
    property set unscheduledEquipmentCoveragePatterns ($arg :  gw.api.productmodel.CoveragePattern[]) {
      setVariableValue("unscheduledEquipmentCoveragePatterns", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/parts/contractorsequip/ContractorsEquipmentPartPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DetailViewPanel3ExpressionsImpl extends ContractorsEquipmentPartPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ContractorsEquipmentPartPanelSet.pcf: line 142, column 65
    function initialValue_89 () : gw.api.productmodel.CoveragePattern[] {
      return contractorsEquipmentPart == null ? null : contractorsEquipPartCategory.coveragePatternsForEntity(ContractorsEquipPart).whereSelectedOrAvailable(contractorsEquipmentPart, openForEdit)
    }
    
    // 'sortBy' attribute on IteratorSort at ContractorsEquipmentPartPanelSet.pcf: line 152, column 38
    function sortBy_90 (coveragePattern :  gw.api.productmodel.CoveragePattern) : java.lang.Object {
      return coveragePattern.Priority
    }
    
    // 'value' attribute on InputIterator (id=partLevelCovs) at ContractorsEquipmentPartPanelSet.pcf: line 149, column 71
    function value_122 () : gw.api.productmodel.CoveragePattern[] {
      return partLevelCoveragePatterns
    }
    
    property get partLevelCoveragePatterns () : gw.api.productmodel.CoveragePattern[] {
      return getVariableValue("partLevelCoveragePatterns", 1) as gw.api.productmodel.CoveragePattern[]
    }
    
    property set partLevelCoveragePatterns ($arg :  gw.api.productmodel.CoveragePattern[]) {
      setVariableValue("partLevelCoveragePatterns", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/parts/contractorsequip/ContractorsEquipmentPartPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DetailViewPanelExpressionsImpl extends ContractorsEquipmentPartPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ContractorsEquipmentPartPanelSet.pcf: line 86, column 72
    function initialValue_22 () : gw.api.productmodel.ExclusionPattern[] {
      return contractorsEquipmentPart == null ? null : contractorsEquipPartCategory.exclusionPatternsForEntity(ContractorsEquipPart).where(\ e -> contractorsEquipmentPart.isExclusionSelectedOrAvailable(e))
    }
    
    // 'value' attribute on InputIterator (id=partLevelExclusions) at ContractorsEquipmentPartPanelSet.pcf: line 93, column 78
    function value_54 () : gw.api.productmodel.ExclusionPattern[] {
      return partLevelExclusionPatterns
    }
    
    property get partLevelExclusionPatterns () : gw.api.productmodel.ExclusionPattern[] {
      return getVariableValue("partLevelExclusionPatterns", 1) as gw.api.productmodel.ExclusionPattern[]
    }
    
    property set partLevelExclusionPatterns ($arg :  gw.api.productmodel.ExclusionPattern[]) {
      setVariableValue("partLevelExclusionPatterns", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/parts/contractorsequip/ContractorsEquipmentPartPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends DetailViewPanel2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 126, column 56
    function def_onEnter_57 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 126, column 56
    function def_onEnter_59 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 126, column 56
    function def_onEnter_61 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 126, column 56
    function def_onEnter_63 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 126, column 56
    function def_onEnter_65 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 126, column 56
    function def_onEnter_67 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 126, column 56
    function def_onEnter_69 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 126, column 56
    function def_onEnter_71 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 126, column 56
    function def_onEnter_73 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 126, column 56
    function def_onEnter_75 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 126, column 56
    function def_onEnter_77 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 126, column 56
    function def_onEnter_79 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 126, column 56
    function def_onEnter_81 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 126, column 56
    function def_onEnter_83 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 126, column 56
    function def_onEnter_85 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 126, column 56
    function def_refreshVariables_58 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 126, column 56
    function def_refreshVariables_60 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 126, column 56
    function def_refreshVariables_62 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 126, column 56
    function def_refreshVariables_64 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 126, column 56
    function def_refreshVariables_66 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 126, column 56
    function def_refreshVariables_68 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 126, column 56
    function def_refreshVariables_70 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 126, column 56
    function def_refreshVariables_72 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 126, column 56
    function def_refreshVariables_74 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 126, column 56
    function def_refreshVariables_76 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 126, column 56
    function def_refreshVariables_78 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 126, column 56
    function def_refreshVariables_80 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 126, column 56
    function def_refreshVariables_82 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 126, column 56
    function def_refreshVariables_84 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 126, column 56
    function def_refreshVariables_86 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'mode' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 126, column 56
    function mode_87 () : java.lang.Object {
      return coveragePattern.PublicID
    }
    
    property get coveragePattern () : gw.api.productmodel.CoveragePattern {
      return getIteratedValue(2) as gw.api.productmodel.CoveragePattern
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/parts/contractorsequip/ContractorsEquipmentPartPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends DetailViewPanel3ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 155, column 56
    function def_onEnter_101 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 155, column 56
    function def_onEnter_103 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 155, column 56
    function def_onEnter_105 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 155, column 56
    function def_onEnter_107 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 155, column 56
    function def_onEnter_109 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 155, column 56
    function def_onEnter_111 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 155, column 56
    function def_onEnter_113 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 155, column 56
    function def_onEnter_115 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 155, column 56
    function def_onEnter_117 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 155, column 56
    function def_onEnter_119 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 155, column 56
    function def_onEnter_91 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 155, column 56
    function def_onEnter_93 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 155, column 56
    function def_onEnter_95 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 155, column 56
    function def_onEnter_97 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 155, column 56
    function def_onEnter_99 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 155, column 56
    function def_refreshVariables_100 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 155, column 56
    function def_refreshVariables_102 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 155, column 56
    function def_refreshVariables_104 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 155, column 56
    function def_refreshVariables_106 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 155, column 56
    function def_refreshVariables_108 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 155, column 56
    function def_refreshVariables_110 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 155, column 56
    function def_refreshVariables_112 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 155, column 56
    function def_refreshVariables_114 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 155, column 56
    function def_refreshVariables_116 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 155, column 56
    function def_refreshVariables_118 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 155, column 56
    function def_refreshVariables_120 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 155, column 56
    function def_refreshVariables_92 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 155, column 56
    function def_refreshVariables_94 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 155, column 56
    function def_refreshVariables_96 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 155, column 56
    function def_refreshVariables_98 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(coveragePattern, contractorsEquipmentPart, openForEdit, jobWizardHelper)
    }
    
    // 'mode' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 155, column 56
    function mode_121 () : java.lang.Object {
      return coveragePattern.PublicID
    }
    
    property get coveragePattern () : gw.api.productmodel.CoveragePattern {
      return getIteratedValue(2) as gw.api.productmodel.CoveragePattern
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/parts/contractorsequip/ContractorsEquipmentPartPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DetailViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 96, column 54
    function def_onEnter_23 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter( exclusionPattern, contractorsEquipmentPart, openForEdit, jobWizardHelper )
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 96, column 54
    function def_onEnter_25 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter( exclusionPattern, contractorsEquipmentPart, openForEdit, jobWizardHelper )
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 96, column 54
    function def_onEnter_27 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter( exclusionPattern, contractorsEquipmentPart, openForEdit, jobWizardHelper )
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 96, column 54
    function def_onEnter_29 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter( exclusionPattern, contractorsEquipmentPart, openForEdit, jobWizardHelper )
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 96, column 54
    function def_onEnter_31 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter( exclusionPattern, contractorsEquipmentPart, openForEdit, jobWizardHelper )
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 96, column 54
    function def_onEnter_33 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter( exclusionPattern, contractorsEquipmentPart, openForEdit, jobWizardHelper )
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 96, column 54
    function def_onEnter_35 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter( exclusionPattern, contractorsEquipmentPart, openForEdit, jobWizardHelper )
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 96, column 54
    function def_onEnter_37 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter( exclusionPattern, contractorsEquipmentPart, openForEdit, jobWizardHelper )
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 96, column 54
    function def_onEnter_39 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter( exclusionPattern, contractorsEquipmentPart, openForEdit, jobWizardHelper )
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 96, column 54
    function def_onEnter_41 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter( exclusionPattern, contractorsEquipmentPart, openForEdit, jobWizardHelper )
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 96, column 54
    function def_onEnter_43 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter( exclusionPattern, contractorsEquipmentPart, openForEdit, jobWizardHelper )
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 96, column 54
    function def_onEnter_45 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter( exclusionPattern, contractorsEquipmentPart, openForEdit, jobWizardHelper )
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 96, column 54
    function def_onEnter_47 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter( exclusionPattern, contractorsEquipmentPart, openForEdit, jobWizardHelper )
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 96, column 54
    function def_onEnter_49 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter( exclusionPattern, contractorsEquipmentPart, openForEdit, jobWizardHelper )
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 96, column 54
    function def_onEnter_51 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter( exclusionPattern, contractorsEquipmentPart, openForEdit, jobWizardHelper )
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 96, column 54
    function def_refreshVariables_24 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables( exclusionPattern, contractorsEquipmentPart, openForEdit, jobWizardHelper )
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 96, column 54
    function def_refreshVariables_26 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables( exclusionPattern, contractorsEquipmentPart, openForEdit, jobWizardHelper )
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 96, column 54
    function def_refreshVariables_28 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables( exclusionPattern, contractorsEquipmentPart, openForEdit, jobWizardHelper )
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 96, column 54
    function def_refreshVariables_30 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables( exclusionPattern, contractorsEquipmentPart, openForEdit, jobWizardHelper )
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 96, column 54
    function def_refreshVariables_32 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables( exclusionPattern, contractorsEquipmentPart, openForEdit, jobWizardHelper )
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 96, column 54
    function def_refreshVariables_34 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables( exclusionPattern, contractorsEquipmentPart, openForEdit, jobWizardHelper )
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 96, column 54
    function def_refreshVariables_36 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables( exclusionPattern, contractorsEquipmentPart, openForEdit, jobWizardHelper )
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 96, column 54
    function def_refreshVariables_38 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables( exclusionPattern, contractorsEquipmentPart, openForEdit, jobWizardHelper )
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 96, column 54
    function def_refreshVariables_40 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables( exclusionPattern, contractorsEquipmentPart, openForEdit, jobWizardHelper )
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 96, column 54
    function def_refreshVariables_42 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables( exclusionPattern, contractorsEquipmentPart, openForEdit, jobWizardHelper )
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 96, column 54
    function def_refreshVariables_44 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables( exclusionPattern, contractorsEquipmentPart, openForEdit, jobWizardHelper )
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 96, column 54
    function def_refreshVariables_46 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables( exclusionPattern, contractorsEquipmentPart, openForEdit, jobWizardHelper )
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 96, column 54
    function def_refreshVariables_48 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables( exclusionPattern, contractorsEquipmentPart, openForEdit, jobWizardHelper )
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 96, column 54
    function def_refreshVariables_50 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables( exclusionPattern, contractorsEquipmentPart, openForEdit, jobWizardHelper )
    }
    
    // 'def' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 96, column 54
    function def_refreshVariables_52 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables( exclusionPattern, contractorsEquipmentPart, openForEdit, jobWizardHelper )
    }
    
    // 'mode' attribute on InputSetRef at ContractorsEquipmentPartPanelSet.pcf: line 96, column 54
    function mode_53 () : java.lang.Object {
      return exclusionPattern
    }
    
    property get exclusionPattern () : gw.api.productmodel.ExclusionPattern {
      return getIteratedValue(2) as gw.api.productmodel.ExclusionPattern
    }
    
    
  }
  
  
}