package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDNewLibraryCategoryPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDNewLibraryCategoryPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDNewLibraryCategoryPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDNewLibraryCategoryPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (coverable :  APDCoverable) : int {
      return 0
    }
    
    // 'def' attribute on InputSetRef at APDNewLibraryCategoryPopup.pcf: line 31, column 62
    function def_onEnter_3 (def :  pcf.APDClauseCategoryInputSet) : void {
      def.onEnter(category, true)
    }
    
    // 'def' attribute on PanelRef (id=ProductLocalizedValues) at APDNewLibraryCategoryPopup.pcf: line 36, column 38
    function def_onEnter_5 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(category, {"Name", "Description"}, {DisplayKey.get("Web.APDClauseCategoryInputSet.Name"), DisplayKey.get("Web.APDClauseCategoryInputSet.Description")})
    }
    
    // 'def' attribute on InputSetRef at APDNewLibraryCategoryPopup.pcf: line 31, column 62
    function def_refreshVariables_4 (def :  pcf.APDClauseCategoryInputSet) : void {
      def.refreshVariables(category, true)
    }
    
    // 'def' attribute on PanelRef (id=ProductLocalizedValues) at APDNewLibraryCategoryPopup.pcf: line 36, column 38
    function def_refreshVariables_6 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(category, {"Name", "Description"}, {DisplayKey.get("Web.APDClauseCategoryInputSet.Name"), DisplayKey.get("Web.APDClauseCategoryInputSet.Description")})
    }
    
    // 'initialValue' attribute on Variable at APDNewLibraryCategoryPopup.pcf: line 20, column 33
    function initialValue_0 () : APDClauseCategory {
      return coverable.addClauseCategory(false)
    }
    
    // EditButtons at APDNewLibraryCategoryPopup.pcf: line 24, column 33
    function label_2 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'pickValue' attribute on EditButtons at APDNewLibraryCategoryPopup.pcf: line 24, column 33
    function pickValue_1 () : APDClauseCategory {
      return category
    }
    
    override property get CurrentLocation () : pcf.APDNewLibraryCategoryPopup {
      return super.CurrentLocation as pcf.APDNewLibraryCategoryPopup
    }
    
    property get category () : APDClauseCategory {
      return getVariableValue("category", 0) as APDClauseCategory
    }
    
    property set category ($arg :  APDClauseCategory) {
      setVariableValue("category", 0, $arg)
    }
    
    property get coverable () : APDCoverable {
      return getVariableValue("coverable", 0) as APDCoverable
    }
    
    property set coverable ($arg :  APDCoverable) {
      setVariableValue("coverable", 0, $arg)
    }
    
    
  }
  
  
}