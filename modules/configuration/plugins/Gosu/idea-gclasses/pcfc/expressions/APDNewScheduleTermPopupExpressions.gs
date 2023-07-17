package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDNewScheduleTermPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDNewScheduleTermPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDNewScheduleTermPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDNewScheduleTermPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (riskScheduleItems :  APDRiskScheduleItem[], clause :  APDClause, edition :  APDProductLineEdition) : int {
      return 0
    }
    
    // 'afterEnter' attribute on Popup (id=APDNewScheduleTermPopup) at APDNewScheduleTermPopup.pcf: line 11, column 88
    function afterEnter_6 () : void {
      riskScheduleItems.each(\si -> term.buildScheduleTerm(si))
    }
    
    // 'def' attribute on InputSetRef at APDNewScheduleTermPopup.pcf: line 34, column 59
    function def_onEnter_2 (def :  pcf.APDScheduleTermInputSet) : void {
      def.onEnter(term, edition)
    }
    
    // 'def' attribute on PanelRef (id=ScheduleTermLocalizedValues) at APDNewScheduleTermPopup.pcf: line 39, column 43
    function def_onEnter_4 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(term, {"Label", "Description"}, {DisplayKey.get("Web.Policy.ManualLine.APDAttribute.Label"), DisplayKey.get("Web.Policy.ManualLine.APDAttribute.Description")})
    }
    
    // 'def' attribute on InputSetRef at APDNewScheduleTermPopup.pcf: line 34, column 59
    function def_refreshVariables_3 (def :  pcf.APDScheduleTermInputSet) : void {
      def.refreshVariables(term, edition)
    }
    
    // 'def' attribute on PanelRef (id=ScheduleTermLocalizedValues) at APDNewScheduleTermPopup.pcf: line 39, column 43
    function def_refreshVariables_5 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(term, {"Label", "Description"}, {DisplayKey.get("Web.Policy.ManualLine.APDAttribute.Label"), DisplayKey.get("Web.Policy.ManualLine.APDAttribute.Description")})
    }
    
    // 'initialValue' attribute on Variable at APDNewScheduleTermPopup.pcf: line 26, column 23
    function initialValue_0 () : APDTerm {
      return clause.createAndAddScheduleTerm()
    }
    
    // EditButtons at APDNewScheduleTermPopup.pcf: line 29, column 23
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    override property get CurrentLocation () : pcf.APDNewScheduleTermPopup {
      return super.CurrentLocation as pcf.APDNewScheduleTermPopup
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
    
    property get riskScheduleItems () : APDRiskScheduleItem[] {
      return getVariableValue("riskScheduleItems", 0) as APDRiskScheduleItem[]
    }
    
    property set riskScheduleItems ($arg :  APDRiskScheduleItem[]) {
      setVariableValue("riskScheduleItems", 0, $arg)
    }
    
    property get term () : APDTerm {
      return getVariableValue("term", 0) as APDTerm
    }
    
    property set term ($arg :  APDTerm) {
      setVariableValue("term", 0, $arg)
    }
    
    
  }
  
  
}