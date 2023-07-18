package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/AgreementOtherTermsInputSet.proportional.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AgreementOtherTermsInputSet_proportionalExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/AgreementOtherTermsInputSet.proportional.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AgreementOtherTermsInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'currency' attribute on MonetaryAmountInput (id=NotificationThresh_Input) at AgreementOtherTermsInputSet.proportional.pcf: line 23, column 61
    function currency_7 () : typekey.Currency {
      return agreement.Currency
    }
    
    // 'value' attribute on BooleanRadioInput (id=CountTowardTotalLimit_Input) at AgreementOtherTermsInputSet.proportional.pcf: line 16, column 61
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      (agreement as PerRisk).CountTowardTotalLimit = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextAreaInput (id=Comments_Input) at AgreementOtherTermsInputSet.proportional.pcf: line 29, column 35
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      agreement.Comments = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=NotificationThresh_Input) at AgreementOtherTermsInputSet.proportional.pcf: line 23, column 61
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      (agreement as PerRisk).NotificationThreshold = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on TextAreaInput (id=Comments_Input) at AgreementOtherTermsInputSet.proportional.pcf: line 29, column 35
    function valueRoot_11 () : java.lang.Object {
      return agreement
    }
    
    // 'value' attribute on BooleanRadioInput (id=CountTowardTotalLimit_Input) at AgreementOtherTermsInputSet.proportional.pcf: line 16, column 61
    function valueRoot_2 () : java.lang.Object {
      return (agreement as PerRisk)
    }
    
    // 'value' attribute on BooleanRadioInput (id=CountTowardTotalLimit_Input) at AgreementOtherTermsInputSet.proportional.pcf: line 16, column 61
    function value_0 () : java.lang.Boolean {
      return (agreement as PerRisk).CountTowardTotalLimit
    }
    
    // 'value' attribute on MonetaryAmountInput (id=NotificationThresh_Input) at AgreementOtherTermsInputSet.proportional.pcf: line 23, column 61
    function value_4 () : gw.pl.currency.MonetaryAmount {
      return (agreement as PerRisk).NotificationThreshold
    }
    
    // 'value' attribute on TextAreaInput (id=Comments_Input) at AgreementOtherTermsInputSet.proportional.pcf: line 29, column 35
    function value_9 () : java.lang.String {
      return agreement.Comments
    }
    
    property get agreement () : RIAgreement {
      return getRequireValue("agreement", 0) as RIAgreement
    }
    
    property set agreement ($arg :  RIAgreement) {
      setRequireValue("agreement", 0, $arg)
    }
    
    
  }
  
  
}