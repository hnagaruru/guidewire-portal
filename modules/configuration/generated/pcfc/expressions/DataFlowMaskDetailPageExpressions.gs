package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/flowmeta/DataFlowMaskDetailPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DataFlowMaskDetailPageExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/flowmeta/DataFlowMaskDetailPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DataFlowMaskDetailPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (mask :  EntityFlowMaskData) : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=DataFlowMaskDetailPage) at DataFlowMaskDetailPage.pcf: line 13, column 81
    function afterCancel_2 () : void {
      DataFlowMasks.go()
    }
    
    // 'afterCancel' attribute on Page (id=DataFlowMaskDetailPage) at DataFlowMaskDetailPage.pcf: line 13, column 81
    function afterCancel_dest_3 () : pcf.api.Destination {
      return pcf.DataFlowMasks.createDestination()
    }
    
    // 'afterCommit' attribute on Page (id=DataFlowMaskDetailPage) at DataFlowMaskDetailPage.pcf: line 13, column 81
    function afterCommit_4 (TopLocation :  pcf.api.Location) : void {
      DataFlowMaskDetailPage.go(mask)
    }
    
    // 'canEdit' attribute on Page (id=DataFlowMaskDetailPage) at DataFlowMaskDetailPage.pcf: line 13, column 81
    function canEdit_5 () : java.lang.Boolean {
      return perm.System.exportmasksmanage
    }
    
    // 'def' attribute on ScreenRef at DataFlowMaskDetailPage.pcf: line 20, column 39
    function def_onEnter_0 (def :  pcf.DataFlowMaskScreen) : void {
      def.onEnter(mask)
    }
    
    // 'def' attribute on ScreenRef at DataFlowMaskDetailPage.pcf: line 20, column 39
    function def_refreshVariables_1 (def :  pcf.DataFlowMaskScreen) : void {
      def.refreshVariables(mask)
    }
    
    // 'parent' attribute on Page (id=DataFlowMaskDetailPage) at DataFlowMaskDetailPage.pcf: line 13, column 81
    static function parent_6 (mask :  EntityFlowMaskData) : pcf.api.Destination {
      return pcf.DataFlowMasks.createDestination()
    }
    
    // 'title' attribute on Page (id=DataFlowMaskDetailPage) at DataFlowMaskDetailPage.pcf: line 13, column 81
    static function title_7 (mask :  EntityFlowMaskData) : java.lang.Object {
      return DisplayKey.get("Web.Admin.DataFlowMaskDetail", mask.Name)
    }
    
    override property get CurrentLocation () : pcf.DataFlowMaskDetailPage {
      return super.CurrentLocation as pcf.DataFlowMaskDetailPage
    }
    
    property get mask () : EntityFlowMaskData {
      return getVariableValue("mask", 0) as EntityFlowMaskData
    }
    
    property set mask ($arg :  EntityFlowMaskData) {
      setVariableValue("mask", 0, $arg)
    }
    
    
  }
  
  
}