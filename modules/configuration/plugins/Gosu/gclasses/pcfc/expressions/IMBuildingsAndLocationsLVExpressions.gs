package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/policy/IMBuildingsAndLocationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IMBuildingsAndLocationsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/policy/IMBuildingsAndLocationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IMBuildingsAndLocationsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at IMBuildingsAndLocationsLV.pcf: line 24, column 19
    function initialValue_0 () : int {
      return 10
    }
    
    // 'pickLocation' attribute on RowIterator at IMBuildingsAndLocationsLV.pcf: line 36, column 39
    function pickLocation_37 () : void {
      IMLocationPopup.push(imLine, true, true)
    }
    
    // 'sortBy' attribute on IteratorSort at IMBuildingsAndLocationsLV.pcf: line 43, column 24
    function sortBy_1 (imLocation :  entity.IMLocation) : java.lang.Object {
      return imLocation.Location.LocationNum
    }
    
    // 'value' attribute on TextCell (id=Actions_Cell) at IMBuildingsAndLocationsLV.pcf: line 56, column 33
    function sortValue_2 (imLocation :  entity.IMLocation) : java.lang.Object {
      return ""
    }
    
    // 'value' attribute on TextCell (id=LocationName_Cell) at IMBuildingsAndLocationsLV.pcf: line 101, column 43
    function sortValue_4 (imLocation :  entity.IMLocation) : java.lang.Object {
      return imLocation.DisplayName
    }
    
    // 'toRemove' attribute on RowIterator at IMBuildingsAndLocationsLV.pcf: line 36, column 39
    function toRemove_38 (imLocation :  entity.IMLocation) : void {
      imLine.removeFromLineSpecificLocations(imLocation)
    }
    
    // 'value' attribute on RowIterator at IMBuildingsAndLocationsLV.pcf: line 36, column 39
    function value_39 () : entity.IMLocation[] {
      return imLine.IMLocations
    }
    
    // 'visible' attribute on TextCell (id=Actions_Cell) at IMBuildingsAndLocationsLV.pcf: line 56, column 33
    function visible_3 () : java.lang.Boolean {
      return openForEdit
    }
    
    property get imLine () : InlandMarineLine {
      return getRequireValue("imLine", 0) as InlandMarineLine
    }
    
    property set imLine ($arg :  InlandMarineLine) {
      setRequireValue("imLine", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get maxUnusedBuildings () : int {
      return getVariableValue("maxUnusedBuildings", 0) as java.lang.Integer
    }
    
    property set maxUnusedBuildings ($arg :  int) {
      setVariableValue("maxUnusedBuildings", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    function getLimitedNumberOfSortedUnusedBuildings(buildings : Building[], numBuildings : int) : Building[] {
      var sortedBuildings = buildings.toList().sortBy(\building -> building.BuildingNum)
      if (sortedBuildings.Count > numBuildings) {
        sortedBuildings = sortedBuildings.subList(0, numBuildings)
      }
      return sortedBuildings.toTypedArray()
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/policy/IMBuildingsAndLocationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=UnassignedBuilding) at IMBuildingsAndLocationsLV.pcf: line 79, column 55
    function action_9 () : void {
      IMBuildingPopup.push(imLine, imLocation, unusedBuilding, openForEdit, jobWizardHelper)
    }
    
    // 'action' attribute on MenuItem (id=UnassignedBuilding) at IMBuildingsAndLocationsLV.pcf: line 79, column 55
    function action_dest_10 () : pcf.api.Destination {
      return pcf.IMBuildingPopup.createDestination(imLine, imLocation, unusedBuilding, openForEdit, jobWizardHelper)
    }
    
    // 'label' attribute on MenuItem (id=UnassignedBuilding) at IMBuildingsAndLocationsLV.pcf: line 79, column 55
    function label_11 () : java.lang.Object {
      return unusedBuilding.DisplayName
    }
    
    property get unusedBuilding () : entity.Building {
      return getIteratedValue(2) as entity.Building
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/policy/IMBuildingsAndLocationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=BuildingDescription_Cell) at IMBuildingsAndLocationsLV.pcf: line 130, column 57
    function action_28 () : void {
      IMBuildingPopup.push(imLine, imBuilding, openForEdit, jobWizardHelper)
    }
    
    // 'action' attribute on TextCell (id=BuildingDescription_Cell) at IMBuildingsAndLocationsLV.pcf: line 130, column 57
    function action_dest_29 () : pcf.api.Destination {
      return pcf.IMBuildingPopup.createDestination(imLine, imBuilding, openForEdit, jobWizardHelper)
    }
    
    // 'value' attribute on TextCell (id=BuildingDescription_Cell) at IMBuildingsAndLocationsLV.pcf: line 130, column 57
    function value_30 () : entity.IMBuilding {
      return imBuilding
    }
    
    // 'visible' attribute on EmptyCell (id=BlankCell2_Cell) at IMBuildingsAndLocationsLV.pcf: line 121, column 36
    function visible_27 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'visible' attribute on TextCell (id=BuildingDescription_Cell) at IMBuildingsAndLocationsLV.pcf: line 130, column 57
    function visible_31 () : java.lang.Boolean {
      return not imLocation.Buildings.IsEmpty
    }
    
    property get imBuilding () : entity.IMBuilding {
      return getIteratedValue(2) as entity.IMBuilding
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/policy/IMBuildingsAndLocationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends IMBuildingsAndLocationsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=AddMoreBuildings) at IMBuildingsAndLocationsLV.pcf: line 85, column 74
    function action_14 () : void {
      MoreIMBuildingsPopup.push(imLocation, unusedBuildings, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=RemoveLocation) at IMBuildingsAndLocationsLV.pcf: line 93, column 36
    function action_18 () : void {
      imLine.removeFromLineSpecificLocations(imLocation)
    }
    
    // 'action' attribute on TextCell (id=LocationName_Cell) at IMBuildingsAndLocationsLV.pcf: line 101, column 43
    function action_21 () : void {
      IMLocationPopup.push(imLocation, openForEdit, true)
    }
    
    // 'action' attribute on MenuItem (id=AddNewBuilding) at IMBuildingsAndLocationsLV.pcf: line 64, column 108
    function action_6 () : void {
      IMBuildingPopup.push(imLine, imLocation, openForEdit, jobWizardHelper)
    }
    
    // 'action' attribute on MenuItem (id=AddMoreBuildings) at IMBuildingsAndLocationsLV.pcf: line 85, column 74
    function action_dest_15 () : pcf.api.Destination {
      return pcf.MoreIMBuildingsPopup.createDestination(imLocation, unusedBuildings, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=LocationName_Cell) at IMBuildingsAndLocationsLV.pcf: line 101, column 43
    function action_dest_22 () : pcf.api.Destination {
      return pcf.IMLocationPopup.createDestination(imLocation, openForEdit, true)
    }
    
    // 'action' attribute on MenuItem (id=AddNewBuilding) at IMBuildingsAndLocationsLV.pcf: line 64, column 108
    function action_dest_7 () : pcf.api.Destination {
      return pcf.IMBuildingPopup.createDestination(imLine, imLocation, openForEdit, jobWizardHelper)
    }
    
    // 'confirmMessage' attribute on MenuItem (id=RemoveLocation) at IMBuildingsAndLocationsLV.pcf: line 93, column 36
    function confirmMessage_19 () : java.lang.String {
      return imLocation.hasSign() or imLocation.isReferencedByAccountsReceivable() ? DisplayKey.get("Web.Policy.LocationContainer.RemoveLocationAndSignConfirmMsg") : DisplayKey.get("Web.Policy.LocationContainer.RemoveLocationConfirmMsg")
    }
    
    // 'initialValue' attribute on Variable at IMBuildingsAndLocationsLV.pcf: line 40, column 35
    function initialValue_5 () : entity.Building[] {
      return imLocation.UnusedBuildings
    }
    
    // RowIterator at IMBuildingsAndLocationsLV.pcf: line 36, column 39
    function initializeVariables_36 () : void {
        unusedBuildings = imLocation.UnusedBuildings;

    }
    
    // 'sortBy' attribute on IteratorSort at IMBuildingsAndLocationsLV.pcf: line 115, column 26
    function sortBy_26 (imBuilding :  entity.IMBuilding) : java.lang.Object {
      return imBuilding.Building.BuildingNum
    }
    
    // 'sortBy' attribute on IteratorSort at IMBuildingsAndLocationsLV.pcf: line 75, column 34
    function sortBy_8 (unusedBuilding :  entity.Building) : java.lang.Object {
      return unusedBuilding.BuildingNum
    }
    
    // 'toRemove' attribute on RowIterator (id=buildingIterator) at IMBuildingsAndLocationsLV.pcf: line 112, column 41
    function toRemove_34 (imBuilding :  entity.IMBuilding) : void {
      imLocation.removeFromLineSpecificBuildings(imBuilding)
    }
    
    // 'value' attribute on TextCell (id=LocationName_Cell) at IMBuildingsAndLocationsLV.pcf: line 101, column 43
    function valueRoot_24 () : java.lang.Object {
      return imLocation
    }
    
    // 'value' attribute on MenuItemIterator (id=UnusedBuildingIterator) at IMBuildingsAndLocationsLV.pcf: line 72, column 47
    function value_12 () : entity.Building[] {
      return getLimitedNumberOfSortedUnusedBuildings(unusedBuildings, maxUnusedBuildings)
    }
    
    // 'value' attribute on TextCell (id=LocationName_Cell) at IMBuildingsAndLocationsLV.pcf: line 101, column 43
    function value_23 () : java.lang.String {
      return imLocation.DisplayName
    }
    
    // 'value' attribute on RowIterator (id=buildingIterator) at IMBuildingsAndLocationsLV.pcf: line 112, column 41
    function value_35 () : entity.IMBuilding[] {
      return imLocation.Buildings
    }
    
    // 'visible' attribute on MenuItem (id=AddMoreBuildings) at IMBuildingsAndLocationsLV.pcf: line 85, column 74
    function visible_13 () : java.lang.Boolean {
      return unusedBuildings.Count > maxUnusedBuildings
    }
    
    // 'visible' attribute on MenuItem (id=AddBuilding) at IMBuildingsAndLocationsLV.pcf: line 60, column 35
    function visible_16 () : java.lang.Boolean {
      return openForEdit
    }
    
    property get imLocation () : entity.IMLocation {
      return getIteratedValue(1) as entity.IMLocation
    }
    
    property get unusedBuildings () : entity.Building[] {
      return getVariableValue("unusedBuildings", 1) as entity.Building[]
    }
    
    property set unusedBuildings ($arg :  entity.Building[]) {
      setVariableValue("unusedBuildings", 1, $arg)
    }
    
    
  }
  
  
}