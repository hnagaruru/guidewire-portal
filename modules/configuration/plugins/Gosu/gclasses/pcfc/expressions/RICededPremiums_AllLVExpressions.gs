package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/RICededPremiums_AllLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RICededPremiums_AllLVExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/RICededPremiums_AllLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RICededPremiums_AllLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=Drilldown) at RICededPremiums_AllLV.pcf: line 25, column 29
    function action_15 () : void {
      RICPTransactionPopup.push(cpTrx)
    }
    
    // 'action' attribute on TextCell (id=Agreement_Cell) at RICededPremiums_AllLV.pcf: line 45, column 52
    function action_22 () : void {
      EditAgreementPopup.push(cpTrx.Agreement, ririsk, true)
    }
    
    // 'action' attribute on TypeKeyCell (id=AgreementType_Cell) at RICededPremiums_AllLV.pcf: line 52, column 28
    function action_27 () : void {
      EditAgreementPopup.push(cpTrx.Agreement, ririsk, true)
    }
    
    // 'action' attribute on Link (id=Drilldown) at RICededPremiums_AllLV.pcf: line 25, column 29
    function action_dest_16 () : pcf.api.Destination {
      return pcf.RICPTransactionPopup.createDestination(cpTrx)
    }
    
    // 'action' attribute on TextCell (id=Agreement_Cell) at RICededPremiums_AllLV.pcf: line 45, column 52
    function action_dest_23 () : pcf.api.Destination {
      return pcf.EditAgreementPopup.createDestination(cpTrx.Agreement, ririsk, true)
    }
    
    // 'action' attribute on TypeKeyCell (id=AgreementType_Cell) at RICededPremiums_AllLV.pcf: line 52, column 28
    function action_dest_28 () : pcf.api.Destination {
      return pcf.EditAgreementPopup.createDestination(cpTrx.Agreement, ririsk, true)
    }
    
    // 'value' attribute on TextCell (id=CalcOrder_Cell) at RICededPremiums_AllLV.pcf: line 40, column 42
    function valueRoot_20 () : java.lang.Object {
      return cpTrx
    }
    
    // 'value' attribute on TextCell (id=Agreement_Cell) at RICededPremiums_AllLV.pcf: line 45, column 52
    function valueRoot_25 () : java.lang.Object {
      return cpTrx.Agreement
    }
    
    // 'value' attribute on TextCell (id=Building_Cell) at RICededPremiums_AllLV.pcf: line 58, column 60
    function valueRoot_33 () : java.lang.Object {
      return cpTrx.RICededPremium.Cost
    }
    
    // 'value' attribute on TextCell (id=CalcDate_Cell) at RICededPremiums_AllLV.pcf: line 33, column 94
    function value_17 () : java.lang.String {
      return gw.api.util.StringUtil.formatDate(cpTrx.CalcTimestamp, "E H:m")
    }
    
    // 'value' attribute on TextCell (id=CalcOrder_Cell) at RICededPremiums_AllLV.pcf: line 40, column 42
    function value_19 () : java.lang.Integer {
      return cpTrx.CalculationOrder
    }
    
    // 'value' attribute on TextCell (id=Agreement_Cell) at RICededPremiums_AllLV.pcf: line 45, column 52
    function value_24 () : java.lang.String {
      return cpTrx.Agreement.AgreementNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=AgreementType_Cell) at RICededPremiums_AllLV.pcf: line 52, column 28
    function value_29 () : typekey.RIAgreement {
      return cpTrx.Agreement.Subtype
    }
    
    // 'value' attribute on TextCell (id=Building_Cell) at RICededPremiums_AllLV.pcf: line 58, column 60
    function value_32 () : java.lang.String {
      return cpTrx.RICededPremium.Cost.CoverableName
    }
    
    // 'value' attribute on TextCell (id=Cost_Cell) at RICededPremiums_AllLV.pcf: line 65, column 51
    function value_35 () : gw.pl.persistence.core.Key {
      return cpTrx.RICededPremium.Cost.FixedId
    }
    
    // 'value' attribute on TextCell (id=Slice_Cell) at RICededPremiums_AllLV.pcf: line 71, column 219
    function value_38 () : java.lang.String {
      return gw.api.util.StringUtil.formatDate(cpTrx.RICededPremium.EffectiveDate, "M/d/yy") + "-" + gw.api.util.StringUtil.formatDate(cpTrx.RICededPremium.ExpirationDate, "M/d/yy")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CededRiskAmount_Cell) at RICededPremiums_AllLV.pcf: line 75, column 42
    function value_40 () : gw.pl.currency.MonetaryAmount {
      return cpTrx.CededRiskAmount
    }
    
    // 'value' attribute on MonetaryAmountCell (id=BasisGNP_Cell) at RICededPremiums_AllLV.pcf: line 79, column 35
    function value_43 () : gw.pl.currency.MonetaryAmount {
      return cpTrx.BasisGNP
    }
    
    // 'value' attribute on TextCell (id=CedingRate_Cell) at RICededPremiums_AllLV.pcf: line 84, column 45
    function value_46 () : java.math.BigDecimal {
      return cpTrx.CedingRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CededPremium_Cell) at RICededPremiums_AllLV.pcf: line 88, column 39
    function value_49 () : gw.pl.currency.MonetaryAmount {
      return cpTrx.CededPremium
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CededPremiumMarkup_Cell) at RICededPremiums_AllLV.pcf: line 92, column 45
    function value_52 () : gw.pl.currency.MonetaryAmount {
      return cpTrx.CededPremiumMarkup
    }
    
    // 'value' attribute on TextCell (id=CommPercentage_Cell) at RICededPremiums_AllLV.pcf: line 97, column 45
    function value_55 () : java.math.BigDecimal {
      return cpTrx.CommissionRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Comm_Cell) at RICededPremiums_AllLV.pcf: line 101, column 37
    function value_58 () : gw.pl.currency.MonetaryAmount {
      return cpTrx.Commission
    }
    
    property get cpTrx () : entity.RICededPremiumTransaction {
      return getIteratedValue(1) as entity.RICededPremiumTransaction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/RICededPremiums_AllLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RICededPremiums_AllLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on TextCell (id=CalcDate_Cell) at RICededPremiums_AllLV.pcf: line 33, column 94
    function sortValue_0 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.CalcTimestamp
    }
    
    // 'value' attribute on TextCell (id=CalcOrder_Cell) at RICededPremiums_AllLV.pcf: line 40, column 42
    function sortValue_1 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.CalculationOrder
    }
    
    // 'value' attribute on TextCell (id=CedingRate_Cell) at RICededPremiums_AllLV.pcf: line 84, column 45
    function sortValue_10 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.CedingRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CededPremium_Cell) at RICededPremiums_AllLV.pcf: line 88, column 39
    function sortValue_11 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.CededPremium
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CededPremiumMarkup_Cell) at RICededPremiums_AllLV.pcf: line 92, column 45
    function sortValue_12 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.CededPremiumMarkup
    }
    
    // 'value' attribute on TextCell (id=CommPercentage_Cell) at RICededPremiums_AllLV.pcf: line 97, column 45
    function sortValue_13 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.CommissionRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Comm_Cell) at RICededPremiums_AllLV.pcf: line 101, column 37
    function sortValue_14 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.Commission
    }
    
    // 'value' attribute on TextCell (id=Agreement_Cell) at RICededPremiums_AllLV.pcf: line 45, column 52
    function sortValue_2 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.Agreement.AgreementNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=AgreementType_Cell) at RICededPremiums_AllLV.pcf: line 52, column 28
    function sortValue_3 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.Agreement.Subtype
    }
    
    // 'value' attribute on TextCell (id=Building_Cell) at RICededPremiums_AllLV.pcf: line 58, column 60
    function sortValue_4 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.RICededPremium.Cost.CoverableName
    }
    
    // 'value' attribute on TextCell (id=Cost_Cell) at RICededPremiums_AllLV.pcf: line 65, column 51
    function sortValue_5 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.RICededPremium.Cost.FixedId
    }
    
    // 'sortBy' attribute on TextCell (id=Slice_Cell) at RICededPremiums_AllLV.pcf: line 71, column 219
    function sortValue_6 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.RICededPremium.EffectiveDate
    }
    
    // 'sortBy' attribute on TextCell (id=Slice_Cell) at RICededPremiums_AllLV.pcf: line 71, column 219
    function sortValue_7 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return  cpTrx.RICededPremium.ExpirationDate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CededRiskAmount_Cell) at RICededPremiums_AllLV.pcf: line 75, column 42
    function sortValue_8 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.CededRiskAmount
    }
    
    // 'value' attribute on MonetaryAmountCell (id=BasisGNP_Cell) at RICededPremiums_AllLV.pcf: line 79, column 35
    function sortValue_9 (cpTrx :  entity.RICededPremiumTransaction) : java.lang.Object {
      return cpTrx.BasisGNP
    }
    
    // 'value' attribute on RowIterator at RICededPremiums_AllLV.pcf: line 18, column 54
    function value_61 () : entity.RICededPremiumTransaction[] {
      return cededPremiumTransactions
    }
    
    property get cededPremiumTransactions () : RICededPremiumTransaction[] {
      return getRequireValue("cededPremiumTransactions", 0) as RICededPremiumTransaction[]
    }
    
    property set cededPremiumTransactions ($arg :  RICededPremiumTransaction[]) {
      setRequireValue("cededPremiumTransactions", 0, $arg)
    }
    
    property get ririsk () : RIRisk {
      return getRequireValue("ririsk", 0) as RIRisk
    }
    
    property set ririsk ($arg :  RIRisk) {
      setRequireValue("ririsk", 0, $arg)
    }
    
    
  }
  
  
}