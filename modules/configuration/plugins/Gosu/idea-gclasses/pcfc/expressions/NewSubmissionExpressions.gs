package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/submission/new/NewSubmission.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewSubmissionExpressions {
  @javax.annotation.Generated("config/web/pcf/job/submission/new/NewSubmission.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends NewSubmissionExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=addSubmission) at NewSubmission.pcf: line 239, column 52
    function action_81 () : void {
      manualProduct.createSubmission(acct, selectionOfProducer)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at NewSubmission.pcf: line 244, column 53
    function valueRoot_83 () : java.lang.Object {
      return manualProduct
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at NewSubmission.pcf: line 244, column 53
    function value_82 () : java.lang.String {
      return manualProduct.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at NewSubmission.pcf: line 248, column 60
    function value_85 () : java.lang.String {
      return manualProduct.Description
    }
    
    property get manualProduct () : APDProduct {
      return getIteratedValue(1) as APDProduct
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/submission/new/NewSubmission.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewSubmissionExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    static function __constructorIndex (acct :  Account) : int {
      return 1
    }
    
    // 'action' attribute on TextInput (id=AccountName_Input) at NewSubmission.pcf: line 86, column 53
    function action_17 () : void {
      AccountFileDoRetrievalForward.go(acct.AccountNumber)
    }
    
    // 'pickLocation' attribute on OrgInput (id=Producer_Input) at NewSubmission.pcf: line 101, column 52
    function action_25 () : void {
      OrganizationSearchPopup.push(null, true)
    }
    
    // 'action' attribute on ToolbarButton (id=MakeSubmissions) at NewSubmission.pcf: line 190, column 51
    function action_65 () : void {
      uiHelper.createMultipleSubmissions(productOffers, acct, selectionOfProducer, typeOfQuote)
    }
    
    // 'action' attribute on MenuItem (id=NewProduct) at NewSubmission.pcf: line 213, column 63
    function action_73 () : void {
      APDNewProductPopup.push(acct, selectionOfProducer)
    }
    
    // 'action' attribute on MenuItem (id=FromTemplate) at NewSubmission.pcf: line 217, column 115
    function action_75 () : void {
      APDLoadProductTemplatePopup.push(acct, selectionOfProducer)
    }
    
    // 'action' attribute on MenuItem (id=FromXmind) at NewSubmission.pcf: line 221, column 112
    function action_77 () : void {
      APDLoadXmindPopup.push(acct, selectionOfProducer)
    }
    
    // 'pickLocation' attribute on PickerInput (id=Account_Input) at NewSubmission.pcf: line 76, column 30
    function action_8 () : void {
      NewAccountPopup.push(true)
    }
    
    // 'action' attribute on TextInput (id=AccountName_Input) at NewSubmission.pcf: line 86, column 53
    function action_dest_18 () : pcf.api.Destination {
      return pcf.AccountFileDoRetrievalForward.createDestination(acct.AccountNumber)
    }
    
    // 'pickLocation' attribute on OrgInput (id=Producer_Input) at NewSubmission.pcf: line 101, column 52
    function action_dest_26 () : pcf.api.Destination {
      return pcf.OrganizationSearchPopup.createDestination(null, true)
    }
    
    // 'action' attribute on MenuItem (id=NewProduct) at NewSubmission.pcf: line 213, column 63
    function action_dest_74 () : pcf.api.Destination {
      return pcf.APDNewProductPopup.createDestination(acct, selectionOfProducer)
    }
    
    // 'action' attribute on MenuItem (id=FromTemplate) at NewSubmission.pcf: line 217, column 115
    function action_dest_76 () : pcf.api.Destination {
      return pcf.APDLoadProductTemplatePopup.createDestination(acct, selectionOfProducer)
    }
    
    // 'action' attribute on MenuItem (id=FromXmind) at NewSubmission.pcf: line 221, column 112
    function action_dest_78 () : pcf.api.Destination {
      return pcf.APDLoadXmindPopup.createDestination(acct, selectionOfProducer)
    }
    
    // 'pickLocation' attribute on PickerInput (id=Account_Input) at NewSubmission.pcf: line 76, column 30
    function action_dest_9 () : pcf.api.Destination {
      return pcf.NewAccountPopup.createDestination(true)
    }
    
    // 'afterReturnFromPopup' attribute on Page (id=NewSubmission) at NewSubmission.pcf: line 16, column 36
    function afterReturnFromPopup_91 (popupCommitted :  boolean) : void {
      uiHelper.refreshProductOffers(acct, selectionOfProducer)
    }
    
    // 'available' attribute on DetailViewPanel (id=ProductOffersDV) at NewSubmission.pcf: line 180, column 36
    function available_69 () : java.lang.Boolean {
      return typeOfQuote != null
    }
    
    // 'beforeCommit' attribute on Page (id=NewSubmission) at NewSubmission.pcf: line 16, column 36
    function beforeCommit_92 (pickedValue :  java.lang.Object) : void {
      throw "NewSubmission should never commit"
    }
    
    // 'conversionExpression' attribute on PickerInput (id=Account_Input) at NewSubmission.pcf: line 76, column 30
    function conversionExpression_11 (PickedValue :  AccountSummary) : entity.Account {
      return Account.checkedFindByNumber(PickedValue.AccountNumber, \ a -> perm.Account.newSubmission(a))
    }
    
    // 'def' attribute on ListViewInput at NewSubmission.pcf: line 184, column 89
    function def_onEnter_67 (def :  pcf.ProductSelectionLV) : void {
      def.onEnter(productOffers, acct, selectionOfProducer, createSingle, typeOfQuote, uiHelper)
    }
    
    // 'def' attribute on ListViewInput at NewSubmission.pcf: line 184, column 89
    function def_refreshVariables_68 (def :  pcf.ProductSelectionLV) : void {
      def.refreshVariables(productOffers, acct, selectionOfProducer, createSingle, typeOfQuote, uiHelper)
    }
    
    // 'value' attribute on PickerInput (id=Account_Input) at NewSubmission.pcf: line 76, column 30
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      acct = (__VALUE_TO_SET as entity.Account)
    }
    
    // 'value' attribute on OrgInput (id=Producer_Input) at NewSubmission.pcf: line 101, column 52
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectionOfProducer.Producer = (__VALUE_TO_SET as entity.Organization)
    }
    
    // 'value' attribute on RangeInput (id=ProducerCode_Input) at NewSubmission.pcf: line 116, column 62
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectionOfProducer.ProducerCode = (__VALUE_TO_SET as entity.ProducerCode)
    }
    
    // 'value' attribute on BooleanRadioInput (id=CreateSingle_Input) at NewSubmission.pcf: line 147, column 40
    function defaultSetter_51 (__VALUE_TO_SET :  java.lang.Object) : void {
      createSingle = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=QuoteType_Input) at NewSubmission.pcf: line 156, column 49
    function defaultSetter_54 (__VALUE_TO_SET :  java.lang.Object) : void {
      typeOfQuote = (__VALUE_TO_SET as typekey.QuoteType)
    }
    
    // 'value' attribute on TypeKeyInput (id=DefaultBaseState_Input) at NewSubmission.pcf: line 165, column 52
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectionOfProducer.State = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'value' attribute on DateInput (id=DefaultPPEffDate_Input) at NewSubmission.pcf: line 173, column 64
    function defaultSetter_61 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectionOfProducer.DefaultPPEffDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'editable' attribute on OrgInput (id=Producer_Input) at NewSubmission.pcf: line 101, column 52
    function editable_27 () : java.lang.Boolean {
      return gw.api.web.producer.ProducerUtil.canEditOrganization()
    }
    
    // 'initialValue' attribute on Variable at NewSubmission.pcf: line 24, column 59
    function initialValue_0 () : gw.web.job.submission.NewSubmissionUIHelper {
      return new gw.web.job.submission.NewSubmissionUIHelper(CurrentLocation)
    }
    
    // 'initialValue' attribute on Variable at NewSubmission.pcf: line 28, column 23
    function initialValue_1 () : Account {
      return null
    }
    
    // 'initialValue' attribute on Variable at NewSubmission.pcf: line 32, column 23
    function initialValue_2 () : boolean {
      return acct == null
    }
    
    // 'initialValue' attribute on Variable at NewSubmission.pcf: line 36, column 33
    function initialValue_3 () : ProducerSelection {
      return uiHelper.initializeProducerSelection(acct)
    }
    
    // 'initialValue' attribute on Variable at NewSubmission.pcf: line 41, column 34
    function initialValue_4 () : ProductSelection[] {
      return uiHelper.performNameClearance(acct, selectionOfProducer)
    }
    
    // 'initialValue' attribute on Variable at NewSubmission.pcf: line 49, column 25
    function initialValue_5 () : QuoteType {
      return typekey.QuoteType.TC_FULL
    }
    
    // 'initialValue' attribute on Variable at NewSubmission.pcf: line 53, column 70
    function initialValue_6 () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser()
    }
    
    // 'inputConversion' attribute on PickerInput (id=Account_Input) at NewSubmission.pcf: line 76, column 30
    function inputConversion_12 (VALUE :  java.lang.String) : java.lang.Object {
      return Account.checkedFindByNumber(VALUE, \ a -> perm.Account.newSubmission(a))
    }
    
    // 'onChange' attribute on PostOnChange at NewSubmission.pcf: line 103, column 81
    function onChange_24 () : void {
      uiHelper.changedProducer(acct, selectionOfProducer)
    }
    
    // 'onChange' attribute on PostOnChange at NewSubmission.pcf: line 118, column 86
    function onChange_36 () : void {
      uiHelper.refreshProductOffers(acct, selectionOfProducer)
    }
    
    // 'onChange' attribute on PostOnChange at NewSubmission.pcf: line 78, column 86
    function onChange_7 () : void {
      uiHelper.refreshProductOffers(acct, selectionOfProducer)
    }
    
    // 'onPick' attribute on PickerInput (id=Account_Input) at NewSubmission.pcf: line 76, column 30
    function onPick_10 (PickedValue :  AccountSummary) : void {
      uiHelper.refreshProductOffers(acct, selectionOfProducer)
    }
    
    // 'onPick' attribute on OrgInput (id=Producer_Input) at NewSubmission.pcf: line 101, column 52
    function onPick_29 (PickedValue :  Organization) : void {
      uiHelper.changedProducer(acct, selectionOfProducer)
    }
    
    // 'optionLabel' attribute on RangeInput (id=ProducerCode_Input) at NewSubmission.pcf: line 116, column 62
    function optionLabel_42 (VALUE :  entity.ProducerCode) : java.lang.String {
      return DisplayKey.get("Web.ProducerSelection.ProducerCode.OptionLabel", VALUE.Code, VALUE.Description  != null ? VALUE.Description : "" )
    }
    
    // 'parent' attribute on Page (id=NewSubmission) at NewSubmission.pcf: line 16, column 36
    static function parent_93 (acct :  Account) : pcf.api.Destination {
      return pcf.AccountForward.createDestination()
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at NewSubmission.pcf: line 244, column 53
    function sortValue_79 (manualProduct :  APDProduct) : java.lang.Object {
      return manualProduct.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at NewSubmission.pcf: line 248, column 60
    function sortValue_80 (manualProduct :  APDProduct) : java.lang.Object {
      return manualProduct.Description
    }
    
    // 'validationExpression' attribute on OrgInput (id=Producer_Input) at NewSubmission.pcf: line 101, column 52
    function validationExpression_28 () : java.lang.Object {
      return selectionOfProducer.validateProducer()
    }
    
    // 'validationExpression' attribute on RangeInput (id=ProducerCode_Input) at NewSubmission.pcf: line 116, column 62
    function validationExpression_37 () : java.lang.Object {
      return selectionOfProducer.validateProducerCodeForSubmission()
    }
    
    // 'valueRange' attribute on RangeInput (id=ProducerCode_Input) at NewSubmission.pcf: line 116, column 62
    function valueRange_43 () : java.lang.Object {
      return selectionOfProducer.getRangeOfActiveProducerCodesForCurrentUser()
    }
    
    // 'value' attribute on TextInput (id=AccountName_Input) at NewSubmission.pcf: line 86, column 53
    function valueRoot_20 () : java.lang.Object {
      return acct.AccountHolder
    }
    
    // 'value' attribute on OrgInput (id=Producer_Input) at NewSubmission.pcf: line 101, column 52
    function valueRoot_32 () : java.lang.Object {
      return selectionOfProducer
    }
    
    // 'value' attribute on PickerInput (id=Account_Input) at NewSubmission.pcf: line 76, column 30
    function value_13 () : entity.Account {
      return acct
    }
    
    // 'value' attribute on TextInput (id=AccountName_Input) at NewSubmission.pcf: line 86, column 53
    function value_19 () : entity.AccountContact {
      return acct.AccountHolder.AccountContact
    }
    
    // 'value' attribute on OrgInput (id=Producer_Input) at NewSubmission.pcf: line 101, column 52
    function value_30 () : entity.Organization {
      return selectionOfProducer.Producer
    }
    
    // 'value' attribute on RangeInput (id=ProducerCode_Input) at NewSubmission.pcf: line 116, column 62
    function value_39 () : entity.ProducerCode {
      return selectionOfProducer.ProducerCode
    }
    
    // 'value' attribute on BooleanRadioInput (id=CreateSingle_Input) at NewSubmission.pcf: line 147, column 40
    function value_50 () : java.lang.Boolean {
      return createSingle
    }
    
    // 'value' attribute on TypeKeyInput (id=QuoteType_Input) at NewSubmission.pcf: line 156, column 49
    function value_53 () : typekey.QuoteType {
      return typeOfQuote
    }
    
    // 'value' attribute on TypeKeyInput (id=DefaultBaseState_Input) at NewSubmission.pcf: line 165, column 52
    function value_56 () : typekey.Jurisdiction {
      return selectionOfProducer.State
    }
    
    // 'value' attribute on DateInput (id=DefaultPPEffDate_Input) at NewSubmission.pcf: line 173, column 64
    function value_60 () : java.util.Date {
      return selectionOfProducer.DefaultPPEffDate
    }
    
    // 'value' attribute on RowIterator at NewSubmission.pcf: line 229, column 46
    function value_88 () : APDProduct[] {
      return APDProduct.ManualProducts.where(\product -> product.canVisualizeForAccount(acct))
    }
    
    // 'valueRange' attribute on RangeInput (id=ProducerCode_Input) at NewSubmission.pcf: line 116, column 62
    function verifyValueRangeIsAllowedType_44 ($$arg :  entity.ProducerCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ProducerCode_Input) at NewSubmission.pcf: line 116, column 62
    function verifyValueRangeIsAllowedType_44 ($$arg :  gw.api.database.IQueryBeanResult<entity.ProducerCode>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ProducerCode_Input) at NewSubmission.pcf: line 116, column 62
    function verifyValueRangeIsAllowedType_44 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ProducerCode_Input) at NewSubmission.pcf: line 116, column 62
    function verifyValueRange_45 () : void {
      var __valueRangeArg = selectionOfProducer.getRangeOfActiveProducerCodesForCurrentUser()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_44(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=AccountName_Input) at NewSubmission.pcf: line 86, column 53
    function visible_16 () : java.lang.Boolean {
      return acct.AccountNumber != null
    }
    
    // 'visible' attribute on InputSet at NewSubmission.pcf: line 61, column 37
    function visible_23 () : java.lang.Boolean {
      return selectAccount
    }
    
    // 'visible' attribute on RangeInput (id=ProducerCode_Input) at NewSubmission.pcf: line 116, column 62
    function visible_38 () : java.lang.Boolean {
      return selectionOfProducer.Producer != null
    }
    
    // 'visible' attribute on Label (id=NoProducts) at NewSubmission.pcf: line 140, column 55
    function visible_49 () : java.lang.Boolean {
      return productOffers.Count == 0
    }
    
    // 'visible' attribute on ToolbarButton (id=MakeSubmissions) at NewSubmission.pcf: line 190, column 51
    function visible_64 () : java.lang.Boolean {
      return not createSingle
    }
    
    // 'visible' attribute on ListViewInput at NewSubmission.pcf: line 184, column 89
    function visible_66 () : java.lang.Boolean {
      return uiHelper.canPerformNameClearance(acct, selectionOfProducer)
    }
    
    // 'visible' attribute on Card (id=Installed) at NewSubmission.pcf: line 128, column 48
    function visible_71 () : java.lang.Boolean {
      return productOffers.Count > 0
    }
    
    // 'visible' attribute on MenuItem (id=NewProduct) at NewSubmission.pcf: line 213, column 63
    function visible_72 () : java.lang.Boolean {
      return !userPreferences.inUseMode()
    }
    
    // 'visible' attribute on Card (id=Visualized) at NewSubmission.pcf: line 200, column 108
    function visible_90 () : java.lang.Boolean {
      return !userPreferences.inHiddenMode() and gw.api.system.PCDependenciesGateway.ServerMode.Dev
    }
    
    override property get CurrentLocation () : pcf.NewSubmission {
      return super.CurrentLocation as pcf.NewSubmission
    }
    
    property get acct () : Account {
      return getVariableValue("acct", 0) as Account
    }
    
    property set acct ($arg :  Account) {
      setVariableValue("acct", 0, $arg)
    }
    
    property get createSingle () : boolean {
      return getVariableValue("createSingle", 0) as java.lang.Boolean
    }
    
    property set createSingle ($arg :  boolean) {
      setVariableValue("createSingle", 0, $arg)
    }
    
    property get productOffers () : ProductSelection[] {
      return getVariableValue("productOffers", 0) as ProductSelection[]
    }
    
    property set productOffers ($arg :  ProductSelection[]) {
      setVariableValue("productOffers", 0, $arg)
    }
    
    property get selectAccount () : boolean {
      return getVariableValue("selectAccount", 0) as java.lang.Boolean
    }
    
    property set selectAccount ($arg :  boolean) {
      setVariableValue("selectAccount", 0, $arg)
    }
    
    property get selectionOfProducer () : ProducerSelection {
      return getVariableValue("selectionOfProducer", 0) as ProducerSelection
    }
    
    property set selectionOfProducer ($arg :  ProducerSelection) {
      setVariableValue("selectionOfProducer", 0, $arg)
    }
    
    property get typeOfQuote () : QuoteType {
      return getVariableValue("typeOfQuote", 0) as QuoteType
    }
    
    property set typeOfQuote ($arg :  QuoteType) {
      setVariableValue("typeOfQuote", 0, $arg)
    }
    
    property get uiHelper () : gw.web.job.submission.NewSubmissionUIHelper {
      return getVariableValue("uiHelper", 0) as gw.web.job.submission.NewSubmissionUIHelper
    }
    
    property set uiHelper ($arg :  gw.web.job.submission.NewSubmissionUIHelper) {
      setVariableValue("uiHelper", 0, $arg)
    }
    
    property get userPreferences () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return getVariableValue("userPreferences", 0) as gw.api.web.userpreference.UserPreferencesOfCurrentUser
    }
    
    property set userPreferences ($arg :  gw.api.web.userpreference.UserPreferencesOfCurrentUser) {
      setVariableValue("userPreferences", 0, $arg)
    }
    
    
  }
  
  
}