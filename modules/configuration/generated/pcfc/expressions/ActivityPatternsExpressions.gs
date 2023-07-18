package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/businesssettings/ActivityPatterns.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ActivityPatternsExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/businesssettings/ActivityPatterns.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ActivityPatternsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityPatterns_NewActivityPatternButton) at ActivityPatterns.pcf: line 21, column 25
    function action_1 () : void {
      NewActivityPattern.go()
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityPatterns_NewActivityPatternButton) at ActivityPatterns.pcf: line 21, column 25
    function action_dest_2 () : pcf.api.Destination {
      return pcf.NewActivityPattern.createDestination()
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=ActivityPatterns_DeleteButton) at ActivityPatterns.pcf: line 28, column 25
    function allCheckedRowsAction_3 (CheckedValues :  entity.ActivityPattern[], CheckedValuesErrors :  java.util.Map) : void {
      deleteActivityPatterns(CheckedValues)
    }
    
    // 'canVisit' attribute on Page (id=ActivityPatterns) at ActivityPatterns.pcf: line 9, column 68
    static function canVisit_6 () : java.lang.Boolean {
      return perm.System.actpatview
    }
    
    // 'def' attribute on PanelRef at ActivityPatterns.pcf: line 31, column 53
    function def_onEnter_4 (def :  pcf.ActivityPatternsLV) : void {
      def.onEnter(activityPatterns)
    }
    
    // 'def' attribute on PanelRef at ActivityPatterns.pcf: line 31, column 53
    function def_refreshVariables_5 (def :  pcf.ActivityPatternsLV) : void {
      def.refreshVariables(activityPatterns)
    }
    
    // 'initialValue' attribute on Variable at ActivityPatterns.pcf: line 13, column 71
    function initialValue_0 () : gw.api.database.IQueryBeanResult<ActivityPattern> {
      return Activity.finder.findActivityPatterns()
    }
    
    // Page (id=ActivityPatterns) at ActivityPatterns.pcf: line 9, column 68
    static function parent_7 () : pcf.api.Destination {
      return pcf.BusinessSettings.createDestination()
    }
    
    override property get CurrentLocation () : pcf.ActivityPatterns {
      return super.CurrentLocation as pcf.ActivityPatterns
    }
    
    property get activityPatterns () : gw.api.database.IQueryBeanResult<ActivityPattern> {
      return getVariableValue("activityPatterns", 0) as gw.api.database.IQueryBeanResult<ActivityPattern>
    }
    
    property set activityPatterns ($arg :  gw.api.database.IQueryBeanResult<ActivityPattern>) {
      setVariableValue("activityPatterns", 0, $arg)
    }
    
    function deleteActivityPatterns(CheckedValues : ActivityPattern[]) {
      gw.api.admin.BaseAdminUtil.deleteActivityPatterns(CheckedValues)
      activityPatterns = Activity.finder.findActivityPatterns()
    
      
    }
    
    
  }
  
  
}