package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/overview/ContactDetailsTileInputSet.person.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactDetailsTileInputSet_personExpressions {
  @javax.annotation.Generated("config/web/pcf/account/overview/ContactDetailsTileInputSet.person.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactDetailsTileInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'encryptionExpression' attribute on PrivacyInput (id=SSN_Input) at ContactDetailsTileInputSet.person.pcf: line 20, column 37
    function encryptionExpression_4 (VALUE :  java.lang.String) : java.lang.String {
      return gw.api.privacy.EncryptionMaskExpressions.maskTaxId(person.SSNOfficialID)
    }
    
    // 'initialValue' attribute on Variable at ContactDetailsTileInputSet.person.pcf: line 14, column 22
    function initialValue_0 () : Person {
      return (accountDetailsTileHelper.Account.AccountHolderContact as Person)
    }
    
    // 'inputMask' attribute on PrivacyInput (id=SSN_Input) at ContactDetailsTileInputSet.person.pcf: line 20, column 37
    function inputMask_3 () : java.lang.String {
      return '###-##-####'
    }
    
    // 'value' attribute on PrivacyInput (id=SSN_Input) at ContactDetailsTileInputSet.person.pcf: line 20, column 37
    function valueRoot_2 () : java.lang.Object {
      return person
    }
    
    // 'value' attribute on PrivacyInput (id=SSN_Input) at ContactDetailsTileInputSet.person.pcf: line 20, column 37
    function value_1 () : java.lang.String {
      return person.SSNOfficialID
    }
    
    property get accountDetailsTileHelper () : gw.api.web.dashboard.ui.account.AccountDetailHelper {
      return getRequireValue("accountDetailsTileHelper", 0) as gw.api.web.dashboard.ui.account.AccountDetailHelper
    }
    
    property set accountDetailsTileHelper ($arg :  gw.api.web.dashboard.ui.account.AccountDetailHelper) {
      setRequireValue("accountDetailsTileHelper", 0, $arg)
    }
    
    property get person () : Person {
      return getVariableValue("person", 0) as Person
    }
    
    property set person ($arg :  Person) {
      setVariableValue("person", 0, $arg)
    }
    
    
  }
  
  
}