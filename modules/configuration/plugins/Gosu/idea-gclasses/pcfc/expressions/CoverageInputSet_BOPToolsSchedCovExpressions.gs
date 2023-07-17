package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/bop/policy/CoverageInputSet.BOPToolsSchedCov.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CoverageInputSet_BOPToolsSchedCovExpressions {
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/CoverageInputSet.BOPToolsSchedCov.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CoverageInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allowToggle' attribute on InputGroup (id=BOPSchedEquipInputGroup) at CoverageInputSet.BOPToolsSchedCov.pcf: line 40, column 100
    function available_40 () : java.lang.Boolean {
      return coveragePattern.allowToggle(coverable)
    }
    
    // 'initialValue' attribute on Variable at CoverageInputSet.BOPToolsSchedCov.pcf: line 25, column 49
    function initialValue_0 () : gw.api.productmodel.ClausePattern {
      return coveragePattern
    }
    
    // 'initialValue' attribute on Variable at CoverageInputSet.BOPToolsSchedCov.pcf: line 29, column 36
    function initialValue_1 () : productmodel.BOPLine {
      return coverable.PolicyLine as BOPLine
    }
    
    // 'inputConversion' attribute on TextInput (id=SchedEquipLimit_Input) at CoverageInputSet.BOPToolsSchedCov.pcf: line 109, column 86
    function inputConversion_31 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.pcf.coverage.CovTermDirectInputSetHelper.convertFromString(VALUE)
    }
    
    // 'label' attribute on TextInput (id=SchedEquipLimit_Input) at CoverageInputSet.BOPToolsSchedCov.pcf: line 109, column 86
    function label_30 () : java.lang.Object {
      return bopLine.BOPToolsSchedCov.BOPToolsSchedLimTerm.DisplayName
    }
    
    // 'label' attribute on InputGroup (id=BOPSchedEquipInputGroup) at CoverageInputSet.BOPToolsSchedCov.pcf: line 40, column 100
    function label_41 () : java.lang.Object {
      return scheduledEquipmentPattern.DisplayName
    }
    
    // 'outputConversion' attribute on TextInput (id=SchedEquipLimit_Input) at CoverageInputSet.BOPToolsSchedCov.pcf: line 109, column 86
    function outputConversion_32 (VALUE :  java.math.BigDecimal) : java.lang.String {
      return gw.pcf.coverage.CovTermDirectInputSetHelper.convertToString(VALUE)
    }
    
    // 'onToggle' attribute on InputGroup (id=BOPSchedEquipInputGroup) at CoverageInputSet.BOPToolsSchedCov.pcf: line 40, column 100
    function setter_42 (VALUE :  java.lang.Boolean) : void {
      bopLine.setCoverageConditionOrExclusionExists( scheduledEquipmentPattern, VALUE )
    }
    
    // 'value' attribute on TextCell (id=WquipmentNumber_Cell) at CoverageInputSet.BOPToolsSchedCov.pcf: line 68, column 48
    function sortValue_5 (scheduledItem :  entity.BOPScheduledEquipment) : java.lang.Object {
      return scheduledItem.EquipmentNumber
    }
    
    // 'value' attribute on TextCell (id=SerialNumber_Cell) at CoverageInputSet.BOPToolsSchedCov.pcf: line 74, column 53
    function sortValue_6 (scheduledItem :  entity.BOPScheduledEquipment) : java.lang.Object {
      return scheduledItem.SerialNumber
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at CoverageInputSet.BOPToolsSchedCov.pcf: line 81, column 52
    function sortValue_7 (scheduledItem :  entity.BOPScheduledEquipment) : java.lang.Object {
      return scheduledItem.Description
    }
    
    // 'value' attribute on TextCell (id=EquipmentValue_Cell) at CoverageInputSet.BOPToolsSchedCov.pcf: line 89, column 47
    function sortValue_8 (scheduledItem :  entity.BOPScheduledEquipment) : java.lang.Object {
      return scheduledItem.EquipmentValue
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at CoverageInputSet.BOPToolsSchedCov.pcf: line 61, column 56
    function toCreateAndAdd_25 () : entity.BOPScheduledEquipment {
      return bopLine.createAndAddScheduledEquip()
    }
    
    // 'toRemove' attribute on RowIterator at CoverageInputSet.BOPToolsSchedCov.pcf: line 61, column 56
    function toRemove_26 (scheduledItem :  entity.BOPScheduledEquipment) : void {
      bopLine.removeScheduledEquip(scheduledItem); bopLine.maybeUnselectCoverage()
    }
    
    // 'validationExpression' attribute on TextInput (id=SchedEquipLimit_Input) at CoverageInputSet.BOPToolsSchedCov.pcf: line 109, column 86
    function validationExpression_28 () : java.lang.Object {
      return gw.pcf.coverage.CovTermDirectInputSetHelper.validate(bopLine.BOPToolsSchedCov.BOPToolsSchedLimTerm)
    }
    
    // 'value' attribute on HiddenInput (id=CovPatternDisplayName_Input) at CoverageInputSet.BOPToolsSchedCov.pcf: line 33, column 37
    function valueRoot_3 () : java.lang.Object {
      return coveragePattern
    }
    
    // 'value' attribute on TextInput (id=SchedEquipLimit_Input) at CoverageInputSet.BOPToolsSchedCov.pcf: line 109, column 86
    function valueRoot_34 () : java.lang.Object {
      return bopLine.BOPToolsSchedCov.BOPToolsSchedLimTerm
    }
    
    // 'value' attribute on HiddenInput (id=CovPatternDisplayName_Input) at CoverageInputSet.BOPToolsSchedCov.pcf: line 33, column 37
    function value_2 () : java.lang.String {
      return coveragePattern.DisplayName
    }
    
    // 'value' attribute on RowIterator at CoverageInputSet.BOPToolsSchedCov.pcf: line 61, column 56
    function value_27 () : entity.BOPScheduledEquipment[] {
      return bopLine.BOPScheduledEquipments
    }
    
    // 'value' attribute on TextInput (id=SchedEquipLimit_Input) at CoverageInputSet.BOPToolsSchedCov.pcf: line 109, column 86
    function value_33 () : java.math.BigDecimal {
      return bopLine.BOPToolsSchedCov.BOPToolsSchedLimTerm.Value
    }
    
    // 'visible' attribute on TextInput (id=SchedEquipLimit_Input) at CoverageInputSet.BOPToolsSchedCov.pcf: line 109, column 86
    function visible_29 () : java.lang.Boolean {
      return bopLine.BOPToolsSchedCov.hasCovTerm("BOPToolsSchedLim")
    }
    
    // 'childrenVisible' attribute on InputGroup (id=BOPSchedEquipInputGroup) at CoverageInputSet.BOPToolsSchedCov.pcf: line 40, column 100
    function visible_39 () : java.lang.Boolean {
      return coverable.getCoverageConditionOrExclusion(coveragePattern) != null
    }
    
    // 'visible' attribute on InputDivider at CoverageInputSet.BOPToolsSchedCov.pcf: line 112, column 100
    function visible_45 () : java.lang.Boolean {
      return openForEdit or coverable.getCoverageConditionOrExclusion(coveragePattern) != null
    }
    
    property get bopLine () : productmodel.BOPLine {
      return getVariableValue("bopLine", 0) as productmodel.BOPLine
    }
    
    property set bopLine ($arg :  productmodel.BOPLine) {
      setVariableValue("bopLine", 0, $arg)
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
    
    property get scheduledEquipmentPattern () : gw.api.productmodel.ClausePattern {
      return getVariableValue("scheduledEquipmentPattern", 0) as gw.api.productmodel.ClausePattern
    }
    
    property set scheduledEquipmentPattern ($arg :  gw.api.productmodel.ClausePattern) {
      setVariableValue("scheduledEquipmentPattern", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/CoverageInputSet.BOPToolsSchedCov.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CoverageInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=SerialNumber_Cell) at CoverageInputSet.BOPToolsSchedCov.pcf: line 74, column 53
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      scheduledItem.SerialNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at CoverageInputSet.BOPToolsSchedCov.pcf: line 81, column 52
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      scheduledItem.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=EquipmentValue_Cell) at CoverageInputSet.BOPToolsSchedCov.pcf: line 89, column 47
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      scheduledItem.EquipmentValue = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'onChange' attribute on PostOnChange at CoverageInputSet.BOPToolsSchedCov.pcf: line 92, column 58
    function onChange_20 () : void {
      bopLine.sumBOPToolsValue()
    }
    
    // 'value' attribute on TextCell (id=WquipmentNumber_Cell) at CoverageInputSet.BOPToolsSchedCov.pcf: line 68, column 48
    function valueRoot_10 () : java.lang.Object {
      return scheduledItem
    }
    
    // 'value' attribute on TextCell (id=SerialNumber_Cell) at CoverageInputSet.BOPToolsSchedCov.pcf: line 74, column 53
    function value_12 () : java.lang.String {
      return scheduledItem.SerialNumber
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at CoverageInputSet.BOPToolsSchedCov.pcf: line 81, column 52
    function value_16 () : java.lang.String {
      return scheduledItem.Description
    }
    
    // 'value' attribute on TextCell (id=EquipmentValue_Cell) at CoverageInputSet.BOPToolsSchedCov.pcf: line 89, column 47
    function value_21 () : java.lang.Integer {
      return scheduledItem.EquipmentValue
    }
    
    // 'value' attribute on TextCell (id=WquipmentNumber_Cell) at CoverageInputSet.BOPToolsSchedCov.pcf: line 68, column 48
    function value_9 () : java.lang.Integer {
      return scheduledItem.EquipmentNumber
    }
    
    property get scheduledItem () : entity.BOPScheduledEquipment {
      return getIteratedValue(1) as entity.BOPScheduledEquipment
    }
    
    
  }
  
  
}