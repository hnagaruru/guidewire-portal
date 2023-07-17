package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountContactInputSet.OwnerOfficer.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountContactInputSet_OwnerOfficerExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountContactInputSet.OwnerOfficer.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountContactInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyInput (id=Relationship_Input) at AccountContactInputSet.OwnerOfficer.pcf: line 17, column 41
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      (acctContactRole as OwnerOfficer).RelationshipTitle = (__VALUE_TO_SET as typekey.Relationship)
    }
    
    // 'value' attribute on TypeKeyInput (id=Relationship_Input) at AccountContactInputSet.OwnerOfficer.pcf: line 17, column 41
    function valueRoot_2 () : java.lang.Object {
      return (acctContactRole as OwnerOfficer)
    }
    
    // 'value' attribute on TypeKeyInput (id=Relationship_Input) at AccountContactInputSet.OwnerOfficer.pcf: line 17, column 41
    function value_0 () : typekey.Relationship {
      return (acctContactRole as OwnerOfficer).RelationshipTitle
    }
    
    property get acctContactRole () : AccountContactRole {
      return getRequireValue("acctContactRole", 0) as AccountContactRole
    }
    
    property set acctContactRole ($arg :  AccountContactRole) {
      setRequireValue("acctContactRole", 0, $arg)
    }
    
    
  }
  
  
}