package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDExposureFieldPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDExposureFieldPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDExposureFieldPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDExposureFieldPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (field :  APDExposureField, edition :  APDProductLineEdition) : int {
      return 0
    }
    
    static function __constructorIndex (field :  APDExposureField, edition :  APDProductLineEdition, startInEditMode :  boolean) : int {
      return 1
    }
    
    // 'def' attribute on InputSetRef at APDExposureFieldPopup.pcf: line 32, column 61
    function def_onEnter_1 (def :  pcf.APDExposureFieldInputSet) : void {
      def.onEnter(field, edition)
    }
    
    // 'def' attribute on PanelRef (id=ExposureLocalizedValues) at APDExposureFieldPopup.pcf: line 37, column 39
    function def_onEnter_3 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(field, {"Label"}, {DisplayKey.get("Web.Policy.ManualLine.APDAttribute.Label")})
    }
    
    // 'def' attribute on InputSetRef at APDExposureFieldPopup.pcf: line 32, column 61
    function def_refreshVariables_2 (def :  pcf.APDExposureFieldInputSet) : void {
      def.refreshVariables(field, edition)
    }
    
    // 'def' attribute on PanelRef (id=ExposureLocalizedValues) at APDExposureFieldPopup.pcf: line 37, column 39
    function def_refreshVariables_4 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(field, {"Label"}, {DisplayKey.get("Web.Policy.ManualLine.APDAttribute.Label")})
    }
    
    // EditButtons at APDExposureFieldPopup.pcf: line 27, column 23
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'startInEditMode' attribute on Popup (id=APDExposureFieldPopup) at APDExposureFieldPopup.pcf: line 10, column 91
    function startInEditMode_5 () : java.lang.Boolean {
      return startInEditMode
    }
    
    override property get CurrentLocation () : pcf.APDExposureFieldPopup {
      return super.CurrentLocation as pcf.APDExposureFieldPopup
    }
    
    property get edition () : APDProductLineEdition {
      return getVariableValue("edition", 0) as APDProductLineEdition
    }
    
    property set edition ($arg :  APDProductLineEdition) {
      setVariableValue("edition", 0, $arg)
    }
    
    property get field () : APDExposureField {
      return getVariableValue("field", 0) as APDExposureField
    }
    
    property set field ($arg :  APDExposureField) {
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