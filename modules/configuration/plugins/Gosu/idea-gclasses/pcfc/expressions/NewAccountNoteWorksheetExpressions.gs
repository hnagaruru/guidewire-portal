package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/note/NewAccountNoteWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewAccountNoteWorksheetExpressions {
  @javax.annotation.Generated("config/web/pcf/note/NewAccountNoteWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewAccountNoteWorksheetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (account :  Account) : int {
      return 0
    }
    
    // 'canVisit' attribute on Worksheet (id=NewAccountNoteWorksheet) at NewAccountNoteWorksheet.pcf: line 11, column 49
    static function canVisit_5 (account :  Account) : java.lang.Boolean {
      return perm.Note.create
    }
    
    // 'def' attribute on ScreenRef at NewAccountNoteWorksheet.pcf: line 26, column 43
    function def_onEnter_3 (def :  pcf.NewNoteScreen) : void {
      def.onEnter(newNoteHelper)
    }
    
    // 'def' attribute on ScreenRef at NewAccountNoteWorksheet.pcf: line 26, column 43
    function def_refreshVariables_4 (def :  pcf.NewNoteScreen) : void {
      def.refreshVariables(newNoteHelper)
    }
    
    // 'initialValue' attribute on Variable at NewAccountNoteWorksheet.pcf: line 24, column 37
    function initialValue_2 () : gw.note.NewNoteHelper {
      return gw.note.NewNoteHelper.forAccount(account)
    }
    
    // 'location' attribute on Scope at NewAccountNoteWorksheet.pcf: line 15, column 40
    function location_0 () : pcf.api.Destination {
      return pcf.AccountFile.createDestination(account)
    }
    
    // 'location' attribute on Scope at NewAccountNoteWorksheet.pcf: line 17, column 35
    function location_1 () : pcf.api.Destination {
      return pcf.PolicyForward.createDestination()
    }
    
    override property get CurrentLocation () : pcf.NewAccountNoteWorksheet {
      return super.CurrentLocation as pcf.NewAccountNoteWorksheet
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    property get newNoteHelper () : gw.note.NewNoteHelper {
      return getVariableValue("newNoteHelper", 0) as gw.note.NewNoteHelper
    }
    
    property set newNoteHelper ($arg :  gw.note.NewNoteHelper) {
      setVariableValue("newNoteHelper", 0, $arg)
    }
    
    
  }
  
  
}