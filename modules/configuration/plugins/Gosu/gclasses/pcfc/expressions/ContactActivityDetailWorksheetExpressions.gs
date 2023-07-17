package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/activity/ContactActivityDetailWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactActivityDetailWorksheetExpressions {
  @javax.annotation.Generated("config/web/pcf/activity/ContactActivityDetailWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactActivityDetailWorksheetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (activity :  Activity, accountContact :  AccountContact) : int {
      return 0
    }
    
    // 'afterCommit' attribute on Worksheet (id=ContactActivityDetailWorksheet) at ContactActivityDetailWorksheet.pcf: line 12, column 74
    function afterCommit_4 (TopLocation :  pcf.api.Location) : void {
      gw.api.web.activity.ActivityUtil.markActivityAsViewed(activity)
    }
    
    // 'canEdit' attribute on Worksheet (id=ContactActivityDetailWorksheet) at ContactActivityDetailWorksheet.pcf: line 12, column 74
    function canEdit_5 () : java.lang.Boolean {
      return activity.AssignedUser==entity.User.util.CurrentUser
    }
    
    // 'canVisit' attribute on Worksheet (id=ContactActivityDetailWorksheet) at ContactActivityDetailWorksheet.pcf: line 12, column 74
    static function canVisit_6 (accountContact :  AccountContact, activity :  Activity) : java.lang.Boolean {
      return perm.Account.view(activity.Account)
    }
    
    // 'def' attribute on ScreenRef at ContactActivityDetailWorksheet.pcf: line 28, column 57
    function def_onEnter_2 (def :  pcf.ActivityDetailScreen) : void {
      def.onEnter(activity, note, null)
    }
    
    // 'def' attribute on ScreenRef at ContactActivityDetailWorksheet.pcf: line 28, column 57
    function def_refreshVariables_3 (def :  pcf.ActivityDetailScreen) : void {
      def.refreshVariables(activity, note, null)
    }
    
    // 'initialValue' attribute on Variable at ContactActivityDetailWorksheet.pcf: line 23, column 27
    function initialValue_1 () : entity.Note {
      return gw.api.database.Query.make(entity.Note).compare(entity.Note#Activity.PropertyInfo.Name, Equals, activity).select().FirstResult
    }
    
    // 'location' attribute on Scope at ContactActivityDetailWorksheet.pcf: line 16, column 59
    function location_0 () : pcf.api.Destination {
      return pcf.EditAccountContactPopup.createDestination(accountContact)
    }
    
    override property get CurrentLocation () : pcf.ContactActivityDetailWorksheet {
      return super.CurrentLocation as pcf.ContactActivityDetailWorksheet
    }
    
    property get accountContact () : AccountContact {
      return getVariableValue("accountContact", 0) as AccountContact
    }
    
    property set accountContact ($arg :  AccountContact) {
      setVariableValue("accountContact", 0, $arg)
    }
    
    property get activity () : Activity {
      return getVariableValue("activity", 0) as Activity
    }
    
    property set activity ($arg :  Activity) {
      setVariableValue("activity", 0, $arg)
    }
    
    property get note () : entity.Note {
      return getVariableValue("note", 0) as entity.Note
    }
    
    property set note ($arg :  entity.Note) {
      setVariableValue("note", 0, $arg)
    }
    
    
  }
  
  
}