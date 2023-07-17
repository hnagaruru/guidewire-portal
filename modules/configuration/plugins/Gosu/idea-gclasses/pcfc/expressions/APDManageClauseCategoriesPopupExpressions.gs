package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDManageClauseCategoriesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDManageClauseCategoriesPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDManageClauseCategoriesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDManageClauseCategoriesPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (coverable :  APDCoverable) : int {
      return 0
    }
    
    static function __constructorIndex (coverable :  APDCoverable, startInEditMode :  boolean) : int {
      return 1
    }
    
    // 'beforeCommit' attribute on Popup (id=APDManageClauseCategoriesPopup) at APDManageClauseCategoriesPopup.pcf: line 10, column 82
    function beforeCommit_7 (pickedValue :  java.lang.Object) : void {
      coverable.ProductLine.productLineUpdated()
    }
    
    // 'canEdit' attribute on Popup (id=APDManageClauseCategoriesPopup) at APDManageClauseCategoriesPopup.pcf: line 10, column 82
    function canEdit_8 () : java.lang.Boolean {
      return startInEditMode
    }
    
    override property get CurrentLocation () : pcf.APDManageClauseCategoriesPopup {
      return super.CurrentLocation as pcf.APDManageClauseCategoriesPopup
    }
    
    property get coverable () : APDCoverable {
      return getVariableValue("coverable", 0) as APDCoverable
    }
    
    property set coverable ($arg :  APDCoverable) {
      setVariableValue("coverable", 0, $arg)
    }
    
    property get startInEditMode () : boolean {
      return getVariableValue("startInEditMode", 0) as java.lang.Boolean
    }
    
    property set startInEditMode ($arg :  boolean) {
      setVariableValue("startInEditMode", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDManageClauseCategoriesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends APDManageClauseCategoriesPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=ClauseCategories) at APDManageClauseCategoriesPopup.pcf: line 30, column 33
    function def_onEnter_1 (def :  pcf.APDClauseCategoryLV) : void {
      def.onEnter( coverable )
    }
    
    // 'def' attribute on InputSetRef at APDManageClauseCategoriesPopup.pcf: line 47, column 75
    function def_onEnter_3 (def :  pcf.APDClauseCategoryInputSet) : void {
      def.onEnter(clauseCategory, false)
    }
    
    // 'def' attribute on PanelRef (id=LocalizedFields) at APDManageClauseCategoriesPopup.pcf: line 52, column 37
    function def_onEnter_5 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(clauseCategory, {"Name", "Description"}, {DisplayKey.get("Web.APDClauseCategoryInputSet.Name"), DisplayKey.get("Web.APDClauseCategoryInputSet.Description")})
    }
    
    // 'def' attribute on PanelRef (id=ClauseCategories) at APDManageClauseCategoriesPopup.pcf: line 30, column 33
    function def_refreshVariables_2 (def :  pcf.APDClauseCategoryLV) : void {
      def.refreshVariables( coverable )
    }
    
    // 'def' attribute on InputSetRef at APDManageClauseCategoriesPopup.pcf: line 47, column 75
    function def_refreshVariables_4 (def :  pcf.APDClauseCategoryInputSet) : void {
      def.refreshVariables(clauseCategory, false)
    }
    
    // 'def' attribute on PanelRef (id=LocalizedFields) at APDManageClauseCategoriesPopup.pcf: line 52, column 37
    function def_refreshVariables_6 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(clauseCategory, {"Name", "Description"}, {DisplayKey.get("Web.APDClauseCategoryInputSet.Name"), DisplayKey.get("Web.APDClauseCategoryInputSet.Description")})
    }
    
    // EditButtons at APDManageClauseCategoriesPopup.pcf: line 32, column 27
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    property get clauseCategory () : APDClauseCategory {
      return getCurrentSelection(1) as APDClauseCategory
    }
    
    property set clauseCategory ($arg :  APDClauseCategory) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}