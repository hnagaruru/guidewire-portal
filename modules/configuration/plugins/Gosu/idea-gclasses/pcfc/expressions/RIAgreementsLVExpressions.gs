package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/RIAgreementsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RIAgreementsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/RIAgreementsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RIAgreementsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Number_Cell) at RIAgreementsLV.pcf: line 46, column 46
    function action_19 () : void {
      EditAgreementPopup.push(agreement, ririsk, (agreement typeis Facultative ? not CurrentLocation.InEditMode : true))
    }
    
    // 'action' attribute on Link (id=UpdateInclusion) at RIAgreementsLV.pcf: line 114, column 48
    function action_59 () : void {
      AttachmentInclusionPopup.push(agreement, ririsk)
    }
    
    // 'action' attribute on TextCell (id=Number_Cell) at RIAgreementsLV.pcf: line 46, column 46
    function action_dest_20 () : pcf.api.Destination {
      return pcf.EditAgreementPopup.createDestination(agreement, ririsk, (agreement typeis Facultative ? not CurrentLocation.InEditMode : true))
    }
    
    // 'action' attribute on Link (id=UpdateInclusion) at RIAgreementsLV.pcf: line 114, column 48
    function action_dest_60 () : pcf.api.Destination {
      return pcf.AttachmentInclusionPopup.createDestination(agreement, ririsk)
    }
    
    // 'available' attribute on Link (id=UpdateInclusion) at RIAgreementsLV.pcf: line 114, column 48
    function available_57 () : java.lang.Boolean {
      return agreement typeis Treaty
    }
    
    // 'checkBoxVisible' attribute on RowIterator at RIAgreementsLV.pcf: line 26, column 73
    function checkBoxVisible_62 () : java.lang.Boolean {
      return attachment.Agreement.Subtype.hasCategory(typekey.ArrangementType.TC_FACULTATIVE)
    }
    
    // 'currency' attribute on MonetaryAmountCell (id=AttachmentPoint_Cell) at RIAgreementsLV.pcf: line 61, column 72
    function currency_31 () : typekey.Currency {
      return agreement.Currency
    }
    
    // 'currency' attribute on MonetaryAmountCell (id=MaxCeding_Cell) at RIAgreementsLV.pcf: line 80, column 61
    function currency_41 () : typekey.Currency {
      return attachment.Agreement.Currency
    }
    
    // 'initialValue' attribute on Variable at RIAgreementsLV.pcf: line 30, column 36
    function initialValue_17 () : entity.RIAgreement {
      return attachment.Agreement
    }
    
    // 'initialValue' attribute on Variable at RIAgreementsLV.pcf: line 34, column 51
    function initialValue_18 () : typekey.RIAttachmentInclusionType {
      return agreement.getInclusion(ririsk)
    }
    
    // RowIterator at RIAgreementsLV.pcf: line 26, column 73
    function initializeVariables_63 () : void {
        agreement = attachment.Agreement;
  inclusion = agreement.getInclusion(ririsk);

    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at RIAgreementsLV.pcf: line 46, column 46
    function valueRoot_22 () : java.lang.Object {
      return agreement
    }
    
    // 'value' attribute on MonetaryAmountCell (id=MaxCeding_Cell) at RIAgreementsLV.pcf: line 80, column 61
    function valueRoot_40 () : java.lang.Object {
      return attachment
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at RIAgreementsLV.pcf: line 46, column 46
    function value_21 () : java.lang.String {
      return agreement.AgreementNumber
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at RIAgreementsLV.pcf: line 50, column 35
    function value_24 () : java.lang.String {
      return agreement.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at RIAgreementsLV.pcf: line 55, column 44
    function value_27 () : typekey.RIAgreement {
      return agreement.Subtype
    }
    
    // 'value' attribute on MonetaryAmountCell (id=AttachmentPoint_Cell) at RIAgreementsLV.pcf: line 61, column 72
    function value_30 () : gw.pl.currency.MonetaryAmount {
      return agreement.getAttachmentPoint(ririsk.GrossRetention)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CoverageLimit_Cell) at RIAgreementsLV.pcf: line 67, column 70
    function value_33 () : gw.pl.currency.MonetaryAmount {
      return agreement.getCoverageLimit(ririsk.GrossRetention)
    }
    
    // 'value' attribute on TextCell (id=CededShare_Cell) at RIAgreementsLV.pcf: line 73, column 45
    function value_36 () : java.math.BigDecimal {
      return agreement.CededShare
    }
    
    // 'value' attribute on MonetaryAmountCell (id=MaxCeding_Cell) at RIAgreementsLV.pcf: line 80, column 61
    function value_39 () : gw.pl.currency.MonetaryAmount {
      return attachment.MaxCeding
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CededRisk_Cell) at RIAgreementsLV.pcf: line 87, column 61
    function value_44 () : gw.pl.currency.MonetaryAmount {
      return attachment.CededRisk
    }
    
    // 'value' attribute on TextCell (id=ProportionCeded_Cell) at RIAgreementsLV.pcf: line 94, column 32
    function value_49 () : java.math.BigDecimal {
      return attachment.ProportionalPercentage
    }
    
    // 'value' attribute on TextCell (id=Inclusion_Cell) at RIAgreementsLV.pcf: line 99, column 58
    function value_53 () : typekey.RIAttachmentInclusionType {
      return inclusion == TC_INCLUDED ? null : inclusion
    }
    
    // 'value' attribute on TextCell (id=Projected_Cell) at RIAgreementsLV.pcf: line 103, column 117
    function value_55 () : java.lang.String {
      return attachment.IsProjected ? DisplayKey.get("Web.Reinsurance.Attachment.Projected") : null
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=MaxCeding_Cell) at RIAgreementsLV.pcf: line 80, column 61
    function visible_42 () : java.lang.Boolean {
      return isPerRisk and ririsk.TotalRisk != null
    }
    
    // 'visible' attribute on TextCell (id=ProportionCeded_Cell) at RIAgreementsLV.pcf: line 94, column 32
    function visible_51 () : java.lang.Boolean {
      return isPerRisk
    }
    
    // 'visible' attribute on LinkCell at RIAgreementsLV.pcf: line 106, column 66
    function visible_61 () : java.lang.Boolean {
      return perm.System.editreinsuranceforpolicyadvanced
    }
    
    property get agreement () : entity.RIAgreement {
      return getVariableValue("agreement", 1) as entity.RIAgreement
    }
    
    property set agreement ($arg :  entity.RIAgreement) {
      setVariableValue("agreement", 1, $arg)
    }
    
    property get attachment () : gw.api.reinsurance.RIAttachment {
      return getIteratedValue(1) as gw.api.reinsurance.RIAttachment
    }
    
    property get inclusion () : typekey.RIAttachmentInclusionType {
      return getVariableValue("inclusion", 1) as typekey.RIAttachmentInclusionType
    }
    
    property set inclusion ($arg :  typekey.RIAttachmentInclusionType) {
      setVariableValue("inclusion", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/RIAgreementsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RIAgreementsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at RIAgreementsLV.pcf: line 37, column 24
    function sortBy_0 (attachment :  gw.api.reinsurance.RIAttachment) : java.lang.Object {
      return attachment.Agreement.Subtype.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at RIAgreementsLV.pcf: line 40, column 24
    function sortBy_1 (attachment :  gw.api.reinsurance.RIAttachment) : java.lang.Object {
      return attachment.Agreement.AttachmentPoint
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CededRisk_Cell) at RIAgreementsLV.pcf: line 87, column 61
    function sortValue_10 (attachment :  gw.api.reinsurance.RIAttachment) : java.lang.Object {
      return attachment.CededRisk
    }
    
    // 'value' attribute on TextCell (id=ProportionCeded_Cell) at RIAgreementsLV.pcf: line 94, column 32
    function sortValue_12 (attachment :  gw.api.reinsurance.RIAttachment) : java.lang.Object {
      return attachment.ProportionalPercentage
    }
    
    // 'value' attribute on TextCell (id=Inclusion_Cell) at RIAgreementsLV.pcf: line 99, column 58
    function sortValue_14 (attachment :  gw.api.reinsurance.RIAttachment) : java.lang.Object {
      var agreement : entity.RIAgreement = (attachment.Agreement)
var inclusion : typekey.RIAttachmentInclusionType = (agreement.getInclusion(ririsk))
return inclusion == TC_INCLUDED ? null : inclusion
    }
    
    // 'value' attribute on TextCell (id=Projected_Cell) at RIAgreementsLV.pcf: line 103, column 117
    function sortValue_15 (attachment :  gw.api.reinsurance.RIAttachment) : java.lang.Object {
      return attachment.IsProjected ? DisplayKey.get("Web.Reinsurance.Attachment.Projected") : null
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at RIAgreementsLV.pcf: line 46, column 46
    function sortValue_2 (attachment :  gw.api.reinsurance.RIAttachment) : java.lang.Object {
      var agreement : entity.RIAgreement = (attachment.Agreement)
var inclusion : typekey.RIAttachmentInclusionType = (agreement.getInclusion(ririsk))
return agreement.AgreementNumber
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at RIAgreementsLV.pcf: line 50, column 35
    function sortValue_3 (attachment :  gw.api.reinsurance.RIAttachment) : java.lang.Object {
      var agreement : entity.RIAgreement = (attachment.Agreement)
var inclusion : typekey.RIAttachmentInclusionType = (agreement.getInclusion(ririsk))
return agreement.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at RIAgreementsLV.pcf: line 55, column 44
    function sortValue_4 (attachment :  gw.api.reinsurance.RIAttachment) : java.lang.Object {
      var agreement : entity.RIAgreement = (attachment.Agreement)
var inclusion : typekey.RIAttachmentInclusionType = (agreement.getInclusion(ririsk))
return agreement.Subtype
    }
    
    // 'value' attribute on MonetaryAmountCell (id=AttachmentPoint_Cell) at RIAgreementsLV.pcf: line 61, column 72
    function sortValue_5 (attachment :  gw.api.reinsurance.RIAttachment) : java.lang.Object {
      var agreement : entity.RIAgreement = (attachment.Agreement)
var inclusion : typekey.RIAttachmentInclusionType = (agreement.getInclusion(ririsk))
return agreement.getAttachmentPoint(ririsk.GrossRetention)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CoverageLimit_Cell) at RIAgreementsLV.pcf: line 67, column 70
    function sortValue_6 (attachment :  gw.api.reinsurance.RIAttachment) : java.lang.Object {
      var agreement : entity.RIAgreement = (attachment.Agreement)
var inclusion : typekey.RIAttachmentInclusionType = (agreement.getInclusion(ririsk))
return agreement.getCoverageLimit(ririsk.GrossRetention)
    }
    
    // 'value' attribute on TextCell (id=CededShare_Cell) at RIAgreementsLV.pcf: line 73, column 45
    function sortValue_7 (attachment :  gw.api.reinsurance.RIAttachment) : java.lang.Object {
      var agreement : entity.RIAgreement = (attachment.Agreement)
var inclusion : typekey.RIAttachmentInclusionType = (agreement.getInclusion(ririsk))
return agreement.CededShare
    }
    
    // 'value' attribute on MonetaryAmountCell (id=MaxCeding_Cell) at RIAgreementsLV.pcf: line 80, column 61
    function sortValue_8 (attachment :  gw.api.reinsurance.RIAttachment) : java.lang.Object {
      return attachment.MaxCeding
    }
    
    // 'toRemove' attribute on RowIterator at RIAgreementsLV.pcf: line 26, column 73
    function toRemove_64 (attachment :  gw.api.reinsurance.RIAttachment) : void {
      ririsk.detachRiskFromFacultative(attachment.Agreement); gw.reinsurance.risk.RIRiskValidation.validateUI(ririsk)
    }
    
    // 'value' attribute on RowIterator at RIAgreementsLV.pcf: line 26, column 73
    function value_65 () : java.util.List<gw.api.reinsurance.RIAttachment> {
      return gw.web.admin.ReinsuranceUIHelper.getAttachments(ririsk, isPerRisk)
    }
    
    // 'visible' attribute on TextCell (id=ProportionCeded_Cell) at RIAgreementsLV.pcf: line 94, column 32
    function visible_13 () : java.lang.Boolean {
      return isPerRisk
    }
    
    // 'visible' attribute on LinkCell at RIAgreementsLV.pcf: line 106, column 66
    function visible_16 () : java.lang.Boolean {
      return perm.System.editreinsuranceforpolicyadvanced
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=MaxCeding_Cell) at RIAgreementsLV.pcf: line 80, column 61
    function visible_9 () : java.lang.Boolean {
      return isPerRisk and ririsk.TotalRisk != null
    }
    
    property get isPerRisk () : boolean {
      return getRequireValue("isPerRisk", 0) as java.lang.Boolean
    }
    
    property set isPerRisk ($arg :  boolean) {
      setRequireValue("isPerRisk", 0, $arg)
    }
    
    property get ririsk () : RIRisk {
      return getRequireValue("ririsk", 0) as RIRisk
    }
    
    property set ririsk ($arg :  RIRisk) {
      setRequireValue("ririsk", 0, $arg)
    }
    
    
  }
  
  
}