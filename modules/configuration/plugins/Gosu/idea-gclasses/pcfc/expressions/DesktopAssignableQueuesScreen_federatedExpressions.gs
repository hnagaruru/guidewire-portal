package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.web.desktop.data.activity.ActivityDTO
@javax.annotation.Generated("config/web/pcf/desktop/DesktopAssignableQueuesScreen.federated.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopAssignableQueuesScreen_federatedExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopAssignableQueuesScreen.federated.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopAssignableQueuesScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=AssignFirstButton) at DesktopAssignableQueuesScreen.federated.pcf: line 25, column 23
    function action_4 () : void {
      assignFirstToMe()
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=AssignSelectedButton) at DesktopAssignableQueuesScreen.federated.pcf: line 33, column 48
    function allCheckedRowsAction_6 (CheckedValues :  gw.api.web.desktop.data.activity.ActivityDTO[], CheckedValuesErrors :  java.util.Map) : void {
      assignSelectedToMe(CheckedValues)
    }
    
    // 'available' attribute on ToolbarButton (id=AssignFirstButton) at DesktopAssignableQueuesScreen.federated.pcf: line 25, column 23
    function available_3 () : java.lang.Boolean {
      return !gw.api.util.MulticlusterAssignableQueueUtil.isSelectedQueueEmpty(CurrentLocation)
    }
    
    // 'def' attribute on PanelRef at DesktopAssignableQueuesScreen.federated.pcf: line 37, column 70
    function def_onEnter_7 (def :  pcf.FederatedDesktopAssignableQueuesLV) : void {
      def.onEnter(processedActivities)
    }
    
    // 'def' attribute on PanelRef at DesktopAssignableQueuesScreen.federated.pcf: line 37, column 70
    function def_refreshVariables_8 (def :  pcf.FederatedDesktopAssignableQueuesLV) : void {
      def.refreshVariables(processedActivities)
    }
    
    // 'initialValue' attribute on Variable at DesktopAssignableQueuesScreen.federated.pcf: line 11, column 33
    function initialValue_0 () : Set<String> {
      return {}
    }
    
    // 'visible' attribute on TextValue (id=DesktopActivities_LateRefreshInfo) at DesktopAssignableQueuesScreen.federated.pcf: line 19, column 47
    function visible_1 () : java.lang.Boolean {
      return !processedActivities.Empty
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=AssignSelectedButton) at DesktopAssignableQueuesScreen.federated.pcf: line 33, column 48
    function visible_5 () : java.lang.Boolean {
      return perm.Activity.pickfromqueue
    }
    
    property get processedActivities () : Set<String> {
      return getVariableValue("processedActivities", 0) as Set<String>
    }
    
    property set processedActivities ($arg :  Set<String>) {
      setVariableValue("processedActivities", 0, $arg)
    }
    
        //This is just an example implementation of late refresh handling - the items that are still being processed by federated data are being highlighted until you refresh the page.
        //Customer might choose to mark them otherwise, or even force the refresh after some period of time.
        public function assignSelectedToMe(checkedValues: ActivityDTO[]) {
          processedActivities.addAll(checkedValues.map(\elt -> elt.PublicId).toSet())
          gw.api.util.MulticlusterAssignableQueueUtil.Instance.assignActivitiesFromQueue(checkedValues)
        }
        
        public function assignFirstToMe() {
          processedActivities.add(gw.api.util.MulticlusterAssignableQueueUtil.Instance.assignFirstActivity(CurrentLocation))
        }
        
    
    
  }
  
  
}