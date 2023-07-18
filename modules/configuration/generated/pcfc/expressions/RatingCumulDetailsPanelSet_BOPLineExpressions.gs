package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/bop/policy/RatingCumulDetailsPanelSet.BOPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingCumulDetailsPanelSet_BOPLineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/RatingCumulDetailsPanelSet.BOPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RatingCumulDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.BOPLine.pcf: line 101, column 28
    function initialValue_26 () : String {
      return otherCost typeis BOPAddnlInsuredCost ? otherCost.DisplayNameWM : otherCost.DisplayName
    }
    
    // RowIterator at RatingCumulDetailsPanelSet.BOPLine.pcf: line 97, column 40
    function initializeVariables_35 () : void {
        displayName = otherCost typeis BOPAddnlInsuredCost ? otherCost.DisplayNameWM : otherCost.DisplayName;

    }
    
    // 'value' attribute on TypeKeyCell (id=Jurisdiction_Cell) at RatingCumulDetailsPanelSet.BOPLine.pcf: line 125, column 49
    function valueRoot_30 () : java.lang.Object {
      return otherCost
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RatingCumulDetailsPanelSet.BOPLine.pcf: line 119, column 36
    function value_27 () : java.lang.String {
      return displayName
    }
    
    // 'value' attribute on TypeKeyCell (id=Jurisdiction_Cell) at RatingCumulDetailsPanelSet.BOPLine.pcf: line 125, column 49
    function value_29 () : typekey.Jurisdiction {
      return otherCost.State
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at RatingCumulDetailsPanelSet.BOPLine.pcf: line 133, column 29
    function value_32 () : gw.pl.currency.MonetaryAmount {
      return otherCost.ActualAmountBilling
    }
    
    property get displayName () : String {
      return getVariableValue("displayName", 1) as String
    }
    
    property set displayName ($arg :  String) {
      setVariableValue("displayName", 1, $arg)
    }
    
    property get otherCost () : entity.BOPCost {
      return getIteratedValue(1) as entity.BOPCost
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/RatingCumulDetailsPanelSet.BOPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntry2ExpressionsImpl extends PanelIteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TitleBar (id=BuildingLink) at RatingCumulDetailsPanelSet.BOPLine.pcf: line 76, column 47
    function action_13 () : void {
      BOPBuildingPopup.push(period.BOPLine, location, building, isEditable, false, jobWizardHelper)
    }
    
    // 'action' attribute on TitleBar (id=BuildingLink) at RatingCumulDetailsPanelSet.BOPLine.pcf: line 76, column 47
    function action_dest_14 () : pcf.api.Destination {
      return pcf.BOPBuildingPopup.createDestination(period.BOPLine, location, building, isEditable, false, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RatingCumulDetailsPanelSet.BOPLine.pcf: line 72, column 81
    function def_onEnter_16 (def :  pcf.BOPCoverageCostLV) : void {
      def.onEnter(buildingCoveragePremiumMap.get(building))
    }
    
    // 'def' attribute on PanelRef at RatingCumulDetailsPanelSet.BOPLine.pcf: line 72, column 81
    function def_refreshVariables_17 (def :  pcf.BOPCoverageCostLV) : void {
      def.refreshVariables(buildingCoveragePremiumMap.get(building))
    }
    
    // 'title' attribute on TitleBar (id=BuildingLink) at RatingCumulDetailsPanelSet.BOPLine.pcf: line 76, column 47
    function title_15 () : java.lang.String {
      return building.DisplayName
    }
    
    property get building () : entity.BOPBuilding {
      return getIteratedValue(2) as entity.BOPBuilding
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/RatingCumulDetailsPanelSet.BOPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends RatingCumulDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at RatingCumulDetailsPanelSet.BOPLine.pcf: line 59, column 75
    function def_onEnter_10 (def :  pcf.BOPCoverageCostLV) : void {
      def.onEnter(buildingCoveragePremiumMap.get(null))
    }
    
    // 'def' attribute on PanelRef at RatingCumulDetailsPanelSet.BOPLine.pcf: line 59, column 75
    function def_refreshVariables_11 (def :  pcf.BOPCoverageCostLV) : void {
      def.refreshVariables(buildingCoveragePremiumMap.get(null))
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.BOPLine.pcf: line 50, column 94
    function initialValue_8 () : java.util.Map<entity.BOPBuilding, java.util.Set<entity.BOPCost>> {
      return locationCoveragePremiumMap.get(location).byFixedBuilding()
    }
    
    // PanelIterator (id=locationIterator) at RatingCumulDetailsPanelSet.BOPLine.pcf: line 45, column 40
    function initializeVariables_19 () : void {
        buildingCoveragePremiumMap = locationCoveragePremiumMap.get(location).byFixedBuilding();

    }
    
    // 'sortBy' attribute on IteratorSort at RatingCumulDetailsPanelSet.BOPLine.pcf: line 70, column 30
    function sortBy_12 (building :  entity.BOPBuilding) : java.lang.Object {
      return building.FixedId
    }
    
    // 'title' attribute on TitleBar at RatingCumulDetailsPanelSet.BOPLine.pcf: line 56, column 146
    function title_9 () : java.lang.String {
      return DisplayKey.get("Web.Policy.BOP.Quote.Location.Title", location.Location.LocationNum, location.Location.CompactName)
    }
    
    // 'value' attribute on PanelIterator (id=buildingIterator) at RatingCumulDetailsPanelSet.BOPLine.pcf: line 67, column 46
    function value_18 () : entity.BOPBuilding[] {
      return buildingCoveragePremiumMap.Keys.where(\ b -> b != null).toTypedArray()
    }
    
    property get buildingCoveragePremiumMap () : java.util.Map<entity.BOPBuilding, java.util.Set<entity.BOPCost>> {
      return getVariableValue("buildingCoveragePremiumMap", 1) as java.util.Map<entity.BOPBuilding, java.util.Set<entity.BOPCost>>
    }
    
    property set buildingCoveragePremiumMap ($arg :  java.util.Map<entity.BOPBuilding, java.util.Set<entity.BOPCost>>) {
      setVariableValue("buildingCoveragePremiumMap", 1, $arg)
    }
    
    property get location () : entity.BOPLocation {
      return getIteratedValue(1) as entity.BOPLocation
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/RatingCumulDetailsPanelSet.BOPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingCumulDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=RatingOverrideButtonDV) at RatingCumulDetailsPanelSet.BOPLine.pcf: line 34, column 36
    function def_onEnter_3 (def :  pcf.RatingOverrideButtonDV) : void {
      def.onEnter(period, period.BOPLine, jobWizardHelper, CurrentLocation.InEditMode)
    }
    
    // 'def' attribute on PanelRef at RatingCumulDetailsPanelSet.BOPLine.pcf: line 36, column 58
    function def_onEnter_5 (def :  pcf.BOPCoverageCostLV) : void {
      def.onEnter(lineLevelCoveragePremiums)
    }
    
    // 'def' attribute on PanelRef (id=RatingOverrideButtonDV) at RatingCumulDetailsPanelSet.BOPLine.pcf: line 34, column 36
    function def_refreshVariables_4 (def :  pcf.RatingOverrideButtonDV) : void {
      def.refreshVariables(period, period.BOPLine, jobWizardHelper, CurrentLocation.InEditMode)
    }
    
    // 'def' attribute on PanelRef at RatingCumulDetailsPanelSet.BOPLine.pcf: line 36, column 58
    function def_refreshVariables_6 (def :  pcf.BOPCoverageCostLV) : void {
      def.refreshVariables(lineLevelCoveragePremiums)
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.BOPLine.pcf: line 21, column 91
    function initialValue_0 () : java.util.Map<java.lang.Boolean, java.util.Set<entity.BOPCost>> {
      return period.BOPLine.Costs.cast(BOPCost).toSet().byCoveragePremium()
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.BOPLine.pcf: line 26, column 92
    function initialValue_1 () : java.util.Map<entity.BOPLocation, java.util.Set<entity.BOPCost>> {
      return coverageOrOtherPremiumMap.get(true).byFixedLocation()
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.BOPLine.pcf: line 31, column 51
    function initialValue_2 () : java.util.Set<entity.BOPCost> {
      return locationCoveragePremiumMap.get(null)
    }
    
    // 'sortBy' attribute on IteratorSort at RatingCumulDetailsPanelSet.BOPLine.pcf: line 105, column 28
    function sortBy_21 (otherCost :  entity.BOPCost) : java.lang.Object {
      return (typeof otherCost).AllTypesInHierarchy.size()
    }
    
    // 'sortBy' attribute on IteratorSort at RatingCumulDetailsPanelSet.BOPLine.pcf: line 108, column 28
    function sortBy_22 (otherCost :  entity.BOPCost) : java.lang.Object {
      return typeof otherCost
    }
    
    // 'sortBy' attribute on IteratorSort at RatingCumulDetailsPanelSet.BOPLine.pcf: line 111, column 28
    function sortBy_23 (otherCost :  entity.BOPCost) : java.lang.Object {
      return otherCost.EffDate
    }
    
    // 'sortBy' attribute on IteratorSort at RatingCumulDetailsPanelSet.BOPLine.pcf: line 53, column 24
    function sortBy_7 (location :  entity.BOPLocation) : java.lang.Object {
      return location.FixedId
    }
    
    // '$$sumValue' attribute on RowIterator at RatingCumulDetailsPanelSet.BOPLine.pcf: line 133, column 29
    function sumValueRoot_25 (otherCost :  entity.BOPCost) : java.lang.Object {
      return otherCost
    }
    
    // 'footerSumValue' attribute on RowIterator at RatingCumulDetailsPanelSet.BOPLine.pcf: line 133, column 29
    function sumValue_24 (otherCost :  entity.BOPCost) : java.lang.Object {
      return otherCost.ActualAmountBilling
    }
    
    // 'value' attribute on PanelIterator (id=locationIterator) at RatingCumulDetailsPanelSet.BOPLine.pcf: line 45, column 40
    function value_20 () : entity.BOPLocation[] {
      return locationCoveragePremiumMap.Keys.where(\ l -> l != null).toTypedArray()
    }
    
    // 'value' attribute on RowIterator at RatingCumulDetailsPanelSet.BOPLine.pcf: line 97, column 40
    function value_36 () : entity.BOPCost[] {
      return coverageOrOtherPremiumMap.get(false).toTypedArray()
    }
    
    property get coverageOrOtherPremiumMap () : java.util.Map<java.lang.Boolean, java.util.Set<entity.BOPCost>> {
      return getVariableValue("coverageOrOtherPremiumMap", 0) as java.util.Map<java.lang.Boolean, java.util.Set<entity.BOPCost>>
    }
    
    property set coverageOrOtherPremiumMap ($arg :  java.util.Map<java.lang.Boolean, java.util.Set<entity.BOPCost>>) {
      setVariableValue("coverageOrOtherPremiumMap", 0, $arg)
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
    
    property get lineLevelCoveragePremiums () : java.util.Set<entity.BOPCost> {
      return getVariableValue("lineLevelCoveragePremiums", 0) as java.util.Set<entity.BOPCost>
    }
    
    property set lineLevelCoveragePremiums ($arg :  java.util.Set<entity.BOPCost>) {
      setVariableValue("lineLevelCoveragePremiums", 0, $arg)
    }
    
    property get locationCoveragePremiumMap () : java.util.Map<entity.BOPLocation, java.util.Set<entity.BOPCost>> {
      return getVariableValue("locationCoveragePremiumMap", 0) as java.util.Map<entity.BOPLocation, java.util.Set<entity.BOPCost>>
    }
    
    property set locationCoveragePremiumMap ($arg :  java.util.Map<entity.BOPLocation, java.util.Set<entity.BOPCost>>) {
      setVariableValue("locationCoveragePremiumMap", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    
  }
  
  
}