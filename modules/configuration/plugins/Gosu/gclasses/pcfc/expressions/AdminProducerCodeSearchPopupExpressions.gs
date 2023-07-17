package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/search/AdminProducerCodeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdminProducerCodeSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/search/AdminProducerCodeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdminProducerCodeSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    static function __constructorIndex (producer :  Organization) : int {
      return 1
    }
    
    static function __constructorIndex (producer :  Organization, filter :  java.util.Set, havingRoles :  boolean) : int {
      return 2
    }
    
    // 'def' attribute on ScreenRef at AdminProducerCodeSearchPopup.pcf: line 27, column 82
    function def_onEnter_1 (def :  pcf.AdminProducerCodeSearchScreen) : void {
      def.onEnter(producer, filter, havingRoles, false)
    }
    
    // 'def' attribute on ScreenRef at AdminProducerCodeSearchPopup.pcf: line 27, column 82
    function def_refreshVariables_2 (def :  pcf.AdminProducerCodeSearchScreen) : void {
      def.refreshVariables(producer, filter, havingRoles, false)
    }
    
    // 'initialValue' attribute on Variable at AdminProducerCodeSearchPopup.pcf: line 25, column 29
    function initialValue_0 () : java.util.Set {
      return new java.util.TreeSet()
    }
    
    override property get CurrentLocation () : pcf.AdminProducerCodeSearchPopup {
      return super.CurrentLocation as pcf.AdminProducerCodeSearchPopup
    }
    
    property get filter () : java.util.Set {
      return getVariableValue("filter", 0) as java.util.Set
    }
    
    property set filter ($arg :  java.util.Set) {
      setVariableValue("filter", 0, $arg)
    }
    
    property get havingRoles () : boolean {
      return getVariableValue("havingRoles", 0) as java.lang.Boolean
    }
    
    property set havingRoles ($arg :  boolean) {
      setVariableValue("havingRoles", 0, $arg)
    }
    
    property get producer () : Organization {
      return getVariableValue("producer", 0) as Organization
    }
    
    property set producer ($arg :  Organization) {
      setVariableValue("producer", 0, $arg)
    }
    
    
  }
  
  
}