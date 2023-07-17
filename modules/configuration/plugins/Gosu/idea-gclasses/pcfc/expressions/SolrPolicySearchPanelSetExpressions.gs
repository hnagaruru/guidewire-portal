package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/SolrPolicySearchPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SolrPolicySearchPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/search/SolrPolicySearchPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at SolrPolicySearchPanelSet.pcf: line 180, column 33
    function action_88 () : void {
      gw.pcf.solr.SolrPolicySearchHelper.navigateToPolicyOrJob(result)
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=rowIcon_Cell) at SolrPolicySearchPanelSet.pcf: line 163, column 40
    function iconLabel_80 () : java.lang.String {
      return gw.pcf.solr.SolrPolicySearchHelper.getIconLabel(result)
    }
    
    // 'icon' attribute on BooleanRadioCell (id=rowIcon_Cell) at SolrPolicySearchPanelSet.pcf: line 163, column 40
    function icon_81 () : java.lang.String {
      return gw.pcf.solr.SolrPolicySearchHelper.getIcon(result)
    }
    
    // 'label' attribute on Link (id=InsuredName) at SolrPolicySearchPanelSet.pcf: line 188, column 56
    function label_92 () : java.lang.Object {
      return result.PrimaryInsuredName
    }
    
    // 'tooltip' attribute on Link (id=InsuredIcon) at SolrPolicySearchPanelSet.pcf: line 194, column 70
    function tooltip_94 () : java.lang.String {
      return result.AdditionalInsureds.join(", ")
    }
    
    // 'value' attribute on TextCell (id=rank_Cell) at SolrPolicySearchPanelSet.pcf: line 169, column 33
    function valueRoot_83 () : java.lang.Object {
      return result
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at SolrPolicySearchPanelSet.pcf: line 205, column 33
    function valueRoot_99 () : java.lang.Object {
      return uniqueProductDisplayNameMaker.Products.singleWhere(\ p -> p.PublicID == result.ProductCode)
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at SolrPolicySearchPanelSet.pcf: line 210, column 33
    function value_101 () : java.lang.String {
      return result.JobType == "Cancellation" ? DisplayKey.get("Web.PolicySearch.Solr.Result.CanceledStatus") : result.PeriodStatus
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at SolrPolicySearchPanelSet.pcf: line 215, column 33
    function value_103 () : java.util.Date {
      return result.PeriodStart
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at SolrPolicySearchPanelSet.pcf: line 220, column 33
    function value_106 () : java.util.Date {
      return result.PeriodEnd
    }
    
    // 'value' attribute on TextCell (id=Producer_Cell) at SolrPolicySearchPanelSet.pcf: line 225, column 92
    function value_109 () : java.lang.String {
      return result.Producer + "\n" + result.ProducerCodeOfService
    }
    
    // 'value' attribute on TextCell (id=rank_Cell) at SolrPolicySearchPanelSet.pcf: line 169, column 33
    function value_82 () : java.lang.Integer {
      return result.Rank
    }
    
    // 'value' attribute on TextCell (id=Score_Cell) at SolrPolicySearchPanelSet.pcf: line 174, column 36
    function value_85 () : java.lang.String {
      return result.Score
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at SolrPolicySearchPanelSet.pcf: line 180, column 33
    function value_89 () : java.lang.String {
      return result.PolicyNumberDisplayString
    }
    
    // 'value' attribute on TextCell (id=PolicyAddress_Cell) at SolrPolicySearchPanelSet.pcf: line 200, column 49
    function value_95 () : java.lang.String {
      return result.PolicyAddress
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at SolrPolicySearchPanelSet.pcf: line 205, column 33
    function value_98 () : java.lang.String {
      return uniqueProductDisplayNameMaker.Products.singleWhere(\ p -> p.PublicID == result.ProductCode).DisplayName
    }
    
    // 'visible' attribute on Link (id=InsuredIcon) at SolrPolicySearchPanelSet.pcf: line 194, column 70
    function visible_93 () : java.lang.Boolean {
      return result.AdditionalInsureds.HasElements
    }
    
    property get result () : gw.solr.SolrPolicyResultDocument {
      return getIteratedValue(2) as gw.solr.SolrPolicyResultDocument
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/SolrPolicySearchPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends SolrPolicySearchPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on OrgInput (id=searchProducer_Input) at SolrPolicySearchPanelSet.pcf: line 115, column 54
    function action_46 () : void {
      OrganizationSearchPopup.push(null, true)
    }
    
    // 'pickLocation' attribute on ProducerCodeInput (id=searchProducerCode_Input) at ProducerCodeWidget.xml: line 2, column 156
    function action_54 () : void {
      ProducerCodeSearchPopup.push()
    }
    
    // 'pickLocation' attribute on OrgInput (id=searchProducer_Input) at SolrPolicySearchPanelSet.pcf: line 115, column 54
    function action_dest_47 () : pcf.api.Destination {
      return pcf.OrganizationSearchPopup.createDestination(null, true)
    }
    
    // 'pickLocation' attribute on ProducerCodeInput (id=searchProducerCode_Input) at ProducerCodeWidget.xml: line 2, column 156
    function action_dest_55 () : pcf.api.Destination {
      return pcf.ProducerCodeSearchPopup.createDestination()
    }
    
    // 'def' attribute on InputSetRef at SolrPolicySearchPanelSet.pcf: line 132, column 45
    function def_onEnter_67 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at SolrPolicySearchPanelSet.pcf: line 132, column 45
    function def_refreshVariables_68 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TextInput (id=searchPhone_Input) at SolrPolicySearchPanelSet.pcf: line 54, column 53
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.PhoneCriteria = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=searchOfficialId_Input) at SolrPolicySearchPanelSet.pcf: line 60, column 58
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.OfficialIdCriteria = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=searchStreet_Input) at SolrPolicySearchPanelSet.pcf: line 69, column 54
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.StreetCriteria = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=searchPolicy_Input) at SolrPolicySearchPanelSet.pcf: line 41, column 54
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.PolicyCriteria = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=searchCity_Input) at SolrPolicySearchPanelSet.pcf: line 75, column 52
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.CityCriteria = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=searchState_Input) at SolrPolicySearchPanelSet.pcf: line 82, column 42
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.StateCriteria = (__VALUE_TO_SET as typekey.State)
    }
    
    // 'value' attribute on TextInput (id=searchPostalCode_Input) at SolrPolicySearchPanelSet.pcf: line 88, column 58
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.PostalCodeCriteria = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=searchProduct_Input) at SolrPolicySearchPanelSet.pcf: line 101, column 54
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.ProductCriteria = (__VALUE_TO_SET as gw.api.productmodel.Product)
    }
    
    // 'value' attribute on TypeKeyInput (id=searchJurisdiction_Input) at SolrPolicySearchPanelSet.pcf: line 108, column 47
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.JurisdictionCriteria = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'value' attribute on OrgInput (id=searchProducer_Input) at SolrPolicySearchPanelSet.pcf: line 115, column 54
    function defaultSetter_50 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.ProducerCriteria = (__VALUE_TO_SET as entity.Organization)
    }
    
    // 'value' attribute on ProducerCodeInput (id=searchProducerCode_Input) at ProducerCodeWidget.xml: line 2, column 156
    function defaultSetter_58 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.ProducerCodeCriteria = (__VALUE_TO_SET as entity.ProducerCode)
    }
    
    // 'value' attribute on TextInput (id=searchName_Input) at SolrPolicySearchPanelSet.pcf: line 47, column 52
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.NameCriteria = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=InForceOnDate_Input) at SolrPolicySearchPanelSet.pcf: line 127, column 59
    function defaultSetter_64 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.InForceOnDateCriteria = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'editable' attribute on OrgInput (id=searchProducer_Input) at SolrPolicySearchPanelSet.pcf: line 115, column 54
    function editable_48 () : java.lang.Boolean {
      return not User.util.CurrentUser.ExternalUser
    }
    
    // 'inputConversion' attribute on ProducerCodeInput (id=searchProducerCode_Input) at ProducerCodeWidget.xml: line 2, column 156
    function inputConversion_56 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.api.web.product.ProducerCodePickerUtil.convertValueFromString(VALUE, searchCriteria.ProducerCodeCriteria)
    }
    
    // 'optionLabel' attribute on RangeInput (id=searchProduct_Input) at SolrPolicySearchPanelSet.pcf: line 101, column 54
    function optionLabel_37 (VALUE :  gw.api.productmodel.Product) : java.lang.String {
      return uniqueProductDisplayNameMaker.make(VALUE)
    }
    
    // 'requestValidationExpression' attribute on TextInput (id=searchPhone_Input) at SolrPolicySearchPanelSet.pcf: line 54, column 53
    function requestValidationExpression_9 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.api.util.PhoneUtil.isViableNumberWithExtension(VALUE) ? null : DisplayKey.get("Java.PhoneUtil.Error.ParseError", VALUE)
    }
    
    // 'searchCriteria' attribute on SearchPanel at SolrPolicySearchPanelSet.pcf: line 26, column 82
    function searchCriteria_113 () : gw.solr.SolrPolicySearchCriteria {
      return new gw.solr.SolrPolicySearchCriteria()
    }
    
    // 'search' attribute on SearchPanel at SolrPolicySearchPanelSet.pcf: line 26, column 82
    function search_112 () : java.lang.Object {
      return searchCriteria.performSearch()
    }
    
    // 'sortBy' attribute on IteratorSort at SolrPolicySearchPanelSet.pcf: line 154, column 32
    function sortBy_69 (result :  gw.solr.SolrPolicyResultDocument) : java.lang.Object {
      return result.Rank
    }
    
    // 'value' attribute on TextCell (id=rank_Cell) at SolrPolicySearchPanelSet.pcf: line 169, column 33
    function sortValue_70 (result :  gw.solr.SolrPolicyResultDocument) : java.lang.Object {
      return result.Rank
    }
    
    // 'value' attribute on TextCell (id=Score_Cell) at SolrPolicySearchPanelSet.pcf: line 174, column 36
    function sortValue_71 (result :  gw.solr.SolrPolicyResultDocument) : java.lang.Object {
      return result.Score
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at SolrPolicySearchPanelSet.pcf: line 180, column 33
    function sortValue_72 (result :  gw.solr.SolrPolicyResultDocument) : java.lang.Object {
      return result.PolicyNumberDisplayString
    }
    
    // 'sortBy' attribute on LinkCell (id=Insured) at SolrPolicySearchPanelSet.pcf: line 185, column 54
    function sortValue_73 (result :  gw.solr.SolrPolicyResultDocument) : java.lang.Object {
      return result.PrimaryInsuredName
    }
    
    // 'value' attribute on TextCell (id=PolicyAddress_Cell) at SolrPolicySearchPanelSet.pcf: line 200, column 49
    function sortValue_74 (result :  gw.solr.SolrPolicyResultDocument) : java.lang.Object {
      return result.PolicyAddress
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at SolrPolicySearchPanelSet.pcf: line 205, column 33
    function sortValue_75 (result :  gw.solr.SolrPolicyResultDocument) : java.lang.Object {
      return uniqueProductDisplayNameMaker.Products.singleWhere(\ p -> p.PublicID == result.ProductCode).DisplayName
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at SolrPolicySearchPanelSet.pcf: line 210, column 33
    function sortValue_76 (result :  gw.solr.SolrPolicyResultDocument) : java.lang.Object {
      return result.JobType == "Cancellation" ? DisplayKey.get("Web.PolicySearch.Solr.Result.CanceledStatus") : result.PeriodStatus
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at SolrPolicySearchPanelSet.pcf: line 215, column 33
    function sortValue_77 (result :  gw.solr.SolrPolicyResultDocument) : java.lang.Object {
      return result.PeriodStart
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at SolrPolicySearchPanelSet.pcf: line 220, column 33
    function sortValue_78 (result :  gw.solr.SolrPolicyResultDocument) : java.lang.Object {
      return result.PeriodEnd
    }
    
    // 'value' attribute on TextCell (id=Producer_Cell) at SolrPolicySearchPanelSet.pcf: line 225, column 92
    function sortValue_79 (result :  gw.solr.SolrPolicyResultDocument) : java.lang.Object {
      return result.Producer + "\n" + result.ProducerCodeOfService
    }
    
    // 'valueRange' attribute on RangeInput (id=searchProduct_Input) at SolrPolicySearchPanelSet.pcf: line 101, column 54
    function valueRange_38 () : java.lang.Object {
      return uniqueProductDisplayNameMaker.Products
    }
    
    // 'value' attribute on TextInput (id=searchPolicy_Input) at SolrPolicySearchPanelSet.pcf: line 41, column 54
    function valueRoot_3 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on TextInput (id=searchPolicy_Input) at SolrPolicySearchPanelSet.pcf: line 41, column 54
    function value_1 () : java.lang.String {
      return searchCriteria.PolicyCriteria
    }
    
    // 'value' attribute on TextInput (id=searchPhone_Input) at SolrPolicySearchPanelSet.pcf: line 54, column 53
    function value_10 () : java.lang.String {
      return searchCriteria.PhoneCriteria
    }
    
    // 'value' attribute on RowIterator at SolrPolicySearchPanelSet.pcf: line 151, column 82
    function value_111 () : java.util.List<gw.solr.SolrPolicyResultDocument> {
      return searchResults
    }
    
    // 'value' attribute on TextInput (id=searchOfficialId_Input) at SolrPolicySearchPanelSet.pcf: line 60, column 58
    function value_14 () : java.lang.String {
      return searchCriteria.OfficialIdCriteria
    }
    
    // 'value' attribute on TextInput (id=searchStreet_Input) at SolrPolicySearchPanelSet.pcf: line 69, column 54
    function value_18 () : java.lang.String {
      return searchCriteria.StreetCriteria
    }
    
    // 'value' attribute on TextInput (id=searchCity_Input) at SolrPolicySearchPanelSet.pcf: line 75, column 52
    function value_22 () : java.lang.String {
      return searchCriteria.CityCriteria
    }
    
    // 'value' attribute on TypeKeyInput (id=searchState_Input) at SolrPolicySearchPanelSet.pcf: line 82, column 42
    function value_26 () : typekey.State {
      return searchCriteria.StateCriteria
    }
    
    // 'value' attribute on TextInput (id=searchPostalCode_Input) at SolrPolicySearchPanelSet.pcf: line 88, column 58
    function value_30 () : java.lang.String {
      return searchCriteria.PostalCodeCriteria
    }
    
    // 'value' attribute on RangeInput (id=searchProduct_Input) at SolrPolicySearchPanelSet.pcf: line 101, column 54
    function value_34 () : gw.api.productmodel.Product {
      return searchCriteria.ProductCriteria
    }
    
    // 'value' attribute on TypeKeyInput (id=searchJurisdiction_Input) at SolrPolicySearchPanelSet.pcf: line 108, column 47
    function value_42 () : typekey.Jurisdiction {
      return searchCriteria.JurisdictionCriteria
    }
    
    // 'value' attribute on OrgInput (id=searchProducer_Input) at SolrPolicySearchPanelSet.pcf: line 115, column 54
    function value_49 () : entity.Organization {
      return searchCriteria.ProducerCriteria
    }
    
    // 'value' attribute on TextInput (id=searchName_Input) at SolrPolicySearchPanelSet.pcf: line 47, column 52
    function value_5 () : java.lang.String {
      return searchCriteria.NameCriteria
    }
    
    // 'value' attribute on ProducerCodeInput (id=searchProducerCode_Input) at ProducerCodeWidget.xml: line 2, column 156
    function value_57 () : entity.ProducerCode {
      return searchCriteria.ProducerCodeCriteria
    }
    
    // 'value' attribute on DateInput (id=InForceOnDate_Input) at SolrPolicySearchPanelSet.pcf: line 127, column 59
    function value_63 () : java.util.Date {
      return searchCriteria.InForceOnDateCriteria
    }
    
    // 'valueRange' attribute on RangeInput (id=searchProduct_Input) at SolrPolicySearchPanelSet.pcf: line 101, column 54
    function verifyValueRangeIsAllowedType_39 ($$arg :  gw.api.productmodel.Product[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=searchProduct_Input) at SolrPolicySearchPanelSet.pcf: line 101, column 54
    function verifyValueRangeIsAllowedType_39 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=searchProduct_Input) at SolrPolicySearchPanelSet.pcf: line 101, column 54
    function verifyValueRange_40 () : void {
      var __valueRangeArg = uniqueProductDisplayNameMaker.Products
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_39(__valueRangeArg)
    }
    
    property get searchCriteria () : gw.solr.SolrPolicySearchCriteria {
      return getCriteriaValue(1) as gw.solr.SolrPolicySearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.solr.SolrPolicySearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get searchResults () : java.util.List<gw.solr.SolrPolicyResultDocument> {
      return getResultsValue(1) as java.util.List<gw.solr.SolrPolicyResultDocument>
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/SolrPolicySearchPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SolrPolicySearchPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at SolrPolicySearchPanelSet.pcf: line 18, column 52
    function initialValue_0 () : gw.pcf.UniqueProductDisplayNameMaker {
      return new gw.pcf.UniqueProductDisplayNameMaker()
    }
    
    property get showDetailColumn () : boolean {
      return getVariableValue("showDetailColumn", 0) as java.lang.Boolean
    }
    
    property set showDetailColumn ($arg :  boolean) {
      setVariableValue("showDetailColumn", 0, $arg)
    }
    
    property get uniqueProductDisplayNameMaker () : gw.pcf.UniqueProductDisplayNameMaker {
      return getVariableValue("uniqueProductDisplayNameMaker", 0) as gw.pcf.UniqueProductDisplayNameMaker
    }
    
    property set uniqueProductDisplayNameMaker ($arg :  gw.pcf.UniqueProductDisplayNameMaker) {
      setVariableValue("uniqueProductDisplayNameMaker", 0, $arg)
    }
    
    
  }
  
  
}