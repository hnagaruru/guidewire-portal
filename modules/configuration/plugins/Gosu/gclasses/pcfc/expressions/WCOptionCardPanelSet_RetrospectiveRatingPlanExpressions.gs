package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WCOptionCardPanelSet_RetrospectiveRatingPlanExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends WCRetrospectiveRatingPlanInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'currency' attribute on MonetaryAmountCell (id=Amount_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 172, column 35
    function currency_61 () : typekey.Currency {
      return letter.Currency
    }
    
    // 'value' attribute on TextCell (id=LOCIssuer_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 163, column 48
    function defaultSetter_55 (__VALUE_TO_SET :  java.lang.Object) : void {
      letter.IssuerName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 172, column 35
    function defaultSetter_59 (__VALUE_TO_SET :  java.lang.Object) : void {
      letter.Amount = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on DateCell (id=Effective_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 179, column 35
    function defaultSetter_64 (__VALUE_TO_SET :  java.lang.Object) : void {
      letter.ValidFrom = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateCell (id=Expiration_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 186, column 35
    function defaultSetter_68 (__VALUE_TO_SET :  java.lang.Object) : void {
      letter.ValidTo = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextCell (id=LOCIssuer_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 163, column 48
    function valueRoot_56 () : java.lang.Object {
      return letter
    }
    
    // 'value' attribute on TextCell (id=LOCIssuer_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 163, column 48
    function value_54 () : java.lang.String {
      return letter.IssuerName
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 172, column 35
    function value_58 () : gw.pl.currency.MonetaryAmount {
      return letter.Amount
    }
    
    // 'value' attribute on DateCell (id=Effective_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 179, column 35
    function value_63 () : java.util.Date {
      return letter.ValidFrom
    }
    
    // 'value' attribute on DateCell (id=Expiration_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 186, column 35
    function value_67 () : java.util.Date {
      return letter.ValidTo
    }
    
    property get letter () : entity.WCRetroRatingLetterOfCredit {
      return getIteratedValue(2) as entity.WCRetroRatingLetterOfCredit
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends WCRetrospectiveRatingPlanInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=SelectState_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 93, column 55
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      stateMultiplier.State = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'value' attribute on TextCell (id=StateTaxMultiplier_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 102, column 35
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      stateMultiplier.StateTaxMultiplier = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextCell (id=FederalTaxMultiplier_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 111, column 35
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      stateMultiplier.FederalTaxMultiplier = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextCell (id=StateExcessLossFactor_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 120, column 35
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      stateMultiplier.StateExcessLossFactor = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextCell (id=FederalExcessLossFactor_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 129, column 35
    function defaultSetter_44 (__VALUE_TO_SET :  java.lang.Object) : void {
      stateMultiplier.FederalExcessLossFactor = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'filter' attribute on TypeKeyCell (id=SelectState_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 93, column 55
    function filter_29 (VALUE :  typekey.Jurisdiction, VALUES :  typekey.Jurisdiction[]) : java.lang.Boolean {
      return nonMonopolisticStates.contains(gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(VALUE))
    }
    
    // 'value' attribute on TypeKeyCell (id=SelectState_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 93, column 55
    function valueRoot_28 () : java.lang.Object {
      return stateMultiplier
    }
    
    // 'value' attribute on TypeKeyCell (id=SelectState_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 93, column 55
    function value_26 () : typekey.Jurisdiction {
      return stateMultiplier.State
    }
    
    // 'value' attribute on TextCell (id=StateTaxMultiplier_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 102, column 35
    function value_31 () : java.math.BigDecimal {
      return stateMultiplier.StateTaxMultiplier
    }
    
    // 'value' attribute on TextCell (id=FederalTaxMultiplier_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 111, column 35
    function value_35 () : java.math.BigDecimal {
      return stateMultiplier.FederalTaxMultiplier
    }
    
    // 'value' attribute on TextCell (id=StateExcessLossFactor_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 120, column 35
    function value_39 () : java.math.BigDecimal {
      return stateMultiplier.StateExcessLossFactor
    }
    
    // 'value' attribute on TextCell (id=FederalExcessLossFactor_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 129, column 35
    function value_43 () : java.math.BigDecimal {
      return stateMultiplier.FederalExcessLossFactor
    }
    
    property get stateMultiplier () : entity.WCStateMultiplier {
      return getIteratedValue(2) as entity.WCStateMultiplier
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WCOptionCardPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get wcLine () : WorkersCompLine {
      return getRequireValue("wcLine", 0) as WorkersCompLine
    }
    
    property set wcLine ($arg :  WorkersCompLine) {
      setRequireValue("wcLine", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WCRetrospectiveRatingPlanInputSetExpressionsImpl extends WCOptionCardPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 23, column 63
    function def_onEnter_1 (def :  pcf.WCRetroRatingPlanBasicInfoInputSet) : void {
      def.onEnter(wcLine)
    }
    
    // 'def' attribute on InputSetRef at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 23, column 63
    function def_refreshVariables_2 (def :  pcf.WCRetroRatingPlanBasicInfoInputSet) : void {
      def.refreshVariables(wcLine)
    }
    
    // 'value' attribute on TextCell (id=BasicPremiumFactor2_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 51, column 33
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      wcLine.RetrospectiveRatingPlan.BasicPremiumFactor2 = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextCell (id=BasicPremiumFactor3_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 58, column 33
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      wcLine.RetrospectiveRatingPlan.BasicPremiumFactor3 = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextCell (id=BasicPremiumFactor1_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 44, column 33
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      wcLine.RetrospectiveRatingPlan.BasicPremiumFactor1 = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'initialValue' attribute on Variable at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 21, column 44
    function initialValue_0 () : gw.api.domain.StateSet {
      return gw.api.domain.StateSet.get( gw.api.domain.StateSet.WC_NOTMONOPOLISTIC )
    }
    
    // 'label' attribute on TextCell (id=BasicPremiumFactor3_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 58, column 33
    function label_15 () : java.lang.Object {
      return wcLine.RetrospectiveRatingPlan.PercentStandardPremium3
    }
    
    // 'label' attribute on TextCell (id=BasicPremiumFactor1_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 44, column 33
    function label_3 () : java.lang.Object {
      return wcLine.RetrospectiveRatingPlan.PercentStandardPremium1
    }
    
    // 'label' attribute on TextCell (id=BasicPremiumFactor2_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 51, column 33
    function label_9 () : java.lang.Object {
      return wcLine.RetrospectiveRatingPlan.PercentStandardPremium2
    }
    
    // 'value' attribute on TypeKeyCell (id=SelectState_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 93, column 55
    function sortValue_21 (stateMultiplier :  entity.WCStateMultiplier) : java.lang.Object {
      return stateMultiplier.State
    }
    
    // 'value' attribute on TextCell (id=StateTaxMultiplier_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 102, column 35
    function sortValue_22 (stateMultiplier :  entity.WCStateMultiplier) : java.lang.Object {
      return stateMultiplier.StateTaxMultiplier
    }
    
    // 'value' attribute on TextCell (id=FederalTaxMultiplier_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 111, column 35
    function sortValue_23 (stateMultiplier :  entity.WCStateMultiplier) : java.lang.Object {
      return stateMultiplier.FederalTaxMultiplier
    }
    
    // 'value' attribute on TextCell (id=StateExcessLossFactor_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 120, column 35
    function sortValue_24 (stateMultiplier :  entity.WCStateMultiplier) : java.lang.Object {
      return stateMultiplier.StateExcessLossFactor
    }
    
    // 'value' attribute on TextCell (id=FederalExcessLossFactor_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 129, column 35
    function sortValue_25 (stateMultiplier :  entity.WCStateMultiplier) : java.lang.Object {
      return stateMultiplier.FederalExcessLossFactor
    }
    
    // 'value' attribute on TextCell (id=LOCIssuer_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 163, column 48
    function sortValue_50 (letter :  entity.WCRetroRatingLetterOfCredit) : java.lang.Object {
      return letter.IssuerName
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 172, column 35
    function sortValue_51 (letter :  entity.WCRetroRatingLetterOfCredit) : java.lang.Object {
      return letter.Amount
    }
    
    // 'value' attribute on DateCell (id=Effective_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 179, column 35
    function sortValue_52 (letter :  entity.WCRetroRatingLetterOfCredit) : java.lang.Object {
      return letter.ValidFrom
    }
    
    // 'value' attribute on DateCell (id=Expiration_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 186, column 35
    function sortValue_53 (letter :  entity.WCRetroRatingLetterOfCredit) : java.lang.Object {
      return letter.ValidTo
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 83, column 56
    function toCreateAndAdd_47 () : entity.WCStateMultiplier {
      return wcLine.RetrospectiveRatingPlan.createAndAddWCStateMultiplier()
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 155, column 66
    function toCreateAndAdd_71 () : entity.WCRetroRatingLetterOfCredit {
      return wcLine.RetrospectiveRatingPlan.createAndAddLetterOfCredit()
    }
    
    // 'toRemove' attribute on RowIterator at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 83, column 56
    function toRemove_48 (stateMultiplier :  entity.WCStateMultiplier) : void {
      wcLine.RetrospectiveRatingPlan.removeFromStateMultipliers(stateMultiplier)
    }
    
    // 'toRemove' attribute on RowIterator at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 155, column 66
    function toRemove_72 (letter :  entity.WCRetroRatingLetterOfCredit) : void {
      wcLine.RetrospectiveRatingPlan.removeFromLettersOfCredit(letter)
    }
    
    // 'value' attribute on TextCell (id=BasicPremiumFactor1_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 44, column 33
    function valueRoot_6 () : java.lang.Object {
      return wcLine.RetrospectiveRatingPlan
    }
    
    // 'value' attribute on TextCell (id=BasicPremiumFactor2_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 51, column 33
    function value_10 () : java.math.BigDecimal {
      return wcLine.RetrospectiveRatingPlan.BasicPremiumFactor2
    }
    
    // 'value' attribute on TextCell (id=BasicPremiumFactor3_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 58, column 33
    function value_16 () : java.math.BigDecimal {
      return wcLine.RetrospectiveRatingPlan.BasicPremiumFactor3
    }
    
    // 'value' attribute on TextCell (id=BasicPremiumFactor1_Cell) at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 44, column 33
    function value_4 () : java.math.BigDecimal {
      return wcLine.RetrospectiveRatingPlan.BasicPremiumFactor1
    }
    
    // 'value' attribute on RowIterator at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 83, column 56
    function value_49 () : entity.WCStateMultiplier[] {
      return wcLine.RetrospectiveRatingPlan.StateMultipliers
    }
    
    // 'value' attribute on RowIterator at WCOptionCardPanelSet.RetrospectiveRatingPlan.pcf: line 155, column 66
    function value_73 () : entity.WCRetroRatingLetterOfCredit[] {
      return wcLine.RetrospectiveRatingPlan.LettersOfCredit
    }
    
    property get nonMonopolisticStates () : gw.api.domain.StateSet {
      return getVariableValue("nonMonopolisticStates", 1) as gw.api.domain.StateSet
    }
    
    property set nonMonopolisticStates ($arg :  gw.api.domain.StateSet) {
      setVariableValue("nonMonopolisticStates", 1, $arg)
    }
    
    
  }
  
  
}