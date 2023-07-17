package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDNewDropdownEntryPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDNewDropdownEntryPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDNewDropdownEntryPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDNewDropdownEntryPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (field :  APDDataField) : int {
      return 0
    }
    
    // 'def' attribute on InputSetRef at APDNewDropdownEntryPopup.pcf: line 27, column 52
    function def_onEnter_2 (def :  pcf.APDDropdownEntryInputSet) : void {
      def.onEnter(entry)
    }
    
    // 'def' attribute on PanelRef (id=DropdownLocalizedValues) at APDNewDropdownEntryPopup.pcf: line 32, column 39
    function def_onEnter_4 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(entry, {"Name", "Description"}, {DisplayKey.get("Web.APDDropDownEntry.Name"), DisplayKey.get("Web.APDDropDownEntry.Description")})
    }
    
    // 'def' attribute on InputSetRef at APDNewDropdownEntryPopup.pcf: line 27, column 52
    function def_refreshVariables_3 (def :  pcf.APDDropdownEntryInputSet) : void {
      def.refreshVariables(entry)
    }
    
    // 'def' attribute on PanelRef (id=DropdownLocalizedValues) at APDNewDropdownEntryPopup.pcf: line 32, column 39
    function def_refreshVariables_5 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(entry, {"Name", "Description"}, {DisplayKey.get("Web.APDDropDownEntry.Name"), DisplayKey.get("Web.APDDropDownEntry.Description")})
    }
    
    // 'initialValue' attribute on Variable at APDNewDropdownEntryPopup.pcf: line 19, column 32
    function initialValue_0 () : APDDropdownEntry {
      return field.assignNewDropdownEntry()
    }
    
    // EditButtons at APDNewDropdownEntryPopup.pcf: line 22, column 23
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    override property get CurrentLocation () : pcf.APDNewDropdownEntryPopup {
      return super.CurrentLocation as pcf.APDNewDropdownEntryPopup
    }
    
    property get entry () : APDDropdownEntry {
      return getVariableValue("entry", 0) as APDDropdownEntry
    }
    
    property set entry ($arg :  APDDropdownEntry) {
      setVariableValue("entry", 0, $arg)
    }
    
    property get field () : APDDataField {
      return getVariableValue("field", 0) as APDDataField
    }
    
    property set field ($arg :  APDDataField) {
      setVariableValue("field", 0, $arg)
    }
    
    
  }
  
  
}