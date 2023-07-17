package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/affinitygroup/NewAffinityGroup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewAffinityGroupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/affinitygroup/NewAffinityGroup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewAffinityGroupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=NewAffinityGroup) at NewAffinityGroup.pcf: line 15, column 68
    function afterCancel_3 () : void {
      Admin.go()
    }
    
    // 'afterCancel' attribute on Page (id=NewAffinityGroup) at NewAffinityGroup.pcf: line 15, column 68
    function afterCancel_dest_4 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    // 'afterCommit' attribute on Page (id=NewAffinityGroup) at NewAffinityGroup.pcf: line 15, column 68
    function afterCommit_5 (TopLocation :  pcf.api.Location) : void {
      AffinityGroupDetailPage.go(affinityGroup)
    }
    
    // 'beforeCommit' attribute on Page (id=NewAffinityGroup) at NewAffinityGroup.pcf: line 15, column 68
    function beforeCommit_6 (pickedValue :  java.lang.Object) : void {
      gw.admin.affinitygroup.AffinityGroupValidation.validate(affinityGroup)
    }
    
    // 'canVisit' attribute on Page (id=NewAffinityGroup) at NewAffinityGroup.pcf: line 15, column 68
    static function canVisit_7 () : java.lang.Boolean {
      return perm.System.affinitygroupadmin
    }
    
    // 'def' attribute on ScreenRef at NewAffinityGroup.pcf: line 23, column 55
    function def_onEnter_1 (def :  pcf.AffinityGroupDetailScreen) : void {
      def.onEnter(affinityGroup)
    }
    
    // 'def' attribute on ScreenRef at NewAffinityGroup.pcf: line 23, column 55
    function def_refreshVariables_2 (def :  pcf.AffinityGroupDetailScreen) : void {
      def.refreshVariables(affinityGroup)
    }
    
    // 'initialValue' attribute on Variable at NewAffinityGroup.pcf: line 21, column 29
    function initialValue_0 () : AffinityGroup {
      return new AffinityGroup()
    }
    
    // 'parent' attribute on Page (id=NewAffinityGroup) at NewAffinityGroup.pcf: line 15, column 68
    static function parent_8 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    override property get CurrentLocation () : pcf.NewAffinityGroup {
      return super.CurrentLocation as pcf.NewAffinityGroup
    }
    
    property get affinityGroup () : AffinityGroup {
      return getVariableValue("affinityGroup", 0) as AffinityGroup
    }
    
    property set affinityGroup ($arg :  AffinityGroup) {
      setVariableValue("affinityGroup", 0, $arg)
    }
    
    
  }
  
  
}