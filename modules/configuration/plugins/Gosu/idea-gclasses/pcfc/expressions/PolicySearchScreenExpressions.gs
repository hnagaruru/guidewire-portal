package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/PolicySearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicySearchScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/search/PolicySearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicySearchScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PolicySearchScreen.pcf: line 18, column 28
    function def_onEnter_0 (def :  pcf.SolrPolicySearchPanelSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at PolicySearchScreen.pcf: line 26, column 49
    function def_onEnter_4 (def :  pcf.DatabasePolicySearchPanelSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at PolicySearchScreen.pcf: line 18, column 28
    function def_refreshVariables_1 (def :  pcf.SolrPolicySearchPanelSet) : void {
      def.refreshVariables()
    }
    
    // 'def' attribute on PanelRef at PolicySearchScreen.pcf: line 26, column 49
    function def_refreshVariables_5 (def :  pcf.DatabasePolicySearchPanelSet) : void {
      def.refreshVariables()
    }
    
    // 'onSelect' attribute on Card (id=solrSearch) at PolicySearchScreen.pcf: line 14, column 129
    function onSelect_3 () : void {
      gw.pcf.PolicySearchTabSelector.registerBasicTabActivated()
    }
    
    // 'onSelect' attribute on Card (id=dbSearch) at PolicySearchScreen.pcf: line 24, column 77
    function onSelect_6 () : void {
      gw.pcf.PolicySearchTabSelector.registerAdvancedTabActivated()
    }
    
    // 'selectOnEnter' attribute on Card (id=dbSearch) at PolicySearchScreen.pcf: line 24, column 77
    function selectOnEnter_7 () : java.lang.Boolean {
      return gw.pcf.PolicySearchTabSelector.advancedTabLastActivated()
    }
    
    // 'visible' attribute on Card (id=solrSearch) at PolicySearchScreen.pcf: line 14, column 129
    function visible_2 () : java.lang.Boolean {
      return gw.api.system.PLConfigParameters.FreeTextSearchEnabled.Value and ScriptParameters.EnableDisplayBasicSearchTab
    }
    
    
  }
  
  
}