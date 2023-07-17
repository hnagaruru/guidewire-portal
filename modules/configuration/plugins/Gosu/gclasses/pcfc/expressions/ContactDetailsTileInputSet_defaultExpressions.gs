package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/overview/ContactDetailsTileInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactDetailsTileInputSet_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/account/overview/ContactDetailsTileInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactDetailsTileInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get accountDetailsTileHelper () : gw.api.web.dashboard.ui.account.AccountDetailHelper {
      return getRequireValue("accountDetailsTileHelper", 0) as gw.api.web.dashboard.ui.account.AccountDetailHelper
    }
    
    property set accountDetailsTileHelper ($arg :  gw.api.web.dashboard.ui.account.AccountDetailHelper) {
      setRequireValue("accountDetailsTileHelper", 0, $arg)
    }
    
    
  }
  
  
}