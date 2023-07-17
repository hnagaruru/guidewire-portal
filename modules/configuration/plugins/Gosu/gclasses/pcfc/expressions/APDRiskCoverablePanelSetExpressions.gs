package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskCoverablePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDRiskCoverablePanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskCoverablePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDRiskCoverablePanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=addNewCoverableType) at APDRiskCoverablePanelSet.pcf: line 59, column 56
    function action_8 () : void {
      APDNewCoverablePopup.push(riskCoverable)
    }
    
    // 'action' attribute on MenuItem (id=addNewCoverableType) at APDRiskCoverablePanelSet.pcf: line 59, column 56
    function action_dest_9 () : pcf.api.Destination {
      return pcf.APDNewCoverablePopup.createDestination(riskCoverable)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=SplitRiskCoverable) at APDRiskCoverablePanelSet.pcf: line 71, column 79
    function allCheckedRowsAction_11 (CheckedValues :  APDRiskCoverable[], CheckedValuesErrors :  java.util.Map) : void {
      APDSplitRiskPopup.push(CheckedValues.toList())
    }
    
    // 'def' attribute on PanelRef at APDRiskCoverablePanelSet.pcf: line 33, column 94
    function def_onEnter_1 (def :  pcf.APDRiskPanelSet) : void {
      def.onEnter(riskCoverable, coverDefinitionHelper, edition, openForEdit)
    }
    
    // 'def' attribute on PanelRef at APDRiskCoverablePanelSet.pcf: line 33, column 94
    function def_refreshVariables_2 (def :  pcf.APDRiskPanelSet) : void {
      def.refreshVariables(riskCoverable, coverDefinitionHelper, edition, openForEdit)
    }
    
    // 'initialValue' attribute on Variable at APDRiskCoverablePanelSet.pcf: line 26, column 70
    function initialValue_0 () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser()
    }
    
    // 'sortBy' attribute on TextCell (id=riskObjectName_Cell) at APDRiskCoverablePanelSet.pcf: line 94, column 51
    function sortValue_12 (riskObject :  APDRiskCoverable) : java.lang.Object {
      return riskObject.SequenceNumber
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at APDRiskCoverablePanelSet.pcf: line 100, column 33
    function sortValue_13 (riskObject :  APDRiskCoverable) : java.lang.Object {
      return riskObject.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at APDRiskCoverablePanelSet.pcf: line 106, column 33
    function sortValue_15 (riskObject :  APDRiskCoverable) : java.lang.Object {
      return riskObject.ExpirationDate
    }
    
    // 'title' attribute on Card (id=LineDetails) at APDRiskCoverablePanelSet.pcf: line 31, column 43
    function title_3 () : java.lang.String {
      return riskCoverable.DisplayName
    }
    
    // 'title' attribute on Card (id=RiskObjectsCard) at APDRiskCoverablePanelSet.pcf: line 38, column 167
    function title_48 () : java.lang.String {
      return riskCoverable.Coverable.ChildrenLabel
    }
    
    // 'toRemove' attribute on RowIterator (id=riskObjects) at APDRiskCoverablePanelSet.pcf: line 82, column 46
    function toRemove_45 (riskObject :  APDRiskCoverable) : void {
      riskCoverable.removeChildRiskCoverable(riskObject)
    }
    
    // 'value' attribute on RowIterator (id=riskObjects) at APDRiskCoverablePanelSet.pcf: line 82, column 46
    function value_46 () : APDRiskCoverable[] {
      return riskCoverable.ChildRiskCoverablesInPeriod
    }
    
    // 'value' attribute on MenuItemIterator at APDRiskCoverablePanelSet.pcf: line 49, column 44
    function value_6 () : APDCoverable[] {
      return riskCoverable.Coverable.ChildCoverables
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=SplitRiskCoverable) at APDRiskCoverablePanelSet.pcf: line 71, column 79
    function visible_10 () : java.lang.Boolean {
      return riskCoverable.Coverable.HasSplittableChildCoverables
    }
    
    // 'visible' attribute on Card (id=RiskObjectsCard) at APDRiskCoverablePanelSet.pcf: line 38, column 167
    function visible_47 () : java.lang.Boolean {
      return APDCoverableType.TF_HASRISKOBJECTS.TypeKeys.hasMatch(\tk -> tk == riskCoverable.Coverable.CoverableType) and riskCoverable.Coverable.HasChildren
    }
    
    // 'visible' attribute on PanelSet (id=APDRiskCoverablePanelSet) at APDRiskCoverablePanelSet.pcf: line 7, column 130
    function visible_49 () : java.lang.Boolean {
      return true //APDCoverableType.TF_HASRISKOBJECTS.TypeKeys.hasMatch(\tk -> tk == riskCoverable.Coverable.CoverableType)
    }
    
    // 'visible' attribute on MenuItem (id=addNewCoverableType) at APDRiskCoverablePanelSet.pcf: line 59, column 56
    function visible_7 () : java.lang.Boolean {
      return userPreferences.canDesign()
    }
    
    property get coverDefinitionHelper () : gw.apd.model.CoverDefinitionHelper {
      return getRequireValue("coverDefinitionHelper", 0) as gw.apd.model.CoverDefinitionHelper
    }
    
    property set coverDefinitionHelper ($arg :  gw.apd.model.CoverDefinitionHelper) {
      setRequireValue("coverDefinitionHelper", 0, $arg)
    }
    
    property get edition () : APDProductLineEdition {
      return getRequireValue("edition", 0) as APDProductLineEdition
    }
    
    property set edition ($arg :  APDProductLineEdition) {
      setRequireValue("edition", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get riskCoverable () : APDRiskCoverable {
      return getRequireValue("riskCoverable", 0) as APDRiskCoverable
    }
    
    property set riskCoverable ($arg :  APDRiskCoverable) {
      setRequireValue("riskCoverable", 0, $arg)
    }
    
    property get userPreferences () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return getVariableValue("userPreferences", 0) as gw.api.web.userpreference.UserPreferencesOfCurrentUser
    }
    
    property set userPreferences ($arg :  gw.api.web.userpreference.UserPreferencesOfCurrentUser) {
      setVariableValue("userPreferences", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskCoverablePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends APDRiskCoverablePanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=riskObjectName_Cell) at APDRiskCoverablePanelSet.pcf: line 94, column 51
    function action_18 () : void {
      APDRiskPopup.push(riskObject, openForEdit, jobWizardHelper, coverDefinitionHelper, edition)
    }
    
    // 'action' attribute on TextCell (id=riskObjectName_Cell) at APDRiskCoverablePanelSet.pcf: line 94, column 51
    function action_dest_19 () : pcf.api.Destination {
      return pcf.APDRiskPopup.createDestination(riskObject, openForEdit, jobWizardHelper, coverDefinitionHelper, edition)
    }
    
    // 'condition' attribute on ToolbarFlag at APDRiskCoverablePanelSet.pcf: line 85, column 34
    function condition_17 () : java.lang.Boolean {
      return riskObject.Coverable.HasSplittableFields
    }
    
    // 'value' attribute on TextCell (id=riskObjectName_Cell) at APDRiskCoverablePanelSet.pcf: line 94, column 51
    function valueRoot_21 () : java.lang.Object {
      return riskObject
    }
    
    // 'value' attribute on TextCell (id=riskObjectName_Cell) at APDRiskCoverablePanelSet.pcf: line 94, column 51
    function value_20 () : java.lang.String {
      return riskObject.DisplayName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at APDRiskCoverablePanelSet.pcf: line 100, column 33
    function value_23 () : java.util.Date {
      return riskObject.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at APDRiskCoverablePanelSet.pcf: line 106, column 33
    function value_27 () : java.util.Date {
      return riskObject.ExpirationDate
    }
    
    // 'value' attribute on RowIterator (id=riskObjectVersionsLV) at APDRiskCoverablePanelSet.pcf: line 115, column 48
    function value_44 () : APDRiskCoverable[] {
      return riskObject.AdditionalVersions.cast(APDRiskCoverable)
    }
    
    // 'visible' attribute on DateCell (id=EffectiveDate_Cell) at APDRiskCoverablePanelSet.pcf: line 100, column 33
    function visible_25 () : java.lang.Boolean {
      return riskCoverable.Coverable.HasSplittableChildCoverables
    }
    
    property get riskObject () : APDRiskCoverable {
      return getIteratedValue(1) as APDRiskCoverable
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskCoverablePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends IteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=riskObjectName_Cell) at APDRiskCoverablePanelSet.pcf: line 121, column 60
    function action_31 () : void {
      APDRiskPopup.push(riskObjectVersion, openForEdit, jobWizardHelper, coverDefinitionHelper, edition)
    }
    
    // 'action' attribute on TextCell (id=riskObjectName_Cell) at APDRiskCoverablePanelSet.pcf: line 121, column 60
    function action_dest_32 () : pcf.api.Destination {
      return pcf.APDRiskPopup.createDestination(riskObjectVersion, openForEdit, jobWizardHelper, coverDefinitionHelper, edition)
    }
    
    // 'value' attribute on TextCell (id=riskObjectName_Cell) at APDRiskCoverablePanelSet.pcf: line 121, column 60
    function valueRoot_34 () : java.lang.Object {
      return riskObjectVersion
    }
    
    // 'value' attribute on TextCell (id=riskObjectName_Cell) at APDRiskCoverablePanelSet.pcf: line 121, column 60
    function value_33 () : java.lang.String {
      return riskObjectVersion.DisplayName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at APDRiskCoverablePanelSet.pcf: line 126, column 35
    function value_36 () : java.util.Date {
      return riskObjectVersion.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at APDRiskCoverablePanelSet.pcf: line 131, column 35
    function value_40 () : java.util.Date {
      return riskObjectVersion.ExpirationDate
    }
    
    // 'visible' attribute on DateCell (id=EffectiveDate_Cell) at APDRiskCoverablePanelSet.pcf: line 126, column 35
    function visible_38 () : java.lang.Boolean {
      return riskCoverable.Coverable.HasSplittableChildCoverables
    }
    
    property get riskObjectVersion () : APDRiskCoverable {
      return getIteratedValue(2) as APDRiskCoverable
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskCoverablePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends APDRiskCoverablePanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=addCoverable) at APDRiskCoverablePanelSet.pcf: line 53, column 121
    function action_4 () : void {
      riskCoverable.createAndAddChildRiskCoverable(coverable)
    }
    
    // 'label' attribute on MenuItem (id=addCoverable) at APDRiskCoverablePanelSet.pcf: line 53, column 121
    function label_5 () : java.lang.Object {
      return DisplayKey.get("Web.Policy.ManualLine.RiskCoverable.AddCoverable", coverable.Name)
    }
    
    property get coverable () : APDCoverable {
      return getIteratedValue(1) as APDCoverable
    }
    
    
  }
  
  
}