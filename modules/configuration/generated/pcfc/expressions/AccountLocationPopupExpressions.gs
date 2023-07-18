package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountLocationPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountLocationPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountLocationPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountLocationPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (theLocation :  AccountLocation, account :  Account, shouldEdit :  boolean) : int {
      return 0
    }
    
    // 'afterEnter' attribute on Popup (id=AccountLocationPopup) at AccountLocationPopup.pcf: line 13, column 89
    function afterEnter_4 () : void {
      if (theLocation == null and shouldEdit) { theLocation = account.newLocation(); }
    }
    
    // 'beforeCommit' attribute on Popup (id=AccountLocationPopup) at AccountLocationPopup.pcf: line 13, column 89
    function beforeCommit_5 (pickedValue :  AccountLocation) : void {
      if (!theLocation.New) {theLocation.validateStateAndCountryHaveNotChanged()}
    }
    
    // 'canEdit' attribute on Popup (id=AccountLocationPopup) at AccountLocationPopup.pcf: line 13, column 89
    function canEdit_6 () : java.lang.Boolean {
      return shouldEdit
    }
    
    // 'def' attribute on InputSetRef at AccountLocationPopup.pcf: line 34, column 63
    function def_onEnter_2 (def :  pcf.AccountLocationDetailInputSet) : void {
      def.onEnter(theLocation)
    }
    
    // 'def' attribute on InputSetRef at AccountLocationPopup.pcf: line 34, column 63
    function def_refreshVariables_3 (def :  pcf.AccountLocationDetailInputSet) : void {
      def.refreshVariables(theLocation)
    }
    
    // 'infoBar' attribute on Popup (id=AccountLocationPopup) at AccountLocationPopup.pcf: line 13, column 89
    function infoBar_onEnter_7 (def :  pcf.AccountFileInfoBar) : void {
      def.onEnter(account)
    }
    
    // 'infoBar' attribute on Popup (id=AccountLocationPopup) at AccountLocationPopup.pcf: line 13, column 89
    function infoBar_refreshVariables_8 (def :  pcf.AccountFileInfoBar) : void {
      def.refreshVariables(account)
    }
    
    // EditButtons at AccountLocationPopup.pcf: line 29, column 36
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'pickValue' attribute on EditButtons at AccountLocationPopup.pcf: line 29, column 36
    function pickValue_0 () : AccountLocation {
      return theLocation
    }
    
    override property get CurrentLocation () : pcf.AccountLocationPopup {
      return super.CurrentLocation as pcf.AccountLocationPopup
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    property get shouldEdit () : boolean {
      return getVariableValue("shouldEdit", 0) as java.lang.Boolean
    }
    
    property set shouldEdit ($arg :  boolean) {
      setVariableValue("shouldEdit", 0, $arg)
    }
    
    property get theLocation () : AccountLocation {
      return getVariableValue("theLocation", 0) as AccountLocation
    }
    
    property set theLocation ($arg :  AccountLocation) {
      setVariableValue("theLocation", 0, $arg)
    }
    
    
  }
  
  
}