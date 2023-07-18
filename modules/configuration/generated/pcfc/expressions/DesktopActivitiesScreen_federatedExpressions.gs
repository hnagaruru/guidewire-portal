package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.web.desktop.data.activity.ActivityDTO
@javax.annotation.Generated("config/web/pcf/desktop/DesktopActivitiesScreen.federated.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopActivitiesScreen_federatedExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopActivitiesScreen.federated.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopActivitiesScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on AlertBar (id=DesktopActivities_CanceledActivitiesAlertBar) at DesktopActivitiesScreen.federated.pcf: line 20, column 90
    function action_1 () : void {
      gw.api.web.activity.CanceledActivitiesAlertUtil.goToCanceledActivities()
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=DesktopActivities_AssignButton) at DesktopActivitiesScreen.federated.pcf: line 30, column 25
    function allCheckedRowsAction_4 (CheckedValues :  gw.api.web.desktop.data.activity.ActivityDTO[], CheckedValuesErrors :  java.util.Map) : void {
      openAssignmentPopup(CheckedValues)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=DesktopActivities_SkipButton) at DesktopActivitiesScreen.federated.pcf: line 37, column 25
    function allCheckedRowsAction_5 (CheckedValues :  gw.api.web.desktop.data.activity.ActivityDTO[], CheckedValuesErrors :  java.util.Map) : void {
      skipActivities(CheckedValues)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=DesktopActivities_CompleteButton) at DesktopActivitiesScreen.federated.pcf: line 44, column 25
    function allCheckedRowsAction_6 (CheckedValues :  gw.api.web.desktop.data.activity.ActivityDTO[], CheckedValuesErrors :  java.util.Map) : void {
      completeActivities(CheckedValues)
    }
    
    // 'def' attribute on PanelRef at DesktopActivitiesScreen.federated.pcf: line 22, column 63
    function def_onEnter_9 (def :  pcf.FederatedDesktopActivitiesLV) : void {
      def.onEnter(processedActivities)
    }
    
    // 'def' attribute on PanelRef at DesktopActivitiesScreen.federated.pcf: line 22, column 63
    function def_refreshVariables_10 (def :  pcf.FederatedDesktopActivitiesLV) : void {
      def.refreshVariables(processedActivities)
    }
    
    // 'dismissed' attribute on AlertBar (id=DesktopActivities_CanceledActivitiesAlertBar) at DesktopActivitiesScreen.federated.pcf: line 20, column 90
    function dismissed_2 () : java.lang.Boolean {
      return dismissed
    }
    
    // 'initialValue' attribute on Variable at DesktopActivitiesScreen.federated.pcf: line 11, column 33
    function initialValue_0 () : Set<String> {
      return {}
    }
    
    // 'dismissed' attribute on AlertBar (id=DesktopActivities_CanceledActivitiesAlertBar) at DesktopActivitiesScreen.federated.pcf: line 20, column 90
    function setDismissed_3 (__VALUE :  java.lang.Boolean) : void {
      dismissed = __VALUE
    }
    
    // 'visible' attribute on TextValue (id=DesktopActivities_LateRefreshInfo) at DesktopActivitiesScreen.federated.pcf: line 49, column 49
    function visible_7 () : java.lang.Boolean {
      return !processedActivities.Empty
    }
    
    property get processedActivities () : Set<String> {
      return getVariableValue("processedActivities", 0) as Set<String>
    }
    
    property set processedActivities ($arg :  Set<String>) {
      setVariableValue("processedActivities", 0, $arg)
    }
    
    
        //This is just an example implementation of late refresh handling - the items that are still being processed by federated data are being highlighted until you refresh the page.
        //Customer might choose to mark them otherwise, or even force the refresh after some period of time.
        public function onPopupCancel() {
          processedActivities.clear()
        }
        
        public function openAssignmentPopup(checkedValues : ActivityDTO[]) {
          addProcessedActivities(checkedValues)
          MulticlusterAssignActivitiesPopup.push(
            gw.api.web.activity.MulticlusterActivityAssignmentPopup.newInstance(checkedValues, gw.assignment.AssignmentUtil.DefaultUser, \ -> onPopupCancel()))
        }
        
        public function skipActivities(checkedValues : ActivityDTO[]) {
          addProcessedActivities(checkedValues)
          gw.api.web.activity.FederatedActivityUtil.skipActivities(checkedValues)
        }
    
        public function completeActivities(checkedValues : ActivityDTO[]) {
          addProcessedActivities(checkedValues)
          gw.api.web.activity.FederatedActivityUtil.completeActivities(checkedValues)
        }
        
        property get dismissed() : Boolean {
          return not gw.api.web.activity.FederatedCanceledActivitiesAlertUtil.hasCanceledActivitiesSinceLastDismissed()
        }
    
        property set dismissed(d : Boolean) {
          if (d) {
            gw.api.web.activity.CanceledActivitiesAlertUtil.onDismiss()
          }
        }
        function addProcessedActivities(checkedValues : ActivityDTO[]) {
          processedActivities.addAll(checkedValues.map(\elt -> elt.PublicId).toSet())
        }
        
    
    
  }
  
  
}