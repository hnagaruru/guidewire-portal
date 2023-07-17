package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDClauseCategoryPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDClauseCategoryPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDClauseCategoryPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDClauseCategoryPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (category :  APDClauseCategory) : int {
      return 0
    }
    
    static function __constructorIndex (category :  APDClauseCategory, startInEditMode :  boolean) : int {
      return 1
    }
    
    // 'def' attribute on InputSetRef at APDClauseCategoryPopup.pcf: line 31, column 63
    function def_onEnter_1 (def :  pcf.APDClauseCategoryInputSet) : void {
      def.onEnter(category, false)
    }
    
    // 'def' attribute on PanelRef (id=ProductLocalizedValues) at APDClauseCategoryPopup.pcf: line 36, column 38
    function def_onEnter_3 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(category, {"Name", "Description"}, {DisplayKey.get("Web.APDProductScreen.APDProduct.Name"), DisplayKey.get("Web.APDProductScreen.APDProduct.Description")})
    }
    
    // 'def' attribute on InputSetRef at APDClauseCategoryPopup.pcf: line 31, column 63
    function def_refreshVariables_2 (def :  pcf.APDClauseCategoryInputSet) : void {
      def.refreshVariables(category, false)
    }
    
    // 'def' attribute on PanelRef (id=ProductLocalizedValues) at APDClauseCategoryPopup.pcf: line 36, column 38
    function def_refreshVariables_4 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(category, {"Name", "Description"}, {DisplayKey.get("Web.APDProductScreen.APDProduct.Name"), DisplayKey.get("Web.APDProductScreen.APDProduct.Description")})
    }
    
    // EditButtons at APDClauseCategoryPopup.pcf: line 24, column 23
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'startInEditMode' attribute on Popup (id=APDClauseCategoryPopup) at APDClauseCategoryPopup.pcf: line 10, column 74
    function startInEditMode_5 () : java.lang.Boolean {
      return startInEditMode
    }
    
    override property get CurrentLocation () : pcf.APDClauseCategoryPopup {
      return super.CurrentLocation as pcf.APDClauseCategoryPopup
    }
    
    property get category () : APDClauseCategory {
      return getVariableValue("category", 0) as APDClauseCategory
    }
    
    property set category ($arg :  APDClauseCategory) {
      setVariableValue("category", 0, $arg)
    }
    
    property get startInEditMode () : boolean {
      return getVariableValue("startInEditMode", 0) as java.lang.Boolean
    }
    
    property set startInEditMode ($arg :  boolean) {
      setVariableValue("startInEditMode", 0, $arg)
    }
    
    
  }
  
  
}