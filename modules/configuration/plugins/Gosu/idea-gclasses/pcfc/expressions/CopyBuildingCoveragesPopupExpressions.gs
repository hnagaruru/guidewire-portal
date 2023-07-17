package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cp/policy/CopyBuildingCoveragesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CopyBuildingCoveragesPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CopyBuildingCoveragesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CopyBuildingCoveragesPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (period :  PolicyPeriod) : int {
      return 0
    }
    
    // 'action' attribute on PickerMenuItem (id=CopyFromLocationMore) at CopyBuildingCoveragesPopup.pcf: line 111, column 62
    function action_23 () : void {
      BuildingSearchPopup.push(period)
    }
    
    // 'action' attribute on ToolbarButton (id=copyAllCoverages) at CopyBuildingCoveragesPopup.pcf: line 47, column 85
    function action_7 () : void {
      copyFromBuilding.copyCoverages(copyToBuildings); CurrentLocation.commit()
    }
    
    // 'action' attribute on ToolbarButton (id=cancelCopyCoverages) at CopyBuildingCoveragesPopup.pcf: line 51, column 84
    function action_8 () : void {
      CurrentLocation.cancel()
    }
    
    // 'action' attribute on PickerMenuItem (id=CopyFromLocationMore) at CopyBuildingCoveragesPopup.pcf: line 111, column 62
    function action_dest_24 () : pcf.api.Destination {
      return pcf.BuildingSearchPopup.createDestination(period)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=copyCoverage) at CopyBuildingCoveragesPopup.pcf: line 42, column 82
    function allCheckedRowsAction_5 (CheckedValues :  CPBuilding[], CheckedValuesErrors :  java.util.Map) : void {
      copyFromBuilding.copyCoverages(CheckedValues); CurrentLocation.commit()
    }
    
    // 'available' attribute on ToolbarButton (id=copyAllCoverages) at CopyBuildingCoveragesPopup.pcf: line 47, column 85
    function available_6 () : java.lang.Boolean {
      return copyFromBuilding != null
    }
    
    // 'def' attribute on PanelRef at CopyBuildingCoveragesPopup.pcf: line 126, column 45
    function def_onEnter_29 (def :  pcf.CPBldgSuggestedCovDV) : void {
      def.onEnter(copyFromBuilding == null ? locations.firstWhere(\ l -> not l.Buildings.IsEmpty).Buildings.first() : copyFromBuilding, false)
    }
    
    // 'def' attribute on PanelRef at CopyBuildingCoveragesPopup.pcf: line 129, column 44
    function def_onEnter_32 (def :  pcf.CopyBuildingCoverage_CopyToLV) : void {
      def.onEnter(locations, copyToBuildings)
    }
    
    // 'def' attribute on PanelRef at CopyBuildingCoveragesPopup.pcf: line 126, column 45
    function def_refreshVariables_30 (def :  pcf.CPBldgSuggestedCovDV) : void {
      def.refreshVariables(copyFromBuilding == null ? locations.firstWhere(\ l -> not l.Buildings.IsEmpty).Buildings.first() : copyFromBuilding, false)
    }
    
    // 'def' attribute on PanelRef at CopyBuildingCoveragesPopup.pcf: line 129, column 44
    function def_refreshVariables_33 (def :  pcf.CopyBuildingCoverage_CopyToLV) : void {
      def.refreshVariables(locations, copyToBuildings)
    }
    
    // 'initialValue' attribute on Variable at CopyBuildingCoveragesPopup.pcf: line 18, column 35
    function initialValue_0 () : entity.CPLocation[] {
      return period.CPLine.CPLocations
    }
    
    // 'initialValue' attribute on Variable at CopyBuildingCoveragesPopup.pcf: line 22, column 26
    function initialValue_1 () : CPBuilding {
      return null
    }
    
    // 'initialValue' attribute on Variable at CopyBuildingCoveragesPopup.pcf: line 26, column 19
    function initialValue_2 () : int {
      return 10
    }
    
    // 'initialValue' attribute on Variable at CopyBuildingCoveragesPopup.pcf: line 35, column 35
    function initialValue_4 () : entity.CPBuilding[] {
      return getBuildingsExcludingCopyFromBuilding()
    }
    
    // 'onPick' attribute on PickerMenuItem (id=CopyFromLocationMore) at CopyBuildingCoveragesPopup.pcf: line 111, column 62
    function onPick_25 (PickedValue :  CPBuilding) : void {
      copyFromBuilding = PickedValue
    }
    
    // 'sortBy' attribute on IteratorSort at CopyBuildingCoveragesPopup.pcf: line 73, column 34
    function sortBy_9 (location :  entity.CPLocation) : java.lang.Object {
      return location.Location.LocationNum
    }
    
    // 'value' attribute on MenuItemIterator (id=CopyFromLocationIterator) at CopyBuildingCoveragesPopup.pcf: line 70, column 32
    function value_21 () : java.util.List<entity.CPLocation> {
      return getLimitedNumberOfLocations(locations.toList())
    }
    
    // 'value' attribute on TextInput (id=SelectedBuilding_Input) at CopyBuildingCoveragesPopup.pcf: line 119, column 73
    function value_26 () : java.lang.Comparable<java.lang.Object> {
      return copyFromBuilding == null ? DisplayKey.get("Web.CopyPolicyData.CommercialProperty.Buildings.CopyCoverages.NoneSelected") : copyFromBuilding
    }
    
    // 'visible' attribute on PickerMenuItem (id=CopyFromLocationMore) at CopyBuildingCoveragesPopup.pcf: line 111, column 62
    function visible_22 () : java.lang.Boolean {
      return locations.Count > maxLocations
    }
    
    override property get CurrentLocation () : pcf.CopyBuildingCoveragesPopup {
      return super.CurrentLocation as pcf.CopyBuildingCoveragesPopup
    }
    
    property get copyFromBuilding () : CPBuilding {
      return getVariableValue("copyFromBuilding", 0) as CPBuilding
    }
    
    property set copyFromBuilding ($arg :  CPBuilding) {
      setVariableValue("copyFromBuilding", 0, $arg)
    }
    
    property get copyToBuildings () : entity.CPBuilding[] {
      return getVariableValue("copyToBuildings", 0) as entity.CPBuilding[]
    }
    
    property set copyToBuildings ($arg :  entity.CPBuilding[]) {
      setVariableValue("copyToBuildings", 0, $arg)
    }
    
    property get locations () : entity.CPLocation[] {
      return getVariableValue("locations", 0) as entity.CPLocation[]
    }
    
    property set locations ($arg :  entity.CPLocation[]) {
      setVariableValue("locations", 0, $arg)
    }
    
    property get maxBuildings () : int {
      return getVariableValue("maxBuildings", 0) as java.lang.Integer
    }
    
    property set maxBuildings ($arg :  int) {
      setVariableValue("maxBuildings", 0, $arg)
    }
    
    property get maxLocations () : int {
      return getVariableValue("maxLocations", 0) as java.lang.Integer
    }
    
    property set maxLocations ($arg :  int) {
      setVariableValue("maxLocations", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getVariableValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setVariableValue("period", 0, $arg)
    }
    
    function getLimitedNumberOfBuildings(buildings : java.util.List<CPBuilding>) : java.util.List<CPBuilding> {
      return buildings.Count > maxBuildings ? buildings.sortBy(\ b -> b.Building.BuildingNum).subList(0, maxBuildings) : buildings
    }
    
    function getLimitedNumberOfLocations(originalLocations : java.util.List<CPLocation>) : java.util.List<CPLocation> {
      return originalLocations.Count > maxLocations ? originalLocations.sortBy(\ l -> l.Location.LocationNum).subList(0, maxLocations) : originalLocations
    }
    
    function getBuildingsExcludingCopyFromBuilding() : CPBuilding[] {
      var sortedLocations = locations.sortBy(\ l -> l.Location.LocationNum)
      var sortedBuildings : java.util.List<CPBuilding> = {}
      sortedLocations.each(\ l -> sortedBuildings.addAll(l.Buildings.toList().sortBy(\ b -> b.Building.BuildingNum)))
      return sortedBuildings.where(\ b -> b.ID != copyFromBuilding.ID).toArray(new CPBuilding[sortedBuildings.Count - 1])
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CopyBuildingCoveragesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=CopyFromBuilding) at CopyBuildingCoveragesPopup.pcf: line 94, column 39
    function action_11 () : void {
      copyFromBuilding = building
    }
    
    // 'checked' attribute on MenuItem (id=CopyFromBuilding) at CopyBuildingCoveragesPopup.pcf: line 94, column 39
    function checked_13 () : java.lang.Boolean {
      return copyFromBuilding.ID == building.ID
    }
    
    // 'label' attribute on MenuItem (id=CopyFromBuilding) at CopyBuildingCoveragesPopup.pcf: line 94, column 39
    function label_12 () : java.lang.Object {
      return building
    }
    
    property get building () : entity.CPBuilding {
      return getIteratedValue(2) as entity.CPBuilding
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CopyBuildingCoveragesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CopyBuildingCoveragesPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerMenuItem (id=CopyFromBuildingMore) at CopyBuildingCoveragesPopup.pcf: line 102, column 75
    function action_16 () : void {
      BuildingSearchPopup.push(period)
    }
    
    // 'action' attribute on PickerMenuItem (id=CopyFromBuildingMore) at CopyBuildingCoveragesPopup.pcf: line 102, column 75
    function action_dest_17 () : pcf.api.Destination {
      return pcf.BuildingSearchPopup.createDestination(period)
    }
    
    // 'checked' attribute on MenuItem (id=CopyFromLocation) at CopyBuildingCoveragesPopup.pcf: line 78, column 34
    function checked_20 () : java.lang.Boolean {
      return location.ID == copyFromBuilding.CPLocation.ID
    }
    
    // 'label' attribute on MenuItem (id=CopyFromLocation) at CopyBuildingCoveragesPopup.pcf: line 78, column 34
    function label_19 () : java.lang.Object {
      return location
    }
    
    // 'onPick' attribute on PickerMenuItem (id=CopyFromBuildingMore) at CopyBuildingCoveragesPopup.pcf: line 102, column 75
    function onPick_18 (PickedValue :  CPBuilding) : void {
      copyFromBuilding = PickedValue
    }
    
    // 'sortBy' attribute on IteratorSort at CopyBuildingCoveragesPopup.pcf: line 87, column 38
    function sortBy_10 (building :  entity.CPBuilding) : java.lang.Object {
      return building.Building.BuildingNum
    }
    
    // 'value' attribute on MenuItemIterator (id=CopyFromBuildingIterator) at CopyBuildingCoveragesPopup.pcf: line 84, column 36
    function value_14 () : java.util.List<entity.CPBuilding> {
      return getLimitedNumberOfBuildings(location.Buildings.toList())
    }
    
    // 'visible' attribute on PickerMenuItem (id=CopyFromBuildingMore) at CopyBuildingCoveragesPopup.pcf: line 102, column 75
    function visible_15 () : java.lang.Boolean {
      return location.Buildings.Count > maxBuildings
    }
    
    property get location () : entity.CPLocation {
      return getIteratedValue(1) as entity.CPLocation
    }
    
    
  }
  
  
}