package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/DesktopActivitiesScreen.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopActivitiesScreen_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopActivitiesScreen.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopActivitiesScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on AlertBar (id=DesktopActivities_CanceledActivitiesAlertBar) at DesktopActivitiesScreen.default.pcf: line 19, column 90
    function action_1 () : void {
      gw.api.web.activity.CanceledActivitiesAlertUtil.goToCanceledActivities()
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=DesktopActivities_AssignButton) at DesktopActivitiesScreen.default.pcf: line 29, column 25
    function allCheckedRowsAction_4 (CheckedValues :  Activity[], CheckedValuesErrors :  java.util.Map) : void {
      AssignActivitiesPopup.push(new gw.api.web.activity.ActivityAssignmentPopup(CheckedValues, gw.assignment.AssignmentUtil.DefaultUser))
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=DesktopActivities_SkipButton) at DesktopActivitiesScreen.default.pcf: line 36, column 25
    function allCheckedRowsAction_5 (CheckedValues :  Activity[], CheckedValuesErrors :  java.util.Map) : void {
      gw.api.web.activity.ActivityUtil.skipActivities(CheckedValues)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=DesktopActivities_CompleteButton) at DesktopActivitiesScreen.default.pcf: line 43, column 25
    function allCheckedRowsAction_6 (CheckedValues :  Activity[], CheckedValuesErrors :  java.util.Map) : void {
      gw.api.web.activity.ActivityUtil.completeActivities(CheckedValues)
    }
    
    // 'def' attribute on PanelRef at DesktopActivitiesScreen.default.pcf: line 21, column 45
    function def_onEnter_7 (def :  pcf.DesktopActivitiesLV) : void {
      def.onEnter(activities)
    }
    
    // 'def' attribute on PanelRef at DesktopActivitiesScreen.default.pcf: line 21, column 45
    function def_refreshVariables_8 (def :  pcf.DesktopActivitiesLV) : void {
      def.refreshVariables(activities)
    }
    
    // 'dismissed' attribute on AlertBar (id=DesktopActivities_CanceledActivitiesAlertBar) at DesktopActivitiesScreen.default.pcf: line 19, column 90
    function dismissed_2 () : java.lang.Boolean {
      return dismissed
    }
    
    // 'initialValue' attribute on Variable at DesktopActivitiesScreen.default.pcf: line 12, column 71
    function initialValue_0 () : gw.api.database.IQueryBeanResult<entity.Activity> {
      return Activity.finder.getAssignedToCurrentUser()
    }
    
    // 'dismissed' attribute on AlertBar (id=DesktopActivities_CanceledActivitiesAlertBar) at DesktopActivitiesScreen.default.pcf: line 19, column 90
    function setDismissed_3 (__VALUE :  java.lang.Boolean) : void {
      dismissed = __VALUE
    }
    
    property get activities () : gw.api.database.IQueryBeanResult<entity.Activity> {
      return getVariableValue("activities", 0) as gw.api.database.IQueryBeanResult<entity.Activity>
    }
    
    property set activities ($arg :  gw.api.database.IQueryBeanResult<entity.Activity>) {
      setVariableValue("activities", 0, $arg)
    }
    
    
          property get dismissed() : Boolean {
            return not gw.api.web.activity.CanceledActivitiesAlertUtil.hasCanceledActivitiesSinceLastDismissed()
          }
          property set dismissed(d : Boolean) {
            if(d) {
              gw.api.web.activity.CanceledActivitiesAlertUtil.onDismiss()
            }
          }
        
    
    
  }
  
  
}