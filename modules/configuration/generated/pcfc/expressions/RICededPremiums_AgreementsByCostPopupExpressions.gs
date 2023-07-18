package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/RICededPremiums_AgreementsByCostPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RICededPremiums_AgreementsByCostPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/RICededPremiums_AgreementsByCostPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PanelIteratorEntry3ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 4)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=Drilldown) at RICededPremiums_AgreementsByCostPopup.pcf: line 111, column 39
    function action_39 () : void {
      RICPTransactionPopup.push(cpTrx)
    }
    
    // 'action' attribute on TextCell (id=Agreement_Cell) at RICededPremiums_AgreementsByCostPopup.pcf: line 124, column 62
    function action_44 () : void {
      EditAgreementPopup.push(cpTrx.Agreement, ririsk, true)
    }
    
    // 'action' attribute on TypeKeyCell (id=AgreementType_Cell) at RICededPremiums_AgreementsByCostPopup.pcf: line 130, column 54
    function action_49 () : void {
      EditAgreementPopup.push(cpTrx.Agreement, ririsk, true)
    }
    
    // 'action' attribute on Link (id=Drilldown) at RICededPremiums_AgreementsByCostPopup.pcf: line 111, column 39
    function action_dest_40 () : pcf.api.Destination {
      return pcf.RICPTransactionPopup.createDestination(cpTrx)
    }
    
    // 'action' attribute on TextCell (id=Agreement_Cell) at RICededPremiums_AgreementsByCostPopup.pcf: line 124, column 62
    function action_dest_45 () : pcf.api.Destination {
      return pcf.EditAgreementPopup.createDestination(cpTrx.Agreement, ririsk, true)
    }
    
    // 'action' attribute on TypeKeyCell (id=AgreementType_Cell) at RICededPremiums_AgreementsByCostPopup.pcf: line 130, column 54
    function action_dest_50 () : pcf.api.Destination {
      return pcf.EditAgreementPopup.createDestination(cpTrx.Agreement, ririsk, true)
    }
    
    // 'currency' attribute on MonetaryAmountCell (id=BasisGNP_Cell) at RICededPremiums_AgreementsByCostPopup.pcf: line 135, column 45
    function currency_56 () : typekey.Currency {
      return cpTrx.Agreement.Currency
    }
    
    // 'value' attribute on TextCell (id=CalcOrder_Cell) at RICededPremiums_AgreementsByCostPopup.pcf: line 119, column 52
    function valueRoot_42 () : java.lang.Object {
      return cpTrx
    }
    
    // 'value' attribute on TextCell (id=Agreement_Cell) at RICededPremiums_AgreementsByCostPopup.pcf: line 124, column 62
    function valueRoot_47 () : java.lang.Object {
      return cpTrx.Agreement
    }
    
    // 'value' attribute on TextCell (id=CalcOrder_Cell) at RICededPremiums_AgreementsByCostPopup.pcf: line 119, column 52
    function value_41 () : java.lang.Integer {
      return cpTrx.CalculationOrder
    }
    
    // 'value' attribute on TextCell (id=Agreement_Cell) at RICededPremiums_AgreementsByCostPopup.pcf: line 124, column 62
    function value_46 () : java.lang.String {
      return cpTrx.Agreement.AgreementNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=AgreementType_Cell) at RICededPremiums_AgreementsByCostPopup.pcf: line 130, column 54
    function value_51 () : typekey.RIAgreement {
      return cpTrx.Agreement.Subtype
    }
    
    // 'value' attribute on MonetaryAmountCell (id=BasisGNP_Cell) at RICededPremiums_AgreementsByCostPopup.pcf: line 135, column 45
    function value_54 () : gw.pl.currency.MonetaryAmount {
      return cpTrx.BasisGNP
    }
    
    // 'value' attribute on TextCell (id=CedingRate_Cell) at RICededPremiums_AgreementsByCostPopup.pcf: line 140, column 55
    function value_58 () : java.math.BigDecimal {
      return cpTrx.CedingRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CededPremium_Cell) at RICededPremiums_AgreementsByCostPopup.pcf: line 146, column 49
    function value_61 () : gw.pl.currency.MonetaryAmount {
      return cpTrx.CededPremium
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CededPremiumMarkup_Cell) at RICededPremiums_AgreementsByCostPopup.pcf: line 152, column 55
    function value_65 () : gw.pl.currency.MonetaryAmount {
      return cpTrx.CededPremiumMarkup
    }
    
    // 'value' attribute on TextCell (id=CommPercentage_Cell) at RICededPremiums_AgreementsByCostPopup.pcf: line 157, column 55
    function value_69 () : java.math.BigDecimal {
      return cpTrx.CommissionRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Comm_Cell) at RICededPremiums_AgreementsByCostPopup.pcf: line 163, column 47
    function value_72 () : gw.pl.currency.MonetaryAmount {
      return cpTrx.Commission
    }
    
    property get cpTrx () : entity.RICededPremiumTransaction {
      return getIteratedValue(4) as entity.RICededPremiumTransaction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/RICededPremiums_AgreementsByCostPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntry2ExpressionsImpl extends PanelIteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RICededPremiums_AgreementsByCostPopup.pcf: line 37, column 113
    function initialValue_3 () : java.util.Map<java.lang.Long, java.util.List<entity.RICededPremiumTransaction>> {
      return dateRangeTransactionMap.get(sliceDates).partition(\ t -> t.CalcTimestamp.Time)
    }
    
    // PanelIterator at RICededPremiums_AgreementsByCostPopup.pcf: line 33, column 64
    function initializeVariables_78 () : void {
        calcTransactionMap = dateRangeTransactionMap.get(sliceDates).partition(\ t -> t.CalcTimestamp.Time);

    }
    
    // 'value' attribute on TextInput (id=BuildingName_Input) at RICededPremiums_AgreementsByCostPopup.pcf: line 46, column 100
    function valueRoot_5 () : java.lang.Object {
      return costTransactionMap.get(costKey).first().RICededPremium.Cost
    }
    
    // 'value' attribute on TextInput (id=PremiumDates_Input) at RICededPremiums_AgreementsByCostPopup.pcf: line 62, column 100
    function value_10 () : java.lang.String {
      return sliceDates.Start.ShortFormat + "-" + sliceDates.End.ShortFormat
    }
    
    // 'value' attribute on TextInput (id=BuildingName_Input) at RICededPremiums_AgreementsByCostPopup.pcf: line 46, column 100
    function value_4 () : java.lang.String {
      return costTransactionMap.get(costKey).first().RICededPremium.Cost.CoverableName
    }
    
    // 'value' attribute on TextInput (id=DisplayName_Input) at RICededPremiums_AgreementsByCostPopup.pcf: line 54, column 98
    function value_7 () : java.lang.String {
      return costTransactionMap.get(costKey).first().RICededPremium.Cost.DisplayName
    }
    
    // 'value' attribute on PanelIterator at RICededPremiums_AgreementsByCostPopup.pcf: line 68, column 68
    function value_77 () : gw.util.IOrderedList<java.lang.Long> {
      return calcTransactionMap.Keys.order()
    }
    
    property get calcTransactionMap () : java.util.Map<java.lang.Long, java.util.List<entity.RICededPremiumTransaction>> {
      return getVariableValue("calcTransactionMap", 2) as java.util.Map<java.lang.Long, java.util.List<entity.RICededPremiumTransaction>>
    }
    
    property set calcTransactionMap ($arg :  java.util.Map<java.lang.Long, java.util.List<entity.RICededPremiumTransaction>>) {
      setVariableValue("calcTransactionMap", 2, $arg)
    }
    
    property get sliceDates () : com.guidewire.pl.system.util.DateRange {
      return getIteratedValue(2) as com.guidewire.pl.system.util.DateRange
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/RICededPremiums_AgreementsByCostPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntry3ExpressionsImpl extends PanelIteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at RICededPremiums_AgreementsByCostPopup.pcf: line 104, column 34
    function sortBy_23 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.Agreement.AttachmentPoint
    }
    
    // 'value' attribute on TextCell (id=CalcOrder_Cell) at RICededPremiums_AgreementsByCostPopup.pcf: line 119, column 52
    function sortValue_24 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.CalculationOrder
    }
    
    // 'value' attribute on TextCell (id=Agreement_Cell) at RICededPremiums_AgreementsByCostPopup.pcf: line 124, column 62
    function sortValue_25 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.Agreement.AgreementNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=AgreementType_Cell) at RICededPremiums_AgreementsByCostPopup.pcf: line 130, column 54
    function sortValue_26 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.Agreement.Subtype
    }
    
    // 'value' attribute on MonetaryAmountCell (id=BasisGNP_Cell) at RICededPremiums_AgreementsByCostPopup.pcf: line 135, column 45
    function sortValue_27 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.BasisGNP
    }
    
    // 'value' attribute on TextCell (id=CedingRate_Cell) at RICededPremiums_AgreementsByCostPopup.pcf: line 140, column 55
    function sortValue_28 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.CedingRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CededPremium_Cell) at RICededPremiums_AgreementsByCostPopup.pcf: line 146, column 49
    function sortValue_29 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.CededPremium
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CededPremiumMarkup_Cell) at RICededPremiums_AgreementsByCostPopup.pcf: line 152, column 55
    function sortValue_30 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.CededPremiumMarkup
    }
    
    // 'value' attribute on TextCell (id=CommPercentage_Cell) at RICededPremiums_AgreementsByCostPopup.pcf: line 157, column 55
    function sortValue_31 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.CommissionRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Comm_Cell) at RICededPremiums_AgreementsByCostPopup.pcf: line 163, column 47
    function sortValue_32 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.Commission
    }
    
    // '$$sumValue' attribute on RowIterator at RICededPremiums_AgreementsByCostPopup.pcf: line 146, column 49
    function sumValueRoot_34 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx
    }
    
    // 'footerSumValue' attribute on RowIterator at RICededPremiums_AgreementsByCostPopup.pcf: line 146, column 49
    function sumValue_33 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.CededPremium
    }
    
    // 'footerSumValue' attribute on RowIterator at RICededPremiums_AgreementsByCostPopup.pcf: line 152, column 55
    function sumValue_35 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.CededPremiumMarkup
    }
    
    // 'footerSumValue' attribute on RowIterator at RICededPremiums_AgreementsByCostPopup.pcf: line 163, column 47
    function sumValue_37 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.Commission
    }
    
    // 'value' attribute on MonetaryAmountInput (id=CostAmount_Input) at RICededPremiums_AgreementsByCostPopup.pcf: line 75, column 109
    function valueRoot_13 () : java.lang.Object {
      return calcTransactionMap.get(calcDate).first().RICededPremium.Cost
    }
    
    // 'value' attribute on TextInput (id=CalcReason_Input) at RICededPremiums_AgreementsByCostPopup.pcf: line 81, column 55
    function valueRoot_16 () : java.lang.Object {
      return calcTransactionMap.get(calcDate).first().RICededPremiumHistory
    }
    
    // 'value' attribute on MonetaryAmountInput (id=CostAmount_Input) at RICededPremiums_AgreementsByCostPopup.pcf: line 75, column 109
    function value_12 () : gw.pl.currency.MonetaryAmount {
      return calcTransactionMap.get(calcDate).first().RICededPremium.Cost.ActualAmountBilling
    }
    
    // 'value' attribute on TextInput (id=CalcReason_Input) at RICededPremiums_AgreementsByCostPopup.pcf: line 81, column 55
    function value_15 () : typekey.RIRecalcReason {
      return calcTransactionMap.get(calcDate).first().RICededPremiumHistory.Reason
    }
    
    // 'value' attribute on TextInput (id=CalcDates_Input) at RICededPremiums_AgreementsByCostPopup.pcf: line 86, column 181
    function value_18 () : java.lang.String {
      return calcTransactionMap.get(calcDate).first().EffectiveDate.ShortFormat + "-" + calcTransactionMap.get(calcDate).first().ExpirationDate.ShortFormat
    }
    
    // 'value' attribute on TextInput (id=CalcComments_Input) at RICededPremiums_AgreementsByCostPopup.pcf: line 91, column 103
    function value_20 () : java.lang.String {
      return calcTransactionMap.get(calcDate).first().RICededPremiumHistory.CommentText
    }
    
    // 'value' attribute on RowIterator at RICededPremiums_AgreementsByCostPopup.pcf: line 101, column 84
    function value_76 () : java.util.List<entity.RICededPremiumTransaction> {
      return calcTransactionMap.get(calcDate)
    }
    
    property get calcDate () : java.lang.Long {
      return getIteratedValue(3) as java.lang.Long
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/RICededPremiums_AgreementsByCostPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends RICededPremiums_AgreementsByCostPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RICededPremiums_AgreementsByCostPopup.pcf: line 29, column 135
    function initialValue_2 () : java.util.Map<com.guidewire.pl.system.util.DateRange, java.util.List<entity.RICededPremiumTransaction>> {
      return costTransactionMap.get(costKey).partition(\ t -> gw.api.web.util.DateRangeUtil.allDatesBetween(t.RICededPremium.EffectiveDate, t.RICededPremium.ExpirationDate))
    }
    
    // PanelIterator at RICededPremiums_AgreementsByCostPopup.pcf: line 25, column 56
    function initializeVariables_80 () : void {
        dateRangeTransactionMap = costTransactionMap.get(costKey).partition(\ t -> gw.api.web.util.DateRangeUtil.allDatesBetween(t.RICededPremium.EffectiveDate, t.RICededPremium.ExpirationDate));

    }
    
    // 'value' attribute on PanelIterator at RICededPremiums_AgreementsByCostPopup.pcf: line 33, column 64
    function value_79 () : com.guidewire.pl.system.util.DateRange[] {
      return gw.web.admin.ReinsuranceUIHelper.sortDateRanges(dateRangeTransactionMap)
    }
    
    property get costKey () : gw.api.domain.financials.CostKey {
      return getIteratedValue(1) as gw.api.domain.financials.CostKey
    }
    
    property get dateRangeTransactionMap () : java.util.Map<com.guidewire.pl.system.util.DateRange, java.util.List<entity.RICededPremiumTransaction>> {
      return getVariableValue("dateRangeTransactionMap", 1) as java.util.Map<com.guidewire.pl.system.util.DateRange, java.util.List<entity.RICededPremiumTransaction>>
    }
    
    property set dateRangeTransactionMap ($arg :  java.util.Map<com.guidewire.pl.system.util.DateRange, java.util.List<entity.RICededPremiumTransaction>>) {
      setVariableValue("dateRangeTransactionMap", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/RICededPremiums_AgreementsByCostPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RICededPremiums_AgreementsByCostPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (ririsk :  RIRisk) : int {
      return 0
    }
    
    // 'initialValue' attribute on Variable at RICededPremiums_AgreementsByCostPopup.pcf: line 16, column 125
    function initialValue_0 () : java.util.Map<gw.api.domain.financials.CostKey, java.util.List<entity.RICededPremiumTransaction>> {
      return gw.web.admin.ReinsuranceUIHelper.partitionTransactions(ririsk)
    }
    
    // 'title' attribute on TitleBar at RICededPremiums_AgreementsByCostPopup.pcf: line 20, column 49
    function title_1 () : java.lang.String {
      return ririsk.Reinsurable.DisplayName
    }
    
    // 'value' attribute on PanelIterator at RICededPremiums_AgreementsByCostPopup.pcf: line 25, column 56
    function value_81 () : gw.api.domain.financials.CostKey[] {
      return gw.web.admin.ReinsuranceUIHelper.sortCostKeysByBuildingAndCost(costTransactionMap)
    }
    
    override property get CurrentLocation () : pcf.RICededPremiums_AgreementsByCostPopup {
      return super.CurrentLocation as pcf.RICededPremiums_AgreementsByCostPopup
    }
    
    property get costTransactionMap () : java.util.Map<gw.api.domain.financials.CostKey, java.util.List<entity.RICededPremiumTransaction>> {
      return getVariableValue("costTransactionMap", 0) as java.util.Map<gw.api.domain.financials.CostKey, java.util.List<entity.RICededPremiumTransaction>>
    }
    
    property set costTransactionMap ($arg :  java.util.Map<gw.api.domain.financials.CostKey, java.util.List<entity.RICededPremiumTransaction>>) {
      setVariableValue("costTransactionMap", 0, $arg)
    }
    
    property get ririsk () : RIRisk {
      return getVariableValue("ririsk", 0) as RIRisk
    }
    
    property set ririsk ($arg :  RIRisk) {
      setVariableValue("ririsk", 0, $arg)
    }
    
    
  }
  
  
}