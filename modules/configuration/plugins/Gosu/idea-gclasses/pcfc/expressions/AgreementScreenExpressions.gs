package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/AgreementScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AgreementScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/AgreementScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AgreementScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=MakeActiveButton) at AgreementScreen.pcf: line 41, column 123
    function action_13 () : void {
      screenHelper.makeActive()
    }
    
    // 'action' attribute on ToolbarButton (id=DeleteButton) at AgreementScreen.pcf: line 48, column 123
    function action_16 () : void {
      screenHelper.delete(); AgreementSearchPage.go()
    }
    
    // 'action' attribute on ToolbarButton (id=ValidateButton) at AgreementScreen.pcf: line 27, column 123
    function action_6 () : void {
      agreement.validate(); gw.api.util.LocationUtil.addRequestScopedInfoMessage(DisplayKey.get("Web.Reinsurance.Agreement.Verify.VerificationPasses")) 
    }
    
    // 'action' attribute on Link (id=Adjust) at AgreementScreen.pcf: line 139, column 57
    function action_79 () : void {
      agreement.CommissionAdjusted = true
    }
    
    // 'action' attribute on Link (id=UnAdjust) at AgreementScreen.pcf: line 146, column 53
    function action_81 () : void {
      agreement.CommissionAdjusted = false
    }
    
    // 'action' attribute on PickerMenuItem (id=NewCompany) at AgreementScreen.pcf: line 160, column 51
    function action_83 () : void {
      NewContactPopup.push(typekey.ContactType.TC_COMPANY)
    }
    
    // 'action' attribute on PickerMenuItem (id=BrokerSearch) at AgreementScreen.pcf: line 166, column 51
    function action_87 () : void {
      ContactSearchPopup.push({typekey.Contact.TC_COMPANY})
    }
    
    // 'action' attribute on ToolbarButton (id=CloneButton) at AgreementScreen.pcf: line 34, column 123
    function action_9 () : void {
      NewAgreementPage.go(agreement.Subtype, agreement)
    }
    
    // 'action' attribute on TextInput (id=ChangeBrokerContactButton_Input) at AgreementScreen.pcf: line 154, column 68
    function action_90 () : void {
      EditContactPopup.push(agreement.Broker, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on ToolbarButton (id=CloneButton) at AgreementScreen.pcf: line 34, column 123
    function action_dest_10 () : pcf.api.Destination {
      return pcf.NewAgreementPage.createDestination(agreement.Subtype, agreement)
    }
    
    // 'action' attribute on PickerMenuItem (id=NewCompany) at AgreementScreen.pcf: line 160, column 51
    function action_dest_84 () : pcf.api.Destination {
      return pcf.NewContactPopup.createDestination(typekey.ContactType.TC_COMPANY)
    }
    
    // 'action' attribute on PickerMenuItem (id=BrokerSearch) at AgreementScreen.pcf: line 166, column 51
    function action_dest_88 () : pcf.api.Destination {
      return pcf.ContactSearchPopup.createDestination({typekey.Contact.TC_COMPANY})
    }
    
    // 'action' attribute on TextInput (id=ChangeBrokerContactButton_Input) at AgreementScreen.pcf: line 154, column 68
    function action_dest_91 () : pcf.api.Destination {
      return pcf.EditContactPopup.createDestination(agreement.Broker, CurrentLocation.InEditMode)
    }
    
    // 'available' attribute on ToolbarButton (id=MakeActiveButton) at AgreementScreen.pcf: line 41, column 123
    function available_11 () : java.lang.Boolean {
      return not agreement.Active
    }
    
    // 'available' attribute on ToolbarButton (id=DeleteButton) at AgreementScreen.pcf: line 48, column 123
    function available_14 () : java.lang.Boolean {
      return !agreement.Active
    }
    
    // 'available' attribute on ToolbarButton (id=CloneButton) at AgreementScreen.pcf: line 34, column 123
    function available_7 () : java.lang.Boolean {
      return not agreement.New 
    }
    
    // 'conversionExpression' attribute on AddMenuItem (id=NewCompany) at AgreementScreen.pcf: line 194, column 86
    function conversionExpression_99 (PickedValue :  Contact) : entity.AgreementParticipant {
      return agreement.addParticipant(PickedValue)
    }
    
    // 'def' attribute on PanelRef at AgreementScreen.pcf: line 182, column 27
    function def_onEnter_103 (def :  pcf.ParticipantsLV) : void {
      def.onEnter(agreement)
    }
    
    // 'def' attribute on PanelRef at AgreementScreen.pcf: line 216, column 46
    function def_onEnter_106 (def :  pcf.RICoverageGroupsPanelSet) : void {
      def.onEnter(agreement)
    }
    
    // 'def' attribute on PanelRef at AgreementScreen.pcf: line 220, column 126
    function def_onEnter_109 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(agreement, { "Name" }, { DisplayKey.get("Web.Reinsurance.Treaty.Name") })
    }
    
    // 'def' attribute on InputSetRef at AgreementScreen.pcf: line 110, column 47
    function def_onEnter_54 (def :  pcf.AgreementCoverageInputSet_facproportional) : void {
      def.onEnter(agreement)
    }
    
    // 'def' attribute on InputSetRef at AgreementScreen.pcf: line 110, column 47
    function def_onEnter_56 (def :  pcf.AgreementCoverageInputSet_nonproportional) : void {
      def.onEnter(agreement)
    }
    
    // 'def' attribute on InputSetRef at AgreementScreen.pcf: line 110, column 47
    function def_onEnter_58 (def :  pcf.AgreementCoverageInputSet_quotashare) : void {
      def.onEnter(agreement)
    }
    
    // 'def' attribute on InputSetRef at AgreementScreen.pcf: line 110, column 47
    function def_onEnter_60 (def :  pcf.AgreementCoverageInputSet_surplus) : void {
      def.onEnter(agreement)
    }
    
    // 'def' attribute on InputSetRef at AgreementScreen.pcf: line 117, column 54
    function def_onEnter_63 (def :  pcf.AgreementPAndCInputSet_facultative) : void {
      def.onEnter(agreement)
    }
    
    // 'def' attribute on InputSetRef at AgreementScreen.pcf: line 117, column 54
    function def_onEnter_65 (def :  pcf.AgreementPAndCInputSet_treaty) : void {
      def.onEnter(agreement)
    }
    
    // 'def' attribute on InputSetRef at AgreementScreen.pcf: line 173, column 48
    function def_onEnter_94 (def :  pcf.AgreementOtherTermsInputSet_nonproportional) : void {
      def.onEnter(agreement)
    }
    
    // 'def' attribute on InputSetRef at AgreementScreen.pcf: line 173, column 48
    function def_onEnter_96 (def :  pcf.AgreementOtherTermsInputSet_proportional) : void {
      def.onEnter(agreement)
    }
    
    // 'def' attribute on PanelRef at AgreementScreen.pcf: line 182, column 27
    function def_refreshVariables_104 (def :  pcf.ParticipantsLV) : void {
      def.refreshVariables(agreement)
    }
    
    // 'def' attribute on PanelRef at AgreementScreen.pcf: line 216, column 46
    function def_refreshVariables_107 (def :  pcf.RICoverageGroupsPanelSet) : void {
      def.refreshVariables(agreement)
    }
    
    // 'def' attribute on PanelRef at AgreementScreen.pcf: line 220, column 126
    function def_refreshVariables_110 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(agreement, { "Name" }, { DisplayKey.get("Web.Reinsurance.Treaty.Name") })
    }
    
    // 'def' attribute on InputSetRef at AgreementScreen.pcf: line 110, column 47
    function def_refreshVariables_55 (def :  pcf.AgreementCoverageInputSet_facproportional) : void {
      def.refreshVariables(agreement)
    }
    
    // 'def' attribute on InputSetRef at AgreementScreen.pcf: line 110, column 47
    function def_refreshVariables_57 (def :  pcf.AgreementCoverageInputSet_nonproportional) : void {
      def.refreshVariables(agreement)
    }
    
    // 'def' attribute on InputSetRef at AgreementScreen.pcf: line 110, column 47
    function def_refreshVariables_59 (def :  pcf.AgreementCoverageInputSet_quotashare) : void {
      def.refreshVariables(agreement)
    }
    
    // 'def' attribute on InputSetRef at AgreementScreen.pcf: line 110, column 47
    function def_refreshVariables_61 (def :  pcf.AgreementCoverageInputSet_surplus) : void {
      def.refreshVariables(agreement)
    }
    
    // 'def' attribute on InputSetRef at AgreementScreen.pcf: line 117, column 54
    function def_refreshVariables_64 (def :  pcf.AgreementPAndCInputSet_facultative) : void {
      def.refreshVariables(agreement)
    }
    
    // 'def' attribute on InputSetRef at AgreementScreen.pcf: line 117, column 54
    function def_refreshVariables_66 (def :  pcf.AgreementPAndCInputSet_treaty) : void {
      def.refreshVariables(agreement)
    }
    
    // 'def' attribute on InputSetRef at AgreementScreen.pcf: line 173, column 48
    function def_refreshVariables_95 (def :  pcf.AgreementOtherTermsInputSet_nonproportional) : void {
      def.refreshVariables(agreement)
    }
    
    // 'def' attribute on InputSetRef at AgreementScreen.pcf: line 173, column 48
    function def_refreshVariables_97 (def :  pcf.AgreementOtherTermsInputSet_proportional) : void {
      def.refreshVariables(agreement)
    }
    
    // 'value' attribute on TextInput (id=AgreementNumber_Input) at AgreementScreen.pcf: line 58, column 46
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      agreement.AgreementNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at AgreementScreen.pcf: line 64, column 35
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      agreement.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=EffDate_Input) at AgreementScreen.pcf: line 75, column 43
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      agreement.EffectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=ExpDate_Input) at AgreementScreen.pcf: line 85, column 44
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      agreement.ExpirationDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at AgreementScreen.pcf: line 101, column 68
    function defaultSetter_49 (__VALUE_TO_SET :  java.lang.Object) : void {
      agreement.Currency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on TypeKeyInput (id=PayableBasis_Input) at AgreementScreen.pcf: line 123, column 49
    function defaultSetter_69 (__VALUE_TO_SET :  java.lang.Object) : void {
      agreement.PayableBasis = (__VALUE_TO_SET as typekey.PayableBasisType)
    }
    
    // 'value' attribute on TextInput (id=Commission_Input) at AgreementScreen.pcf: line 131, column 45
    function defaultSetter_74 (__VALUE_TO_SET :  java.lang.Object) : void {
      agreement.Commission = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'editable' attribute on TypeKeyInput (id=Currency_Input) at AgreementScreen.pcf: line 101, column 68
    function editable_46 () : java.lang.Boolean {
      return agreement.Status == TC_DRAFT
    }
    
    // 'editable' attribute on TextInput (id=Commission_Input) at AgreementScreen.pcf: line 131, column 45
    function editable_72 () : java.lang.Boolean {
      return not agreement.CommissionAdjusted
    }
    
    // 'initialValue' attribute on Variable at AgreementScreen.pcf: line 16, column 58
    function initialValue_0 () : gw.web.reinsurance.AgreementScreenUIHelper {
      return new gw.web.reinsurance.AgreementScreenUIHelper(agreement, isInPopup)
    }
    
    // EditButtons at AgreementScreen.pcf: line 21, column 225
    function label_4 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'mode' attribute on InputSetRef at AgreementScreen.pcf: line 110, column 47
    function mode_62 () : java.lang.Object {
      return screenHelper.coverageMode()
    }
    
    // 'mode' attribute on InputSetRef at AgreementScreen.pcf: line 117, column 54
    function mode_67 () : java.lang.Object {
      return agreement.PremiumAndCoverageMode()
    }
    
    // 'mode' attribute on InputSetRef at AgreementScreen.pcf: line 173, column 48
    function mode_98 () : java.lang.Object {
      return screenHelper.otherTermMode()
    }
    
    // 'onChange' attribute on PostOnChange at AgreementScreen.pcf: line 77, column 92
    function onChange_30 () : void {
      agreement.setEffectiveDateWithDefaultTime(agreement.EffectiveDate)
    }
    
    // 'onChange' attribute on PostOnChange at AgreementScreen.pcf: line 87, column 94
    function onChange_35 () : void {
      agreement.setExpirationDateWithDefaultTime(agreement.ExpirationDate)
    }
    
    // 'onChange' attribute on PostOnChange at AgreementScreen.pcf: line 103, column 58
    function onChange_45 () : void {
      agreement.resetMonetaryAmounts()
    }
    
    // 'onPick' attribute on PickerMenuItem (id=NewCompany) at AgreementScreen.pcf: line 160, column 51
    function onPick_85 (PickedValue :  Contact) : void {
      agreement.Broker = PickedValue
    }
    
    // 'pickLocation' attribute on AddMenuItem (id=NewCompany) at AgreementScreen.pcf: line 194, column 86
    function pickLocation_100 () : void {
      NewContactPopup.push(typekey.ContactType.TC_COMPANY)
    }
    
    // 'pickLocation' attribute on AddMenuItem (id=ParticipantSearch) at AgreementScreen.pcf: line 200, column 87
    function pickLocation_102 () : void {
      ContactSearchPopup.push({typekey.Contact.TC_COMPANY})
    }
    
    // 'pickValue' attribute on EditButtons at AgreementScreen.pcf: line 21, column 225
    function pickValue_1 () : RIAgreement {
      return isInPopup ? agreement : null
    }
    
    // 'validationExpression' attribute on TextInput (id=AgreementNumber_Input) at AgreementScreen.pcf: line 58, column 46
    function validationExpression_17 () : java.lang.Object {
      return screenHelper.validateAgreementNumberIsUnique()
    }
    
    // 'validationExpression' attribute on DateInput (id=ExpDate_Input) at AgreementScreen.pcf: line 85, column 44
    function validationExpression_36 () : java.lang.Object {
      return agreement.ExpirationDate <= agreement.EffectiveDate ? DisplayKey.get("Web.Reinsurance.Treaty.ExpDateValidation") : null
    }
    
    // 'value' attribute on TextInput (id=AgreementNumber_Input) at AgreementScreen.pcf: line 58, column 46
    function valueRoot_20 () : java.lang.Object {
      return agreement
    }
    
    // 'value' attribute on TextInput (id=AgreementNumber_Input) at AgreementScreen.pcf: line 58, column 46
    function value_18 () : java.lang.String {
      return agreement.AgreementNumber
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at AgreementScreen.pcf: line 64, column 35
    function value_23 () : java.lang.String {
      return agreement.Name
    }
    
    // 'value' attribute on TypeKeyInput (id=Subtype_Input) at AgreementScreen.pcf: line 69, column 44
    function value_27 () : typekey.RIAgreement {
      return agreement.Subtype
    }
    
    // 'value' attribute on DateInput (id=EffDate_Input) at AgreementScreen.pcf: line 75, column 43
    function value_31 () : java.util.Date {
      return agreement.EffectiveDate
    }
    
    // 'value' attribute on DateInput (id=ExpDate_Input) at AgreementScreen.pcf: line 85, column 44
    function value_37 () : java.util.Date {
      return agreement.ExpirationDate
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at AgreementScreen.pcf: line 93, column 47
    function value_42 () : typekey.ContractStatus {
      return agreement.Status
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at AgreementScreen.pcf: line 101, column 68
    function value_48 () : typekey.Currency {
      return agreement.Currency
    }
    
    // 'value' attribute on TypeKeyInput (id=PayableBasis_Input) at AgreementScreen.pcf: line 123, column 49
    function value_68 () : typekey.PayableBasisType {
      return agreement.PayableBasis
    }
    
    // 'value' attribute on TextInput (id=Commission_Input) at AgreementScreen.pcf: line 131, column 45
    function value_73 () : java.math.BigDecimal {
      return agreement.Commission
    }
    
    // 'value' attribute on TextInput (id=ChangeBrokerContactButton_Input) at AgreementScreen.pcf: line 154, column 68
    function value_92 () : java.lang.Comparable<java.lang.Object> {
      return agreement.Broker == null ? " " : agreement.Broker
    }
    
    // 'visible' attribute on PanelRef at AgreementScreen.pcf: line 216, column 46
    function visible_105 () : java.lang.Boolean {
      return agreement typeis Treaty
    }
    
    // 'editVisible' attribute on EditButtons at AgreementScreen.pcf: line 21, column 225
    function visible_2 () : java.lang.Boolean {
      return (agreement typeis Treaty) ? (perm.System.editreinsuranceprogram and not agreement.Active) or (perm.System.editreinsuranceactiveprogram and agreement.Active) : perm.System.editreinsurancefacagreement
    }
    
    // 'visible' attribute on TypeKeyInput (id=Currency_Input) at AgreementScreen.pcf: line 101, column 68
    function visible_47 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    // 'visible' attribute on ToolbarButton (id=ValidateButton) at AgreementScreen.pcf: line 27, column 123
    function visible_5 () : java.lang.Boolean {
      return agreement typeis Treaty ? perm.System.editreinsuranceprogram : perm.System.editreinsurancefacagreement
    }
    
    // 'visible' attribute on Link (id=UnAdjust) at AgreementScreen.pcf: line 146, column 53
    function visible_80 () : java.lang.Boolean {
      return agreement.CommissionAdjusted
    }
    
    // 'visible' attribute on PickerMenuItem (id=NewCompany) at AgreementScreen.pcf: line 160, column 51
    function visible_82 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    property get agreement () : RIAgreement {
      return getRequireValue("agreement", 0) as RIAgreement
    }
    
    property set agreement ($arg :  RIAgreement) {
      setRequireValue("agreement", 0, $arg)
    }
    
    property get isInPopup () : boolean {
      return getRequireValue("isInPopup", 0) as java.lang.Boolean
    }
    
    property set isInPopup ($arg :  boolean) {
      setRequireValue("isInPopup", 0, $arg)
    }
    
    property get screenHelper () : gw.web.reinsurance.AgreementScreenUIHelper {
      return getVariableValue("screenHelper", 0) as gw.web.reinsurance.AgreementScreenUIHelper
    }
    
    property set screenHelper ($arg :  gw.web.reinsurance.AgreementScreenUIHelper) {
      setVariableValue("screenHelper", 0, $arg)
    }
    
    
  }
  
  
}