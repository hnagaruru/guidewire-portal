package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/email/EmailTemplateSearchResultLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EmailTemplateSearchResultLVExpressions {
  @javax.annotation.Generated("config/web/pcf/email/EmailTemplateSearchResultLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EmailTemplateSearchResultLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Template_Cell) at EmailTemplateSearchResultLV.pcf: line 20, column 49
    function sortValue_0 (emailTemplateDescriptor :  gw.plugin.email.IEmailTemplateDescriptor) : java.lang.Object {
      return emailTemplateDescriptor.Name
    }
    
    // 'value' attribute on TextCell (id=Topic_Cell) at EmailTemplateSearchResultLV.pcf: line 24, column 50
    function sortValue_1 (emailTemplateDescriptor :  gw.plugin.email.IEmailTemplateDescriptor) : java.lang.Object {
      return emailTemplateDescriptor.Topic
    }
    
    // 'sortBy' attribute on TypeKeyCell (id=Language_Cell) at EmailTemplateSearchResultLV.pcf: line 31, column 69
    function sortValue_2 (emailTemplateDescriptor :  gw.plugin.email.IEmailTemplateDescriptor) : java.lang.Object {
      return emailTemplateDescriptor.Locale
    }
    
    // 'value' attribute on RowIterator at EmailTemplateSearchResultLV.pcf: line 15, column 62
    function value_14 () : gw.plugin.email.IEmailTemplateDescriptor[] {
      return emailTemplateDescriptorList
    }
    
    // 'visible' attribute on TypeKeyCell (id=Language_Cell) at EmailTemplateSearchResultLV.pcf: line 31, column 69
    function visible_3 () : java.lang.Boolean {
      return LanguageType.getTypeKeys( false ).Count > 1
    }
    
    property get emailTemplateDescriptorList () : gw.plugin.email.IEmailTemplateDescriptor[] {
      return getRequireValue("emailTemplateDescriptorList", 0) as gw.plugin.email.IEmailTemplateDescriptor[]
    }
    
    property set emailTemplateDescriptorList ($arg :  gw.plugin.email.IEmailTemplateDescriptor[]) {
      setRequireValue("emailTemplateDescriptorList", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/email/EmailTemplateSearchResultLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends EmailTemplateSearchResultLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickValue' attribute on RowIterator at EmailTemplateSearchResultLV.pcf: line 15, column 62
    function pickValue_13 () : gw.plugin.email.IEmailTemplateDescriptor {
      return emailTemplateDescriptor
    }
    
    // 'value' attribute on TextCell (id=Template_Cell) at EmailTemplateSearchResultLV.pcf: line 20, column 49
    function valueRoot_5 () : java.lang.Object {
      return emailTemplateDescriptor
    }
    
    // 'value' attribute on TypeKeyCell (id=Language_Cell) at EmailTemplateSearchResultLV.pcf: line 31, column 69
    function value_10 () : typekey.LanguageType {
      return gw.api.util.LocaleUtil.toLanguageType(emailTemplateDescriptor.Locale)
    }
    
    // 'value' attribute on TextCell (id=Template_Cell) at EmailTemplateSearchResultLV.pcf: line 20, column 49
    function value_4 () : java.lang.String {
      return emailTemplateDescriptor.Name
    }
    
    // 'value' attribute on TextCell (id=Topic_Cell) at EmailTemplateSearchResultLV.pcf: line 24, column 50
    function value_7 () : java.lang.String {
      return emailTemplateDescriptor.Topic
    }
    
    // 'visible' attribute on TypeKeyCell (id=Language_Cell) at EmailTemplateSearchResultLV.pcf: line 31, column 69
    function visible_11 () : java.lang.Boolean {
      return LanguageType.getTypeKeys( false ).Count > 1
    }
    
    property get emailTemplateDescriptor () : gw.plugin.email.IEmailTemplateDescriptor {
      return getIteratedValue(1) as gw.plugin.email.IEmailTemplateDescriptor
    }
    
    
  }
  
  
}