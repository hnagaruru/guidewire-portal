package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/DesktopSubmissions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopSubmissionsExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopSubmissions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopSubmissionsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'afterFailure' attribute on SearchItem (id=SubmissionSearch_widget) at DesktopSubmissions.pcf: line 23, column 125
    function afterFailure_0 (searchCriteria :  java.lang.Object, searchText :  java.lang.String) : void {
      if (searchCriteria typeis gw.policy.PolicyPeriodSearchCriteria) searchCriteria.resetForSearchItems(Submission, searchText)
    }
    
    // 'canVisit' attribute on Page (id=DesktopSubmissions) at DesktopSubmissions.pcf: line 8, column 64
    static function canVisit_10 () : java.lang.Boolean {
      return perm.System.viewmysubmissions
    }
    
    // 'def' attribute on PanelRef at DesktopSubmissions.pcf: line 27, column 70
    function def_onEnter_5 (def :  pcf.DesktopSubmissionsLV_default) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at DesktopSubmissions.pcf: line 27, column 70
    function def_onEnter_7 (def :  pcf.DesktopSubmissionsLV_federated) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at DesktopSubmissions.pcf: line 27, column 70
    function def_refreshVariables_6 (def :  pcf.DesktopSubmissionsLV_default) : void {
      def.refreshVariables()
    }
    
    // 'def' attribute on PanelRef at DesktopSubmissions.pcf: line 27, column 70
    function def_refreshVariables_8 (def :  pcf.DesktopSubmissionsLV_federated) : void {
      def.refreshVariables()
    }
    
    // 'mode' attribute on PanelRef at DesktopSubmissions.pcf: line 27, column 70
    function mode_9 () : java.lang.Object {
      return gw.api.web.desktop.data.FederatedDataUIHelper.mode()
    }
    
    // 'onFailure' attribute on SearchItem (id=SubmissionSearch_widget) at DesktopSubmissions.pcf: line 23, column 125
    function onFailure_1 (searchText :  java.lang.String) : pcf.api.Location {
      return PolicySearch.go()
    }
    
    // 'onResult' attribute on SearchItem (id=SubmissionSearch_widget) at DesktopSubmissions.pcf: line 23, column 125
    function onResult_2 (result :  java.lang.Object) : void {
      JobForward.go(result as Job)
    }
    
    // Page (id=DesktopSubmissions) at DesktopSubmissions.pcf: line 8, column 64
    static function parent_11 () : pcf.api.Destination {
      return pcf.Desktop.createDestination()
    }
    
    // 'search' attribute on SearchItem (id=SubmissionSearch_widget) at DesktopSubmissions.pcf: line 23, column 125
    function search_3 (searchText :  java.lang.String) : java.lang.Object {
      return searchSubmission(searchText)
    }
    
    // 'validationError' attribute on SearchItem (id=SubmissionSearch_widget) at DesktopSubmissions.pcf: line 23, column 125
    function validationError_4 (searchText :  java.lang.String) : java.lang.String {
      return DisplayKey.get("Web.TabBar.Policy.SubmissionNumberSearchMenuItem.Error", searchText)
    }
    
    override property get CurrentLocation () : pcf.DesktopSubmissions {
      return super.CurrentLocation as pcf.DesktopSubmissions
    }
    
    function searchSubmission (searchText : String) : Job{
      var result = Job.finder.findJobByJobNumber(searchText) 
      if (result == null or not perm.Job.view(result)) 
        return null
      return result
    }
    
    
  }
  
  
}