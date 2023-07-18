package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cp/policy/CPBuildingsAndLocationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CPBuildingsAndLocationsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CPBuildingsAndLocationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CPBuildingsAndLocationsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at CPBuildingsAndLocationsLV.pcf: line 25, column 19
    function initialValue_0 () : int {
      return 10
    }
    
    // 'pickLocation' attribute on RowIterator at CPBuildingsAndLocationsLV.pcf: line 83, column 39
    function pickLocation_57 () : void {
      CPLocationPopup.push(cpLine, true, true, jobWizardHelper)
    }
    
    // 'sortBy' attribute on IteratorSort at CPBuildingsAndLocationsLV.pcf: line 90, column 24
    function sortBy_4 (cpLocation :  entity.CPLocation) : java.lang.Object {
      return cpLocation.Location.LocationNum
    }
    
    // 'toRemove' attribute on RowIterator at CPBuildingsAndLocationsLV.pcf: line 83, column 39
    function toRemove_58 (cpLocation :  entity.CPLocation) : void {
      cpLine.removeFromLineSpecificLocations(cpLocation)
    }
    
    // 'value' attribute on RowIterator at CPBuildingsAndLocationsLV.pcf: line 83, column 39
    function value_59 () : entity.CPLocation[] {
      return cpLine.CPLocations
    }
    
    // 'visible' attribute on TextCell (id=ActionsHeader_Cell) at CPBuildingsAndLocationsLV.pcf: line 33, column 23
    function visible_1 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'visible' attribute on TextCell (id=LastRiskAssessmentEvaluationHeader_Cell) at CPBuildingsAndLocationsLV.pcf: line 44, column 23
    function visible_2 () : java.lang.Boolean {
      return gw.api.system.PCConfigParameters.RiskAssessmentIntegrationEnabled.Value
    }
    
    // 'visible' attribute on TextCell (id=CoverageCurrency_Cell) at CPBuildingsAndLocationsLV.pcf: line 70, column 23
    function visible_3 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get cpLine () : CommercialPropertyLine {
      return getRequireValue("cpLine", 0) as CommercialPropertyLine
    }
    
    property set cpLine ($arg :  CommercialPropertyLine) {
      setRequireValue("cpLine", 0, $arg)
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
      if (buildings.Count <= 1) {
        // nothing to sort!
        return buildings
      }
      var sortedBuildings = buildings.toList().sortBy(\ building -> building.BuildingNum)
      if (sortedBuildings.Count > numBuildings) {
        sortedBuildings = sortedBuildings.subList(0, numBuildings)
      }
      return sortedBuildings.toTypedArray()
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CPBuildingsAndLocationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=UnassignedBuilding) at CPBuildingsAndLocationsLV.pcf: line 122, column 55
    function action_9 () : void {
      CPBuildingPopup.push(cpLine, cpLocation, unusedBuilding, openForEdit, jobWizardHelper)
    }
    
    // 'action' attribute on MenuItem (id=UnassignedBuilding) at CPBuildingsAndLocationsLV.pcf: line 122, column 55
    function action_dest_10 () : pcf.api.Destination {
      return pcf.CPBuildingPopup.createDestination(cpLine, cpLocation, unusedBuilding, openForEdit, jobWizardHelper)
    }
    
    // 'label' attribute on MenuItem (id=UnassignedBuilding) at CPBuildingsAndLocationsLV.pcf: line 122, column 55
    function label_11 () : java.lang.Object {
      return unusedBuilding.DisplayName
    }
    
    property get unusedBuilding () : entity.Building {
      return getIteratedValue(2) as entity.Building
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CPBuildingsAndLocationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=BuildingDescription_Cell) at CPBuildingsAndLocationsLV.pcf: line 196, column 44
    function action_32 () : void {
      CPBuildingPopup.push(cpLine, building, openForEdit, jobWizardHelper)
    }
    
    // 'action' attribute on TextCell (id=BuildingDescription_Cell) at CPBuildingsAndLocationsLV.pcf: line 196, column 44
    function action_dest_33 () : pcf.api.Destination {
      return pcf.CPBuildingPopup.createDestination(cpLine, building, openForEdit, jobWizardHelper)
    }
    
    // 'value' attribute on TextCell (id=BldgLimit_Cell) at CPBuildingsAndLocationsLV.pcf: line 204, column 27
    function valueRoot_38 () : java.lang.Object {
      return building.CPBldgCov.CPBldgCovLimitTerm
    }
    
    // 'value' attribute on TextCell (id=BusPersPropLimit_Cell) at CPBuildingsAndLocationsLV.pcf: line 209, column 27
    function valueRoot_41 () : java.lang.Object {
      return building.CPBPPCov.CPBPPCovLimitTerm
    }
    
    // 'value' attribute on TextCell (id=BusIncome_Cell) at CPBuildingsAndLocationsLV.pcf: line 214, column 27
    function valueRoot_44 () : java.lang.Object {
      return building
    }
    
    // 'value' attribute on TextCell (id=ExtraExpense_Cell) at CPBuildingsAndLocationsLV.pcf: line 219, column 27
    function valueRoot_47 () : java.lang.Object {
      return building.CPBldgExtraExpenseCov.CPBldgExtraExpenseCovLimitTerm
    }
    
    // 'value' attribute on TextCell (id=BuildingDescription_Cell) at CPBuildingsAndLocationsLV.pcf: line 196, column 44
    function value_34 () : entity.CPBuilding {
      return building
    }
    
    // 'value' attribute on TextCell (id=BldgLimit_Cell) at CPBuildingsAndLocationsLV.pcf: line 204, column 27
    function value_37 () : java.lang.String {
      return building.CPBldgCov.CPBldgCovLimitTerm.DisplayValue
    }
    
    // 'value' attribute on TextCell (id=BusPersPropLimit_Cell) at CPBuildingsAndLocationsLV.pcf: line 209, column 27
    function value_40 () : java.lang.String {
      return building.CPBPPCov.CPBPPCovLimitTerm.DisplayValue
    }
    
    // 'value' attribute on TextCell (id=BusIncome_Cell) at CPBuildingsAndLocationsLV.pcf: line 214, column 27
    function value_43 () : java.lang.String {
      return building.BusIncomeLimitSumDisplay
    }
    
    // 'value' attribute on TextCell (id=ExtraExpense_Cell) at CPBuildingsAndLocationsLV.pcf: line 219, column 27
    function value_46 () : java.lang.String {
      return building.CPBldgExtraExpenseCov.CPBldgExtraExpenseCovLimitTerm.DisplayValue
    }
    
    // 'value' attribute on TypeKeyCell (id=BuildingCoverageCurrency_Cell) at CPBuildingsAndLocationsLV.pcf: line 226, column 27
    function value_49 () : typekey.Currency {
      return building.PreferredCoverageCurrency
    }
    
    // 'visible' attribute on EmptyCell (id=spacerCellForActionsCell_Cell) at CPBuildingsAndLocationsLV.pcf: line 189, column 36
    function visible_31 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'visible' attribute on EmptyCell (id=spacerCellForLastRiskAssessmentEvaluation_Cell) at CPBuildingsAndLocationsLV.pcf: line 199, column 153
    function visible_36 () : java.lang.Boolean {
      return gw.api.system.PCConfigParameters.RiskAssessmentIntegrationEnabled.Value and cpLocation.Location.Branch.Policy.Product.Commercial
    }
    
    // 'visible' attribute on TypeKeyCell (id=BuildingCoverageCurrency_Cell) at CPBuildingsAndLocationsLV.pcf: line 226, column 27
    function visible_51 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get building () : entity.CPBuilding {
      return getIteratedValue(2) as entity.CPBuilding
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CPBuildingsAndLocationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CPBuildingsAndLocationsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=AddMoreBuildings) at CPBuildingsAndLocationsLV.pcf: line 128, column 74
    function action_14 () : void {
      MoreCPBuildingsPopup.push(cpLocation, unusedBuildings, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=RemoveLocation) at CPBuildingsAndLocationsLV.pcf: line 136, column 75
    function action_18 () : void {
      cpLine.removeFromLineSpecificLocations( cpLocation )
    }
    
    // 'action' attribute on MenuItem (id=SetPrimaryLocation) at CPBuildingsAndLocationsLV.pcf: line 142, column 75
    function action_20 () : void {
      cpLine.Branch.PrimaryLocation = cpLocation.Location
    }
    
    // 'action' attribute on TextCell (id=LocationName_Cell) at CPBuildingsAndLocationsLV.pcf: line 149, column 165
    function action_22 () : void {
      CPLocationPopup.push(cpLocation, openForEdit, true, jobWizardHelper)
    }
    
    // 'action' attribute on MenuItem (id=AddNewBuilding) at CPBuildingsAndLocationsLV.pcf: line 107, column 108
    function action_6 () : void {
      CPBuildingPopup.push(cpLine, cpLocation, openForEdit, jobWizardHelper)
    }
    
    // 'action' attribute on MenuItem (id=AddMoreBuildings) at CPBuildingsAndLocationsLV.pcf: line 128, column 74
    function action_dest_15 () : pcf.api.Destination {
      return pcf.MoreCPBuildingsPopup.createDestination(cpLocation, unusedBuildings, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=LocationName_Cell) at CPBuildingsAndLocationsLV.pcf: line 149, column 165
    function action_dest_23 () : pcf.api.Destination {
      return pcf.CPLocationPopup.createDestination(cpLocation, openForEdit, true, jobWizardHelper)
    }
    
    // 'action' attribute on MenuItem (id=AddNewBuilding) at CPBuildingsAndLocationsLV.pcf: line 107, column 108
    function action_dest_7 () : pcf.api.Destination {
      return pcf.CPBuildingPopup.createDestination(cpLine, cpLocation, openForEdit, jobWizardHelper)
    }
    
    // 'iconColor' attribute on Link (id=LastRiskAssessmentIsStaleIcon) at CPBuildingsAndLocationsLV.pcf: line 166, column 103
    function iconColor_29 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_WARNING
    }
    
    // 'initialValue' attribute on Variable at CPBuildingsAndLocationsLV.pcf: line 87, column 35
    function initialValue_5 () : entity.Building[] {
      return cpLocation.UnusedBuildings
    }
    
    // RowIterator at CPBuildingsAndLocationsLV.pcf: line 83, column 39
    function initializeVariables_56 () : void {
        unusedBuildings = cpLocation.UnusedBuildings;

    }
    
    // 'label' attribute on Link (id=LastRiskAssessmentEvaluation) at CPBuildingsAndLocationsLV.pcf: line 159, column 155
    function label_27 () : java.lang.Object {
      return cpLocation.PolicyLocation.LatestLocationRiskAssessment.FormattedAssessmentDate ?: DisplayKey.get('Web.Policy.LocationContainer.Location.RiskAssessment.NoEvaluationDate')
    }
    
    // 'sortBy' attribute on IteratorSort at CPBuildingsAndLocationsLV.pcf: line 182, column 26
    function sortBy_30 (building :  entity.CPBuilding) : java.lang.Object {
      return building.Building.BuildingNum
    }
    
    // 'sortBy' attribute on IteratorSort at CPBuildingsAndLocationsLV.pcf: line 118, column 34
    function sortBy_8 (unusedBuilding :  entity.Building) : java.lang.Object {
      return unusedBuilding.BuildingNum
    }
    
    // 'toRemove' attribute on RowIterator (id=buildingIterator) at CPBuildingsAndLocationsLV.pcf: line 179, column 41
    function toRemove_54 (building :  entity.CPBuilding) : void {
      cpLocation.removeFromLineSpecificBuildings(building)
    }
    
    // 'value' attribute on MenuItemIterator (id=UnusedBuildingIterator) at CPBuildingsAndLocationsLV.pcf: line 115, column 47
    function value_12 () : entity.Building[] {
      return getLimitedNumberOfSortedUnusedBuildings(unusedBuildings, maxUnusedBuildings)
    }
    
    // 'value' attribute on TextCell (id=LocationName_Cell) at CPBuildingsAndLocationsLV.pcf: line 149, column 165
    function value_24 () : java.lang.String {
      return cpLocation.Location.PrimaryLoc ? DisplayKey.get("Web.Policy.CP.Location.MarkPrimary", cpLocation.DisplayName) : cpLocation.DisplayName
    }
    
    // 'value' attribute on RowIterator (id=buildingIterator) at CPBuildingsAndLocationsLV.pcf: line 179, column 41
    function value_55 () : entity.CPBuilding[] {
      return cpLocation.Buildings
    }
    
    // 'visible' attribute on MenuItem (id=AddMoreBuildings) at CPBuildingsAndLocationsLV.pcf: line 128, column 74
    function visible_13 () : java.lang.Boolean {
      return unusedBuildings.Count > maxUnusedBuildings
    }
    
    // 'visible' attribute on MenuItem (id=AddBuilding) at CPBuildingsAndLocationsLV.pcf: line 103, column 35
    function visible_16 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'visible' attribute on MenuItem (id=RemoveLocation) at CPBuildingsAndLocationsLV.pcf: line 136, column 75
    function visible_17 () : java.lang.Boolean {
      return openForEdit and not cpLocation.Location.PrimaryLoc
    }
    
    // 'visible' attribute on Link (id=LastRiskAssessmentEvaluation) at CPBuildingsAndLocationsLV.pcf: line 159, column 155
    function visible_26 () : java.lang.Boolean {
      return gw.api.system.PCConfigParameters.RiskAssessmentIntegrationEnabled.Value and cpLocation.Location.Branch.Policy.Product.Commercial
    }
    
    // 'visible' attribute on Link (id=LastRiskAssessmentIsStaleIcon) at CPBuildingsAndLocationsLV.pcf: line 166, column 103
    function visible_28 () : java.lang.Boolean {
      return cpLocation.PolicyLocation.LatestLocationRiskAssessment.IsRiskAssessmentStale
    }
    
    property get cpLocation () : entity.CPLocation {
      return getIteratedValue(1) as entity.CPLocation
    }
    
    property get unusedBuildings () : entity.Building[] {
      return getVariableValue("unusedBuildings", 1) as entity.Building[]
    }
    
    property set unusedBuildings ($arg :  entity.Building[]) {
      setVariableValue("unusedBuildings", 1, $arg)
    }
    
    
  }
  
  
}