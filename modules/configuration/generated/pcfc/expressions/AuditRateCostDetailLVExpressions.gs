package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/audit/AuditRateCostDetailLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AuditRateCostDetailLVExpressions {
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditRateCostDetailLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AuditRateCostDetailLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at AuditRateCostDetailLV.pcf: line 20, column 50
    function initialValue_0 () : java.util.Set<entity.WCCost> {
      return ratingPeriod.Jurisdiction.WCLine.BasedOn.Costs.cast( WCCost ).where( \ w -> w.JurisdictionState==ratingPeriod.Jurisdiction.State).toSet().byRatingPeriod( ratingPeriod )
    }
    
    // 'initialValue' attribute on Variable at AuditRateCostDetailLV.pcf: line 25, column 56
    function initialValue_1 () : java.util.Set<entity.WCCovEmpCost> {
      return periodCosts.whereTypeIs(WCCovEmpCost).toSet()
    }
    
    // 'initialValue' attribute on Variable at AuditRateCostDetailLV.pcf: line 30, column 62
    function initialValue_2 () : java.util.Set<entity.WCJurisdictionCost> {
      return periodCosts.whereTypeIs(WCJurisdictionCost).toSet()
    }
    
    // 'initialValue' attribute on Variable at AuditRateCostDetailLV.pcf: line 35, column 62
    function initialValue_3 () : java.util.Set<entity.WCJurisdictionCost> {
      return basedOnCosts.whereTypeIs(WCJurisdictionCost).toSet()
    }
    
    // 'initialValue' attribute on Variable at AuditRateCostDetailLV.pcf: line 39, column 32
    function initialValue_4 () : typekey.Currency {
      return ratingPeriod.Jurisdiction.Branch.PreferredSettlementCurrency
    }
    
    // 'initialValue' attribute on Variable at AuditRateCostDetailLV.pcf: line 44, column 60
    function initialValue_5 () : gw.pcf.job.audit.AuditRateCostDetailLVHelper {
      return new gw.pcf.job.audit.AuditRateCostDetailLVHelper(ratingPeriod) 
    }
    
    // 'sortBy' attribute on IteratorSort at AuditRateCostDetailLV.pcf: line 91, column 24
    function sortBy_21 (wcEmpCost :  entity.WCCovEmpCost) : java.lang.Object {
      return wcEmpCost.CalcOrder
    }
    
    // 'sortBy' attribute on IteratorSort at AuditRateCostDetailLV.pcf: line 145, column 24
    function sortBy_51 (aggCost :  entity.WCJurisdictionCost) : java.lang.Object {
      return aggCost.CalcOrder
    }
    
    // 'value' attribute on TextCell (id=EstBasis_Cell) at AuditRateCostDetailLV.pcf: line 59, column 40
    function valueRoot_9 () : java.lang.Object {
      return helper
    }
    
    // 'value' attribute on MonetaryAmountCell (id=DiffStdPremium_Cell) at AuditRateCostDetailLV.pcf: line 320, column 40
    function value_100 () : gw.pl.currency.MonetaryAmount {
      return periodCosts.byCalcOrder( 0, 400 ).AmountSum(currency) - basedOnCosts.byCalcOrder( 0, 400).AmountSum(currency)
    }
    
    // 'value' attribute on TextCell (id=Basis_Cell) at AuditRateCostDetailLV.pcf: line 62, column 149
    function value_12 () : java.lang.String {
      return isPremiumReport ? DisplayKey.get("Web.AuditWizard.Payroll") : DisplayKey.get("Web.AuditWizard.AuditedPayroll")
    }
    
    // 'value' attribute on TextCell (id=EstPremium_Cell) at AuditRateCostDetailLV.pcf: line 69, column 40
    function value_14 () : java.lang.String {
      return helper.PremiumLabel
    }
    
    // 'value' attribute on TextCell (id=Amount_Cell) at AuditRateCostDetailLV.pcf: line 72, column 192
    function value_18 () : java.lang.String {
      return isPremiumReport ? DisplayKey.get("Web.AuditWizard.Premiums.Details.Premium.Premium") : DisplayKey.get("Web.AuditWizard.Premiums.Details.Premium.Audited")
    }
    
    // 'value' attribute on RowIterator at AuditRateCostDetailLV.pcf: line 83, column 41
    function value_50 () : entity.WCCovEmpCost[] {
      return euCosts.toTypedArray()
    }
    
    // 'value' attribute on RowIterator (id=lt100) at AuditRateCostDetailLV.pcf: line 142, column 47
    function value_54 () : entity.WCJurisdictionCost[] {
      return aggCosts.byCalcOrder( 0, 100 ).toTypedArray()
    }
    
    // 'value' attribute on MonetaryAmountCell (id=BasedOnManualPremium_Cell) at AuditRateCostDetailLV.pcf: line 169, column 40
    function value_56 () : gw.pl.currency.MonetaryAmount {
      return basedOnCosts.byCalcOrder( 0, 100).AmountSum(currency)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=AmountSubtotal_Cell) at AuditRateCostDetailLV.pcf: line 174, column 72
    function value_59 () : gw.pl.currency.MonetaryAmount {
      return periodCosts.byCalcOrder( 0, 100 ).AmountSum(currency)
    }
    
    // 'value' attribute on TextCell (id=LocationNum_Cell) at AuditRateCostDetailLV.pcf: line 49, column 81
    function value_6 () : java.lang.String {
      return DisplayKey.get("Web.SubmissionWizard.Quote.WC.Loc") 
    }
    
    // 'value' attribute on MonetaryAmountCell (id=DiffManualPremium_Cell) at AuditRateCostDetailLV.pcf: line 180, column 40
    function value_61 () : gw.pl.currency.MonetaryAmount {
      return periodCosts.byCalcOrder( 0, 100 ).AmountSum(currency) - basedOnCosts.byCalcOrder( 0, 100).AmountSum(currency)
    }
    
    // 'value' attribute on RowIterator (id=f100t200) at AuditRateCostDetailLV.pcf: line 188, column 47
    function value_67 () : entity.WCJurisdictionCost[] {
      return aggCosts.byCalcOrder( 101, 200 ).toTypedArray()
    }
    
    // 'value' attribute on MonetaryAmountCell (id=BasedOnSubjPremium_Cell) at AuditRateCostDetailLV.pcf: line 215, column 40
    function value_69 () : gw.pl.currency.MonetaryAmount {
      return basedOnCosts.byCalcOrder( 0, 200).AmountSum(currency)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=AmountSubtotal100_Cell) at AuditRateCostDetailLV.pcf: line 220, column 72
    function value_72 () : gw.pl.currency.MonetaryAmount {
      return periodCosts.byCalcOrder( 0, 200 ).AmountSum(currency)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=DiffSubjPremium_Cell) at AuditRateCostDetailLV.pcf: line 226, column 40
    function value_74 () : gw.pl.currency.MonetaryAmount {
      return periodCosts.byCalcOrder( 0, 200 ).AmountSum(currency) - basedOnCosts.byCalcOrder( 0, 200).AmountSum(currency)
    }
    
    // 'value' attribute on TextCell (id=EstBasis_Cell) at AuditRateCostDetailLV.pcf: line 59, column 40
    function value_8 () : java.lang.String {
      return helper.PayrollLabel
    }
    
    // 'value' attribute on RowIterator (id=f200t300) at AuditRateCostDetailLV.pcf: line 234, column 47
    function value_80 () : entity.WCJurisdictionCost[] {
      return aggCosts.byCalcOrder( 201, 300 ).toTypedArray()
    }
    
    // 'value' attribute on MonetaryAmountCell (id=BasedOnModPremium_Cell) at AuditRateCostDetailLV.pcf: line 261, column 40
    function value_82 () : gw.pl.currency.MonetaryAmount {
      return basedOnCosts.byCalcOrder( 0, 300).AmountSum(currency)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=AmountSubtotal200_Cell) at AuditRateCostDetailLV.pcf: line 266, column 72
    function value_85 () : gw.pl.currency.MonetaryAmount {
      return periodCosts.byCalcOrder( 0, 300 ).AmountSum(currency)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=DiffModPremium_Cell) at AuditRateCostDetailLV.pcf: line 272, column 40
    function value_87 () : gw.pl.currency.MonetaryAmount {
      return periodCosts.byCalcOrder( 0, 300 ).AmountSum(currency) - basedOnCosts.byCalcOrder( 0, 300).AmountSum(currency)
    }
    
    // 'value' attribute on RowIterator (id=f300t400) at AuditRateCostDetailLV.pcf: line 280, column 47
    function value_93 () : entity.WCJurisdictionCost[] {
      return aggCosts.byCalcOrder( 301, 400 ).toTypedArray()
    }
    
    // 'value' attribute on MonetaryAmountCell (id=BasedOnStdPremium_Cell) at AuditRateCostDetailLV.pcf: line 308, column 40
    function value_95 () : gw.pl.currency.MonetaryAmount {
      return basedOnCosts.byCalcOrder( 0, 400).AmountSum(currency)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=AmountSubtotal300_Cell) at AuditRateCostDetailLV.pcf: line 314, column 72
    function value_98 () : gw.pl.currency.MonetaryAmount {
      return periodCosts.byCalcOrder( 0, 400 ).AmountSum(currency)
    }
    
    // 'visible' attribute on TextCell (id=EstBasis_Cell) at AuditRateCostDetailLV.pcf: line 59, column 40
    function visible_10 () : java.lang.Boolean {
      return not isPremiumReport
    }
    
    property get aggCosts () : java.util.Set<entity.WCJurisdictionCost> {
      return getVariableValue("aggCosts", 0) as java.util.Set<entity.WCJurisdictionCost>
    }
    
    property set aggCosts ($arg :  java.util.Set<entity.WCJurisdictionCost>) {
      setVariableValue("aggCosts", 0, $arg)
    }
    
    property get basedOnAggCosts () : java.util.Set<entity.WCJurisdictionCost> {
      return getVariableValue("basedOnAggCosts", 0) as java.util.Set<entity.WCJurisdictionCost>
    }
    
    property set basedOnAggCosts ($arg :  java.util.Set<entity.WCJurisdictionCost>) {
      setVariableValue("basedOnAggCosts", 0, $arg)
    }
    
    property get basedOnCosts () : java.util.Set<entity.WCCost> {
      return getVariableValue("basedOnCosts", 0) as java.util.Set<entity.WCCost>
    }
    
    property set basedOnCosts ($arg :  java.util.Set<entity.WCCost>) {
      setVariableValue("basedOnCosts", 0, $arg)
    }
    
    property get currency () : typekey.Currency {
      return getVariableValue("currency", 0) as typekey.Currency
    }
    
    property set currency ($arg :  typekey.Currency) {
      setVariableValue("currency", 0, $arg)
    }
    
    property get euCosts () : java.util.Set<entity.WCCovEmpCost> {
      return getVariableValue("euCosts", 0) as java.util.Set<entity.WCCovEmpCost>
    }
    
    property set euCosts ($arg :  java.util.Set<entity.WCCovEmpCost>) {
      setVariableValue("euCosts", 0, $arg)
    }
    
    property get helper () : gw.pcf.job.audit.AuditRateCostDetailLVHelper {
      return getVariableValue("helper", 0) as gw.pcf.job.audit.AuditRateCostDetailLVHelper
    }
    
    property set helper ($arg :  gw.pcf.job.audit.AuditRateCostDetailLVHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get isPremiumReport () : boolean {
      return getRequireValue("isPremiumReport", 0) as java.lang.Boolean
    }
    
    property set isPremiumReport ($arg :  boolean) {
      setRequireValue("isPremiumReport", 0, $arg)
    }
    
    property get periodCosts () : java.util.Set<WCCost> {
      return getRequireValue("periodCosts", 0) as java.util.Set<WCCost>
    }
    
    property set periodCosts ($arg :  java.util.Set<WCCost>) {
      setRequireValue("periodCosts", 0, $arg)
    }
    
    property get ratingPeriod () : gw.lob.wc.rating.WCRatingPeriod {
      return getRequireValue("ratingPeriod", 0) as gw.lob.wc.rating.WCRatingPeriod
    }
    
    property set ratingPeriod ($arg :  gw.lob.wc.rating.WCRatingPeriod) {
      setRequireValue("ratingPeriod", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditRateCostDetailLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends AuditRateCostDetailLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef at AuditRateCostDetailLV.pcf: line 147, column 153
    function def_onEnter_52 (def :  pcf.AuditRateCostDetailAggRowSet) : void {
      def.onEnter(isPremiumReport, aggCost, basedOnAggCosts.toList().firstWhere( \ b -> b.CalcOrder == aggCost.CalcOrder))
    }
    
    // 'def' attribute on RowSetRef at AuditRateCostDetailLV.pcf: line 147, column 153
    function def_refreshVariables_53 (def :  pcf.AuditRateCostDetailAggRowSet) : void {
      def.refreshVariables(isPremiumReport, aggCost, basedOnAggCosts.toList().firstWhere( \ b -> b.CalcOrder == aggCost.CalcOrder))
    }
    
    property get aggCost () : entity.WCJurisdictionCost {
      return getIteratedValue(1) as entity.WCJurisdictionCost
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditRateCostDetailLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends AuditRateCostDetailLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef at AuditRateCostDetailLV.pcf: line 193, column 153
    function def_onEnter_65 (def :  pcf.AuditRateCostDetailAggRowSet) : void {
      def.onEnter(isPremiumReport, aggCost, basedOnAggCosts.toList().firstWhere( \ b -> b.CalcOrder == aggCost.CalcOrder))
    }
    
    // 'def' attribute on RowSetRef at AuditRateCostDetailLV.pcf: line 193, column 153
    function def_refreshVariables_66 (def :  pcf.AuditRateCostDetailAggRowSet) : void {
      def.refreshVariables(isPremiumReport, aggCost, basedOnAggCosts.toList().firstWhere( \ b -> b.CalcOrder == aggCost.CalcOrder))
    }
    
    property get aggCost () : entity.WCJurisdictionCost {
      return getIteratedValue(1) as entity.WCJurisdictionCost
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditRateCostDetailLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends AuditRateCostDetailLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef at AuditRateCostDetailLV.pcf: line 239, column 153
    function def_onEnter_78 (def :  pcf.AuditRateCostDetailAggRowSet) : void {
      def.onEnter(isPremiumReport, aggCost, basedOnAggCosts.toList().firstWhere( \ b -> b.CalcOrder == aggCost.CalcOrder))
    }
    
    // 'def' attribute on RowSetRef at AuditRateCostDetailLV.pcf: line 239, column 153
    function def_refreshVariables_79 (def :  pcf.AuditRateCostDetailAggRowSet) : void {
      def.refreshVariables(isPremiumReport, aggCost, basedOnAggCosts.toList().firstWhere( \ b -> b.CalcOrder == aggCost.CalcOrder))
    }
    
    property get aggCost () : entity.WCJurisdictionCost {
      return getIteratedValue(1) as entity.WCJurisdictionCost
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditRateCostDetailLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends AuditRateCostDetailLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef at AuditRateCostDetailLV.pcf: line 285, column 153
    function def_onEnter_91 (def :  pcf.AuditRateCostDetailAggRowSet) : void {
      def.onEnter(isPremiumReport, aggCost, basedOnAggCosts.toList().firstWhere( \ b -> b.CalcOrder == aggCost.CalcOrder))
    }
    
    // 'def' attribute on RowSetRef at AuditRateCostDetailLV.pcf: line 285, column 153
    function def_refreshVariables_92 (def :  pcf.AuditRateCostDetailAggRowSet) : void {
      def.refreshVariables(isPremiumReport, aggCost, basedOnAggCosts.toList().firstWhere( \ b -> b.CalcOrder == aggCost.CalcOrder))
    }
    
    property get aggCost () : entity.WCJurisdictionCost {
      return getIteratedValue(1) as entity.WCJurisdictionCost
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditRateCostDetailLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AuditRateCostDetailLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at AuditRateCostDetailLV.pcf: line 88, column 35
    function initialValue_22 () : WCCoveredEmployee {
      return wcEmpCost.WCCoveredEmployee
    }
    
    // RowIterator at AuditRateCostDetailLV.pcf: line 83, column 41
    function initializeVariables_49 () : void {
        wcCovEmp = wcEmpCost.WCCoveredEmployee;

    }
    
    // 'value' attribute on TextCell (id=LocationNum_Cell) at AuditRateCostDetailLV.pcf: line 98, column 42
    function valueRoot_24 () : java.lang.Object {
      return wcEmpCost
    }
    
    // 'value' attribute on TextCell (id=LocationNum_Cell) at AuditRateCostDetailLV.pcf: line 98, column 42
    function value_23 () : java.lang.Integer {
      return wcEmpCost.LocationNum
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at AuditRateCostDetailLV.pcf: line 101, column 40
    function value_26 () : java.lang.String {
      return wcEmpCost.ClassCode
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at AuditRateCostDetailLV.pcf: line 104, column 42
    function value_29 () : java.lang.String {
      return wcEmpCost.Description
    }
    
    // 'value' attribute on TextCell (id=EstBasis_Cell) at AuditRateCostDetailLV.pcf: line 109, column 42
    function value_32 () : java.math.BigDecimal {
      return helper.payrollAmount(wcCovEmp)
    }
    
    // 'value' attribute on TextCell (id=Basis_Cell) at AuditRateCostDetailLV.pcf: line 113, column 84
    function value_35 () : java.lang.String {
      return wcEmpCost.Basis == 0 ? "" : wcEmpCost.Basis as String
    }
    
    // 'value' attribute on TextCell (id=ModifiedTermRate_Cell) at AuditRateCostDetailLV.pcf: line 117, column 100
    function value_37 () : java.lang.String {
      return wcEmpCost.ActualAdjRate == 0 ? "" : wcEmpCost.ActualAdjRate as String
    }
    
    // 'value' attribute on MonetaryAmountCell (id=EstPremium_Cell) at AuditRateCostDetailLV.pcf: line 122, column 42
    function value_39 () : gw.pl.currency.MonetaryAmount {
      return helper.premiumAmount(wcCovEmp)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at AuditRateCostDetailLV.pcf: line 127, column 50
    function value_42 () : gw.pl.currency.MonetaryAmount {
      return wcEmpCost.ActualAmountBilling
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Change_Cell) at AuditRateCostDetailLV.pcf: line 133, column 42
    function value_45 () : gw.pl.currency.MonetaryAmount {
      return wcEmpCost.ActualAmountBilling - helper.premiumAmount(wcCovEmp)
    }
    
    // 'visible' attribute on TextCell (id=EstBasis_Cell) at AuditRateCostDetailLV.pcf: line 109, column 42
    function visible_33 () : java.lang.Boolean {
      return not isPremiumReport
    }
    
    // 'visible' attribute on Row (id=euCostRow) at AuditRateCostDetailLV.pcf: line 94, column 60
    function visible_48 () : java.lang.Boolean {
      return not wcEmpCost.ActualAmountBilling.IsZero
    }
    
    property get wcCovEmp () : WCCoveredEmployee {
      return getVariableValue("wcCovEmp", 1) as WCCoveredEmployee
    }
    
    property set wcCovEmp ($arg :  WCCoveredEmployee) {
      setVariableValue("wcCovEmp", 1, $arg)
    }
    
    property get wcEmpCost () : entity.WCCovEmpCost {
      return getIteratedValue(1) as entity.WCCovEmpCost
    }
    
    
  }
  
  
}