package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDNewProductLinePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDNewProductLinePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDNewProductLinePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDNewProductLinePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (product :  APDProduct) : int {
      return 0
    }
    
    // 'def' attribute on PanelRef at APDNewProductLinePopup.pcf: line 24, column 71
    function def_onEnter_2 (def :  pcf.APDCoverableCV) : void {
      def.onEnter(line, null, CurrentLocation.InEditMode)
    }
    
    // 'def' attribute on PanelRef at APDNewProductLinePopup.pcf: line 24, column 71
    function def_refreshVariables_3 (def :  pcf.APDCoverableCV) : void {
      def.refreshVariables(line, null, CurrentLocation.InEditMode)
    }
    
    // 'initialValue' attribute on Variable at APDNewProductLinePopup.pcf: line 18, column 30
    function initialValue_0 () : APDProductLine {
      return product.createAndAddProductLine()
    }
    
    // EditButtons at APDNewProductLinePopup.pcf: line 21, column 23
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    override property get CurrentLocation () : pcf.APDNewProductLinePopup {
      return super.CurrentLocation as pcf.APDNewProductLinePopup
    }
    
    property get line () : APDProductLine {
      return getVariableValue("line", 0) as APDProductLine
    }
    
    property set line ($arg :  APDProductLine) {
      setVariableValue("line", 0, $arg)
    }
    
    property get product () : APDProduct {
      return getVariableValue("product", 0) as APDProduct
    }
    
    property set product ($arg :  APDProduct) {
      setVariableValue("product", 0, $arg)
    }
    
    
  }
  
  
}