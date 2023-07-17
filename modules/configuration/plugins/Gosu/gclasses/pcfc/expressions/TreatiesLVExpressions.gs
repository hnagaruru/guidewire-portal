package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/TreatiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TreatiesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/TreatiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TreatiesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextCell (id=Number_Cell) at TreatiesLV.pcf: line 40, column 46
    function actionAvailable_16 () : java.lang.Boolean {
      return not CurrentLocation.InEditMode
    }
    
    // 'action' attribute on TextCell (id=Number_Cell) at TreatiesLV.pcf: line 40, column 46
    function action_14 () : void {
      EditAgreementPage.push(agreement)
    }
    
    // 'action' attribute on TextCell (id=Number_Cell) at TreatiesLV.pcf: line 40, column 46
    function action_dest_15 () : pcf.api.Destination {
      return pcf.EditAgreementPage.createDestination(agreement)
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at TreatiesLV.pcf: line 40, column 46
    function valueRoot_18 () : java.lang.Object {
      return agreement
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at TreatiesLV.pcf: line 40, column 46
    function value_17 () : java.lang.String {
      return agreement.AgreementNumber
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at TreatiesLV.pcf: line 44, column 35
    function value_20 () : java.lang.String {
      return agreement.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at TreatiesLV.pcf: line 49, column 44
    function value_23 () : typekey.RIAgreement {
      return agreement.Subtype
    }
    
    // 'value' attribute on MonetaryAmountCell (id=AttachmentPoint_Cell) at TreatiesLV.pcf: line 53, column 46
    function value_26 () : gw.pl.currency.MonetaryAmount {
      return agreement.AttachmentPoint
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CoverageLimit_Cell) at TreatiesLV.pcf: line 57, column 44
    function value_29 () : gw.pl.currency.MonetaryAmount {
      return agreement.CoverageLimit
    }
    
    // 'value' attribute on TextCell (id=CededShare_Cell) at TreatiesLV.pcf: line 62, column 45
    function value_32 () : java.math.BigDecimal {
      return agreement.CededShare
    }
    
    // 'value' attribute on MonetaryAmountCell (id=NotificationThreshold_Cell) at TreatiesLV.pcf: line 67, column 32
    function value_35 () : gw.pl.currency.MonetaryAmount {
      return gw.web.admin.ReinsuranceUIHelper.getMaxRetention(agreement)
    }
    
    // 'value' attribute on TextCell (id=Lines_Cell) at TreatiesLV.pcf: line 73, column 32
    function value_38 () : java.math.BigDecimal {
      return gw.web.admin.ReinsuranceUIHelper.getLines(agreement)
    }
    
    // 'value' attribute on TypeKeyCell (id=Currency_Cell) at TreatiesLV.pcf: line 79, column 69
    function value_41 () : typekey.Currency {
      return agreement.Currency
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=NotificationThreshold_Cell) at TreatiesLV.pcf: line 67, column 32
    function visible_36 () : java.lang.Boolean {
      return isPerRisk
    }
    
    // 'visible' attribute on TypeKeyCell (id=Currency_Cell) at TreatiesLV.pcf: line 79, column 69
    function visible_43 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get agreement () : entity.RIAgreement {
      return getIteratedValue(1) as entity.RIAgreement
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/TreatiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TreatiesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at TreatiesLV.pcf: line 30, column 24
    function sortBy_0 (agreement :  entity.RIAgreement) : java.lang.Object {
      return agreement.Subtype.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at TreatiesLV.pcf: line 33, column 24
    function sortBy_1 (agreement :  entity.RIAgreement) : java.lang.Object {
      return agreement.AttachmentPoint.Amount
    }
    
    // 'value' attribute on TextCell (id=Lines_Cell) at TreatiesLV.pcf: line 73, column 32
    function sortValue_10 (agreement :  entity.RIAgreement) : java.lang.Object {
      return gw.web.admin.ReinsuranceUIHelper.getLines(agreement)
    }
    
    // 'value' attribute on TypeKeyCell (id=Currency_Cell) at TreatiesLV.pcf: line 79, column 69
    function sortValue_12 (agreement :  entity.RIAgreement) : java.lang.Object {
      return agreement.Currency
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at TreatiesLV.pcf: line 40, column 46
    function sortValue_2 (agreement :  entity.RIAgreement) : java.lang.Object {
      return agreement.AgreementNumber
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at TreatiesLV.pcf: line 44, column 35
    function sortValue_3 (agreement :  entity.RIAgreement) : java.lang.Object {
      return agreement.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at TreatiesLV.pcf: line 49, column 44
    function sortValue_4 (agreement :  entity.RIAgreement) : java.lang.Object {
      return agreement.Subtype
    }
    
    // 'value' attribute on MonetaryAmountCell (id=AttachmentPoint_Cell) at TreatiesLV.pcf: line 53, column 46
    function sortValue_5 (agreement :  entity.RIAgreement) : java.lang.Object {
      return agreement.AttachmentPoint
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CoverageLimit_Cell) at TreatiesLV.pcf: line 57, column 44
    function sortValue_6 (agreement :  entity.RIAgreement) : java.lang.Object {
      return agreement.CoverageLimit
    }
    
    // 'value' attribute on TextCell (id=CededShare_Cell) at TreatiesLV.pcf: line 62, column 45
    function sortValue_7 (agreement :  entity.RIAgreement) : java.lang.Object {
      return agreement.CededShare
    }
    
    // 'value' attribute on MonetaryAmountCell (id=NotificationThreshold_Cell) at TreatiesLV.pcf: line 67, column 32
    function sortValue_8 (agreement :  entity.RIAgreement) : java.lang.Object {
      return gw.web.admin.ReinsuranceUIHelper.getMaxRetention(agreement)
    }
    
    // 'toAdd' attribute on RowIterator at TreatiesLV.pcf: line 27, column 40
    function toAdd_45 (agreement :  entity.RIAgreement) : void {
      program.addTreaty(agreement as Treaty)
    }
    
    // 'toRemove' attribute on RowIterator at TreatiesLV.pcf: line 27, column 40
    function toRemove_46 (agreement :  entity.RIAgreement) : void {
      program.removeTreaty(agreement)
    }
    
    // 'value' attribute on RowIterator at TreatiesLV.pcf: line 27, column 40
    function value_47 () : entity.RIAgreement[] {
      return gw.web.admin.ReinsuranceUIHelper.getTreaties(program, isPerRisk)
    }
    
    // 'visible' attribute on TypeKeyCell (id=Currency_Cell) at TreatiesLV.pcf: line 79, column 69
    function visible_13 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=NotificationThreshold_Cell) at TreatiesLV.pcf: line 67, column 32
    function visible_9 () : java.lang.Boolean {
      return isPerRisk
    }
    
    property get isPerRisk () : boolean {
      return getRequireValue("isPerRisk", 0) as java.lang.Boolean
    }
    
    property set isPerRisk ($arg :  boolean) {
      setRequireValue("isPerRisk", 0, $arg)
    }
    
    property get program () : RIProgram {
      return getRequireValue("program", 0) as RIProgram
    }
    
    property set program ($arg :  RIProgram) {
      setRequireValue("program", 0, $arg)
    }
    
    
  }
  
  
}