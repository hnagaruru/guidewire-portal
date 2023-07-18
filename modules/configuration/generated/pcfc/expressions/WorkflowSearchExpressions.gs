package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/workflow/WorkflowSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WorkflowSearchExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/workflow/WorkflowSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends WorkflowSearchExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at WorkflowSearch.pcf: line 21, column 46
    function def_onEnter_0 (def :  pcf.WorkflowsDV) : void {
      def.onEnter(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at WorkflowSearch.pcf: line 24, column 88
    function def_onEnter_2 (def :  pcf.WorkflowSearchResultPanelSet_PolicyPeriodWorkflow) : void {
      def.onEnter(workflows, searchCriteria)
    }
    
    // 'def' attribute on PanelRef at WorkflowSearch.pcf: line 24, column 88
    function def_onEnter_4 (def :  pcf.WorkflowSearchResultPanelSet_default) : void {
      def.onEnter(workflows, searchCriteria)
    }
    
    // 'def' attribute on PanelRef at WorkflowSearch.pcf: line 21, column 46
    function def_refreshVariables_1 (def :  pcf.WorkflowsDV) : void {
      def.refreshVariables(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at WorkflowSearch.pcf: line 24, column 88
    function def_refreshVariables_3 (def :  pcf.WorkflowSearchResultPanelSet_PolicyPeriodWorkflow) : void {
      def.refreshVariables(workflows, searchCriteria)
    }
    
    // 'def' attribute on PanelRef at WorkflowSearch.pcf: line 24, column 88
    function def_refreshVariables_5 (def :  pcf.WorkflowSearchResultPanelSet_default) : void {
      def.refreshVariables(workflows, searchCriteria)
    }
    
    // 'mode' attribute on PanelRef at WorkflowSearch.pcf: line 24, column 88
    function mode_6 () : java.lang.Object {
      return gw.pcf.WorkflowHelper.getWorkflowSubtype(searchCriteria.Workflowtype)
    }
    
    // 'searchCriteria' attribute on SearchPanel at WorkflowSearch.pcf: line 19, column 78
    function searchCriteria_8 () : entity.WorkflowSearchCriteria {
      return new WorkflowSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel at WorkflowSearch.pcf: line 19, column 78
    function search_7 () : java.lang.Object {
      return searchCriteria.performSearch() as gw.api.database.IQueryBeanResult<Workflow>
    }
    
    property get searchCriteria () : entity.WorkflowSearchCriteria {
      return getCriteriaValue(1) as entity.WorkflowSearchCriteria
    }
    
    property set searchCriteria ($arg :  entity.WorkflowSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get workflows () : gw.api.database.IQueryBeanResult<Workflow> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<Workflow>
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/workflow/WorkflowSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WorkflowSearchExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=WorkflowSearch) at WorkflowSearch.pcf: line 9, column 72
    static function canVisit_9 () : java.lang.Boolean {
      return perm.System.workflowview
    }
    
    // Page (id=WorkflowSearch) at WorkflowSearch.pcf: line 9, column 72
    static function parent_10 () : pcf.api.Destination {
      return pcf.Monitoring.createDestination()
    }
    
    override property get CurrentLocation () : pcf.WorkflowSearch {
      return super.CurrentLocation as pcf.WorkflowSearch
    }
    
    
  }
  
  
}