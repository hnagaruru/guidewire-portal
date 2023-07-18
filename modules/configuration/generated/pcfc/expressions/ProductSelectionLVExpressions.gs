package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/submission/new/ProductSelectionLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ProductSelectionLVExpressions {
  @javax.annotation.Generated("config/web/pcf/job/submission/new/ProductSelectionLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ProductSelectionLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=addSubmission) at ProductSelectionLV.pcf: line 45, column 134
    function action_10 () : void {
      gw.web.job.submission.NewSubmissionUtil.createOneSubmission(productOffer, producerSelection, account, quoteType)  
    }
    
    // 'available' attribute on Link (id=addSubmission) at ProductSelectionLV.pcf: line 45, column 134
    function available_8 () : java.lang.Boolean {
      return uiHelper.isProductOfferSelectable(account, productOffer)
    }
    
    // 'value' attribute on RangeCell (id=NumToCreate_Cell) at ProductSelectionLV.pcf: line 58, column 36
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      productOffer.NumToCreate = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'valueRange' attribute on RangeCell (id=NumToCreate_Cell) at ProductSelectionLV.pcf: line 58, column 36
    function valueRange_17 () : java.lang.Object {
      return gw.web.job.submission.NewSubmissionUtil.makeNumberRange(productOffer.MaxCreate)
    }
    
    // 'value' attribute on RangeCell (id=NumToCreate_Cell) at ProductSelectionLV.pcf: line 58, column 36
    function valueRoot_16 () : java.lang.Object {
      return productOffer
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ProductSelectionLV.pcf: line 63, column 46
    function valueRoot_24 () : java.lang.Object {
      return productOffer.Product
    }
    
    // 'value' attribute on RangeCell (id=NumToCreate_Cell) at ProductSelectionLV.pcf: line 58, column 36
    function value_14 () : java.lang.Integer {
      return productOffer.NumToCreate
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ProductSelectionLV.pcf: line 63, column 46
    function value_23 () : java.lang.String {
      return productOffer.Product.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ProductSelectionLV.pcf: line 68, column 53
    function value_26 () : java.lang.String {
      return productOffer.Product.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ProductSelectionLV.pcf: line 74, column 55
    function value_29 () : typekey.ProductSelectionStatus {
      return productOffer.ProductSelectionStatus
    }
    
    // 'value' attribute on TextCell (id=MaxCreate_Cell) at ProductSelectionLV.pcf: line 81, column 36
    function value_32 () : java.lang.Integer {
      return productOffer.MaxCreate
    }
    
    // 'valueRange' attribute on RangeCell (id=NumToCreate_Cell) at ProductSelectionLV.pcf: line 58, column 36
    function verifyValueRangeIsAllowedType_18 ($$arg :  java.lang.Integer[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=NumToCreate_Cell) at ProductSelectionLV.pcf: line 58, column 36
    function verifyValueRangeIsAllowedType_18 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=NumToCreate_Cell) at ProductSelectionLV.pcf: line 58, column 36
    function verifyValueRange_19 () : void {
      var __valueRangeArg = gw.web.job.submission.NewSubmissionUtil.makeNumberRange(productOffer.MaxCreate)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_18(__valueRangeArg)
    }
    
    // 'visible' attribute on LinkCell (id=Select) at ProductSelectionLV.pcf: line 38, column 34
    function visible_11 () : java.lang.Boolean {
      return createSingle
    }
    
    // 'visible' attribute on RangeCell (id=NumToCreate_Cell) at ProductSelectionLV.pcf: line 58, column 36
    function visible_21 () : java.lang.Boolean {
      return !createSingle
    }
    
    // 'visible' attribute on Link (id=addSubmission) at ProductSelectionLV.pcf: line 45, column 134
    function visible_9 () : java.lang.Boolean {
      return productOffer.ProductSelectionStatus == TC_AVAILABLE || productOffer.ProductSelectionStatus == TC_AUTODECLINED
    }
    
    property get productOffer () : entity.ProductSelection {
      return getIteratedValue(1) as entity.ProductSelection
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/submission/new/ProductSelectionLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ProductSelectionLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeCell (id=NumToCreate_Cell) at ProductSelectionLV.pcf: line 58, column 36
    function sortValue_1 (productOffer :  entity.ProductSelection) : java.lang.Object {
      return productOffer.NumToCreate
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ProductSelectionLV.pcf: line 63, column 46
    function sortValue_3 (productOffer :  entity.ProductSelection) : java.lang.Object {
      return productOffer.Product.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ProductSelectionLV.pcf: line 68, column 53
    function sortValue_4 (productOffer :  entity.ProductSelection) : java.lang.Object {
      return productOffer.Product.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ProductSelectionLV.pcf: line 74, column 55
    function sortValue_5 (productOffer :  entity.ProductSelection) : java.lang.Object {
      return productOffer.ProductSelectionStatus
    }
    
    // 'value' attribute on TextCell (id=MaxCreate_Cell) at ProductSelectionLV.pcf: line 81, column 36
    function sortValue_6 (productOffer :  entity.ProductSelection) : java.lang.Object {
      return productOffer.MaxCreate
    }
    
    // 'value' attribute on RowIterator at ProductSelectionLV.pcf: line 33, column 45
    function value_36 () : entity.ProductSelection[] {
      return productOffers
    }
    
    // 'visible' attribute on LinkCell (id=Select) at ProductSelectionLV.pcf: line 38, column 34
    function visible_0 () : java.lang.Boolean {
      return createSingle
    }
    
    // 'visible' attribute on RangeCell (id=NumToCreate_Cell) at ProductSelectionLV.pcf: line 58, column 36
    function visible_2 () : java.lang.Boolean {
      return !createSingle
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get createMultiple () : boolean {
      return getVariableValue("createMultiple", 0) as java.lang.Boolean
    }
    
    property set createMultiple ($arg :  boolean) {
      setVariableValue("createMultiple", 0, $arg)
    }
    
    property get createSingle () : boolean {
      return getRequireValue("createSingle", 0) as java.lang.Boolean
    }
    
    property set createSingle ($arg :  boolean) {
      setRequireValue("createSingle", 0, $arg)
    }
    
    property get producerSelection () : ProducerSelection {
      return getRequireValue("producerSelection", 0) as ProducerSelection
    }
    
    property set producerSelection ($arg :  ProducerSelection) {
      setRequireValue("producerSelection", 0, $arg)
    }
    
    property get productOffers () : ProductSelection[] {
      return getRequireValue("productOffers", 0) as ProductSelection[]
    }
    
    property set productOffers ($arg :  ProductSelection[]) {
      setRequireValue("productOffers", 0, $arg)
    }
    
    property get quoteType () : QuoteType {
      return getRequireValue("quoteType", 0) as QuoteType
    }
    
    property set quoteType ($arg :  QuoteType) {
      setRequireValue("quoteType", 0, $arg)
    }
    
    property get uiHelper () : gw.web.job.submission.NewSubmissionUIHelper {
      return getRequireValue("uiHelper", 0) as gw.web.job.submission.NewSubmissionUIHelper
    }
    
    property set uiHelper ($arg :  gw.web.job.submission.NewSubmissionUIHelper) {
      setRequireValue("uiHelper", 0, $arg)
    }
    
    
  }
  
  
}