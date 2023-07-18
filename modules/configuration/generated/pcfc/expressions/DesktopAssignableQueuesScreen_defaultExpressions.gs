package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/DesktopAssignableQueuesScreen.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopAssignableQueuesScreen_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopAssignableQueuesScreen.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopAssignableQueuesScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=AssignFirstButton) at DesktopAssignableQueuesScreen.default.pcf: line 16, column 23
    function action_1 () : void {
      gw.api.web.assignment.AssignableQueueUtil.assignFirstActivity(CurrentLocation)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=AssignSelectedButton) at DesktopAssignableQueuesScreen.default.pcf: line 24, column 48
    function allCheckedRowsAction_3 (CheckedValues :  Activity[], CheckedValuesErrors :  java.util.Map) : void {
      gw.api.web.assignment.AssignableQueueUtil.assignActivitiesFromQueue(CheckedValues)
    }
    
    // 'available' attribute on ToolbarButton (id=AssignFirstButton) at DesktopAssignableQueuesScreen.default.pcf: line 16, column 23
    function available_0 () : java.lang.Boolean {
      return !gw.api.web.assignment.AssignableQueueUtil.isSelectedQueueEmpty(CurrentLocation)
    }
    
    // 'def' attribute on PanelRef at DesktopAssignableQueuesScreen.default.pcf: line 28, column 42
    function def_onEnter_4 (def :  pcf.DesktopAssignableQueuesLV) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at DesktopAssignableQueuesScreen.default.pcf: line 28, column 42
    function def_refreshVariables_5 (def :  pcf.DesktopAssignableQueuesLV) : void {
      def.refreshVariables()
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=AssignSelectedButton) at DesktopAssignableQueuesScreen.default.pcf: line 24, column 48
    function visible_2 () : java.lang.Boolean {
      return perm.Activity.pickfromqueue
    }
    
    
  }
  
  
}