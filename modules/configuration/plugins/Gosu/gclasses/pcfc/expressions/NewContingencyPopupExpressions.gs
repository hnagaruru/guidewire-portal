package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/NewContingencyPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewContingencyPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/NewContingencyPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewContingencyPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (contingencyCreator :  gw.api.contingency.ContingencyCreator) : int {
      return 0
    }
    
    // 'afterCommit' attribute on Popup (id=NewContingencyPopup) at NewContingencyPopup.pcf: line 10, column 62
    function afterCommit_3 (TopLocation :  pcf.api.Location) : void {
      contingency.Bundle.commit()
    }
    
    // 'def' attribute on PanelRef at NewContingencyPopup.pcf: line 27, column 51
    function def_onEnter_1 (def :  pcf.BaseContingencyInfoDV) : void {
      def.onEnter(contingency)
    }
    
    // 'def' attribute on PanelRef at NewContingencyPopup.pcf: line 27, column 51
    function def_refreshVariables_2 (def :  pcf.BaseContingencyInfoDV) : void {
      def.refreshVariables(contingency)
    }
    
    // 'initialValue' attribute on Variable at NewContingencyPopup.pcf: line 19, column 27
    function initialValue_0 () : Contingency {
      return contingencyCreator.createContingency()
    }
    
    override property get CurrentLocation () : pcf.NewContingencyPopup {
      return super.CurrentLocation as pcf.NewContingencyPopup
    }
    
    property get contingency () : Contingency {
      return getVariableValue("contingency", 0) as Contingency
    }
    
    property set contingency ($arg :  Contingency) {
      setVariableValue("contingency", 0, $arg)
    }
    
    property get contingencyCreator () : gw.api.contingency.ContingencyCreator {
      return getVariableValue("contingencyCreator", 0) as gw.api.contingency.ContingencyCreator
    }
    
    property set contingencyCreator ($arg :  gw.api.contingency.ContingencyCreator) {
      setVariableValue("contingencyCreator", 0, $arg)
    }
    
    
  }
  
  
}