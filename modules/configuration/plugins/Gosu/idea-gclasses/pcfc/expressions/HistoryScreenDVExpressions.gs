package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/HistoryScreenDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HistoryScreenDVExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/HistoryScreenDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HistoryScreenDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at HistoryScreenDV.pcf: line 18, column 43
    function action_0 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at HistoryScreenDV.pcf: line 18, column 43
    function action_dest_1 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'def' attribute on InputSetRef at HistoryScreenDV.pcf: line 46, column 41
    function def_onEnter_24 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at HistoryScreenDV.pcf: line 46, column 41
    function def_refreshVariables_25 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on DateInput (id=FromDate_Input) at HistoryScreenDV.pcf: line 37, column 47
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyHistorySearch.FromDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=ToDate_Input) at HistoryScreenDV.pcf: line 42, column 45
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyHistorySearch.ToDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on AltUserInput (id=user_Input) at HistoryScreenDV.pcf: line 18, column 43
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyHistorySearch.User = (__VALUE_TO_SET as entity.User)
    }
    
    // 'value' attribute on RangeInput (id=relatedto_Input) at HistoryScreenDV.pcf: line 28, column 82
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyHistorySearch.RelatedItem = __VALUE_TO_SET
    }
    
    // 'optionLabel' attribute on RangeInput (id=relatedto_Input) at HistoryScreenDV.pcf: line 28, column 82
    function optionLabel_10 (VALUE :  java.lang.Object) : java.lang.String {
      return policyHistorySearch.getLevelDisplayString(VALUE)
    }
    
    // 'valueRange' attribute on RangeInput (id=relatedto_Input) at HistoryScreenDV.pcf: line 28, column 82
    function valueRange_11 () : java.lang.Object {
      return relatedtocriteria
    }
    
    // 'value' attribute on AltUserInput (id=user_Input) at HistoryScreenDV.pcf: line 18, column 43
    function valueRoot_4 () : java.lang.Object {
      return policyHistorySearch
    }
    
    // 'value' attribute on DateInput (id=FromDate_Input) at HistoryScreenDV.pcf: line 37, column 47
    function value_16 () : java.util.Date {
      return policyHistorySearch.FromDate
    }
    
    // 'value' attribute on AltUserInput (id=user_Input) at HistoryScreenDV.pcf: line 18, column 43
    function value_2 () : entity.User {
      return policyHistorySearch.User
    }
    
    // 'value' attribute on DateInput (id=ToDate_Input) at HistoryScreenDV.pcf: line 42, column 45
    function value_20 () : java.util.Date {
      return policyHistorySearch.ToDate
    }
    
    // 'value' attribute on RangeInput (id=relatedto_Input) at HistoryScreenDV.pcf: line 28, column 82
    function value_7 () : java.lang.Object {
      return policyHistorySearch.RelatedItem
    }
    
    // 'valueRange' attribute on RangeInput (id=relatedto_Input) at HistoryScreenDV.pcf: line 28, column 82
    function verifyValueRangeIsAllowedType_12 ($$arg :  java.lang.Object[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=relatedto_Input) at HistoryScreenDV.pcf: line 28, column 82
    function verifyValueRangeIsAllowedType_12 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=relatedto_Input) at HistoryScreenDV.pcf: line 28, column 82
    function verifyValueRange_13 () : void {
      var __valueRangeArg = relatedtocriteria
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_12(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=relatedto_Input) at HistoryScreenDV.pcf: line 28, column 82
    function visible_6 () : java.lang.Boolean {
      return relatedtocriteria != null and relatedtocriteria.length > 1
    }
    
    property get policyHistorySearch () : gw.history.HistorySearchCriteria {
      return getRequireValue("policyHistorySearch", 0) as gw.history.HistorySearchCriteria
    }
    
    property set policyHistorySearch ($arg :  gw.history.HistorySearchCriteria) {
      setRequireValue("policyHistorySearch", 0, $arg)
    }
    
    property get relatedtocriteria () : Object[] {
      return getRequireValue("relatedtocriteria", 0) as Object[]
    }
    
    property set relatedtocriteria ($arg :  Object[]) {
      setRequireValue("relatedtocriteria", 0, $arg)
    }
    
    
  }
  
  
}