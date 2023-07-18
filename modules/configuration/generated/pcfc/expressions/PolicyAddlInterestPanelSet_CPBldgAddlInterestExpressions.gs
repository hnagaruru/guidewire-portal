package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/PolicyAddlInterestPanelSet.CPBldgAddlInterest.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyAddlInterestPanelSet_CPBldgAddlInterestExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/PolicyAddlInterestPanelSet.CPBldgAddlInterest.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=AdditionalInterestType_Cell) at PolicyAddlInterestPanelSet.CPBldgAddlInterest.pcf: line 50, column 57
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      addlInterestDetail.AdditionalInterestType = (__VALUE_TO_SET as typekey.AdditionalInterestType)
    }
    
    // 'value' attribute on BooleanRadioCell (id=CertRequired_Cell) at PolicyAddlInterestPanelSet.CPBldgAddlInterest.pcf: line 55, column 54
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      addlInterestDetail.CertRequired = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextCell (id=ContractNumber_Cell) at PolicyAddlInterestPanelSet.CPBldgAddlInterest.pcf: line 60, column 56
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      addlInterestDetail.ContractNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'optionLabel' attribute on RangeCell (id=CPBuilding_Cell) at PolicyAddlInterestPanelSet.CPBldgAddlInterest.pcf: line 43, column 44
    function optionLabel_10 (VALUE :  entity.CPBuilding) : java.lang.String {
      return VALUE.BuildingLocationDisplay
    }
    
    // 'valueRange' attribute on RangeCell (id=CPBuilding_Cell) at PolicyAddlInterestPanelSet.CPBldgAddlInterest.pcf: line 43, column 44
    function valueRange_11 () : java.lang.Object {
      return policyAddlInterest.Branch.CPLine.CPLocations.arrays("Buildings").toArray(new entity.CPBuilding[0])
    }
    
    // 'value' attribute on RangeCell (id=CPBuilding_Cell) at PolicyAddlInterestPanelSet.CPBldgAddlInterest.pcf: line 43, column 44
    function valueRoot_9 () : java.lang.Object {
      return addlInterestDetail
    }
    
    // 'value' attribute on TypeKeyCell (id=AdditionalInterestType_Cell) at PolicyAddlInterestPanelSet.CPBldgAddlInterest.pcf: line 50, column 57
    function value_15 () : typekey.AdditionalInterestType {
      return addlInterestDetail.AdditionalInterestType
    }
    
    // 'value' attribute on BooleanRadioCell (id=CertRequired_Cell) at PolicyAddlInterestPanelSet.CPBldgAddlInterest.pcf: line 55, column 54
    function value_19 () : java.lang.Boolean {
      return addlInterestDetail.CertRequired
    }
    
    // 'value' attribute on TextCell (id=ContractNumber_Cell) at PolicyAddlInterestPanelSet.CPBldgAddlInterest.pcf: line 60, column 56
    function value_23 () : java.lang.String {
      return addlInterestDetail.ContractNumber
    }
    
    // 'value' attribute on RangeCell (id=CPBuilding_Cell) at PolicyAddlInterestPanelSet.CPBldgAddlInterest.pcf: line 43, column 44
    function value_8 () : entity.CPBuilding {
      return addlInterestDetail.CPBuilding
    }
    
    // 'valueRange' attribute on RangeCell (id=CPBuilding_Cell) at PolicyAddlInterestPanelSet.CPBldgAddlInterest.pcf: line 43, column 44
    function verifyValueRangeIsAllowedType_12 ($$arg :  entity.CPBuilding[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=CPBuilding_Cell) at PolicyAddlInterestPanelSet.CPBldgAddlInterest.pcf: line 43, column 44
    function verifyValueRangeIsAllowedType_12 ($$arg :  gw.api.database.IQueryBeanResult<entity.CPBuilding>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=CPBuilding_Cell) at PolicyAddlInterestPanelSet.CPBldgAddlInterest.pcf: line 43, column 44
    function verifyValueRangeIsAllowedType_12 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=CPBuilding_Cell) at PolicyAddlInterestPanelSet.CPBldgAddlInterest.pcf: line 43, column 44
    function verifyValueRange_13 () : void {
      var __valueRangeArg = policyAddlInterest.Branch.CPLine.CPLocations.arrays("Buildings").toArray(new entity.CPBuilding[0])
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_12(__valueRangeArg)
    }
    
    property get addlInterestDetail () : entity.CPBldgAddlInterest {
      return getIteratedValue(2) as entity.CPBldgAddlInterest
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contacts/PolicyAddlInterestPanelSet.CPBldgAddlInterest.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListViewPanelExpressionsImpl extends PolicyAddlInterestPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at PolicyAddlInterestPanelSet.CPBldgAddlInterest.pcf: line 19, column 35
    function initialValue_1 () : entity.CPBuilding {
      return cpLine.getDefaultContainerForAddlInterest()
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyAddlInterestPanelSet.CPBldgAddlInterest.pcf: line 31, column 26
    function sortBy_2 (addlInterestDetail :  entity.CPBldgAddlInterest) : java.lang.Object {
      return addlInterestDetail.CPBuilding.Building.BuildingNum
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyAddlInterestPanelSet.CPBldgAddlInterest.pcf: line 34, column 26
    function sortBy_3 (addlInterestDetail :  entity.CPBldgAddlInterest) : java.lang.Object {
      return addlInterestDetail.CPBuilding.CPLocation.Location.LocationNum
    }
    
    // 'value' attribute on RangeCell (id=CPBuilding_Cell) at PolicyAddlInterestPanelSet.CPBldgAddlInterest.pcf: line 43, column 44
    function sortValue_4 (addlInterestDetail :  entity.CPBldgAddlInterest) : java.lang.Object {
      return addlInterestDetail.CPBuilding
    }
    
    // 'value' attribute on TypeKeyCell (id=AdditionalInterestType_Cell) at PolicyAddlInterestPanelSet.CPBldgAddlInterest.pcf: line 50, column 57
    function sortValue_5 (addlInterestDetail :  entity.CPBldgAddlInterest) : java.lang.Object {
      return addlInterestDetail.AdditionalInterestType
    }
    
    // 'value' attribute on BooleanRadioCell (id=CertRequired_Cell) at PolicyAddlInterestPanelSet.CPBldgAddlInterest.pcf: line 55, column 54
    function sortValue_6 (addlInterestDetail :  entity.CPBldgAddlInterest) : java.lang.Object {
      return addlInterestDetail.CertRequired
    }
    
    // 'value' attribute on TextCell (id=ContractNumber_Cell) at PolicyAddlInterestPanelSet.CPBldgAddlInterest.pcf: line 60, column 56
    function sortValue_7 (addlInterestDetail :  entity.CPBldgAddlInterest) : java.lang.Object {
      return addlInterestDetail.ContractNumber
    }
    
    // 'value' attribute on RowIterator (id=cpAddlInterestIterator) at PolicyAddlInterestPanelSet.CPBldgAddlInterest.pcf: line 28, column 49
    function value_27 () : entity.CPBldgAddlInterest[] {
      return policyAddlInterest.AdditionalInterestDetails.whereTypeIs(CPBldgAddlInterest)
    }
    
    property get defaultBuilding () : entity.CPBuilding {
      return getVariableValue("defaultBuilding", 1) as entity.CPBuilding
    }
    
    property set defaultBuilding ($arg :  entity.CPBuilding) {
      setVariableValue("defaultBuilding", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contacts/PolicyAddlInterestPanelSet.CPBldgAddlInterest.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyAddlInterestPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at PolicyAddlInterestPanelSet.CPBldgAddlInterest.pcf: line 14, column 35
    function initialValue_0 () : productmodel.CPLine {
      return policyAddlInterest.Branch.CPLine
    }
    
    property get cpLine () : productmodel.CPLine {
      return getVariableValue("cpLine", 0) as productmodel.CPLine
    }
    
    property set cpLine ($arg :  productmodel.CPLine) {
      setVariableValue("cpLine", 0, $arg)
    }
    
    property get policyAddlInterest () : PolicyAddlInterest {
      return getRequireValue("policyAddlInterest", 0) as PolicyAddlInterest
    }
    
    property set policyAddlInterest ($arg :  PolicyAddlInterest) {
      setRequireValue("policyAddlInterest", 0, $arg)
    }
    
    
    function getFilteredBuildingsList(buildings : CPBuilding[]) {
      
    }
          
        
    
    
  }
  
  
}