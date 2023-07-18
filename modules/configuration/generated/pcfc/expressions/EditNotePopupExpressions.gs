package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/EditNotePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditNotePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/EditNotePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditNotePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (note :  Note) : int {
      return 0
    }
    
    static function __constructorIndex (note :  Note, startInEditMode :  boolean) : int {
      return 1
    }
    
    // 'def' attribute on ScreenRef at EditNotePopup.pcf: line 22, column 35
    function def_onEnter_0 (def :  pcf.EditNoteScreen) : void {
      def.onEnter(note)
    }
    
    // 'def' attribute on ScreenRef at EditNotePopup.pcf: line 22, column 35
    function def_refreshVariables_1 (def :  pcf.EditNoteScreen) : void {
      def.refreshVariables(note)
    }
    
    // 'startInEditMode' attribute on Popup (id=EditNotePopup) at EditNotePopup.pcf: line 9, column 55
    function startInEditMode_2 () : java.lang.Boolean {
      return startInEditMode
    }
    
    override property get CurrentLocation () : pcf.EditNotePopup {
      return super.CurrentLocation as pcf.EditNotePopup
    }
    
    property get note () : Note {
      return getVariableValue("note", 0) as Note
    }
    
    property set note ($arg :  Note) {
      setVariableValue("note", 0, $arg)
    }
    
    property get startInEditMode () : boolean {
      return getVariableValue("startInEditMode", 0) as java.lang.Boolean
    }
    
    property set startInEditMode ($arg :  boolean) {
      setVariableValue("startInEditMode", 0, $arg)
    }
    
    
  }
  
  
}