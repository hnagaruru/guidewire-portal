package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FormPatternSearchScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FormPatternSearchScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    function isProductionMode() : boolean {
      return not gw.api.system.PLDependenciesGateway.getServerMode().isDev()
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends FormPatternSearchScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=AddButton) at FormPatternSearchScreen.pcf: line 27, column 50
    function action_3 () : void {
      NewFormPattern.go()
    }
    
    // 'action' attribute on ToolbarButton (id=AddButton) at FormPatternSearchScreen.pcf: line 27, column 50
    function action_dest_4 () : pcf.api.Destination {
      return pcf.NewFormPattern.createDestination()
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=DuplicateButton) at FormPatternSearchScreen.pcf: line 35, column 50
    function checkedRowAction_6 (element :  entity.FormPattern, CheckedValue :  entity.FormPattern) : void {
      NewFormPattern.go(CheckedValue)
    }
    
    // 'def' attribute on PanelRef at FormPatternSearchScreen.pcf: line 16, column 52
    function def_onEnter_0 (def :  pcf.FormPatternSearchDV) : void {
      def.onEnter(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at FormPatternSearchScreen.pcf: line 18, column 56
    function def_onEnter_8 (def :  pcf.FormPatternSearchResultsLV) : void {
      def.onEnter(formPatterns)
    }
    
    // 'def' attribute on PanelRef at FormPatternSearchScreen.pcf: line 16, column 52
    function def_refreshVariables_1 (def :  pcf.FormPatternSearchDV) : void {
      def.refreshVariables(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at FormPatternSearchScreen.pcf: line 18, column 56
    function def_refreshVariables_9 (def :  pcf.FormPatternSearchResultsLV) : void {
      def.refreshVariables(formPatterns)
    }
    
    // 'searchCriteria' attribute on SearchPanel at FormPatternSearchScreen.pcf: line 14, column 79
    function searchCriteria_11 () : gw.forms.FormPatternSearchCriteria {
      return new gw.forms.FormPatternSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel at FormPatternSearchScreen.pcf: line 14, column 79
    function search_10 () : java.lang.Object {
      return searchCriteria.performSearch()
    }
    
    // 'visible' attribute on ToolbarButton (id=AddButton) at FormPatternSearchScreen.pcf: line 27, column 50
    function visible_2 () : java.lang.Boolean {
      return perm.System.formpatcreate
    }
    
    // 'visible' attribute on RemoveButton (id=DeleteButton) at FormPatternSearchScreen.pcf: line 42, column 77
    function visible_7 () : java.lang.Boolean {
      return perm.System.formpatdelete and not isProductionMode()
    }
    
    property get formPatterns () : gw.api.database.IQueryBeanResult<FormPattern> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<FormPattern>
    }
    
    property get searchCriteria () : gw.forms.FormPatternSearchCriteria {
      return getCriteriaValue(1) as gw.forms.FormPatternSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.forms.FormPatternSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}