package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/contacts/BasicContactInfoInputSet.company.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BasicContactInfoInputSet_companyExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/contacts/BasicContactInfoInputSet.company.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BasicContactInfoInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at BasicContactInfoInputSet.company.pcf: line 18, column 54
    function def_onEnter_1 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.onEnter(new gw.search.BasicNameOwner(searchCriteriaAdapter))
    }
    
    // 'def' attribute on InputSetRef at BasicContactInfoInputSet.company.pcf: line 18, column 54
    function def_onEnter_3 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.onEnter(new gw.search.BasicNameOwner(searchCriteriaAdapter))
    }
    
    // 'def' attribute on InputSetRef at BasicContactInfoInputSet.company.pcf: line 18, column 54
    function def_refreshVariables_2 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.refreshVariables(new gw.search.BasicNameOwner(searchCriteriaAdapter))
    }
    
    // 'def' attribute on InputSetRef at BasicContactInfoInputSet.company.pcf: line 18, column 54
    function def_refreshVariables_4 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.refreshVariables(new gw.search.BasicNameOwner(searchCriteriaAdapter))
    }
    
    // 'value' attribute on TextInput (id=TaxID_Input) at BasicContactInfoInputSet.company.pcf: line 29, column 37
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.TaxID = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=PhoneNumber_Input) at BasicContactInfoInputSet.company.pcf: line 36, column 37
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Phone = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=CompanyNameExact_Input) at BasicContactInfoInputSet.company.pcf: line 24, column 44
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.KeywordExact = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'helpText' attribute on TextInput (id=PhoneNumber_Input) at BasicContactInfoInputSet.company.pcf: line 36, column 37
    function helpText_14 () : java.lang.String {
      return DisplayKey.get("Java.PhoneUtil.Example.ToolTip", User.util.CurrentUser.UserDefaultPhoneCountry, gw.api.util.PhoneUtil.getExampleNumberWithExtension(User.util.CurrentUser.UserDefaultPhoneCountry))
    }
    
    // 'initialValue' attribute on Variable at BasicContactInfoInputSet.company.pcf: line 15, column 65
    function initialValue_0 () : gw.globalization.ContactSearchCriteriaNameAdapter {
      return new gw.globalization.ContactSearchCriteriaNameAdapter(searchCriteria)
    }
    
    // 'mode' attribute on InputSetRef at BasicContactInfoInputSet.company.pcf: line 18, column 54
    function mode_5 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'value' attribute on CheckBoxInput (id=CompanyNameExact_Input) at BasicContactInfoInputSet.company.pcf: line 24, column 44
    function valueRoot_8 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on TextInput (id=TaxID_Input) at BasicContactInfoInputSet.company.pcf: line 29, column 37
    function value_10 () : java.lang.String {
      return searchCriteria.TaxID
    }
    
    // 'value' attribute on TextInput (id=PhoneNumber_Input) at BasicContactInfoInputSet.company.pcf: line 36, column 37
    function value_15 () : java.lang.String {
      return searchCriteria.Phone
    }
    
    // 'value' attribute on CheckBoxInput (id=CompanyNameExact_Input) at BasicContactInfoInputSet.company.pcf: line 24, column 44
    function value_6 () : java.lang.Boolean {
      return searchCriteria.KeywordExact
    }
    
    property get searchCriteria () : ContactSearchCriteria {
      return getRequireValue("searchCriteria", 0) as ContactSearchCriteria
    }
    
    property set searchCriteria ($arg :  ContactSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    property get searchCriteriaAdapter () : gw.globalization.ContactSearchCriteriaNameAdapter {
      return getVariableValue("searchCriteriaAdapter", 0) as gw.globalization.ContactSearchCriteriaNameAdapter
    }
    
    property set searchCriteriaAdapter ($arg :  gw.globalization.ContactSearchCriteriaNameAdapter) {
      setVariableValue("searchCriteriaAdapter", 0, $arg)
    }
    
    
  }
  
  
}