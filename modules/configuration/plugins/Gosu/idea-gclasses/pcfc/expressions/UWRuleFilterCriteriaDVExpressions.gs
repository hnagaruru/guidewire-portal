package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/UWRuleFilterCriteriaDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UWRuleFilterCriteriaDVExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/UWRuleFilterCriteriaDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UWRuleFilterCriteriaDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=TextFilter_Input) at UWRuleFilterCriteriaDV.pcf: line 16, column 45
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.NameOrDescription = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=Availability_Input) at UWRuleFilterCriteriaDV.pcf: line 33, column 49
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.Availability = (__VALUE_TO_SET as typekey.UWRuleAvailability)
    }
    
    // 'value' attribute on RangeInput (id=PolicyTransaction_Input) at UWRuleFilterCriteriaDV.pcf: line 42, column 34
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.Job = (__VALUE_TO_SET as typekey.Job)
    }
    
    // 'value' attribute on RangeInput (id=PolicyLine_Input) at UWRuleFilterCriteriaDV.pcf: line 49, column 41
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.PolicyLine = (__VALUE_TO_SET as typekey.PolicyLine)
    }
    
    // 'value' attribute on RangeInput (id=Jurisdiction_Input) at UWRuleFilterCriteriaDV.pcf: line 56, column 43
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.Jurisdiction = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'value' attribute on RangeInput (id=Status_Input) at UWRuleFilterCriteriaDV.pcf: line 25, column 76
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.Status = (__VALUE_TO_SET as gw.bizrules.management.RuleQueryFactory<UWRule>)
    }
    
    // 'optionLabel' attribute on RangeInput (id=Status_Input) at UWRuleFilterCriteriaDV.pcf: line 25, column 76
    function optionLabel_7 (VALUE :  gw.bizrules.management.RuleQueryFactory<UWRule>) : java.lang.String {
      return VALUE.DisplayName
    }
    
    // 'valueRange' attribute on RangeInput (id=Availability_Input) at UWRuleFilterCriteriaDV.pcf: line 33, column 49
    function valueRange_15 () : java.lang.Object {
      return gw.web.bizrules.UWRulePanelSetHelper.Availability
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyTransaction_Input) at UWRuleFilterCriteriaDV.pcf: line 42, column 34
    function valueRange_22 () : java.lang.Object {
      return gw.web.bizrules.UWRulePanelSetHelper.PolicyTransactionRange
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyLine_Input) at UWRuleFilterCriteriaDV.pcf: line 49, column 41
    function valueRange_29 () : java.lang.Object {
      return gw.web.bizrules.UWRulePanelSetHelper.LinesOfBusinessRange
    }
    
    // 'valueRange' attribute on RangeInput (id=Jurisdiction_Input) at UWRuleFilterCriteriaDV.pcf: line 56, column 43
    function valueRange_36 () : java.lang.Object {
      return gw.web.bizrules.UWRulePanelSetHelper.JurisdictionRange
    }
    
    // 'valueRange' attribute on RangeInput (id=Status_Input) at UWRuleFilterCriteriaDV.pcf: line 25, column 76
    function valueRange_8 () : java.lang.Object {
      return criteria.AvailableStatuses
    }
    
    // 'value' attribute on TextInput (id=TextFilter_Input) at UWRuleFilterCriteriaDV.pcf: line 16, column 45
    function valueRoot_2 () : java.lang.Object {
      return criteria
    }
    
    // 'value' attribute on TextInput (id=TextFilter_Input) at UWRuleFilterCriteriaDV.pcf: line 16, column 45
    function value_0 () : java.lang.String {
      return criteria.NameOrDescription
    }
    
    // 'value' attribute on RangeInput (id=Availability_Input) at UWRuleFilterCriteriaDV.pcf: line 33, column 49
    function value_12 () : typekey.UWRuleAvailability {
      return criteria.Availability
    }
    
    // 'value' attribute on RangeInput (id=PolicyTransaction_Input) at UWRuleFilterCriteriaDV.pcf: line 42, column 34
    function value_19 () : typekey.Job {
      return criteria.Job
    }
    
    // 'value' attribute on RangeInput (id=PolicyLine_Input) at UWRuleFilterCriteriaDV.pcf: line 49, column 41
    function value_26 () : typekey.PolicyLine {
      return criteria.PolicyLine
    }
    
    // 'value' attribute on RangeInput (id=Jurisdiction_Input) at UWRuleFilterCriteriaDV.pcf: line 56, column 43
    function value_33 () : typekey.Jurisdiction {
      return criteria.Jurisdiction
    }
    
    // 'value' attribute on RangeInput (id=Status_Input) at UWRuleFilterCriteriaDV.pcf: line 25, column 76
    function value_4 () : gw.bizrules.management.RuleQueryFactory<UWRule> {
      return criteria.Status
    }
    
    // 'valueRange' attribute on RangeInput (id=Availability_Input) at UWRuleFilterCriteriaDV.pcf: line 33, column 49
    function verifyValueRangeIsAllowedType_16 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Availability_Input) at UWRuleFilterCriteriaDV.pcf: line 33, column 49
    function verifyValueRangeIsAllowedType_16 ($$arg :  typekey.UWRuleAvailability[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyTransaction_Input) at UWRuleFilterCriteriaDV.pcf: line 42, column 34
    function verifyValueRangeIsAllowedType_23 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyTransaction_Input) at UWRuleFilterCriteriaDV.pcf: line 42, column 34
    function verifyValueRangeIsAllowedType_23 ($$arg :  typekey.Job[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyLine_Input) at UWRuleFilterCriteriaDV.pcf: line 49, column 41
    function verifyValueRangeIsAllowedType_30 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyLine_Input) at UWRuleFilterCriteriaDV.pcf: line 49, column 41
    function verifyValueRangeIsAllowedType_30 ($$arg :  typekey.PolicyLine[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Jurisdiction_Input) at UWRuleFilterCriteriaDV.pcf: line 56, column 43
    function verifyValueRangeIsAllowedType_37 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Jurisdiction_Input) at UWRuleFilterCriteriaDV.pcf: line 56, column 43
    function verifyValueRangeIsAllowedType_37 ($$arg :  typekey.Jurisdiction[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Status_Input) at UWRuleFilterCriteriaDV.pcf: line 25, column 76
    function verifyValueRangeIsAllowedType_9 ($$arg :  gw.bizrules.management.RuleQueryFactory<UWRule>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Status_Input) at UWRuleFilterCriteriaDV.pcf: line 25, column 76
    function verifyValueRangeIsAllowedType_9 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Status_Input) at UWRuleFilterCriteriaDV.pcf: line 25, column 76
    function verifyValueRange_10 () : void {
      var __valueRangeArg = criteria.AvailableStatuses
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_9(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Availability_Input) at UWRuleFilterCriteriaDV.pcf: line 33, column 49
    function verifyValueRange_17 () : void {
      var __valueRangeArg = gw.web.bizrules.UWRulePanelSetHelper.Availability
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_16(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyTransaction_Input) at UWRuleFilterCriteriaDV.pcf: line 42, column 34
    function verifyValueRange_24 () : void {
      var __valueRangeArg = gw.web.bizrules.UWRulePanelSetHelper.PolicyTransactionRange
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_23(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyLine_Input) at UWRuleFilterCriteriaDV.pcf: line 49, column 41
    function verifyValueRange_31 () : void {
      var __valueRangeArg = gw.web.bizrules.UWRulePanelSetHelper.LinesOfBusinessRange
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_30(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Jurisdiction_Input) at UWRuleFilterCriteriaDV.pcf: line 56, column 43
    function verifyValueRange_38 () : void {
      var __valueRangeArg = gw.web.bizrules.UWRulePanelSetHelper.JurisdictionRange
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_37(__valueRangeArg)
    }
    
    property get criteria () : gw.web.bizrules.UWRuleFilterCriteria {
      return getRequireValue("criteria", 0) as gw.web.bizrules.UWRuleFilterCriteria
    }
    
    property set criteria ($arg :  gw.web.bizrules.UWRuleFilterCriteria) {
      setRequireValue("criteria", 0, $arg)
    }
    
    
  }
  
  
}