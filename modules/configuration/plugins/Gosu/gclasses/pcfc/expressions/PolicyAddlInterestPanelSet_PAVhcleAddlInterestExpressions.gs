package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/PolicyAddlInterestPanelSet.PAVhcleAddlInterest.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyAddlInterestPanelSet_PAVhcleAddlInterestExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/PolicyAddlInterestPanelSet.PAVhcleAddlInterest.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=AdditionalInterestType_Cell) at PolicyAddlInterestPanelSet.PAVhcleAddlInterest.pcf: line 50, column 57
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      addlInterestDetail.AdditionalInterestType = (__VALUE_TO_SET as typekey.AdditionalInterestType)
    }
    
    // 'value' attribute on BooleanRadioCell (id=CertRequired_Cell) at PolicyAddlInterestPanelSet.PAVhcleAddlInterest.pcf: line 55, column 54
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      addlInterestDetail.CertRequired = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextCell (id=ContractNumber_Cell) at PolicyAddlInterestPanelSet.PAVhcleAddlInterest.pcf: line 60, column 56
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      addlInterestDetail.ContractNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'optionLabel' attribute on RangeCell (id=PAVehicle_Cell) at PolicyAddlInterestPanelSet.PAVhcleAddlInterest.pcf: line 43, column 49
    function optionLabel_10 (VALUE :  entity.PersonalVehicle) : java.lang.String {
      return VALUE.getVehicleLocationDisplay()
    }
    
    // 'valueRange' attribute on RangeCell (id=PAVehicle_Cell) at PolicyAddlInterestPanelSet.PAVhcleAddlInterest.pcf: line 43, column 49
    function valueRange_11 () : java.lang.Object {
      return paLine.Vehicles
    }
    
    // 'value' attribute on RangeCell (id=PAVehicle_Cell) at PolicyAddlInterestPanelSet.PAVhcleAddlInterest.pcf: line 43, column 49
    function valueRoot_9 () : java.lang.Object {
      return addlInterestDetail
    }
    
    // 'value' attribute on TypeKeyCell (id=AdditionalInterestType_Cell) at PolicyAddlInterestPanelSet.PAVhcleAddlInterest.pcf: line 50, column 57
    function value_15 () : typekey.AdditionalInterestType {
      return addlInterestDetail.AdditionalInterestType
    }
    
    // 'value' attribute on BooleanRadioCell (id=CertRequired_Cell) at PolicyAddlInterestPanelSet.PAVhcleAddlInterest.pcf: line 55, column 54
    function value_19 () : java.lang.Boolean {
      return addlInterestDetail.CertRequired
    }
    
    // 'value' attribute on TextCell (id=ContractNumber_Cell) at PolicyAddlInterestPanelSet.PAVhcleAddlInterest.pcf: line 60, column 56
    function value_23 () : java.lang.String {
      return addlInterestDetail.ContractNumber
    }
    
    // 'value' attribute on RangeCell (id=PAVehicle_Cell) at PolicyAddlInterestPanelSet.PAVhcleAddlInterest.pcf: line 43, column 49
    function value_8 () : entity.PersonalVehicle {
      return addlInterestDetail.PAVehicle
    }
    
    // 'valueRange' attribute on RangeCell (id=PAVehicle_Cell) at PolicyAddlInterestPanelSet.PAVhcleAddlInterest.pcf: line 43, column 49
    function verifyValueRangeIsAllowedType_12 ($$arg :  entity.PersonalVehicle[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=PAVehicle_Cell) at PolicyAddlInterestPanelSet.PAVhcleAddlInterest.pcf: line 43, column 49
    function verifyValueRangeIsAllowedType_12 ($$arg :  gw.api.database.IQueryBeanResult<entity.PersonalVehicle>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=PAVehicle_Cell) at PolicyAddlInterestPanelSet.PAVhcleAddlInterest.pcf: line 43, column 49
    function verifyValueRangeIsAllowedType_12 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=PAVehicle_Cell) at PolicyAddlInterestPanelSet.PAVhcleAddlInterest.pcf: line 43, column 49
    function verifyValueRange_13 () : void {
      var __valueRangeArg = paLine.Vehicles
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_12(__valueRangeArg)
    }
    
    property get addlInterestDetail () : entity.PAVhcleAddlInterest {
      return getIteratedValue(2) as entity.PAVhcleAddlInterest
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contacts/PolicyAddlInterestPanelSet.PAVhcleAddlInterest.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListViewPanelExpressionsImpl extends PolicyAddlInterestPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at PolicyAddlInterestPanelSet.PAVhcleAddlInterest.pcf: line 19, column 40
    function initialValue_1 () : entity.PersonalVehicle {
      return paLine.getDefaultContainerForAddlInterest()
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyAddlInterestPanelSet.PAVhcleAddlInterest.pcf: line 31, column 26
    function sortBy_2 (addlInterestDetail :  entity.PAVhcleAddlInterest) : java.lang.Object {
      return addlInterestDetail.PAVehicle.VehicleNumber
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyAddlInterestPanelSet.PAVhcleAddlInterest.pcf: line 34, column 26
    function sortBy_3 (addlInterestDetail :  entity.PAVhcleAddlInterest) : java.lang.Object {
      return addlInterestDetail.PAVehicle.GarageLocation.LocationNum
    }
    
    // 'value' attribute on RangeCell (id=PAVehicle_Cell) at PolicyAddlInterestPanelSet.PAVhcleAddlInterest.pcf: line 43, column 49
    function sortValue_4 (addlInterestDetail :  entity.PAVhcleAddlInterest) : java.lang.Object {
      return addlInterestDetail.PAVehicle
    }
    
    // 'value' attribute on TypeKeyCell (id=AdditionalInterestType_Cell) at PolicyAddlInterestPanelSet.PAVhcleAddlInterest.pcf: line 50, column 57
    function sortValue_5 (addlInterestDetail :  entity.PAVhcleAddlInterest) : java.lang.Object {
      return addlInterestDetail.AdditionalInterestType
    }
    
    // 'value' attribute on BooleanRadioCell (id=CertRequired_Cell) at PolicyAddlInterestPanelSet.PAVhcleAddlInterest.pcf: line 55, column 54
    function sortValue_6 (addlInterestDetail :  entity.PAVhcleAddlInterest) : java.lang.Object {
      return addlInterestDetail.CertRequired
    }
    
    // 'value' attribute on TextCell (id=ContractNumber_Cell) at PolicyAddlInterestPanelSet.PAVhcleAddlInterest.pcf: line 60, column 56
    function sortValue_7 (addlInterestDetail :  entity.PAVhcleAddlInterest) : java.lang.Object {
      return addlInterestDetail.ContractNumber
    }
    
    // 'value' attribute on RowIterator (id=paAddlInterestIterator) at PolicyAddlInterestPanelSet.PAVhcleAddlInterest.pcf: line 28, column 50
    function value_27 () : entity.PAVhcleAddlInterest[] {
      return policyAddlInterest.AdditionalInterestDetails.whereTypeIs(PAVhcleAddlInterest)
    }
    
    property get defaultVehicle () : entity.PersonalVehicle {
      return getVariableValue("defaultVehicle", 1) as entity.PersonalVehicle
    }
    
    property set defaultVehicle ($arg :  entity.PersonalVehicle) {
      setVariableValue("defaultVehicle", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contacts/PolicyAddlInterestPanelSet.PAVhcleAddlInterest.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyAddlInterestPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at PolicyAddlInterestPanelSet.PAVhcleAddlInterest.pcf: line 14, column 45
    function initialValue_0 () : productmodel.PersonalAutoLine {
      return policyAddlInterest.Branch.PersonalAutoLine
    }
    
    property get paLine () : productmodel.PersonalAutoLine {
      return getVariableValue("paLine", 0) as productmodel.PersonalAutoLine
    }
    
    property set paLine ($arg :  productmodel.PersonalAutoLine) {
      setVariableValue("paLine", 0, $arg)
    }
    
    property get policyAddlInterest () : PolicyAddlInterest {
      return getRequireValue("policyAddlInterest", 0) as PolicyAddlInterest
    }
    
    property set policyAddlInterest ($arg :  PolicyAddlInterest) {
      setRequireValue("policyAddlInterest", 0, $arg)
    }
    
    
  }
  
  
}