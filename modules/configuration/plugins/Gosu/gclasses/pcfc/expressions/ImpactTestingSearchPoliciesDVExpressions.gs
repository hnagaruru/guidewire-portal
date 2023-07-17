package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingSearchPoliciesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ImpactTestingSearchPoliciesDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingSearchPoliciesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ImpactTestingSearchPoliciesDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=addJurisdictionLink) at ImpactTestingSearchPoliciesDV.pcf: line 84, column 38
    function action_22 () : void {
      searchHelper.addJurisdiction(jurisdictionToAdd)
    }
    
    // 'action' attribute on Link (id=removeJurisdictionLink) at ImpactTestingSearchPoliciesDV.pcf: line 89, column 38
    function action_23 () : void {
      searchHelper.removeJurisdictions(jurisdictionsToRemove)
    }
    
    // 'pickLocation' attribute on ProducerCodeInput (id=producerCodePicker_Input) at ProducerCodeWidget.xml: line 2, column 156
    function action_30 () : void {
      ProducerCodeSearchPopup.push()
    }
    
    // 'action' attribute on Link (id=addProducerCodeLink) at ImpactTestingSearchPoliciesDV.pcf: line 115, column 38
    function action_39 () : void {
      searchHelper.addProducerCode(producerCodeToAdd)
    }
    
    // 'action' attribute on Link (id=removeProducerCodeLink) at ImpactTestingSearchPoliciesDV.pcf: line 120, column 38
    function action_40 () : void {
      searchHelper.removeProducerCodes(producerCodesToRemove)
    }
    
    // 'action' attribute on Link (id=addProductLink) at ImpactTestingSearchPoliciesDV.pcf: line 53, column 38
    function action_8 () : void {
      searchHelper.addProduct(productToAdd)
    }
    
    // 'action' attribute on Link (id=removeProductLink) at ImpactTestingSearchPoliciesDV.pcf: line 58, column 38
    function action_9 () : void {
      searchHelper.removeProducts(productsToRemove)
    }
    
    // 'pickLocation' attribute on ProducerCodeInput (id=producerCodePicker_Input) at ProducerCodeWidget.xml: line 2, column 156
    function action_dest_31 () : pcf.api.Destination {
      return pcf.ProducerCodeSearchPopup.createDestination()
    }
    
    // 'def' attribute on InputSetRef at ImpactTestingSearchPoliciesDV.pcf: line 244, column 41
    function def_onEnter_89 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at ImpactTestingSearchPoliciesDV.pcf: line 244, column 41
    function def_refreshVariables_90 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on CheckBoxGroupInput (id=includedProducts_Input) at ImpactTestingSearchPoliciesDV.pcf: line 66, column 54
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      productsToRemove = (__VALUE_TO_SET as gw.api.productmodel.Product[])
    }
    
    // 'value' attribute on RangeInput (id=jurisdictions_Input) at ImpactTestingSearchPoliciesDV.pcf: line 78, column 45
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      jurisdictionToAdd = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'value' attribute on RangeInput (id=products_Input) at ImpactTestingSearchPoliciesDV.pcf: line 47, column 52
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      productToAdd = (__VALUE_TO_SET as gw.api.productmodel.Product)
    }
    
    // 'value' attribute on CheckBoxGroupInput (id=includedJurisdictions_Input) at ImpactTestingSearchPoliciesDV.pcf: line 97, column 47
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      jurisdictionsToRemove = (__VALUE_TO_SET as typekey.Jurisdiction[])
    }
    
    // 'value' attribute on ProducerCodeInput (id=producerCodePicker_Input) at ProducerCodeWidget.xml: line 2, column 156
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      producerCodeToAdd = (__VALUE_TO_SET as entity.ProducerCode)
    }
    
    // 'value' attribute on CheckBoxGroupInput (id=includedProducerCodes_Input) at ImpactTestingSearchPoliciesDV.pcf: line 128, column 46
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      producerCodesToRemove = (__VALUE_TO_SET as entity.ProducerCode[])
    }
    
    // 'value' attribute on TextAreaInput (id=postalCodesList_Input) at ImpactTestingSearchPoliciesDV.pcf: line 149, column 48
    function defaultSetter_48 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.PostalCodesList = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=useStartsWith_Input) at ImpactTestingSearchPoliciesDV.pcf: line 160, column 102
    function defaultSetter_52 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.UseStartsWithForPostalCodes = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on Choice (id=usePostalCodeListChoice) at ImpactTestingSearchPoliciesDV.pcf: line 140, column 43
    function defaultSetter_56 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.SearchOnPostalCodeList = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=postalCodeMin_Input) at ImpactTestingSearchPoliciesDV.pcf: line 179, column 51
    function defaultSetter_59 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.PostalCodeRangeMin = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=postalCodeMax_Input) at ImpactTestingSearchPoliciesDV.pcf: line 186, column 51
    function defaultSetter_63 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.PostalCodeRangeMax = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=effectiveDateMin_Input) at ImpactTestingSearchPoliciesDV.pcf: line 200, column 45
    function defaultSetter_70 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.EffectiveDateMin = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=effectiveDateMax_Input) at ImpactTestingSearchPoliciesDV.pcf: line 207, column 45
    function defaultSetter_74 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.EffectiveDateMax = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=expirationDateMin_Input) at ImpactTestingSearchPoliciesDV.pcf: line 219, column 46
    function defaultSetter_78 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.ExpirationDateMin = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=expirationDateMax_Input) at ImpactTestingSearchPoliciesDV.pcf: line 226, column 46
    function defaultSetter_82 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.ExpirationDateMax = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=asOfDate_Input) at ImpactTestingSearchPoliciesDV.pcf: line 237, column 42
    function defaultSetter_86 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.InForceOnDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'initialValue' attribute on Variable at ImpactTestingSearchPoliciesDV.pcf: line 23, column 64
    function initialValue_0 () : gw.pcf.rating.impact.ImpactTestingSearchUIHelper {
      return new gw.pcf.rating.impact.ImpactTestingSearchUIHelper(criteria, gw.plugin.util.CurrentUserUtil.getCurrentUser().getUser())
    }
    
    // 'inputConversion' attribute on ProducerCodeInput (id=producerCodePicker_Input) at ProducerCodeWidget.xml: line 2, column 156
    function inputConversion_33 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.api.web.product.ProducerCodePickerUtil.convertValueFromString(VALUE, producerCodeToAdd)
    }
    
    // 'onPick' attribute on ProducerCodeInput (id=producerCodePicker_Input) at ProducerCodeWidget.xml: line 2, column 156
    function onPick_32 (PickedValue :  ProducerCode) : void {
      searchHelper.addProducerCode(producerCodeToAdd)
    }
    
    // 'onPick' attribute on ProducerCodeInput (id=producerCodePicker_Input) at ImpactTestingSearchPoliciesDV.pcf: line 109, column 38
    function onPick_36 (PickedValue :  java.lang.Object) : void {
      searchHelper.addProducerCode(producerCodeToAdd)
    }
    
    // 'optionLabel' attribute on RangeInput (id=products_Input) at ImpactTestingSearchPoliciesDV.pcf: line 47, column 52
    function optionLabel_3 (VALUE :  gw.api.productmodel.Product) : java.lang.String {
      return searchHelper.lineStyleProductDisplay(VALUE)
    }
    
    // 'valueRange' attribute on CheckBoxGroupInput (id=includedProducts_Input) at ImpactTestingSearchPoliciesDV.pcf: line 66, column 54
    function valueRange_12 () : java.lang.Object {
      return criteria.Products
    }
    
    // 'valueRange' attribute on RangeInput (id=jurisdictions_Input) at ImpactTestingSearchPoliciesDV.pcf: line 78, column 45
    function valueRange_18 () : java.lang.Object {
      return searchHelper.availableJurisdictions()
    }
    
    // 'valueRange' attribute on CheckBoxGroupInput (id=includedJurisdictions_Input) at ImpactTestingSearchPoliciesDV.pcf: line 97, column 47
    function valueRange_26 () : java.lang.Object {
      return criteria.Jurisdictions
    }
    
    // 'valueRange' attribute on RangeInput (id=products_Input) at ImpactTestingSearchPoliciesDV.pcf: line 47, column 52
    function valueRange_4 () : java.lang.Object {
      return searchHelper.availableProducts()
    }
    
    // 'valueRange' attribute on CheckBoxGroupInput (id=includedProducerCodes_Input) at ImpactTestingSearchPoliciesDV.pcf: line 128, column 46
    function valueRange_43 () : java.lang.Object {
      return criteria.ProducerCodes
    }
    
    // 'value' attribute on TextAreaInput (id=postalCodesList_Input) at ImpactTestingSearchPoliciesDV.pcf: line 149, column 48
    function valueRoot_49 () : java.lang.Object {
      return criteria
    }
    
    // 'value' attribute on RangeInput (id=products_Input) at ImpactTestingSearchPoliciesDV.pcf: line 47, column 52
    function value_1 () : gw.api.productmodel.Product {
      return productToAdd
    }
    
    // 'value' attribute on CheckBoxGroupInput (id=includedProducts_Input) at ImpactTestingSearchPoliciesDV.pcf: line 66, column 54
    function value_10 () : gw.api.productmodel.Product[] {
      return productsToRemove
    }
    
    // 'value' attribute on RangeInput (id=jurisdictions_Input) at ImpactTestingSearchPoliciesDV.pcf: line 78, column 45
    function value_16 () : typekey.Jurisdiction {
      return jurisdictionToAdd
    }
    
    // 'value' attribute on CheckBoxGroupInput (id=includedJurisdictions_Input) at ImpactTestingSearchPoliciesDV.pcf: line 97, column 47
    function value_24 () : typekey.Jurisdiction[] {
      return jurisdictionsToRemove
    }
    
    // 'value' attribute on ProducerCodeInput (id=producerCodePicker_Input) at ProducerCodeWidget.xml: line 2, column 156
    function value_34 () : entity.ProducerCode {
      return producerCodeToAdd
    }
    
    // 'value' attribute on CheckBoxGroupInput (id=includedProducerCodes_Input) at ImpactTestingSearchPoliciesDV.pcf: line 128, column 46
    function value_41 () : entity.ProducerCode[] {
      return producerCodesToRemove
    }
    
    // 'value' attribute on TextAreaInput (id=postalCodesList_Input) at ImpactTestingSearchPoliciesDV.pcf: line 149, column 48
    function value_47 () : java.lang.String {
      return criteria.PostalCodesList
    }
    
    // 'value' attribute on CheckBoxInput (id=useStartsWith_Input) at ImpactTestingSearchPoliciesDV.pcf: line 160, column 102
    function value_51 () : java.lang.Boolean {
      return criteria.UseStartsWithForPostalCodes
    }
    
    // 'value' attribute on Choice (id=usePostalCodeListChoice) at ImpactTestingSearchPoliciesDV.pcf: line 140, column 43
    function value_55 () : java.lang.Boolean {
      return criteria.SearchOnPostalCodeList
    }
    
    // 'value' attribute on TextInput (id=postalCodeMin_Input) at ImpactTestingSearchPoliciesDV.pcf: line 179, column 51
    function value_58 () : java.lang.String {
      return criteria.PostalCodeRangeMin
    }
    
    // 'value' attribute on TextInput (id=postalCodeMax_Input) at ImpactTestingSearchPoliciesDV.pcf: line 186, column 51
    function value_62 () : java.lang.String {
      return criteria.PostalCodeRangeMax
    }
    
    // 'value' attribute on DateInput (id=effectiveDateMin_Input) at ImpactTestingSearchPoliciesDV.pcf: line 200, column 45
    function value_69 () : java.util.Date {
      return criteria.EffectiveDateMin
    }
    
    // 'value' attribute on DateInput (id=effectiveDateMax_Input) at ImpactTestingSearchPoliciesDV.pcf: line 207, column 45
    function value_73 () : java.util.Date {
      return criteria.EffectiveDateMax
    }
    
    // 'value' attribute on DateInput (id=expirationDateMin_Input) at ImpactTestingSearchPoliciesDV.pcf: line 219, column 46
    function value_77 () : java.util.Date {
      return criteria.ExpirationDateMin
    }
    
    // 'value' attribute on DateInput (id=expirationDateMax_Input) at ImpactTestingSearchPoliciesDV.pcf: line 226, column 46
    function value_81 () : java.util.Date {
      return criteria.ExpirationDateMax
    }
    
    // 'value' attribute on DateInput (id=asOfDate_Input) at ImpactTestingSearchPoliciesDV.pcf: line 237, column 42
    function value_85 () : java.util.Date {
      return criteria.InForceOnDate
    }
    
    // 'valueRange' attribute on CheckBoxGroupInput (id=includedProducts_Input) at ImpactTestingSearchPoliciesDV.pcf: line 66, column 54
    function verifyValueRangeIsAllowedType_13 ($$arg :  gw.api.productmodel.Product[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on CheckBoxGroupInput (id=includedProducts_Input) at ImpactTestingSearchPoliciesDV.pcf: line 66, column 54
    function verifyValueRangeIsAllowedType_13 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=jurisdictions_Input) at ImpactTestingSearchPoliciesDV.pcf: line 78, column 45
    function verifyValueRangeIsAllowedType_19 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=jurisdictions_Input) at ImpactTestingSearchPoliciesDV.pcf: line 78, column 45
    function verifyValueRangeIsAllowedType_19 ($$arg :  typekey.Jurisdiction[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on CheckBoxGroupInput (id=includedJurisdictions_Input) at ImpactTestingSearchPoliciesDV.pcf: line 97, column 47
    function verifyValueRangeIsAllowedType_27 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on CheckBoxGroupInput (id=includedJurisdictions_Input) at ImpactTestingSearchPoliciesDV.pcf: line 97, column 47
    function verifyValueRangeIsAllowedType_27 ($$arg :  typekey.Jurisdiction[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on CheckBoxGroupInput (id=includedProducerCodes_Input) at ImpactTestingSearchPoliciesDV.pcf: line 128, column 46
    function verifyValueRangeIsAllowedType_44 ($$arg :  entity.ProducerCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on CheckBoxGroupInput (id=includedProducerCodes_Input) at ImpactTestingSearchPoliciesDV.pcf: line 128, column 46
    function verifyValueRangeIsAllowedType_44 ($$arg :  gw.api.database.IQueryBeanResult<entity.ProducerCode>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on CheckBoxGroupInput (id=includedProducerCodes_Input) at ImpactTestingSearchPoliciesDV.pcf: line 128, column 46
    function verifyValueRangeIsAllowedType_44 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=products_Input) at ImpactTestingSearchPoliciesDV.pcf: line 47, column 52
    function verifyValueRangeIsAllowedType_5 ($$arg :  gw.api.productmodel.Product[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=products_Input) at ImpactTestingSearchPoliciesDV.pcf: line 47, column 52
    function verifyValueRangeIsAllowedType_5 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on CheckBoxGroupInput (id=includedProducts_Input) at ImpactTestingSearchPoliciesDV.pcf: line 66, column 54
    function verifyValueRange_14 () : void {
      var __valueRangeArg = criteria.Products
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_13(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=jurisdictions_Input) at ImpactTestingSearchPoliciesDV.pcf: line 78, column 45
    function verifyValueRange_20 () : void {
      var __valueRangeArg = searchHelper.availableJurisdictions()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_19(__valueRangeArg)
    }
    
    // 'valueRange' attribute on CheckBoxGroupInput (id=includedJurisdictions_Input) at ImpactTestingSearchPoliciesDV.pcf: line 97, column 47
    function verifyValueRange_28 () : void {
      var __valueRangeArg = criteria.Jurisdictions
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_27(__valueRangeArg)
    }
    
    // 'valueRange' attribute on CheckBoxGroupInput (id=includedProducerCodes_Input) at ImpactTestingSearchPoliciesDV.pcf: line 128, column 46
    function verifyValueRange_45 () : void {
      var __valueRangeArg = criteria.ProducerCodes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_44(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=products_Input) at ImpactTestingSearchPoliciesDV.pcf: line 47, column 52
    function verifyValueRange_6 () : void {
      var __valueRangeArg = searchHelper.availableProducts()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_5(__valueRangeArg)
    }
    
    property get criteria () : gw.rating.impact.ImpactTestingSearchCriteria {
      return getRequireValue("criteria", 0) as gw.rating.impact.ImpactTestingSearchCriteria
    }
    
    property set criteria ($arg :  gw.rating.impact.ImpactTestingSearchCriteria) {
      setRequireValue("criteria", 0, $arg)
    }
    
    property get jurisdictionToAdd () : Jurisdiction {
      return getRequireValue("jurisdictionToAdd", 0) as Jurisdiction
    }
    
    property set jurisdictionToAdd ($arg :  Jurisdiction) {
      setRequireValue("jurisdictionToAdd", 0, $arg)
    }
    
    property get jurisdictionsToRemove () : Jurisdiction[] {
      return getVariableValue("jurisdictionsToRemove", 0) as Jurisdiction[]
    }
    
    property set jurisdictionsToRemove ($arg :  Jurisdiction[]) {
      setVariableValue("jurisdictionsToRemove", 0, $arg)
    }
    
    property get postalCodes () : String {
      return getVariableValue("postalCodes", 0) as String
    }
    
    property set postalCodes ($arg :  String) {
      setVariableValue("postalCodes", 0, $arg)
    }
    
    property get producerCodeToAdd () : ProducerCode {
      return getRequireValue("producerCodeToAdd", 0) as ProducerCode
    }
    
    property set producerCodeToAdd ($arg :  ProducerCode) {
      setRequireValue("producerCodeToAdd", 0, $arg)
    }
    
    property get producerCodesToRemove () : ProducerCode[] {
      return getVariableValue("producerCodesToRemove", 0) as ProducerCode[]
    }
    
    property set producerCodesToRemove ($arg :  ProducerCode[]) {
      setVariableValue("producerCodesToRemove", 0, $arg)
    }
    
    property get productToAdd () : gw.api.productmodel.Product {
      return getRequireValue("productToAdd", 0) as gw.api.productmodel.Product
    }
    
    property set productToAdd ($arg :  gw.api.productmodel.Product) {
      setRequireValue("productToAdd", 0, $arg)
    }
    
    property get productsToRemove () : gw.api.productmodel.Product[] {
      return getVariableValue("productsToRemove", 0) as gw.api.productmodel.Product[]
    }
    
    property set productsToRemove ($arg :  gw.api.productmodel.Product[]) {
      setVariableValue("productsToRemove", 0, $arg)
    }
    
    property get searchHelper () : gw.pcf.rating.impact.ImpactTestingSearchUIHelper {
      return getVariableValue("searchHelper", 0) as gw.pcf.rating.impact.ImpactTestingSearchUIHelper
    }
    
    property set searchHelper ($arg :  gw.pcf.rating.impact.ImpactTestingSearchUIHelper) {
      setVariableValue("searchHelper", 0, $arg)
    }
    
    
  }
  
  
}