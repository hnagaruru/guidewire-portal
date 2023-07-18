package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/ProgramSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ProgramSearchScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/ProgramSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ProgramSearchScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/ProgramSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends ProgramSearchScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=PrintMe) at ProgramSearchScreen.pcf: line 57, column 74
    function action_22 () : void {
      gw.api.print.ListViewPrintOptionPopupAction.printListViewOnlyWithOptions( "ProgramSearchResultsLV" )
    }
    
    // 'def' attribute on InputSetRef at ProgramSearchScreen.pcf: line 42, column 70
    function def_onEnter_18 (def :  pcf.EffectivePeriodInputSet) : void {
      def.onEnter(criteria.EffectivePeriod)
    }
    
    // 'def' attribute on InputSetRef at ProgramSearchScreen.pcf: line 46, column 45
    function def_onEnter_20 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at ProgramSearchScreen.pcf: line 50, column 47
    function def_onEnter_23 (def :  pcf.ProgramSearchResultsLV) : void {
      def.onEnter(results)
    }
    
    // 'def' attribute on InputSetRef at ProgramSearchScreen.pcf: line 42, column 70
    function def_refreshVariables_19 (def :  pcf.EffectivePeriodInputSet) : void {
      def.refreshVariables(criteria.EffectivePeriod)
    }
    
    // 'def' attribute on InputSetRef at ProgramSearchScreen.pcf: line 46, column 45
    function def_refreshVariables_21 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'def' attribute on PanelRef at ProgramSearchScreen.pcf: line 50, column 47
    function def_refreshVariables_24 (def :  pcf.ProgramSearchResultsLV) : void {
      def.refreshVariables(results)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at ProgramSearchScreen.pcf: line 20, column 36
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at ProgramSearchScreen.pcf: line 39, column 71
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.Currency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on TypeKeyInput (id=CoverageGroup_Input) at ProgramSearchScreen.pcf: line 26, column 54
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.CoverageGroup = (__VALUE_TO_SET as typekey.RICoverageGroupType)
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at ProgramSearchScreen.pcf: line 32, column 49
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.Status = (__VALUE_TO_SET as typekey.ContractStatus)
    }
    
    // 'searchCriteria' attribute on SearchPanel at ProgramSearchScreen.pcf: line 13, column 77
    function searchCriteria_26 () : gw.reinsurance.search.ProgramSearchCriteria {
      return new gw.reinsurance.search.ProgramSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel at ProgramSearchScreen.pcf: line 13, column 77
    function search_25 () : java.lang.Object {
      return criteria.performSearch()
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at ProgramSearchScreen.pcf: line 20, column 36
    function valueRoot_2 () : java.lang.Object {
      return criteria
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at ProgramSearchScreen.pcf: line 20, column 36
    function value_0 () : java.lang.String {
      return criteria.Name
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at ProgramSearchScreen.pcf: line 39, column 71
    function value_13 () : typekey.Currency {
      return criteria.Currency
    }
    
    // 'value' attribute on TypeKeyInput (id=CoverageGroup_Input) at ProgramSearchScreen.pcf: line 26, column 54
    function value_4 () : typekey.RICoverageGroupType {
      return criteria.CoverageGroup
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at ProgramSearchScreen.pcf: line 32, column 49
    function value_8 () : typekey.ContractStatus {
      return criteria.Status
    }
    
    // 'visible' attribute on TypeKeyInput (id=Currency_Input) at ProgramSearchScreen.pcf: line 39, column 71
    function visible_12 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get criteria () : gw.reinsurance.search.ProgramSearchCriteria {
      return getCriteriaValue(1) as gw.reinsurance.search.ProgramSearchCriteria
    }
    
    property set criteria ($arg :  gw.reinsurance.search.ProgramSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get results () : gw.api.database.IQueryBeanResult<RIProgram> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<RIProgram>
    }
    
    
  }
  
  
}