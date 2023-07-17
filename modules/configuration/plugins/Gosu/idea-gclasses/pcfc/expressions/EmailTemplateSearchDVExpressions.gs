package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/email/EmailTemplateSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EmailTemplateSearchDVExpressions {
  @javax.annotation.Generated("config/web/pcf/email/EmailTemplateSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EmailTemplateSearchDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at EmailTemplateSearchDV.pcf: line 31, column 41
    function def_onEnter_14 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at EmailTemplateSearchDV.pcf: line 31, column 41
    function def_refreshVariables_15 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TextInput (id=Topic_Input) at EmailTemplateSearchDV.pcf: line 15, column 52
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      emailTemplateSearchCriteria.Topic = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Keywords_Input) at EmailTemplateSearchDV.pcf: line 27, column 55
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      emailTemplateSearchCriteria.Keywords = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Language_Input) at EmailTemplateSearchDV.pcf: line 22, column 67
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      emailTemplateSearchCriteria.Language = (__VALUE_TO_SET as typekey.LanguageType)
    }
    
    // 'value' attribute on TextInput (id=Topic_Input) at EmailTemplateSearchDV.pcf: line 15, column 52
    function valueRoot_2 () : java.lang.Object {
      return emailTemplateSearchCriteria
    }
    
    // 'value' attribute on TextInput (id=Topic_Input) at EmailTemplateSearchDV.pcf: line 15, column 52
    function value_0 () : java.lang.String {
      return emailTemplateSearchCriteria.Topic
    }
    
    // 'value' attribute on TextInput (id=Keywords_Input) at EmailTemplateSearchDV.pcf: line 27, column 55
    function value_10 () : java.lang.String {
      return emailTemplateSearchCriteria.Keywords
    }
    
    // 'value' attribute on TypeKeyInput (id=Language_Input) at EmailTemplateSearchDV.pcf: line 22, column 67
    function value_5 () : typekey.LanguageType {
      return emailTemplateSearchCriteria.Language
    }
    
    // 'visible' attribute on TypeKeyInput (id=Language_Input) at EmailTemplateSearchDV.pcf: line 22, column 67
    function visible_4 () : java.lang.Boolean {
      return LanguageType.getTypeKeys( false ).Count > 1
    }
    
    property get emailTemplateSearchCriteria () : gw.api.email.EmailTemplateSearchCriteria {
      return getRequireValue("emailTemplateSearchCriteria", 0) as gw.api.email.EmailTemplateSearchCriteria
    }
    
    property set emailTemplateSearchCriteria ($arg :  gw.api.email.EmailTemplateSearchCriteria) {
      setRequireValue("emailTemplateSearchCriteria", 0, $arg)
    }
    
    
  }
  
  
}