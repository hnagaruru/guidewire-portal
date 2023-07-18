package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateTableDefinitionSearchDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateTableDefinitionSearchDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at RateTableDefinitionSearchDV.pcf: line 36, column 41
    function def_onEnter_16 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at RateTableDefinitionSearchDV.pcf: line 36, column 41
    function def_refreshVariables_17 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on RangeInput (id=PolicyLine_Input) at RateTableDefinitionSearchDV.pcf: line 20, column 38
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.PolicyLine = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=name_Input) at RateTableDefinitionSearchDV.pcf: line 32, column 43
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.TableName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=code_Input) at RateTableDefinitionSearchDV.pcf: line 27, column 43
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.TableCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'optionLabel' attribute on RangeInput (id=PolicyLine_Input) at RateTableDefinitionSearchDV.pcf: line 20, column 38
    function optionLabel_3 (VALUE :  java.lang.String) : java.lang.String {
      return searchCriteria.policyLineCodeToDescription(VALUE)
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyLine_Input) at RateTableDefinitionSearchDV.pcf: line 20, column 38
    function valueRange_4 () : java.lang.Object {
      return gw.rating.rtm.util.ProductModelUtils.getAllPolicyLinesForSearch()
    }
    
    // 'value' attribute on RangeInput (id=PolicyLine_Input) at RateTableDefinitionSearchDV.pcf: line 20, column 38
    function valueRoot_2 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on RangeInput (id=PolicyLine_Input) at RateTableDefinitionSearchDV.pcf: line 20, column 38
    function value_0 () : java.lang.String {
      return searchCriteria.PolicyLine
    }
    
    // 'value' attribute on TextInput (id=name_Input) at RateTableDefinitionSearchDV.pcf: line 32, column 43
    function value_12 () : java.lang.String {
      return searchCriteria.TableName
    }
    
    // 'value' attribute on TextInput (id=code_Input) at RateTableDefinitionSearchDV.pcf: line 27, column 43
    function value_8 () : java.lang.String {
      return searchCriteria.TableCode
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyLine_Input) at RateTableDefinitionSearchDV.pcf: line 20, column 38
    function verifyValueRangeIsAllowedType_5 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyLine_Input) at RateTableDefinitionSearchDV.pcf: line 20, column 38
    function verifyValueRangeIsAllowedType_5 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyLine_Input) at RateTableDefinitionSearchDV.pcf: line 20, column 38
    function verifyValueRange_6 () : void {
      var __valueRangeArg = gw.rating.rtm.util.ProductModelUtils.getAllPolicyLinesForSearch()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_5(__valueRangeArg)
    }
    
    property get searchCriteria () : gw.rating.rtm.query.RateTableDefinitionSearchCriteria {
      return getRequireValue("searchCriteria", 0) as gw.rating.rtm.query.RateTableDefinitionSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.rating.rtm.query.RateTableDefinitionSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    
  }
  
  
}