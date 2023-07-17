package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/ParticipantsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ParticipantsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/ParticipantsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ParticipantsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Participant_Cell) at ParticipantsLV.pcf: line 39, column 39
    function action_30 () : void {
      EditContactPopup.push(participant.Participant, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on TextCell (id=Participant_Cell) at ParticipantsLV.pcf: line 39, column 39
    function action_dest_31 () : pcf.api.Destination {
      return pcf.EditContactPopup.createDestination(participant.Participant, CurrentLocation.InEditMode)
    }
    
    // 'currency' attribute on MonetaryAmountCell (id=FlatPremium_Cell) at ParticipantsLV.pcf: line 59, column 84
    function currency_42 () : typekey.Currency {
      return participant.Agreement.Currency
    }
    
    // 'value' attribute on TextCell (id=RiskShare_Cell) at ParticipantsLV.pcf: line 50, column 25
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      participant.RiskShare = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=FlatPremium_Cell) at ParticipantsLV.pcf: line 59, column 84
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      participant.FlatPremium = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on TextCell (id=CedingRate_Cell) at ParticipantsLV.pcf: line 75, column 24
    function defaultSetter_47 (__VALUE_TO_SET :  java.lang.Object) : void {
      participant.CedingRate = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextCell (id=CommissionRate_Cell) at ParticipantsLV.pcf: line 100, column 24
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      participant.CommissionRate = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextCell (id=RefNumber_Cell) at ParticipantsLV.pcf: line 120, column 25
    function defaultSetter_66 (__VALUE_TO_SET :  java.lang.Object) : void {
      participant.RefNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'validationExpression' attribute on TextCell (id=CedingRate_Cell) at ParticipantsLV.pcf: line 75, column 24
    function validationExpression_45 () : java.lang.Object {
      return agreement.Participants.sum(\ a -> a.CedingRate) > 100 ? DisplayKey.get("Web.Reinsurance.Agreement.Validate.InvalidCedingRate") : null
    }
    
    // 'value' attribute on TextCell (id=Participant_Cell) at ParticipantsLV.pcf: line 39, column 39
    function valueRoot_33 () : java.lang.Object {
      return participant
    }
    
    // 'value' attribute on TextCell (id=Participant_Cell) at ParticipantsLV.pcf: line 39, column 39
    function value_32 () : entity.Contact {
      return participant.Participant
    }
    
    // 'value' attribute on TextCell (id=RiskShare_Cell) at ParticipantsLV.pcf: line 50, column 25
    function value_35 () : java.math.BigDecimal {
      return participant.RiskShare
    }
    
    // 'value' attribute on MonetaryAmountCell (id=FlatPremium_Cell) at ParticipantsLV.pcf: line 59, column 84
    function value_39 () : gw.pl.currency.MonetaryAmount {
      return participant.FlatPremium
    }
    
    // 'value' attribute on TextCell (id=CedingRate_Cell) at ParticipantsLV.pcf: line 75, column 24
    function value_46 () : java.math.BigDecimal {
      return participant.CedingRate
    }
    
    // 'value' attribute on TextCell (id=PremiumShare_Cell) at ParticipantsLV.pcf: line 88, column 25
    function value_52 () : java.math.BigDecimal {
      return participant.PremiumShare
    }
    
    // 'value' attribute on TextCell (id=CommissionRate_Cell) at ParticipantsLV.pcf: line 100, column 24
    function value_56 () : java.math.BigDecimal {
      return participant.CommissionRate
    }
    
    // 'value' attribute on TextCell (id=CommissionShare_Cell) at ParticipantsLV.pcf: line 113, column 25
    function value_61 () : java.math.BigDecimal {
      return participant.CommissionShare
    }
    
    // 'value' attribute on TextCell (id=RefNumber_Cell) at ParticipantsLV.pcf: line 120, column 25
    function value_65 () : java.lang.String {
      return participant.RefNumber
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=FlatPremium_Cell) at ParticipantsLV.pcf: line 59, column 84
    function visible_43 () : java.lang.Boolean {
      return agreement typeis Facultative and agreement.FlatPremiumAdjusted
    }
    
    // 'visible' attribute on TextCell (id=CedingRate_Cell) at ParticipantsLV.pcf: line 75, column 24
    function visible_50 () : java.lang.Boolean {
      return showCedingRate
    }
    
    // 'visible' attribute on TextCell (id=CommissionRate_Cell) at ParticipantsLV.pcf: line 100, column 24
    function visible_59 () : java.lang.Boolean {
      return agreement.CommissionAdjusted
    }
    
    property get participant () : entity.AgreementParticipant {
      return getIteratedValue(1) as entity.AgreementParticipant
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/ParticipantsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ParticipantsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ParticipantsLV.pcf: line 19, column 23
    function initialValue_0 () : boolean {
      return agreement typeis Treaty and (agreement as RIAgreement) typeis NonProportionalRIAgreement and ((agreement as RIAgreement) as NonProportionalRIAgreement).CedingRateAdjusted
    }
    
    // 'value' attribute on TextCell (id=Participant_Cell) at ParticipantsLV.pcf: line 39, column 39
    function sortValue_1 (participant :  entity.AgreementParticipant) : java.lang.Object {
      return participant.Participant
    }
    
    // 'value' attribute on TextCell (id=CommissionShare_Cell) at ParticipantsLV.pcf: line 113, column 25
    function sortValue_11 (participant :  entity.AgreementParticipant) : java.lang.Object {
      return participant.CommissionShare
    }
    
    // 'value' attribute on TextCell (id=RefNumber_Cell) at ParticipantsLV.pcf: line 120, column 25
    function sortValue_13 (participant :  entity.AgreementParticipant) : java.lang.Object {
      return participant.RefNumber
    }
    
    // 'value' attribute on TextCell (id=RiskShare_Cell) at ParticipantsLV.pcf: line 50, column 25
    function sortValue_2 (participant :  entity.AgreementParticipant) : java.lang.Object {
      return participant.RiskShare
    }
    
    // 'value' attribute on MonetaryAmountCell (id=FlatPremium_Cell) at ParticipantsLV.pcf: line 59, column 84
    function sortValue_3 (participant :  entity.AgreementParticipant) : java.lang.Object {
      return participant.FlatPremium
    }
    
    // 'value' attribute on TextCell (id=CedingRate_Cell) at ParticipantsLV.pcf: line 75, column 24
    function sortValue_5 (participant :  entity.AgreementParticipant) : java.lang.Object {
      return participant.CedingRate
    }
    
    // 'value' attribute on TextCell (id=PremiumShare_Cell) at ParticipantsLV.pcf: line 88, column 25
    function sortValue_7 (participant :  entity.AgreementParticipant) : java.lang.Object {
      return participant.PremiumShare
    }
    
    // 'value' attribute on TextCell (id=CommissionRate_Cell) at ParticipantsLV.pcf: line 100, column 24
    function sortValue_9 (participant :  entity.AgreementParticipant) : java.lang.Object {
      return participant.CommissionRate
    }
    
    // '$$sumValue' attribute on RowIterator at ParticipantsLV.pcf: line 50, column 25
    function sumValueRoot_15 (participant :  entity.AgreementParticipant) : java.lang.Object {
      return participant
    }
    
    // 'footerSumValue' attribute on RowIterator at ParticipantsLV.pcf: line 50, column 25
    function sumValue_14 (participant :  entity.AgreementParticipant) : java.lang.Object {
      return participant.RiskShare
    }
    
    // 'footerSumValue' attribute on RowIterator at ParticipantsLV.pcf: line 59, column 84
    function sumValue_16 (participant :  entity.AgreementParticipant) : java.lang.Object {
      return participant.FlatPremium
    }
    
    // 'footerSumValue' attribute on RowIterator at ParticipantsLV.pcf: line 75, column 24
    function sumValue_19 (participant :  entity.AgreementParticipant) : java.lang.Object {
      return participant.CedingRate
    }
    
    // 'footerSumValue' attribute on RowIterator at ParticipantsLV.pcf: line 88, column 25
    function sumValue_22 (participant :  entity.AgreementParticipant) : java.lang.Object {
      return participant.PremiumShare
    }
    
    // 'footerSumValue' attribute on RowIterator at ParticipantsLV.pcf: line 100, column 24
    function sumValue_25 (participant :  entity.AgreementParticipant) : java.lang.Object {
      return (participant.RiskShare == null || participant.CommissionRate == null ? null : participant.RiskShare * participant.CommissionRate / 100)
    }
    
    // 'footerSumValue' attribute on RowIterator at ParticipantsLV.pcf: line 113, column 25
    function sumValue_27 (participant :  entity.AgreementParticipant) : java.lang.Object {
      return participant.CommissionShare
    }
    
    // 'toAdd' attribute on RowIterator at ParticipantsLV.pcf: line 28, column 49
    function toAdd_69 (participant :  entity.AgreementParticipant) : void {
      agreement.addToParticipants(participant)
    }
    
    // 'toRemove' attribute on RowIterator at ParticipantsLV.pcf: line 28, column 49
    function toRemove_70 (participant :  entity.AgreementParticipant) : void {
      agreement.removeFromParticipants(participant)
    }
    
    // 'value' attribute on RowIterator at ParticipantsLV.pcf: line 28, column 49
    function value_71 () : entity.AgreementParticipant[] {
      return agreement.Participants
    }
    
    // 'visible' attribute on TextCell (id=CommissionRate_Cell) at ParticipantsLV.pcf: line 100, column 24
    function visible_10 () : java.lang.Boolean {
      return agreement.CommissionAdjusted
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=FlatPremium_Cell) at ParticipantsLV.pcf: line 59, column 84
    function visible_4 () : java.lang.Boolean {
      return agreement typeis Facultative and agreement.FlatPremiumAdjusted
    }
    
    // 'visible' attribute on TextCell (id=CedingRate_Cell) at ParticipantsLV.pcf: line 75, column 24
    function visible_6 () : java.lang.Boolean {
      return showCedingRate
    }
    
    property get agreement () : RIAgreement {
      return getRequireValue("agreement", 0) as RIAgreement
    }
    
    property set agreement ($arg :  RIAgreement) {
      setRequireValue("agreement", 0, $arg)
    }
    
    property get showCedingRate () : boolean {
      return getVariableValue("showCedingRate", 0) as java.lang.Boolean
    }
    
    property set showCedingRate ($arg :  boolean) {
      setVariableValue("showCedingRate", 0, $arg)
    }
    
    
  }
  
  
}