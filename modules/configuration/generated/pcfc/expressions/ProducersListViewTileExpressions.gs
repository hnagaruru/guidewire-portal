package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/overview/ProducersListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ProducersListViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/account/overview/ProducersListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ProducersListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ProducersListViewTile.pcf: line 36, column 71
    function valueRoot_3 () : java.lang.Object {
      return producerCode.ProducerCode.Organization
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at ProducersListViewTile.pcf: line 42, column 51
    function valueRoot_6 () : java.lang.Object {
      return producerCode.ProducerCode
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ProducersListViewTile.pcf: line 36, column 71
    function value_2 () : java.lang.String {
      return producerCode.ProducerCode.Organization.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at ProducersListViewTile.pcf: line 42, column 51
    function value_5 () : java.lang.String {
      return producerCode.ProducerCode.Code
    }
    
    property get producerCode () : entity.AccountProducerCode {
      return getIteratedValue(1) as entity.AccountProducerCode
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/overview/ProducersListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ProducersListViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=ProducersListViewTile) at ProducersListViewTile.pcf: line 11, column 54
    function action_11 () : void {
      ProducersPopup.push(account)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=ProducersListViewTile) at ProducersListViewTile.pcf: line 11, column 54
    function action_dest_12 () : pcf.api.Destination {
      return pcf.ProducersPopup.createDestination(account)
    }
    
    // 'initialValue' attribute on Variable at ProducersListViewTile.pcf: line 18, column 62
    function initialValue_9 () : gw.api.web.dashboard.ui.account.ProducerHelper {
      return new gw.api.web.dashboard.ui.account.ProducerHelper(account, gw.api.web.dashboard.ui.DashboardParameters.ListViewLimitShort)
    }
    
    // 'sortBy' attribute on IteratorSort at ProducersListViewTile.pcf: line 26, column 24
    function sortBy_0 (producerCode :  entity.AccountProducerCode) : java.lang.Object {
      return producerCode.ProducerCode.Organization.DisplayName
    }
    
    // 'sortBy' attribute on IteratorSort at ProducersListViewTile.pcf: line 29, column 24
    function sortBy_1 (producerCode :  entity.AccountProducerCode) : java.lang.Object {
      return producerCode.ProducerCode.Code
    }
    
    // 'value' attribute on RowIterator at ProducersListViewTile.pcf: line 23, column 48
    function value_8 () : entity.AccountProducerCode[] {
      return producerHelper.ProducerCodes
    }
    
    // 'viewMoreVisible' attribute on ListViewTile (id=ProducersListViewTile) at ProducersListViewTile.pcf: line 11, column 54
    function visible_10 () : java.lang.Boolean {
      return producerHelper.ViewMoreVisible
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get producerHelper () : gw.api.web.dashboard.ui.account.ProducerHelper {
      return getVariableValue("producerHelper", 0) as gw.api.web.dashboard.ui.account.ProducerHelper
    }
    
    property set producerHelper ($arg :  gw.api.web.dashboard.ui.account.ProducerHelper) {
      setVariableValue("producerHelper", 0, $arg)
    }
    
    
  }
  
  
}