package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/RICededPremiums_AllPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RICededPremiums_AllPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/RICededPremiums_AllPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RICededPremiums_AllPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (ririsk :  RIRisk) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=PrintMe) at RICededPremiums_AllPopup.pcf: line 22, column 74
    function action_1 () : void {
      gw.api.print.ListViewPrintOptionPopupAction.printListViewOnlyWithOptions( "RICededPremiums_AllLV" )
    }
    
    // 'def' attribute on PanelRef at RICededPremiums_AllPopup.pcf: line 15, column 104
    function def_onEnter_2 (def :  pcf.RICededPremiums_AllLV) : void {
      def.onEnter(ririsk, gw.web.admin.ReinsuranceUIHelper.getCededPremiums(ririsk))
    }
    
    // 'def' attribute on PanelRef at RICededPremiums_AllPopup.pcf: line 15, column 104
    function def_refreshVariables_3 (def :  pcf.RICededPremiums_AllLV) : void {
      def.refreshVariables(ririsk, gw.web.admin.ReinsuranceUIHelper.getCededPremiums(ririsk))
    }
    
    // 'title' attribute on TitleBar at RICededPremiums_AllPopup.pcf: line 17, column 130
    function title_0 () : java.lang.String {
      return ririsk.Reinsurable.DisplayName + "(" + ririsk.Reinsurable.CoverageGroup.DisplayName + ")"
    }
    
    override property get CurrentLocation () : pcf.RICededPremiums_AllPopup {
      return super.CurrentLocation as pcf.RICededPremiums_AllPopup
    }
    
    property get ririsk () : RIRisk {
      return getVariableValue("ririsk", 0) as RIRisk
    }
    
    property set ririsk ($arg :  RIRisk) {
      setVariableValue("ririsk", 0, $arg)
    }
    
    
  }
  
  
}