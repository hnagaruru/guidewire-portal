package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateRoutineSearchDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateRoutineSearchDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at RateRoutineSearchDV.pcf: line 33, column 41
    function def_onEnter_16 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at RateRoutineSearchDV.pcf: line 33, column 41
    function def_refreshVariables_17 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on RangeInput (id=PolicyLine_Input) at RateRoutineSearchDV.pcf: line 19, column 39
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.PolicyLine = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RateRoutineSearchDV.pcf: line 29, column 45
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.RoutineName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at RateRoutineSearchDV.pcf: line 24, column 45
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.RoutineCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'optionLabel' attribute on RangeInput (id=PolicyLine_Input) at RateRoutineSearchDV.pcf: line 19, column 39
    function optionLabel_3 (VALUE :  java.lang.String) : java.lang.String {
      return searchCriteria.policyLineCodeToDescription(VALUE)
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyLine_Input) at RateRoutineSearchDV.pcf: line 19, column 39
    function valueRange_4 () : java.lang.Object {
      return gw.rating.rtm.util.ProductModelUtils.getAllPolicyLinesForSearch()
    }
    
    // 'value' attribute on RangeInput (id=PolicyLine_Input) at RateRoutineSearchDV.pcf: line 19, column 39
    function valueRoot_2 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on RangeInput (id=PolicyLine_Input) at RateRoutineSearchDV.pcf: line 19, column 39
    function value_0 () : java.lang.String {
      return searchCriteria.PolicyLine
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RateRoutineSearchDV.pcf: line 29, column 45
    function value_12 () : java.lang.String {
      return searchCriteria.RoutineName
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at RateRoutineSearchDV.pcf: line 24, column 45
    function value_8 () : java.lang.String {
      return searchCriteria.RoutineCode
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyLine_Input) at RateRoutineSearchDV.pcf: line 19, column 39
    function verifyValueRangeIsAllowedType_5 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyLine_Input) at RateRoutineSearchDV.pcf: line 19, column 39
    function verifyValueRangeIsAllowedType_5 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyLine_Input) at RateRoutineSearchDV.pcf: line 19, column 39
    function verifyValueRange_6 () : void {
      var __valueRangeArg = gw.rating.rtm.util.ProductModelUtils.getAllPolicyLinesForSearch()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_5(__valueRangeArg)
    }
    
    property get searchCriteria () : gw.rating.rtm.query.RateRoutineSearchCriteria {
      return getRequireValue("searchCriteria", 0) as gw.rating.rtm.query.RateRoutineSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.rating.rtm.query.RateRoutineSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    
  }
  
  
}