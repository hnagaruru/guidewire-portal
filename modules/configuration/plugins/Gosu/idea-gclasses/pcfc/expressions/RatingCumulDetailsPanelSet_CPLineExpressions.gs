package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cp/policy/RatingCumulDetailsPanelSet.CPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingCumulDetailsPanelSet_CPLineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/RatingCumulDetailsPanelSet.CPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=BuildingNumber_Cell) at RatingCumulDetailsPanelSet.CPLine.pcf: line 101, column 31
    function action_12 () : void {
      CPBuildingCostDetailsPopup.push(costsByBuilding.get(building), building)
    }
    
    // 'action' attribute on TextCell (id=Description_Cell) at RatingCumulDetailsPanelSet.CPLine.pcf: line 107, column 47
    function action_17 () : void {
      CPBuildingCostDetailsPopup.push(costsByBuilding.get(building), building)
    }
    
    // 'action' attribute on TextCell (id=BuildingNumber_Cell) at RatingCumulDetailsPanelSet.CPLine.pcf: line 101, column 31
    function action_dest_13 () : pcf.api.Destination {
      return pcf.CPBuildingCostDetailsPopup.createDestination(costsByBuilding.get(building), building)
    }
    
    // 'action' attribute on TextCell (id=Description_Cell) at RatingCumulDetailsPanelSet.CPLine.pcf: line 107, column 47
    function action_dest_18 () : pcf.api.Destination {
      return pcf.CPBuildingCostDetailsPopup.createDestination(costsByBuilding.get(building), building)
    }
    
    // 'value' attribute on TextCell (id=BuildingNumber_Cell) at RatingCumulDetailsPanelSet.CPLine.pcf: line 101, column 31
    function valueRoot_15 () : java.lang.Object {
      return building.Building
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RatingCumulDetailsPanelSet.CPLine.pcf: line 107, column 47
    function valueRoot_20 () : java.lang.Object {
      return building
    }
    
    // 'value' attribute on TextCell (id=BuildingNumber_Cell) at RatingCumulDetailsPanelSet.CPLine.pcf: line 101, column 31
    function value_14 () : java.lang.Integer {
      return building.Building.BuildingNum
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RatingCumulDetailsPanelSet.CPLine.pcf: line 107, column 47
    function value_19 () : java.lang.String {
      return building.DisplayName
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at RatingCumulDetailsPanelSet.CPLine.pcf: line 114, column 31
    function value_22 () : gw.pl.currency.MonetaryAmount {
      return costsByBuilding.get(building).AmountSum(period.PreferredSettlementCurrency)
    }
    
    property get building () : entity.CPBuilding {
      return getIteratedValue(3) as entity.CPBuilding
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/RatingCumulDetailsPanelSet.CPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends RatingCumulDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at RatingCumulDetailsPanelSet.CPLine.pcf: line 153, column 29
    function valueRoot_33 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RatingCumulDetailsPanelSet.CPLine.pcf: line 145, column 42
    function value_30 () : entity.CPCost {
      return cost
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at RatingCumulDetailsPanelSet.CPLine.pcf: line 153, column 29
    function value_32 () : typekey.Jurisdiction {
      return cost.State
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at RatingCumulDetailsPanelSet.CPLine.pcf: line 162, column 29
    function value_35 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualAmountBilling
    }
    
    property get cost () : entity.CPCost {
      return getIteratedValue(1) as entity.CPCost
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/RatingCumulDetailsPanelSet.CPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.CPLine.pcf: line 72, column 96
    function initialValue_6 () : java.util.Map<entity.CPBuilding, java.util.Set<entity.CPCost>> {
      return costsByLocation.get(location).byFixedBuilding()
    }
    
    // RowIterator (id=LocationIterator) at RatingCumulDetailsPanelSet.CPLine.pcf: line 68, column 43
    function initializeVariables_25 () : void {
        costsByBuilding = costsByLocation.get(location).byFixedBuilding();

    }
    
    // 'sortBy' attribute on IteratorSort at RatingCumulDetailsPanelSet.CPLine.pcf: line 93, column 30
    function sortBy_10 (building :  entity.CPBuilding) : java.lang.Object {
      return building.Building.BuildingNum
    }
    
    // 'footerSumValue' attribute on RowIterator (id=BuildingIterator) at RatingCumulDetailsPanelSet.CPLine.pcf: line 114, column 31
    function sumValue_11 (building :  entity.CPBuilding) : java.lang.Object {
      return costsByBuilding.get(building).AmountSum(period.PreferredSettlementCurrency)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RatingCumulDetailsPanelSet.CPLine.pcf: line 82, column 45
    function valueRoot_8 () : java.lang.Object {
      return location
    }
    
    // 'value' attribute on RowIterator (id=BuildingIterator) at RatingCumulDetailsPanelSet.CPLine.pcf: line 90, column 45
    function value_24 () : entity.CPBuilding[] {
      return costsByBuilding.Keys.toTypedArray()
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RatingCumulDetailsPanelSet.CPLine.pcf: line 82, column 45
    function value_7 () : java.lang.String {
      return location.DisplayName
    }
    
    property get costsByBuilding () : java.util.Map<entity.CPBuilding, java.util.Set<entity.CPCost>> {
      return getVariableValue("costsByBuilding", 2) as java.util.Map<entity.CPBuilding, java.util.Set<entity.CPCost>>
    }
    
    property set costsByBuilding ($arg :  java.util.Map<entity.CPBuilding, java.util.Set<entity.CPCost>>) {
      setVariableValue("costsByBuilding", 2, $arg)
    }
    
    property get location () : entity.CPLocation {
      return getIteratedValue(2) as entity.CPLocation
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/RatingCumulDetailsPanelSet.CPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListViewPanelExpressionsImpl extends RatingCumulDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.CPLine.pcf: line 39, column 39
    function initialValue_4 () : entity.CPLocation[] {
      return costsByLocation.Keys.where(\ c -> c.Location != null).toTypedArray()
    }
    
    // 'sortBy' attribute on IteratorSort at RatingCumulDetailsPanelSet.CPLine.pcf: line 75, column 28
    function sortBy_5 (location :  entity.CPLocation) : java.lang.Object {
      return location.Location.LocationNum
    }
    
    // 'value' attribute on RowIterator (id=LocationIterator) at RatingCumulDetailsPanelSet.CPLine.pcf: line 68, column 43
    function value_26 () : entity.CPLocation[] {
      return locations
    }
    
    property get locations () : entity.CPLocation[] {
      return getVariableValue("locations", 1) as entity.CPLocation[]
    }
    
    property set locations ($arg :  entity.CPLocation[]) {
      setVariableValue("locations", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/RatingCumulDetailsPanelSet.CPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingCumulDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=RatingOverrideButtonDV) at RatingCumulDetailsPanelSet.CPLine.pcf: line 27, column 36
    function def_onEnter_2 (def :  pcf.RatingOverrideButtonDV) : void {
      def.onEnter(period, period.CPLine, jobWizardHelper, CurrentLocation.InEditMode)
    }
    
    // 'def' attribute on PanelRef (id=RatingOverrideButtonDV) at RatingCumulDetailsPanelSet.CPLine.pcf: line 27, column 36
    function def_refreshVariables_3 (def :  pcf.RatingOverrideButtonDV) : void {
      def.refreshVariables(period, period.CPLine, jobWizardHelper, CurrentLocation.InEditMode)
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.CPLine.pcf: line 20, column 50
    function initialValue_0 () : java.util.Set<entity.CPCost> {
      return period.CPLine.Costs.cast(CPCost)
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.CPLine.pcf: line 24, column 90
    function initialValue_1 () : java.util.Map<entity.CPLocation, java.util.Set<entity.CPCost>> {
      return allCosts.toSet().byFixedLocation()
    }
    
    // 'sortBy' attribute on IteratorSort at RatingCumulDetailsPanelSet.CPLine.pcf: line 136, column 28
    function sortBy_27 (cost :  entity.CPCost) : java.lang.Object {
      return cost.State
    }
    
    // '$$sumValue' attribute on RowIterator (id=NonLocationCostIterator) at RatingCumulDetailsPanelSet.CPLine.pcf: line 162, column 29
    function sumValueRoot_29 (cost :  entity.CPCost) : java.lang.Object {
      return cost
    }
    
    // 'footerSumValue' attribute on RowIterator (id=NonLocationCostIterator) at RatingCumulDetailsPanelSet.CPLine.pcf: line 162, column 29
    function sumValue_28 (cost :  entity.CPCost) : java.lang.Object {
      return cost.ActualAmountBilling
    }
    
    // 'value' attribute on RowIterator (id=NonLocationCostIterator) at RatingCumulDetailsPanelSet.CPLine.pcf: line 133, column 39
    function value_38 () : entity.CPCost[] {
      return allCosts.where(\ cost -> cost.Location == null).toTypedArray()
    }
    
    property get allCosts () : java.util.Set<entity.CPCost> {
      return getVariableValue("allCosts", 0) as java.util.Set<entity.CPCost>
    }
    
    property set allCosts ($arg :  java.util.Set<entity.CPCost>) {
      setVariableValue("allCosts", 0, $arg)
    }
    
    property get costsByLocation () : java.util.Map<entity.CPLocation, java.util.Set<entity.CPCost>> {
      return getVariableValue("costsByLocation", 0) as java.util.Map<entity.CPLocation, java.util.Set<entity.CPCost>>
    }
    
    property set costsByLocation ($arg :  java.util.Map<entity.CPLocation, java.util.Set<entity.CPCost>>) {
      setVariableValue("costsByLocation", 0, $arg)
    }
    
    property get isEditable () : boolean {
      return getRequireValue("isEditable", 0) as java.lang.Boolean
    }
    
    property set isEditable ($arg :  boolean) {
      setRequireValue("isEditable", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    
  }
  
  
}