package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountContactRolePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountContactRolePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountContactRolePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountContactRolePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (acctContactRole :  AccountContactRole) : int {
      return 0
    }
    
    // 'def' attribute on InputSetRef at AccountContactRolePopup.pcf: line 25, column 45
    function def_onEnter_1 (def :  pcf.AccountContactInputSet_Driver) : void {
      def.onEnter(acctContactRole)
    }
    
    // 'def' attribute on InputSetRef at AccountContactRolePopup.pcf: line 25, column 45
    function def_onEnter_3 (def :  pcf.AccountContactInputSet_NamedInsured) : void {
      def.onEnter(acctContactRole)
    }
    
    // 'def' attribute on InputSetRef at AccountContactRolePopup.pcf: line 25, column 45
    function def_onEnter_5 (def :  pcf.AccountContactInputSet_OwnerOfficer) : void {
      def.onEnter(acctContactRole)
    }
    
    // 'def' attribute on InputSetRef at AccountContactRolePopup.pcf: line 25, column 45
    function def_onEnter_7 (def :  pcf.AccountContactInputSet_default) : void {
      def.onEnter(acctContactRole)
    }
    
    // 'def' attribute on InputSetRef at AccountContactRolePopup.pcf: line 25, column 45
    function def_refreshVariables_2 (def :  pcf.AccountContactInputSet_Driver) : void {
      def.refreshVariables(acctContactRole)
    }
    
    // 'def' attribute on InputSetRef at AccountContactRolePopup.pcf: line 25, column 45
    function def_refreshVariables_4 (def :  pcf.AccountContactInputSet_NamedInsured) : void {
      def.refreshVariables(acctContactRole)
    }
    
    // 'def' attribute on InputSetRef at AccountContactRolePopup.pcf: line 25, column 45
    function def_refreshVariables_6 (def :  pcf.AccountContactInputSet_OwnerOfficer) : void {
      def.refreshVariables(acctContactRole)
    }
    
    // 'def' attribute on InputSetRef at AccountContactRolePopup.pcf: line 25, column 45
    function def_refreshVariables_8 (def :  pcf.AccountContactInputSet_default) : void {
      def.refreshVariables(acctContactRole)
    }
    
    // EditButtons at AccountContactRolePopup.pcf: line 17, column 23
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'mode' attribute on InputSetRef at AccountContactRolePopup.pcf: line 25, column 45
    function mode_9 () : java.lang.Object {
      return acctContactRole.Subtype
    }
    
    // 'title' attribute on Popup (id=AccountContactRolePopup) at AccountContactRolePopup.pcf: line 9, column 59
    static function title_10 (acctContactRole :  AccountContactRole) : java.lang.Object {
      return (typeof acctContactRole).TypeInfo.DisplayName
    }
    
    override property get CurrentLocation () : pcf.AccountContactRolePopup {
      return super.CurrentLocation as pcf.AccountContactRolePopup
    }
    
    property get acctContactRole () : AccountContactRole {
      return getVariableValue("acctContactRole", 0) as AccountContactRole
    }
    
    property set acctContactRole ($arg :  AccountContactRole) {
      setVariableValue("acctContactRole", 0, $arg)
    }
    
    
  }
  
  
}