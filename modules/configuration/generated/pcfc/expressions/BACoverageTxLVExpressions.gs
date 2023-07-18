package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policy/BACoverageTxLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BACoverageTxLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BACoverageTxLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BACoverageTxLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at BACoverageTxLV.pcf: line 19, column 23
    function initialValue_0 () : boolean {
      return txs.AnyProrated
    }
    
    // 'label' attribute on TextCell (id=CovTerm_Cell) at BACoverageTxLV.pcf: line 54, column 26
    function label_4 () : java.lang.Object {
      return DisplayKey.get("Web.PolicyLine.Coverage.CovTermValue", "")
    }
    
    // 'sortBy' attribute on IteratorSort at BACoverageTxLV.pcf: line 32, column 24
    function sortBy_1 (tx :  entity.BATransaction) : java.lang.Object {
      return tx.BACost.Coverage.Pattern.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at BACoverageTxLV.pcf: line 35, column 24
    function sortBy_2 (tx :  entity.BATransaction) : java.lang.Object {
      return tx.EffDate
    }
    
    // 'sortBy' attribute on IteratorSort at BACoverageTxLV.pcf: line 38, column 24
    function sortBy_3 (tx :  entity.BATransaction) : java.lang.Object {
      return tx.BACost.ID
    }
    
    // '$$sumValue' attribute on RowIterator at BACoverageTxLV.pcf: line 96, column 25
    function sumValueRoot_14 (tx :  entity.BATransaction) : java.lang.Object {
      return tx
    }
    
    // 'footerSumValue' attribute on RowIterator at BACoverageTxLV.pcf: line 96, column 25
    function sumValue_13 (tx :  entity.BATransaction) : java.lang.Object {
      return tx.AmountBilling
    }
    
    // 'value' attribute on RowIterator at BACoverageTxLV.pcf: line 25, column 42
    function value_64 () : entity.BATransaction[] {
      return txs?.toTypedArray()
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=TermAmount_Cell) at BACoverageTxLV.pcf: line 63, column 25
    function visible_5 () : java.lang.Boolean {
      return prorated
    }
    
    property get addStateToCoverageName () : boolean {
      return getRequireValue("addStateToCoverageName", 0) as java.lang.Boolean
    }
    
    property set addStateToCoverageName ($arg :  boolean) {
      setRequireValue("addStateToCoverageName", 0, $arg)
    }
    
    property get prorated () : boolean {
      return getVariableValue("prorated", 0) as java.lang.Boolean
    }
    
    property set prorated ($arg :  boolean) {
      setVariableValue("prorated", 0, $arg)
    }
    
    property get txs () : java.util.List<entity.BATransaction> {
      return getRequireValue("txs", 0) as java.util.List<entity.BATransaction>
    }
    
    property set txs ($arg :  java.util.List<entity.BATransaction>) {
      setRequireValue("txs", 0, $arg)
    }
    
    property get empty() : String { return "" }
    function getCovDescription(coverage : Coverage, cost : BACost) : String {
      var covName : String
      if (addStateToCoverageName) {
        covName = coverage.Pattern.DisplayName + " - " + cost.State.Description
      } else {
        covName = coverage.Pattern.DisplayName
      }
      if (covName.contains("PIP") ) {
        return covName + " - " + (cost as BAStateCovVehiclePIPCost).BAStateCovPIPCostType.DisplayName
      } else if (cost typeis BALineCovNonownedCost) {
        return covName + " - " + cost.BANonOwnedLiabCovCostType.Description
      } else {
        return covName
      }
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BACoverageTxLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at BACoverageTxLV.pcf: line 116, column 26
    function valueRoot_43 () : java.lang.Object {
      return covTerm
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at BACoverageTxLV.pcf: line 116, column 26
    function value_42 () : java.lang.String {
      return covTerm.DisplayName
    }
    
    // 'value' attribute on TextCell (id=CovTermValue_Cell) at BACoverageTxLV.pcf: line 121, column 27
    function value_45 () : java.lang.String {
      return covTerm.DisplayValue
    }
    
    // 'value' attribute on TextCell (id=TermAmount_Cell) at BACoverageTxLV.pcf: line 125, column 33
    function value_48 () : java.lang.String {
      return empty
    }
    
    // 'visible' attribute on TextCell (id=TermAmount_Cell) at BACoverageTxLV.pcf: line 125, column 33
    function visible_49 () : java.lang.Boolean {
      return prorated
    }
    
    property get covTerm () : gw.api.domain.covterm.CovTerm {
      return getIteratedValue(2) as gw.api.domain.covterm.CovTerm
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BACoverageTxLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends BACoverageTxLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at BACoverageTxLV.pcf: line 29, column 31
    function initialValue_15 () : entity.BACost {
      return tx.BACost
    }
    
    // RowIterator at BACoverageTxLV.pcf: line 25, column 42
    function initializeVariables_63 () : void {
        theCost = tx.BACost;

    }
    
    // 'label' attribute on TextCell (id=CovTerm_Cell) at BACoverageTxLV.pcf: line 54, column 26
    function label_18 () : java.lang.Object {
      return DisplayKey.get("Web.PolicyLine.Coverage.CovTermValue", "")
    }
    
    // 'sortBy' attribute on IteratorSort at BACoverageTxLV.pcf: line 106, column 26
    function sortBy_40 (covTerm :  gw.api.domain.covterm.CovTerm) : java.lang.Object {
      return covTerm.Pattern.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at BACoverageTxLV.pcf: line 109, column 26
    function sortBy_41 (covTerm :  gw.api.domain.covterm.CovTerm) : java.lang.Object {
      return covTerm.Pattern.PublicID
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TermAmount_Cell) at BACoverageTxLV.pcf: line 63, column 25
    function valueRoot_23 () : java.lang.Object {
      return theCost
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at BACoverageTxLV.pcf: line 71, column 25
    function valueRoot_27 () : java.lang.Object {
      return tx
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at BACoverageTxLV.pcf: line 49, column 24
    function value_16 () : java.lang.String {
      return getCovDescription(theCost.Coverage, theCost)
    }
    
    // 'value' attribute on TextCell (id=CovTerm_Cell) at BACoverageTxLV.pcf: line 54, column 26
    function value_19 () : java.lang.String {
      return empty
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TermAmount_Cell) at BACoverageTxLV.pcf: line 63, column 25
    function value_22 () : gw.pl.currency.MonetaryAmount {
      return theCost.ActualTermAmountBilling
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at BACoverageTxLV.pcf: line 71, column 25
    function value_26 () : java.util.Date {
      return tx.EffDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at BACoverageTxLV.pcf: line 79, column 25
    function value_30 () : java.util.Date {
      return tx.ExpDate
    }
    
    // 'value' attribute on TextCell (id=Proration_Cell) at BACoverageTxLV.pcf: line 87, column 25
    function value_34 () : java.lang.String {
      return gw.api.util.StringUtil.formatNumber(tx.Proration, "#0.0000")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at BACoverageTxLV.pcf: line 96, column 25
    function value_37 () : gw.pl.currency.MonetaryAmount {
      return tx.AmountBilling
    }
    
    // 'value' attribute on RowIterator at BACoverageTxLV.pcf: line 103, column 53
    function value_62 () : gw.api.domain.covterm.CovTerm[] {
      return theCost.Coverage.CovTerms
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=TermAmount_Cell) at BACoverageTxLV.pcf: line 63, column 25
    function visible_24 () : java.lang.Boolean {
      return prorated
    }
    
    property get theCost () : entity.BACost {
      return getVariableValue("theCost", 1) as entity.BACost
    }
    
    property set theCost ($arg :  entity.BACost) {
      setVariableValue("theCost", 1, $arg)
    }
    
    property get tx () : entity.BATransaction {
      return getIteratedValue(1) as entity.BATransaction
    }
    
    
  }
  
  
}