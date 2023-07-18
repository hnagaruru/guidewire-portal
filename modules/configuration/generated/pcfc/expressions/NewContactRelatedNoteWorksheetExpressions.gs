package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/note/NewContactRelatedNoteWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewContactRelatedNoteWorksheetExpressions {
  @javax.annotation.Generated("config/web/pcf/note/NewContactRelatedNoteWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewContactRelatedNoteWorksheetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (contact :  Contact) : int {
      return 0
    }
    
    // 'canVisit' attribute on Worksheet (id=NewContactRelatedNoteWorksheet) at NewContactRelatedNoteWorksheet.pcf: line 11, column 49
    static function canVisit_4 (contact :  Contact) : java.lang.Boolean {
      return perm.Note.create
    }
    
    // 'def' attribute on ScreenRef at NewContactRelatedNoteWorksheet.pcf: line 24, column 43
    function def_onEnter_2 (def :  pcf.NewNoteScreen) : void {
      def.onEnter(newNoteHelper)
    }
    
    // 'def' attribute on ScreenRef at NewContactRelatedNoteWorksheet.pcf: line 24, column 43
    function def_refreshVariables_3 (def :  pcf.NewNoteScreen) : void {
      def.refreshVariables(newNoteHelper)
    }
    
    // 'initialValue' attribute on Variable at NewContactRelatedNoteWorksheet.pcf: line 22, column 37
    function initialValue_1 () : gw.note.NewNoteHelper {
      return gw.note.NewNoteHelper.forContact(contact)
    }
    
    // 'location' attribute on Scope at NewContactRelatedNoteWorksheet.pcf: line 15, column 40
    function location_0 () : pcf.api.Destination {
      return pcf.ContactFile.createDestination(contact)
    }
    
    override property get CurrentLocation () : pcf.NewContactRelatedNoteWorksheet {
      return super.CurrentLocation as pcf.NewContactRelatedNoteWorksheet
    }
    
    property get contact () : Contact {
      return getVariableValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setVariableValue("contact", 0, $arg)
    }
    
    property get newNoteHelper () : gw.note.NewNoteHelper {
      return getVariableValue("newNoteHelper", 0) as gw.note.NewNoteHelper
    }
    
    property set newNoteHelper ($arg :  gw.note.NewNoteHelper) {
      setVariableValue("newNoteHelper", 0, $arg)
    }
    
    
  }
  
  
}