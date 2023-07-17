package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverableCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDCoverableCVExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverableCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDCoverableCVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerToolbarButton (id=AddEdition) at APDCoverableCV.pcf: line 74, column 76
    function action_16 () : void {
      APDNewEditionPopup.push(coverable as APDProductLine, edition as APDEdition)
    }
    
    // 'action' attribute on ToolbarButton (id=CompareEdition) at APDCoverableCV.pcf: line 85, column 34
    function action_20 () : void {
      print(edition); print(edition.EditionCode)
    }
    
    // 'action' attribute on PickerToolbarButton (id=AddEdition) at APDCoverableCV.pcf: line 74, column 76
    function action_dest_17 () : pcf.api.Destination {
      return pcf.APDNewEditionPopup.createDestination(coverable as APDProductLine, edition as APDEdition)
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=SwitchEdition) at APDCoverableCV.pcf: line 80, column 83
    function checkedRowAction_19 (element :  gw.apd.web.APDEditionDisplay, CheckedValue :  gw.apd.web.APDEditionDisplay) : void {
      edition = (CheckedValue.EditionRef as APDProductLineEdition)
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=DeleteEdition) at APDCoverableCV.pcf: line 93, column 76
    function checkedRowAction_21 (element :  gw.apd.web.APDEditionDisplay, CheckedValue :  gw.apd.web.APDEditionDisplay) : void {
      (CheckedValue.EditionRef).remove(); edition = null
    }
    
    // 'def' attribute on PanelRef at APDCoverableCV.pcf: line 244, column 71
    function def_onEnter_100 (def :  pcf.APDCoverablePricingPanelSet) : void {
      def.onEnter(coverable, costCodeHelper)
    }
    
    // 'def' attribute on PanelRef (id=ProductLineLocalizedValues) at APDCoverableCV.pcf: line 54, column 42
    function def_onEnter_11 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(coverable, localizationFields, localizationLabels)
    }
    
    // 'def' attribute on InputSetRef at APDCoverableCV.pcf: line 64, column 37
    function def_onEnter_14 (def :  pcf.APDEditionInputSet) : void {
      def.onEnter(edition)
    }
    
    // 'def' attribute on RowSetRef at APDCoverableCV.pcf: line 97, column 94
    function def_onEnter_22 (def :  pcf.APDEditionRowSet) : void {
      def.onEnter(coverable.ProductLine.getEditionsDisplay(), edition)
    }
    
    // 'def' attribute on PanelRef at APDCoverableCV.pcf: line 107, column 91
    function def_onEnter_26 (def :  pcf.APDCoverableFieldsPanelSet) : void {
      def.onEnter(coverable, edition, openForEdit, inDevelopMode)
    }
    
    // 'def' attribute on InputSetRef at APDCoverableCV.pcf: line 49, column 94
    function def_onEnter_6 (def :  pcf.APDCoverableInputSet_default) : void {
      def.onEnter(coverable)
    }
    
    // 'def' attribute on InputSetRef at APDCoverableCV.pcf: line 49, column 94
    function def_onEnter_8 (def :  pcf.APDCoverableInputSet_line) : void {
      def.onEnter(coverable)
    }
    
    // 'def' attribute on PanelRef at APDCoverableCV.pcf: line 226, column 91
    function def_onEnter_91 (def :  pcf.APDCoveragesPanelSet) : void {
      def.onEnter(coverable, null, edition, openForEdit, inDevelopMode)
    }
    
    // 'def' attribute on PanelRef at APDCoverableCV.pcf: line 232, column 92
    function def_onEnter_94 (def :  pcf.APDExclusionsPanelSet) : void {
      def.onEnter(coverable, null, edition, openForEdit, inDevelopMode)
    }
    
    // 'def' attribute on PanelRef at APDCoverableCV.pcf: line 238, column 92
    function def_onEnter_97 (def :  pcf.APDConditionsPanelSet) : void {
      def.onEnter(coverable, null, edition, openForEdit, inDevelopMode)
    }
    
    // 'def' attribute on PanelRef at APDCoverableCV.pcf: line 244, column 71
    function def_refreshVariables_101 (def :  pcf.APDCoverablePricingPanelSet) : void {
      def.refreshVariables(coverable, costCodeHelper)
    }
    
    // 'def' attribute on PanelRef (id=ProductLineLocalizedValues) at APDCoverableCV.pcf: line 54, column 42
    function def_refreshVariables_12 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(coverable, localizationFields, localizationLabels)
    }
    
    // 'def' attribute on InputSetRef at APDCoverableCV.pcf: line 64, column 37
    function def_refreshVariables_15 (def :  pcf.APDEditionInputSet) : void {
      def.refreshVariables(edition)
    }
    
    // 'def' attribute on RowSetRef at APDCoverableCV.pcf: line 97, column 94
    function def_refreshVariables_23 (def :  pcf.APDEditionRowSet) : void {
      def.refreshVariables(coverable.ProductLine.getEditionsDisplay(), edition)
    }
    
    // 'def' attribute on PanelRef at APDCoverableCV.pcf: line 107, column 91
    function def_refreshVariables_27 (def :  pcf.APDCoverableFieldsPanelSet) : void {
      def.refreshVariables(coverable, edition, openForEdit, inDevelopMode)
    }
    
    // 'def' attribute on InputSetRef at APDCoverableCV.pcf: line 49, column 94
    function def_refreshVariables_7 (def :  pcf.APDCoverableInputSet_default) : void {
      def.refreshVariables(coverable)
    }
    
    // 'def' attribute on InputSetRef at APDCoverableCV.pcf: line 49, column 94
    function def_refreshVariables_9 (def :  pcf.APDCoverableInputSet_line) : void {
      def.refreshVariables(coverable)
    }
    
    // 'def' attribute on PanelRef at APDCoverableCV.pcf: line 226, column 91
    function def_refreshVariables_92 (def :  pcf.APDCoveragesPanelSet) : void {
      def.refreshVariables(coverable, null, edition, openForEdit, inDevelopMode)
    }
    
    // 'def' attribute on PanelRef at APDCoverableCV.pcf: line 232, column 92
    function def_refreshVariables_95 (def :  pcf.APDExclusionsPanelSet) : void {
      def.refreshVariables(coverable, null, edition, openForEdit, inDevelopMode)
    }
    
    // 'def' attribute on PanelRef at APDCoverableCV.pcf: line 238, column 92
    function def_refreshVariables_98 (def :  pcf.APDConditionsPanelSet) : void {
      def.refreshVariables(coverable, null, edition, openForEdit, inDevelopMode)
    }
    
    // 'editable' attribute on InputSetRef at APDCoverableCV.pcf: line 64, column 37
    function editable_13 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'initialValue' attribute on Variable at APDCoverableCV.pcf: line 19, column 70
    function initialValue_0 () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser()
    }
    
    // 'initialValue' attribute on Variable at APDCoverableCV.pcf: line 23, column 23
    function initialValue_1 () : Boolean {
      return userPreferences.inDevelopMode()
    }
    
    // 'initialValue' attribute on Variable at APDCoverableCV.pcf: line 28, column 24
    function initialValue_2 () : String[] {
      return coverable.LocalizationFields
    }
    
    // 'initialValue' attribute on Variable at APDCoverableCV.pcf: line 33, column 24
    function initialValue_3 () : String[] {
      return coverable.LocalizationLabels
    }
    
    // 'initialValue' attribute on Variable at APDCoverableCV.pcf: line 37, column 43
    function initialValue_4 () : gw.apd.model.CostCodeHelper {
      return new gw.apd.model.CostCodeHelper()
    }
    
    // 'initialValue' attribute on Variable at APDCoverableCV.pcf: line 41, column 37
    function initialValue_5 () : APDProductLineEdition {
      return initialEdition
    }
    
    // 'mode' attribute on InputSetRef at APDCoverableCV.pcf: line 49, column 94
    function mode_10 () : java.lang.Object {
      return coverable typeis APDProductLine ? "line" : "default"
    }
    
    // 'onPick' attribute on PickerToolbarButton (id=AddEdition) at APDCoverableCV.pcf: line 74, column 76
    function onPick_18 (PickedValue :  APDEdition) : void {
      edition = (PickedValue as APDProductLineEdition)
    }
    
    // 'value' attribute on TextCell (id=childName_Cell) at APDCoverableCV.pcf: line 269, column 37
    function sortValue_103 (child :  APDCoverable) : java.lang.Object {
      return child.Name
    }
    
    // 'value' attribute on TextCell (id=childDescription_Cell) at APDCoverableCV.pcf: line 273, column 44
    function sortValue_104 (child :  APDCoverable) : java.lang.Object {
      return child.Description
    }
    
    // 'title' attribute on Card (id=CoverablePricing) at APDCoverableCV.pcf: line 242, column 225
    function title_102 () : java.lang.String {
      return DisplayKey.get( "Web.APDProductScreen.APDCoverable.Pricing", gw.apd.util.APDStringUtil.makeLabelCount((coverable.CostDefinitions.Count+coverable.Coverages.sum(\elt -> elt.CostDefinitions.Count))))
    }
    
    // 'title' attribute on Card (id=CoverableChildren) at APDCoverableCV.pcf: line 249, column 39
    function title_117 () : java.lang.String {
      return DisplayKey.get("Web.APDProductScreen.APDProductLine.Children", gw.apd.util.APDStringUtil.makeLabelCount(coverable.ChildCoverables.Count))
    }
    
    // 'title' attribute on Card (id=Editions) at APDCoverableCV.pcf: line 59, column 49
    function title_25 () : java.lang.String {
      return DisplayKey.get("Web.APDProductScreen.APDProductLine.Editions", gw.apd.util.APDStringUtil.makeLabelCount((coverable as APDProductLine).Editions.Count))
    }
    
    // 'title' attribute on Card (id=CoverableFields) at APDCoverableCV.pcf: line 105, column 152
    function title_28 () : java.lang.String {
      return DisplayKey.get("Web.APDProductScreen.APDProductLine.Fields", gw.apd.util.APDStringUtil.makeLabelCount(coverable.Fields.Count))
    }
    
    // 'title' attribute on Card (id=CoverableExposures) at APDCoverableCV.pcf: line 112, column 39
    function title_90 () : java.lang.String {
      return DisplayKey.get("Web.APDProductScreen.APDProductLine.Exposures", gw.apd.util.APDStringUtil.makeLabelCount(coverable.Exposures.Count))
    }
    
    // 'title' attribute on Card (id=CoverableCoverages) at APDCoverableCV.pcf: line 224, column 166
    function title_93 () : java.lang.String {
      return DisplayKey.get("Web.APDProductScreen.APDProductLine.Coverages", gw.apd.util.APDStringUtil.makeLabelCount(coverable.TopLevelCoverages.Count))
    }
    
    // 'title' attribute on Card (id=CoverableExclusions) at APDCoverableCV.pcf: line 230, column 168
    function title_96 () : java.lang.String {
      return DisplayKey.get("Web.APDProductScreen.APDProductLine.Exclusions", gw.apd.util.APDStringUtil.makeLabelCount(coverable.TopLevelExclusions.Count))
    }
    
    // 'title' attribute on Card (id=CoverableConditions) at APDCoverableCV.pcf: line 236, column 168
    function title_99 () : java.lang.String {
      return DisplayKey.get("Web.APDProductScreen.APDProductLine.Conditions", gw.apd.util.APDStringUtil.makeLabelCount(coverable.TopLevelConditions.Count))
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=CoverableLV) at APDCoverableCV.pcf: line 263, column 40
    function toCreateAndAdd_113 () : APDCoverable {
      return coverable.addCoverable()
    }
    
    // 'toRemove' attribute on RowIterator (id=CoverableLV) at APDCoverableCV.pcf: line 263, column 40
    function toRemove_114 (child :  APDCoverable) : void {
      coverable.removeCoverable(child)
    }
    
    // 'value' attribute on RowIterator (id=CoverableLV) at APDCoverableCV.pcf: line 263, column 40
    function value_115 () : APDCoverable[] {
      return coverable.ChildCoverables
    }
    
    // 'visible' attribute on Card (id=CoverableChildren) at APDCoverableCV.pcf: line 249, column 39
    function visible_116 () : java.lang.Boolean {
      return coverable.HasChildren
    }
    
    // 'visible' attribute on Card (id=Editions) at APDCoverableCV.pcf: line 59, column 49
    function visible_24 () : java.lang.Boolean {
      return coverable typeis APDProductLine
    }
    
    // 'visible' attribute on Card (id=CoverableExposures) at APDCoverableCV.pcf: line 112, column 39
    function visible_89 () : java.lang.Boolean {
      return coverable.HasExposure
    }
    
    property get costCodeHelper () : gw.apd.model.CostCodeHelper {
      return getVariableValue("costCodeHelper", 0) as gw.apd.model.CostCodeHelper
    }
    
    property set costCodeHelper ($arg :  gw.apd.model.CostCodeHelper) {
      setVariableValue("costCodeHelper", 0, $arg)
    }
    
    property get coverable () : APDCoverable {
      return getRequireValue("coverable", 0) as APDCoverable
    }
    
    property set coverable ($arg :  APDCoverable) {
      setRequireValue("coverable", 0, $arg)
    }
    
    property get edition () : APDProductLineEdition {
      return getVariableValue("edition", 0) as APDProductLineEdition
    }
    
    property set edition ($arg :  APDProductLineEdition) {
      setVariableValue("edition", 0, $arg)
    }
    
    property get inDevelopMode () : Boolean {
      return getVariableValue("inDevelopMode", 0) as Boolean
    }
    
    property set inDevelopMode ($arg :  Boolean) {
      setVariableValue("inDevelopMode", 0, $arg)
    }
    
    property get initialEdition () : APDProductLineEdition {
      return getRequireValue("initialEdition", 0) as APDProductLineEdition
    }
    
    property set initialEdition ($arg :  APDProductLineEdition) {
      setRequireValue("initialEdition", 0, $arg)
    }
    
    property get localizationFields () : String[] {
      return getVariableValue("localizationFields", 0) as String[]
    }
    
    property set localizationFields ($arg :  String[]) {
      setVariableValue("localizationFields", 0, $arg)
    }
    
    property get localizationLabels () : String[] {
      return getVariableValue("localizationLabels", 0) as String[]
    }
    
    property set localizationLabels ($arg :  String[]) {
      setVariableValue("localizationLabels", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get userPreferences () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return getVariableValue("userPreferences", 0) as gw.api.web.userpreference.UserPreferencesOfCurrentUser
    }
    
    property set userPreferences ($arg :  gw.api.web.userpreference.UserPreferencesOfCurrentUser) {
      setVariableValue("userPreferences", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverableCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends APDCoverableCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=childName_Cell) at APDCoverableCV.pcf: line 269, column 37
    function action_105 () : void {
      APDCoverablePopup.push(child, edition, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=childName_Cell) at APDCoverableCV.pcf: line 269, column 37
    function action_dest_106 () : pcf.api.Destination {
      return pcf.APDCoverablePopup.createDestination(child, edition, openForEdit)
    }
    
    // 'value' attribute on TextCell (id=childName_Cell) at APDCoverableCV.pcf: line 269, column 37
    function valueRoot_108 () : java.lang.Object {
      return child
    }
    
    // 'value' attribute on TextCell (id=childName_Cell) at APDCoverableCV.pcf: line 269, column 37
    function value_107 () : java.lang.String {
      return child.Name
    }
    
    // 'value' attribute on TextCell (id=childDescription_Cell) at APDCoverableCV.pcf: line 273, column 44
    function value_110 () : java.lang.String {
      return child.Description
    }
    
    property get child () : APDCoverable {
      return getIteratedValue(1) as APDCoverable
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverableCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=TermsButton_Cell) at APDCoverableCV.pcf: line 144, column 151
    function action_37 () : void {
      APDExposureFieldsPopup.push(exposure, edition, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=TermsButton_Cell) at APDCoverableCV.pcf: line 144, column 151
    function action_dest_38 () : pcf.api.Destination {
      return pcf.APDExposureFieldsPopup.createDestination(exposure, edition, openForEdit)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDCoverableCV.pcf: line 138, column 42
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyCell (id=ExposureType_Cell) at APDCoverableCV.pcf: line 152, column 47
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.ExposureType = (__VALUE_TO_SET as APDExposureType)
    }
    
    // 'value' attribute on TypeKeyCell (id=ContactRole_Cell) at APDCoverableCV.pcf: line 164, column 86
    function defaultSetter_49 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.ContactRole = (__VALUE_TO_SET as APDExposureContactRole)
    }
    
    // 'value' attribute on TypeKeyCell (id=RiskLocation_Cell) at APDCoverableCV.pcf: line 174, column 51
    function defaultSetter_56 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.RiskLocation = (__VALUE_TO_SET as APDRiskLocationType)
    }
    
    // 'value' attribute on TypeKeyCell (id=RatingType_Cell) at APDCoverableCV.pcf: line 185, column 54
    function defaultSetter_61 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.RatingType = (__VALUE_TO_SET as APDExposureRatingType)
    }
    
    // 'value' attribute on TextCell (id=MenuLabel_Cell) at APDCoverableCV.pcf: line 192, column 47
    function defaultSetter_67 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.MenuLabel = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDCoverableCV.pcf: line 198, column 49
    function defaultSetter_73 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=TypeName_Cell) at APDCoverableCV.pcf: line 205, column 44
    function defaultSetter_79 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.TypeName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'label' attribute on TextCell (id=MenuLabel_Cell) at APDCoverableCV.pcf: line 192, column 47
    function label_65 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.APDExposure.MenuLabel"))
    }
    
    // 'label' attribute on TextCell (id=Description_Cell) at APDCoverableCV.pcf: line 198, column 49
    function label_71 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.APDExposure.Description"))
    }
    
    // 'label' attribute on TextCell (id=TypeName_Cell) at APDCoverableCV.pcf: line 205, column 44
    function label_77 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.APDExposure.TypeName"))
    }
    
    // 'onChange' attribute on PostOnChange at APDCoverableCV.pcf: line 176, column 71
    function onChange_54 () : void {
      exposure.toggleJurisdictionLocation()
    }
    
    // 'validationExpression' attribute on TypeKeyCell (id=ContactRole_Cell) at APDCoverableCV.pcf: line 164, column 86
    function validationExpression_46 () : java.lang.Object {
      return (exposure.ExposureType == APDExposureType.TC_CONTACT && exposure.ContactRole == null)? DisplayKey.get("Web.APDValidation.Exposure.MissingContactRole") : null
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDCoverableCV.pcf: line 138, column 42
    function valueRoot_35 () : java.lang.Object {
      return exposure
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDCoverableCV.pcf: line 138, column 42
    function value_33 () : java.lang.String {
      return exposure.Name
    }
    
    // 'value' attribute on TextCell (id=TermsButton_Cell) at APDCoverableCV.pcf: line 144, column 151
    function value_39 () : java.lang.String {
      return DisplayKey.get("Web.APDCoverableCV.EditFields", gw.apd.util.APDStringUtil.makeLabelCount(exposure.Fields.Count))
    }
    
    // 'value' attribute on TypeKeyCell (id=ExposureType_Cell) at APDCoverableCV.pcf: line 152, column 47
    function value_41 () : APDExposureType {
      return exposure.ExposureType
    }
    
    // 'value' attribute on TypeKeyCell (id=ContactRole_Cell) at APDCoverableCV.pcf: line 164, column 86
    function value_48 () : APDExposureContactRole {
      return exposure.ContactRole
    }
    
    // 'value' attribute on TypeKeyCell (id=RiskLocation_Cell) at APDCoverableCV.pcf: line 174, column 51
    function value_55 () : APDRiskLocationType {
      return exposure.RiskLocation
    }
    
    // 'value' attribute on TypeKeyCell (id=RatingType_Cell) at APDCoverableCV.pcf: line 185, column 54
    function value_60 () : APDExposureRatingType {
      return exposure.RatingType
    }
    
    // 'value' attribute on TextCell (id=MenuLabel_Cell) at APDCoverableCV.pcf: line 192, column 47
    function value_66 () : java.lang.String {
      return exposure.MenuLabel
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDCoverableCV.pcf: line 198, column 49
    function value_72 () : java.lang.String {
      return exposure.Description
    }
    
    // 'value' attribute on TextCell (id=TypeName_Cell) at APDCoverableCV.pcf: line 205, column 44
    function value_78 () : java.lang.String {
      return exposure.TypeName
    }
    
    // 'valueType' attribute on TypeKeyCell (id=ExposureType_Cell) at APDCoverableCV.pcf: line 152, column 47
    function verifyValueType_45 () : void {
      var __valueTypeArg : APDExposureType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyCell (id=ContactRole_Cell) at APDCoverableCV.pcf: line 164, column 86
    function verifyValueType_53 () : void {
      var __valueTypeArg : APDExposureContactRole
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyCell (id=RiskLocation_Cell) at APDCoverableCV.pcf: line 174, column 51
    function verifyValueType_59 () : void {
      var __valueTypeArg : APDRiskLocationType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyCell (id=RatingType_Cell) at APDCoverableCV.pcf: line 185, column 54
    function verifyValueType_64 () : void {
      var __valueTypeArg : APDExposureRatingType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueVisible' attribute on TypeKeyCell (id=ContactRole_Cell) at APDCoverableCV.pcf: line 164, column 86
    function visible_47 () : java.lang.Boolean {
      return exposure.ExposureType == APDExposureType.TC_CONTACT
    }
    
    // 'visible' attribute on TextCell (id=TypeName_Cell) at APDCoverableCV.pcf: line 205, column 44
    function visible_81 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    property get exposure () : APDExposure {
      return getIteratedValue(2) as APDExposure
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverableCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends APDCoverableCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=ExposureLocalizedValues) at APDCoverableCV.pcf: line 217, column 45
    function def_onEnter_87 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(exposureDetails, {"Name", "Description", "MenuLabel"}, {DisplayKey.get("Web.APDCoverableCV.APDExposure.Name"), DisplayKey.get("Web.APDCoverableCV.APDExposure.Description"), DisplayKey.get("Web.APDCoverableCV.APDExposure.MenuLabel")})
    }
    
    // 'def' attribute on PanelRef (id=ExposureLocalizedValues) at APDCoverableCV.pcf: line 217, column 45
    function def_refreshVariables_88 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(exposureDetails, {"Name", "Description", "MenuLabel"}, {DisplayKey.get("Web.APDCoverableCV.APDExposure.Name"), DisplayKey.get("Web.APDCoverableCV.APDExposure.Description"), DisplayKey.get("Web.APDCoverableCV.APDExposure.MenuLabel")})
    }
    
    // 'label' attribute on TextCell (id=MenuLabel_Cell) at APDCoverableCV.pcf: line 192, column 47
    function label_29 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.APDExposure.MenuLabel"))
    }
    
    // 'label' attribute on TextCell (id=Description_Cell) at APDCoverableCV.pcf: line 198, column 49
    function label_30 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.APDExposure.Description"))
    }
    
    // 'label' attribute on TextCell (id=TypeName_Cell) at APDCoverableCV.pcf: line 205, column 44
    function label_31 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.APDExposure.TypeName"))
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=ExposuresLV) at APDCoverableCV.pcf: line 129, column 41
    function toCreateAndAdd_84 () : APDExposure {
      return coverable.addExposure()
    }
    
    // 'toRemove' attribute on RowIterator (id=ExposuresLV) at APDCoverableCV.pcf: line 129, column 41
    function toRemove_85 (exposure :  APDExposure) : void {
      coverable.removeFromExposures(exposure)
    }
    
    // 'value' attribute on RowIterator (id=ExposuresLV) at APDCoverableCV.pcf: line 129, column 41
    function value_86 () : APDExposure[] {
      return coverable.Exposures
    }
    
    // 'visible' attribute on TextCell (id=TypeName_Cell) at APDCoverableCV.pcf: line 205, column 44
    function visible_32 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    property get exposureDetails () : APDExposure {
      return getCurrentSelection(1) as APDExposure
    }
    
    property set exposureDetails ($arg :  APDExposure) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}