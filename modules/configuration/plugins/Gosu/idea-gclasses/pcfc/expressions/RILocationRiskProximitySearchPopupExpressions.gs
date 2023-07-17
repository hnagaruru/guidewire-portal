package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/RILocationRiskProximitySearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RILocationRiskProximitySearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/RILocationRiskProximitySearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ID_Cell) at RILocationRiskProximitySearchPopup.pcf: line 146, column 33
    function valueRoot_57 () : java.lang.Object {
      return locationRisk
    }
    
    // 'value' attribute on TextCell (id=LocationGroup_Cell) at RILocationRiskProximitySearchPopup.pcf: line 198, column 33
    function valueRoot_79 () : java.lang.Object {
      return locationRisk.asOf(criteria.EffectiveDate)
    }
    
    // 'value' attribute on TextCell (id=ID_Cell) at RILocationRiskProximitySearchPopup.pcf: line 146, column 33
    function value_56 () : java.lang.String {
      return locationRisk.RiskNumber
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at RILocationRiskProximitySearchPopup.pcf: line 151, column 100
    function value_59 () : java.lang.String {
      return locationRisk.AccountLocation.addressString(",", false, false)
    }
    
    // 'value' attribute on TextCell (id=Distance_Cell) at RILocationRiskProximitySearchPopup.pcf: line 159, column 33
    function value_61 () : java.math.BigDecimal {
      return targetLocationRisk.distanceToLocationRisk(locationRisk, criteria.LocSearchCriteria.UnitOfDistance)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RILocationRiskProximitySearchPopup.pcf: line 164, column 53
    function value_63 () : java.lang.String {
      return locationRisk.Description
    }
    
    // 'value' attribute on TextCell (id=Account_Cell) at RILocationRiskProximitySearchPopup.pcf: line 170, column 33
    function value_66 () : java.lang.String {
      return locationRisk.AccountNumber
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at RILocationRiskProximitySearchPopup.pcf: line 176, column 33
    function value_69 () : java.lang.String {
      return locationRisk.PolicyNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageGroup_Cell) at RILocationRiskProximitySearchPopup.pcf: line 183, column 33
    function value_72 () : typekey.RICoverageGroupType {
      return locationRisk.CoverageGroup
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TIV_Cell) at RILocationRiskProximitySearchPopup.pcf: line 191, column 33
    function value_75 () : gw.pl.currency.MonetaryAmount {
      return locationRisk.TotalInsuredValue
    }
    
    // 'value' attribute on TextCell (id=LocationGroup_Cell) at RILocationRiskProximitySearchPopup.pcf: line 198, column 33
    function value_78 () : java.lang.String {
      return locationRisk.asOf(criteria.EffectiveDate).LocationRiskGroup
    }
    
    property get locationRisk () : entity.LocationRisk {
      return getIteratedValue(2) as entity.LocationRisk
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/RILocationRiskProximitySearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RILocationRiskProximitySearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (targetLocationRisk :  LocationRisk) : int {
      return 0
    }
    
    // 'initialValue' attribute on Variable at RILocationRiskProximitySearchPopup.pcf: line 17, column 75
    function initialValue_0 () : java.util.List<gw.api.productmodel.PolicyLinePattern> {
      return gw.api.system.PCDependenciesGateway.getProductModel().getAllInstances(gw.api.productmodel.PolicyLinePattern).orderBy(\ p -> p.PublicID).toList()
    }
    
    // 'initialValue' attribute on Variable at RILocationRiskProximitySearchPopup.pcf: line 24, column 22
    function initialValue_1 () : String {
      return targetLocationRisk.LocationRiskGroup
    }
    
    override property get CurrentLocation () : pcf.RILocationRiskProximitySearchPopup {
      return super.CurrentLocation as pcf.RILocationRiskProximitySearchPopup
    }
    
    property get allPolicyLinePatterns () : java.util.List<gw.api.productmodel.PolicyLinePattern> {
      return getVariableValue("allPolicyLinePatterns", 0) as java.util.List<gw.api.productmodel.PolicyLinePattern>
    }
    
    property set allPolicyLinePatterns ($arg :  java.util.List<gw.api.productmodel.PolicyLinePattern>) {
      setVariableValue("allPolicyLinePatterns", 0, $arg)
    }
    
    property get newLocationGroup () : String {
      return getVariableValue("newLocationGroup", 0) as String
    }
    
    property set newLocationGroup ($arg :  String) {
      setVariableValue("newLocationGroup", 0, $arg)
    }
    
    property get searchLocationGroup () : String {
      return getVariableValue("searchLocationGroup", 0) as String
    }
    
    property set searchLocationGroup ($arg :  String) {
      setVariableValue("searchLocationGroup", 0, $arg)
    }
    
    property get targetLocationRisk () : LocationRisk {
      return getVariableValue("targetLocationRisk", 0) as LocationRisk
    }
    
    property set targetLocationRisk ($arg :  LocationRisk) {
      setVariableValue("targetLocationRisk", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/RILocationRiskProximitySearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends RILocationRiskProximitySearchPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=AssignButton) at RILocationRiskProximitySearchPopup.pcf: line 128, column 95
    function allCheckedRowsAction_44 (CheckedValues :  entity.LocationRisk[], CheckedValuesErrors :  java.util.Map) : void {
      gw.web.admin.ReinsuranceUIHelper.assignLocGroup(CheckedValues, criteria.EffectiveDate, newLocationGroup, targetLocationRisk, CurrentLocation)
    }
    
    // 'def' attribute on InputSetRef at RILocationRiskProximitySearchPopup.pcf: line 108, column 58
    function def_onEnter_36 (def :  pcf.SearchLinksInputSet) : void {
      def.onEnter(true, true)
    }
    
    // 'def' attribute on InputSetRef at RILocationRiskProximitySearchPopup.pcf: line 108, column 58
    function def_refreshVariables_37 (def :  pcf.SearchLinksInputSet) : void {
      def.refreshVariables(true, true)
    }
    
    // 'value' attribute on TextInput (id=Radius_Input) at RILocationRiskProximitySearchPopup.pcf: line 64, column 48
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.LocSearchCriteria.Radius = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=Units_Input) at RILocationRiskProximitySearchPopup.pcf: line 71, column 53
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.LocSearchCriteria.UnitOfDistance = (__VALUE_TO_SET as typekey.UnitOfDistance)
    }
    
    // 'value' attribute on TextInput (id=SearchLocationGroup_Input) at RILocationRiskProximitySearchPopup.pcf: line 77, column 46
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchLocationGroup = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=CoverageEffectiveDate_Input) at RILocationRiskProximitySearchPopup.pcf: line 83, column 49
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.EffectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=CoverageGroup_Input) at RILocationRiskProximitySearchPopup.pcf: line 91, column 58
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.CoverageGroup = (__VALUE_TO_SET as typekey.RICoverageGroupType)
    }
    
    // 'value' attribute on RangeInput (id=LineOfBusiness_Input) at RILocationRiskProximitySearchPopup.pcf: line 102, column 70
    function defaultSetter_30 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.LocSearchCriteria.LOBs = (__VALUE_TO_SET as gw.api.productmodel.PolicyLinePattern[])
    }
    
    // 'value' attribute on TextValue (id=LocationGroupName) at RILocationRiskProximitySearchPopup.pcf: line 122, column 45
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      newLocationGroup = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextValue (id=LocationGroupName) at RILocationRiskProximitySearchPopup.pcf: line 122, column 45
    function editable_38 () : java.lang.Boolean {
      return !searchResults.IsEmpty
    }
    
    // 'searchCriteria' attribute on SearchPanel at RILocationRiskProximitySearchPopup.pcf: line 34, column 44
    function searchCriteria_83 () : gw.reinsurance.search.RILocationRiskProximitySearchCriteria {
      return targetLocationRisk.createSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel at RILocationRiskProximitySearchPopup.pcf: line 34, column 44
    function search_82 () : java.lang.Object {
      return gw.web.admin.ReinsuranceUIHelper.searchAndFilterByLocationGroup(criteria, searchLocationGroup, criteria.EffectiveDate)
    }
    
    // 'value' attribute on TextCell (id=ID_Cell) at RILocationRiskProximitySearchPopup.pcf: line 146, column 33
    function sortValue_45 (locationRisk :  entity.LocationRisk) : java.lang.Object {
      return locationRisk.RiskNumber
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at RILocationRiskProximitySearchPopup.pcf: line 151, column 100
    function sortValue_46 (locationRisk :  entity.LocationRisk) : java.lang.Object {
      return locationRisk.AccountLocation.addressString(",", false, false)
    }
    
    // 'value' attribute on TextCell (id=Distance_Cell) at RILocationRiskProximitySearchPopup.pcf: line 159, column 33
    function sortValue_47 (locationRisk :  entity.LocationRisk) : java.lang.Object {
      return targetLocationRisk.distanceToLocationRisk(locationRisk, criteria.LocSearchCriteria.UnitOfDistance)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RILocationRiskProximitySearchPopup.pcf: line 164, column 53
    function sortValue_48 (locationRisk :  entity.LocationRisk) : java.lang.Object {
      return locationRisk.Description
    }
    
    // 'value' attribute on TextCell (id=Account_Cell) at RILocationRiskProximitySearchPopup.pcf: line 170, column 33
    function sortValue_49 (locationRisk :  entity.LocationRisk) : java.lang.Object {
      return locationRisk.AccountNumber
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at RILocationRiskProximitySearchPopup.pcf: line 176, column 33
    function sortValue_50 (locationRisk :  entity.LocationRisk) : java.lang.Object {
      return locationRisk.PolicyNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageGroup_Cell) at RILocationRiskProximitySearchPopup.pcf: line 183, column 33
    function sortValue_51 (locationRisk :  entity.LocationRisk) : java.lang.Object {
      return locationRisk.CoverageGroup
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TIV_Cell) at RILocationRiskProximitySearchPopup.pcf: line 191, column 33
    function sortValue_52 (locationRisk :  entity.LocationRisk) : java.lang.Object {
      return locationRisk.TotalInsuredValue
    }
    
    // 'value' attribute on TextCell (id=LocationGroup_Cell) at RILocationRiskProximitySearchPopup.pcf: line 198, column 33
    function sortValue_53 (locationRisk :  entity.LocationRisk) : java.lang.Object {
      return locationRisk.asOf(criteria.EffectiveDate).LocationRiskGroup
    }
    
    // '$$sumValue' attribute on RowIterator (id=LocationRiskIterator) at RILocationRiskProximitySearchPopup.pcf: line 191, column 33
    function sumValueRoot_55 (locationRisk :  entity.LocationRisk) : java.lang.Object {
      return locationRisk
    }
    
    // 'footerSumValue' attribute on RowIterator (id=LocationRiskIterator) at RILocationRiskProximitySearchPopup.pcf: line 191, column 33
    function sumValue_54 (locationRisk :  entity.LocationRisk) : java.lang.Object {
      return locationRisk.TotalInsuredValue
    }
    
    // 'valueRange' attribute on RangeInput (id=LineOfBusiness_Input) at RILocationRiskProximitySearchPopup.pcf: line 102, column 70
    function valueRange_32 () : java.lang.Object {
      return allPolicyLinePatterns
    }
    
    // 'value' attribute on TextInput (id=Radius_Input) at RILocationRiskProximitySearchPopup.pcf: line 64, column 48
    function valueRoot_12 () : java.lang.Object {
      return criteria.LocSearchCriteria
    }
    
    // 'value' attribute on DateInput (id=CoverageEffectiveDate_Input) at RILocationRiskProximitySearchPopup.pcf: line 83, column 49
    function valueRoot_23 () : java.lang.Object {
      return criteria
    }
    
    // 'value' attribute on TextInput (id=LocationCode_Input) at RILocationRiskProximitySearchPopup.pcf: line 45, column 56
    function valueRoot_3 () : java.lang.Object {
      return targetLocationRisk
    }
    
    // 'value' attribute on TextInput (id=Radius_Input) at RILocationRiskProximitySearchPopup.pcf: line 64, column 48
    function value_10 () : java.lang.Integer {
      return criteria.LocSearchCriteria.Radius
    }
    
    // 'value' attribute on TypeKeyInput (id=Units_Input) at RILocationRiskProximitySearchPopup.pcf: line 71, column 53
    function value_14 () : typekey.UnitOfDistance {
      return criteria.LocSearchCriteria.UnitOfDistance
    }
    
    // 'value' attribute on TextInput (id=SearchLocationGroup_Input) at RILocationRiskProximitySearchPopup.pcf: line 77, column 46
    function value_18 () : java.lang.String {
      return searchLocationGroup
    }
    
    // 'value' attribute on TextInput (id=LocationCode_Input) at RILocationRiskProximitySearchPopup.pcf: line 45, column 56
    function value_2 () : java.lang.String {
      return targetLocationRisk.RiskNumber
    }
    
    // 'value' attribute on DateInput (id=CoverageEffectiveDate_Input) at RILocationRiskProximitySearchPopup.pcf: line 83, column 49
    function value_21 () : java.util.Date {
      return criteria.EffectiveDate
    }
    
    // 'value' attribute on TypeKeyInput (id=CoverageGroup_Input) at RILocationRiskProximitySearchPopup.pcf: line 91, column 58
    function value_25 () : typekey.RICoverageGroupType {
      return criteria.CoverageGroup
    }
    
    // 'value' attribute on RangeInput (id=LineOfBusiness_Input) at RILocationRiskProximitySearchPopup.pcf: line 102, column 70
    function value_29 () : gw.api.productmodel.PolicyLinePattern[] {
      return criteria.LocSearchCriteria.LOBs
    }
    
    // 'value' attribute on TextValue (id=LocationGroupName) at RILocationRiskProximitySearchPopup.pcf: line 122, column 45
    function value_39 () : java.lang.String {
      return newLocationGroup
    }
    
    // 'value' attribute on TextInput (id=Address_Input) at RILocationRiskProximitySearchPopup.pcf: line 49, column 105
    function value_5 () : java.lang.String {
      return targetLocationRisk.AccountLocation.addressString("\n", false, false)
    }
    
    // 'value' attribute on TextInput (id=LocationGroup_Input) at RILocationRiskProximitySearchPopup.pcf: line 53, column 63
    function value_7 () : java.lang.String {
      return targetLocationRisk.LocationRiskGroup
    }
    
    // 'value' attribute on RowIterator (id=LocationRiskIterator) at RILocationRiskProximitySearchPopup.pcf: line 139, column 49
    function value_81 () : entity.LocationRisk[] {
      return searchResults
    }
    
    // 'valueRange' attribute on RangeInput (id=LineOfBusiness_Input) at RILocationRiskProximitySearchPopup.pcf: line 102, column 70
    function verifyValueRangeIsAllowedType_33 ($$arg :  gw.api.productmodel.PolicyLinePattern[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=LineOfBusiness_Input) at RILocationRiskProximitySearchPopup.pcf: line 102, column 70
    function verifyValueRangeIsAllowedType_33 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=LineOfBusiness_Input) at RILocationRiskProximitySearchPopup.pcf: line 102, column 70
    function verifyValueRange_34 () : void {
      var __valueRangeArg = allPolicyLinePatterns
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_33(__valueRangeArg)
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=AssignButton) at RILocationRiskProximitySearchPopup.pcf: line 128, column 95
    function visible_43 () : java.lang.Boolean {
      return !searchResults.IsEmpty and perm.System.editreinsuranceforpolicybasic
    }
    
    property get criteria () : gw.reinsurance.search.RILocationRiskProximitySearchCriteria {
      return getCriteriaValue(1) as gw.reinsurance.search.RILocationRiskProximitySearchCriteria
    }
    
    property set criteria ($arg :  gw.reinsurance.search.RILocationRiskProximitySearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get searchResults () : LocationRisk[] {
      return getResultsValue(1) as LocationRisk[]
    }
    
    
  }
  
  
}