package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateBookDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateBookDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateBookDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateBookDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on AltUserInput (id=LastUpdatedBy_Input) at RateBookDV.pcf: line 74, column 38
    function actionAvailable_40 () : java.lang.Boolean {
      return ratebook.UpdateUser != null
    }
    
    // MenuItem (id=UserBrowseMenuItem) at RateBookDV.pcf: line 74, column 38
    function action_36 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on AltUserInput (id=LastUpdatedBy_Input) at RateBookDV.pcf: line 74, column 38
    function action_38 () : void {
      UserDetailPage.go(ratebook.UpdateUser)
    }
    
    // 'action' attribute on Link (id=StorageIcon) at RateBookDV.pcf: line 95, column 58
    function action_49 () : void {
      rateBookDVUI.makeRateTablesOwned()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at RateBookDV.pcf: line 74, column 38
    function action_dest_37 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on AltUserInput (id=LastUpdatedBy_Input) at RateBookDV.pcf: line 74, column 38
    function action_dest_39 () : pcf.api.Destination {
      return pcf.UserDetailPage.createDestination(ratebook.UpdateUser)
    }
    
    // 'value' attribute on TextInput (id=Edition_Input) at RateBookDV.pcf: line 40, column 39
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      ratebook.BookEdition = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at RateBookDV.pcf: line 45, column 36
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      ratebook.BookDesc = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=CascadedLookup_Input) at RateBookDV.pcf: line 56, column 42
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      ratebook.CascadedLookup = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Group_Input) at RateBookDV.pcf: line 62, column 37
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      ratebook.BookGroup = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at RateBookDV.pcf: line 27, column 36
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      ratebook.BookCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=PolicyLine_Input) at RateBookDV.pcf: line 109, column 38
    function defaultSetter_52 (__VALUE_TO_SET :  java.lang.Object) : void {
      rateBookDVUI.PolicyLineWrapper = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=Jurisdiction_Input) at RateBookDV.pcf: line 120, column 81
    function defaultSetter_61 (__VALUE_TO_SET :  java.lang.Object) : void {
      rateBookDVUI.BookJurisdictionWrapper = (__VALUE_TO_SET as gw.util.Pair<java.lang.String, typekey.Jurisdiction>)
    }
    
    // 'value' attribute on RangeInput (id=UWCompany_Input) at RateBookDV.pcf: line 129, column 77
    function defaultSetter_69 (__VALUE_TO_SET :  java.lang.Object) : void {
      rateBookDVUI.UWCompanyWrapper = (__VALUE_TO_SET as gw.util.Pair<java.lang.String, entity.UWCompany>)
    }
    
    // 'value' attribute on RangeInput (id=Offering_Input) at RateBookDV.pcf: line 139, column 39
    function defaultSetter_77 (__VALUE_TO_SET :  java.lang.Object) : void {
      rateBookDVUI.BookOfferingWrapper = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RateBookDV.pcf: line 34, column 47
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      ratebook.BookName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at RateBookDV.pcf: line 151, column 53
    function defaultSetter_87 (__VALUE_TO_SET :  java.lang.Object) : void {
      rateBookDVUI.RateBook.EffectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=ExpirationDate_Input) at RateBookDV.pcf: line 160, column 54
    function defaultSetter_93 (__VALUE_TO_SET :  java.lang.Object) : void {
      rateBookDVUI.RateBook.ExpirationDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=RenewalEffectiveDate_Input) at RateBookDV.pcf: line 174, column 61
    function defaultSetter_99 (__VALUE_TO_SET :  java.lang.Object) : void {
      rateBookDVUI.RateBook.RenewalEffectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'editable' attribute on RangeInput (id=PolicyLine_Input) at RateBookDV.pcf: line 109, column 38
    function editable_50 () : java.lang.Boolean {
      return ratebook.RateTables.IsEmpty
    }
    
    // 'initialValue' attribute on Variable at RateBookDV.pcf: line 13, column 57
    function initialValue_0 () : gw.pcf.rating.ratebook.RateBookDVUIHelper {
      return new gw.pcf.rating.ratebook.RateBookDVUIHelper (ratebook)
    }
    
    // 'initialValue' attribute on Variable at RateBookDV.pcf: line 18, column 32
    function initialValue_1 () : java.lang.String {
      return rateBookDVUI.AreRateTablesReferenced ? DisplayKey.get("Web.Rating.RateBooks.ContainsReferences") : DisplayKey.get("Web.Rating.RateBooks.SelfContained")
    }
    
    // 'label' attribute on DateInput (id=ActivationDate_Input) at RateBookDV.pcf: line 68, column 48
    function label_31 () : java.lang.Object {
      return rateBookDVUI.StatusChangeDateLabel
    }
    
    // 'label' attribute on Link (id=StorageLabel) at RateBookDV.pcf: line 87, column 35
    function label_47 () : java.lang.Object {
      return storageDetails
    }
    
    // 'onChange' attribute on PostOnChange at RateBookDV.pcf: line 153, column 79
    function onChange_84 () : void {
      rateBookDVUI.possiblyAutoPopulateRenewalEffectiveDate()
    }
    
    // 'optionLabel' attribute on RangeInput (id=PolicyLine_Input) at RateBookDV.pcf: line 109, column 38
    function optionLabel_54 (VALUE :  java.lang.String) : java.lang.String {
      return gw.rating.GenericRateBookFieldEnhancement.policyLineCodeToDescription(VALUE)
    }
    
    // 'optionLabel' attribute on RangeInput (id=Jurisdiction_Input) at RateBookDV.pcf: line 120, column 81
    function optionLabel_63 (VALUE :  gw.util.Pair<java.lang.String, typekey.Jurisdiction>) : java.lang.String {
      return VALUE.First ?: DisplayKey.get("Web.Rating.Filter.Generic")
    }
    
    // 'optionLabel' attribute on RangeInput (id=UWCompany_Input) at RateBookDV.pcf: line 129, column 77
    function optionLabel_71 (VALUE :  gw.util.Pair<java.lang.String, entity.UWCompany>) : java.lang.String {
      return VALUE.First ?: DisplayKey.get("Web.Rating.Filter.Generic")
    }
    
    // 'optionLabel' attribute on RangeInput (id=Offering_Input) at RateBookDV.pcf: line 139, column 39
    function optionLabel_79 (VALUE :  java.lang.String) : java.lang.String {
      return gw.rating.GenericRateBookFieldEnhancement.offeringCodeToDescription(VALUE)
    }
    
    // 'validationExpression' attribute on DateInput (id=EffectiveDate_Input) at RateBookDV.pcf: line 151, column 53
    function validationExpression_85 () : java.lang.Object {
      return rateBookDVUI.checkDateIsEarlierThanBefore(rateBookDVUI.RateBook.EffectiveDate)
    }
    
    // 'validationExpression' attribute on DateInput (id=ExpirationDate_Input) at RateBookDV.pcf: line 160, column 54
    function validationExpression_91 () : java.lang.Object {
      return rateBookDVUI.checkBeforeOccursLaterThanPolicyEffectiveDateOrRenewalEffectiveDate()
    }
    
    // 'validationExpression' attribute on DateInput (id=RenewalEffectiveDate_Input) at RateBookDV.pcf: line 174, column 61
    function validationExpression_97 () : java.lang.Object {
      return rateBookDVUI.checkDateIsEarlierThanBefore(rateBookDVUI.RateBook.RenewalEffectiveDate)
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyLine_Input) at RateBookDV.pcf: line 109, column 38
    function valueRange_55 () : java.lang.Object {
      return gw.rating.rtm.util.ProductModelUtils.getAllPolicyLinesForSearch()
    }
    
    // 'valueRange' attribute on RangeInput (id=Jurisdiction_Input) at RateBookDV.pcf: line 120, column 81
    function valueRange_64 () : java.lang.Object {
      return gw.rating.rtm.util.ProductModelUtils.getAllJurisdictionsForSearch()
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at RateBookDV.pcf: line 129, column 77
    function valueRange_72 () : java.lang.Object {
      return gw.rating.rtm.util.ProductModelUtils.getAllUWCompaniesForSearch()
    }
    
    // 'valueRange' attribute on RangeInput (id=Offering_Input) at RateBookDV.pcf: line 139, column 39
    function valueRange_80 () : java.lang.Object {
      return gw.rating.rtm.util.ProductModelUtils.getAllDisplayOfferingsFor(ratebook.PolicyLine)
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at RateBookDV.pcf: line 27, column 36
    function valueRoot_4 () : java.lang.Object {
      return ratebook
    }
    
    // 'value' attribute on RangeInput (id=PolicyLine_Input) at RateBookDV.pcf: line 109, column 38
    function valueRoot_53 () : java.lang.Object {
      return rateBookDVUI
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at RateBookDV.pcf: line 151, column 53
    function valueRoot_88 () : java.lang.Object {
      return rateBookDVUI.RateBook
    }
    
    // 'value' attribute on DateInput (id=RenewalExpirationDate_Input) at RateBookDV.pcf: line 181, column 42
    function value_103 () : java.util.Date {
      return ratebook.ExpirationDate
    }
    
    // 'value' attribute on TextInput (id=Edition_Input) at RateBookDV.pcf: line 40, column 39
    function value_12 () : java.lang.String {
      return ratebook.BookEdition
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at RateBookDV.pcf: line 45, column 36
    function value_16 () : java.lang.String {
      return ratebook.BookDesc
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at RateBookDV.pcf: line 27, column 36
    function value_2 () : java.lang.String {
      return ratebook.BookCode
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at RateBookDV.pcf: line 50, column 45
    function value_20 () : typekey.RateBookStatus {
      return ratebook.Status
    }
    
    // 'value' attribute on CheckBoxInput (id=CascadedLookup_Input) at RateBookDV.pcf: line 56, column 42
    function value_23 () : java.lang.Boolean {
      return ratebook.CascadedLookup
    }
    
    // 'value' attribute on TextInput (id=Group_Input) at RateBookDV.pcf: line 62, column 37
    function value_27 () : java.lang.String {
      return ratebook.BookGroup
    }
    
    // 'value' attribute on DateInput (id=ActivationDate_Input) at RateBookDV.pcf: line 68, column 48
    function value_32 () : java.util.Date {
      return ratebook.LastStatusChangeDate
    }
    
    // 'value' attribute on AltUserInput (id=LastUpdatedBy_Input) at RateBookDV.pcf: line 74, column 38
    function value_41 () : entity.User {
      return ratebook.UpdateUser
    }
    
    // 'value' attribute on DateInput (id=LastUpdateTime_Input) at RateBookDV.pcf: line 80, column 37
    function value_44 () : java.util.Date {
      return ratebook.UpdateTime
    }
    
    // 'value' attribute on RangeInput (id=PolicyLine_Input) at RateBookDV.pcf: line 109, column 38
    function value_51 () : java.lang.String {
      return rateBookDVUI.PolicyLineWrapper
    }
    
    // 'value' attribute on RangeInput (id=Jurisdiction_Input) at RateBookDV.pcf: line 120, column 81
    function value_60 () : gw.util.Pair<java.lang.String, typekey.Jurisdiction> {
      return rateBookDVUI.BookJurisdictionWrapper
    }
    
    // 'value' attribute on RangeInput (id=UWCompany_Input) at RateBookDV.pcf: line 129, column 77
    function value_68 () : gw.util.Pair<java.lang.String, entity.UWCompany> {
      return rateBookDVUI.UWCompanyWrapper
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RateBookDV.pcf: line 34, column 47
    function value_7 () : java.lang.String {
      return ratebook.BookName
    }
    
    // 'value' attribute on RangeInput (id=Offering_Input) at RateBookDV.pcf: line 139, column 39
    function value_76 () : java.lang.String {
      return rateBookDVUI.BookOfferingWrapper
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at RateBookDV.pcf: line 151, column 53
    function value_86 () : java.util.Date {
      return rateBookDVUI.RateBook.EffectiveDate
    }
    
    // 'value' attribute on DateInput (id=ExpirationDate_Input) at RateBookDV.pcf: line 160, column 54
    function value_92 () : java.util.Date {
      return rateBookDVUI.RateBook.ExpirationDate
    }
    
    // 'value' attribute on DateInput (id=RenewalEffectiveDate_Input) at RateBookDV.pcf: line 174, column 61
    function value_98 () : java.util.Date {
      return rateBookDVUI.RateBook.RenewalEffectiveDate
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyLine_Input) at RateBookDV.pcf: line 109, column 38
    function verifyValueRangeIsAllowedType_56 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyLine_Input) at RateBookDV.pcf: line 109, column 38
    function verifyValueRangeIsAllowedType_56 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Jurisdiction_Input) at RateBookDV.pcf: line 120, column 81
    function verifyValueRangeIsAllowedType_65 ($$arg :  gw.util.Pair<java.lang.String, typekey.Jurisdiction>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Jurisdiction_Input) at RateBookDV.pcf: line 120, column 81
    function verifyValueRangeIsAllowedType_65 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at RateBookDV.pcf: line 129, column 77
    function verifyValueRangeIsAllowedType_73 ($$arg :  gw.util.Pair<java.lang.String, entity.UWCompany>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at RateBookDV.pcf: line 129, column 77
    function verifyValueRangeIsAllowedType_73 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Offering_Input) at RateBookDV.pcf: line 139, column 39
    function verifyValueRangeIsAllowedType_81 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Offering_Input) at RateBookDV.pcf: line 139, column 39
    function verifyValueRangeIsAllowedType_81 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyLine_Input) at RateBookDV.pcf: line 109, column 38
    function verifyValueRange_57 () : void {
      var __valueRangeArg = gw.rating.rtm.util.ProductModelUtils.getAllPolicyLinesForSearch()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_56(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Jurisdiction_Input) at RateBookDV.pcf: line 120, column 81
    function verifyValueRange_66 () : void {
      var __valueRangeArg = gw.rating.rtm.util.ProductModelUtils.getAllJurisdictionsForSearch()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_65(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at RateBookDV.pcf: line 129, column 77
    function verifyValueRange_74 () : void {
      var __valueRangeArg = gw.rating.rtm.util.ProductModelUtils.getAllUWCompaniesForSearch()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_73(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Offering_Input) at RateBookDV.pcf: line 139, column 39
    function verifyValueRange_82 () : void {
      var __valueRangeArg = gw.rating.rtm.util.ProductModelUtils.getAllDisplayOfferingsFor(ratebook.PolicyLine)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_81(__valueRangeArg)
    }
    
    // 'visible' attribute on Link (id=StorageIcon) at RateBookDV.pcf: line 95, column 58
    function visible_48 () : java.lang.Boolean {
      return rateBookDVUI.displayMakeOwnedIcon()
    }
    
    // 'visible' attribute on TextInput (id=Name_Input) at RateBookDV.pcf: line 34, column 47
    function visible_6 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    property get rateBookDVUI () : gw.pcf.rating.ratebook.RateBookDVUIHelper {
      return getVariableValue("rateBookDVUI", 0) as gw.pcf.rating.ratebook.RateBookDVUIHelper
    }
    
    property set rateBookDVUI ($arg :  gw.pcf.rating.ratebook.RateBookDVUIHelper) {
      setVariableValue("rateBookDVUI", 0, $arg)
    }
    
    property get ratebook () : RateBook {
      return getRequireValue("ratebook", 0) as RateBook
    }
    
    property set ratebook ($arg :  RateBook) {
      setRequireValue("ratebook", 0, $arg)
    }
    
    property get storageDetails () : java.lang.String {
      return getVariableValue("storageDetails", 0) as java.lang.String
    }
    
    property set storageDetails ($arg :  java.lang.String) {
      setVariableValue("storageDetails", 0, $arg)
    }
    
    
  }
  
  
}