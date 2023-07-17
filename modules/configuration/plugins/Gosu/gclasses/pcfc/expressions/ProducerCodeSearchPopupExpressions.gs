package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/ProducerCodeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ProducerCodeSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/search/ProducerCodeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ProducerCodeSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
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
    
    static function __constructorIndex (producer :  Organization, forUse :  ProducerStatusUse) : int {
      return 2
    }
    
    // 'def' attribute on ScreenRef at ProducerCodeSearchPopup.pcf: line 22, column 71
    function def_onEnter_0 (def :  pcf.ProducerCodeSearchScreen) : void {
      def.onEnter(producer, forUse, false, false)
    }
    
    // 'def' attribute on ScreenRef at ProducerCodeSearchPopup.pcf: line 22, column 71
    function def_refreshVariables_1 (def :  pcf.ProducerCodeSearchScreen) : void {
      def.refreshVariables(producer, forUse, false, false)
    }
    
    override property get CurrentLocation () : pcf.ProducerCodeSearchPopup {
      return super.CurrentLocation as pcf.ProducerCodeSearchPopup
    }
    
    property get forUse () : ProducerStatusUse {
      return getVariableValue("forUse", 0) as ProducerStatusUse
    }
    
    property set forUse ($arg :  ProducerStatusUse) {
      setVariableValue("forUse", 0, $arg)
    }
    
    property get producer () : Organization {
      return getVariableValue("producer", 0) as Organization
    }
    
    property set producer ($arg :  Organization) {
      setVariableValue("producer", 0, $arg)
    }
    
    
  }
  
  
}