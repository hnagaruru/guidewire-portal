package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/NoteSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NoteSearchDVExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/NoteSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NoteSearchDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at NoteSearchDV.pcf: line 27, column 40
    function action_5 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at NoteSearchDV.pcf: line 27, column 40
    function action_dest_6 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'def' attribute on InputSetRef at NoteSearchDV.pcf: line 82, column 41
    function def_onEnter_48 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at NoteSearchDV.pcf: line 82, column 41
    function def_refreshVariables_49 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TypeKeyInput (id=Language_Input) at NoteSearchDV.pcf: line 34, column 67
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Language = (__VALUE_TO_SET as typekey.LanguageType)
    }
    
    // 'value' attribute on RangeInput (id=SortBy_Input) at NoteSearchDV.pcf: line 42, column 42
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.SortBy = (__VALUE_TO_SET as typekey.SortByRange)
    }
    
    // 'value' attribute on TextInput (id=TextSearch_Input) at NoteSearchDV.pcf: line 22, column 38
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Text = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=sortAscending_Input) at NoteSearchDV.pcf: line 49, column 47
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.SortAscending = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Topic_Input) at NoteSearchDV.pcf: line 58, column 44
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Topic = (__VALUE_TO_SET as typekey.NoteTopicType)
    }
    
    // 'value' attribute on RangeInput (id=RelatedTo_Input) at NoteSearchDV.pcf: line 68, column 39
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.RelatedTo = __VALUE_TO_SET
    }
    
    // 'value' attribute on DateInput (id=DateFrom_Input) at NoteSearchDV.pcf: line 73, column 42
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.DateFrom = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=DateTo_Input) at NoteSearchDV.pcf: line 78, column 40
    function defaultSetter_45 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.DateTo = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on AltUserInput (id=Author_Input) at NoteSearchDV.pcf: line 27, column 40
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Author = (__VALUE_TO_SET as entity.User)
    }
    
    // 'initialValue' attribute on Variable at NoteSearchDV.pcf: line 16, column 34
    function initialValue_0 () : java.lang.Object[] {
      return searchCriteria.getRelatedToSearchCriteria(policyPeriod)
    }
    
    // 'optionLabel' attribute on RangeInput (id=RelatedTo_Input) at NoteSearchDV.pcf: line 68, column 39
    function optionLabel_35 (VALUE :  java.lang.Object) : java.lang.String {
      return Note.getLevelDisplayString(VALUE)
    }
    
    // 'valueRange' attribute on RangeInput (id=SortBy_Input) at NoteSearchDV.pcf: line 42, column 42
    function valueRange_20 () : java.lang.Object {
      return searchCriteria.SortByRange
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at NoteSearchDV.pcf: line 68, column 39
    function valueRange_36 () : java.lang.Object {
      return relatedToSearchCriteria
    }
    
    // 'value' attribute on TextInput (id=TextSearch_Input) at NoteSearchDV.pcf: line 22, column 38
    function valueRoot_3 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on TextInput (id=TextSearch_Input) at NoteSearchDV.pcf: line 22, column 38
    function value_1 () : java.lang.String {
      return searchCriteria.Text
    }
    
    // 'value' attribute on TypeKeyInput (id=Language_Input) at NoteSearchDV.pcf: line 34, column 67
    function value_12 () : typekey.LanguageType {
      return searchCriteria.Language
    }
    
    // 'value' attribute on RangeInput (id=SortBy_Input) at NoteSearchDV.pcf: line 42, column 42
    function value_17 () : typekey.SortByRange {
      return searchCriteria.SortBy
    }
    
    // 'value' attribute on BooleanRadioInput (id=sortAscending_Input) at NoteSearchDV.pcf: line 49, column 47
    function value_24 () : java.lang.Boolean {
      return searchCriteria.SortAscending
    }
    
    // 'value' attribute on TypeKeyInput (id=Topic_Input) at NoteSearchDV.pcf: line 58, column 44
    function value_28 () : typekey.NoteTopicType {
      return searchCriteria.Topic
    }
    
    // 'value' attribute on RangeInput (id=RelatedTo_Input) at NoteSearchDV.pcf: line 68, column 39
    function value_32 () : java.lang.Object {
      return searchCriteria.RelatedTo
    }
    
    // 'value' attribute on DateInput (id=DateFrom_Input) at NoteSearchDV.pcf: line 73, column 42
    function value_40 () : java.util.Date {
      return searchCriteria.DateFrom
    }
    
    // 'value' attribute on DateInput (id=DateTo_Input) at NoteSearchDV.pcf: line 78, column 40
    function value_44 () : java.util.Date {
      return searchCriteria.DateTo
    }
    
    // 'value' attribute on AltUserInput (id=Author_Input) at NoteSearchDV.pcf: line 27, column 40
    function value_7 () : entity.User {
      return searchCriteria.Author
    }
    
    // 'valueRange' attribute on RangeInput (id=SortBy_Input) at NoteSearchDV.pcf: line 42, column 42
    function verifyValueRangeIsAllowedType_21 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SortBy_Input) at NoteSearchDV.pcf: line 42, column 42
    function verifyValueRangeIsAllowedType_21 ($$arg :  typekey.SortByRange[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at NoteSearchDV.pcf: line 68, column 39
    function verifyValueRangeIsAllowedType_37 ($$arg :  java.lang.Object[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at NoteSearchDV.pcf: line 68, column 39
    function verifyValueRangeIsAllowedType_37 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SortBy_Input) at NoteSearchDV.pcf: line 42, column 42
    function verifyValueRange_22 () : void {
      var __valueRangeArg = searchCriteria.SortByRange
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_21(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at NoteSearchDV.pcf: line 68, column 39
    function verifyValueRange_38 () : void {
      var __valueRangeArg = relatedToSearchCriteria
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_37(__valueRangeArg)
    }
    
    // 'visible' attribute on TypeKeyInput (id=Language_Input) at NoteSearchDV.pcf: line 34, column 67
    function visible_11 () : java.lang.Boolean {
      return LanguageType.getTypeKeys( false ).Count > 1
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get relatedToSearchCriteria () : java.lang.Object[] {
      return getVariableValue("relatedToSearchCriteria", 0) as java.lang.Object[]
    }
    
    property set relatedToSearchCriteria ($arg :  java.lang.Object[]) {
      setVariableValue("relatedToSearchCriteria", 0, $arg)
    }
    
    property get searchCriteria () : NoteSearchCriteria {
      return getRequireValue("searchCriteria", 0) as NoteSearchCriteria
    }
    
    property set searchCriteria ($arg :  NoteSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    
  }
  
  
}