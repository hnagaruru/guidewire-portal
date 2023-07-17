package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDNewProductPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDNewProductPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDNewProductPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDNewProductPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (account :  Account, selectionOfProducer :  ProducerSelection) : int {
      return 0
    }
    
    // 'afterCommit' attribute on Popup (id=APDNewProductPopup) at APDNewProductPopup.pcf: line 13, column 65
    function afterCommit_5 (TopLocation :  pcf.api.Location) : void {
      if (account != null && selectionOfProducer != null) {newProduct.createSubmission(account, selectionOfProducer)}
    }
    
    // 'afterEnter' attribute on Popup (id=APDNewProductPopup) at APDNewProductPopup.pcf: line 13, column 65
    function afterEnter_6 () : void {
      newProduct.addDefaultSingleLine()
    }
    
    // 'beforeCommit' attribute on Popup (id=APDNewProductPopup) at APDNewProductPopup.pcf: line 13, column 65
    function beforeCommit_7 (pickedValue :  java.lang.Object) : void {
      if (newProduct.Multiline) newProduct.addDefaultSingleLine()
    }
    
    // 'def' attribute on InputSetRef at APDNewProductPopup.pcf: line 37, column 58
    function def_onEnter_3 (def :  pcf.APDProductAndLineInputSet) : void {
      def.onEnter(newProduct)
    }
    
    // 'def' attribute on InputSetRef at APDNewProductPopup.pcf: line 37, column 58
    function def_refreshVariables_4 (def :  pcf.APDProductAndLineInputSet) : void {
      def.refreshVariables(newProduct)
    }
    
    // 'initialValue' attribute on Variable at APDNewProductPopup.pcf: line 25, column 26
    function initialValue_0 () : APDProduct {
      return new APDProduct()
    }
    
    // 'initialValue' attribute on Variable at APDNewProductPopup.pcf: line 29, column 20
    function initialValue_1 () : User {
      return User.util.CurrentUser
    }
    
    // EditButtons at APDNewProductPopup.pcf: line 32, column 23
    function label_2 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    override property get CurrentLocation () : pcf.APDNewProductPopup {
      return super.CurrentLocation as pcf.APDNewProductPopup
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    property get currentUser () : User {
      return getVariableValue("currentUser", 0) as User
    }
    
    property set currentUser ($arg :  User) {
      setVariableValue("currentUser", 0, $arg)
    }
    
    property get newProduct () : APDProduct {
      return getVariableValue("newProduct", 0) as APDProduct
    }
    
    property set newProduct ($arg :  APDProduct) {
      setVariableValue("newProduct", 0, $arg)
    }
    
    property get selectionOfProducer () : ProducerSelection {
      return getVariableValue("selectionOfProducer", 0) as ProducerSelection
    }
    
    property set selectionOfProducer ($arg :  ProducerSelection) {
      setVariableValue("selectionOfProducer", 0, $arg)
    }
    
    
  }
  
  
}