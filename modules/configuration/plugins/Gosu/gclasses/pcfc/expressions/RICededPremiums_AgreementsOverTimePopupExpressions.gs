package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/RICededPremiums_AgreementsOverTimePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RICededPremiums_AgreementsOverTimePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/RICededPremiums_AgreementsOverTimePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PanelIteratorEntry3ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 4)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=Drilldown) at RICededPremiums_AgreementsOverTimePopup.pcf: line 93, column 39
    function action_35 () : void {
      RICPTransactionPopup.push(cpTrx)
    }
    
    // 'action' attribute on Link (id=Drilldown) at RICededPremiums_AgreementsOverTimePopup.pcf: line 93, column 39
    function action_dest_36 () : pcf.api.Destination {
      return pcf.RICPTransactionPopup.createDestination(cpTrx)
    }
    
    // 'currency' attribute on MonetaryAmountCell (id=BasisGNP_Cell) at RICededPremiums_AgreementsOverTimePopup.pcf: line 115, column 45
    function currency_47 () : typekey.Currency {
      return cpTrx.Agreement.Currency
    }
    
    // 'label' attribute on TextCell (id=CedingRate_Cell) at RICededPremiums_AgreementsOverTimePopup.pcf: line 120, column 79
    function label_49 () : java.lang.Object {
      return (agreement typeis NonProportionalRIAgreement) ? DisplayKey.get("Web.Reinsurance.CededPremiums.AgreementsOverTime.CededRisk") : DisplayKey.get("Web.Reinsurance.CededPremiums.AgreementsOverTime.RateShare")
    }
    
    // 'value' attribute on TypeKeyCell (id=CalcReason_Cell) at RICededPremiums_AgreementsOverTimePopup.pcf: line 105, column 57
    function valueRoot_40 () : java.lang.Object {
      return cpTrx.RICededPremiumHistory
    }
    
    // 'value' attribute on MonetaryAmountCell (id=BasisGNP_Cell) at RICededPremiums_AgreementsOverTimePopup.pcf: line 115, column 45
    function valueRoot_46 () : java.lang.Object {
      return cpTrx
    }
    
    // 'value' attribute on TextCell (id=CalcDate_Cell) at RICededPremiums_AgreementsOverTimePopup.pcf: line 100, column 117
    function value_37 () : java.lang.String {
      return cpTrx.CalcTimestamp.DayOfWeekName + " " + cpTrx.CalcTimestamp.toTimeString()
    }
    
    // 'value' attribute on TypeKeyCell (id=CalcReason_Cell) at RICededPremiums_AgreementsOverTimePopup.pcf: line 105, column 57
    function value_39 () : typekey.RIRecalcReason {
      return cpTrx.RICededPremiumHistory.Reason
    }
    
    // 'value' attribute on TextCell (id=CalcComment_Cell) at RICededPremiums_AgreementsOverTimePopup.pcf: line 109, column 70
    function value_42 () : java.lang.String {
      return cpTrx.RICededPremiumHistory.CommentText
    }
    
    // 'value' attribute on MonetaryAmountCell (id=BasisGNP_Cell) at RICededPremiums_AgreementsOverTimePopup.pcf: line 115, column 45
    function value_45 () : gw.pl.currency.MonetaryAmount {
      return cpTrx.BasisGNP
    }
    
    // 'value' attribute on TextCell (id=CedingRate_Cell) at RICededPremiums_AgreementsOverTimePopup.pcf: line 120, column 79
    function value_50 () : java.lang.Comparable<java.lang.Object> {
      return (agreement typeis NonProportionalRIAgreement) ? cpTrx.CededRiskAmount : cpTrx.CedingRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CededPremium_Cell) at RICededPremiums_AgreementsOverTimePopup.pcf: line 126, column 49
    function value_53 () : gw.pl.currency.MonetaryAmount {
      return cpTrx.CededPremium
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CededPremiumMarkup_Cell) at RICededPremiums_AgreementsOverTimePopup.pcf: line 132, column 55
    function value_57 () : gw.pl.currency.MonetaryAmount {
      return cpTrx.CededPremiumMarkup
    }
    
    // 'value' attribute on TextCell (id=CommPercentage_Cell) at RICededPremiums_AgreementsOverTimePopup.pcf: line 137, column 55
    function value_61 () : java.math.BigDecimal {
      return cpTrx.CommissionRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Comm_Cell) at RICededPremiums_AgreementsOverTimePopup.pcf: line 143, column 47
    function value_64 () : gw.pl.currency.MonetaryAmount {
      return cpTrx.Commission
    }
    
    property get cpTrx () : entity.RICededPremiumTransaction {
      return getIteratedValue(4) as entity.RICededPremiumTransaction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/RICededPremiums_AgreementsOverTimePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntry2ExpressionsImpl extends PanelIteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RICededPremiums_AgreementsOverTimePopup.pcf: line 57, column 131
    function initialValue_11 () : java.util.Map<gw.api.domain.financials.CostKey, java.util.List<entity.RICededPremiumTransaction>> {
      return buildingTransactionMap.get(building).partition(\ t -> t.RICededPremium.Cost.CostKey)
    }
    
    // PanelIterator at RICededPremiums_AgreementsOverTimePopup.pcf: line 53, column 68
    function initializeVariables_70 () : void {
        costTransactionMap = buildingTransactionMap.get(building).partition(\ t -> t.RICededPremium.Cost.CostKey);

    }
    
    // 'value' attribute on TextInput (id=BuildingName_Input) at RICededPremiums_AgreementsOverTimePopup.pcf: line 64, column 35
    function value_12 () : java.lang.String {
      return building
    }
    
    // 'value' attribute on PanelIterator at RICededPremiums_AgreementsOverTimePopup.pcf: line 70, column 60
    function value_69 () : gw.api.domain.financials.CostKey[] {
      return gw.web.admin.ReinsuranceUIHelper.sortCostKeysByBuildingAndCost(costTransactionMap)
    }
    
    property get building () : java.lang.String {
      return getIteratedValue(2) as java.lang.String
    }
    
    property get costTransactionMap () : java.util.Map<gw.api.domain.financials.CostKey, java.util.List<entity.RICededPremiumTransaction>> {
      return getVariableValue("costTransactionMap", 2) as java.util.Map<gw.api.domain.financials.CostKey, java.util.List<entity.RICededPremiumTransaction>>
    }
    
    property set costTransactionMap ($arg :  java.util.Map<gw.api.domain.financials.CostKey, java.util.List<entity.RICededPremiumTransaction>>) {
      setVariableValue("costTransactionMap", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/RICededPremiums_AgreementsOverTimePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntry3ExpressionsImpl extends PanelIteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on TextCell (id=CedingRate_Cell) at RICededPremiums_AgreementsOverTimePopup.pcf: line 120, column 79
    function label_21 () : java.lang.Object {
      return (agreement typeis NonProportionalRIAgreement) ? DisplayKey.get("Web.Reinsurance.CededPremiums.AgreementsOverTime.CededRisk") : DisplayKey.get("Web.Reinsurance.CededPremiums.AgreementsOverTime.RateShare")
    }
    
    // 'sortBy' attribute on TextCell (id=CalcDate_Cell) at RICededPremiums_AgreementsOverTimePopup.pcf: line 100, column 117
    function sortValue_17 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.CalcTimestamp
    }
    
    // 'value' attribute on TypeKeyCell (id=CalcReason_Cell) at RICededPremiums_AgreementsOverTimePopup.pcf: line 105, column 57
    function sortValue_18 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.RICededPremiumHistory.Reason
    }
    
    // 'value' attribute on TextCell (id=CalcComment_Cell) at RICededPremiums_AgreementsOverTimePopup.pcf: line 109, column 70
    function sortValue_19 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.RICededPremiumHistory.CommentText
    }
    
    // 'value' attribute on MonetaryAmountCell (id=BasisGNP_Cell) at RICededPremiums_AgreementsOverTimePopup.pcf: line 115, column 45
    function sortValue_20 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.BasisGNP
    }
    
    // 'value' attribute on TextCell (id=CedingRate_Cell) at RICededPremiums_AgreementsOverTimePopup.pcf: line 120, column 79
    function sortValue_22 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return (agreement typeis NonProportionalRIAgreement) ? cpTrx.CededRiskAmount : cpTrx.CedingRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CededPremium_Cell) at RICededPremiums_AgreementsOverTimePopup.pcf: line 126, column 49
    function sortValue_23 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.CededPremium
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CededPremiumMarkup_Cell) at RICededPremiums_AgreementsOverTimePopup.pcf: line 132, column 55
    function sortValue_24 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.CededPremiumMarkup
    }
    
    // 'value' attribute on TextCell (id=CommPercentage_Cell) at RICededPremiums_AgreementsOverTimePopup.pcf: line 137, column 55
    function sortValue_25 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.CommissionRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Comm_Cell) at RICededPremiums_AgreementsOverTimePopup.pcf: line 143, column 47
    function sortValue_26 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.Commission
    }
    
    // '$$sumValue' attribute on RowIterator at RICededPremiums_AgreementsOverTimePopup.pcf: line 115, column 45
    function sumValueRoot_28 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx
    }
    
    // 'footerSumValue' attribute on RowIterator at RICededPremiums_AgreementsOverTimePopup.pcf: line 115, column 45
    function sumValue_27 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.BasisGNP
    }
    
    // 'footerSumValue' attribute on RowIterator at RICededPremiums_AgreementsOverTimePopup.pcf: line 126, column 49
    function sumValue_29 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.CededPremium
    }
    
    // 'footerSumValue' attribute on RowIterator at RICededPremiums_AgreementsOverTimePopup.pcf: line 132, column 55
    function sumValue_31 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.CededPremiumMarkup
    }
    
    // 'footerSumValue' attribute on RowIterator at RICededPremiums_AgreementsOverTimePopup.pcf: line 143, column 47
    function sumValue_33 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.Commission
    }
    
    // 'value' attribute on TextInput (id=DisplayName_Input) at RICededPremiums_AgreementsOverTimePopup.pcf: line 76, column 100
    function valueRoot_15 () : java.lang.Object {
      return costTransactionMap.get(costKey).first().RICededPremium.Cost
    }
    
    // 'value' attribute on TextInput (id=DisplayName_Input) at RICededPremiums_AgreementsOverTimePopup.pcf: line 76, column 100
    function value_14 () : java.lang.String {
      return costTransactionMap.get(costKey).first().RICededPremium.Cost.DisplayName
    }
    
    // 'value' attribute on RowIterator at RICededPremiums_AgreementsOverTimePopup.pcf: line 86, column 84
    function value_68 () : java.util.List<entity.RICededPremiumTransaction> {
      return costTransactionMap.get(costKey)
    }
    
    property get costKey () : gw.api.domain.financials.CostKey {
      return getIteratedValue(3) as gw.api.domain.financials.CostKey
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/RICededPremiums_AgreementsOverTimePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends RICededPremiums_AgreementsOverTimePopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextInput (id=AgreementNumber_Input) at RICededPremiums_AgreementsOverTimePopup.pcf: line 38, column 50
    function action_3 () : void {
      EditAgreementPopup.push(agreement, ririsk, true)
    }
    
    // 'action' attribute on TextInput (id=AgreementNumber_Input) at RICededPremiums_AgreementsOverTimePopup.pcf: line 38, column 50
    function action_dest_4 () : pcf.api.Destination {
      return pcf.EditAgreementPopup.createDestination(agreement, ririsk, true)
    }
    
    // 'initialValue' attribute on Variable at RICededPremiums_AgreementsOverTimePopup.pcf: line 29, column 113
    function initialValue_2 () : java.util.Map<java.lang.String, java.util.List<entity.RICededPremiumTransaction>> {
      return agreementTransactionMap.get(agreement).partition(\ t -> t.RICededPremium.Cost.CoverableName)
    }
    
    // PanelIterator at RICededPremiums_AgreementsOverTimePopup.pcf: line 25, column 42
    function initializeVariables_72 () : void {
        buildingTransactionMap = agreementTransactionMap.get(agreement).partition(\ t -> t.RICededPremium.Cost.CoverableName);

    }
    
    // 'value' attribute on TextInput (id=AgreementNumber_Input) at RICededPremiums_AgreementsOverTimePopup.pcf: line 38, column 50
    function valueRoot_6 () : java.lang.Object {
      return agreement
    }
    
    // 'value' attribute on TextInput (id=AgreementNumber_Input) at RICededPremiums_AgreementsOverTimePopup.pcf: line 38, column 50
    function value_5 () : java.lang.String {
      return agreement.AgreementNumber
    }
    
    // 'value' attribute on PanelIterator at RICededPremiums_AgreementsOverTimePopup.pcf: line 53, column 68
    function value_71 () : gw.util.IOrderedList<java.lang.String> {
      return buildingTransactionMap.Keys.orderBy(\ c -> c)
    }
    
    // 'value' attribute on TextInput (id=AgreementType_Input) at RICededPremiums_AgreementsOverTimePopup.pcf: line 47, column 48
    function value_8 () : typekey.RIAgreement {
      return agreement.Subtype
    }
    
    property get agreement () : entity.RIAgreement {
      return getIteratedValue(1) as entity.RIAgreement
    }
    
    property get buildingTransactionMap () : java.util.Map<java.lang.String, java.util.List<entity.RICededPremiumTransaction>> {
      return getVariableValue("buildingTransactionMap", 1) as java.util.Map<java.lang.String, java.util.List<entity.RICededPremiumTransaction>>
    }
    
    property set buildingTransactionMap ($arg :  java.util.Map<java.lang.String, java.util.List<entity.RICededPremiumTransaction>>) {
      setVariableValue("buildingTransactionMap", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/RICededPremiums_AgreementsOverTimePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RICededPremiums_AgreementsOverTimePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (ririsk :  RIRisk) : int {
      return 0
    }
    
    // 'initialValue' attribute on Variable at RICededPremiums_AgreementsOverTimePopup.pcf: line 16, column 111
    function initialValue_0 () : java.util.Map<entity.RIAgreement, java.util.List<entity.RICededPremiumTransaction>> {
      return gw.web.admin.ReinsuranceUIHelper.partitionAgreementTransactions(ririsk)
    }
    
    // 'title' attribute on TitleBar at RICededPremiums_AgreementsOverTimePopup.pcf: line 20, column 49
    function title_1 () : java.lang.String {
      return ririsk.Reinsurable.DisplayName
    }
    
    // 'value' attribute on PanelIterator at RICededPremiums_AgreementsOverTimePopup.pcf: line 25, column 42
    function value_73 () : entity.RIAgreement[] {
      return gw.web.admin.ReinsuranceUIHelper.sortAgreements(agreementTransactionMap)
    }
    
    override property get CurrentLocation () : pcf.RICededPremiums_AgreementsOverTimePopup {
      return super.CurrentLocation as pcf.RICededPremiums_AgreementsOverTimePopup
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