package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/OfficialIDInputSet.person.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class OfficialIDInputSet_personExpressions {
  @javax.annotation.Generated("config/web/pcf/account/OfficialIDInputSet.person.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OfficialIDInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrivacyInput (id=OfficialIDDV_Input_Input) at OfficialIDInputSet.person.pcf: line 22, column 37
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      person.SSNOfficialID = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'encryptionExpression' attribute on PrivacyInput (id=OfficialIDDV_Input_Input) at OfficialIDInputSet.person.pcf: line 22, column 37
    function encryptionExpression_4 (VALUE :  java.lang.String) : java.lang.String {
      return gw.api.privacy.EncryptionMaskExpressions.maskTaxId(person.SSNOfficialID)
    }
    
    // 'initialValue' attribute on Variable at OfficialIDInputSet.person.pcf: line 15, column 22
    function initialValue_0 () : Person {
      return (personContact as Person)
    }
    
    // 'value' attribute on PrivacyInput (id=OfficialIDDV_Input_Input) at OfficialIDInputSet.person.pcf: line 22, column 37
    function valueRoot_3 () : java.lang.Object {
      return person
    }
    
    // 'value' attribute on PrivacyInput (id=OfficialIDDV_Input_Input) at OfficialIDInputSet.person.pcf: line 22, column 37
    function value_1 () : java.lang.String {
      return person.SSNOfficialID
    }
    
    property get person () : Person {
      return getVariableValue("person", 0) as Person
    }
    
    property set person ($arg :  Person) {
      setVariableValue("person", 0, $arg)
    }
    
    property get personContact () : Contact {
      return getRequireValue("personContact", 0) as Contact
    }
    
    property set personContact ($arg :  Contact) {
      setRequireValue("personContact", 0, $arg)
    }
    
    function checkValidSSN(contact : Contact, ssn : String) : String {
      var query = gw.api.database.Query.make(OfficialID)
      query.compare(OfficialID#OfficialIDValue.PropertyInfo.Name, Equals, ssn)
      query.compare(OfficialID#OfficialIDType.PropertyInfo.Name, Equals, OfficialIDType.TC_SSN)
      var officialID = query.select().FirstResult
      if(officialID != null and officialID.Contact != contact) {
        return DisplayKey.get("Web.OfficialID.DuplicateSSN")
      }
      return null
    }
    
    
  }
  
  
}