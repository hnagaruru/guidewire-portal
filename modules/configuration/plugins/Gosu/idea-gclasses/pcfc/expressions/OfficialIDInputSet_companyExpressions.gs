package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/OfficialIDInputSet.company.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class OfficialIDInputSet_companyExpressions {
  @javax.annotation.Generated("config/web/pcf/account/OfficialIDInputSet.company.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OfficialIDInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=OfficialIDDV_Input_Input) at OfficialIDInputSet.company.pcf: line 21, column 39
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      company.FEINOfficialID = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at OfficialIDInputSet.company.pcf: line 15, column 23
    function initialValue_0 () : Company {
      return (companyContact as Company)
    }
    
    // 'value' attribute on TextInput (id=OfficialIDDV_Input_Input) at OfficialIDInputSet.company.pcf: line 21, column 39
    function valueRoot_3 () : java.lang.Object {
      return company
    }
    
    // 'value' attribute on TextInput (id=OfficialIDDV_Input_Input) at OfficialIDInputSet.company.pcf: line 21, column 39
    function value_1 () : java.lang.String {
      return company.FEINOfficialID
    }
    
    property get company () : Company {
      return getVariableValue("company", 0) as Company
    }
    
    property set company ($arg :  Company) {
      setVariableValue("company", 0, $arg)
    }
    
    property get companyContact () : Contact {
      return getRequireValue("companyContact", 0) as Contact
    }
    
    property set companyContact ($arg :  Contact) {
      setRequireValue("companyContact", 0, $arg)
    }
    
    function checkValidFEIN(contact : Contact, fein : String) : String {
      var query = gw.api.database.Query.make(OfficialID)
      query.compare(OfficialID#OfficialIDValue.PropertyInfo.Name, Equals, fein)
      query.compare(OfficialID#OfficialIDType.PropertyInfo.Name, Equals, OfficialIDType.TC_FEIN)
      var officialID = query.select().FirstResult
      if(officialID != null and officialID.Contact != contact) {
        return DisplayKey.get("Web.OfficialID.DuplicateFEIN")
      }
      return null
    }
    
    
  }
  
  
}