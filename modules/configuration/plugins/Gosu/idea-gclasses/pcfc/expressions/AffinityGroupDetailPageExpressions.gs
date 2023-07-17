package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/affinitygroup/AffinityGroupDetailPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AffinityGroupDetailPageExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/affinitygroup/AffinityGroupDetailPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AffinityGroupDetailPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (AffinityGroup :  AffinityGroup) : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Page (id=AffinityGroupDetailPage) at AffinityGroupDetailPage.pcf: line 15, column 98
    function beforeCommit_2 (pickedValue :  java.lang.Object) : void {
      gw.admin.affinitygroup.AffinityGroupValidation.validate(AffinityGroup)
    }
    
    // 'def' attribute on ScreenRef at AffinityGroupDetailPage.pcf: line 22, column 55
    function def_onEnter_0 (def :  pcf.AffinityGroupDetailScreen) : void {
      def.onEnter(AffinityGroup)
    }
    
    // 'def' attribute on ScreenRef at AffinityGroupDetailPage.pcf: line 22, column 55
    function def_refreshVariables_1 (def :  pcf.AffinityGroupDetailScreen) : void {
      def.refreshVariables(AffinityGroup)
    }
    
    // 'parent' attribute on Page (id=AffinityGroupDetailPage) at AffinityGroupDetailPage.pcf: line 15, column 98
    static function parent_3 (AffinityGroup :  AffinityGroup) : pcf.api.Destination {
      return pcf.Admin.createDestination(AffinityGroup)
    }
    
    // 'title' attribute on Page (id=AffinityGroupDetailPage) at AffinityGroupDetailPage.pcf: line 15, column 98
    static function title_4 (AffinityGroup :  AffinityGroup) : java.lang.Object {
      return DisplayKey.get("Web.Admin.AffinityGroupDetail", AffinityGroup.DisplayName)
    }
    
    property get AffinityGroup () : AffinityGroup {
      return getVariableValue("AffinityGroup", 0) as AffinityGroup
    }
    
    property set AffinityGroup ($arg :  AffinityGroup) {
      setVariableValue("AffinityGroup", 0, $arg)
    }
    
    override property get CurrentLocation () : pcf.AffinityGroupDetailPage {
      return super.CurrentLocation as pcf.AffinityGroupDetailPage
    }
    
    
  }
  
  
}