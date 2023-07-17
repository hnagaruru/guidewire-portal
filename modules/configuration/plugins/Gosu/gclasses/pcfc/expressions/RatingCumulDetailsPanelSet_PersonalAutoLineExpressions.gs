package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/pa/policy/RatingCumulDetailsPanelSet.PersonalAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingCumulDetailsPanelSet_PersonalAutoLineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/RatingCumulDetailsPanelSet.PersonalAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends RatingCumulDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 225, column 54
    function valueRoot_66 () : java.lang.Object {
      return otherCost
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 220, column 42
    function value_63 () : entity.PACost {
      return otherCost
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 225, column 54
    function value_65 () : gw.pl.currency.MonetaryAmount {
      return otherCost.ActualAmountBilling
    }
    
    property get otherCost () : entity.PACost {
      return getIteratedValue(1) as entity.PACost
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/RatingCumulDetailsPanelSet.PersonalAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PanelIteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TermAmount_Cell) at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 136, column 36
    function valueRoot_37 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 129, column 36
    function value_34 () : java.lang.String {
      return DisplayKey.get("Web.PolicyLine.Coverage", alterCoveragePatternName(cost.Coverage.Pattern.DisplayName, cost))
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TermAmount_Cell) at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 136, column 36
    function value_36 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualTermAmountBilling
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 142, column 43
    function value_40 () : java.util.Date {
      return cost.EffDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 148, column 43
    function value_44 () : java.util.Date {
      return cost.ExpDate
    }
    
    // 'value' attribute on TextCell (id=TxProration_Cell) at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 154, column 43
    function value_48 () : java.lang.String {
      return gw.api.util.StringUtil.formatNumber(cost.ProRataByDaysValue, "#0.0000")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TxAmount_Cell) at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 160, column 56
    function value_51 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualAmountBilling
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=TermAmount_Cell) at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 136, column 36
    function visible_38 () : java.lang.Boolean {
      return prorated
    }
    
    property get cost () : entity.PACost {
      return getIteratedValue(3) as entity.PACost
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/RatingCumulDetailsPanelSet.PersonalAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntry2ExpressionsImpl extends PanelIteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 43, column 55
    function initialValue_6 () : java.util.List<entity.PACost> {
      return costsForVehicle(vehicle)
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 48, column 27
    function initialValue_7 () : boolean {
      return vehicleCosts.AnyProrated
    }
    
    // PanelIterator (id=vehiclePanelIterator) at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 38, column 46
    function initializeVariables_55 () : void {
        vehicleCosts = costsForVehicle(vehicle);
  prorated = vehicleCosts.AnyProrated;

    }
    
    // 'sortBy' attribute on IteratorSort at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 118, column 36
    function sortBy_20 (cost :  entity.PACost) : java.lang.Object {
      return cost.Coverage.Pattern.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 121, column 36
    function sortBy_21 (cost :  entity.PACost) : java.lang.Object {
      return cost.EffDate
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 129, column 36
    function sortValue_22 (cost :  entity.PACost) : java.lang.Object {
      return DisplayKey.get("Web.PolicyLine.Coverage", alterCoveragePatternName(cost.Coverage.Pattern.DisplayName, cost))
    }
    
    // 'value' attribute on TextCell (id=TxProration_Cell) at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 154, column 43
    function sortValue_26 (cost :  entity.PACost) : java.lang.Object {
      return gw.api.util.StringUtil.formatNumber(cost.ProRataByDaysValue, "#0.0000")
    }
    
    // 'title' attribute on TitleBar at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 54, column 108
    function title_8 () : java.lang.String {
      return DisplayKey.get("Web.Policy.BA.Review.VehicleNumber", vehicle.VehicleNumber)
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 92, column 44
    function valueRoot_12 () : java.lang.Object {
      return vehicle
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 92, column 44
    function value_11 () : java.lang.String {
      return vehicle?.Make
    }
    
    // 'value' attribute on TextCell (id=Model_Cell) at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 96, column 45
    function value_14 () : java.lang.String {
      return vehicle?.Model
    }
    
    // 'value' attribute on TextCell (id=Vin_Cell) at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 100, column 43
    function value_17 () : java.lang.String {
      return vehicle?.Vin
    }
    
    // 'value' attribute on TextCell (id=VehicleSubTotal_Cell) at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 166, column 70
    function value_32 () : gw.pl.currency.MonetaryAmount {
      return vehicleCosts.AmountSum(period.PreferredSettlementCurrency)
    }
    
    // 'value' attribute on RowIterator (id=costIterator) at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 115, column 47
    function value_54 () : entity.PACost[] {
      return vehicleCosts.toTypedArray()
    }
    
    // 'value' attribute on TextCell (id=Year_Cell) at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 88, column 56
    function value_9 () : java.lang.String {
      return vehicle?.Year?.toString()
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=TermAmount_Cell) at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 136, column 36
    function visible_23 () : java.lang.Boolean {
      return prorated
    }
    
    property get prorated () : boolean {
      return getVariableValue("prorated", 2) as java.lang.Boolean
    }
    
    property set prorated ($arg :  boolean) {
      setVariableValue("prorated", 2, $arg)
    }
    
    property get vehicle () : entity.PersonalVehicle {
      return getIteratedValue(2) as entity.PersonalVehicle
    }
    
    property get vehicleCosts () : java.util.List<entity.PACost> {
      return getVariableValue("vehicleCosts", 2) as java.util.List<entity.PACost>
    }
    
    property set vehicleCosts ($arg :  java.util.List<entity.PACost>) {
      setVariableValue("vehicleCosts", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/RatingCumulDetailsPanelSet.PersonalAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends RatingCumulDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 51, column 26
    function sortBy_5 (vehicle :  entity.PersonalVehicle) : java.lang.Object {
      return vehicle.VehicleNumber
    }
    
    // 'subtitle' attribute on TitleBar at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 31, column 95
    function subtitle_3 () : java.lang.String {
      return garage.CompactName
    }
    
    // 'title' attribute on TitleBar at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 31, column 95
    function title_4 () : java.lang.String {
      return DisplayKey.get("Web.Policy.PA.GarageNumber", garage.LocationNum)
    }
    
    // 'value' attribute on PanelIterator (id=vehiclePanelIterator) at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 38, column 46
    function value_56 () : entity.PersonalVehicle[] {
      return period.PersonalAutoLine.VersionList.Vehicles.map( \ vl -> vl.AllVersions.last() ).where(\v -> v.GarageLocation.FixedId == garage.FixedId).toTypedArray()
    }
    
    property get garage () : entity.PolicyLocation {
      return getIteratedValue(1) as entity.PolicyLocation
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/RatingCumulDetailsPanelSet.PersonalAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingCumulDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=RatingOverrideButtonDV) at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 19, column 36
    function def_onEnter_0 (def :  pcf.RatingOverrideButtonDV) : void {
      def.onEnter(period, period.PersonalAutoLine, jobWizardHelper, CurrentLocation.InEditMode)
    }
    
    // 'def' attribute on PanelRef (id=RatingOverrideButtonDV) at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 19, column 36
    function def_refreshVariables_1 (def :  pcf.RatingOverrideButtonDV) : void {
      def.refreshVariables(period, period.PersonalAutoLine, jobWizardHelper, CurrentLocation.InEditMode)
    }
    
    // 'sortBy' attribute on IteratorSort at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 27, column 24
    function sortBy_2 (garage :  entity.PolicyLocation) : java.lang.Object {
      return garage.LocationNum
    }
    
    // 'sortBy' attribute on IteratorSort at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 207, column 28
    function sortBy_60 (otherCost :  entity.PACost) : java.lang.Object {
      return (typeof otherCost).AllTypesInHierarchy.size()
    }
    
    // 'sortBy' attribute on IteratorSort at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 210, column 28
    function sortBy_61 (otherCost :  entity.PACost) : java.lang.Object {
      return typeof otherCost
    }
    
    // 'sortBy' attribute on IteratorSort at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 213, column 28
    function sortBy_62 (otherCost :  entity.PACost) : java.lang.Object {
      return otherCost.EffDate
    }
    
    // 'value' attribute on PanelIterator (id=garageIterator) at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 24, column 43
    function value_57 () : entity.PolicyLocation[] {
      return period.VersionList.PolicyLocations.map(\l -> l.AllVersions.last()).toTypedArray()
    }
    
    // 'value' attribute on MonetaryAmountCell (id=SubTotal_Cell) at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 194, column 178
    function value_58 () : gw.pl.currency.MonetaryAmount {
      return period.PersonalAutoLine.VersionList.PACosts.flatMap(\c -> c.AllVersions).where(\c -> c.Vehicle != null).AmountSum(period.PreferredSettlementCurrency)
    }
    
    // 'value' attribute on RowIterator (id=rowiterator) at RatingCumulDetailsPanelSet.PersonalAutoLine.pcf: line 203, column 39
    function value_68 () : entity.PACost[] {
      return period.PersonalAutoLine.VersionList.PACosts.flatMap(\c -> c.AllVersions).where(\c -> c.Vehicle == null).toTypedArray()
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
    
    function costsForVehicle(vehicle : PersonalVehicle) : java.util.List<PACost> {
      var vehicleVL = vehicle.VersionList
      var allCosts = new java.util.ArrayList<PACost>()
      allCosts.addAll(vehicleVL.Costs.flatMap(\c -> c.AllVersions).toList())
      allCosts.addAll(vehicleVL.Coverages.flatMap(\c -> c.Costs).flatMap(\c -> c.AllVersions).toList())
      return allCosts
    }
    function alterCoveragePatternName(name : String, cost : PACost) : String {
      if (name.contains("PIP") ) {
        return name + " - " + (cost as PersonalAutoPIPCovCost).PAPIPCovCostType.DisplayName
      } else {
        return name
      }
    }
    
    
  }
  
  
}