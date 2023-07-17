package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/DocumentSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DocumentSearchDVExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/DocumentSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DocumentSearchDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at DocumentSearchDV.pcf: line 66, column 41
    function def_onEnter_38 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at DocumentSearchDV.pcf: line 66, column 41
    function def_refreshVariables_39 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at DocumentSearchDV.pcf: line 18, column 42
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.NameOrID = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at DocumentSearchDV.pcf: line 33, column 49
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Status = (__VALUE_TO_SET as typekey.DocumentStatusType)
    }
    
    // 'value' attribute on TypeKeyInput (id=Language_Input) at DocumentSearchDV.pcf: line 40, column 67
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Language = (__VALUE_TO_SET as typekey.LanguageType)
    }
    
    // 'value' attribute on DateInput (id=DateFrom_Input) at DocumentSearchDV.pcf: line 47, column 42
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.DateFrom = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=DateTo_Input) at DocumentSearchDV.pcf: line 52, column 40
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.DateTo = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=Author_Input) at DocumentSearchDV.pcf: line 57, column 40
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Author = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=IncludeObsoletes_Input) at DocumentSearchDV.pcf: line 62, column 50
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.IncludeObsoletes = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=RelatedTo_Input) at DocumentSearchDV.pcf: line 27, column 39
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.RelatedTo = __VALUE_TO_SET
    }
    
    // 'optionLabel' attribute on RangeInput (id=RelatedTo_Input) at DocumentSearchDV.pcf: line 27, column 39
    function optionLabel_7 (VALUE :  java.lang.Object) : java.lang.String {
      return Note.getLevelDisplayString(VALUE)
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at DocumentSearchDV.pcf: line 27, column 39
    function valueRange_8 () : java.lang.Object {
      return relatedToSearchCriteriaOptions()
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at DocumentSearchDV.pcf: line 18, column 42
    function valueRoot_2 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at DocumentSearchDV.pcf: line 18, column 42
    function value_0 () : java.lang.String {
      return searchCriteria.NameOrID
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at DocumentSearchDV.pcf: line 33, column 49
    function value_12 () : typekey.DocumentStatusType {
      return searchCriteria.Status
    }
    
    // 'value' attribute on TypeKeyInput (id=Language_Input) at DocumentSearchDV.pcf: line 40, column 67
    function value_17 () : typekey.LanguageType {
      return searchCriteria.Language
    }
    
    // 'value' attribute on DateInput (id=DateFrom_Input) at DocumentSearchDV.pcf: line 47, column 42
    function value_22 () : java.util.Date {
      return searchCriteria.DateFrom
    }
    
    // 'value' attribute on DateInput (id=DateTo_Input) at DocumentSearchDV.pcf: line 52, column 40
    function value_26 () : java.util.Date {
      return searchCriteria.DateTo
    }
    
    // 'value' attribute on TextInput (id=Author_Input) at DocumentSearchDV.pcf: line 57, column 40
    function value_30 () : java.lang.String {
      return searchCriteria.Author
    }
    
    // 'value' attribute on BooleanRadioInput (id=IncludeObsoletes_Input) at DocumentSearchDV.pcf: line 62, column 50
    function value_34 () : java.lang.Boolean {
      return searchCriteria.IncludeObsoletes
    }
    
    // 'value' attribute on RangeInput (id=RelatedTo_Input) at DocumentSearchDV.pcf: line 27, column 39
    function value_4 () : java.lang.Object {
      return searchCriteria.RelatedTo
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at DocumentSearchDV.pcf: line 27, column 39
    function verifyValueRangeIsAllowedType_9 ($$arg :  java.lang.Object[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at DocumentSearchDV.pcf: line 27, column 39
    function verifyValueRangeIsAllowedType_9 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at DocumentSearchDV.pcf: line 27, column 39
    function verifyValueRange_10 () : void {
      var __valueRangeArg = relatedToSearchCriteriaOptions()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_9(__valueRangeArg)
    }
    
    // 'visible' attribute on TypeKeyInput (id=Language_Input) at DocumentSearchDV.pcf: line 40, column 67
    function visible_16 () : java.lang.Boolean {
      return LanguageType.getTypeKeys( false ).Count > 1
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get searchCriteria () : DocumentSearchCriteria {
      return getRequireValue("searchCriteria", 0) as DocumentSearchCriteria
    }
    
    property set searchCriteria ($arg :  DocumentSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    function relatedToSearchCriteriaOptions() : Object[] {
      if (policyPeriod != null) {
        return searchCriteria.getRelatedToOptionsForPolicyFile(policyPeriod)
      } else {
        return searchCriteria.getRelatedToOptionsForAccount()
      }
    }
    
    
  }
  
  
}