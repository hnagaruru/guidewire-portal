package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/flowmeta/DataFlowMaskScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DataFlowMaskScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/flowmeta/DataFlowMaskScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DataFlowMaskScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at DataFlowMaskScreen.pcf: line 15, column 41
    function def_onEnter_2 (def :  pcf.DataFlowMaskDetailDV) : void {
      def.onEnter(mask)
    }
    
    // 'def' attribute on PanelRef at DataFlowMaskScreen.pcf: line 15, column 41
    function def_refreshVariables_3 (def :  pcf.DataFlowMaskDetailDV) : void {
      def.refreshVariables(mask)
    }
    
    // EditButtons at DataFlowMaskScreen.pcf: line 12, column 54
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'editVisible' attribute on EditButtons at DataFlowMaskScreen.pcf: line 12, column 54
    function visible_0 () : java.lang.Boolean {
      return perm.System.exportmasksmanage
    }
    
    property get mask () : EntityFlowMaskData {
      return getRequireValue("mask", 0) as EntityFlowMaskData
    }
    
    property set mask ($arg :  EntityFlowMaskData) {
      setRequireValue("mask", 0, $arg)
    }
    
    
  }
  
  
}