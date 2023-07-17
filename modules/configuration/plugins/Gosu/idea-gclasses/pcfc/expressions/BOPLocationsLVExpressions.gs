package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPLocationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BOPLocationsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPLocationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BOPLocationsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at BOPLocationsLV.pcf: line 13, column 35
    function initialValue_0 () : entity.PolicyPeriod {
      return bopLine.Branch
    }
    
    // 'value' attribute on RadioButtonCell (id=PrimaryLocation_Cell) at BOPLocationsLV.pcf: line 27, column 73
    function sortValue_1 (bopLocation :  entity.BOPLocation) : java.lang.Object {
      return bopLocation.Location == policyPeriod.PrimaryLocation
    }
    
    // 'value' attribute on TextCell (id=LocNum_Cell) at BOPLocationsLV.pcf: line 34, column 42
    function sortValue_2 (bopLocation :  entity.BOPLocation) : java.lang.Object {
      return bopLocation.Location.LocationNum
    }
    
    // 'value' attribute on TextCell (id=LocationName_Cell) at BOPLocationsLV.pcf: line 39, column 70
    function sortValue_3 (bopLocation :  entity.BOPLocation) : java.lang.Object {
      return bopLocation.Location.AccountLocation.LocationName
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at BOPLocationsLV.pcf: line 45, column 24
    function sortValue_4 (bopLocation :  entity.BOPLocation) : java.lang.Object {
      return bopLocation.Location.addressString(",", false, false)
    }
    
    // 'value' attribute on TextCell (id=LocationPreferredCoverageCurrency_Cell) at BOPLocationsLV.pcf: line 52, column 69
    function sortValue_5 (bopLocation :  entity.BOPLocation) : java.lang.Object {
      return bopLocation.PreferredCoverageCurrency
    }
    
    // 'value' attribute on RowIterator at BOPLocationsLV.pcf: line 19, column 40
    function value_22 () : entity.BOPLocation[] {
      return bopLine.BOPLocations
    }
    
    // 'visible' attribute on TextCell (id=LocationPreferredCoverageCurrency_Cell) at BOPLocationsLV.pcf: line 52, column 69
    function visible_6 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get bopLine () : BusinessOwnersLine {
      return getRequireValue("bopLine", 0) as BusinessOwnersLine
    }
    
    property set bopLine ($arg :  BusinessOwnersLine) {
      setRequireValue("bopLine", 0, $arg)
    }
    
    property get policyPeriod () : entity.PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as entity.PolicyPeriod
    }
    
    property set policyPeriod ($arg :  entity.PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPLocationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends BOPLocationsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on RadioButtonCell (id=PrimaryLocation_Cell) at BOPLocationsLV.pcf: line 27, column 73
    function action_7 () : void {
      policyPeriod.PrimaryLocation = bopLocation.Location
    }
    
    // 'value' attribute on TextCell (id=LocNum_Cell) at BOPLocationsLV.pcf: line 34, column 42
    function valueRoot_11 () : java.lang.Object {
      return bopLocation.Location
    }
    
    // 'value' attribute on TextCell (id=LocationName_Cell) at BOPLocationsLV.pcf: line 39, column 70
    function valueRoot_14 () : java.lang.Object {
      return bopLocation.Location.AccountLocation
    }
    
    // 'value' attribute on TextCell (id=LocationPreferredCoverageCurrency_Cell) at BOPLocationsLV.pcf: line 52, column 69
    function valueRoot_19 () : java.lang.Object {
      return bopLocation
    }
    
    // 'value' attribute on TextCell (id=LocNum_Cell) at BOPLocationsLV.pcf: line 34, column 42
    function value_10 () : java.lang.Integer {
      return bopLocation.Location.LocationNum
    }
    
    // 'value' attribute on TextCell (id=LocationName_Cell) at BOPLocationsLV.pcf: line 39, column 70
    function value_13 () : java.lang.String {
      return bopLocation.Location.AccountLocation.LocationName
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at BOPLocationsLV.pcf: line 45, column 24
    function value_16 () : java.lang.String {
      return bopLocation.Location.addressString(",", false, false)
    }
    
    // 'value' attribute on TextCell (id=LocationPreferredCoverageCurrency_Cell) at BOPLocationsLV.pcf: line 52, column 69
    function value_18 () : typekey.Currency {
      return bopLocation.PreferredCoverageCurrency
    }
    
    // 'value' attribute on RadioButtonCell (id=PrimaryLocation_Cell) at BOPLocationsLV.pcf: line 27, column 73
    function value_8 () : java.lang.Boolean {
      return bopLocation.Location == policyPeriod.PrimaryLocation
    }
    
    // 'visible' attribute on TextCell (id=LocationPreferredCoverageCurrency_Cell) at BOPLocationsLV.pcf: line 52, column 69
    function visible_20 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get bopLocation () : entity.BOPLocation {
      return getIteratedValue(1) as entity.BOPLocation
    }
    
    
  }
  
  
}