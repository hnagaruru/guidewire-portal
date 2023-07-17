package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/EditNoteScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditNoteScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/EditNoteScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditNoteScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at EditNoteScreen.pcf: line 15, column 31
    function def_onEnter_2 (def :  pcf.EditNoteDV) : void {
      def.onEnter(note)
    }
    
    // 'def' attribute on PanelRef at EditNoteScreen.pcf: line 15, column 31
    function def_refreshVariables_3 (def :  pcf.EditNoteDV) : void {
      def.refreshVariables(note)
    }
    
    // EditButtons at EditNoteScreen.pcf: line 12, column 45
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'editVisible' attribute on EditButtons at EditNoteScreen.pcf: line 12, column 45
    function visible_0 () : java.lang.Boolean {
      return perm.Note.edit(note)
    }
    
    property get note () : Note {
      return getRequireValue("note", 0) as Note
    }
    
    property set note ($arg :  Note) {
      setRequireValue("note", 0, $arg)
    }
    
    
  }
  
  
}