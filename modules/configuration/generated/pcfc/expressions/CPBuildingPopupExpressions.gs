package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cp/policy/CPBuildingPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CPBuildingPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CPBuildingPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CPBuildingPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (cpLine :  CommercialPropertyLine, cpBuilding :  CPBuilding, openForEdit :  boolean, jobWizardHelper :  gw.api.web.job.JobWizardHelper) : int {
      return 0
    }
    
    static function __constructorIndex (cpLine :  CommercialPropertyLine, cpLocation :  CPLocation, building :  Building, openForEdit :  boolean, jobWizardHelper :  gw.api.web.job.JobWizardHelper) : int {
      return 2
    }
    
    static function __constructorIndex (cpLine :  CommercialPropertyLine, cpLocation :  CPLocation, openForEdit :  boolean, jobWizardHelper :  gw.api.web.job.JobWizardHelper) : int {
      return 1
    }
    
    // 'pickLocation' attribute on PickerInput (id=ClassCode_Input) at CPBuildingPopup.pcf: line 100, column 48
    function action_23 () : void {
      CPClassCodeSearchPopup.push(cpLine, cpBuilding)
    }
    
    // 'action' attribute on ToolbarButton (id=EditPolicyButton) at CPBuildingPopup.pcf: line 56, column 62
    function action_3 () : void {
      CurrentLocation.startEditing(); cpLine.Branch.JobProcess.edit(); policyPeriodShouldBeMadeEditable = true
    }
    
    // 'pickLocation' attribute on PickerInput (id=ClassCode_Input) at CPBuildingPopup.pcf: line 100, column 48
    function action_dest_24 () : pcf.api.Destination {
      return pcf.CPClassCodeSearchPopup.createDestination(cpLine, cpBuilding)
    }
    
    // 'afterCancel' attribute on Popup (id=CPBuildingPopup) at CPBuildingPopup.pcf: line 14, column 134
    function afterCancel_180 () : void {
      if (policyPeriodShouldBeMadeEditable) {cpLine.Branch.JobProcess.edit(); jobWizardHelper.Wizard.saveDraft(); policyPeriodShouldBeMadeEditable = false}
    }
    
    // 'afterEnter' attribute on Popup (id=CPBuildingPopup) at CPBuildingPopup.pcf: line 14, column 134
    function afterEnter_181 () : void {
      cpBuilding = gw.web.line.cp.policy.CPBuildingPopupUIHelper.initialize(jobWizardHelper, building, cpBuilding, cpLocation, openForEdit);if (cpBuilding != null && !openForEdit) cpLocation = cpBuilding.CPLocation 
    }
    
    // 'beforeCommit' attribute on Popup (id=CPBuildingPopup) at CPBuildingPopup.pcf: line 14, column 134
    function beforeCommit_182 (pickedValue :  java.lang.Object) : void {
      gw.lob.cp.CPBuildingValidation.validateBuilding(cpBuilding)
    }
    
    // 'beforeValidate' attribute on Popup (id=CPBuildingPopup) at CPBuildingPopup.pcf: line 14, column 134
    function beforeValidate_183 (pickedValue :  java.lang.Object) : void {
      if (policyPeriodShouldBeMadeEditable) {jobWizardHelper.Wizard.saveDraft(); policyPeriodShouldBeMadeEditable = false}
    }
    
    // 'def' attribute on PanelRef at CPBuildingPopup.pcf: line 347, column 72
    function def_onEnter_173 (def :  pcf.CPBldgSuggestedCovDV) : void {
      def.onEnter(cpBuilding, openForEdit)
    }
    
    // 'def' attribute on PanelRef at CPBuildingPopup.pcf: line 353, column 49
    function def_onEnter_176 (def :  pcf.AdditionalCoveragesPanelSet) : void {
      def.onEnter(cpBuilding, new String[]{"CPContentsCategory"}, true, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CPBuildingPopup.pcf: line 362, column 73
    function def_onEnter_178 (def :  pcf.AdditionalInterestDetailsDV) : void {
      def.onEnter(cpBuilding, openForEdit)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at CPBuildingPopup.pcf: line 60, column 52
    function def_onEnter_4 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.onEnter(cpBuilding, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CPBuildingPopup.pcf: line 347, column 72
    function def_refreshVariables_174 (def :  pcf.CPBldgSuggestedCovDV) : void {
      def.refreshVariables(cpBuilding, openForEdit)
    }
    
    // 'def' attribute on PanelRef at CPBuildingPopup.pcf: line 353, column 49
    function def_refreshVariables_177 (def :  pcf.AdditionalCoveragesPanelSet) : void {
      def.refreshVariables(cpBuilding, new String[]{"CPContentsCategory"}, true, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CPBuildingPopup.pcf: line 362, column 73
    function def_refreshVariables_179 (def :  pcf.AdditionalInterestDetailsDV) : void {
      def.refreshVariables(cpBuilding, openForEdit)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at CPBuildingPopup.pcf: line 60, column 52
    function def_refreshVariables_5 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.refreshVariables(cpBuilding, openForEdit, jobWizardHelper)
    }
    
    // 'value' attribute on TextInput (id=LeftExposure_Input) at CPBuildingPopup.pcf: line 221, column 67
    function defaultSetter_103 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpBuilding.Building.LeftSide.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=RearExposure_Input) at CPBuildingPopup.pcf: line 226, column 67
    function defaultSetter_107 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpBuilding.Building.RearSide.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=BurglarySafeguard_Input) at CPBuildingPopup.pcf: line 237, column 56
    function defaultSetter_111 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpBuilding.Building.BurglarySafeguard = (__VALUE_TO_SET as typekey.BurglarySafeguard)
    }
    
    // 'value' attribute on TypeKeyInput (id=AlarmType_Input) at CPBuildingPopup.pcf: line 250, column 58
    function defaultSetter_115 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpBuilding.Building.BuildingAlarmType = (__VALUE_TO_SET as typekey.BuildingAlarmType)
    }
    
    // 'value' attribute on TypeKeyInput (id=AlarmGrade_Input) at CPBuildingPopup.pcf: line 256, column 51
    function defaultSetter_119 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpBuilding.Building.AlarmGrade = (__VALUE_TO_SET as typekey.AlarmGrade)
    }
    
    // 'value' attribute on TextInput (id=AlarmCertificate_Input) at CPBuildingPopup.pcf: line 261, column 65
    function defaultSetter_123 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpBuilding.Building.AlarmCertificate = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=AlarmExpiration_Input) at CPBuildingPopup.pcf: line 266, column 64
    function defaultSetter_127 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpBuilding.Building.AlarmExpiration = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=AlarmClass_Input) at CPBuildingPopup.pcf: line 272, column 51
    function defaultSetter_131 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpBuilding.Building.AlarmClass = (__VALUE_TO_SET as typekey.AlarmClass)
    }
    
    // 'value' attribute on TextInput (id=LastUpdateHeating_Input) at CPBuildingPopup.pcf: line 285, column 48
    function defaultSetter_139 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpBuilding.Building.Heating.YearAdded = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=LastUpdatePlumbing_Input) at CPBuildingPopup.pcf: line 294, column 48
    function defaultSetter_145 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpBuilding.Building.Plumbing.YearAdded = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=LastUpdateRoofing_Input) at CPBuildingPopup.pcf: line 303, column 48
    function defaultSetter_151 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpBuilding.Building.Roofing.YearAdded = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=LastUpdateWiring_Input) at CPBuildingPopup.pcf: line 312, column 48
    function defaultSetter_157 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpBuilding.Building.Wiring.YearAdded = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=InterestType_Input) at CPBuildingPopup.pcf: line 321, column 51
    function defaultSetter_162 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpBuilding.Building.InterestType = (__VALUE_TO_SET as typekey.InterestType)
    }
    
    // 'value' attribute on TypeKeyInput (id=RentedOthers_Input) at CPBuildingPopup.pcf: line 328, column 52
    function defaultSetter_166 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpBuilding.Building.RentedOthers = (__VALUE_TO_SET as typekey.PercentByTens)
    }
    
    // 'value' attribute on TypeKeyInput (id=PercentVacant_Input) at CPBuildingPopup.pcf: line 335, column 52
    function defaultSetter_170 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpBuilding.Building.PercentVacant = (__VALUE_TO_SET as typekey.PercentByTens)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at CPBuildingPopup.pcf: line 91, column 58
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpBuilding.Building.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on PickerInput (id=ClassCode_Input) at CPBuildingPopup.pcf: line 100, column 48
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpBuilding.ClassCode = (__VALUE_TO_SET as entity.CPClassCode)
    }
    
    // 'value' attribute on TypeKeyInput (id=CoverageForm_Input) at CPBuildingPopup.pcf: line 114, column 50
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpBuilding.CoverageForm = (__VALUE_TO_SET as typekey.CoverageForm)
    }
    
    // 'value' attribute on TypeKeyInput (id=RateType_Input) at CPBuildingPopup.pcf: line 126, column 47
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpBuilding.RateType = (__VALUE_TO_SET as typekey.RateType)
    }
    
    // 'value' attribute on TextInput (id=YearBuilt_Input) at CPBuildingPopup.pcf: line 138, column 48
    function defaultSetter_45 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpBuilding.Building.YearBuilt = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=ConstructionType_Input) at CPBuildingPopup.pcf: line 144, column 55
    function defaultSetter_50 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpBuilding.Building.ConstructionType = (__VALUE_TO_SET as typekey.ConstructionType)
    }
    
    // 'value' attribute on TextInput (id=NumStories_Input) at CPBuildingPopup.pcf: line 151, column 48
    function defaultSetter_54 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpBuilding.Building.NumStories = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=NumBasements_Input) at CPBuildingPopup.pcf: line 158, column 48
    function defaultSetter_58 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpBuilding.Building.NumBasements = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=TotalArea_Input) at CPBuildingPopup.pcf: line 165, column 48
    function defaultSetter_62 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpBuilding.Building.TotalArea = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=BasementArea_Input) at CPBuildingPopup.pcf: line 173, column 48
    function defaultSetter_67 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpBuilding.Building.BasementArea = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=PercentSprinklered_Input) at CPBuildingPopup.pcf: line 179, column 50
    function defaultSetter_72 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpBuilding.Building.SprinklerCoverage = (__VALUE_TO_SET as typekey.Sprinklered)
    }
    
    // 'value' attribute on TypeKeyInput (id=RoofType_Input) at CPBuildingPopup.pcf: line 185, column 47
    function defaultSetter_76 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpBuilding.Building.RoofType = (__VALUE_TO_SET as typekey.RoofType)
    }
    
    // 'value' attribute on TypeKeyInput (id=WindRating_Input) at CPBuildingPopup.pcf: line 191, column 49
    function defaultSetter_80 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpBuilding.Building.WindRating = (__VALUE_TO_SET as typekey.WindRating)
    }
    
    // 'value' attribute on BooleanRadioInput (id=HeatingBoilerOnPremises_Input) at CPBuildingPopup.pcf: line 196, column 69
    function defaultSetter_85 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpBuilding.Building.HeatingBoilerOnPremises = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=BuildingLocation_Input) at CPBuildingPopup.pcf: line 77, column 47
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpBuilding.CPLocation = (__VALUE_TO_SET as entity.CPLocation)
    }
    
    // 'value' attribute on BooleanRadioInput (id=HeatingBoilerElsewhere_Input) at CPBuildingPopup.pcf: line 206, column 69
    function defaultSetter_90 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpBuilding.Building.HeatingBoilerElsewhere = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=FrontExposure_Input) at CPBuildingPopup.pcf: line 211, column 68
    function defaultSetter_95 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpBuilding.Building.FrontSide.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=RightExposure_Input) at CPBuildingPopup.pcf: line 216, column 68
    function defaultSetter_99 (__VALUE_TO_SET :  java.lang.Object) : void {
      cpBuilding.Building.RightSide.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on RangeInput (id=BuildingLocation_Input) at CPBuildingPopup.pcf: line 77, column 47
    function editable_7 () : java.lang.Boolean {
      return cpLocation == null
    }
    
    // 'initialValue' attribute on Variable at CPBuildingPopup.pcf: line 42, column 23
    function initialValue_0 () : boolean {
      return cpBuilding.Building.BuildingAlarmType != null
    }
    
    // 'inputConversion' attribute on PickerInput (id=ClassCode_Input) at CPBuildingPopup.pcf: line 100, column 48
    function inputConversion_25 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.web.line.cp.policy.CPBuildingPopupUIHelper.findFirstMatchingClassCode(cpBuilding, VALUE)
    }
    
    // EditButtons at CPBuildingPopup.pcf: line 50, column 32
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'onChange' attribute on PostOnChange at CPBuildingPopup.pcf: line 116, column 147
    function onChange_34 () : void {
      if (openForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncCoverages({cpBuilding}, jobWizardHelper) }
    }
    
    // 'onChange' attribute on PostOnChange at CPBuildingPopup.pcf: line 80, column 85
    function onChange_6 () : void {
      cpLocation.Location.resetBuildingAutoNumberSequence()
    }
    
    // 'onChange' attribute on PostOnChange at CPBuildingPopup.pcf: line 199, column 201
    function onChange_83 () : void {
      cpBuilding.Building.HeatingBoilerElsewhere = gw.web.line.cp.policy.CPBuildingPopupUIHelper.getBoilerInsuredValue(cpBuilding, cpBuilding.Building.HeatingBoilerOnPremises)
    }
    
    // 'outputConversion' attribute on PickerInput (id=ClassCode_Input) at CPBuildingPopup.pcf: line 100, column 48
    function outputConversion_26 (VALUE :  entity.CPClassCode) : java.lang.String {
      return VALUE == null ? "" : VALUE.Code
    }
    
    // 'onToggle' attribute on InputGroup (id=AlarmInfoInputGroup) at CPBuildingPopup.pcf: line 244, column 170
    function setter_135 (VALUE :  java.lang.Boolean) : void {
      if (VALUE) {showAlarmFields = true} else {gw.web.line.cp.policy.CPBuildingPopupUIHelper.clearAlarmFields(cpBuilding);showAlarmFields = false}
    }
    
    // 'startInEditMode' attribute on Popup (id=CPBuildingPopup) at CPBuildingPopup.pcf: line 14, column 134
    function startInEditMode_184 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'title' attribute on Popup (id=CPBuildingPopup) at CPBuildingPopup.pcf: line 14, column 134
    static function title_185 (building :  Building, cpBuilding :  CPBuilding, cpLine :  CommercialPropertyLine, cpLocation :  CPLocation, jobWizardHelper :  gw.api.web.job.JobWizardHelper, openForEdit :  boolean) : java.lang.Object {
      return cpBuilding == null ? DisplayKey.get("CommercialProperty.Building.NewBuilding") : cpBuilding.DisplayName
    }
    
    // 'validationExpression' attribute on TextInput (id=LastUpdateHeating_Input) at CPBuildingPopup.pcf: line 285, column 48
    function validationExpression_137 () : java.lang.Object {
      return cpBuilding.validateYearLastUpdate(cpBuilding.Building.Heating.YearAdded)
    }
    
    // 'validationExpression' attribute on TextInput (id=LastUpdatePlumbing_Input) at CPBuildingPopup.pcf: line 294, column 48
    function validationExpression_143 () : java.lang.Object {
      return cpBuilding.validateYearLastUpdate(cpBuilding.Building.Plumbing.YearAdded)
    }
    
    // 'validationExpression' attribute on TextInput (id=LastUpdateRoofing_Input) at CPBuildingPopup.pcf: line 303, column 48
    function validationExpression_149 () : java.lang.Object {
      return cpBuilding.validateYearLastUpdate(cpBuilding.Building.Roofing.YearAdded)
    }
    
    // 'validationExpression' attribute on TextInput (id=LastUpdateWiring_Input) at CPBuildingPopup.pcf: line 312, column 48
    function validationExpression_155 () : java.lang.Object {
      return cpBuilding.validateYearLastUpdate(cpBuilding.Building.Wiring.YearAdded)
    }
    
    // 'validationExpression' attribute on TextInput (id=YearBuilt_Input) at CPBuildingPopup.pcf: line 138, column 48
    function validationExpression_43 () : java.lang.Object {
      return cpBuilding.validateYearBuilt(cpBuilding.Building.YearBuilt)
    }
    
    // 'validationExpression' attribute on TextInput (id=BasementArea_Input) at CPBuildingPopup.pcf: line 173, column 48
    function validationExpression_65 () : java.lang.Object {
      return cpBuilding.validateBasementArea(cpBuilding.Building.BasementArea)
    }
    
    // 'valueRange' attribute on RangeInput (id=BuildingLocation_Input) at CPBuildingPopup.pcf: line 77, column 47
    function valueRange_11 () : java.lang.Object {
      return cpLine.CPLocations
    }
    
    // 'value' attribute on RangeInput (id=BuildingLocation_Input) at CPBuildingPopup.pcf: line 77, column 47
    function valueRoot_10 () : java.lang.Object {
      return cpBuilding
    }
    
    // 'value' attribute on TextInput (id=RightExposure_Input) at CPBuildingPopup.pcf: line 216, column 68
    function valueRoot_100 () : java.lang.Object {
      return cpBuilding.Building.RightSide
    }
    
    // 'value' attribute on TextInput (id=LeftExposure_Input) at CPBuildingPopup.pcf: line 221, column 67
    function valueRoot_104 () : java.lang.Object {
      return cpBuilding.Building.LeftSide
    }
    
    // 'value' attribute on TextInput (id=RearExposure_Input) at CPBuildingPopup.pcf: line 226, column 67
    function valueRoot_108 () : java.lang.Object {
      return cpBuilding.Building.RearSide
    }
    
    // 'value' attribute on TextInput (id=LastUpdateHeating_Input) at CPBuildingPopup.pcf: line 285, column 48
    function valueRoot_140 () : java.lang.Object {
      return cpBuilding.Building.Heating
    }
    
    // 'value' attribute on TextInput (id=LastUpdatePlumbing_Input) at CPBuildingPopup.pcf: line 294, column 48
    function valueRoot_146 () : java.lang.Object {
      return cpBuilding.Building.Plumbing
    }
    
    // 'value' attribute on TextInput (id=LastUpdateRoofing_Input) at CPBuildingPopup.pcf: line 303, column 48
    function valueRoot_152 () : java.lang.Object {
      return cpBuilding.Building.Roofing
    }
    
    // 'value' attribute on TextInput (id=LastUpdateWiring_Input) at CPBuildingPopup.pcf: line 312, column 48
    function valueRoot_158 () : java.lang.Object {
      return cpBuilding.Building.Wiring
    }
    
    // 'value' attribute on TextInput (id=BuildingNumber_Input) at CPBuildingPopup.pcf: line 86, column 48
    function valueRoot_17 () : java.lang.Object {
      return cpBuilding.Building
    }
    
    // 'value' attribute on TextAreaInput (id=ClassDescription_Input) at CPBuildingPopup.pcf: line 108, column 62
    function valueRoot_32 () : java.lang.Object {
      return cpBuilding.ClassCode
    }
    
    // 'value' attribute on TextInput (id=FrontExposure_Input) at CPBuildingPopup.pcf: line 211, column 68
    function valueRoot_96 () : java.lang.Object {
      return cpBuilding.Building.FrontSide
    }
    
    // 'value' attribute on TextInput (id=LeftExposure_Input) at CPBuildingPopup.pcf: line 221, column 67
    function value_102 () : java.lang.String {
      return cpBuilding.Building.LeftSide.Description
    }
    
    // 'value' attribute on TextInput (id=RearExposure_Input) at CPBuildingPopup.pcf: line 226, column 67
    function value_106 () : java.lang.String {
      return cpBuilding.Building.RearSide.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=BurglarySafeguard_Input) at CPBuildingPopup.pcf: line 237, column 56
    function value_110 () : typekey.BurglarySafeguard {
      return cpBuilding.Building.BurglarySafeguard
    }
    
    // 'value' attribute on TypeKeyInput (id=AlarmType_Input) at CPBuildingPopup.pcf: line 250, column 58
    function value_114 () : typekey.BuildingAlarmType {
      return cpBuilding.Building.BuildingAlarmType
    }
    
    // 'value' attribute on TypeKeyInput (id=AlarmGrade_Input) at CPBuildingPopup.pcf: line 256, column 51
    function value_118 () : typekey.AlarmGrade {
      return cpBuilding.Building.AlarmGrade
    }
    
    // 'value' attribute on TextInput (id=AlarmCertificate_Input) at CPBuildingPopup.pcf: line 261, column 65
    function value_122 () : java.lang.String {
      return cpBuilding.Building.AlarmCertificate
    }
    
    // 'value' attribute on DateInput (id=AlarmExpiration_Input) at CPBuildingPopup.pcf: line 266, column 64
    function value_126 () : java.util.Date {
      return cpBuilding.Building.AlarmExpiration
    }
    
    // 'value' attribute on TypeKeyInput (id=AlarmClass_Input) at CPBuildingPopup.pcf: line 272, column 51
    function value_130 () : typekey.AlarmClass {
      return cpBuilding.Building.AlarmClass
    }
    
    // 'value' attribute on TextInput (id=LastUpdateHeating_Input) at CPBuildingPopup.pcf: line 285, column 48
    function value_138 () : java.lang.Integer {
      return cpBuilding.Building.Heating.YearAdded
    }
    
    // 'value' attribute on TextInput (id=LastUpdatePlumbing_Input) at CPBuildingPopup.pcf: line 294, column 48
    function value_144 () : java.lang.Integer {
      return cpBuilding.Building.Plumbing.YearAdded
    }
    
    // 'value' attribute on TextInput (id=LastUpdateRoofing_Input) at CPBuildingPopup.pcf: line 303, column 48
    function value_150 () : java.lang.Integer {
      return cpBuilding.Building.Roofing.YearAdded
    }
    
    // 'value' attribute on TextInput (id=LastUpdateWiring_Input) at CPBuildingPopup.pcf: line 312, column 48
    function value_156 () : java.lang.Integer {
      return cpBuilding.Building.Wiring.YearAdded
    }
    
    // 'value' attribute on TextInput (id=BuildingNumber_Input) at CPBuildingPopup.pcf: line 86, column 48
    function value_16 () : java.lang.Integer {
      return cpBuilding.Building.BuildingNum
    }
    
    // 'value' attribute on TypeKeyInput (id=InterestType_Input) at CPBuildingPopup.pcf: line 321, column 51
    function value_161 () : typekey.InterestType {
      return cpBuilding.Building.InterestType
    }
    
    // 'value' attribute on TypeKeyInput (id=RentedOthers_Input) at CPBuildingPopup.pcf: line 328, column 52
    function value_165 () : typekey.PercentByTens {
      return cpBuilding.Building.RentedOthers
    }
    
    // 'value' attribute on TypeKeyInput (id=PercentVacant_Input) at CPBuildingPopup.pcf: line 335, column 52
    function value_169 () : typekey.PercentByTens {
      return cpBuilding.Building.PercentVacant
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at CPBuildingPopup.pcf: line 91, column 58
    function value_19 () : java.lang.String {
      return cpBuilding.Building.Description
    }
    
    // 'value' attribute on PickerInput (id=ClassCode_Input) at CPBuildingPopup.pcf: line 100, column 48
    function value_27 () : entity.CPClassCode {
      return cpBuilding.ClassCode
    }
    
    // 'value' attribute on TextAreaInput (id=ClassDescription_Input) at CPBuildingPopup.pcf: line 108, column 62
    function value_31 () : java.lang.String {
      return cpBuilding.ClassCode.Classification
    }
    
    // 'value' attribute on TypeKeyInput (id=CoverageForm_Input) at CPBuildingPopup.pcf: line 114, column 50
    function value_35 () : typekey.CoverageForm {
      return cpBuilding.CoverageForm
    }
    
    // 'value' attribute on TypeKeyInput (id=RateType_Input) at CPBuildingPopup.pcf: line 126, column 47
    function value_39 () : typekey.RateType {
      return cpBuilding.RateType
    }
    
    // 'value' attribute on TextInput (id=YearBuilt_Input) at CPBuildingPopup.pcf: line 138, column 48
    function value_44 () : java.lang.Integer {
      return cpBuilding.Building.YearBuilt
    }
    
    // 'value' attribute on TypeKeyInput (id=ConstructionType_Input) at CPBuildingPopup.pcf: line 144, column 55
    function value_49 () : typekey.ConstructionType {
      return cpBuilding.Building.ConstructionType
    }
    
    // 'value' attribute on TextInput (id=NumStories_Input) at CPBuildingPopup.pcf: line 151, column 48
    function value_53 () : java.lang.Integer {
      return cpBuilding.Building.NumStories
    }
    
    // 'value' attribute on TextInput (id=NumBasements_Input) at CPBuildingPopup.pcf: line 158, column 48
    function value_57 () : java.lang.Integer {
      return cpBuilding.Building.NumBasements
    }
    
    // 'value' attribute on TextInput (id=TotalArea_Input) at CPBuildingPopup.pcf: line 165, column 48
    function value_61 () : java.lang.Integer {
      return cpBuilding.Building.TotalArea
    }
    
    // 'value' attribute on TextInput (id=BasementArea_Input) at CPBuildingPopup.pcf: line 173, column 48
    function value_66 () : java.lang.Integer {
      return cpBuilding.Building.BasementArea
    }
    
    // 'value' attribute on TypeKeyInput (id=PercentSprinklered_Input) at CPBuildingPopup.pcf: line 179, column 50
    function value_71 () : typekey.Sprinklered {
      return cpBuilding.Building.SprinklerCoverage
    }
    
    // 'value' attribute on TypeKeyInput (id=RoofType_Input) at CPBuildingPopup.pcf: line 185, column 47
    function value_75 () : typekey.RoofType {
      return cpBuilding.Building.RoofType
    }
    
    // 'value' attribute on TypeKeyInput (id=WindRating_Input) at CPBuildingPopup.pcf: line 191, column 49
    function value_79 () : typekey.WindRating {
      return cpBuilding.Building.WindRating
    }
    
    // 'value' attribute on RangeInput (id=BuildingLocation_Input) at CPBuildingPopup.pcf: line 77, column 47
    function value_8 () : entity.CPLocation {
      return cpBuilding.CPLocation
    }
    
    // 'value' attribute on BooleanRadioInput (id=HeatingBoilerOnPremises_Input) at CPBuildingPopup.pcf: line 196, column 69
    function value_84 () : java.lang.Boolean {
      return cpBuilding.Building.HeatingBoilerOnPremises
    }
    
    // 'value' attribute on BooleanRadioInput (id=HeatingBoilerElsewhere_Input) at CPBuildingPopup.pcf: line 206, column 69
    function value_89 () : java.lang.Boolean {
      return cpBuilding.Building.HeatingBoilerElsewhere
    }
    
    // 'value' attribute on TextInput (id=FrontExposure_Input) at CPBuildingPopup.pcf: line 211, column 68
    function value_94 () : java.lang.String {
      return cpBuilding.Building.FrontSide.Description
    }
    
    // 'value' attribute on TextInput (id=RightExposure_Input) at CPBuildingPopup.pcf: line 216, column 68
    function value_98 () : java.lang.String {
      return cpBuilding.Building.RightSide.Description
    }
    
    // 'valueRange' attribute on RangeInput (id=BuildingLocation_Input) at CPBuildingPopup.pcf: line 77, column 47
    function verifyValueRangeIsAllowedType_12 ($$arg :  entity.CPLocation[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=BuildingLocation_Input) at CPBuildingPopup.pcf: line 77, column 47
    function verifyValueRangeIsAllowedType_12 ($$arg :  gw.api.database.IQueryBeanResult<entity.CPLocation>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=BuildingLocation_Input) at CPBuildingPopup.pcf: line 77, column 47
    function verifyValueRangeIsAllowedType_12 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=BuildingLocation_Input) at CPBuildingPopup.pcf: line 77, column 47
    function verifyValueRange_13 () : void {
      var __valueRangeArg = cpLine.CPLocations
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_12(__valueRangeArg)
    }
    
    // 'childrenVisible' attribute on InputGroup (id=AlarmInfoInputGroup) at CPBuildingPopup.pcf: line 244, column 170
    function visible_134 () : java.lang.Boolean {
      return showAlarmFields
    }
    
    // 'visible' attribute on PanelRef at CPBuildingPopup.pcf: line 353, column 49
    function visible_175 () : java.lang.Boolean {
      return cpBuilding != null
    }
    
    // 'visible' attribute on ToolbarButton (id=EditPolicyButton) at CPBuildingPopup.pcf: line 56, column 62
    function visible_2 () : java.lang.Boolean {
      return cpLine.Branch.JobProcess.canEdit().Okay
    }
    
    override property get CurrentLocation () : pcf.CPBuildingPopup {
      return super.CurrentLocation as pcf.CPBuildingPopup
    }
    
    property get building () : Building {
      return getVariableValue("building", 0) as Building
    }
    
    property set building ($arg :  Building) {
      setVariableValue("building", 0, $arg)
    }
    
    property get cpBuilding () : CPBuilding {
      return getVariableValue("cpBuilding", 0) as CPBuilding
    }
    
    property set cpBuilding ($arg :  CPBuilding) {
      setVariableValue("cpBuilding", 0, $arg)
    }
    
    property get cpLine () : CommercialPropertyLine {
      return getVariableValue("cpLine", 0) as CommercialPropertyLine
    }
    
    property set cpLine ($arg :  CommercialPropertyLine) {
      setVariableValue("cpLine", 0, $arg)
    }
    
    property get cpLocation () : CPLocation {
      return getVariableValue("cpLocation", 0) as CPLocation
    }
    
    property set cpLocation ($arg :  CPLocation) {
      setVariableValue("cpLocation", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getVariableValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setVariableValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getVariableValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setVariableValue("openForEdit", 0, $arg)
    }
    
    property get policyPeriodShouldBeMadeEditable () : Boolean {
      return getVariableValue("policyPeriodShouldBeMadeEditable", 0) as Boolean
    }
    
    property set policyPeriodShouldBeMadeEditable ($arg :  Boolean) {
      setVariableValue("policyPeriodShouldBeMadeEditable", 0, $arg)
    }
    
    property get showAlarmFields () : boolean {
      return getVariableValue("showAlarmFields", 0) as java.lang.Boolean
    }
    
    property set showAlarmFields ($arg :  boolean) {
      setVariableValue("showAlarmFields", 0, $arg)
    }
    
    
  }
  
  
}