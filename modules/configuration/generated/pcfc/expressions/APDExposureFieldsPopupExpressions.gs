package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDExposureFieldsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDExposureFieldsPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDExposureFieldsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDExposureFieldsPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (exposure :  APDExposure, edition :  APDProductLineEdition) : int {
      return 0
    }
    
    static function __constructorIndex (exposure :  APDExposure, edition :  APDProductLineEdition, startInEditMode :  boolean) : int {
      return 1
    }
    
    // 'beforeCommit' attribute on Popup (id=APDExposureFieldsPopup) at APDExposureFieldsPopup.pcf: line 11, column 69
    function beforeCommit_137 (pickedValue :  java.lang.Object) : void {
      exposure.Coverable.ProductLine.productLineUpdated()
    }
    
    // 'canEdit' attribute on Popup (id=APDExposureFieldsPopup) at APDExposureFieldsPopup.pcf: line 11, column 69
    function canEdit_138 () : java.lang.Boolean {
      return startInEditMode
    }
    
    // 'initialValue' attribute on Variable at APDExposureFieldsPopup.pcf: line 29, column 23
    function initialValue_0 () : Boolean {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser().inDevelopMode()
    }
    
    // EditButtons at APDExposureFieldsPopup.pcf: line 32, column 23
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    override property get CurrentLocation () : pcf.APDExposureFieldsPopup {
      return super.CurrentLocation as pcf.APDExposureFieldsPopup
    }
    
    property get edition () : APDProductLineEdition {
      return getVariableValue("edition", 0) as APDProductLineEdition
    }
    
    property set edition ($arg :  APDProductLineEdition) {
      setVariableValue("edition", 0, $arg)
    }
    
    property get exposure () : APDExposure {
      return getVariableValue("exposure", 0) as APDExposure
    }
    
    property set exposure ($arg :  APDExposure) {
      setVariableValue("exposure", 0, $arg)
    }
    
    property get inDevelopMode () : Boolean {
      return getVariableValue("inDevelopMode", 0) as Boolean
    }
    
    property set inDevelopMode ($arg :  Boolean) {
      setVariableValue("inDevelopMode", 0, $arg)
    }
    
    property get startInEditMode () : boolean {
      return getVariableValue("startInEditMode", 0) as java.lang.Boolean
    }
    
    property set startInEditMode ($arg :  boolean) {
      setVariableValue("startInEditMode", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDExposureFieldsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=MoveUp) at APDExposureFieldsPopup.pcf: line 183, column 96
    function action_128 () : void {
      field.moveUp()
    }
    
    // 'action' attribute on MenuItem (id=MoveDown) at APDExposureFieldsPopup.pcf: line 188, column 98
    function action_130 () : void {
      field.moveDown()
    }
    
    // 'action' attribute on MenuItem (id=DropDownDefinition) at APDExposureFieldsPopup.pcf: line 79, column 44
    function action_14 () : void {
      APDDropDownDefinitionPopup.push(field, false, edition, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on RangeCell (id=Usage_Cell) at APDExposureFieldsPopup.pcf: line 111, column 53
    function action_34 () : void {
      APDAttributeRulePopup.push(field.getEditionRule(edition, APDRuleType.TC_EXISTENCE), field, APDRuleType.TC_EXISTENCE, edition, startInEditMode)
    }
    
    // 'action' attribute on TextCell (id=Tags_Cell) at APDExposureFieldsPopup.pcf: line 143, column 36
    function action_99 () : void {
      APDTagPopup.push(field, startInEditMode)
    }
    
    // 'action' attribute on TextCell (id=Tags_Cell) at APDExposureFieldsPopup.pcf: line 143, column 36
    function action_dest_100 () : pcf.api.Destination {
      return pcf.APDTagPopup.createDestination(field, startInEditMode)
    }
    
    // 'action' attribute on MenuItem (id=DropDownDefinition) at APDExposureFieldsPopup.pcf: line 79, column 44
    function action_dest_15 () : pcf.api.Destination {
      return pcf.APDDropDownDefinitionPopup.createDestination(field, false, edition, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on RangeCell (id=Usage_Cell) at APDExposureFieldsPopup.pcf: line 111, column 53
    function action_dest_35 () : pcf.api.Destination {
      return pcf.APDAttributeRulePopup.createDestination(field.getEditionRule(edition, APDRuleType.TC_EXISTENCE), field, APDRuleType.TC_EXISTENCE, edition, startInEditMode)
    }
    
    // 'available' attribute on MenuItem (id=MoveUp) at APDExposureFieldsPopup.pcf: line 183, column 96
    function available_127 () : java.lang.Boolean {
      return field.Sequence != 1
    }
    
    // 'available' attribute on MenuItem (id=MoveDown) at APDExposureFieldsPopup.pcf: line 188, column 98
    function available_129 () : java.lang.Boolean {
      return field.Sequence != field.Exposure.Fields.Count
    }
    
    // 'condition' attribute on ToolbarFlag at APDExposureFieldsPopup.pcf: line 61, column 35
    function condition_7 () : java.lang.Boolean {
      return not field.Jurisdiction
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDExposureFieldsPopup.pcf: line 119, column 37
    function def_onEnter_41 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.onEnter(field, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDExposureFieldsPopup.pcf: line 119, column 37
    function def_onEnter_43 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.onEnter(field, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDExposureFieldsPopup.pcf: line 119, column 37
    function def_onEnter_45 (def :  pcf.APDAttributeDefaultValue_calculated) : void {
      def.onEnter(field, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDExposureFieldsPopup.pcf: line 119, column 37
    function def_onEnter_47 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.onEnter(field, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDExposureFieldsPopup.pcf: line 119, column 37
    function def_onEnter_49 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.onEnter(field, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDExposureFieldsPopup.pcf: line 119, column 37
    function def_onEnter_51 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.onEnter(field, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDExposureFieldsPopup.pcf: line 119, column 37
    function def_onEnter_53 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.onEnter(field, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDExposureFieldsPopup.pcf: line 119, column 37
    function def_onEnter_55 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.onEnter(field, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDExposureFieldsPopup.pcf: line 119, column 37
    function def_onEnter_57 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.onEnter(field, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDExposureFieldsPopup.pcf: line 127, column 37
    function def_onEnter_60 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.onEnter(field, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDExposureFieldsPopup.pcf: line 127, column 37
    function def_onEnter_62 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.onEnter(field, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDExposureFieldsPopup.pcf: line 127, column 37
    function def_onEnter_64 (def :  pcf.APDAttributeDefaultValue_calculated) : void {
      def.onEnter(field, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDExposureFieldsPopup.pcf: line 127, column 37
    function def_onEnter_66 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.onEnter(field, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDExposureFieldsPopup.pcf: line 127, column 37
    function def_onEnter_68 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.onEnter(field, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDExposureFieldsPopup.pcf: line 127, column 37
    function def_onEnter_70 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.onEnter(field, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDExposureFieldsPopup.pcf: line 127, column 37
    function def_onEnter_72 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.onEnter(field, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDExposureFieldsPopup.pcf: line 127, column 37
    function def_onEnter_74 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.onEnter(field, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDExposureFieldsPopup.pcf: line 127, column 37
    function def_onEnter_76 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.onEnter(field, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDExposureFieldsPopup.pcf: line 135, column 37
    function def_onEnter_79 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.onEnter(field, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDExposureFieldsPopup.pcf: line 135, column 37
    function def_onEnter_81 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.onEnter(field, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDExposureFieldsPopup.pcf: line 135, column 37
    function def_onEnter_83 (def :  pcf.APDAttributeDefaultValue_calculated) : void {
      def.onEnter(field, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDExposureFieldsPopup.pcf: line 135, column 37
    function def_onEnter_85 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.onEnter(field, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDExposureFieldsPopup.pcf: line 135, column 37
    function def_onEnter_87 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.onEnter(field, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDExposureFieldsPopup.pcf: line 135, column 37
    function def_onEnter_89 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.onEnter(field, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDExposureFieldsPopup.pcf: line 135, column 37
    function def_onEnter_91 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.onEnter(field, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDExposureFieldsPopup.pcf: line 135, column 37
    function def_onEnter_93 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.onEnter(field, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDExposureFieldsPopup.pcf: line 135, column 37
    function def_onEnter_95 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.onEnter(field, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDExposureFieldsPopup.pcf: line 119, column 37
    function def_refreshVariables_42 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.refreshVariables(field, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDExposureFieldsPopup.pcf: line 119, column 37
    function def_refreshVariables_44 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.refreshVariables(field, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDExposureFieldsPopup.pcf: line 119, column 37
    function def_refreshVariables_46 (def :  pcf.APDAttributeDefaultValue_calculated) : void {
      def.refreshVariables(field, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDExposureFieldsPopup.pcf: line 119, column 37
    function def_refreshVariables_48 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.refreshVariables(field, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDExposureFieldsPopup.pcf: line 119, column 37
    function def_refreshVariables_50 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.refreshVariables(field, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDExposureFieldsPopup.pcf: line 119, column 37
    function def_refreshVariables_52 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.refreshVariables(field, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDExposureFieldsPopup.pcf: line 119, column 37
    function def_refreshVariables_54 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.refreshVariables(field, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDExposureFieldsPopup.pcf: line 119, column 37
    function def_refreshVariables_56 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.refreshVariables(field, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDExposureFieldsPopup.pcf: line 119, column 37
    function def_refreshVariables_58 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.refreshVariables(field, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDExposureFieldsPopup.pcf: line 127, column 37
    function def_refreshVariables_61 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.refreshVariables(field, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDExposureFieldsPopup.pcf: line 127, column 37
    function def_refreshVariables_63 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.refreshVariables(field, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDExposureFieldsPopup.pcf: line 127, column 37
    function def_refreshVariables_65 (def :  pcf.APDAttributeDefaultValue_calculated) : void {
      def.refreshVariables(field, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDExposureFieldsPopup.pcf: line 127, column 37
    function def_refreshVariables_67 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.refreshVariables(field, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDExposureFieldsPopup.pcf: line 127, column 37
    function def_refreshVariables_69 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.refreshVariables(field, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDExposureFieldsPopup.pcf: line 127, column 37
    function def_refreshVariables_71 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.refreshVariables(field, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDExposureFieldsPopup.pcf: line 127, column 37
    function def_refreshVariables_73 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.refreshVariables(field, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDExposureFieldsPopup.pcf: line 127, column 37
    function def_refreshVariables_75 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.refreshVariables(field, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDExposureFieldsPopup.pcf: line 127, column 37
    function def_refreshVariables_77 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.refreshVariables(field, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDExposureFieldsPopup.pcf: line 135, column 37
    function def_refreshVariables_80 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.refreshVariables(field, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDExposureFieldsPopup.pcf: line 135, column 37
    function def_refreshVariables_82 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.refreshVariables(field, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDExposureFieldsPopup.pcf: line 135, column 37
    function def_refreshVariables_84 (def :  pcf.APDAttributeDefaultValue_calculated) : void {
      def.refreshVariables(field, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDExposureFieldsPopup.pcf: line 135, column 37
    function def_refreshVariables_86 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.refreshVariables(field, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDExposureFieldsPopup.pcf: line 135, column 37
    function def_refreshVariables_88 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.refreshVariables(field, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDExposureFieldsPopup.pcf: line 135, column 37
    function def_refreshVariables_90 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.refreshVariables(field, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDExposureFieldsPopup.pcf: line 135, column 37
    function def_refreshVariables_92 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.refreshVariables(field, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDExposureFieldsPopup.pcf: line 135, column 37
    function def_refreshVariables_94 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.refreshVariables(field, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDExposureFieldsPopup.pcf: line 135, column 37
    function def_refreshVariables_96 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.refreshVariables(field, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'value' attribute on CheckBoxCell (id=SplitByRatingPeriods_Cell) at APDExposureFieldsPopup.pcf: line 149, column 54
    function defaultSetter_106 (__VALUE_TO_SET :  java.lang.Object) : void {
      field.SplitByRatingPeriods = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=Scalable_Cell) at APDExposureFieldsPopup.pcf: line 159, column 50
    function defaultSetter_111 (__VALUE_TO_SET :  java.lang.Object) : void {
      field.Scalable = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDExposureFieldsPopup.pcf: line 165, column 46
    function defaultSetter_116 (__VALUE_TO_SET :  java.lang.Object) : void {
      field.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDExposureFieldsPopup.pcf: line 172, column 44
    function defaultSetter_122 (__VALUE_TO_SET :  java.lang.Object) : void {
      field.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at APDExposureFieldsPopup.pcf: line 79, column 44
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      field.Type = (__VALUE_TO_SET as APDFieldType)
    }
    
    // 'value' attribute on BooleanRadioCell (id=BasisScalingKey_Cell) at APDExposureFieldsPopup.pcf: line 93, column 50
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      field.BasisScalingKey = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=Jurisdiction_Cell) at APDExposureFieldsPopup.pcf: line 100, column 73
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      field.Jurisdiction = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextCell (id=Label_Cell) at APDExposureFieldsPopup.pcf: line 69, column 40
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      field.Label = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at APDExposureFieldsPopup.pcf: line 55, column 38
    function initialValue_6 () : APDFieldType {
      return field.Type
    }
    
    // RowIterator (id=FieldsLV) at APDExposureFieldsPopup.pcf: line 51, column 46
    function initializeVariables_131 () : void {
        prevFieldType = field.Type;

    }
    
    // 'label' attribute on TextCell (id=Description_Cell) at APDExposureFieldsPopup.pcf: line 165, column 46
    function label_114 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDProductScreen.APDField.Description"))
    }
    
    // 'label' attribute on TextCell (id=Name_Cell) at APDExposureFieldsPopup.pcf: line 172, column 44
    function label_120 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDProductScreen.APDField.Name"))
    }
    
    // 'mode' attribute on ModalCellRef (id=DefaultValue) at APDExposureFieldsPopup.pcf: line 119, column 37
    function mode_59 () : java.lang.Object {
      return field.getUIRuleMode(edition, APDRuleType.TC_DEFAULT)
    }
    
    // 'mode' attribute on ModalCellRef (id=MinimumValue) at APDExposureFieldsPopup.pcf: line 127, column 37
    function mode_78 () : java.lang.Object {
      return field.getUIRuleMode(edition, APDRuleType.TC_MIN)
    }
    
    // 'mode' attribute on ModalCellRef (id=MaximumValue) at APDExposureFieldsPopup.pcf: line 135, column 37
    function mode_97 () : java.lang.Object {
      return field.getUIRuleMode(edition, APDRuleType.TC_MAX)
    }
    
    // 'onChange' attribute on PostOnChange at APDExposureFieldsPopup.pcf: line 151, column 99
    function onChange_104 () : void {
      if (field.SplitByRatingPeriods == false) {field.Scalable = false}
    }
    
    // 'onChange' attribute on PostOnChange at APDExposureFieldsPopup.pcf: line 81, column 124
    function onChange_12 () : void {
      field.updateDropdownPropertiesOnFieldTypeChange(prevFieldType); prevFieldType = field.Type
    }
    
    // 'onChange' attribute on PostOnChange at APDExposureFieldsPopup.pcf: line 102, column 61
    function onChange_28 () : void {
      field.autoSetRiskLocation()
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDExposureFieldsPopup.pcf: line 111, column 53
    function valueRange_37 () : java.lang.Object {
      return APDDataExistenceType.getTypeKeys(false)
    }
    
    // 'value' attribute on TextCell (id=Label_Cell) at APDExposureFieldsPopup.pcf: line 69, column 40
    function valueRoot_10 () : java.lang.Object {
      return field
    }
    
    // 'value' attribute on TextCell (id=Tags_Cell) at APDExposureFieldsPopup.pcf: line 143, column 36
    function value_101 () : java.lang.String {
      return field.TagDisplayValue
    }
    
    // 'value' attribute on CheckBoxCell (id=SplitByRatingPeriods_Cell) at APDExposureFieldsPopup.pcf: line 149, column 54
    function value_105 () : java.lang.Boolean {
      return field.SplitByRatingPeriods
    }
    
    // 'value' attribute on CheckBoxCell (id=Scalable_Cell) at APDExposureFieldsPopup.pcf: line 159, column 50
    function value_110 () : java.lang.Boolean {
      return field.Scalable
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDExposureFieldsPopup.pcf: line 165, column 46
    function value_115 () : java.lang.String {
      return field.Description
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDExposureFieldsPopup.pcf: line 172, column 44
    function value_121 () : java.lang.String {
      return field.Name
    }
    
    // 'value' attribute on BooleanRadioCell (id=BasisScalingKey_Cell) at APDExposureFieldsPopup.pcf: line 93, column 50
    function value_24 () : java.lang.Boolean {
      return field.BasisScalingKey
    }
    
    // 'value' attribute on CheckBoxCell (id=Jurisdiction_Cell) at APDExposureFieldsPopup.pcf: line 100, column 73
    function value_30 () : java.lang.Boolean {
      return field.Jurisdiction
    }
    
    // 'value' attribute on RangeCell (id=Usage_Cell) at APDExposureFieldsPopup.pcf: line 111, column 53
    function value_36 () : APDDataExistenceType {
      return field.getEditionRule(edition, APDRuleType.TC_EXISTENCE).DefaultExistence ?: APDDataExistenceType.TC_CAPTURED
    }
    
    // 'value' attribute on TextCell (id=Label_Cell) at APDExposureFieldsPopup.pcf: line 69, column 40
    function value_8 () : java.lang.String {
      return field.Label
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDExposureFieldsPopup.pcf: line 111, column 53
    function verifyValueRangeIsAllowedType_38 ($$arg :  APDDataExistenceType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDExposureFieldsPopup.pcf: line 111, column 53
    function verifyValueRangeIsAllowedType_38 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDExposureFieldsPopup.pcf: line 111, column 53
    function verifyValueRangeIsAllowedType_38 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDExposureFieldsPopup.pcf: line 111, column 53
    function verifyValueRange_39 () : void {
      var __valueRangeArg = APDDataExistenceType.getTypeKeys(false)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_38(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyCell (id=Type_Cell) at APDExposureFieldsPopup.pcf: line 79, column 44
    function verifyValueType_23 () : void {
      var __valueTypeArg : APDFieldType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueVisible' attribute on CheckBoxCell (id=Scalable_Cell) at APDExposureFieldsPopup.pcf: line 159, column 50
    function visible_109 () : java.lang.Boolean {
      return field.CanScale
    }
    
    // 'visible' attribute on TextCell (id=Name_Cell) at APDExposureFieldsPopup.pcf: line 172, column 44
    function visible_124 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    // 'visible' attribute on MenuItem (id=DropDownDefinition) at APDExposureFieldsPopup.pcf: line 79, column 44
    function visible_13 () : java.lang.Boolean {
      return field.Type == APDFieldType.TC_TYPEKEY
    }
    
    // 'valueVisible' attribute on CheckBoxCell (id=Jurisdiction_Cell) at APDExposureFieldsPopup.pcf: line 100, column 73
    function visible_29 () : java.lang.Boolean {
      return field.Type == APDFieldType.TC_LOCATION
    }
    
    // 'valueVisible' attribute on TextCell (id=Tags_Cell) at APDExposureFieldsPopup.pcf: line 143, column 36
    function visible_98 () : java.lang.Boolean {
      return field.ShowDisplayValue
    }
    
    property get field () : APDExposureField {
      return getIteratedValue(2) as APDExposureField
    }
    
    property get prevFieldType () : APDFieldType {
      return getVariableValue("prevFieldType", 2) as APDFieldType
    }
    
    property set prevFieldType ($arg :  APDFieldType) {
      setVariableValue("prevFieldType", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDExposureFieldsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends APDExposureFieldsPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=ExposureLocalizedValues) at APDExposureFieldsPopup.pcf: line 201, column 45
    function def_onEnter_135 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(fieldDetail, {"Label", "Description"}, {DisplayKey.get("Web.Policy.ManualLine.APDAttribute.Label"), DisplayKey.get("Web.APDProductScreen.APDField.Description")})
    }
    
    // 'def' attribute on PanelRef (id=ExposureLocalizedValues) at APDExposureFieldsPopup.pcf: line 201, column 45
    function def_refreshVariables_136 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(fieldDetail, {"Label", "Description"}, {DisplayKey.get("Web.Policy.ManualLine.APDAttribute.Label"), DisplayKey.get("Web.APDProductScreen.APDField.Description")})
    }
    
    // 'label' attribute on TextCell (id=Description_Cell) at APDExposureFieldsPopup.pcf: line 165, column 46
    function label_3 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDProductScreen.APDField.Description"))
    }
    
    // 'label' attribute on TextCell (id=Name_Cell) at APDExposureFieldsPopup.pcf: line 172, column 44
    function label_4 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDProductScreen.APDField.Name"))
    }
    
    // 'sortBy' attribute on IteratorSort at APDExposureFieldsPopup.pcf: line 58, column 32
    function sortBy_2 (field :  APDExposureField) : java.lang.Object {
      return field.Sequence
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=FieldsLV) at APDExposureFieldsPopup.pcf: line 51, column 46
    function toCreateAndAdd_132 () : APDExposureField {
      return exposure.createAndAddField()
    }
    
    // 'toRemove' attribute on RowIterator (id=FieldsLV) at APDExposureFieldsPopup.pcf: line 51, column 46
    function toRemove_133 (field :  APDExposureField) : void {
      exposure.removeField(field)
    }
    
    // 'value' attribute on RowIterator (id=FieldsLV) at APDExposureFieldsPopup.pcf: line 51, column 46
    function value_134 () : APDExposureField[] {
      return exposure.Fields
    }
    
    // 'visible' attribute on TextCell (id=Name_Cell) at APDExposureFieldsPopup.pcf: line 172, column 44
    function visible_5 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    property get fieldDetail () : APDExposureField {
      return getCurrentSelection(1) as APDExposureField
    }
    
    property set fieldDetail ($arg :  APDExposureField) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}