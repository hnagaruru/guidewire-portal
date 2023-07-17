package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountContactDisplayCell.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountContactDisplayCell_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountContactDisplayCell.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountContactDisplayCellExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=editContactRole) at AccountContactDisplayCell.default.pcf: line 19, column 36
    function action_0 () : void {
      AccountContactRolePopup.push(acctContactRole)
    }
    
    // 'action' attribute on Link (id=editContactRole) at AccountContactDisplayCell.default.pcf: line 19, column 36
    function action_dest_1 () : pcf.api.Destination {
      return pcf.AccountContactRolePopup.createDestination(acctContactRole)
    }
    
    // 'visible' attribute on ContentInput at AccountContactDisplayCell.default.pcf: line 14, column 46
    function visible_2 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    property get acctContactRole () : AccountContactRole {
      return getRequireValue("acctContactRole", 0) as AccountContactRole
    }
    
    property set acctContactRole ($arg :  AccountContactRole) {
      setRequireValue("acctContactRole", 0, $arg)
    }
    
    
  }
  
  
}