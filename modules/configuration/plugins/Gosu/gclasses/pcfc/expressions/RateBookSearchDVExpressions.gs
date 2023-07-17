package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateBookSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateBookSearchDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateBookSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateBookSearchDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at RateBookSearchDV.pcf: line 90, column 41
    function def_onEnter_56 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at RateBookSearchDV.pcf: line 90, column 41
    function def_refreshVariables_57 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on RangeInput (id=PolicyLine_Input) at RateBookSearchDV.pcf: line 19, column 38
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.PolicyLine = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RateBookSearchDV.pcf: line 31, column 42
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.BookName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=Jurisdiction_Input) at RateBookSearchDV.pcf: line 41, column 81
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Jurisdiction = (__VALUE_TO_SET as gw.util.Pair<java.lang.String, typekey.Jurisdiction>)
    }
    
    // 'value' attribute on RangeInput (id=UWCompany_Input) at RateBookSearchDV.pcf: line 50, column 77
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.UWCompany = (__VALUE_TO_SET as gw.util.Pair<java.lang.String, entity.UWCompany>)
    }
    
    // 'value' attribute on RangeInput (id=Offering_Input) at RateBookSearchDV.pcf: line 61, column 39
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.BookOffering = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at RateBookSearchDV.pcf: line 68, column 45
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Status = (__VALUE_TO_SET as typekey.RateBookStatus)
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at RateBookSearchDV.pcf: line 73, column 47
    function defaultSetter_45 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.EffectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on BooleanRadioInput (id=RadioButtonEffecDate_Input) at RateBookSearchDV.pcf: line 79, column 43
    function defaultSetter_49 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.BeforeDate = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on DateInput (id=LastStatusChangeDate_Input) at RateBookSearchDV.pcf: line 86, column 54
    function defaultSetter_53 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.LastStatusChangeDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at RateBookSearchDV.pcf: line 26, column 42
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.BookCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'optionLabel' attribute on RangeInput (id=Jurisdiction_Input) at RateBookSearchDV.pcf: line 41, column 81
    function optionLabel_19 (VALUE :  gw.util.Pair<java.lang.String, typekey.Jurisdiction>) : java.lang.String {
      return VALUE.First
    }
    
    // 'optionLabel' attribute on RangeInput (id=UWCompany_Input) at RateBookSearchDV.pcf: line 50, column 77
    function optionLabel_27 (VALUE :  gw.util.Pair<java.lang.String, entity.UWCompany>) : java.lang.String {
      return VALUE.First
    }
    
    // 'optionLabel' attribute on RangeInput (id=PolicyLine_Input) at RateBookSearchDV.pcf: line 19, column 38
    function optionLabel_3 (VALUE :  java.lang.String) : java.lang.String {
      return searchCriteria.policyLineCodeToDescription(VALUE)
    }
    
    // 'optionLabel' attribute on RangeInput (id=Offering_Input) at RateBookSearchDV.pcf: line 61, column 39
    function optionLabel_35 (VALUE :  java.lang.String) : java.lang.String {
      return searchCriteria.offeringCodeToDescription(VALUE)
    }
    
    // 'valueRange' attribute on RangeInput (id=Jurisdiction_Input) at RateBookSearchDV.pcf: line 41, column 81
    function valueRange_20 () : java.lang.Object {
      return gw.rating.rtm.util.ProductModelUtils.getAllJurisdictionsForSearch()
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at RateBookSearchDV.pcf: line 50, column 77
    function valueRange_28 () : java.lang.Object {
      return gw.rating.rtm.util.ProductModelUtils.getAllUWCompaniesForSearch()
    }
    
    // 'valueRange' attribute on RangeInput (id=Offering_Input) at RateBookSearchDV.pcf: line 61, column 39
    function valueRange_36 () : java.lang.Object {
      return gw.rating.rtm.util.ProductModelUtils.getAllSearchOfferingsFor(searchCriteria.PolicyLine)
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyLine_Input) at RateBookSearchDV.pcf: line 19, column 38
    function valueRange_4 () : java.lang.Object {
      return gw.rating.rtm.util.ProductModelUtils.getAllPolicyLinesForSearch()
    }
    
    // 'value' attribute on RangeInput (id=PolicyLine_Input) at RateBookSearchDV.pcf: line 19, column 38
    function valueRoot_2 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on RangeInput (id=PolicyLine_Input) at RateBookSearchDV.pcf: line 19, column 38
    function value_0 () : java.lang.String {
      return searchCriteria.PolicyLine
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RateBookSearchDV.pcf: line 31, column 42
    function value_12 () : java.lang.String {
      return searchCriteria.BookName
    }
    
    // 'value' attribute on RangeInput (id=Jurisdiction_Input) at RateBookSearchDV.pcf: line 41, column 81
    function value_16 () : gw.util.Pair<java.lang.String, typekey.Jurisdiction> {
      return searchCriteria.Jurisdiction
    }
    
    // 'value' attribute on RangeInput (id=UWCompany_Input) at RateBookSearchDV.pcf: line 50, column 77
    function value_24 () : gw.util.Pair<java.lang.String, entity.UWCompany> {
      return searchCriteria.UWCompany
    }
    
    // 'value' attribute on RangeInput (id=Offering_Input) at RateBookSearchDV.pcf: line 61, column 39
    function value_32 () : java.lang.String {
      return searchCriteria.BookOffering
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at RateBookSearchDV.pcf: line 68, column 45
    function value_40 () : typekey.RateBookStatus {
      return searchCriteria.Status
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at RateBookSearchDV.pcf: line 73, column 47
    function value_44 () : java.util.Date {
      return searchCriteria.EffectiveDate
    }
    
    // 'value' attribute on BooleanRadioInput (id=RadioButtonEffecDate_Input) at RateBookSearchDV.pcf: line 79, column 43
    function value_48 () : java.lang.Boolean {
      return searchCriteria.BeforeDate
    }
    
    // 'value' attribute on DateInput (id=LastStatusChangeDate_Input) at RateBookSearchDV.pcf: line 86, column 54
    function value_52 () : java.util.Date {
      return searchCriteria.LastStatusChangeDate
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at RateBookSearchDV.pcf: line 26, column 42
    function value_8 () : java.lang.String {
      return searchCriteria.BookCode
    }
    
    // 'valueRange' attribute on RangeInput (id=Jurisdiction_Input) at RateBookSearchDV.pcf: line 41, column 81
    function verifyValueRangeIsAllowedType_21 ($$arg :  gw.util.Pair<java.lang.String, typekey.Jurisdiction>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Jurisdiction_Input) at RateBookSearchDV.pcf: line 41, column 81
    function verifyValueRangeIsAllowedType_21 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at RateBookSearchDV.pcf: line 50, column 77
    function verifyValueRangeIsAllowedType_29 ($$arg :  gw.util.Pair<java.lang.String, entity.UWCompany>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at RateBookSearchDV.pcf: line 50, column 77
    function verifyValueRangeIsAllowedType_29 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Offering_Input) at RateBookSearchDV.pcf: line 61, column 39
    function verifyValueRangeIsAllowedType_37 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Offering_Input) at RateBookSearchDV.pcf: line 61, column 39
    function verifyValueRangeIsAllowedType_37 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyLine_Input) at RateBookSearchDV.pcf: line 19, column 38
    function verifyValueRangeIsAllowedType_5 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyLine_Input) at RateBookSearchDV.pcf: line 19, column 38
    function verifyValueRangeIsAllowedType_5 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Jurisdiction_Input) at RateBookSearchDV.pcf: line 41, column 81
    function verifyValueRange_22 () : void {
      var __valueRangeArg = gw.rating.rtm.util.ProductModelUtils.getAllJurisdictionsForSearch()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_21(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at RateBookSearchDV.pcf: line 50, column 77
    function verifyValueRange_30 () : void {
      var __valueRangeArg = gw.rating.rtm.util.ProductModelUtils.getAllUWCompaniesForSearch()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_29(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Offering_Input) at RateBookSearchDV.pcf: line 61, column 39
    function verifyValueRange_38 () : void {
      var __valueRangeArg = gw.rating.rtm.util.ProductModelUtils.getAllSearchOfferingsFor(searchCriteria.PolicyLine)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_37(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyLine_Input) at RateBookSearchDV.pcf: line 19, column 38
    function verifyValueRange_6 () : void {
      var __valueRangeArg = gw.rating.rtm.util.ProductModelUtils.getAllPolicyLinesForSearch()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_5(__valueRangeArg)
    }
    
    property get searchCriteria () : gw.rating.rtm.query.RateBookSearchCriteria {
      return getRequireValue("searchCriteria", 0) as gw.rating.rtm.query.RateBookSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.rating.rtm.query.RateBookSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    
  }
  
  
}