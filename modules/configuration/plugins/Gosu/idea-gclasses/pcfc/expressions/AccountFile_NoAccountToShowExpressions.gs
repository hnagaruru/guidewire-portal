package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountFile_NoAccountToShow.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountFile_NoAccountToShowExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_NoAccountToShow.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFile_NoAccountToShowExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'parent' attribute on Page (id=AccountFile_NoAccountToShow) at AccountFile_NoAccountToShow.pcf: line 8, column 69
    static function parent_0 () : pcf.api.Destination {
      return pcf.AccountFile.createDestination(null)
    }
    
    override property get CurrentLocation () : pcf.AccountFile_NoAccountToShow {
      return super.CurrentLocation as pcf.AccountFile_NoAccountToShow
    }
    
    
  }
  
  
}