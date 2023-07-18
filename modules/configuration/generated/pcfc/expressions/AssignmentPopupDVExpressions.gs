package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/assignment/AssignmentPopupDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AssignmentPopupDVExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/assignment/AssignmentPopupDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AssignmentPopupDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonInput (id=AssignmentByGroupPopupScreen_ButtonButton_Input) at AssignmentPopupDV.pcf: line 38, column 76
    function action_10 () : void {
      CurrentLocation.commit()
    }
    
    // 'available' attribute on RangeInput (id=SelectFromList_Input) at AssignmentPopupDV.pcf: line 34, column 51
    function available_0 () : java.lang.Boolean {
      return assignmentPopup.SelectionType == TC_FROMLIST
    }
    
    // 'def' attribute on InputSetRef at AssignmentPopupDV.pcf: line 52, column 198
    function def_onEnter_19 (def :  pcf.AssignmentSearchInputSet) : void {
      def.onEnter(gw.api.upgrade.Coercions.makeArray<typekey.AssignmentSearchType>(assignmentPopup.Picker.AllowedAssignmentSearchTypes), searchResult, searchCriteria)
    }
    
    // 'def' attribute on InputSetRef at AssignmentPopupDV.pcf: line 57, column 41
    function def_onEnter_24 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at AssignmentPopupDV.pcf: line 52, column 198
    function def_refreshVariables_20 (def :  pcf.AssignmentSearchInputSet) : void {
      def.refreshVariables(gw.api.upgrade.Coercions.makeArray<typekey.AssignmentSearchType>(assignmentPopup.Picker.AllowedAssignmentSearchTypes), searchResult, searchCriteria)
    }
    
    // 'def' attribute on InputSetRef at AssignmentPopupDV.pcf: line 57, column 41
    function def_refreshVariables_25 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on Choice (id=SelectFromListChoice) at AssignmentPopupDV.pcf: line 23, column 53
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      assignmentPopup.SelectionType = (__VALUE_TO_SET as typekey.AssignmentSelectionType)
    }
    
    // 'value' attribute on RangeInput (id=SelectFromList_Input) at AssignmentPopupDV.pcf: line 34, column 51
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      assignmentPopup.SelectedFromList = (__VALUE_TO_SET as gw.api.assignment.Assignee)
    }
    
    // 'filter' attribute on RangeInput (id=SelectFromList_Input) at AssignmentPopupDV.pcf: line 34, column 51
    function filter_4 (VALUE :  gw.api.assignment.Assignee, VALUES :  gw.api.assignment.Assignee[]) : java.lang.Boolean {
      return VALUE as String != "Default Assignment Role"
    }
    
    // 'label' attribute on TextInput (id=SelectFromSearch_Input) at AssignmentPopupDV.pcf: line 50, column 51
    function label_14 () : java.lang.Object {
      return assignmentPopup.SelectFromSearchLabel
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectFromList_Input) at AssignmentPopupDV.pcf: line 34, column 51
    function valueRange_5 () : java.lang.Object {
      return assignmentPopup.SuggestedAssignees
    }
    
    // 'value' attribute on TextInput (id=SelectFromSearch_Input) at AssignmentPopupDV.pcf: line 50, column 51
    function valueRoot_16 () : java.lang.Object {
      return assignmentPopup.Picker
    }
    
    // 'value' attribute on RangeInput (id=SelectFromList_Input) at AssignmentPopupDV.pcf: line 34, column 51
    function valueRoot_3 () : java.lang.Object {
      return assignmentPopup
    }
    
    // 'value' attribute on RangeInput (id=SelectFromList_Input) at AssignmentPopupDV.pcf: line 34, column 51
    function value_1 () : gw.api.assignment.Assignee {
      return assignmentPopup.SelectedFromList
    }
    
    // 'value' attribute on Choice (id=SelectFromListChoice) at AssignmentPopupDV.pcf: line 23, column 53
    function value_11 () : typekey.AssignmentSelectionType {
      return assignmentPopup.SelectionType
    }
    
    // 'value' attribute on TextInput (id=SelectFromSearch_Input) at AssignmentPopupDV.pcf: line 50, column 51
    function value_15 () : gw.api.assignment.Assignee {
      return assignmentPopup.Picker.Selection
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectFromList_Input) at AssignmentPopupDV.pcf: line 34, column 51
    function verifyValueRangeIsAllowedType_6 ($$arg :  gw.api.assignment.Assignee[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectFromList_Input) at AssignmentPopupDV.pcf: line 34, column 51
    function verifyValueRangeIsAllowedType_6 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectFromList_Input) at AssignmentPopupDV.pcf: line 34, column 51
    function verifyValueRange_7 () : void {
      var __valueRangeArg = assignmentPopup.SuggestedAssignees
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_6(__valueRangeArg)
    }
    
    property get assignmentPopup () : gw.api.assignment.AssignmentPopup {
      return getRequireValue("assignmentPopup", 0) as gw.api.assignment.AssignmentPopup
    }
    
    property set assignmentPopup ($arg :  gw.api.assignment.AssignmentPopup) {
      setRequireValue("assignmentPopup", 0, $arg)
    }
    
    property get searchCriteria () : gw.api.assignment.AssignmentSearchCriteria {
      return getRequireValue("searchCriteria", 0) as gw.api.assignment.AssignmentSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.api.assignment.AssignmentSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    property get searchResult () : gw.api.assignment.AssignmentSearchResult {
      return getRequireValue("searchResult", 0) as gw.api.assignment.AssignmentSearchResult
    }
    
    property set searchResult ($arg :  gw.api.assignment.AssignmentSearchResult) {
      setRequireValue("searchResult", 0, $arg)
    }
    
    
  }
  
  
}