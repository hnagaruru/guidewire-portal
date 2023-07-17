package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/parts/contractorsequip/ScheduledEquipmentPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ScheduledEquipmentPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/parts/contractorsequip/ScheduledEquipmentPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DetailViewPanelExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=equipmentID_Input) at ScheduledEquipmentPanelSet.pcf: line 105, column 64
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      theEquipment.ContractorsEquipmentID = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=description_Input) at ScheduledEquipmentPanelSet.pcf: line 111, column 53
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      theEquipment.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=manufacturer_Input) at ScheduledEquipmentPanelSet.pcf: line 116, column 54
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      theEquipment.Manufacturer = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=model_Input) at ScheduledEquipmentPanelSet.pcf: line 121, column 47
    function defaultSetter_45 (__VALUE_TO_SET :  java.lang.Object) : void {
      theEquipment.Model = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=modelYear_Input) at ScheduledEquipmentPanelSet.pcf: line 127, column 50
    function defaultSetter_49 (__VALUE_TO_SET :  java.lang.Object) : void {
      theEquipment.ModelYear = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=yearBought_Input) at ScheduledEquipmentPanelSet.pcf: line 133, column 50
    function defaultSetter_53 (__VALUE_TO_SET :  java.lang.Object) : void {
      theEquipment.YearBought = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'initialValue' attribute on Variable at ScheduledEquipmentPanelSet.pcf: line 89, column 62
    function initialValue_27 () : gw.api.productmodel.CoverageCategory {
      return contractorsEquipmentPart.InlandMarineLine.Pattern.getCoverageCategoryByPublicId( "ContractorsEquipCategory" )
    }
    
    // 'initialValue' attribute on Variable at ScheduledEquipmentPanelSet.pcf: line 94, column 63
    function initialValue_28 () : gw.api.productmodel.CoveragePattern[] {
      return theEquipment == null ? null : contractorsEquipCategory.coveragePatternsForEntity(ContractorsEquipment).whereSelectedOrAvailable(theEquipment, CurrentLocation.InEditMode)
    }
    
    // 'value' attribute on TextInput (id=equipmentNumber_Input) at ScheduledEquipmentPanelSet.pcf: line 100, column 50
    function valueRoot_30 () : java.lang.Object {
      return theEquipment
    }
    
    // 'value' attribute on TextInput (id=equipmentNumber_Input) at ScheduledEquipmentPanelSet.pcf: line 100, column 50
    function value_29 () : java.lang.Integer {
      return theEquipment.ContractorsEquipmentNumber
    }
    
    // 'value' attribute on TextInput (id=equipmentID_Input) at ScheduledEquipmentPanelSet.pcf: line 105, column 64
    function value_32 () : java.lang.String {
      return theEquipment.ContractorsEquipmentID
    }
    
    // 'value' attribute on TextInput (id=description_Input) at ScheduledEquipmentPanelSet.pcf: line 111, column 53
    function value_36 () : java.lang.String {
      return theEquipment.Description
    }
    
    // 'value' attribute on TextInput (id=manufacturer_Input) at ScheduledEquipmentPanelSet.pcf: line 116, column 54
    function value_40 () : java.lang.String {
      return theEquipment.Manufacturer
    }
    
    // 'value' attribute on TextInput (id=model_Input) at ScheduledEquipmentPanelSet.pcf: line 121, column 47
    function value_44 () : java.lang.String {
      return theEquipment.Model
    }
    
    // 'value' attribute on TextInput (id=modelYear_Input) at ScheduledEquipmentPanelSet.pcf: line 127, column 50
    function value_48 () : java.lang.Integer {
      return theEquipment.ModelYear
    }
    
    // 'value' attribute on TextInput (id=yearBought_Input) at ScheduledEquipmentPanelSet.pcf: line 133, column 50
    function value_52 () : java.lang.Integer {
      return theEquipment.YearBought
    }
    
    // 'value' attribute on InputIterator (id=coveragePattern) at ScheduledEquipmentPanelSet.pcf: line 141, column 69
    function value_87 () : gw.api.productmodel.CoveragePattern[] {
      return contractorsEquipCategoryCoveragePatterns
    }
    
    property get contractorsEquipCategory () : gw.api.productmodel.CoverageCategory {
      return getVariableValue("contractorsEquipCategory", 2) as gw.api.productmodel.CoverageCategory
    }
    
    property set contractorsEquipCategory ($arg :  gw.api.productmodel.CoverageCategory) {
      setVariableValue("contractorsEquipCategory", 2, $arg)
    }
    
    property get contractorsEquipCategoryCoveragePatterns () : gw.api.productmodel.CoveragePattern[] {
      return getVariableValue("contractorsEquipCategoryCoveragePatterns", 2) as gw.api.productmodel.CoveragePattern[]
    }
    
    property set contractorsEquipCategoryCoveragePatterns ($arg :  gw.api.productmodel.CoveragePattern[]) {
      setVariableValue("contractorsEquipCategoryCoveragePatterns", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/parts/contractorsequip/ScheduledEquipmentPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends DetailViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at ScheduledEquipmentPanelSet.pcf: line 144, column 54
    function def_onEnter_56 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(coveragePattern, theEquipment, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ScheduledEquipmentPanelSet.pcf: line 144, column 54
    function def_onEnter_58 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(coveragePattern, theEquipment, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ScheduledEquipmentPanelSet.pcf: line 144, column 54
    function def_onEnter_60 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(coveragePattern, theEquipment, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ScheduledEquipmentPanelSet.pcf: line 144, column 54
    function def_onEnter_62 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(coveragePattern, theEquipment, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ScheduledEquipmentPanelSet.pcf: line 144, column 54
    function def_onEnter_64 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(coveragePattern, theEquipment, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ScheduledEquipmentPanelSet.pcf: line 144, column 54
    function def_onEnter_66 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(coveragePattern, theEquipment, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ScheduledEquipmentPanelSet.pcf: line 144, column 54
    function def_onEnter_68 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(coveragePattern, theEquipment, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ScheduledEquipmentPanelSet.pcf: line 144, column 54
    function def_onEnter_70 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(coveragePattern, theEquipment, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ScheduledEquipmentPanelSet.pcf: line 144, column 54
    function def_onEnter_72 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(coveragePattern, theEquipment, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ScheduledEquipmentPanelSet.pcf: line 144, column 54
    function def_onEnter_74 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(coveragePattern, theEquipment, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ScheduledEquipmentPanelSet.pcf: line 144, column 54
    function def_onEnter_76 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(coveragePattern, theEquipment, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ScheduledEquipmentPanelSet.pcf: line 144, column 54
    function def_onEnter_78 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(coveragePattern, theEquipment, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ScheduledEquipmentPanelSet.pcf: line 144, column 54
    function def_onEnter_80 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(coveragePattern, theEquipment, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ScheduledEquipmentPanelSet.pcf: line 144, column 54
    function def_onEnter_82 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(coveragePattern, theEquipment, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ScheduledEquipmentPanelSet.pcf: line 144, column 54
    function def_onEnter_84 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(coveragePattern, theEquipment, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ScheduledEquipmentPanelSet.pcf: line 144, column 54
    function def_refreshVariables_57 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(coveragePattern, theEquipment, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ScheduledEquipmentPanelSet.pcf: line 144, column 54
    function def_refreshVariables_59 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(coveragePattern, theEquipment, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ScheduledEquipmentPanelSet.pcf: line 144, column 54
    function def_refreshVariables_61 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(coveragePattern, theEquipment, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ScheduledEquipmentPanelSet.pcf: line 144, column 54
    function def_refreshVariables_63 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(coveragePattern, theEquipment, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ScheduledEquipmentPanelSet.pcf: line 144, column 54
    function def_refreshVariables_65 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(coveragePattern, theEquipment, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ScheduledEquipmentPanelSet.pcf: line 144, column 54
    function def_refreshVariables_67 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(coveragePattern, theEquipment, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ScheduledEquipmentPanelSet.pcf: line 144, column 54
    function def_refreshVariables_69 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(coveragePattern, theEquipment, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ScheduledEquipmentPanelSet.pcf: line 144, column 54
    function def_refreshVariables_71 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(coveragePattern, theEquipment, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ScheduledEquipmentPanelSet.pcf: line 144, column 54
    function def_refreshVariables_73 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(coveragePattern, theEquipment, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ScheduledEquipmentPanelSet.pcf: line 144, column 54
    function def_refreshVariables_75 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(coveragePattern, theEquipment, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ScheduledEquipmentPanelSet.pcf: line 144, column 54
    function def_refreshVariables_77 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(coveragePattern, theEquipment, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ScheduledEquipmentPanelSet.pcf: line 144, column 54
    function def_refreshVariables_79 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(coveragePattern, theEquipment, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ScheduledEquipmentPanelSet.pcf: line 144, column 54
    function def_refreshVariables_81 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(coveragePattern, theEquipment, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ScheduledEquipmentPanelSet.pcf: line 144, column 54
    function def_refreshVariables_83 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(coveragePattern, theEquipment, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ScheduledEquipmentPanelSet.pcf: line 144, column 54
    function def_refreshVariables_85 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(coveragePattern, theEquipment, true, jobWizardHelper)
    }
    
    // 'mode' attribute on InputSetRef at ScheduledEquipmentPanelSet.pcf: line 144, column 54
    function mode_86 () : java.lang.Object {
      return coveragePattern.PublicID
    }
    
    property get coveragePattern () : gw.api.productmodel.CoveragePattern {
      return getIteratedValue(3) as gw.api.productmodel.CoveragePattern
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/parts/contractorsequip/ScheduledEquipmentPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=limit_Cell) at ScheduledEquipmentPanelSet.pcf: line 66, column 33
    function valueRoot_16 () : java.lang.Object {
      return equipment.ContractorsEquipSchedCov.ContractorsEquipSchedCovLimitTerm
    }
    
    // 'value' attribute on TextCell (id=number_Cell) at ScheduledEquipmentPanelSet.pcf: line 49, column 33
    function valueRoot_7 () : java.lang.Object {
      return equipment
    }
    
    // 'value' attribute on TextCell (id=description_Cell) at ScheduledEquipmentPanelSet.pcf: line 59, column 50
    function value_12 () : java.lang.String {
      return equipment.Description
    }
    
    // 'value' attribute on TextCell (id=limit_Cell) at ScheduledEquipmentPanelSet.pcf: line 66, column 33
    function value_15 () : java.math.BigDecimal {
      return equipment.ContractorsEquipSchedCov.ContractorsEquipSchedCovLimitTerm.Value
    }
    
    // 'value' attribute on TextCell (id=imContractorsEquipmentCoverageCurrency_Cell) at ScheduledEquipmentPanelSet.pcf: line 73, column 33
    function value_18 () : typekey.Currency {
      return equipment.PreferredCoverageCurrency
    }
    
    // 'value' attribute on TextCell (id=number_Cell) at ScheduledEquipmentPanelSet.pcf: line 49, column 33
    function value_6 () : java.lang.Integer {
      return equipment.ContractorsEquipmentNumber
    }
    
    // 'value' attribute on TextCell (id=equipmentID_Cell) at ScheduledEquipmentPanelSet.pcf: line 54, column 33
    function value_9 () : java.lang.String {
      return equipment.ContractorsEquipmentID
    }
    
    // 'visible' attribute on TextCell (id=imContractorsEquipmentCoverageCurrency_Cell) at ScheduledEquipmentPanelSet.pcf: line 73, column 33
    function visible_20 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get equipment () : entity.ContractorsEquipment {
      return getIteratedValue(2) as entity.ContractorsEquipment
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/parts/contractorsequip/ScheduledEquipmentPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends ScheduledEquipmentPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at ScheduledEquipmentPanelSet.pcf: line 80, column 54
    function def_onEnter_25 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.onEnter(theEquipment, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at ScheduledEquipmentPanelSet.pcf: line 150, column 47
    function def_onEnter_89 (def :  pcf.AdditionalInterestDetailsDV) : void {
      def.onEnter(theEquipment, openForEdit)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at ScheduledEquipmentPanelSet.pcf: line 80, column 54
    function def_refreshVariables_26 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.refreshVariables(theEquipment, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at ScheduledEquipmentPanelSet.pcf: line 150, column 47
    function def_refreshVariables_90 (def :  pcf.AdditionalInterestDetailsDV) : void {
      def.refreshVariables(theEquipment, openForEdit)
    }
    
    // 'value' attribute on TextCell (id=number_Cell) at ScheduledEquipmentPanelSet.pcf: line 49, column 33
    function sortValue_0 (equipment :  entity.ContractorsEquipment) : java.lang.Object {
      return equipment.ContractorsEquipmentNumber
    }
    
    // 'value' attribute on TextCell (id=equipmentID_Cell) at ScheduledEquipmentPanelSet.pcf: line 54, column 33
    function sortValue_1 (equipment :  entity.ContractorsEquipment) : java.lang.Object {
      return equipment.ContractorsEquipmentID
    }
    
    // 'value' attribute on TextCell (id=description_Cell) at ScheduledEquipmentPanelSet.pcf: line 59, column 50
    function sortValue_2 (equipment :  entity.ContractorsEquipment) : java.lang.Object {
      return equipment.Description
    }
    
    // 'value' attribute on TextCell (id=limit_Cell) at ScheduledEquipmentPanelSet.pcf: line 66, column 33
    function sortValue_3 (equipment :  entity.ContractorsEquipment) : java.lang.Object {
      return equipment.ContractorsEquipSchedCov.ContractorsEquipSchedCovLimitTerm.Value
    }
    
    // 'value' attribute on TextCell (id=imContractorsEquipmentCoverageCurrency_Cell) at ScheduledEquipmentPanelSet.pcf: line 73, column 33
    function sortValue_4 (equipment :  entity.ContractorsEquipment) : java.lang.Object {
      return equipment.PreferredCoverageCurrency
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=equipment) at ScheduledEquipmentPanelSet.pcf: line 40, column 57
    function toCreateAndAdd_22 () : entity.ContractorsEquipment {
      return contractorsEquipmentPart.createAndAddIMContrEqAndCoverage()
    }
    
    // 'toRemove' attribute on RowIterator (id=equipment) at ScheduledEquipmentPanelSet.pcf: line 40, column 57
    function toRemove_23 (equipment :  entity.ContractorsEquipment) : void {
      contractorsEquipmentPart.removeIMContrEqAndCoverage( equipment )
    }
    
    // 'value' attribute on RowIterator (id=equipment) at ScheduledEquipmentPanelSet.pcf: line 40, column 57
    function value_24 () : entity.ContractorsEquipment[] {
      return contractorsEquipmentPart.ContractorsEquipments
    }
    
    // 'visible' attribute on TextCell (id=imContractorsEquipmentCoverageCurrency_Cell) at ScheduledEquipmentPanelSet.pcf: line 73, column 33
    function visible_5 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    // 'visible' attribute on PanelRef at ScheduledEquipmentPanelSet.pcf: line 150, column 47
    function visible_88 () : java.lang.Boolean {
      return theEquipment != null
    }
    
    property get theEquipment () : ContractorsEquipment {
      return getCurrentSelection(1) as ContractorsEquipment
    }
    
    property set theEquipment ($arg :  ContractorsEquipment) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/parts/contractorsequip/ScheduledEquipmentPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScheduledEquipmentPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
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
    
    
  }
  
  
}