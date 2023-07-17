package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDNewExposureFieldPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDNewExposureFieldPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDNewExposureFieldPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDNewExposureFieldPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (riskExposures :  APDRiskExposure[], exposure :  APDExposure, edition :  APDProductLineEdition) : int {
      return 0
    }
    
    // 'afterEnter' attribute on Popup (id=APDNewExposureFieldPopup) at APDNewExposureFieldPopup.pcf: line 11, column 89
    function afterEnter_6 () : void {
      riskExposures.each(\re -> field.buildField(re))
    }
    
    // 'def' attribute on InputSetRef at APDNewExposureFieldPopup.pcf: line 34, column 61
    function def_onEnter_2 (def :  pcf.APDExposureFieldInputSet) : void {
      def.onEnter(field, edition)
    }
    
    // 'def' attribute on PanelRef (id=ExposureLocalizedValues) at APDNewExposureFieldPopup.pcf: line 39, column 39
    function def_onEnter_4 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(field, {"Label"}, {DisplayKey.get("Web.Policy.ManualLine.APDAttribute.Label")})
    }
    
    // 'def' attribute on InputSetRef at APDNewExposureFieldPopup.pcf: line 34, column 61
    function def_refreshVariables_3 (def :  pcf.APDExposureFieldInputSet) : void {
      def.refreshVariables(field, edition)
    }
    
    // 'def' attribute on PanelRef (id=ExposureLocalizedValues) at APDNewExposureFieldPopup.pcf: line 39, column 39
    function def_refreshVariables_5 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(field, {"Label"}, {DisplayKey.get("Web.Policy.ManualLine.APDAttribute.Label")})
    }
    
    // 'initialValue' attribute on Variable at APDNewExposureFieldPopup.pcf: line 26, column 32
    function initialValue_0 () : APDExposureField {
      return exposure.createAndAddField()
    }
    
    // EditButtons at APDNewExposureFieldPopup.pcf: line 29, column 23
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    override property get CurrentLocation () : pcf.APDNewExposureFieldPopup {
      return super.CurrentLocation as pcf.APDNewExposureFieldPopup
    }
    
    property get edition () : APDProductLineEdition {
      return getVariableValue("edition", 0) as APDProductLineEdition
    }
    
    property set edition ($arg :  APDProductLineEdition) {
      setVariableValue("edition", 0, $arg)
    }
    
    property get exposure () : APDExposure {
      return getVariableValue("exposure", 0) as APDExposure
    }
    
    property set exposure ($arg :  APDExposure) {
      setVariableValue("exposure", 0, $arg)
    }
    
    property get field () : APDExposureField {
      return getVariableValue("field", 0) as APDExposureField
    }
    
    property set field ($arg :  APDExposureField) {
      setVariableValue("field", 0, $arg)
    }
    
    property get riskExposures () : APDRiskExposure[] {
      return getVariableValue("riskExposures", 0) as APDRiskExposure[]
    }
    
    property set riskExposures ($arg :  APDRiskExposure[]) {
      setVariableValue("riskExposures", 0, $arg)
    }
    
    
  }
  
  
}