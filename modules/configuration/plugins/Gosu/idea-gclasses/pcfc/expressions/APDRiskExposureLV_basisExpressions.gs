package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskExposureLV.basis.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDRiskExposureLV_basisExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskExposureLV.basis.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDRiskExposureLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at APDRiskExposureLV.basis.pcf: line 20, column 33
    function initialValue_0 () : APDRiskExposure[] {
      return riskCoverable.RiskExposuresWM.where(\re -> re.Exposure == exposure)
    }
    
    // 'initialValue' attribute on Variable at APDRiskExposureLV.basis.pcf: line 24, column 70
    function initialValue_1 () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser()
    }
    
    // 'sortBy' attribute on IteratorSort at APDRiskExposureLV.basis.pcf: line 47, column 26
    function sortBy_4 (exposureHeading :  APDExposureField) : java.lang.Object {
      return exposureHeading.Sequence
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=riskExposureLV) at APDRiskExposureLV.basis.pcf: line 89, column 37
    function toCreateAndAdd_63 () : APDRiskExposure {
      return exposure.buildRiskExposureWM(riskCoverable)
    }
    
    // 'toRemove' attribute on RowIterator (id=riskExposureLV) at APDRiskExposureLV.basis.pcf: line 89, column 37
    function toRemove_64 (riskExposure :  APDRiskExposure) : void {
      riskCoverable.removeExposureWM(riskExposure)
    }
    
    // 'value' attribute on CellIterator (id=exposureHeading) at APDRiskExposureLV.basis.pcf: line 44, column 40
    function value_22 () : APDExposureField[] {
      return exposure.Fields
    }
    
    // 'value' attribute on RowIterator (id=riskExposureLV) at APDRiskExposureLV.basis.pcf: line 89, column 37
    function value_65 () : APDRiskExposure[] {
      return riskExposures
    }
    
    // 'visible' attribute on TextCell (id=EffectiveDate_Cell) at APDRiskExposureLV.basis.pcf: line 35, column 65
    function visible_2 () : java.lang.Boolean {
      return riskCoverable.Branch.Job typeis PolicyChange
    }
    
    property get edition () : APDProductLineEdition {
      return getRequireValue("edition", 0) as APDProductLineEdition
    }
    
    property set edition ($arg :  APDProductLineEdition) {
      setRequireValue("edition", 0, $arg)
    }
    
    property get exposure () : APDExposure {
      return getRequireValue("exposure", 0) as APDExposure
    }
    
    property set exposure ($arg :  APDExposure) {
      setRequireValue("exposure", 0, $arg)
    }
    
    property get riskCoverable () : APDRiskCoverable {
      return getRequireValue("riskCoverable", 0) as APDRiskCoverable
    }
    
    property set riskCoverable ($arg :  APDRiskCoverable) {
      setRequireValue("riskCoverable", 0, $arg)
    }
    
    property get riskExposures () : APDRiskExposure[] {
      return getVariableValue("riskExposures", 0) as APDRiskExposure[]
    }
    
    property set riskExposures ($arg :  APDRiskExposure[]) {
      setVariableValue("riskExposures", 0, $arg)
    }
    
    property get userPreferences () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return getVariableValue("userPreferences", 0) as gw.api.web.userpreference.UserPreferencesOfCurrentUser
    }
    
    property set userPreferences ($arg :  gw.api.web.userpreference.UserPreferencesOfCurrentUser) {
      setVariableValue("userPreferences", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskExposureLV.basis.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends APDRiskExposureLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at APDRiskExposureLV.basis.pcf: line 108, column 28
    function sortBy_31 (exposureField :  APDExposureField) : java.lang.Object {
      return exposureField.Sequence
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at APDRiskExposureLV.basis.pcf: line 95, column 67
    function valueRoot_24 () : java.lang.Object {
      return riskExposure
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at APDRiskExposureLV.basis.pcf: line 95, column 67
    function value_23 () : java.util.Date {
      return riskExposure.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=ExpiryDate_Cell) at APDRiskExposureLV.basis.pcf: line 100, column 67
    function value_27 () : java.util.Date {
      return riskExposure.ExpirationDate
    }
    
    // 'value' attribute on CellIterator (id=exposureFields) at APDRiskExposureLV.basis.pcf: line 105, column 42
    function value_62 () : APDExposureField[] {
      return exposure.Fields
    }
    
    // 'visible' attribute on DateCell (id=EffectiveDate_Cell) at APDRiskExposureLV.basis.pcf: line 95, column 67
    function visible_25 () : java.lang.Boolean {
      return riskCoverable.Branch.Job typeis PolicyChange
    }
    
    property get riskExposure () : APDRiskExposure {
      return getIteratedValue(1) as APDRiskExposure
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskExposureLV.basis.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends IteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 114, column 176
    function def_onEnter_34 (def :  pcf.APDDataFieldValue_bigdecimal) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 114, column 176
    function def_onEnter_36 (def :  pcf.APDDataFieldValue_boolean) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 114, column 176
    function def_onEnter_38 (def :  pcf.APDDataFieldValue_date) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 114, column 176
    function def_onEnter_40 (def :  pcf.APDDataFieldValue_default) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 114, column 176
    function def_onEnter_42 (def :  pcf.APDDataFieldValue_integer) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 114, column 176
    function def_onEnter_44 (def :  pcf.APDDataFieldValue_location) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 114, column 176
    function def_onEnter_46 (def :  pcf.APDDataFieldValue_money) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 114, column 176
    function def_onEnter_48 (def :  pcf.APDDataFieldValue_party) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 114, column 176
    function def_onEnter_50 (def :  pcf.APDDataFieldValue_scalablebigdecimal) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 114, column 176
    function def_onEnter_52 (def :  pcf.APDDataFieldValue_scalableinteger) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 114, column 176
    function def_onEnter_54 (def :  pcf.APDDataFieldValue_scalablemoney) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 114, column 176
    function def_onEnter_56 (def :  pcf.APDDataFieldValue_typekey) : void {
      def.onEnter(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 114, column 176
    function def_refreshVariables_35 (def :  pcf.APDDataFieldValue_bigdecimal) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 114, column 176
    function def_refreshVariables_37 (def :  pcf.APDDataFieldValue_boolean) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 114, column 176
    function def_refreshVariables_39 (def :  pcf.APDDataFieldValue_date) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 114, column 176
    function def_refreshVariables_41 (def :  pcf.APDDataFieldValue_default) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 114, column 176
    function def_refreshVariables_43 (def :  pcf.APDDataFieldValue_integer) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 114, column 176
    function def_refreshVariables_45 (def :  pcf.APDDataFieldValue_location) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 114, column 176
    function def_refreshVariables_47 (def :  pcf.APDDataFieldValue_money) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 114, column 176
    function def_refreshVariables_49 (def :  pcf.APDDataFieldValue_party) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 114, column 176
    function def_refreshVariables_51 (def :  pcf.APDDataFieldValue_scalablebigdecimal) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 114, column 176
    function def_refreshVariables_53 (def :  pcf.APDDataFieldValue_scalableinteger) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 114, column 176
    function def_refreshVariables_55 (def :  pcf.APDDataFieldValue_scalablemoney) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 114, column 176
    function def_refreshVariables_57 (def :  pcf.APDDataFieldValue_typekey) : void {
      def.refreshVariables(riskExposure.Fields.firstWhere(\t -> t.Attribute == exposureField), edition)
    }
    
    // 'editable' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 114, column 176
    function editable_32 () : java.lang.Boolean {
      return riskExposure.editableInUI(exposureField)
    }
    
    // 'mode' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 114, column 176
    function mode_58 () : java.lang.Object {
      return exposureField.Type
    }
    
    // 'visible' attribute on ModalCellRef (id=value) at APDRiskExposureLV.basis.pcf: line 114, column 176
    function visible_33 () : java.lang.Boolean {
      return not (exposureField.getEditionRule(edition, APDRuleType.TC_EXISTENCE).DefaultExistence == APDDataExistenceType.TC_HIDDEN) or userPreferences.canDesign()
    }
    
    property get exposureField () : APDExposureField {
      return getIteratedValue(2) as APDExposureField
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskExposureLV.basis.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends APDRiskExposureLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=RemoveField) at APDRiskExposureLV.basis.pcf: line 74, column 109
    function action_12 () : void {
      exposure.removeField(exposureHeading, riskCoverable)
    }
    
    // 'action' attribute on MenuItem (id=MoveUp) at APDRiskExposureLV.basis.pcf: line 60, column 103
    function action_6 () : void {
      exposureHeading.moveUp(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDExposure)
    }
    
    // 'action' attribute on MenuItem (id=MoveDown) at APDRiskExposureLV.basis.pcf: line 65, column 105
    function action_8 () : void {
      exposureHeading.moveDown(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDExposure)
    }
    
    // 'action' attribute on MenuItem (id=EditField) at APDRiskExposureLV.basis.pcf: line 69, column 100
    function action_9 () : void {
      APDExposureFieldPopup.push(exposureHeading, edition, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on MenuItem (id=EditField) at APDRiskExposureLV.basis.pcf: line 69, column 100
    function action_dest_10 () : pcf.api.Destination {
      return pcf.APDExposureFieldPopup.createDestination(exposureHeading, edition, CurrentLocation.InEditMode)
    }
    
    // 'available' attribute on MenuItem (id=MoveUp) at APDRiskExposureLV.basis.pcf: line 60, column 103
    function available_5 () : java.lang.Boolean {
      return exposureHeading.Sequence != 1
    }
    
    // 'available' attribute on MenuItem (id=MoveDown) at APDRiskExposureLV.basis.pcf: line 65, column 105
    function available_7 () : java.lang.Boolean {
      return exposureHeading.Sequence != exposureHeading.Exposure.Fields.Count
    }
    
    // 'def' attribute on MenuItemSetRef at APDRiskExposureLV.basis.pcf: line 76, column 97
    function def_onEnter_13 (def :  pcf.APDRiskJurisdictionMenuItemSet) : void {
      def.onEnter(exposureHeading, userPreferences.canDesign())
    }
    
    // 'def' attribute on MenuItemSetRef at APDRiskExposureLV.basis.pcf: line 76, column 97
    function def_refreshVariables_14 (def :  pcf.APDRiskJurisdictionMenuItemSet) : void {
      def.refreshVariables(exposureHeading, userPreferences.canDesign())
    }
    
    // 'value' attribute on TextCell (id=exposureFieldHeading_Cell) at APDRiskExposureLV.basis.pcf: line 55, column 23
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposureHeading.Label = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=exposureFieldHeading_Cell) at APDRiskExposureLV.basis.pcf: line 55, column 23
    function editable_15 () : java.lang.Boolean {
      return userPreferences.canDesign()
    }
    
    // 'value' attribute on TextCell (id=exposureFieldHeading_Cell) at APDRiskExposureLV.basis.pcf: line 55, column 23
    function valueRoot_18 () : java.lang.Object {
      return exposureHeading
    }
    
    // 'value' attribute on TextCell (id=exposureFieldHeading_Cell) at APDRiskExposureLV.basis.pcf: line 55, column 23
    function value_16 () : java.lang.String {
      return exposureHeading.Label
    }
    
    // 'visible' attribute on MenuItem (id=RemoveField) at APDRiskExposureLV.basis.pcf: line 74, column 109
    function visible_11 () : java.lang.Boolean {
      return not(exposureHeading.Type == APDFieldType.TC_PARTY and exposureHeading.ExposureParty)
    }
    
    // 'visible' attribute on TextCell (id=exposureFieldHeading_Cell) at APDRiskExposureLV.basis.pcf: line 55, column 23
    function visible_20 () : java.lang.Boolean {
      return not (exposureHeading.getEditionRule(edition, APDRuleType.TC_EXISTENCE).DefaultExistence == APDDataExistenceType.TC_HIDDEN) or userPreferences.canDesign()
    }
    
    property get exposureHeading () : APDExposureField {
      return getIteratedValue(1) as APDExposureField
    }
    
    
  }
  
  
}