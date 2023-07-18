package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/contacts/BasicContactInfoInputSet.person.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BasicContactInfoInputSet_personExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/contacts/BasicContactInfoInputSet.person.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BasicContactInfoInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at BasicContactInfoInputSet.person.pcf: line 18, column 54
    function def_onEnter_1 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.onEnter(new gw.search.BasicNameOwner(searchCriteriaAdapter))
    }
    
    // 'def' attribute on InputSetRef at BasicContactInfoInputSet.person.pcf: line 18, column 54
    function def_onEnter_3 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.onEnter(new gw.search.BasicNameOwner(searchCriteriaAdapter))
    }
    
    // 'def' attribute on InputSetRef at BasicContactInfoInputSet.person.pcf: line 18, column 54
    function def_refreshVariables_2 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.refreshVariables(new gw.search.BasicNameOwner(searchCriteriaAdapter))
    }
    
    // 'def' attribute on InputSetRef at BasicContactInfoInputSet.person.pcf: line 18, column 54
    function def_refreshVariables_4 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.refreshVariables(new gw.search.BasicNameOwner(searchCriteriaAdapter))
    }
    
    // 'value' attribute on CheckBoxInput (id=LastNameExact_Input) at BasicContactInfoInputSet.person.pcf: line 30, column 44
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.KeywordExact = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=TaxID_Input) at BasicContactInfoInputSet.person.pcf: line 35, column 37
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.TaxID = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Phone_Input) at BasicContactInfoInputSet.person.pcf: line 42, column 37
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Phone = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=FirstNameExact_Input) at BasicContactInfoInputSet.person.pcf: line 24, column 46
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.FirstNameExact = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'helpText' attribute on TextInput (id=Phone_Input) at BasicContactInfoInputSet.person.pcf: line 42, column 37
    function helpText_18 () : java.lang.String {
      return DisplayKey.get("Java.PhoneUtil.Example.ToolTip", User.util.CurrentUser.UserDefaultPhoneCountry, gw.api.util.PhoneUtil.getExampleNumberWithExtension(User.util.CurrentUser.UserDefaultPhoneCountry))
    }
    
    // 'initialValue' attribute on Variable at BasicContactInfoInputSet.person.pcf: line 15, column 65
    function initialValue_0 () : gw.globalization.ContactSearchCriteriaNameAdapter {
      return new gw.globalization.ContactSearchCriteriaNameAdapter(searchCriteria)
    }
    
    // 'mode' attribute on InputSetRef at BasicContactInfoInputSet.person.pcf: line 18, column 54
    function mode_5 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'value' attribute on CheckBoxInput (id=FirstNameExact_Input) at BasicContactInfoInputSet.person.pcf: line 24, column 46
    function valueRoot_8 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on CheckBoxInput (id=LastNameExact_Input) at BasicContactInfoInputSet.person.pcf: line 30, column 44
    function value_10 () : java.lang.Boolean {
      return searchCriteria.KeywordExact
    }
    
    // 'value' attribute on TextInput (id=TaxID_Input) at BasicContactInfoInputSet.person.pcf: line 35, column 37
    function value_14 () : java.lang.String {
      return searchCriteria.TaxID
    }
    
    // 'value' attribute on TextInput (id=Phone_Input) at BasicContactInfoInputSet.person.pcf: line 42, column 37
    function value_19 () : java.lang.String {
      return searchCriteria.Phone
    }
    
    // 'value' attribute on CheckBoxInput (id=FirstNameExact_Input) at BasicContactInfoInputSet.person.pcf: line 24, column 46
    function value_6 () : java.lang.Boolean {
      return searchCriteria.FirstNameExact
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