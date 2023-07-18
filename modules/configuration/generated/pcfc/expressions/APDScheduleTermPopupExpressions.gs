package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDScheduleTermPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDScheduleTermPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDScheduleTermPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDScheduleTermPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (field :  APDTerm, edition :  APDProductLineEdition) : int {
      return 0
    }
    
    static function __constructorIndex (field :  APDTerm, edition :  APDProductLineEdition, startInEditMode :  boolean) : int {
      return 1
    }
    
    // 'def' attribute on InputSetRef at APDScheduleTermPopup.pcf: line 32, column 60
    function def_onEnter_1 (def :  pcf.APDScheduleTermInputSet) : void {
      def.onEnter(field, edition)
    }
    
    // 'def' attribute on PanelRef (id=ScheduleTermLocalizedValues) at APDScheduleTermPopup.pcf: line 37, column 43
    function def_onEnter_3 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(field, {"Label", "Description"}, {DisplayKey.get("Web.Policy.ManualLine.APDAttribute.Label"), DisplayKey.get("Web.Policy.ManualLine.APDAttribute.Description")})
    }
    
    // 'def' attribute on InputSetRef at APDScheduleTermPopup.pcf: line 32, column 60
    function def_refreshVariables_2 (def :  pcf.APDScheduleTermInputSet) : void {
      def.refreshVariables(field, edition)
    }
    
    // 'def' attribute on PanelRef (id=ScheduleTermLocalizedValues) at APDScheduleTermPopup.pcf: line 37, column 43
    function def_refreshVariables_4 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(field, {"Label", "Description"}, {DisplayKey.get("Web.Policy.ManualLine.APDAttribute.Label"), DisplayKey.get("Web.Policy.ManualLine.APDAttribute.Description")})
    }
    
    // EditButtons at APDScheduleTermPopup.pcf: line 27, column 23
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'startInEditMode' attribute on Popup (id=APDScheduleTermPopup) at APDScheduleTermPopup.pcf: line 10, column 90
    function startInEditMode_5 () : java.lang.Boolean {
      return startInEditMode
    }
    
    override property get CurrentLocation () : pcf.APDScheduleTermPopup {
      return super.CurrentLocation as pcf.APDScheduleTermPopup
    }
    
    property get edition () : APDProductLineEdition {
      return getVariableValue("edition", 0) as APDProductLineEdition
    }
    
    property set edition ($arg :  APDProductLineEdition) {
      setVariableValue("edition", 0, $arg)
    }
    
    property get field () : APDTerm {
      return getVariableValue("field", 0) as APDTerm
    }
    
    property set field ($arg :  APDTerm) {
      setVariableValue("field", 0, $arg)
    }
    
    property get startInEditMode () : boolean {
      return getVariableValue("startInEditMode", 0) as java.lang.Boolean
    }
    
    property set startInEditMode ($arg :  boolean) {
      setVariableValue("startInEditMode", 0, $arg)
    }
    
    
  }
  
  
}