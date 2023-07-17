package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/parts/signs/IMPartTxDetailsPanelSet.IMSignPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IMPartTxDetailsPanelSet_IMSignPartExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/parts/signs/IMPartTxDetailsPanelSet.IMSignPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IMPartTxDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at IMPartTxDetailsPanelSet.IMSignPart.pcf: line 15, column 57
    function initialValue_0 () : java.util.Set<entity.IMTransaction> {
      return policyPeriod.IMTransactions.where(\ tx -> tx.Cost typeis IMSignCovCost).toSet()
    }
    
    // 'initialValue' attribute on Variable at IMPartTxDetailsPanelSet.IMSignPart.pcf: line 20, column 97
    function initialValue_1 () : java.util.Map<java.lang.Boolean, java.util.Set<entity.IMTransaction>> {
      return policyPeriod.IMTransactions.toSet().bySignPartPremium()
    }
    
    // 'initialValue' attribute on Variable at IMPartTxDetailsPanelSet.IMSignPart.pcf: line 25, column 93
    function initialValue_2 () : java.util.Map<entity.IMSign, java.util.Set<entity.IMTransaction>> {
      return coverageTransactionMap.get(true).byFixedSign()
    }
    
    // 'sortBy' attribute on IteratorSort at IMPartTxDetailsPanelSet.IMSignPart.pcf: line 38, column 28
    function sortBy_3 (sign :  entity.IMSign) : java.lang.Object {
      return sign.SignNumber
    }
    
    // 'value' attribute on PanelIterator (id=signiterator) at IMPartTxDetailsPanelSet.IMSignPart.pcf: line 35, column 39
    function value_43 () : entity.IMSign[] {
      return signTransactionMap.Keys.where(\ s -> s != null).toTypedArray()
    }
    
    // 'visible' attribute on PanelRef at IMPartTxDetailsPanelSet.IMSignPart.pcf: line 27, column 39
    function visible_44 () : java.lang.Boolean {
      return imSignTxs.HasElements
    }
    
    property get coverageTransactionMap () : java.util.Map<java.lang.Boolean, java.util.Set<entity.IMTransaction>> {
      return getVariableValue("coverageTransactionMap", 0) as java.util.Map<java.lang.Boolean, java.util.Set<entity.IMTransaction>>
    }
    
    property set coverageTransactionMap ($arg :  java.util.Map<java.lang.Boolean, java.util.Set<entity.IMTransaction>>) {
      setVariableValue("coverageTransactionMap", 0, $arg)
    }
    
    property get imSignTxs () : java.util.Set<entity.IMTransaction> {
      return getVariableValue("imSignTxs", 0) as java.util.Set<entity.IMTransaction>
    }
    
    property set imSignTxs ($arg :  java.util.Set<entity.IMTransaction>) {
      setVariableValue("imSignTxs", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get signTransactionMap () : java.util.Map<entity.IMSign, java.util.Set<entity.IMTransaction>> {
      return getVariableValue("signTransactionMap", 0) as java.util.Map<entity.IMSign, java.util.Set<entity.IMTransaction>>
    }
    
    property set signTransactionMap ($arg :  java.util.Map<entity.IMSign, java.util.Set<entity.IMTransaction>>) {
      setVariableValue("signTransactionMap", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/parts/signs/IMPartTxDetailsPanelSet.IMSignPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RateTxIMSignCoveragesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at IMPartTxDetailsPanelSet.IMSignPart.pcf: line 79, column 59
    function valueRoot_21 () : java.lang.Object {
      return coverage.Pattern
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TermAmount_Cell) at IMPartTxDetailsPanelSet.IMSignPart.pcf: line 87, column 35
    function valueRoot_24 () : java.lang.Object {
      return tx.Cost
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at IMPartTxDetailsPanelSet.IMSignPart.pcf: line 95, column 35
    function valueRoot_28 () : java.lang.Object {
      return tx
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at IMPartTxDetailsPanelSet.IMSignPart.pcf: line 79, column 59
    function value_20 () : java.lang.String {
      return coverage.Pattern.DisplayName
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TermAmount_Cell) at IMPartTxDetailsPanelSet.IMSignPart.pcf: line 87, column 35
    function value_23 () : gw.pl.currency.MonetaryAmount {
      return tx.Cost.ActualTermAmountBilling
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at IMPartTxDetailsPanelSet.IMSignPart.pcf: line 95, column 35
    function value_27 () : java.util.Date {
      return tx.EffDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at IMPartTxDetailsPanelSet.IMSignPart.pcf: line 103, column 35
    function value_31 () : java.util.Date {
      return tx.ExpDate
    }
    
    // 'value' attribute on TextCell (id=Proration_Cell) at IMPartTxDetailsPanelSet.IMSignPart.pcf: line 111, column 35
    function value_35 () : java.lang.String {
      return gw.api.util.StringUtil.formatNumber(tx.Proration, "#0.0000")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at IMPartTxDetailsPanelSet.IMSignPart.pcf: line 120, column 35
    function value_38 () : gw.pl.currency.MonetaryAmount {
      return tx.AmountBilling
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=TermAmount_Cell) at IMPartTxDetailsPanelSet.IMSignPart.pcf: line 87, column 35
    function visible_25 () : java.lang.Boolean {
      return proRated
    }
    
    property get tx () : entity.IMTransaction {
      return getIteratedValue(3) as entity.IMTransaction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/parts/signs/IMPartTxDetailsPanelSet.IMSignPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends IMPartTxDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at IMPartTxDetailsPanelSet.IMSignPart.pcf: line 42, column 63
    function initialValue_4 () : java.util.Set<entity.IMTransaction> {
      return signTransactionMap.get(sign)
    }
    
    // PanelIterator (id=signiterator) at IMPartTxDetailsPanelSet.IMSignPart.pcf: line 35, column 39
    function initializeVariables_42 () : void {
        txs = signTransactionMap.get(sign);

    }
    
    // 'label' attribute on Verbatim (id=signdisplayname) at IMPartTxDetailsPanelSet.IMSignPart.pcf: line 46, column 41
    function label_5 () : java.lang.String {
      return sign.DisplayName
    }
    
    property get sign () : entity.IMSign {
      return getIteratedValue(1) as entity.IMSign
    }
    
    property get txs () : java.util.Set<entity.IMTransaction> {
      return getVariableValue("txs", 1) as java.util.Set<entity.IMTransaction>
    }
    
    property set txs ($arg :  java.util.Set<entity.IMTransaction>) {
      setVariableValue("txs", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/parts/signs/IMPartTxDetailsPanelSet.IMSignPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateTxIMSignCoveragesLVExpressionsImpl extends PanelIteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at IMPartTxDetailsPanelSet.IMSignPart.pcf: line 54, column 33
    function initialValue_6 () : boolean {
      return txs.AnyProrated
    }
    
    // 'initialValue' attribute on Variable at IMPartTxDetailsPanelSet.IMSignPart.pcf: line 58, column 48
    function initialValue_7 () : productmodel.IMSignCov {
      return sign.IMSignCov
    }
    
    // 'sortBy' attribute on IteratorSort at IMPartTxDetailsPanelSet.IMSignPart.pcf: line 67, column 34
    function sortBy_8 (tx :  entity.IMTransaction) : java.lang.Object {
      return (tx.IMCost as IMSignCovCost).IMSignCov.IMSign.SignNumber
    }
    
    // 'sortBy' attribute on IteratorSort at IMPartTxDetailsPanelSet.IMSignPart.pcf: line 70, column 34
    function sortBy_9 (tx :  entity.IMTransaction) : java.lang.Object {
      return (tx.IMCost as IMSignCovCost).IMSignCov.Pattern.Priority
    }
    
    // '$$sumValue' attribute on RowIterator at IMPartTxDetailsPanelSet.IMSignPart.pcf: line 120, column 35
    function sumValueRoot_19 (tx :  entity.IMTransaction) : java.lang.Object {
      return tx
    }
    
    // 'footerSumValue' attribute on RowIterator at IMPartTxDetailsPanelSet.IMSignPart.pcf: line 120, column 35
    function sumValue_18 (tx :  entity.IMTransaction) : java.lang.Object {
      return tx.AmountBilling
    }
    
    // 'value' attribute on RowIterator at IMPartTxDetailsPanelSet.IMSignPart.pcf: line 64, column 52
    function value_41 () : entity.IMTransaction[] {
      return txs.toTypedArray()
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=TermAmount_Cell) at IMPartTxDetailsPanelSet.IMSignPart.pcf: line 87, column 35
    function visible_10 () : java.lang.Boolean {
      return proRated
    }
    
    property get coverage () : productmodel.IMSignCov {
      return getVariableValue("coverage", 2) as productmodel.IMSignCov
    }
    
    property set coverage ($arg :  productmodel.IMSignCov) {
      setVariableValue("coverage", 2, $arg)
    }
    
    property get proRated () : boolean {
      return getVariableValue("proRated", 2) as java.lang.Boolean
    }
    
    property set proRated ($arg :  boolean) {
      setVariableValue("proRated", 2, $arg)
    }
    
    
  }
  
  
}