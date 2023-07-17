package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/AgreementOtherTermsInputSet.nonproportional.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AgreementOtherTermsInputSet_nonproportionalExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/AgreementOtherTermsInputSet.nonproportional.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AgreementOtherTermsInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on BooleanRadioInput (id=CalculateCededPremium_Input) at AgreementOtherTermsInputSet.nonproportional.pcf: line 33, column 49
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      nonprop.CalculateCededPremium = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=GNPBasis_Input) at AgreementOtherTermsInputSet.nonproportional.pcf: line 39, column 44
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      nonprop.GNPSubtotal = (__VALUE_TO_SET as typekey.GNPSubtotalType)
    }
    
    // 'value' attribute on TextAreaInput (id=Comments_Input) at AgreementOtherTermsInputSet.nonproportional.pcf: line 65, column 35
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      agreement.Comments = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=LossAttachBasis_Input) at AgreementOtherTermsInputSet.nonproportional.pcf: line 22, column 53
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      (agreement as LossDateAttachable).AttachmentBasis = (__VALUE_TO_SET as typekey.AttachmentBasisType)
    }
    
    // 'filter' attribute on TypeKeyInput (id=LossAttachBasis_Input) at AgreementOtherTermsInputSet.nonproportional.pcf: line 22, column 53
    function filter_6 (VALUE :  typekey.AttachmentBasisType, VALUES :  typekey.AttachmentBasisType[]) : java.lang.Boolean {
      return (agreement as LossDateAttachable).AcceptableAttachmentBasisTypes.contains(VALUE)
    }
    
    // 'initialValue' attribute on Variable at AgreementOtherTermsInputSet.nonproportional.pcf: line 14, column 49
    function initialValue_0 () : entity.NonProportionalRIAgreement {
      return agreement as NonProportionalRIAgreement
    }
    
    // 'onChange' attribute on PostOnChange at AgreementOtherTermsInputSet.nonproportional.pcf: line 25, column 85
    function onChange_1 () : void {
      nonprop.CalculateCededPremium = !agreement.IsLossDateAttachment
    }
    
    // 'value' attribute on BooleanRadioInput (id=CalculateCededPremium_Input) at AgreementOtherTermsInputSet.nonproportional.pcf: line 33, column 49
    function valueRoot_12 () : java.lang.Object {
      return nonprop
    }
    
    // 'value' attribute on TextAreaInput (id=Comments_Input) at AgreementOtherTermsInputSet.nonproportional.pcf: line 65, column 35
    function valueRoot_32 () : java.lang.Object {
      return agreement
    }
    
    // 'value' attribute on TypeKeyInput (id=LossAttachBasis_Input) at AgreementOtherTermsInputSet.nonproportional.pcf: line 22, column 53
    function valueRoot_5 () : java.lang.Object {
      return (agreement as LossDateAttachable)
    }
    
    // 'value' attribute on BooleanRadioInput (id=CalculateCededPremium_Input) at AgreementOtherTermsInputSet.nonproportional.pcf: line 33, column 49
    function value_10 () : java.lang.Boolean {
      return nonprop.CalculateCededPremium
    }
    
    // 'value' attribute on TypeKeyInput (id=GNPBasis_Input) at AgreementOtherTermsInputSet.nonproportional.pcf: line 39, column 44
    function value_15 () : typekey.GNPSubtotalType {
      return nonprop.GNPSubtotal
    }
    
    // 'value' attribute on TypeKeyInput (id=LossAttachBasis_Input) at AgreementOtherTermsInputSet.nonproportional.pcf: line 22, column 53
    function value_3 () : typekey.AttachmentBasisType {
      return (agreement as LossDateAttachable).AttachmentBasis
    }
    
    // 'value' attribute on TextAreaInput (id=Comments_Input) at AgreementOtherTermsInputSet.nonproportional.pcf: line 65, column 35
    function value_30 () : java.lang.String {
      return agreement.Comments
    }
    
    // 'visible' attribute on TypeKeyInput (id=LossAttachBasis_Input) at AgreementOtherTermsInputSet.nonproportional.pcf: line 22, column 53
    function visible_2 () : java.lang.Boolean {
      return agreement typeis LossDateAttachable
    }
    
    // 'visible' attribute on BooleanRadioInput (id=CalculateCededPremium_Input) at AgreementOtherTermsInputSet.nonproportional.pcf: line 33, column 49
    function visible_9 () : java.lang.Boolean {
      return agreement.IsLossDateAttachment
    }
    
    property get agreement () : RIAgreement {
      return getRequireValue("agreement", 0) as RIAgreement
    }
    
    property set agreement ($arg :  RIAgreement) {
      setRequireValue("agreement", 0, $arg)
    }
    
    property get nonprop () : entity.NonProportionalRIAgreement {
      return getVariableValue("nonprop", 0) as entity.NonProportionalRIAgreement
    }
    
    property set nonprop ($arg :  entity.NonProportionalRIAgreement) {
      setVariableValue("nonprop", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/AgreementOtherTermsInputSet.nonproportional.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InputSetExpressionsImpl extends AgreementOtherTermsInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'currency' attribute on MonetaryAmountInput (id=NotificationThresh_Input) at AgreementOtherTermsInputSet.nonproportional.pcf: line 58, column 61
    function currency_27 () : typekey.Currency {
      return agreement.Currency
    }
    
    // 'value' attribute on BooleanRadioInput (id=CountTowardTotalLimit_Input) at AgreementOtherTermsInputSet.nonproportional.pcf: line 51, column 61
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      (perrisk as PerRisk).CountTowardTotalLimit = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=NotificationThresh_Input) at AgreementOtherTermsInputSet.nonproportional.pcf: line 58, column 61
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      (perrisk as PerRisk).NotificationThreshold = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'initialValue' attribute on Variable at AgreementOtherTermsInputSet.nonproportional.pcf: line 45, column 32
    function initialValue_19 () : entity.PerRisk {
      return agreement typeis PerRisk ? agreement : null
    }
    
    // 'value' attribute on BooleanRadioInput (id=CountTowardTotalLimit_Input) at AgreementOtherTermsInputSet.nonproportional.pcf: line 51, column 61
    function valueRoot_22 () : java.lang.Object {
      return (perrisk as PerRisk)
    }
    
    // 'value' attribute on BooleanRadioInput (id=CountTowardTotalLimit_Input) at AgreementOtherTermsInputSet.nonproportional.pcf: line 51, column 61
    function value_20 () : java.lang.Boolean {
      return (perrisk as PerRisk).CountTowardTotalLimit
    }
    
    // 'value' attribute on MonetaryAmountInput (id=NotificationThresh_Input) at AgreementOtherTermsInputSet.nonproportional.pcf: line 58, column 61
    function value_24 () : gw.pl.currency.MonetaryAmount {
      return (perrisk as PerRisk).NotificationThreshold
    }
    
    // 'visible' attribute on InputSet at AgreementOtherTermsInputSet.nonproportional.pcf: line 41, column 49
    function visible_29 () : java.lang.Boolean {
      return agreement typeis entity.PerRisk
    }
    
    property get perrisk () : entity.PerRisk {
      return getVariableValue("perrisk", 1) as entity.PerRisk
    }
    
    property set perrisk ($arg :  entity.PerRisk) {
      setVariableValue("perrisk", 1, $arg)
    }
    
    
  }
  
  
}