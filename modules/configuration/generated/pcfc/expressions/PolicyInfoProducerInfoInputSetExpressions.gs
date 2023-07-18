package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyInfoProducerInfoInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyInfoProducerInfoInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyInfoProducerInfoInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyInfoProducerInfoInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=ProducerCodeSearchMenuIcon) at PolicyInfoProducerInfoInputSet.pcf: line 51, column 39
    function action_16 () : void {
      ProducerCodeSearchPopup.push(producer, forUseIn)
    }
    
    // 'pickLocation' attribute on OrgInput (id=Producer_Input) at PolicyInfoProducerInfoInputSet.pcf: line 37, column 24
    function action_7 () : void {
      OrganizationSearchPopup.push(null, true)
    }
    
    // 'action' attribute on MenuItem (id=ProducerCodeSearchMenuIcon) at PolicyInfoProducerInfoInputSet.pcf: line 51, column 39
    function action_dest_17 () : pcf.api.Destination {
      return pcf.ProducerCodeSearchPopup.createDestination(producer, forUseIn)
    }
    
    // 'pickLocation' attribute on OrgInput (id=Producer_Input) at PolicyInfoProducerInfoInputSet.pcf: line 37, column 24
    function action_dest_8 () : pcf.api.Destination {
      return pcf.OrganizationSearchPopup.createDestination(null, true)
    }
    
    // 'value' attribute on OrgInput (id=Producer_Input) at PolicyInfoProducerInfoInputSet.pcf: line 37, column 24
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      producer = (__VALUE_TO_SET as entity.Organization)
    }
    
    // 'value' attribute on RangeInput (id=ProducerCode_Input) at PolicyInfoProducerInfoInputSet.pcf: line 51, column 39
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriod.EffectiveDatedFields.ProducerCode = (__VALUE_TO_SET as entity.ProducerCode)
    }
    
    // 'editable' attribute on OrgInput (id=Producer_Input) at PolicyInfoProducerInfoInputSet.pcf: line 37, column 24
    function editable_9 () : java.lang.Boolean {
      return gw.api.web.producer.ProducerUtil.canEditOrganization()
    }
    
    // 'initialValue' attribute on Variable at PolicyInfoProducerInfoInputSet.pcf: line 16, column 35
    function initialValue_0 () : entity.Organization {
      return policyPeriod.ProducerOfRecord
    }
    
    // 'onChange' attribute on PostOnChange at PolicyInfoProducerInfoInputSet.pcf: line 40, column 75
    function onChange_6 () : void {
      policyPeriod.EffectiveDatedFields.ProducerCode = null
    }
    
    // 'optionLabel' attribute on RangeInput (id=ProducerCode_Input) at PolicyInfoProducerInfoInputSet.pcf: line 51, column 39
    function optionLabel_22 (VALUE :  entity.ProducerCode) : java.lang.String {
      return DisplayKey.get("Web.ProducerSelection.ProducerCode.OptionLabel", VALUE.Code, VALUE.Description != null ? VALUE.Description : "")
    }
    
    // 'validationExpression' attribute on OrgInput (id=Producer_Input) at PolicyInfoProducerInfoInputSet.pcf: line 37, column 24
    function validationExpression_10 () : java.lang.Object {
      return producer.ProducerStatus == TC_ACTIVE ? null : DisplayKey.get("Web.ProducerSelection.Error.SuspendedProducer", producer)
    }
    
    // 'validationExpression' attribute on RangeInput (id=ProducerCode_Input) at PolicyInfoProducerInfoInputSet.pcf: line 51, column 39
    function validationExpression_18 () : java.lang.Object {
      return validateProducerCode(policyPeriod.EffectiveDatedFields.ProducerCode)
    }
    
    // 'valueRange' attribute on RangeInput (id=ProducerCode_Input) at PolicyInfoProducerInfoInputSet.pcf: line 51, column 39
    function valueRange_23 () : java.lang.Object {
      return gw.api.web.producer.ProducerUtil.getProducerCodeRange(producer, forUseIn)
    }
    
    // 'value' attribute on TextInput (id=POROrganization_Input) at PolicyInfoProducerInfoInputSet.pcf: line 23, column 40
    function valueRoot_2 () : java.lang.Object {
      return policyPeriod.ProducerCodeOfRecord
    }
    
    // 'value' attribute on RangeInput (id=ProducerCode_Input) at PolicyInfoProducerInfoInputSet.pcf: line 51, column 39
    function valueRoot_21 () : java.lang.Object {
      return policyPeriod.EffectiveDatedFields
    }
    
    // 'value' attribute on TextInput (id=POROrganization_Input) at PolicyInfoProducerInfoInputSet.pcf: line 23, column 40
    function value_1 () : entity.Organization {
      return policyPeriod.ProducerCodeOfRecord.Organization
    }
    
    // 'value' attribute on OrgInput (id=Producer_Input) at PolicyInfoProducerInfoInputSet.pcf: line 37, column 24
    function value_11 () : entity.Organization {
      return producer
    }
    
    // 'value' attribute on RangeInput (id=ProducerCode_Input) at PolicyInfoProducerInfoInputSet.pcf: line 51, column 39
    function value_19 () : entity.ProducerCode {
      return policyPeriod.EffectiveDatedFields.ProducerCode
    }
    
    // 'value' attribute on TextInput (id=ProducerCodeOfRecord_Input) at PolicyInfoProducerInfoInputSet.pcf: line 27, column 249
    function value_4 () : java.lang.String {
      return DisplayKey.get("Web.ProducerSelection.ProducerCode.OptionLabel", policyPeriod.ProducerCodeOfRecord.Code, policyPeriod.ProducerCodeOfRecord.Description != null ? policyPeriod.ProducerCodeOfRecord.Description : "")
    }
    
    // 'valueRange' attribute on RangeInput (id=ProducerCode_Input) at PolicyInfoProducerInfoInputSet.pcf: line 51, column 39
    function verifyValueRangeIsAllowedType_24 ($$arg :  entity.ProducerCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ProducerCode_Input) at PolicyInfoProducerInfoInputSet.pcf: line 51, column 39
    function verifyValueRangeIsAllowedType_24 ($$arg :  gw.api.database.IQueryBeanResult<entity.ProducerCode>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ProducerCode_Input) at PolicyInfoProducerInfoInputSet.pcf: line 51, column 39
    function verifyValueRangeIsAllowedType_24 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ProducerCode_Input) at PolicyInfoProducerInfoInputSet.pcf: line 51, column 39
    function verifyValueRange_25 () : void {
      var __valueRangeArg = gw.api.web.producer.ProducerUtil.getProducerCodeRange(producer, forUseIn)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_24(__valueRangeArg)
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
    
    property get producer () : entity.Organization {
      return getVariableValue("producer", 0) as entity.Organization
    }
    
    property set producer ($arg :  entity.Organization) {
      setVariableValue("producer", 0, $arg)
    }
    
    function validateProducerCode(pc : ProducerCode) : String {
      if (forUseIn != null and !pc.ProducerStatus.hasCategory(forUseIn)) {
        return DisplayKey.get("Web.ProducerSelection.Error.SuspendedProducerCodeOfService", pc)
      }
      return null
    }
    
    
  }
  
  
}