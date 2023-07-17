package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyInfoProducerOfRecordInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyInfoProducerOfRecordInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyInfoProducerOfRecordInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyInfoProducerOfRecordInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on OrgInput (id=Producer_Input) at PolicyInfoProducerOfRecordInputSet.pcf: line 32, column 24
    function action_2 () : void {
      OrganizationSearchPopup.push(null, true)
    }
    
    // 'pickLocation' attribute on OrgInput (id=Producer_Input) at PolicyInfoProducerOfRecordInputSet.pcf: line 32, column 24
    function action_dest_3 () : pcf.api.Destination {
      return pcf.OrganizationSearchPopup.createDestination(null, true)
    }
    
    // 'value' attribute on RangeInput (id=ProducerCode_Input) at PolicyInfoProducerOfRecordInputSet.pcf: line 46, column 39
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriod.EffectiveDatedFields.ProducerCode = (__VALUE_TO_SET as entity.ProducerCode)
    }
    
    // 'value' attribute on OrgInput (id=Producer_Input) at PolicyInfoProducerOfRecordInputSet.pcf: line 32, column 24
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      producer = (__VALUE_TO_SET as entity.Organization)
    }
    
    // 'editable' attribute on OrgInput (id=Producer_Input) at PolicyInfoProducerOfRecordInputSet.pcf: line 32, column 24
    function editable_4 () : java.lang.Boolean {
      return gw.api.web.producer.ProducerUtil.canEditOrganization()
    }
    
    // 'initialValue' attribute on Variable at PolicyInfoProducerOfRecordInputSet.pcf: line 21, column 28
    function initialValue_0 () : Organization {
      return assignProducer()
    }
    
    // 'onChange' attribute on PostOnChange at PolicyInfoProducerOfRecordInputSet.pcf: line 35, column 99
    function onChange_1 () : void {
      policyPeriod.EffectiveDatedFields.ProducerCode = null; producerChanged = true
    }
    
    // 'onChange' attribute on PostOnChange at PolicyInfoProducerOfRecordInputSet.pcf: line 49, column 105
    function onChange_12 () : void {
      policyPeriod.ProducerCodeOfRecord = policyPeriod.EffectiveDatedFields.ProducerCode;
    }
    
    // 'onPick' attribute on OrgInput (id=Producer_Input) at PolicyInfoProducerOfRecordInputSet.pcf: line 32, column 24
    function onPick_6 (PickedValue :  Organization) : void {
      producerChanged = true
    }
    
    // 'optionLabel' attribute on RangeInput (id=ProducerCode_Input) at PolicyInfoProducerOfRecordInputSet.pcf: line 46, column 39
    function optionLabel_17 (VALUE :  entity.ProducerCode) : java.lang.String {
      return DisplayKey.get("Web.ProducerSelection.ProducerCode.OptionLabel", VALUE.Code, VALUE.Description != null ? VALUE.Description : "")
    }
    
    // 'validationExpression' attribute on RangeInput (id=ProducerCode_Input) at PolicyInfoProducerOfRecordInputSet.pcf: line 46, column 39
    function validationExpression_13 () : java.lang.Object {
      return validateProducerCode(policyPeriod.EffectiveDatedFields.ProducerCode)
    }
    
    // 'validationExpression' attribute on OrgInput (id=Producer_Input) at PolicyInfoProducerOfRecordInputSet.pcf: line 32, column 24
    function validationExpression_5 () : java.lang.Object {
      return producer.ProducerStatus == TC_ACTIVE ? null : DisplayKey.get("Web.ProducerSelection.Error.SuspendedProducer", producer)
    }
    
    // 'valueRange' attribute on RangeInput (id=ProducerCode_Input) at PolicyInfoProducerOfRecordInputSet.pcf: line 46, column 39
    function valueRange_18 () : java.lang.Object {
      return producer == null ? null : gw.api.web.producer.ProducerUtil.getProducerCodeRange(producer, forUseIn)
    }
    
    // 'value' attribute on RangeInput (id=ProducerCode_Input) at PolicyInfoProducerOfRecordInputSet.pcf: line 46, column 39
    function valueRoot_16 () : java.lang.Object {
      return policyPeriod.EffectiveDatedFields
    }
    
    // 'value' attribute on RangeInput (id=ProducerCode_Input) at PolicyInfoProducerOfRecordInputSet.pcf: line 46, column 39
    function value_14 () : entity.ProducerCode {
      return policyPeriod.EffectiveDatedFields.ProducerCode
    }
    
    // 'value' attribute on OrgInput (id=Producer_Input) at PolicyInfoProducerOfRecordInputSet.pcf: line 32, column 24
    function value_7 () : entity.Organization {
      return producer
    }
    
    // 'valueRange' attribute on RangeInput (id=ProducerCode_Input) at PolicyInfoProducerOfRecordInputSet.pcf: line 46, column 39
    function verifyValueRangeIsAllowedType_19 ($$arg :  entity.ProducerCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ProducerCode_Input) at PolicyInfoProducerOfRecordInputSet.pcf: line 46, column 39
    function verifyValueRangeIsAllowedType_19 ($$arg :  gw.api.database.IQueryBeanResult<entity.ProducerCode>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ProducerCode_Input) at PolicyInfoProducerOfRecordInputSet.pcf: line 46, column 39
    function verifyValueRangeIsAllowedType_19 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ProducerCode_Input) at PolicyInfoProducerOfRecordInputSet.pcf: line 46, column 39
    function verifyValueRange_20 () : void {
      var __valueRangeArg = producer == null ? null : gw.api.web.producer.ProducerUtil.getProducerCodeRange(producer, forUseIn)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_19(__valueRangeArg)
    }
    
    property get forUseIn () : ProducerStatusUse {
      return getRequireValue("forUseIn", 0) as ProducerStatusUse
    }
    
    property set forUseIn ($arg :  ProducerStatusUse) {
      setRequireValue("forUseIn", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get producer () : Organization {
      return getVariableValue("producer", 0) as Organization
    }
    
    property set producer ($arg :  Organization) {
      setVariableValue("producer", 0, $arg)
    }
    
    property get producerChanged () : boolean {
      return getVariableValue("producerChanged", 0) as java.lang.Boolean
    }
    
    property set producerChanged ($arg :  boolean) {
      setVariableValue("producerChanged", 0, $arg)
    }
    
    function validateProducerCode(pc : ProducerCode) : String {
      if (forUseIn != null and !pc.ProducerStatus.hasCategory(forUseIn)) {
        return DisplayKey.get("Web.ProducerSelection.Error.SuspendedProducerCode", pc)
      }
      return null
    }
    
    function assignProducer() : Organization {
      if (producerChanged) {
        return producer
      }
      return policyPeriod.ProducerOfRecord
    }
    
    
  }
  
  
}