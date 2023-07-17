package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateTableDefinitionSearchScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at RateTableDefinitionSearchScreen.pcf: line 50, column 63
    function action_11 () : void {
      RateTableDefinitionDetail.go(RateTableDefinitionElement)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at RateTableDefinitionSearchScreen.pcf: line 50, column 63
    function action_dest_12 () : pcf.api.Destination {
      return pcf.RateTableDefinitionDetail.createDestination(RateTableDefinitionElement)
    }
    
    // 'checkBoxVisible' attribute on RowIterator (id=SearchResultsRowIterator) at RateTableDefinitionSearchScreen.pcf: line 43, column 92
    function checkBoxVisible_26 () : java.lang.Boolean {
      return perm.System.ratebookedit and ((not RateTableDefinitionElement.TableCode.HasContent) or (RateTableDefinitionElement.tablesUsingDefinition().Empty and RateTableDefinitionElement.ReferencingRateRoutines.Empty))
    }
    
    // 'outputConversion' attribute on TextCell (id=PolicyLine_Cell) at RateTableDefinitionSearchScreen.pcf: line 65, column 64
    function outputConversion_22 (VALUE :  java.lang.String) : java.lang.String {
      return gw.api.productmodel.PolicyLinePatternLookup.getByPublicID(VALUE).DisplayName
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at RateTableDefinitionSearchScreen.pcf: line 50, column 63
    function valueRoot_14 () : java.lang.Object {
      return RateTableDefinitionElement
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at RateTableDefinitionSearchScreen.pcf: line 50, column 63
    function value_13 () : java.lang.String {
      return RateTableDefinitionElement.TableName
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at RateTableDefinitionSearchScreen.pcf: line 55, column 63
    function value_16 () : java.lang.String {
      return RateTableDefinitionElement.TableCode
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RateTableDefinitionSearchScreen.pcf: line 59, column 63
    function value_19 () : java.lang.String {
      return RateTableDefinitionElement.TableDesc
    }
    
    // 'value' attribute on TextCell (id=PolicyLine_Cell) at RateTableDefinitionSearchScreen.pcf: line 65, column 64
    function value_23 () : java.lang.String {
      return RateTableDefinitionElement.PolicyLine
    }
    
    property get RateTableDefinitionElement () : entity.RateTableDefinition {
      return getIteratedValue(2) as entity.RateTableDefinition
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateTableDefinitionSearchScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends RateTableDefinitionSearchScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=AddRateTableDefButton) at RateTableDefinitionSearchScreen.pcf: line 24, column 49
    function action_3 () : void {
      NewRateTableDefinition.go()
    }
    
    // 'action' attribute on ToolbarButton (id=AddRateTableDefButton) at RateTableDefinitionSearchScreen.pcf: line 24, column 49
    function action_dest_4 () : pcf.api.Destination {
      return pcf.NewRateTableDefinition.createDestination()
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=DeleteSelectedDefinitions) at RateTableDefinitionSearchScreen.pcf: line 31, column 49
    function checkedRowAction_6 (RateTableDefinitionElement :  entity.RateTableDefinition, CheckedValue :  entity.RateTableDefinition) : void {
      CheckedValue.delete()
    }
    
    // 'def' attribute on PanelRef at RateTableDefinitionSearchScreen.pcf: line 15, column 60
    function def_onEnter_0 (def :  pcf.RateTableDefinitionSearchDV) : void {
      def.onEnter(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at RateTableDefinitionSearchScreen.pcf: line 15, column 60
    function def_refreshVariables_1 (def :  pcf.RateTableDefinitionSearchDV) : void {
      def.refreshVariables(searchCriteria)
    }
    
    // 'searchCriteria' attribute on SearchPanel at RateTableDefinitionSearchScreen.pcf: line 13, column 94
    function searchCriteria_29 () : gw.rating.rtm.query.RateTableDefinitionSearchCriteria {
      return new gw.rating.rtm.query.RateTableDefinitionSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel at RateTableDefinitionSearchScreen.pcf: line 13, column 94
    function search_28 () : java.lang.Object {
      return searchCriteria.performSearch()
    }
    
    // 'value' attribute on TextCell (id=PolicyLine_Cell) at RateTableDefinitionSearchScreen.pcf: line 65, column 64
    function sortValue_10 (RateTableDefinitionElement :  entity.RateTableDefinition) : java.lang.Object {
      return RateTableDefinitionElement.PolicyLine
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at RateTableDefinitionSearchScreen.pcf: line 50, column 63
    function sortValue_7 (RateTableDefinitionElement :  entity.RateTableDefinition) : java.lang.Object {
      return RateTableDefinitionElement.TableName
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at RateTableDefinitionSearchScreen.pcf: line 55, column 63
    function sortValue_8 (RateTableDefinitionElement :  entity.RateTableDefinition) : java.lang.Object {
      return RateTableDefinitionElement.TableCode
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RateTableDefinitionSearchScreen.pcf: line 59, column 63
    function sortValue_9 (RateTableDefinitionElement :  entity.RateTableDefinition) : java.lang.Object {
      return RateTableDefinitionElement.TableDesc
    }
    
    // 'value' attribute on RowIterator (id=SearchResultsRowIterator) at RateTableDefinitionSearchScreen.pcf: line 43, column 92
    function value_27 () : gw.api.database.IQueryBeanResult<entity.RateTableDefinition> {
      return RateTableDefinitionSearchResults
    }
    
    // 'visible' attribute on ToolbarButton (id=AddRateTableDefButton) at RateTableDefinitionSearchScreen.pcf: line 24, column 49
    function visible_2 () : java.lang.Boolean {
      return perm.System.ratebookedit
    }
    
    property get RateTableDefinitionSearchResults () : gw.api.database.IQueryBeanResult<entity.RateTableDefinition> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<entity.RateTableDefinition>
    }
    
    property get searchCriteria () : gw.rating.rtm.query.RateTableDefinitionSearchCriteria {
      return getCriteriaValue(1) as gw.rating.rtm.query.RateTableDefinitionSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.rating.rtm.query.RateTableDefinitionSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}