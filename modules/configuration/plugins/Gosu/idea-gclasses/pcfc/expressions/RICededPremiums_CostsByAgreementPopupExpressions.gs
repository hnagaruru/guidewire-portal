package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/RICededPremiums_CostsByAgreementPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RICededPremiums_CostsByAgreementPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/RICededPremiums_CostsByAgreementPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PanelIteratorEntry3ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 4)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=Drilldown) at RICededPremiums_CostsByAgreementPopup.pcf: line 110, column 39
    function action_42 () : void {
      RICPTransactionPopup.push(cpTrx)
    }
    
    // 'action' attribute on Link (id=Drilldown) at RICededPremiums_CostsByAgreementPopup.pcf: line 110, column 39
    function action_dest_43 () : pcf.api.Destination {
      return pcf.RICPTransactionPopup.createDestination(cpTrx)
    }
    
    // 'label' attribute on TextCell (id=CedingRate_Cell) at RICededPremiums_CostsByAgreementPopup.pcf: line 136, column 79
    function label_56 () : java.lang.Object {
      return agreement typeis NonProportionalRIAgreement ? DisplayKey.get("Web.Reinsurance.CededPremiums.CostsByAgreement.CededRisk") : DisplayKey.get("Web.Reinsurance.CededPremiums.CostsByAgreement.RateShare")
    }
    
    // 'value' attribute on TextCell (id=Building_Cell) at RICededPremiums_CostsByAgreementPopup.pcf: line 116, column 70
    function valueRoot_45 () : java.lang.Object {
      return cpTrx.RICededPremium.Cost
    }
    
    // 'value' attribute on MonetaryAmountCell (id=BasisGNP_Cell) at RICededPremiums_CostsByAgreementPopup.pcf: line 131, column 45
    function valueRoot_54 () : java.lang.Object {
      return cpTrx
    }
    
    // 'value' attribute on TextCell (id=Building_Cell) at RICededPremiums_CostsByAgreementPopup.pcf: line 116, column 70
    function value_44 () : java.lang.String {
      return cpTrx.RICededPremium.Cost.CoverableName
    }
    
    // 'value' attribute on TextCell (id=Cost_Cell) at RICededPremiums_CostsByAgreementPopup.pcf: line 121, column 68
    function value_47 () : java.lang.String {
      return cpTrx.RICededPremium.Cost.DisplayName
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CostAmt_Cell) at RICededPremiums_CostsByAgreementPopup.pcf: line 126, column 76
    function value_50 () : gw.pl.currency.MonetaryAmount {
      return cpTrx.RICededPremium.Cost.ActualAmountBilling
    }
    
    // 'value' attribute on MonetaryAmountCell (id=BasisGNP_Cell) at RICededPremiums_CostsByAgreementPopup.pcf: line 131, column 45
    function value_53 () : gw.pl.currency.MonetaryAmount {
      return cpTrx.BasisGNP
    }
    
    // 'value' attribute on TextCell (id=CedingRate_Cell) at RICededPremiums_CostsByAgreementPopup.pcf: line 136, column 79
    function value_57 () : java.lang.Comparable<java.lang.Object> {
      return agreement typeis NonProportionalRIAgreement ? cpTrx.CededRiskAmount : cpTrx.CedingRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CededPremium_Cell) at RICededPremiums_CostsByAgreementPopup.pcf: line 141, column 49
    function value_60 () : gw.pl.currency.MonetaryAmount {
      return cpTrx.CededPremium
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CededPremiumMarkup_Cell) at RICededPremiums_CostsByAgreementPopup.pcf: line 146, column 55
    function value_63 () : gw.pl.currency.MonetaryAmount {
      return cpTrx.CededPremiumMarkup
    }
    
    // 'value' attribute on TextCell (id=CommPercentage_Cell) at RICededPremiums_CostsByAgreementPopup.pcf: line 151, column 55
    function value_66 () : java.math.BigDecimal {
      return cpTrx.CommissionRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Comm_Cell) at RICededPremiums_CostsByAgreementPopup.pcf: line 156, column 47
    function value_69 () : gw.pl.currency.MonetaryAmount {
      return cpTrx.Commission
    }
    
    property get cpTrx () : entity.RICededPremiumTransaction {
      return getIteratedValue(4) as entity.RICededPremiumTransaction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/RICededPremiums_CostsByAgreementPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntry2ExpressionsImpl extends PanelIteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RICededPremiums_CostsByAgreementPopup.pcf: line 64, column 113
    function initialValue_11 () : java.util.Map<java.lang.Long, java.util.List<entity.RICededPremiumTransaction>> {
      return calcTransactionMap.get(calcDate).partition(\ t -> t.CalcTimestamp.Time)
    }
    
    // PanelIterator at RICededPremiums_CostsByAgreementPopup.pcf: line 60, column 66
    function initializeVariables_74 () : void {
        dateRangeTransactionMap = calcTransactionMap.get(calcDate).partition(\ t -> t.CalcTimestamp.Time);

    }
    
    // 'value' attribute on PanelIterator at RICededPremiums_CostsByAgreementPopup.pcf: line 68, column 68
    function value_73 () : gw.util.IOrderedList<java.lang.Long> {
      return dateRangeTransactionMap.Keys.order()
    }
    
    property get calcDate () : java.lang.Long {
      return getIteratedValue(2) as java.lang.Long
    }
    
    property get dateRangeTransactionMap () : java.util.Map<java.lang.Long, java.util.List<entity.RICededPremiumTransaction>> {
      return getVariableValue("dateRangeTransactionMap", 2) as java.util.Map<java.lang.Long, java.util.List<entity.RICededPremiumTransaction>>
    }
    
    property set dateRangeTransactionMap ($arg :  java.util.Map<java.lang.Long, java.util.List<entity.RICededPremiumTransaction>>) {
      setVariableValue("dateRangeTransactionMap", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/RICededPremiums_CostsByAgreementPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntry3ExpressionsImpl extends PanelIteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on TextCell (id=CedingRate_Cell) at RICededPremiums_CostsByAgreementPopup.pcf: line 136, column 79
    function label_26 () : java.lang.Object {
      return agreement typeis NonProportionalRIAgreement ? DisplayKey.get("Web.Reinsurance.CededPremiums.CostsByAgreement.CededRisk") : DisplayKey.get("Web.Reinsurance.CededPremiums.CostsByAgreement.RateShare")
    }
    
    // 'sortBy' attribute on IteratorSort at RICededPremiums_CostsByAgreementPopup.pcf: line 93, column 34
    function sortBy_18 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.RICededPremium.Cost.CoverableName
    }
    
    // 'sortBy' attribute on IteratorSort at RICededPremiums_CostsByAgreementPopup.pcf: line 96, column 34
    function sortBy_19 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.RICededPremium.Cost
    }
    
    // 'sortBy' attribute on IteratorSort at RICededPremiums_CostsByAgreementPopup.pcf: line 99, column 34
    function sortBy_20 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.CededPremium
    }
    
    // 'sortBy' attribute on IteratorSort at RICededPremiums_CostsByAgreementPopup.pcf: line 103, column 34
    function sortBy_21 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.RICededPremium.Cost.ActualAmountBilling
    }
    
    // 'value' attribute on TextCell (id=Building_Cell) at RICededPremiums_CostsByAgreementPopup.pcf: line 116, column 70
    function sortValue_22 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.RICededPremium.Cost.CoverableName
    }
    
    // 'value' attribute on TextCell (id=Cost_Cell) at RICededPremiums_CostsByAgreementPopup.pcf: line 121, column 68
    function sortValue_23 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.RICededPremium.Cost.DisplayName
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CostAmt_Cell) at RICededPremiums_CostsByAgreementPopup.pcf: line 126, column 76
    function sortValue_24 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.RICededPremium.Cost.ActualAmountBilling
    }
    
    // 'value' attribute on MonetaryAmountCell (id=BasisGNP_Cell) at RICededPremiums_CostsByAgreementPopup.pcf: line 131, column 45
    function sortValue_25 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.BasisGNP
    }
    
    // 'value' attribute on TextCell (id=CedingRate_Cell) at RICededPremiums_CostsByAgreementPopup.pcf: line 136, column 79
    function sortValue_27 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return agreement typeis NonProportionalRIAgreement ? cpTrx.CededRiskAmount : cpTrx.CedingRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CededPremium_Cell) at RICededPremiums_CostsByAgreementPopup.pcf: line 141, column 49
    function sortValue_28 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.CededPremium
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CededPremiumMarkup_Cell) at RICededPremiums_CostsByAgreementPopup.pcf: line 146, column 55
    function sortValue_29 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.CededPremiumMarkup
    }
    
    // 'value' attribute on TextCell (id=CommPercentage_Cell) at RICededPremiums_CostsByAgreementPopup.pcf: line 151, column 55
    function sortValue_30 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.CommissionRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Comm_Cell) at RICededPremiums_CostsByAgreementPopup.pcf: line 156, column 47
    function sortValue_31 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.Commission
    }
    
    // '$$sumValue' attribute on RowIterator at RICededPremiums_CostsByAgreementPopup.pcf: line 131, column 45
    function sumValueRoot_35 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx
    }
    
    // 'footerSumValue' attribute on RowIterator at RICededPremiums_CostsByAgreementPopup.pcf: line 131, column 45
    function sumValue_34 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.BasisGNP
    }
    
    // 'footerSumValue' attribute on RowIterator at RICededPremiums_CostsByAgreementPopup.pcf: line 146, column 55
    function sumValue_38 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.CededPremiumMarkup
    }
    
    // 'footerSumValue' attribute on RowIterator at RICededPremiums_CostsByAgreementPopup.pcf: line 156, column 47
    function sumValue_40 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.Commission
    }
    
    // 'value' attribute on TextInput (id=CalcDate_Input) at RICededPremiums_CostsByAgreementPopup.pcf: line 75, column 55
    function valueRoot_13 () : java.lang.Object {
      return calcTransactionMap.get(calcDate).first().RICededPremiumHistory
    }
    
    // 'value' attribute on TextInput (id=CalcDate_Input) at RICededPremiums_CostsByAgreementPopup.pcf: line 75, column 55
    function value_12 () : typekey.RIRecalcReason {
      return calcTransactionMap.get(calcDate).first().RICededPremiumHistory.Reason
    }
    
    // 'value' attribute on TextInput (id=CalcComment_Input) at RICededPremiums_CostsByAgreementPopup.pcf: line 80, column 103
    function value_15 () : java.lang.String {
      return calcTransactionMap.get(calcDate).first().RICededPremiumHistory.CommentText
    }
    
    // 'value' attribute on RowIterator at RICededPremiums_CostsByAgreementPopup.pcf: line 90, column 84
    function value_72 () : java.util.List<entity.RICededPremiumTransaction> {
      return calcTransactionMap.get(calcDate)
    }
    
    property get dateRange () : java.lang.Long {
      return getIteratedValue(3) as java.lang.Long
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/RICededPremiums_CostsByAgreementPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends RICededPremiums_CostsByAgreementPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RICededPremiums_CostsByAgreementPopup.pcf: line 29, column 111
    function initialValue_2 () : java.util.Map<java.lang.Long, java.util.List<entity.RICededPremiumTransaction>> {
      return agreementTransactionMap.get(agreement).partition(\ t -> t.CalcTimestamp.Time)
    }
    
    // PanelIterator at RICededPremiums_CostsByAgreementPopup.pcf: line 25, column 42
    function initializeVariables_76 () : void {
        calcTransactionMap = agreementTransactionMap.get(agreement).partition(\ t -> t.CalcTimestamp.Time);

    }
    
    // 'value' attribute on TextInput (id=AgreementNumber_Input) at RICededPremiums_CostsByAgreementPopup.pcf: line 37, column 50
    function valueRoot_4 () : java.lang.Object {
      return agreement
    }
    
    // 'value' attribute on TextInput (id=AgreementNumber_Input) at RICededPremiums_CostsByAgreementPopup.pcf: line 37, column 50
    function value_3 () : java.lang.String {
      return agreement.AgreementNumber
    }
    
    // 'value' attribute on TextInput (id=AgreementType_Input) at RICededPremiums_CostsByAgreementPopup.pcf: line 46, column 48
    function value_6 () : typekey.RIAgreement {
      return agreement.Subtype
    }
    
    // 'value' attribute on PanelIterator at RICededPremiums_CostsByAgreementPopup.pcf: line 60, column 66
    function value_75 () : gw.util.IOrderedList<java.lang.Long> {
      return calcTransactionMap.Keys.order()
    }
    
    // 'value' attribute on TextInput (id=AgreementDates_Input) at RICededPremiums_CostsByAgreementPopup.pcf: line 54, column 115
    function value_9 () : java.lang.String {
      return agreement.EffectiveDate.ShortFormat + "-" + agreement.ExpirationDate.ShortFormat
    }
    
    property get agreement () : entity.RIAgreement {
      return getIteratedValue(1) as entity.RIAgreement
    }
    
    property get calcTransactionMap () : java.util.Map<java.lang.Long, java.util.List<entity.RICededPremiumTransaction>> {
      return getVariableValue("calcTransactionMap", 1) as java.util.Map<java.lang.Long, java.util.List<entity.RICededPremiumTransaction>>
    }
    
    property set calcTransactionMap ($arg :  java.util.Map<java.lang.Long, java.util.List<entity.RICededPremiumTransaction>>) {
      setVariableValue("calcTransactionMap", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/RICededPremiums_CostsByAgreementPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RICededPremiums_CostsByAgreementPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (ririsk :  RIRisk) : int {
      return 0
    }
    
    // 'initialValue' attribute on Variable at RICededPremiums_CostsByAgreementPopup.pcf: line 16, column 111
    function initialValue_0 () : java.util.Map<entity.RIAgreement, java.util.List<entity.RICededPremiumTransaction>> {
      return gw.web.admin.ReinsuranceUIHelper.partitionAgreementTransactions(ririsk)
    }
    
    // 'title' attribute on TitleBar at RICededPremiums_CostsByAgreementPopup.pcf: line 20, column 49
    function title_1 () : java.lang.String {
      return ririsk.Reinsurable.DisplayName
    }
    
    // 'value' attribute on PanelIterator at RICededPremiums_CostsByAgreementPopup.pcf: line 25, column 42
    function value_77 () : entity.RIAgreement[] {
      return gw.web.admin.ReinsuranceUIHelper.sortAgreements(agreementTransactionMap)
    }
    
    override property get CurrentLocation () : pcf.RICededPremiums_CostsByAgreementPopup {
      return super.CurrentLocation as pcf.RICededPremiums_CostsByAgreementPopup
    }
    
    property get agreementTransactionMap () : java.util.Map<entity.RIAgreement, java.util.List<entity.RICededPremiumTransaction>> {
      return getVariableValue("agreementTransactionMap", 0) as java.util.Map<entity.RIAgreement, java.util.List<entity.RICededPremiumTransaction>>
    }
    
    property set agreementTransactionMap ($arg :  java.util.Map<entity.RIAgreement, java.util.List<entity.RICededPremiumTransaction>>) {
      setVariableValue("agreementTransactionMap", 0, $arg)
    }
    
    property get ririsk () : RIRisk {
      return getVariableValue("ririsk", 0) as RIRisk
    }
    
    property set ririsk ($arg :  RIRisk) {
      setVariableValue("ririsk", 0, $arg)
    }
    
    
  }
  
  
}