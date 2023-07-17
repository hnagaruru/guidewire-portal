package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDSubConditionsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDSubConditionsPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDSubConditionsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDSubConditionsPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (clause :  APDClause, edition :  APDProductLineEdition, openForEdit :  boolean, inDevelopMode :  boolean) : int {
      return 0
    }
    
    // 'canEdit' attribute on Popup (id=APDSubConditionsPopup) at APDSubConditionsPopup.pcf: line 10, column 86
    function canEdit_3 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'def' attribute on PanelRef at APDSubConditionsPopup.pcf: line 30, column 101
    function def_onEnter_1 (def :  pcf.APDConditionsPanelSet) : void {
      def.onEnter(clause.Coverable, clause, edition, openForEdit, inDevelopMode)
    }
    
    // 'def' attribute on PanelRef at APDSubConditionsPopup.pcf: line 30, column 101
    function def_refreshVariables_2 (def :  pcf.APDConditionsPanelSet) : void {
      def.refreshVariables(clause.Coverable, clause, edition, openForEdit, inDevelopMode)
    }
    
    // EditButtons at APDSubConditionsPopup.pcf: line 27, column 23
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'title' attribute on Popup (id=APDSubConditionsPopup) at APDSubConditionsPopup.pcf: line 10, column 86
    static function title_4 (clause :  APDClause, edition :  APDProductLineEdition, inDevelopMode :  boolean, openForEdit :  boolean) : java.lang.Object {
      return DisplayKey.get("Web.APDSubConditionsPopup.Title", clause.Name)
    }
    
    override property get CurrentLocation () : pcf.APDSubConditionsPopup {
      return super.CurrentLocation as pcf.APDSubConditionsPopup
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