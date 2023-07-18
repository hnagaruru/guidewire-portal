package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/PolicyAddlInterestPanelSet.IMSchEquipAddlInterest.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyAddlInterestPanelSet_IMSchEquipAddlInterestExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/PolicyAddlInterestPanelSet.IMSchEquipAddlInterest.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=AdditionalInterestType_Cell) at PolicyAddlInterestPanelSet.IMSchEquipAddlInterest.pcf: line 46, column 57
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      addlInterestDetail.AdditionalInterestType = (__VALUE_TO_SET as typekey.AdditionalInterestType)
    }
    
    // 'value' attribute on BooleanRadioCell (id=CertRequired_Cell) at PolicyAddlInterestPanelSet.IMSchEquipAddlInterest.pcf: line 51, column 54
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      addlInterestDetail.CertRequired = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextCell (id=ContractNumber_Cell) at PolicyAddlInterestPanelSet.IMSchEquipAddlInterest.pcf: line 56, column 56
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      addlInterestDetail.ContractNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'valueRange' attribute on RangeCell (id=IMContractorsEquipment_Cell) at PolicyAddlInterestPanelSet.IMSchEquipAddlInterest.pcf: line 39, column 54
    function valueRange_9 () : java.lang.Object {
      return imPart.ContractorsEquipments
    }
    
    // 'value' attribute on RangeCell (id=IMContractorsEquipment_Cell) at PolicyAddlInterestPanelSet.IMSchEquipAddlInterest.pcf: line 39, column 54
    function valueRoot_8 () : java.lang.Object {
      return addlInterestDetail
    }
    
    // 'value' attribute on TypeKeyCell (id=AdditionalInterestType_Cell) at PolicyAddlInterestPanelSet.IMSchEquipAddlInterest.pcf: line 46, column 57
    function value_13 () : typekey.AdditionalInterestType {
      return addlInterestDetail.AdditionalInterestType
    }
    
    // 'value' attribute on BooleanRadioCell (id=CertRequired_Cell) at PolicyAddlInterestPanelSet.IMSchEquipAddlInterest.pcf: line 51, column 54
    function value_17 () : java.lang.Boolean {
      return addlInterestDetail.CertRequired
    }
    
    // 'value' attribute on TextCell (id=ContractNumber_Cell) at PolicyAddlInterestPanelSet.IMSchEquipAddlInterest.pcf: line 56, column 56
    function value_21 () : java.lang.String {
      return addlInterestDetail.ContractNumber
    }
    
    // 'value' attribute on RangeCell (id=IMContractorsEquipment_Cell) at PolicyAddlInterestPanelSet.IMSchEquipAddlInterest.pcf: line 39, column 54
    function value_7 () : entity.ContractorsEquipment {
      return addlInterestDetail.ContractorsEquipment
    }
    
    // 'valueRange' attribute on RangeCell (id=IMContractorsEquipment_Cell) at PolicyAddlInterestPanelSet.IMSchEquipAddlInterest.pcf: line 39, column 54
    function verifyValueRangeIsAllowedType_10 ($$arg :  entity.ContractorsEquipment[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=IMContractorsEquipment_Cell) at PolicyAddlInterestPanelSet.IMSchEquipAddlInterest.pcf: line 39, column 54
    function verifyValueRangeIsAllowedType_10 ($$arg :  gw.api.database.IQueryBeanResult<entity.ContractorsEquipment>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=IMContractorsEquipment_Cell) at PolicyAddlInterestPanelSet.IMSchEquipAddlInterest.pcf: line 39, column 54
    function verifyValueRangeIsAllowedType_10 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=IMContractorsEquipment_Cell) at PolicyAddlInterestPanelSet.IMSchEquipAddlInterest.pcf: line 39, column 54
    function verifyValueRange_11 () : void {
      var __valueRangeArg = imPart.ContractorsEquipments
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_10(__valueRangeArg)
    }
    
    property get addlInterestDetail () : entity.IMSchEquipAddlInterest {
      return getIteratedValue(2) as entity.IMSchEquipAddlInterest
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contacts/PolicyAddlInterestPanelSet.IMSchEquipAddlInterest.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListViewPanelExpressionsImpl extends PolicyAddlInterestPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at PolicyAddlInterestPanelSet.IMSchEquipAddlInterest.pcf: line 19, column 45
    function initialValue_1 () : entity.ContractorsEquipment {
      return imPart.getDefaultContainerForAddlInterest()
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyAddlInterestPanelSet.IMSchEquipAddlInterest.pcf: line 31, column 26
    function sortBy_2 (addlInterestDetail :  entity.IMSchEquipAddlInterest) : java.lang.Object {
      return addlInterestDetail.ContractorsEquipment.ContractorsEquipmentNumber
    }
    
    // 'value' attribute on RangeCell (id=IMContractorsEquipment_Cell) at PolicyAddlInterestPanelSet.IMSchEquipAddlInterest.pcf: line 39, column 54
    function sortValue_3 (addlInterestDetail :  entity.IMSchEquipAddlInterest) : java.lang.Object {
      return addlInterestDetail.ContractorsEquipment
    }
    
    // 'value' attribute on TypeKeyCell (id=AdditionalInterestType_Cell) at PolicyAddlInterestPanelSet.IMSchEquipAddlInterest.pcf: line 46, column 57
    function sortValue_4 (addlInterestDetail :  entity.IMSchEquipAddlInterest) : java.lang.Object {
      return addlInterestDetail.AdditionalInterestType
    }
    
    // 'value' attribute on BooleanRadioCell (id=CertRequired_Cell) at PolicyAddlInterestPanelSet.IMSchEquipAddlInterest.pcf: line 51, column 54
    function sortValue_5 (addlInterestDetail :  entity.IMSchEquipAddlInterest) : java.lang.Object {
      return addlInterestDetail.CertRequired
    }
    
    // 'value' attribute on TextCell (id=ContractNumber_Cell) at PolicyAddlInterestPanelSet.IMSchEquipAddlInterest.pcf: line 56, column 56
    function sortValue_6 (addlInterestDetail :  entity.IMSchEquipAddlInterest) : java.lang.Object {
      return addlInterestDetail.ContractNumber
    }
    
    // 'value' attribute on RowIterator (id=imAddlInterestIterator) at PolicyAddlInterestPanelSet.IMSchEquipAddlInterest.pcf: line 28, column 53
    function value_25 () : entity.IMSchEquipAddlInterest[] {
      return policyAddlInterest.AdditionalInterestDetails.whereTypeIs(IMSchEquipAddlInterest)
    }
    
    property get defaultEquipment () : entity.ContractorsEquipment {
      return getVariableValue("defaultEquipment", 1) as entity.ContractorsEquipment
    }
    
    property set defaultEquipment ($arg :  entity.ContractorsEquipment) {
      setVariableValue("defaultEquipment", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contacts/PolicyAddlInterestPanelSet.IMSchEquipAddlInterest.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyAddlInterestPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at PolicyAddlInterestPanelSet.IMSchEquipAddlInterest.pcf: line 14, column 43
    function initialValue_0 () : entity.ContractorsEquipPart {
      return policyAddlInterest.Branch.IMLine.ContractorsEquipPart
    }
    
    property get imPart () : entity.ContractorsEquipPart {
      return getVariableValue("imPart", 0) as entity.ContractorsEquipPart
    }
    
    property set imPart ($arg :  entity.ContractorsEquipPart) {
      setVariableValue("imPart", 0, $arg)
    }
    
    property get policyAddlInterest () : PolicyAddlInterest {
      return getRequireValue("policyAddlInterest", 0) as PolicyAddlInterest
    }
    
    property set policyAddlInterest ($arg :  PolicyAddlInterest) {
      setRequireValue("policyAddlInterest", 0, $arg)
    }
    
    
  }
  
  
}