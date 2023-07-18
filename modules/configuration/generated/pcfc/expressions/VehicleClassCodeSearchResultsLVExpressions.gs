package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policy/VehicleClassCodeSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class VehicleClassCodeSearchResultsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/VehicleClassCodeSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends VehicleClassCodeSearchResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickValue' attribute on RowIterator at VehicleClassCodeSearchResultsLV.pcf: line 20, column 64
    function pickValue_48 () : gw.api.domain.VehicleClassCodeSearchResult {
      return vehicleClassCodeSearchResult
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at VehicleClassCodeSearchResultsLV.pcf: line 26, column 25
    function valueRoot_16 () : java.lang.Object {
      return vehicleClassCodeSearchResult
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at VehicleClassCodeSearchResultsLV.pcf: line 26, column 25
    function value_15 () : java.lang.String {
      return vehicleClassCodeSearchResult.Code
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at VehicleClassCodeSearchResultsLV.pcf: line 33, column 24
    function value_18 () : typekey.VehicleType {
      return vehicleClassCodeSearchResult.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Fleet_Cell) at VehicleClassCodeSearchResultsLV.pcf: line 40, column 25
    function value_21 () : typekey.FleetType {
      return vehicleClassCodeSearchResult.Fleet
    }
    
    // 'value' attribute on TypeKeyCell (id=YearsExperience_Cell) at VehicleClassCodeSearchResultsLV.pcf: line 47, column 24
    function value_24 () : typekey.CombinedDriverExp {
      return vehicleClassCodeSearchResult.Experience
    }
    
    // 'value' attribute on TypeKeyCell (id=SizeClass_Cell) at VehicleClassCodeSearchResultsLV.pcf: line 54, column 24
    function value_28 () : typekey.VehicleSizeClass {
      return vehicleClassCodeSearchResult.SizeClass
    }
    
    // 'value' attribute on TypeKeyCell (id=PrimaryUse_Cell) at VehicleClassCodeSearchResultsLV.pcf: line 62, column 24
    function value_32 () : typekey.VehiclePrimaryUse {
      return vehicleClassCodeSearchResult.PrimaryUse
    }
    
    // 'value' attribute on TypeKeyCell (id=Radius_Cell) at VehicleClassCodeSearchResultsLV.pcf: line 70, column 25
    function value_36 () : typekey.RadiusCode {
      return vehicleClassCodeSearchResult.Radius
    }
    
    // 'value' attribute on TypeKeyCell (id=Industry_Cell) at VehicleClassCodeSearchResultsLV.pcf: line 78, column 24
    function value_40 () : typekey.VehicleIndustry {
      return vehicleClassCodeSearchResult.Industry
    }
    
    // 'value' attribute on TypeKeyCell (id=IndustryUse_Cell) at VehicleClassCodeSearchResultsLV.pcf: line 85, column 24
    function value_44 () : typekey.VehicleIndustryUse {
      return vehicleClassCodeSearchResult.IndustryUse
    }
    
    // 'visible' attribute on TypeKeyCell (id=YearsExperience_Cell) at VehicleClassCodeSearchResultsLV.pcf: line 47, column 24
    function visible_26 () : java.lang.Boolean {
      return searchCriteria.VehicleType == VehicleType.TC_PP
    }
    
    // 'visible' attribute on TypeKeyCell (id=SizeClass_Cell) at VehicleClassCodeSearchResultsLV.pcf: line 54, column 24
    function visible_30 () : java.lang.Boolean {
      return searchCriteria.VehicleType==VehicleType.TC_PUBLICTRANSPORT or searchCriteria.VehicleType==VehicleType.TC_COMMERCIAL
    }
    
    // 'visible' attribute on TypeKeyCell (id=PrimaryUse_Cell) at VehicleClassCodeSearchResultsLV.pcf: line 62, column 24
    function visible_34 () : java.lang.Boolean {
      return searchCriteria.VehicleType != VehicleType.TC_PP
    }
    
    // 'visible' attribute on TypeKeyCell (id=Radius_Cell) at VehicleClassCodeSearchResultsLV.pcf: line 70, column 25
    function visible_38 () : java.lang.Boolean {
      return searchCriteria.VehicleType != VehicleType.TC_SPECIAL
    }
    
    // 'visible' attribute on TypeKeyCell (id=Industry_Cell) at VehicleClassCodeSearchResultsLV.pcf: line 78, column 24
    function visible_42 () : java.lang.Boolean {
      return (searchCriteria.VehicleType==VehicleType.TC_COMMERCIAL and searchCriteria.Radius != RadiusCode.TC_200PLUSMILES)
    }
    
    property get vehicleClassCodeSearchResult () : gw.api.domain.VehicleClassCodeSearchResult {
      return getIteratedValue(1) as gw.api.domain.VehicleClassCodeSearchResult
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/VehicleClassCodeSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class VehicleClassCodeSearchResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at VehicleClassCodeSearchResultsLV.pcf: line 26, column 25
    function sortValue_0 (vehicleClassCodeSearchResult :  gw.api.domain.VehicleClassCodeSearchResult) : java.lang.Object {
      return vehicleClassCodeSearchResult.Code
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at VehicleClassCodeSearchResultsLV.pcf: line 33, column 24
    function sortValue_1 (vehicleClassCodeSearchResult :  gw.api.domain.VehicleClassCodeSearchResult) : java.lang.Object {
      return vehicleClassCodeSearchResult.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Industry_Cell) at VehicleClassCodeSearchResultsLV.pcf: line 78, column 24
    function sortValue_11 (vehicleClassCodeSearchResult :  gw.api.domain.VehicleClassCodeSearchResult) : java.lang.Object {
      return vehicleClassCodeSearchResult.Industry
    }
    
    // 'value' attribute on TypeKeyCell (id=IndustryUse_Cell) at VehicleClassCodeSearchResultsLV.pcf: line 85, column 24
    function sortValue_13 (vehicleClassCodeSearchResult :  gw.api.domain.VehicleClassCodeSearchResult) : java.lang.Object {
      return vehicleClassCodeSearchResult.IndustryUse
    }
    
    // 'value' attribute on TypeKeyCell (id=Fleet_Cell) at VehicleClassCodeSearchResultsLV.pcf: line 40, column 25
    function sortValue_2 (vehicleClassCodeSearchResult :  gw.api.domain.VehicleClassCodeSearchResult) : java.lang.Object {
      return vehicleClassCodeSearchResult.Fleet
    }
    
    // 'value' attribute on TypeKeyCell (id=YearsExperience_Cell) at VehicleClassCodeSearchResultsLV.pcf: line 47, column 24
    function sortValue_3 (vehicleClassCodeSearchResult :  gw.api.domain.VehicleClassCodeSearchResult) : java.lang.Object {
      return vehicleClassCodeSearchResult.Experience
    }
    
    // 'value' attribute on TypeKeyCell (id=SizeClass_Cell) at VehicleClassCodeSearchResultsLV.pcf: line 54, column 24
    function sortValue_5 (vehicleClassCodeSearchResult :  gw.api.domain.VehicleClassCodeSearchResult) : java.lang.Object {
      return vehicleClassCodeSearchResult.SizeClass
    }
    
    // 'value' attribute on TypeKeyCell (id=PrimaryUse_Cell) at VehicleClassCodeSearchResultsLV.pcf: line 62, column 24
    function sortValue_7 (vehicleClassCodeSearchResult :  gw.api.domain.VehicleClassCodeSearchResult) : java.lang.Object {
      return vehicleClassCodeSearchResult.PrimaryUse
    }
    
    // 'value' attribute on TypeKeyCell (id=Radius_Cell) at VehicleClassCodeSearchResultsLV.pcf: line 70, column 25
    function sortValue_9 (vehicleClassCodeSearchResult :  gw.api.domain.VehicleClassCodeSearchResult) : java.lang.Object {
      return vehicleClassCodeSearchResult.Radius
    }
    
    // 'value' attribute on RowIterator at VehicleClassCodeSearchResultsLV.pcf: line 20, column 64
    function value_49 () : gw.api.domain.VehicleClassCodeSearchResult[] {
      return searchResults
    }
    
    // 'visible' attribute on TypeKeyCell (id=Radius_Cell) at VehicleClassCodeSearchResultsLV.pcf: line 70, column 25
    function visible_10 () : java.lang.Boolean {
      return searchCriteria.VehicleType != VehicleType.TC_SPECIAL
    }
    
    // 'visible' attribute on TypeKeyCell (id=Industry_Cell) at VehicleClassCodeSearchResultsLV.pcf: line 78, column 24
    function visible_12 () : java.lang.Boolean {
      return (searchCriteria.VehicleType==VehicleType.TC_COMMERCIAL and searchCriteria.Radius != RadiusCode.TC_200PLUSMILES)
    }
    
    // 'visible' attribute on TypeKeyCell (id=YearsExperience_Cell) at VehicleClassCodeSearchResultsLV.pcf: line 47, column 24
    function visible_4 () : java.lang.Boolean {
      return searchCriteria.VehicleType == VehicleType.TC_PP
    }
    
    // 'visible' attribute on TypeKeyCell (id=SizeClass_Cell) at VehicleClassCodeSearchResultsLV.pcf: line 54, column 24
    function visible_6 () : java.lang.Boolean {
      return searchCriteria.VehicleType==VehicleType.TC_PUBLICTRANSPORT or searchCriteria.VehicleType==VehicleType.TC_COMMERCIAL
    }
    
    // 'visible' attribute on TypeKeyCell (id=PrimaryUse_Cell) at VehicleClassCodeSearchResultsLV.pcf: line 62, column 24
    function visible_8 () : java.lang.Boolean {
      return searchCriteria.VehicleType != VehicleType.TC_PP
    }
    
    property get searchCriteria () : gw.api.domain.VehicleClassCodeSearchCriteria {
      return getRequireValue("searchCriteria", 0) as gw.api.domain.VehicleClassCodeSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.api.domain.VehicleClassCodeSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    property get searchResults () : gw.api.domain.VehicleClassCodeSearchResult[] {
      return getRequireValue("searchResults", 0) as gw.api.domain.VehicleClassCodeSearchResult[]
    }
    
    property set searchResults ($arg :  gw.api.domain.VehicleClassCodeSearchResult[]) {
      setRequireValue("searchResults", 0, $arg)
    }
    
    
  }
  
  
}