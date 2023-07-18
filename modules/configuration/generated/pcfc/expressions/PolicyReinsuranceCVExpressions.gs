package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/PolicyReinsuranceCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyReinsuranceCVExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/PolicyReinsuranceCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CardViewPanelExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerMenuItem (id=LinkExisting) at PolicyReinsuranceCV.pcf: line 303, column 82
    function action_137 () : void {
      AgreementSearchPopup.push(ririsk)
    }
    
    // 'action' attribute on Link (id=ProximitySearchButton) at PolicyReinsuranceCV.pcf: line 138, column 76
    function action_51 () : void {
      gw.web.admin.ReinsuranceUIHelper.doProximitySearch(slice)
    }
    
    // 'action' attribute on Link (id=CededPremiumsButton) at PolicyReinsuranceCV.pcf: line 182, column 126
    function action_83 () : void {
      pcf.RICededPremiumsPopup.push(policyPeriod)
    }
    
    // 'action' attribute on PickerMenuItem (id=LinkExisting) at PolicyReinsuranceCV.pcf: line 303, column 82
    function action_dest_138 () : pcf.api.Destination {
      return pcf.AgreementSearchPopup.createDestination(ririsk)
    }
    
    // 'action' attribute on Link (id=CededPremiumsButton) at PolicyReinsuranceCV.pcf: line 182, column 126
    function action_dest_84 () : pcf.api.Destination {
      return pcf.RICededPremiumsPopup.createDestination(policyPeriod)
    }
    
    // 'currency' attribute on MonetaryAmountInput (id=TIV_Input) at PolicyReinsuranceCV.pcf: line 148, column 64
    function currency_56 () : typekey.Currency {
      return ririsk.Currency
    }
    
    // 'def' attribute on PanelRef (id=PerRisksLV) at PolicyReinsuranceCV.pcf: line 273, column 39
    function def_onEnter_142 (def :  pcf.RIAgreementsLV) : void {
      def.onEnter(ririsk, true)
    }
    
    // 'def' attribute on PanelRef (id=AggregatesLV) at PolicyReinsuranceCV.pcf: line 319, column 41
    function def_onEnter_144 (def :  pcf.RIAgreementsLV) : void {
      def.onEnter(ririsk, false)
    }
    
    // 'def' attribute on PanelRef (id=PerRisksLV) at PolicyReinsuranceCV.pcf: line 273, column 39
    function def_refreshVariables_143 (def :  pcf.RIAgreementsLV) : void {
      def.refreshVariables(ririsk, true)
    }
    
    // 'def' attribute on PanelRef (id=AggregatesLV) at PolicyReinsuranceCV.pcf: line 319, column 41
    function def_refreshVariables_145 (def :  pcf.RIAgreementsLV) : void {
      def.refreshVariables(ririsk, false)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=GrossRetention_Input) at PolicyReinsuranceCV.pcf: line 225, column 57
    function defaultSetter_101 (__VALUE_TO_SET :  java.lang.Object) : void {
      ririsk.GrossRetention = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on TextInput (id=LocationGroup_Input) at PolicyReinsuranceCV.pcf: line 129, column 58
    function defaultSetter_45 (__VALUE_TO_SET :  java.lang.Object) : void {
      (slice as LocationRisk).LocationRiskGroup = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=ProbableMaxLossPct_Input) at PolicyReinsuranceCV.pcf: line 156, column 56
    function defaultSetter_63 (__VALUE_TO_SET :  java.lang.Object) : void {
      ririsk.ProbableMaxLossPct = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextAreaInput (id=ProbableMaxLossReason_Input) at PolicyReinsuranceCV.pcf: line 173, column 57
    function defaultSetter_77 (__VALUE_TO_SET :  java.lang.Object) : void {
      ririsk.ProbableMaxLossReason = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextInput (id=LocationGroup_Input) at PolicyReinsuranceCV.pcf: line 129, column 58
    function editable_42 () : java.lang.Boolean {
      return perm.System.editreinsuranceforpolicybasic
    }
    
    // 'editable' attribute on TextInput (id=ProbableMaxLossPct_Input) at PolicyReinsuranceCV.pcf: line 156, column 56
    function editable_60 () : java.lang.Boolean {
      return perm.System.editreinsuranceforpolicyadvanced
    }
    
    // 'editable' attribute on MonetaryAmountInput (id=GrossRetention_Input) at PolicyReinsuranceCV.pcf: line 225, column 57
    function editable_98 () : java.lang.Boolean {
      return ririsk.Attachments.ProportionalTreatyAttachmentsForCalc.HasElements and perm.System.editreinsuranceforpolicyadvanced
    }
    
    // 'initialValue' attribute on Variable at PolicyReinsuranceCV.pcf: line 79, column 60
    function initialValue_23 () : java.util.List<java.util.Date> {
      return gw.web.admin.ReinsuranceUIHelper.getAllRIRiskVersions(selectedRisk, riModuleOn, policyPeriod)
    }
    
    // 'initialValue' attribute on Variable at PolicyReinsuranceCV.pcf: line 84, column 38
    function initialValue_24 () : java.util.Date {
      return gw.web.admin.ReinsuranceUIHelper.resetSliceDate(slice, selectedRisk, sliceDate, riModuleOn, asOfDate, policyPeriod)
    }
    
    // 'initialValue' attribute on Variable at PolicyReinsuranceCV.pcf: line 89, column 35
    function initialValue_25 () : Reinsurable {
      return gw.web.admin.ReinsuranceUIHelper.getReinsurableSlice(selectedRisk, sliceDate)
    }
    
    // 'initialValue' attribute on Variable at PolicyReinsuranceCV.pcf: line 94, column 37
    function initialValue_26 () : entity.RIRisk {
      return (gw.web.admin.ReinsuranceUIHelper.shouldInitializeRiskDetailVariables(selectedRisk, riModuleOn) ? selectedRisk.RIRisk.VersionList.getVersionAsOf(sliceDate) : null)
    }
    
    // 'onChange' attribute on PostOnChange at PolicyReinsuranceCV.pcf: line 158, column 91
    function onChange_59 () : void {
      gw.reinsurance.risk.RIRiskValidation.validateUI(ririsk)
    }
    
    // 'onChange' attribute on PostOnChange at PolicyReinsuranceCV.pcf: line 227, column 97
    function onChange_97 () : void {
      gw.reinsurance.risk.RIRiskValidation.validateUI(ririsk)
    }
    
    // 'onPick' attribute on PickerMenuItem (id=LinkExisting) at PolicyReinsuranceCV.pcf: line 303, column 82
    function onPick_139 (PickedValue :  RIAgreement[]) : void {
      gw.web.admin.ReinsuranceUIHelper.attachFacs(ririsk, PickedValue)
    }
    
    // 'required' attribute on MonetaryAmountInput (id=GrossRetention_Input) at PolicyReinsuranceCV.pcf: line 225, column 57
    function required_99 () : java.lang.Boolean {
      return ririsk.Attachments.ProportionalTreatyAttachmentsForCalc.HasElements
    }
    
    // 'value' attribute on TypeKeyInput (id=CoverageGroup_Input) at PolicyReinsuranceCV.pcf: line 123, column 62
    function valueRoot_40 () : java.lang.Object {
      return slice
    }
    
    // 'value' attribute on TextInput (id=LocationGroup_Input) at PolicyReinsuranceCV.pcf: line 129, column 58
    function valueRoot_46 () : java.lang.Object {
      return (slice as LocationRisk)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TIV_Input) at PolicyReinsuranceCV.pcf: line 148, column 64
    function valueRoot_55 () : java.lang.Object {
      return ririsk
    }
    
    // 'value' attribute on MonetaryAmountInput (id=GrossRetention_Input) at PolicyReinsuranceCV.pcf: line 225, column 57
    function value_100 () : gw.pl.currency.MonetaryAmount {
      return ririsk.GrossRetention
    }
    
    // 'value' attribute on TextInput (id=RetainedPropShare_Input) at PolicyReinsuranceCV.pcf: line 234, column 61
    function value_106 () : java.math.BigDecimal {
      return ririsk.RetainedPropShare
    }
    
    // 'value' attribute on MonetaryAmountInput (id=PropRetention_Input) at PolicyReinsuranceCV.pcf: line 240, column 65
    function value_109 () : gw.pl.currency.MonetaryAmount {
      return ririsk.ProportionalRetention
    }
    
    // 'value' attribute on MonetaryAmountInput (id=CoveredByNXOL_Input) at PolicyReinsuranceCV.pcf: line 248, column 56
    function value_113 () : gw.pl.currency.MonetaryAmount {
      return ririsk.NXOLCoverage
    }
    
    // 'value' attribute on MonetaryAmountInput (id=NetRetention_Input) at PolicyReinsuranceCV.pcf: line 254, column 55
    function value_117 () : gw.pl.currency.MonetaryAmount {
      return ririsk.NetRetention
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TargetMaxRetention_Input) at PolicyReinsuranceCV.pcf: line 262, column 62
    function value_121 () : gw.pl.currency.MonetaryAmount {
      return ririsk.TargetMaxRetention
    }
    
    // 'value' attribute on MonetaryAmountInput (id=FacRINeeded_Input) at PolicyReinsuranceCV.pcf: line 268, column 55
    function value_125 () : gw.pl.currency.MonetaryAmount {
      return ririsk.FacRINeeded
    }
    
    // 'value' attribute on MenuItemIterator (id=NewFac) at PolicyReinsuranceCV.pcf: line 287, column 85
    function value_135 () : java.util.List<typekey.RIAgreement> {
      return typekey.RIAgreement.getTypeKeys(false).where(\ r -> r.hasCategory(typekey.ArrangementType.TC_FACULTATIVE) )
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at PolicyReinsuranceCV.pcf: line 118, column 53
    function value_37 () : entity.Reinsurable {
      return slice
    }
    
    // 'value' attribute on TypeKeyInput (id=CoverageGroup_Input) at PolicyReinsuranceCV.pcf: line 123, column 62
    function value_39 () : typekey.RICoverageGroupType {
      return slice.CoverageGroup
    }
    
    // 'value' attribute on TextInput (id=LocationGroup_Input) at PolicyReinsuranceCV.pcf: line 129, column 58
    function value_44 () : java.lang.String {
      return (slice as LocationRisk).LocationRiskGroup
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TIV_Input) at PolicyReinsuranceCV.pcf: line 148, column 64
    function value_54 () : gw.pl.currency.MonetaryAmount {
      return ririsk.TotalInsuredValue
    }
    
    // 'value' attribute on TextInput (id=ProbableMaxLossPct_Input) at PolicyReinsuranceCV.pcf: line 156, column 56
    function value_62 () : java.math.BigDecimal {
      return ririsk.ProbableMaxLossPct
    }
    
    // 'value' attribute on MonetaryAmountInput (id=ProbableMaxLoss_Input) at PolicyReinsuranceCV.pcf: line 166, column 57
    function value_69 () : gw.pl.currency.MonetaryAmount {
      return ririsk.TotalRisk
    }
    
    // 'value' attribute on TextAreaInput (id=ProbableMaxLossReason_Input) at PolicyReinsuranceCV.pcf: line 173, column 57
    function value_76 () : java.lang.String {
      return ririsk.ProbableMaxLossReason
    }
    
    // 'value' attribute on MonetaryAmountInput (id=CoveredByXOL_Input) at PolicyReinsuranceCV.pcf: line 209, column 55
    function value_89 () : gw.pl.currency.MonetaryAmount {
      return ririsk.XOLCoverage
    }
    
    // 'value' attribute on MonetaryAmountInput (id=SharedAmongProp_Input) at PolicyReinsuranceCV.pcf: line 215, column 59
    function value_93 () : gw.pl.currency.MonetaryAmount {
      return ririsk.SharedAmongProp
    }
    
    // 'visible' attribute on ToolbarButton (id=AddFacButton) at PolicyReinsuranceCV.pcf: line 279, column 122
    function visible_140 () : java.lang.Boolean {
      return perm.System.editreinsurancefacagreement or perm.System.editreinsuranceforpolicybasic
    }
    
    // 'visible' attribute on PanelRef at PolicyReinsuranceCV.pcf: line 187, column 42
    function visible_146 () : java.lang.Boolean {
      return ririsk != null
    }
    
    // 'visible' attribute on Card (id=RiskDetail) at PolicyReinsuranceCV.pcf: line 98, column 120
    function visible_147 () : java.lang.Boolean {
      return gw.web.admin.ReinsuranceUIHelper.shouldInitializeRiskDetailVariables(selectedRisk, riModuleOn)
    }
    
    // 'visible' attribute on TextInput (id=LocationGroup_Input) at PolicyReinsuranceCV.pcf: line 129, column 58
    function visible_43 () : java.lang.Boolean {
      return slice typeis LocationRisk
    }
    
    // 'visible' attribute on MonetaryAmountInput (id=TIV_Input) at PolicyReinsuranceCV.pcf: line 148, column 64
    function visible_53 () : java.lang.Boolean {
      return slice.TotalInsuredValue != null
    }
    
    // 'visible' attribute on TextInput (id=ProbableMaxLossPct_Input) at PolicyReinsuranceCV.pcf: line 156, column 56
    function visible_61 () : java.lang.Boolean {
      return ririsk.TotalRisk != null
    }
    
    // 'visible' attribute on Link (id=CededPremiumsButton) at PolicyReinsuranceCV.pcf: line 182, column 126
    function visible_82 () : java.lang.Boolean {
      return perm.User.DevAllAccess or perm.System.internaltools or perm.System.viewreinsuranceforpolicy
    }
    
    property get ririsk () : entity.RIRisk {
      return getVariableValue("ririsk", 2) as entity.RIRisk
    }
    
    property set ririsk ($arg :  entity.RIRisk) {
      setVariableValue("ririsk", 2, $arg)
    }
    
    property get slice () : Reinsurable {
      return getVariableValue("slice", 2) as Reinsurable
    }
    
    property set slice ($arg :  Reinsurable) {
      setVariableValue("slice", 2, $arg)
    }
    
    property get sliceDate () : java.util.Date {
      return getVariableValue("sliceDate", 2) as java.util.Date
    }
    
    property set sliceDate ($arg :  java.util.Date) {
      setVariableValue("sliceDate", 2, $arg)
    }
    
    property get versions () : java.util.List<java.util.Date> {
      return getVariableValue("versions", 2) as java.util.List<java.util.Date>
    }
    
    property set versions ($arg :  java.util.List<java.util.Date>) {
      setVariableValue("versions", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/PolicyReinsuranceCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends CardViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerMenuItem (id=NewFac) at PolicyReinsuranceCV.pcf: line 294, column 86
    function action_131 () : void {
      NewAgreementPopup.push(facAgreementType, ririsk)
    }
    
    // 'action' attribute on PickerMenuItem (id=NewFac) at PolicyReinsuranceCV.pcf: line 294, column 86
    function action_dest_132 () : pcf.api.Destination {
      return pcf.NewAgreementPopup.createDestination(facAgreementType, ririsk)
    }
    
    // 'label' attribute on PickerMenuItem (id=NewFac) at PolicyReinsuranceCV.pcf: line 294, column 86
    function label_133 () : java.lang.Object {
      return DisplayKey.get("Web.Reinsurance.New", facAgreementType)
    }
    
    // 'onPick' attribute on PickerMenuItem (id=NewFac) at PolicyReinsuranceCV.pcf: line 294, column 86
    function onPick_134 (PickedValue :  RIAgreement) : void {
      gw.web.admin.ReinsuranceUIHelper.attachFacs(ririsk, {PickedValue})
    }
    
    // 'visible' attribute on PickerMenuItem (id=NewFac) at PolicyReinsuranceCV.pcf: line 294, column 86
    function visible_130 () : java.lang.Boolean {
      return perm.System.editreinsuranceforpolicybasic
    }
    
    property get facAgreementType () : typekey.RIAgreement {
      return getIteratedValue(3) as typekey.RIAgreement
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/PolicyReinsuranceCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'currency' attribute on MonetaryAmountCell (id=TIV_Cell) at PolicyReinsuranceCV.pcf: line 64, column 53
    function currency_15 () : typekey.Currency {
      return riRisk.CoverageCurrency
    }
    
    // 'currency' attribute on MonetaryAmountCell (id=ProbableMaxLoss_Cell) at PolicyReinsuranceCV.pcf: line 70, column 45
    function currency_19 () : typekey.Currency {
      return ririsk.Currency
    }
    
    // 'initialValue' attribute on Variable at PolicyReinsuranceCV.pcf: line 44, column 39
    function initialValue_7 () : entity.RIRisk {
      return riRisk.RIRisk
    }
    
    // RowIterator (id=RIRisks) at PolicyReinsuranceCV.pcf: line 39, column 68
    function initializeVariables_21 () : void {
        ririsk = riRisk.RIRisk;

    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageGroup_Cell) at PolicyReinsuranceCV.pcf: line 58, column 60
    function valueRoot_11 () : java.lang.Object {
      return riRisk
    }
    
    // 'value' attribute on MonetaryAmountCell (id=ProbableMaxLoss_Cell) at PolicyReinsuranceCV.pcf: line 70, column 45
    function valueRoot_18 () : java.lang.Object {
      return ririsk
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageGroup_Cell) at PolicyReinsuranceCV.pcf: line 58, column 60
    function value_10 () : typekey.RICoverageGroupType {
      return riRisk.CoverageGroup
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TIV_Cell) at PolicyReinsuranceCV.pcf: line 64, column 53
    function value_13 () : gw.pl.currency.MonetaryAmount {
      return riRisk.TotalInsuredValue
    }
    
    // 'value' attribute on MonetaryAmountCell (id=ProbableMaxLoss_Cell) at PolicyReinsuranceCV.pcf: line 70, column 45
    function value_17 () : gw.pl.currency.MonetaryAmount {
      return ririsk.TotalRisk
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at PolicyReinsuranceCV.pcf: line 53, column 51
    function value_8 () : entity.Reinsurable {
      return riRisk
    }
    
    property get riRisk () : entity.Reinsurable {
      return getIteratedValue(2) as entity.Reinsurable
    }
    
    property get ririsk () : entity.RIRisk {
      return getVariableValue("ririsk", 2) as entity.RIRisk
    }
    
    property set ririsk ($arg :  entity.RIRisk) {
      setVariableValue("ririsk", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/PolicyReinsuranceCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends PolicyReinsuranceCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'selectionOnEnter' attribute on ListDetailPanel at PolicyReinsuranceCV.pcf: line 32, column 39
    function selectionOnEnter_148 () : java.lang.Object {
      return policyPeriod.AllReinsurables.sortBy(\ r -> r.DisplayName ).first()
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyReinsuranceCV.pcf: line 47, column 32
    function sortBy_2 (riRisk :  entity.Reinsurable) : java.lang.Object {
      return riRisk.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at PolicyReinsuranceCV.pcf: line 53, column 51
    function sortValue_3 (riRisk :  entity.Reinsurable) : java.lang.Object {
      var ririsk : entity.RIRisk = (riRisk.RIRisk)
return riRisk
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageGroup_Cell) at PolicyReinsuranceCV.pcf: line 58, column 60
    function sortValue_4 (riRisk :  entity.Reinsurable) : java.lang.Object {
      var ririsk : entity.RIRisk = (riRisk.RIRisk)
return riRisk.CoverageGroup
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TIV_Cell) at PolicyReinsuranceCV.pcf: line 64, column 53
    function sortValue_5 (riRisk :  entity.Reinsurable) : java.lang.Object {
      var ririsk : entity.RIRisk = (riRisk.RIRisk)
return riRisk.TotalInsuredValue
    }
    
    // 'value' attribute on MonetaryAmountCell (id=ProbableMaxLoss_Cell) at PolicyReinsuranceCV.pcf: line 70, column 45
    function sortValue_6 (riRisk :  entity.Reinsurable) : java.lang.Object {
      var ririsk : entity.RIRisk = (riRisk.RIRisk)
return ririsk.TotalRisk
    }
    
    // 'value' attribute on RowIterator (id=RIRisks) at PolicyReinsuranceCV.pcf: line 39, column 68
    function value_22 () : java.util.List<entity.Reinsurable> {
      return policyPeriod.AllReinsurables
    }
    
    property get selectedRisk () : Reinsurable {
      return getCurrentSelection(1) as Reinsurable
    }
    
    property set selectedRisk ($arg :  Reinsurable) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/PolicyReinsuranceCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyReinsuranceCVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at PolicyReinsuranceCV.pcf: line 16, column 56
    function initialValue_0 () : gw.plugin.reinsurance.IReinsurancePlugin {
      return gw.plugin.Plugins.get(gw.plugin.reinsurance.IReinsurancePlugin)
    }
    
    // 'initialValue' attribute on Variable at PolicyReinsuranceCV.pcf: line 21, column 23
    function initialValue_1 () : boolean {
      return gw.api.system.PCConfigParameters.RIModuleOn()
    }
    
    property get asOfDate () : java.util.Date {
      return getRequireValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setRequireValue("asOfDate", 0, $arg)
    }
    
    property get plugin () : gw.plugin.reinsurance.IReinsurancePlugin {
      return getVariableValue("plugin", 0) as gw.plugin.reinsurance.IReinsurancePlugin
    }
    
    property set plugin ($arg :  gw.plugin.reinsurance.IReinsurancePlugin) {
      setVariableValue("plugin", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get riModuleOn () : boolean {
      return getVariableValue("riModuleOn", 0) as java.lang.Boolean
    }
    
    property set riModuleOn ($arg :  boolean) {
      setVariableValue("riModuleOn", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/PolicyReinsuranceCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ViewAsOfExpressionsImpl extends CardViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=ViewAsOf) at PolicyReinsuranceCV.pcf: line 112, column 55
    function action_35 () : void {
      sliceDate = ArgValue
    }
    
    // 'available' attribute on Link (id=ViewAsOf) at PolicyReinsuranceCV.pcf: line 112, column 55
    function available_34 () : java.lang.Boolean {
      return versions.Count > 1
    }
    
    // 'value' attribute on Link (id=ViewAsOf) at PolicyReinsuranceCV.pcf: line 112, column 55
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      ArgValue = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'argInitialValue' attribute on Link (id=ViewAsOf) at PolicyReinsuranceCV.pcf: line 112, column 55
    function initArg_36 () : void {
      ArgValue = sliceDate;
    }
    
    // 'action' attribute on Link (id=ViewAsOf) at PolicyReinsuranceCV.pcf: line 112, column 55
    function onChange_27 () : void {
      sliceDate = ArgValue
    }
    
    // 'argOptionLabel' attribute on Link (id=ViewAsOf) at PolicyReinsuranceCV.pcf: line 112, column 55
    function optionLabel_30 (VALUE :  java.util.Date) : java.lang.String {
      return gw.web.admin.ReinsuranceUIHelper.getRIRiskDateRangeDisplay(selectedRisk, VALUE)
    }
    
    // 'argRange' attribute on Link (id=ViewAsOf) at PolicyReinsuranceCV.pcf: line 112, column 55
    function valueRange_31 () : java.lang.Object {
      return versions
    }
    
    // Link (id=ViewAsOf) at PolicyReinsuranceCV.pcf: line 112, column 55
    function value_28 () : java.util.Date {
      return ArgValue
    }
    
    // 'argRange' attribute on Link (id=ViewAsOf) at PolicyReinsuranceCV.pcf: line 112, column 55
    function verifyValueRangeIsAllowedType_32 ($$arg :  java.util.Date[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'argRange' attribute on Link (id=ViewAsOf) at PolicyReinsuranceCV.pcf: line 112, column 55
    function verifyValueRangeIsAllowedType_32 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'argRange' attribute on Link (id=ViewAsOf) at PolicyReinsuranceCV.pcf: line 112, column 55
    function verifyValueRange_33 () : void {
      var __valueRangeArg = versions
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_32(__valueRangeArg)
    }
    
    property get ArgValue () : java.util.Date {
      return getArgValue(3) as java.util.Date
    }
    
    property set ArgValue ($arg :  java.util.Date) {
      setArgValue(3, $arg)
    }
    
    
  }
  
  
}