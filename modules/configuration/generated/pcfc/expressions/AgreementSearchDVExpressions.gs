package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/AgreementSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AgreementSearchDVExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/AgreementSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AgreementSearchDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at AgreementSearchDV.pcf: line 30, column 90
    function def_onEnter_15 (def :  pcf.EffectivePeriodInputSet) : void {
      def.onEnter(criteria.EffectivePeriod)
    }
    
    // 'def' attribute on InputSetRef at AgreementSearchDV.pcf: line 70, column 50
    function def_onEnter_44 (def :  pcf.SearchLinksInputSet) : void {
      def.onEnter(true, true)
    }
    
    // 'def' attribute on InputSetRef at AgreementSearchDV.pcf: line 30, column 90
    function def_refreshVariables_16 (def :  pcf.EffectivePeriodInputSet) : void {
      def.refreshVariables(criteria.EffectivePeriod)
    }
    
    // 'def' attribute on InputSetRef at AgreementSearchDV.pcf: line 70, column 50
    function def_refreshVariables_45 (def :  pcf.SearchLinksInputSet) : void {
      def.refreshVariables(true, true)
    }
    
    // 'value' attribute on TextInput (id=AgreementNumber_Input) at AgreementSearchDV.pcf: line 15, column 43
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.AgreementNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=EffectiveOn_Input) at AgreementSearchDV.pcf: line 27, column 84
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      (criteria as gw.reinsurance.search.FacultativeSearchCriteria).EffectiveOn = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on RangeInput (id=AgreementType_Input) at AgreementSearchDV.pcf: line 39, column 42
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.AgreementType = (__VALUE_TO_SET as typekey.RIAgreement)
    }
    
    // 'value' attribute on TypeKeyInput (id=Arrangement_Input) at AgreementSearchDV.pcf: line 45, column 46
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.ArrangementType = (__VALUE_TO_SET as typekey.ArrangementType)
    }
    
    // 'value' attribute on TypeKeyInput (id=CoverageGroup_Input) at AgreementSearchDV.pcf: line 51, column 50
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.CoverageGroup = (__VALUE_TO_SET as typekey.RICoverageGroupType)
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at AgreementSearchDV.pcf: line 57, column 45
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.Status = (__VALUE_TO_SET as typekey.ContractStatus)
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at AgreementSearchDV.pcf: line 64, column 67
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.Currency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on TextInput (id=AgreementName_Input) at AgreementSearchDV.pcf: line 20, column 41
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.AgreementName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TypeKeyInput (id=Arrangement_Input) at AgreementSearchDV.pcf: line 45, column 46
    function editable_24 () : java.lang.Boolean {
      return criteria.SearchAll
    }
    
    // 'valueRange' attribute on RangeInput (id=AgreementType_Input) at AgreementSearchDV.pcf: line 39, column 42
    function valueRange_20 () : java.lang.Object {
      return criteria.AvailableSubtypes
    }
    
    // 'value' attribute on DateInput (id=EffectiveOn_Input) at AgreementSearchDV.pcf: line 27, column 84
    function valueRoot_11 () : java.lang.Object {
      return (criteria as gw.reinsurance.search.FacultativeSearchCriteria)
    }
    
    // 'value' attribute on TextInput (id=AgreementNumber_Input) at AgreementSearchDV.pcf: line 15, column 43
    function valueRoot_2 () : java.lang.Object {
      return criteria
    }
    
    // 'value' attribute on TextInput (id=AgreementNumber_Input) at AgreementSearchDV.pcf: line 15, column 43
    function value_0 () : java.lang.String {
      return criteria.AgreementNumber
    }
    
    // 'value' attribute on RangeInput (id=AgreementType_Input) at AgreementSearchDV.pcf: line 39, column 42
    function value_17 () : typekey.RIAgreement {
      return criteria.AgreementType
    }
    
    // 'value' attribute on TypeKeyInput (id=Arrangement_Input) at AgreementSearchDV.pcf: line 45, column 46
    function value_25 () : typekey.ArrangementType {
      return criteria.ArrangementType
    }
    
    // 'value' attribute on TypeKeyInput (id=CoverageGroup_Input) at AgreementSearchDV.pcf: line 51, column 50
    function value_30 () : typekey.RICoverageGroupType {
      return criteria.CoverageGroup
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at AgreementSearchDV.pcf: line 57, column 45
    function value_34 () : typekey.ContractStatus {
      return criteria.Status
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at AgreementSearchDV.pcf: line 64, column 67
    function value_39 () : typekey.Currency {
      return criteria.Currency
    }
    
    // 'value' attribute on TextInput (id=AgreementName_Input) at AgreementSearchDV.pcf: line 20, column 41
    function value_4 () : java.lang.String {
      return criteria.AgreementName
    }
    
    // 'value' attribute on DateInput (id=EffectiveOn_Input) at AgreementSearchDV.pcf: line 27, column 84
    function value_9 () : java.util.Date {
      return (criteria as gw.reinsurance.search.FacultativeSearchCriteria).EffectiveOn
    }
    
    // 'valueRange' attribute on RangeInput (id=AgreementType_Input) at AgreementSearchDV.pcf: line 39, column 42
    function verifyValueRangeIsAllowedType_21 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=AgreementType_Input) at AgreementSearchDV.pcf: line 39, column 42
    function verifyValueRangeIsAllowedType_21 ($$arg :  typekey.RIAgreement[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=AgreementType_Input) at AgreementSearchDV.pcf: line 39, column 42
    function verifyValueRange_22 () : void {
      var __valueRangeArg = criteria.AvailableSubtypes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_21(__valueRangeArg)
    }
    
    // 'visible' attribute on InputSetRef at AgreementSearchDV.pcf: line 30, column 90
    function visible_14 () : java.lang.Boolean {
      return not (criteria typeis gw.reinsurance.search.FacultativeSearchCriteria)
    }
    
    // 'visible' attribute on TypeKeyInput (id=Currency_Input) at AgreementSearchDV.pcf: line 64, column 67
    function visible_38 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    // 'visible' attribute on DateInput (id=EffectiveOn_Input) at AgreementSearchDV.pcf: line 27, column 84
    function visible_8 () : java.lang.Boolean {
      return criteria typeis gw.reinsurance.search.FacultativeSearchCriteria
    }
    
    property get criteria () : gw.reinsurance.search.AgreementSearchCriteria {
      return getRequireValue("criteria", 0) as gw.reinsurance.search.AgreementSearchCriteria
    }
    
    property set criteria ($arg :  gw.reinsurance.search.AgreementSearchCriteria) {
      setRequireValue("criteria", 0, $arg)
    }
    
    
  }
  
  
}