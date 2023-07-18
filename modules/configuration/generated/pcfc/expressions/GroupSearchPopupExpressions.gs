package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/groupsearch/GroupSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GroupSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/groupsearch/GroupSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GroupSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    static function __constructorIndex (excludeGroup :  Group, org :  Organization) : int {
      return 1
    }
    
    // 'def' attribute on ScreenRef at GroupSearchPopup.pcf: line 23, column 57
    function def_onEnter_0 (def :  pcf.GroupSearchPickerScreen) : void {
      def.onEnter(excludeGroup, org)
    }
    
    // 'def' attribute on ScreenRef at GroupSearchPopup.pcf: line 23, column 57
    function def_refreshVariables_1 (def :  pcf.GroupSearchPickerScreen) : void {
      def.refreshVariables(excludeGroup, org)
    }
    
    override property get CurrentLocation () : pcf.GroupSearchPopup {
      return super.CurrentLocation as pcf.GroupSearchPopup
    }
    
    property get excludeGroup () : Group {
      return getVariableValue("excludeGroup", 0) as Group
    }
    
    property set excludeGroup ($arg :  Group) {
      setVariableValue("excludeGroup", 0, $arg)
    }
    
    property get org () : Organization {
      return getVariableValue("org", 0) as Organization
    }
    
    property set org ($arg :  Organization) {
      setVariableValue("org", 0, $arg)
    }
    
    
  }
  
  
}