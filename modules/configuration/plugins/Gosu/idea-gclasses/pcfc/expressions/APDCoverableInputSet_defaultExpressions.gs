package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverableInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDCoverableInputSet_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverableInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDCoverableInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on BooleanRadioInput (id=IsAutoNumbered_Input) at APDCoverableInputSet.default.pcf: line 33, column 46
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverable.IsAutoNumbered = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=lineName_Input) at APDCoverableInputSet.default.pcf: line 20, column 31
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverable.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=CoverableType_Input) at APDCoverableInputSet.default.pcf: line 40, column 36
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverable.CoverableType = (__VALUE_TO_SET as APDCoverableType)
    }
    
    // 'value' attribute on TypeKeyInput (id=RiskLocation_Input) at APDCoverableInputSet.default.pcf: line 49, column 39
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverable.RiskLocation = (__VALUE_TO_SET as APDRiskLocationType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=HasChildren_Input) at APDCoverableInputSet.default.pcf: line 60, column 111
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverable.HasChildren = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=ChildrenLabel_Input) at APDCoverableInputSet.default.pcf: line 70, column 138
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverable.ChildrenLabel = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=HasExposure_Input) at APDCoverableInputSet.default.pcf: line 78, column 108
    function defaultSetter_49 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverable.HasExposure = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=ExposureLabel_Input) at APDCoverableInputSet.default.pcf: line 88, column 135
    function defaultSetter_56 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverable.ExposureLabel = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=lineMenuLabel_Input) at APDCoverableInputSet.default.pcf: line 93, column 36
    function defaultSetter_62 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverable.MenuLabel = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=TypeName_Input) at APDCoverableInputSet.default.pcf: line 100, column 32
    function defaultSetter_69 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverable.TypeName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=lineDescription_Input) at APDCoverableInputSet.default.pcf: line 26, column 38
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverable.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at APDCoverableInputSet.default.pcf: line 14, column 23
    function initialValue_0 () : Boolean {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser().inDevelopMode()
    }
    
    // 'label' attribute on BooleanRadioInput (id=IsAutoNumbered_Input) at APDCoverableInputSet.default.pcf: line 33, column 46
    function label_12 () : java.lang.Object {
      return DisplayKey.get("Web.APDCoverable.IsAutoNumbered", coverable.Name)
    }
    
    // 'label' attribute on BooleanRadioInput (id=HasExposure_Input) at APDCoverableInputSet.default.pcf: line 78, column 108
    function label_46 () : java.lang.Object {
      return DisplayKey.get("Web.APDCoverable.HasExposure", coverable.Name)
    }
    
    // 'label' attribute on TextInput (id=lineDescription_Input) at APDCoverableInputSet.default.pcf: line 26, column 38
    function label_5 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverable.Description"))
    }
    
    // 'label' attribute on TextInput (id=lineMenuLabel_Input) at APDCoverableInputSet.default.pcf: line 93, column 36
    function label_60 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverable.MenuLabel"))
    }
    
    // 'label' attribute on TextInput (id=TypeName_Input) at APDCoverableInputSet.default.pcf: line 100, column 32
    function label_67 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverable.TypeName"))
    }
    
    // 'onChange' attribute on PostOnChange at APDCoverableInputSet.default.pcf: line 51, column 129
    function onChange_24 () : void {
      coverable.toggleJurisdictionLocation(); if(!coverable.CanBeAutoNumbered) {coverable.IsAutoNumbered = false}
    }
    
    // 'onChange' attribute on PostOnChange at APDCoverableInputSet.default.pcf: line 62, column 109
    function onChange_30 () : void {
      if (coverable.hasChildRiskObjectsToBeRemoved()) {coverable.removeAllChildRiskObjects()}
    }
    
    // 'onChange' attribute on PostOnChange at APDCoverableInputSet.default.pcf: line 80, column 95
    function onChange_44 () : void {
      if (coverable.hasExposuresToBeRemoved()) {coverable.removeAllExposures()}
    }
    
    // 'showConfirmMessage' attribute on BooleanRadioInput (id=HasChildren_Input) at APDCoverableInputSet.default.pcf: line 60, column 111
    function showConfirmMessage_32 () : java.lang.Boolean {
      return coverable.showChildDeletionConfirmationMessage()
    }
    
    // 'showConfirmMessage' attribute on BooleanRadioInput (id=HasExposure_Input) at APDCoverableInputSet.default.pcf: line 78, column 108
    function showConfirmMessage_47 () : java.lang.Boolean {
      return coverable.showExposureDeletionConfirmationMessage()
    }
    
    // 'value' attribute on TextInput (id=lineName_Input) at APDCoverableInputSet.default.pcf: line 20, column 31
    function valueRoot_3 () : java.lang.Object {
      return coverable
    }
    
    // 'value' attribute on TextInput (id=lineName_Input) at APDCoverableInputSet.default.pcf: line 20, column 31
    function value_1 () : java.lang.String {
      return coverable.Name
    }
    
    // 'value' attribute on BooleanRadioInput (id=IsAutoNumbered_Input) at APDCoverableInputSet.default.pcf: line 33, column 46
    function value_13 () : java.lang.Boolean {
      return coverable.IsAutoNumbered
    }
    
    // 'value' attribute on TypeKeyInput (id=CoverableType_Input) at APDCoverableInputSet.default.pcf: line 40, column 36
    function value_19 () : APDCoverableType {
      return coverable.CoverableType
    }
    
    // 'value' attribute on TypeKeyInput (id=RiskLocation_Input) at APDCoverableInputSet.default.pcf: line 49, column 39
    function value_25 () : APDRiskLocationType {
      return coverable.RiskLocation
    }
    
    // 'value' attribute on BooleanRadioInput (id=HasChildren_Input) at APDCoverableInputSet.default.pcf: line 60, column 111
    function value_33 () : java.lang.Boolean {
      return coverable.HasChildren
    }
    
    // 'value' attribute on TextInput (id=ChildrenLabel_Input) at APDCoverableInputSet.default.pcf: line 70, column 138
    function value_39 () : java.lang.String {
      return coverable.ChildrenLabel
    }
    
    // 'value' attribute on BooleanRadioInput (id=HasExposure_Input) at APDCoverableInputSet.default.pcf: line 78, column 108
    function value_48 () : java.lang.Boolean {
      return coverable.HasExposure
    }
    
    // 'value' attribute on TextInput (id=ExposureLabel_Input) at APDCoverableInputSet.default.pcf: line 88, column 135
    function value_55 () : java.lang.String {
      return coverable.ExposureLabel
    }
    
    // 'value' attribute on TextInput (id=lineDescription_Input) at APDCoverableInputSet.default.pcf: line 26, column 38
    function value_6 () : java.lang.String {
      return coverable.Description
    }
    
    // 'value' attribute on TextInput (id=lineMenuLabel_Input) at APDCoverableInputSet.default.pcf: line 93, column 36
    function value_61 () : java.lang.String {
      return coverable.MenuLabel
    }
    
    // 'value' attribute on TextInput (id=TypeName_Input) at APDCoverableInputSet.default.pcf: line 100, column 32
    function value_68 () : java.lang.String {
      return coverable.TypeName
    }
    
    // 'valueType' attribute on TypeKeyInput (id=CoverableType_Input) at APDCoverableInputSet.default.pcf: line 40, column 36
    function verifyValueType_23 () : void {
      var __valueTypeArg : APDCoverableType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyInput (id=RiskLocation_Input) at APDCoverableInputSet.default.pcf: line 49, column 39
    function verifyValueType_29 () : void {
      var __valueTypeArg : APDRiskLocationType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on BooleanRadioInput (id=IsAutoNumbered_Input) at APDCoverableInputSet.default.pcf: line 33, column 46
    function visible_11 () : java.lang.Boolean {
      return coverable.CanBeAutoNumbered
    }
    
    // 'visible' attribute on BooleanRadioInput (id=HasChildren_Input) at APDCoverableInputSet.default.pcf: line 60, column 111
    function visible_31 () : java.lang.Boolean {
      return APDCoverableType.TF_HASRISKOBJECTS.TypeKeys.hasMatch(\tk -> tk == coverable.CoverableType)
    }
    
    // 'visible' attribute on TextInput (id=ChildrenLabel_Input) at APDCoverableInputSet.default.pcf: line 70, column 138
    function visible_38 () : java.lang.Boolean {
      return APDCoverableType.TF_HASRISKOBJECTS.TypeKeys.hasMatch(\tk -> tk == coverable.CoverableType) and coverable.HasChildren
    }
    
    // 'visible' attribute on BooleanRadioInput (id=HasExposure_Input) at APDCoverableInputSet.default.pcf: line 78, column 108
    function visible_45 () : java.lang.Boolean {
      return APDCoverableType.TF_HASEXPOSURE.TypeKeys.hasMatch(\tk -> tk == coverable.CoverableType)
    }
    
    // 'visible' attribute on TextInput (id=ExposureLabel_Input) at APDCoverableInputSet.default.pcf: line 88, column 135
    function visible_54 () : java.lang.Boolean {
      return APDCoverableType.TF_HASEXPOSURE.TypeKeys.hasMatch(\tk -> tk == coverable.CoverableType) and coverable.HasExposure
    }
    
    // 'visible' attribute on TextInput (id=TypeName_Input) at APDCoverableInputSet.default.pcf: line 100, column 32
    function visible_66 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    property get coverable () : APDCoverable {
      return getRequireValue("coverable", 0) as APDCoverable
    }
    
    property set coverable ($arg :  APDCoverable) {
      setRequireValue("coverable", 0, $arg)
    }
    
    property get inDevelopMode () : Boolean {
      return getVariableValue("inDevelopMode", 0) as Boolean
    }
    
    property set inDevelopMode ($arg :  Boolean) {
      setVariableValue("inDevelopMode", 0, $arg)
    }
    
    
  }
  
  
}