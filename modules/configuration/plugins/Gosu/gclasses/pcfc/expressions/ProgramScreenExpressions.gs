package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/ProgramScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ProgramScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/ProgramScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ProgramScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=MakeActiveButton) at ProgramScreen.pcf: line 40, column 55
    function action_11 () : void {
      gw.web.admin.ReinsuranceUIHelper.makeActive(program)
    }
    
    // 'action' attribute on ToolbarButton (id=DeleteButton) at ProgramScreen.pcf: line 47, column 55
    function action_14 () : void {
      gw.web.admin.ReinsuranceUIHelper.delete(program); ProgramSearchPage.go()
    }
    
    // 'action' attribute on ToolbarButton (id=UpdateActive) at ProgramScreen.pcf: line 24, column 111
    function action_3 () : void {
      gw.web.admin.ReinsuranceUIHelper.updateActiveProgram(program, CurrentLocation)
    }
    
    // 'action' attribute on ButtonInput (id=RecalcImpliedNetRetention_Input) at ProgramScreen.pcf: line 119, column 57
    function action_59 () : void {
      impliedNetRetention = program.calculateImpliedNetRetention()
    }
    
    // 'action' attribute on ToolbarButton (id=VerifyButton) at ProgramScreen.pcf: line 33, column 55
    function action_8 () : void {
      program.validate(); gw.api.util.LocationUtil.addRequestScopedInfoMessage(DisplayKey.get("Web.Reinsurance.Program.Validation.VerificationPasses"))
    }
    
    // 'available' attribute on ToolbarButton (id=DeleteButton) at ProgramScreen.pcf: line 47, column 55
    function available_12 () : java.lang.Boolean {
      return !program.Active
    }
    
    // 'available' attribute on ButtonInput (id=RecalcImpliedNetRetention_Input) at ProgramScreen.pcf: line 119, column 57
    function available_57 () : java.lang.Boolean {
      return currenciesAreConsistent
    }
    
    // 'available' attribute on ToolbarButton (id=MakeActiveButton) at ProgramScreen.pcf: line 40, column 55
    function available_9 () : java.lang.Boolean {
      return !program.Active 
    }
    
    // 'def' attribute on PanelRef (id=PerRisk) at ProgramScreen.pcf: line 134, column 24
    function def_onEnter_65 (def :  pcf.TreatiesLV) : void {
      def.onEnter(program, true /*per risk*/)
    }
    
    // 'def' attribute on PanelRef (id=Aggregate) at ProgramScreen.pcf: line 154, column 26
    function def_onEnter_68 (def :  pcf.TreatiesLV) : void {
      def.onEnter(program, false/*aggregate*/)
    }
    
    // 'def' attribute on PanelRef at ProgramScreen.pcf: line 176, column 52
    function def_onEnter_70 (def :  pcf.RICoverageGroupsPanelSet) : void {
      def.onEnter(program)
    }
    
    // 'def' attribute on PanelRef at ProgramScreen.pcf: line 180, column 134
    function def_onEnter_72 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(program, { "Name" }, { DisplayKey.get("Web.Reinsurance.NewProgram.Input.Name") })
    }
    
    // 'def' attribute on PanelRef (id=PerRisk) at ProgramScreen.pcf: line 134, column 24
    function def_refreshVariables_66 (def :  pcf.TreatiesLV) : void {
      def.refreshVariables(program, true /*per risk*/)
    }
    
    // 'def' attribute on PanelRef (id=Aggregate) at ProgramScreen.pcf: line 154, column 26
    function def_refreshVariables_69 (def :  pcf.TreatiesLV) : void {
      def.refreshVariables(program, false/*aggregate*/)
    }
    
    // 'def' attribute on PanelRef at ProgramScreen.pcf: line 176, column 52
    function def_refreshVariables_71 (def :  pcf.RICoverageGroupsPanelSet) : void {
      def.refreshVariables(program)
    }
    
    // 'def' attribute on PanelRef at ProgramScreen.pcf: line 180, column 134
    function def_refreshVariables_73 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(program, { "Name" }, { DisplayKey.get("Web.Reinsurance.NewProgram.Input.Name") })
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at ProgramScreen.pcf: line 57, column 33
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      program.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at ProgramScreen.pcf: line 64, column 41
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      program.EffectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=ExpirationDate_Input) at ProgramScreen.pcf: line 75, column 42
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      program.ExpirationDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at ProgramScreen.pcf: line 92, column 68
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      program.Currency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TargetNetRetention_Input) at ProgramScreen.pcf: line 104, column 47
    function defaultSetter_48 (__VALUE_TO_SET :  java.lang.Object) : void {
      program.TargetMaxRetention = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=SingleRiskMaximum_Input) at ProgramScreen.pcf: line 111, column 46
    function defaultSetter_53 (__VALUE_TO_SET :  java.lang.Object) : void {
      program.SingleRiskMaximum = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'editable' attribute on DateInput (id=EffectiveDate_Input) at ProgramScreen.pcf: line 64, column 41
    function editable_20 () : java.lang.Boolean {
      return program.Status == TC_DRAFT
    }
    
    // 'initialValue' attribute on Variable at ProgramScreen.pcf: line 13, column 45
    function initialValue_0 () : gw.pl.currency.MonetaryAmount {
      return gw.web.admin.ReinsuranceUIHelper.updateImpliedNetRetention(program)
    }
    
    // 'initialValue' attribute on Variable at ProgramScreen.pcf: line 18, column 23
    function initialValue_1 () : boolean {
      return program.agreementCurrenciesAreConsistent()
    }
    
    // EditButtons at ProgramScreen.pcf: line 27, column 84
    function label_6 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'onChange' attribute on PostOnChange at ProgramScreen.pcf: line 67, column 88
    function onChange_19 () : void {
      program.setEffectiveDateWithDefaultTime(program.EffectiveDate)
    }
    
    // 'onChange' attribute on PostOnChange at ProgramScreen.pcf: line 78, column 90
    function onChange_28 () : void {
      program.setExpirationDateWithDefaultTime(program.ExpirationDate)
    }
    
    // 'onChange' attribute on PostOnChange at ProgramScreen.pcf: line 94, column 110
    function onChange_38 () : void {
      gw.web.admin.ReinsuranceUIHelper.updateCurrency(program); impliedNetRetention = null
    }
    
    // 'pickLocation' attribute on AddButton (id=Add) at ProgramScreen.pcf: line 143, column 96
    function pickLocation_64 () : void {
      AgreementSearchPopup.push(1, program.Currency, program.Treaties)
    }
    
    // 'pickLocation' attribute on AddButton (id=Add) at ProgramScreen.pcf: line 163, column 96
    function pickLocation_67 () : void {
      AgreementSearchPopup.push(2, program.Currency, program.Treaties)
    }
    
    // 'validationExpression' attribute on DateInput (id=EffectiveDate_Input) at ProgramScreen.pcf: line 64, column 41
    function validationExpression_21 () : java.lang.Object {
      return program.EffectiveDate <= program.ExpirationDate ? null : DisplayKey.get("Web.Reinsurance.Validation.EffectiveAfterExpiration")
    }
    
    // 'validationExpression' attribute on DateInput (id=ExpirationDate_Input) at ProgramScreen.pcf: line 75, column 42
    function validationExpression_29 () : java.lang.Object {
      return program.ExpirationDate < program.EffectiveDate ? DisplayKey.get("Web.Reinsurance.Treaty.ExpDateValidation") : null
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at ProgramScreen.pcf: line 57, column 33
    function valueRoot_17 () : java.lang.Object {
      return program
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at ProgramScreen.pcf: line 57, column 33
    function value_15 () : java.lang.String {
      return program.Name
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at ProgramScreen.pcf: line 64, column 41
    function value_22 () : java.util.Date {
      return program.EffectiveDate
    }
    
    // 'value' attribute on DateInput (id=ExpirationDate_Input) at ProgramScreen.pcf: line 75, column 42
    function value_30 () : java.util.Date {
      return program.ExpirationDate
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at ProgramScreen.pcf: line 84, column 47
    function value_35 () : typekey.ContractStatus {
      return program.Status
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at ProgramScreen.pcf: line 92, column 68
    function value_41 () : typekey.Currency {
      return program.Currency
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TargetNetRetention_Input) at ProgramScreen.pcf: line 104, column 47
    function value_47 () : gw.pl.currency.MonetaryAmount {
      return program.TargetMaxRetention
    }
    
    // 'value' attribute on MonetaryAmountInput (id=SingleRiskMaximum_Input) at ProgramScreen.pcf: line 111, column 46
    function value_52 () : gw.pl.currency.MonetaryAmount {
      return program.SingleRiskMaximum
    }
    
    // 'value' attribute on MonetaryAmountInput (id=ImpliedRetention_Input) at ProgramScreen.pcf: line 124, column 40
    function value_62 () : gw.pl.currency.MonetaryAmount {
      return impliedNetRetention
    }
    
    // 'visible' attribute on ToolbarButton (id=UpdateActive) at ProgramScreen.pcf: line 24, column 111
    function visible_2 () : java.lang.Boolean {
      return perm.System.editreinsuranceactiveprogram and program.Active and CurrentLocation.InEditMode
    }
    
    // 'editVisible' attribute on EditButtons at ProgramScreen.pcf: line 27, column 84
    function visible_4 () : java.lang.Boolean {
      return (perm.System.editreinsuranceprogram and not program.Active) or (perm.System.editreinsuranceactiveprogram and program.Active)
    }
    
    // 'visible' attribute on TypeKeyInput (id=Currency_Input) at ProgramScreen.pcf: line 92, column 68
    function visible_40 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    // 'updateVisible' attribute on EditButtons at ProgramScreen.pcf: line 27, column 84
    function visible_5 () : java.lang.Boolean {
      return perm.System.editreinsuranceprogram and not program.Active
    }
    
    // 'visible' attribute on ToolbarButton (id=VerifyButton) at ProgramScreen.pcf: line 33, column 55
    function visible_7 () : java.lang.Boolean {
      return perm.System.editreinsuranceprogram
    }
    
    property get currenciesAreConsistent () : boolean {
      return getVariableValue("currenciesAreConsistent", 0) as java.lang.Boolean
    }
    
    property set currenciesAreConsistent ($arg :  boolean) {
      setVariableValue("currenciesAreConsistent", 0, $arg)
    }
    
    property get impliedNetRetention () : gw.pl.currency.MonetaryAmount {
      return getVariableValue("impliedNetRetention", 0) as gw.pl.currency.MonetaryAmount
    }
    
    property set impliedNetRetention ($arg :  gw.pl.currency.MonetaryAmount) {
      setVariableValue("impliedNetRetention", 0, $arg)
    }
    
    property get program () : RIProgram {
      return getRequireValue("program", 0) as RIProgram
    }
    
    property set program ($arg :  RIProgram) {
      setRequireValue("program", 0, $arg)
    }
    
    
  }
  
  
}