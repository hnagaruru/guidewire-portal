package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/ActivitySearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ActivitySearchDVExpressions {
  @javax.annotation.Generated("config/web/pcf/search/ActivitySearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ActivitySearchDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at ActivitySearchDV.pcf: line 17, column 54
    function action_0 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at ActivitySearchDV.pcf: line 17, column 54
    function action_dest_1 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'def' attribute on InputSetRef at ActivitySearchDV.pcf: line 55, column 41
    function def_onEnter_26 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at ActivitySearchDV.pcf: line 55, column 41
    function def_refreshVariables_27 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TextInput (id=AccountNumber_Input) at ActivitySearchDV.pcf: line 29, column 47
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.AccountNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=ActivityStatus_Input) at ActivitySearchDV.pcf: line 39, column 45
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.SearchedActivityStatus = (__VALUE_TO_SET as typekey.ActivityStatus)
    }
    
    // 'value' attribute on TypeKeyInput (id=ActivityPriority_Input) at ActivitySearchDV.pcf: line 45, column 39
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.SearchedPriority = (__VALUE_TO_SET as typekey.Priority)
    }
    
    // 'value' attribute on BooleanDropdownInput (id=OverdueNow_Input) at ActivitySearchDV.pcf: line 51, column 44
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.OverdueNow = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on AltUserInput (id=AssignedUser_Input) at ActivitySearchDV.pcf: line 17, column 54
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.SearchedAssignedUser = (__VALUE_TO_SET as entity.User)
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at ActivitySearchDV.pcf: line 23, column 46
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.PolicyNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on AltUserInput (id=AssignedUser_Input) at ActivitySearchDV.pcf: line 17, column 54
    function valueRoot_4 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on TextInput (id=AccountNumber_Input) at ActivitySearchDV.pcf: line 29, column 47
    function value_10 () : java.lang.String {
      return searchCriteria.AccountNumber
    }
    
    // 'value' attribute on TypeKeyInput (id=ActivityStatus_Input) at ActivitySearchDV.pcf: line 39, column 45
    function value_14 () : typekey.ActivityStatus {
      return searchCriteria.SearchedActivityStatus
    }
    
    // 'value' attribute on TypeKeyInput (id=ActivityPriority_Input) at ActivitySearchDV.pcf: line 45, column 39
    function value_18 () : typekey.Priority {
      return searchCriteria.SearchedPriority
    }
    
    // 'value' attribute on AltUserInput (id=AssignedUser_Input) at ActivitySearchDV.pcf: line 17, column 54
    function value_2 () : entity.User {
      return searchCriteria.SearchedAssignedUser
    }
    
    // 'value' attribute on BooleanDropdownInput (id=OverdueNow_Input) at ActivitySearchDV.pcf: line 51, column 44
    function value_22 () : java.lang.Boolean {
      return searchCriteria.OverdueNow
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at ActivitySearchDV.pcf: line 23, column 46
    function value_6 () : java.lang.String {
      return searchCriteria.PolicyNumber
    }
    
    property get searchCriteria () : gw.activity.ActivitySearchCriteria {
      return getRequireValue("searchCriteria", 0) as gw.activity.ActivitySearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.activity.ActivitySearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    
  }
  
  
}