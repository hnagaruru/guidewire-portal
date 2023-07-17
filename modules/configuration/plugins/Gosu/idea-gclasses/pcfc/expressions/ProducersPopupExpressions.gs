package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/overview/ProducersPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ProducersPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/account/overview/ProducersPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ProducersPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ProducersPopup.pcf: line 30, column 75
    function valueRoot_5 () : java.lang.Object {
      return producerCode.ProducerCode.Organization
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at ProducersPopup.pcf: line 34, column 55
    function valueRoot_8 () : java.lang.Object {
      return producerCode.ProducerCode
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ProducersPopup.pcf: line 30, column 75
    function value_4 () : java.lang.String {
      return producerCode.ProducerCode.Organization.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at ProducersPopup.pcf: line 34, column 55
    function value_7 () : java.lang.String {
      return producerCode.ProducerCode.Code
    }
    
    property get producerCode () : entity.AccountProducerCode {
      return getIteratedValue(1) as entity.AccountProducerCode
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/overview/ProducersPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ProducersPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (account :  Account) : int {
      return 0
    }
    
    // 'sortBy' attribute on IteratorSort at ProducersPopup.pcf: line 22, column 28
    function sortBy_0 (producerCode :  entity.AccountProducerCode) : java.lang.Object {
      return producerCode.ProducerCode.Organization.DisplayName
    }
    
    // 'sortBy' attribute on IteratorSort at ProducersPopup.pcf: line 25, column 28
    function sortBy_1 (producerCode :  entity.AccountProducerCode) : java.lang.Object {
      return producerCode.ProducerCode.Code
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ProducersPopup.pcf: line 30, column 75
    function sortValue_2 (producerCode :  entity.AccountProducerCode) : java.lang.Object {
      return producerCode.ProducerCode.Organization.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at ProducersPopup.pcf: line 34, column 55
    function sortValue_3 (producerCode :  entity.AccountProducerCode) : java.lang.Object {
      return producerCode.ProducerCode.Code
    }
    
    // 'value' attribute on RowIterator at ProducersPopup.pcf: line 19, column 52
    function value_10 () : entity.AccountProducerCode[] {
      return account.ProducerCodes
    }
    
    override property get CurrentLocation () : pcf.ProducersPopup {
      return super.CurrentLocation as pcf.ProducersPopup
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    
  }
  
  
}