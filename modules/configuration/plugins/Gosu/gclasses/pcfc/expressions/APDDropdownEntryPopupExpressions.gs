package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDDropdownEntryPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDDropdownEntryPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDDropdownEntryPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDDropdownEntryPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (entry :  APDDropdownEntry) : int {
      return 0
    }
    
    static function __constructorIndex (entry :  APDDropdownEntry, startInEditMode :  boolean) : int {
      return 1
    }
    
    // 'def' attribute on InputSetRef at APDDropdownEntryPopup.pcf: line 29, column 52
    function def_onEnter_1 (def :  pcf.APDDropdownEntryInputSet) : void {
      def.onEnter(entry)
    }
    
    // 'def' attribute on PanelRef (id=DropdownLocalizedValues) at APDDropdownEntryPopup.pcf: line 34, column 39
    function def_onEnter_3 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(entry, {"Name", "Description"}, {DisplayKey.get("Web.APDDropDownEntry.Name"), DisplayKey.get("Web.APDDropDownEntry.Description")})
    }
    
    // 'def' attribute on InputSetRef at APDDropdownEntryPopup.pcf: line 29, column 52
    function def_refreshVariables_2 (def :  pcf.APDDropdownEntryInputSet) : void {
      def.refreshVariables(entry)
    }
    
    // 'def' attribute on PanelRef (id=DropdownLocalizedValues) at APDDropdownEntryPopup.pcf: line 34, column 39
    function def_refreshVariables_4 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(entry, {"Name", "Description"}, {DisplayKey.get("Web.APDDropDownEntry.Name"), DisplayKey.get("Web.APDDropDownEntry.Description")})
    }
    
    // EditButtons at APDDropdownEntryPopup.pcf: line 24, column 23
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'startInEditMode' attribute on Popup (id=APDDropdownEntryPopup) at APDDropdownEntryPopup.pcf: line 10, column 67
    function startInEditMode_5 () : java.lang.Boolean {
      return startInEditMode
    }
    
    override property get CurrentLocation () : pcf.APDDropdownEntryPopup {
      return super.CurrentLocation as pcf.APDDropdownEntryPopup
    }
    
    property get entry () : APDDropdownEntry {
      return getVariableValue("entry", 0) as APDDropdownEntry
    }
    
    property set entry ($arg :  APDDropdownEntry) {
      setVariableValue("entry", 0, $arg)
    }
    
    property get startInEditMode () : boolean {
      return getVariableValue("startInEditMode", 0) as java.lang.Boolean
    }
    
    property set startInEditMode ($arg :  boolean) {
      setVariableValue("startInEditMode", 0, $arg)
    }
    
    
  }
  
  
}