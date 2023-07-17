package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/entrypoints/AccountFile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountFileEntryPointExpressions {
  @javax.annotation.Generated("config/web/pcf/entrypoints/AccountFile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on EntryPoint (id=AccountFile) at AccountFile.pcf: line 8, column 61
    function location_0 () : pcf.api.Destination {
      return pcf.AccountFileDoRetrievalForward.createDestination(AccountNumber)
    }
    
    property get AccountNumber () : String {
      return getVariableValue("AccountNumber", 0) as String
    }
    
    property set AccountNumber ($arg :  String) {
      setVariableValue("AccountNumber", 0, $arg)
    }
    
    
  }
  
  
}