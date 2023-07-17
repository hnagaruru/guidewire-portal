package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cp/policy/MoreCPBuildingsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MoreCPBuildingsPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/MoreCPBuildingsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends MoreCPBuildingsPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=buildingName_Cell) at MoreCPBuildingsPopup.pcf: line 54, column 45
    function valueRoot_7 () : java.lang.Object {
      return building
    }
    
    // 'value' attribute on TextCell (id=buildingName_Cell) at MoreCPBuildingsPopup.pcf: line 54, column 45
    function value_6 () : java.lang.String {
      return building.DisplayName
    }
    
    property get building () : entity.Building {
      return getIteratedValue(1) as entity.Building
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/MoreCPBuildingsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MoreCPBuildingsPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (cpLocation :  CPLocation, buildings :  Building[], openForEdit :  boolean) : int {
      return 0
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=AddSelectedBuildings) at MoreCPBuildingsPopup.pcf: line 32, column 107
    function allCheckedRowsAction_1 (CheckedValues :  entity.Building[], CheckedValuesErrors :  java.util.Map) : void {
      addCPBuildings(CheckedValues)
    }
    
    // 'editable' attribute on RowIterator (id=buildingIterator) at MoreCPBuildingsPopup.pcf: line 46, column 41
    function editable_5 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'initialValue' attribute on Variable at MoreCPBuildingsPopup.pcf: line 25, column 26
    function initialValue_0 () : Building[] {
      return {}
    }
    
    // EditButtons at MoreCPBuildingsPopup.pcf: line 34, column 34
    function label_2 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'sortBy' attribute on IteratorSort at MoreCPBuildingsPopup.pcf: line 49, column 28
    function sortBy_3 (building :  entity.Building) : java.lang.Object {
      return building.BuildingNum
    }
    
    // 'value' attribute on TextCell (id=buildingName_Cell) at MoreCPBuildingsPopup.pcf: line 54, column 45
    function sortValue_4 (building :  entity.Building) : java.lang.Object {
      return building.DisplayName
    }
    
    // 'value' attribute on RowIterator (id=buildingIterator) at MoreCPBuildingsPopup.pcf: line 46, column 41
    function value_9 () : entity.Building[] {
      return buildings
    }
    
    override property get CurrentLocation () : pcf.MoreCPBuildingsPopup {
      return super.CurrentLocation as pcf.MoreCPBuildingsPopup
    }
    
    property get addedBuildings () : Building[] {
      return getVariableValue("addedBuildings", 0) as Building[]
    }
    
    property set addedBuildings ($arg :  Building[]) {
      setVariableValue("addedBuildings", 0, $arg)
    }
    
    property get buildings () : Building[] {
      return getVariableValue("buildings", 0) as Building[]
    }
    
    property set buildings ($arg :  Building[]) {
      setVariableValue("buildings", 0, $arg)
    }
    
    property get cpLocation () : CPLocation {
      return getVariableValue("cpLocation", 0) as CPLocation
    }
    
    property set cpLocation ($arg :  CPLocation) {
      setVariableValue("cpLocation", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getVariableValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setVariableValue("openForEdit", 0, $arg)
    }
    
    function addCPBuildings(bldgs : Building[]) {
      bldgs.each(\b -> cpLocation.addToLineSpecificBuildings(b))
      addedBuildings = bldgs
      CurrentLocation.commit()
    }
    
    
  }
  
  
}