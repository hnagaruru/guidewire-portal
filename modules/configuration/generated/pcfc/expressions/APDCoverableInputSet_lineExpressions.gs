package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverableInputSet.line.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDCoverableInputSet_lineExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverableInputSet.line.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDCoverableInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=LinePrefix_Input) at APDCoverableInputSet.line.pcf: line 36, column 32
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      line.LinePrefix = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=lineCodeIdentifier_Input) at APDCoverableInputSet.line.pcf: line 42, column 36
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      line.CodeIdentifier = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Currencies_Input) at APDCoverableInputSet.line.pcf: line 48, column 40
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      line.Currencies = (__VALUE_TO_SET as APDCurrencyHandling)
    }
    
    // 'value' attribute on TypeKeyInput (id=ProductLineType_Input) at APDCoverableInputSet.line.pcf: line 55, column 36
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      line.CoverableType = (__VALUE_TO_SET as APDCoverableType)
    }
    
    // 'value' attribute on TextInput (id=lineName_Input) at APDCoverableInputSet.line.pcf: line 24, column 26
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      line.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=HasChildren_Input) at APDCoverableInputSet.line.pcf: line 65, column 106
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      line.HasChildren = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=ChildrenLabel_Input) at APDCoverableInputSet.line.pcf: line 75, column 128
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      line.ChildrenLabel = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=HasExposure_Input) at APDCoverableInputSet.line.pcf: line 83, column 103
    function defaultSetter_46 (__VALUE_TO_SET :  java.lang.Object) : void {
      line.HasExposure = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=ExposureLabel_Input) at APDCoverableInputSet.line.pcf: line 93, column 125
    function defaultSetter_52 (__VALUE_TO_SET :  java.lang.Object) : void {
      line.ExposureLabel = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=lineMenuLabel_Input) at APDCoverableInputSet.line.pcf: line 98, column 31
    function defaultSetter_58 (__VALUE_TO_SET :  java.lang.Object) : void {
      line.MenuLabel = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=TypeName_Input) at APDCoverableInputSet.line.pcf: line 105, column 32
    function defaultSetter_65 (__VALUE_TO_SET :  java.lang.Object) : void {
      line.TypeName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=lineDescription_Input) at APDCoverableInputSet.line.pcf: line 30, column 33
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      line.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at APDCoverableInputSet.line.pcf: line 14, column 30
    function initialValue_0 () : APDProductLine {
      return coverable as APDProductLine
    }
    
    // 'initialValue' attribute on Variable at APDCoverableInputSet.line.pcf: line 18, column 23
    function initialValue_1 () : Boolean {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser().inDevelopMode()
    }
    
    // 'label' attribute on TextInput (id=lineMenuLabel_Input) at APDCoverableInputSet.line.pcf: line 98, column 31
    function label_56 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDNewProduct.MenuLabel"))
    }
    
    // 'label' attribute on TextInput (id=TypeName_Input) at APDCoverableInputSet.line.pcf: line 105, column 32
    function label_63 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDNewProduct.TypeName"))
    }
    
    // 'onChange' attribute on PostOnChange at APDCoverableInputSet.line.pcf: line 67, column 99
    function onChange_28 () : void {
      if (line.hasChildRiskObjectsToBeRemoved()) {line.removeAllChildRiskObjects()}
    }
    
    // 'onChange' attribute on PostOnChange at APDCoverableInputSet.line.pcf: line 85, column 85
    function onChange_42 () : void {
      if (line.hasExposuresToBeRemoved()) {line.removeAllExposures()}
    }
    
    // 'showConfirmMessage' attribute on BooleanRadioInput (id=HasChildren_Input) at APDCoverableInputSet.line.pcf: line 65, column 106
    function showConfirmMessage_30 () : java.lang.Boolean {
      return line.showChildDeletionConfirmationMessage()
    }
    
    // 'showConfirmMessage' attribute on BooleanRadioInput (id=HasExposure_Input) at APDCoverableInputSet.line.pcf: line 83, column 103
    function showConfirmMessage_44 () : java.lang.Boolean {
      return line.showExposureDeletionConfirmationMessage()
    }
    
    // 'value' attribute on TextInput (id=lineName_Input) at APDCoverableInputSet.line.pcf: line 24, column 26
    function valueRoot_4 () : java.lang.Object {
      return line
    }
    
    // 'value' attribute on TextInput (id=LinePrefix_Input) at APDCoverableInputSet.line.pcf: line 36, column 32
    function value_10 () : java.lang.String {
      return line.LinePrefix
    }
    
    // 'value' attribute on TextInput (id=lineCodeIdentifier_Input) at APDCoverableInputSet.line.pcf: line 42, column 36
    function value_14 () : java.lang.String {
      return line.CodeIdentifier
    }
    
    // 'value' attribute on TypeKeyInput (id=Currencies_Input) at APDCoverableInputSet.line.pcf: line 48, column 40
    function value_18 () : APDCurrencyHandling {
      return line.Currencies
    }
    
    // 'value' attribute on TextInput (id=lineName_Input) at APDCoverableInputSet.line.pcf: line 24, column 26
    function value_2 () : java.lang.String {
      return line.Name
    }
    
    // 'value' attribute on TypeKeyInput (id=ProductLineType_Input) at APDCoverableInputSet.line.pcf: line 55, column 36
    function value_23 () : APDCoverableType {
      return line.CoverableType
    }
    
    // 'value' attribute on BooleanRadioInput (id=HasChildren_Input) at APDCoverableInputSet.line.pcf: line 65, column 106
    function value_31 () : java.lang.Boolean {
      return line.HasChildren
    }
    
    // 'value' attribute on TextInput (id=ChildrenLabel_Input) at APDCoverableInputSet.line.pcf: line 75, column 128
    function value_37 () : java.lang.String {
      return line.ChildrenLabel
    }
    
    // 'value' attribute on BooleanRadioInput (id=HasExposure_Input) at APDCoverableInputSet.line.pcf: line 83, column 103
    function value_45 () : java.lang.Boolean {
      return line.HasExposure
    }
    
    // 'value' attribute on TextInput (id=ExposureLabel_Input) at APDCoverableInputSet.line.pcf: line 93, column 125
    function value_51 () : java.lang.String {
      return line.ExposureLabel
    }
    
    // 'value' attribute on TextInput (id=lineMenuLabel_Input) at APDCoverableInputSet.line.pcf: line 98, column 31
    function value_57 () : java.lang.String {
      return line.MenuLabel
    }
    
    // 'value' attribute on TextInput (id=lineDescription_Input) at APDCoverableInputSet.line.pcf: line 30, column 33
    function value_6 () : java.lang.String {
      return line.Description
    }
    
    // 'value' attribute on TextInput (id=TypeName_Input) at APDCoverableInputSet.line.pcf: line 105, column 32
    function value_64 () : java.lang.String {
      return line.TypeName
    }
    
    // 'valueType' attribute on TypeKeyInput (id=Currencies_Input) at APDCoverableInputSet.line.pcf: line 48, column 40
    function verifyValueType_22 () : void {
      var __valueTypeArg : APDCurrencyHandling
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyInput (id=ProductLineType_Input) at APDCoverableInputSet.line.pcf: line 55, column 36
    function verifyValueType_27 () : void {
      var __valueTypeArg : APDCoverableType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on BooleanRadioInput (id=HasChildren_Input) at APDCoverableInputSet.line.pcf: line 65, column 106
    function visible_29 () : java.lang.Boolean {
      return APDCoverableType.TF_HASRISKOBJECTS.TypeKeys.hasMatch(\tk -> tk == line.CoverableType)
    }
    
    // 'visible' attribute on TextInput (id=ChildrenLabel_Input) at APDCoverableInputSet.line.pcf: line 75, column 128
    function visible_36 () : java.lang.Boolean {
      return APDCoverableType.TF_HASRISKOBJECTS.TypeKeys.hasMatch(\tk -> tk == line.CoverableType) and line.HasChildren
    }
    
    // 'visible' attribute on BooleanRadioInput (id=HasExposure_Input) at APDCoverableInputSet.line.pcf: line 83, column 103
    function visible_43 () : java.lang.Boolean {
      return APDCoverableType.TF_HASEXPOSURE.TypeKeys.hasMatch(\tk -> tk == line.CoverableType)
    }
    
    // 'visible' attribute on TextInput (id=ExposureLabel_Input) at APDCoverableInputSet.line.pcf: line 93, column 125
    function visible_50 () : java.lang.Boolean {
      return APDCoverableType.TF_HASEXPOSURE.TypeKeys.hasMatch(\tk -> tk == line.CoverableType) and line.HasExposure
    }
    
    // 'visible' attribute on TextInput (id=TypeName_Input) at APDCoverableInputSet.line.pcf: line 105, column 32
    function visible_62 () : java.lang.Boolean {
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
    
    property get line () : APDProductLine {
      return getVariableValue("line", 0) as APDProductLine
    }
    
    property set line ($arg :  APDProductLine) {
      setVariableValue("line", 0, $arg)
    }
    
    
  }
  
  
}