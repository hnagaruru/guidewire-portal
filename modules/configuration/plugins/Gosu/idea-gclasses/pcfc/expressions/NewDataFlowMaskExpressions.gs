package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/flowmeta/NewDataFlowMask.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewDataFlowMaskExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/flowmeta/NewDataFlowMask.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewDataFlowMaskExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (initialEntityType :  Type) : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=NewDataFlowMask) at NewDataFlowMask.pcf: line 14, column 59
    function afterCancel_3 () : void {
      DataFlowMasks.go()
    }
    
    // 'afterCancel' attribute on Page (id=NewDataFlowMask) at NewDataFlowMask.pcf: line 14, column 59
    function afterCancel_dest_4 () : pcf.api.Destination {
      return pcf.DataFlowMasks.createDestination()
    }
    
    // 'afterCommit' attribute on Page (id=NewDataFlowMask) at NewDataFlowMask.pcf: line 14, column 59
    function afterCommit_5 (TopLocation :  pcf.api.Location) : void {
      DataFlowMasks.go()
    }
    
    // 'canVisit' attribute on Page (id=NewDataFlowMask) at NewDataFlowMask.pcf: line 14, column 59
    static function canVisit_6 (initialEntityType :  Type) : java.lang.Boolean {
      return perm.System.exportmasksmanage
    }
    
    // 'def' attribute on ScreenRef at NewDataFlowMask.pcf: line 25, column 39
    function def_onEnter_1 (def :  pcf.DataFlowMaskScreen) : void {
      def.onEnter(mask)
    }
    
    // 'def' attribute on ScreenRef at NewDataFlowMask.pcf: line 25, column 39
    function def_refreshVariables_2 (def :  pcf.DataFlowMaskScreen) : void {
      def.refreshVariables(mask)
    }
    
    // 'initialValue' attribute on Variable at NewDataFlowMask.pcf: line 20, column 34
    function initialValue_0 () : EntityFlowMaskData {
      return new EntityFlowMaskData() {:EntityTypeName = initialEntityType.Name}
    }
    
    // 'parent' attribute on Page (id=NewDataFlowMask) at NewDataFlowMask.pcf: line 14, column 59
    static function parent_7 (initialEntityType :  Type) : pcf.api.Destination {
      return pcf.DataFlowMasks.createDestination()
    }
    
    override property get CurrentLocation () : pcf.NewDataFlowMask {
      return super.CurrentLocation as pcf.NewDataFlowMask
    }
    
    property get initialEntityType () : Type {
      return getVariableValue("initialEntityType", 0) as Type
    }
    
    property set initialEntityType ($arg :  Type) {
      setVariableValue("initialEntityType", 0, $arg)
    }
    
    property get mask () : EntityFlowMaskData {
      return getVariableValue("mask", 0) as EntityFlowMaskData
    }
    
    property set mask ($arg :  EntityFlowMaskData) {
      setVariableValue("mask", 0, $arg)
    }
    
    
  }
  
  
}