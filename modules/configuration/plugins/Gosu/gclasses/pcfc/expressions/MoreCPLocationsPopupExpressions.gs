package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cp/policy/MoreCPLocationsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MoreCPLocationsPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/MoreCPLocationsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends MoreCPLocationsPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=locName_Cell) at MoreCPLocationsPopup.pcf: line 51, column 45
    function valueRoot_6 () : java.lang.Object {
      return location
    }
    
    // 'value' attribute on TextCell (id=locName_Cell) at MoreCPLocationsPopup.pcf: line 51, column 45
    function value_5 () : java.lang.String {
      return location.DisplayName
    }
    
    property get location () : entity.AccountLocation {
      return getIteratedValue(1) as entity.AccountLocation
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/MoreCPLocationsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MoreCPLocationsPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, locations :  AccountLocation[], openForEdit :  boolean) : int {
      return 0
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=AddSelectedLocations) at MoreCPLocationsPopup.pcf: line 29, column 98
    function allCheckedRowsAction_0 (CheckedValues :  entity.AccountLocation[], CheckedValuesErrors :  java.util.Map) : void {
      addCPLocations(policyPeriod.CPLine, CheckedValues)
    }
    
    // 'editable' attribute on RowIterator (id=locationIterator) at MoreCPLocationsPopup.pcf: line 43, column 48
    function editable_4 () : java.lang.Boolean {
      return openForEdit
    }
    
    // EditButtons at MoreCPLocationsPopup.pcf: line 31, column 34
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'sortBy' attribute on IteratorSort at MoreCPLocationsPopup.pcf: line 46, column 28
    function sortBy_2 (location :  entity.AccountLocation) : java.lang.Object {
      return location.LocationNum
    }
    
    // 'value' attribute on TextCell (id=locName_Cell) at MoreCPLocationsPopup.pcf: line 51, column 45
    function sortValue_3 (location :  entity.AccountLocation) : java.lang.Object {
      return location.DisplayName
    }
    
    // 'value' attribute on RowIterator (id=locationIterator) at MoreCPLocationsPopup.pcf: line 43, column 48
    function value_8 () : entity.AccountLocation[] {
      return locations
    }
    
    override property get CurrentLocation () : pcf.MoreCPLocationsPopup {
      return super.CurrentLocation as pcf.MoreCPLocationsPopup
    }
    
    property get locations () : AccountLocation[] {
      return getVariableValue("locations", 0) as AccountLocation[]
    }
    
    property set locations ($arg :  AccountLocation[]) {
      setVariableValue("locations", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getVariableValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setVariableValue("openForEdit", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    function addCPLocations(cpLine : CPLine, acctLocations : AccountLocation[]) {
      for (acctLocation in acctLocations) {
        var cpLocation = cpLine.addToLineSpecificLocations(acctLocation)
        for (tc in cpLocation.PolicyLocation.TerritoryCodes) {
          tc.fillWithFirst()
        }
      }
      CurrentLocation.commit()
    }
    
    
  }
  
  
}