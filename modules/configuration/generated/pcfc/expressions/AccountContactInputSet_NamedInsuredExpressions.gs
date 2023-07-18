package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountContactInputSet.NamedInsured.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountContactInputSet_NamedInsuredExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountContactInputSet.NamedInsured.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountContactInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function action_0 () : void {
      IndustryCodeSearchPopup.push(typekey.IndustryCodeType.TC_SIC)
    }
    
    // 'pickLocation' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function action_dest_1 () : pcf.api.Destination {
      return pcf.IndustryCodeSearchPopup.createDestination(typekey.IndustryCodeType.TC_SIC)
    }
    
    // 'value' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      (acctContactRole as NamedInsured).IndustryCode = (__VALUE_TO_SET as entity.IndustryCode)
    }
    
    // 'inputConversion' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function inputConversion_3 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.api.web.product.IndustryCodePickerUtil.findCode(VALUE, typekey.IndustryCodeType.TC_SIC)
    }
    
    // 'outputConversion' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function outputConversion_4 (VALUE :  entity.IndustryCode) : java.lang.String {
      return VALUE == null ? "" : VALUE.Code
    }
    
    // 'requestValidationExpression' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function requestValidationExpression_5 (VALUE :  entity.IndustryCode) : java.lang.Object {
      return gw.api.web.product.IndustryCodePickerUtil.validateValue(VALUE, null, null)
    }
    
    // 'value' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function valueRoot_8 () : java.lang.Object {
      return (acctContactRole as NamedInsured)
    }
    
    // 'value' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function value_6 () : entity.IndustryCode {
      return (acctContactRole as NamedInsured).IndustryCode
    }
    
    // 'visible' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function visible_2 () : java.lang.Boolean {
      return acctContactRole.AccountContact.Company
    }
    
    property get acctContactRole () : AccountContactRole {
      return getRequireValue("acctContactRole", 0) as AccountContactRole
    }
    
    property set acctContactRole ($arg :  AccountContactRole) {
      setRequireValue("acctContactRole", 0, $arg)
    }
    
    
  }
  
  
}