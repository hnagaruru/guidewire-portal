package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDSubCoveragesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDSubCoveragesPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDSubCoveragesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDSubCoveragesPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (clause :  APDClause, edition :  APDProductLineEdition, openForEdit :  boolean, inDevelopMode :  boolean) : int {
      return 0
    }
    
    // 'canEdit' attribute on Popup (id=APDSubCoveragesPopup) at APDSubCoveragesPopup.pcf: line 10, column 85
    function canEdit_3 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'def' attribute on PanelRef at APDSubCoveragesPopup.pcf: line 30, column 100
    function def_onEnter_1 (def :  pcf.APDCoveragesPanelSet) : void {
      def.onEnter(clause.Coverable, clause, edition, openForEdit, inDevelopMode)
    }
    
    // 'def' attribute on PanelRef at APDSubCoveragesPopup.pcf: line 30, column 100
    function def_refreshVariables_2 (def :  pcf.APDCoveragesPanelSet) : void {
      def.refreshVariables(clause.Coverable, clause, edition, openForEdit, inDevelopMode)
    }
    
    // EditButtons at APDSubCoveragesPopup.pcf: line 27, column 23
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'title' attribute on Popup (id=APDSubCoveragesPopup) at APDSubCoveragesPopup.pcf: line 10, column 85
    static function title_4 (clause :  APDClause, edition :  APDProductLineEdition, inDevelopMode :  boolean, openForEdit :  boolean) : java.lang.Object {
      return DisplayKey.get("Web.APDSubCoveragesPopup.Title", clause.Name)
    }
    
    override property get CurrentLocation () : pcf.APDSubCoveragesPopup {
      return super.CurrentLocation as pcf.APDSubCoveragesPopup
    }
    
    property get clause () : APDClause {
      return getVariableValue("clause", 0) as APDClause
    }
    
    property set clause ($arg :  APDClause) {
      setVariableValue("clause", 0, $arg)
    }
    
    property get edition () : APDProductLineEdition {
      return getVariableValue("edition", 0) as APDProductLineEdition
    }
    
    property set edition ($arg :  APDProductLineEdition) {
      setVariableValue("edition", 0, $arg)
    }
    
    property get inDevelopMode () : boolean {
      return getVariableValue("inDevelopMode", 0) as java.lang.Boolean
    }
    
    property set inDevelopMode ($arg :  boolean) {
      setVariableValue("inDevelopMode", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getVariableValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setVariableValue("openForEdit", 0, $arg)
    }
    
    
  }
  
  
}