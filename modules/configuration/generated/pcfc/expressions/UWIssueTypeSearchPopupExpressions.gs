package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/UWIssueTypeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UWIssueTypeSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/UWIssueTypeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickValue' attribute on RowIterator at UWIssueTypeSearchPopup.pcf: line 63, column 48
    function pickValue_23 () : UWIssueType {
      return issueType
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at UWIssueTypeSearchPopup.pcf: line 71, column 43
    function valueRoot_15 () : java.lang.Object {
      return issueType
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at UWIssueTypeSearchPopup.pcf: line 71, column 43
    function value_14 () : java.lang.String {
      return issueType.Code
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at UWIssueTypeSearchPopup.pcf: line 75, column 50
    function value_17 () : java.lang.String {
      return issueType.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at UWIssueTypeSearchPopup.pcf: line 79, column 50
    function value_20 () : java.lang.String {
      return issueType.Description
    }
    
    property get issueType () : entity.UWIssueType {
      return getIteratedValue(2) as entity.UWIssueType
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/UWIssueTypeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends UWIssueTypeSearchPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at UWIssueTypeSearchPopup.pcf: line 47, column 49
    function def_onEnter_8 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at UWIssueTypeSearchPopup.pcf: line 47, column 49
    function def_refreshVariables_9 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at UWIssueTypeSearchPopup.pcf: line 37, column 46
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at UWIssueTypeSearchPopup.pcf: line 43, column 53
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'searchCriteria' attribute on SearchPanel at UWIssueTypeSearchPopup.pcf: line 27, column 43
    function searchCriteria_26 () : gw.job.uw.UWIssueTypeSearchCriteria {
      return new gw.job.uw.UWIssueTypeSearchCriteria(profile, issueTypeName, \ -> {issueTypeName = null})
    }
    
    // 'search' attribute on SearchPanel at UWIssueTypeSearchPopup.pcf: line 27, column 43
    function search_25 () : java.lang.Object {
      return searchCriteria.performSearch()
    }
    
    // 'sortBy' attribute on IteratorSort at UWIssueTypeSearchPopup.pcf: line 66, column 32
    function sortBy_10 (issueType :  entity.UWIssueType) : java.lang.Object {
      return issueType.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at UWIssueTypeSearchPopup.pcf: line 71, column 43
    function sortValue_11 (issueType :  entity.UWIssueType) : java.lang.Object {
      return issueType.Code
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at UWIssueTypeSearchPopup.pcf: line 75, column 50
    function sortValue_12 (issueType :  entity.UWIssueType) : java.lang.Object {
      return issueType.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at UWIssueTypeSearchPopup.pcf: line 79, column 50
    function sortValue_13 (issueType :  entity.UWIssueType) : java.lang.Object {
      return issueType.Description
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at UWIssueTypeSearchPopup.pcf: line 37, column 46
    function valueRoot_2 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at UWIssueTypeSearchPopup.pcf: line 37, column 46
    function value_0 () : java.lang.String {
      return searchCriteria.Name
    }
    
    // 'value' attribute on RowIterator at UWIssueTypeSearchPopup.pcf: line 63, column 48
    function value_24 () : entity.UWIssueType[] {
      return issueTypes
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at UWIssueTypeSearchPopup.pcf: line 43, column 53
    function value_4 () : java.lang.String {
      return searchCriteria.Description
    }
    
    property get issueTypes () : UWIssueType[] {
      return getResultsValue(1) as UWIssueType[]
    }
    
    property get searchCriteria () : gw.job.uw.UWIssueTypeSearchCriteria {
      return getCriteriaValue(1) as gw.job.uw.UWIssueTypeSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.job.uw.UWIssueTypeSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/UWIssueTypeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UWIssueTypeSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (profile :  entity.UWAuthorityProfile, issueTypeName :  String) : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.UWIssueTypeSearchPopup {
      return super.CurrentLocation as pcf.UWIssueTypeSearchPopup
    }
    
    property get issueTypeName () : String {
      return getVariableValue("issueTypeName", 0) as String
    }
    
    property set issueTypeName ($arg :  String) {
      setVariableValue("issueTypeName", 0, $arg)
    }
    
    property get profile () : entity.UWAuthorityProfile {
      return getVariableValue("profile", 0) as entity.UWAuthorityProfile
    }
    
    property set profile ($arg :  entity.UWAuthorityProfile) {
      setVariableValue("profile", 0, $arg)
    }
    
    
  }
  
  
}