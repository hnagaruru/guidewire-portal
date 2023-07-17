package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/DocumentTemplateSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DocumentTemplateSearchDVExpressions {
  @javax.annotation.Generated("config/web/pcf/search/DocumentTemplateSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DocumentTemplateSearchDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at DocumentTemplateSearchDV.pcf: line 41, column 41
    function def_onEnter_18 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at DocumentTemplateSearchDV.pcf: line 41, column 41
    function def_refreshVariables_19 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TypeKeyInput (id=DocumentType_Input) at DocumentTemplateSearchDV.pcf: line 17, column 43
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentTemplateSearchCriteria.Type = (__VALUE_TO_SET as typekey.DocumentType)
    }
    
    // 'value' attribute on TextInput (id=Keywords_Input) at DocumentTemplateSearchDV.pcf: line 31, column 58
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentTemplateSearchCriteria.Keywords = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at DocumentTemplateSearchDV.pcf: line 37, column 63
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentTemplateSearchCriteria.effectivedate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=Language_Input) at DocumentTemplateSearchDV.pcf: line 25, column 67
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentTemplateSearchCriteria.Language = (__VALUE_TO_SET as typekey.LanguageType)
    }
    
    // 'value' attribute on TypeKeyInput (id=DocumentType_Input) at DocumentTemplateSearchDV.pcf: line 17, column 43
    function valueRoot_2 () : java.lang.Object {
      return documentTemplateSearchCriteria
    }
    
    // 'value' attribute on TypeKeyInput (id=DocumentType_Input) at DocumentTemplateSearchDV.pcf: line 17, column 43
    function value_0 () : typekey.DocumentType {
      return documentTemplateSearchCriteria.Type
    }
    
    // 'value' attribute on TextInput (id=Keywords_Input) at DocumentTemplateSearchDV.pcf: line 31, column 58
    function value_10 () : java.lang.String {
      return documentTemplateSearchCriteria.Keywords
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at DocumentTemplateSearchDV.pcf: line 37, column 63
    function value_14 () : java.util.Date {
      return documentTemplateSearchCriteria.effectivedate
    }
    
    // 'value' attribute on TypeKeyInput (id=Language_Input) at DocumentTemplateSearchDV.pcf: line 25, column 67
    function value_5 () : typekey.LanguageType {
      return documentTemplateSearchCriteria.Language
    }
    
    // 'visible' attribute on TypeKeyInput (id=Language_Input) at DocumentTemplateSearchDV.pcf: line 25, column 67
    function visible_4 () : java.lang.Boolean {
      return LanguageType.getTypeKeys( false ).Count > 1
    }
    
    property get documentTemplateSearchCriteria () : DocumentTemplateSearchCriteria {
      return getRequireValue("documentTemplateSearchCriteria", 0) as DocumentTemplateSearchCriteria
    }
    
    property set documentTemplateSearchCriteria ($arg :  DocumentTemplateSearchCriteria) {
      setRequireValue("documentTemplateSearchCriteria", 0, $arg)
    }
    
    
  }
  
  
}