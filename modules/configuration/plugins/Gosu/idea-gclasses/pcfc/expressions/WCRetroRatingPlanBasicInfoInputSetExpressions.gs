package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/WCRetroRatingPlanBasicInfoInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WCRetroRatingPlanBasicInfoInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCRetroRatingPlanBasicInfoInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WCRetroRatingPlanBasicInfoInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'currency' attribute on MonetaryAmountInput (id=LossLimitAmount_Input) at WCRetroRatingPlanBasicInfoInputSet.pcf: line 29, column 63
    function currency_11 () : typekey.Currency {
      return wCLine.RetrospectiveRatingPlan.Currency
    }
    
    // 'value' attribute on BooleanRadioInput (id=IncludeALAE_Input) at WCRetroRatingPlanBasicInfoInputSet.pcf: line 15, column 59
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      wCLine.RetrospectiveRatingPlan.IncludeALAE = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=EstimatedStandardPremium_Input) at WCRetroRatingPlanBasicInfoInputSet.pcf: line 36, column 72
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      wCLine.RetrospectiveRatingPlan.EstimatedStandardPremium = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on DateInput (id=FirstComputationDate_Input) at WCRetroRatingPlanBasicInfoInputSet.pcf: line 42, column 68
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      wCLine.RetrospectiveRatingPlan.FirstComputationDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=LastComputationDate_Input) at WCRetroRatingPlanBasicInfoInputSet.pcf: line 48, column 67
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      wCLine.RetrospectiveRatingPlan.LastComputationDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=ComputationInterval_Input) at WCRetroRatingPlanBasicInfoInputSet.pcf: line 55, column 38
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      wCLine.RetrospectiveRatingPlan.ComputationInterval = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=MinRetroPremiumRatio_Input) at WCRetroRatingPlanBasicInfoInputSet.pcf: line 62, column 41
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      wCLine.RetrospectiveRatingPlan.MinRetroPremiumRatio = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextInput (id=MaxRetroPremiumRatio_Input) at WCRetroRatingPlanBasicInfoInputSet.pcf: line 69, column 41
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      wCLine.RetrospectiveRatingPlan.MaxRetroPremiumRatio = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextInput (id=LossConversionFactor_Input) at WCRetroRatingPlanBasicInfoInputSet.pcf: line 22, column 41
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      wCLine.RetrospectiveRatingPlan.LossConversionFactor = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=LossLimitAmount_Input) at WCRetroRatingPlanBasicInfoInputSet.pcf: line 29, column 63
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      wCLine.RetrospectiveRatingPlan.LossLimitAmount = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on BooleanRadioInput (id=IncludeALAE_Input) at WCRetroRatingPlanBasicInfoInputSet.pcf: line 15, column 59
    function valueRoot_2 () : java.lang.Object {
      return wCLine.RetrospectiveRatingPlan
    }
    
    // 'value' attribute on BooleanRadioInput (id=IncludeALAE_Input) at WCRetroRatingPlanBasicInfoInputSet.pcf: line 15, column 59
    function value_0 () : java.lang.Boolean {
      return wCLine.RetrospectiveRatingPlan.IncludeALAE
    }
    
    // 'value' attribute on MonetaryAmountInput (id=EstimatedStandardPremium_Input) at WCRetroRatingPlanBasicInfoInputSet.pcf: line 36, column 72
    function value_13 () : gw.pl.currency.MonetaryAmount {
      return wCLine.RetrospectiveRatingPlan.EstimatedStandardPremium
    }
    
    // 'value' attribute on DateInput (id=FirstComputationDate_Input) at WCRetroRatingPlanBasicInfoInputSet.pcf: line 42, column 68
    function value_18 () : java.util.Date {
      return wCLine.RetrospectiveRatingPlan.FirstComputationDate
    }
    
    // 'value' attribute on DateInput (id=LastComputationDate_Input) at WCRetroRatingPlanBasicInfoInputSet.pcf: line 48, column 67
    function value_22 () : java.util.Date {
      return wCLine.RetrospectiveRatingPlan.LastComputationDate
    }
    
    // 'value' attribute on TextInput (id=ComputationInterval_Input) at WCRetroRatingPlanBasicInfoInputSet.pcf: line 55, column 38
    function value_26 () : java.lang.Integer {
      return wCLine.RetrospectiveRatingPlan.ComputationInterval
    }
    
    // 'value' attribute on TextInput (id=MinRetroPremiumRatio_Input) at WCRetroRatingPlanBasicInfoInputSet.pcf: line 62, column 41
    function value_30 () : java.math.BigDecimal {
      return wCLine.RetrospectiveRatingPlan.MinRetroPremiumRatio
    }
    
    // 'value' attribute on TextInput (id=MaxRetroPremiumRatio_Input) at WCRetroRatingPlanBasicInfoInputSet.pcf: line 69, column 41
    function value_34 () : java.math.BigDecimal {
      return wCLine.RetrospectiveRatingPlan.MaxRetroPremiumRatio
    }
    
    // 'value' attribute on TextInput (id=LossConversionFactor_Input) at WCRetroRatingPlanBasicInfoInputSet.pcf: line 22, column 41
    function value_4 () : java.math.BigDecimal {
      return wCLine.RetrospectiveRatingPlan.LossConversionFactor
    }
    
    // 'value' attribute on MonetaryAmountInput (id=LossLimitAmount_Input) at WCRetroRatingPlanBasicInfoInputSet.pcf: line 29, column 63
    function value_8 () : gw.pl.currency.MonetaryAmount {
      return wCLine.RetrospectiveRatingPlan.LossLimitAmount
    }
    
    property get wCLine () : WorkersCompLine {
      return getRequireValue("wCLine", 0) as WorkersCompLine
    }
    
    property set wCLine ($arg :  WorkersCompLine) {
      setRequireValue("wCLine", 0, $arg)
    }
    
    
  }
  
  
}