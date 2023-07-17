package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/messaging/MessageSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MessageSearchExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/messaging/MessageSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MessageSearchExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // Page (id=MessageSearch) at MessageSearch.pcf: line 8, column 65
    static function parent_10 () : pcf.api.Destination {
      return pcf.Monitoring.createDestination()
    }
    
    override property get CurrentLocation () : pcf.MessageSearch {
      return super.CurrentLocation as pcf.MessageSearch
    }
    
    function createMessageSearchCriteria() : gw.system.messaging.MessageSearchCriteria {
            var criteria = new gw.system.messaging.MessageSearchCriteria()
            criteria.MessageStatus = MessageSearchStatus.TC_UNFINISHED
            return criteria
          }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/messaging/MessageSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends MessageSearchExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=RetryButton) at MessageSearch.pcf: line 37, column 51
    function allCheckedRowsAction_3 (CheckedValues :  entity.Message[], CheckedValuesErrors :  java.util.Map) : void {
      gw.api.admin.MessagingUtil.retryRetryableMessages(CheckedValues)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=SkipButton) at MessageSearch.pcf: line 46, column 50
    function allCheckedRowsAction_5 (CheckedValues :  entity.Message[], CheckedValuesErrors :  java.util.Map) : void {
      CheckedValues.each( \ message -> message.skip() )
    }
    
    // 'def' attribute on PanelRef at MessageSearch.pcf: line 22, column 50
    function def_onEnter_0 (def :  pcf.MessageSearchDV) : void {
      def.onEnter(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at MessageSearch.pcf: line 24, column 44
    function def_onEnter_6 (def :  pcf.MessageResultsLV) : void {
      def.onEnter(messages)
    }
    
    // 'def' attribute on PanelRef at MessageSearch.pcf: line 22, column 50
    function def_refreshVariables_1 (def :  pcf.MessageSearchDV) : void {
      def.refreshVariables(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at MessageSearch.pcf: line 24, column 44
    function def_refreshVariables_7 (def :  pcf.MessageResultsLV) : void {
      def.refreshVariables(messages)
    }
    
    // 'searchCriteria' attribute on SearchPanel at MessageSearch.pcf: line 20, column 77
    function searchCriteria_9 () : gw.system.messaging.MessageSearchCriteria {
      return createMessageSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel at MessageSearch.pcf: line 20, column 77
    function search_8 () : java.lang.Object {
      return searchCriteria.performSearch()
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=RetryButton) at MessageSearch.pcf: line 37, column 51
    function visible_2 () : java.lang.Boolean {
      return perm.System.retrymessage
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=SkipButton) at MessageSearch.pcf: line 46, column 50
    function visible_4 () : java.lang.Boolean {
      return perm.System.skipmessage
    }
    
    property get messages () : gw.api.database.IQueryBeanResult<Message> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<Message>
    }
    
    property get searchCriteria () : gw.system.messaging.MessageSearchCriteria {
      return getCriteriaValue(1) as gw.system.messaging.MessageSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.system.messaging.MessageSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}