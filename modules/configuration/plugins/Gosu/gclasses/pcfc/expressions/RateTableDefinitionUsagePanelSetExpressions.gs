package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionUsagePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateTableDefinitionUsagePanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionUsagePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateTableDefinitionUsagePanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get rateTables () : List<RateTable> {
      return getRequireValue("rateTables", 0) as List<RateTable>
    }
    
    property set rateTables ($arg :  List<RateTable>) {
      setRequireValue("rateTables", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionUsagePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RowTreeEntryExpressionsImpl extends UsageLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=rateTable_Cell) at RateTableDefinitionUsagePanelSet.pcf: line 54, column 85
    function action_15 () : void {
      RateTableFactorList.go(gw.rating.rtm.domain.RateTableFactorListController.createDatabaseBasedController(), ratetable, ratetable.RateBook)
    }
    
    // 'action' attribute on TextCell (id=rateBook_Cell) at RateTableDefinitionUsagePanelSet.pcf: line 36, column 164
    function action_5 () : void {
      RateBookDetail.go(ratetable.RateBook)
    }
    
    // 'action' attribute on TextCell (id=rateTable_Cell) at RateTableDefinitionUsagePanelSet.pcf: line 54, column 85
    function action_dest_16 () : pcf.api.Destination {
      return pcf.RateTableFactorList.createDestination(gw.rating.rtm.domain.RateTableFactorListController.createDatabaseBasedController(), ratetable, ratetable.RateBook)
    }
    
    // 'action' attribute on TextCell (id=rateBook_Cell) at RateTableDefinitionUsagePanelSet.pcf: line 36, column 164
    function action_dest_6 () : pcf.api.Destination {
      return pcf.RateBookDetail.createDestination(ratetable.RateBook)
    }
    
    // 'value' attribute on TypeKeyCell (id=rateBookStatus_Cell) at RateTableDefinitionUsagePanelSet.pcf: line 43, column 51
    function valueRoot_10 () : java.lang.Object {
      return ratetable.RateBook
    }
    
    // 'value' attribute on DateCell (id=rateBookEffDate_Cell) at RateTableDefinitionUsagePanelSet.pcf: line 49, column 57
    function value_12 () : java.util.Date {
      return ratetable.RateBook.EffectiveDate
    }
    
    // 'value' attribute on TextCell (id=rateTable_Cell) at RateTableDefinitionUsagePanelSet.pcf: line 54, column 85
    function value_17 () : java.lang.String {
      return gw.rating.rtm.util.RatingUIUtil.getOwnershipLabel(ratetable)
    }
    
    // 'value' attribute on TextCell (id=rateBook_Cell) at RateTableDefinitionUsagePanelSet.pcf: line 36, column 164
    function value_7 () : java.lang.String {
      return DisplayKey.get("Web.Rating.RateTableDefinition.Usage.RateBookLabel", ratetable.RateBook.BookName, ratetable.RateBook.BookEdition)
    }
    
    // 'value' attribute on TypeKeyCell (id=rateBookStatus_Cell) at RateTableDefinitionUsagePanelSet.pcf: line 43, column 51
    function value_9 () : typekey.RateBookStatus {
      return ratetable.RateBook.Status
    }
    
    property get ratetable () : RateTable {
      return getIteratedValue(2) as RateTable
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionUsagePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UsageLVExpressionsImpl extends RateTableDefinitionUsagePanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'containerLabel' attribute on RowTree (id=rateTableTree) at RateTableDefinitionUsagePanelSet.pcf: line 29, column 36
    function containerLabel_20 (ratetable :  RateTable) : java.lang.String {
      return ratetable.RateBook.BookName
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionUsagePanelSet.pcf: line 20, column 47
    function initialValue_0 () : gw.api.tree.RowTreeRootNode {
      return gw.web.rating.RateTableDefinitionUIHelper.getOwningTables(rateTables)
    }
    
    // 'value' attribute on TextCell (id=rateBook_Cell) at RateTableDefinitionUsagePanelSet.pcf: line 36, column 164
    function sortValue_1 (ratetable :  RateTable) : java.lang.Object {
      return DisplayKey.get("Web.Rating.RateTableDefinition.Usage.RateBookLabel", ratetable.RateBook.BookName, ratetable.RateBook.BookEdition)
    }
    
    // 'value' attribute on TypeKeyCell (id=rateBookStatus_Cell) at RateTableDefinitionUsagePanelSet.pcf: line 43, column 51
    function sortValue_2 (ratetable :  RateTable) : java.lang.Object {
      return ratetable.RateBook.Status
    }
    
    // 'value' attribute on DateCell (id=rateBookEffDate_Cell) at RateTableDefinitionUsagePanelSet.pcf: line 49, column 57
    function sortValue_3 (ratetable :  RateTable) : java.lang.Object {
      return ratetable.RateBook.EffectiveDate
    }
    
    // 'value' attribute on TextCell (id=rateTable_Cell) at RateTableDefinitionUsagePanelSet.pcf: line 54, column 85
    function sortValue_4 (ratetable :  RateTable) : java.lang.Object {
      return gw.rating.rtm.util.RatingUIUtil.getOwnershipLabel(ratetable)
    }
    
    // 'value' attribute on RowTree (id=rateTableTree) at RateTableDefinitionUsagePanelSet.pcf: line 29, column 36
    function value_19 () : java.lang.Object {
      return owningRateTables
    }
    
    property get owningRateTables () : gw.api.tree.RowTreeRootNode {
      return getVariableValue("owningRateTables", 1) as gw.api.tree.RowTreeRootNode
    }
    
    property set owningRateTables ($arg :  gw.api.tree.RowTreeRootNode) {
      setVariableValue("owningRateTables", 1, $arg)
    }
    
    
  }
  
  
}