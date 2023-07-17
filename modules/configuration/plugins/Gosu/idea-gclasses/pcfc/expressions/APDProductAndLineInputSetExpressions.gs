package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDProductAndLineInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDProductAndLineInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDProductAndLineInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDProductAndLineInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=CodeIdentifier_Input) at APDProductAndLineInputSet.pcf: line 34, column 39
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      product.CodeIdentifier = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Abbreviation_Input) at APDProductAndLineInputSet.pcf: line 40, column 37
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      product.Abbreviation = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at APDProductAndLineInputSet.pcf: line 21, column 29
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      product.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=multiline_Input) at APDProductAndLineInputSet.pcf: line 45, column 33
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      product.Multiline = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Coinsurance_Input) at APDProductAndLineInputSet.pcf: line 53, column 36
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      product.Coinsurance = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=UsesLocationListView_Input) at APDProductAndLineInputSet.pcf: line 58, column 45
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      product.UsesLocationListView = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Portal_Input) at APDProductAndLineInputSet.pcf: line 64, column 65
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      product.Portal = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=ProductCurrencies_Input) at APDProductAndLineInputSet.pcf: line 70, column 40
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      product.Currencies = (__VALUE_TO_SET as APDCurrencyHandling)
    }
    
    // 'value' attribute on TypeKeyInput (id=AccountType_Input) at APDProductAndLineInputSet.pcf: line 76, column 39
    function defaultSetter_44 (__VALUE_TO_SET :  java.lang.Object) : void {
      product.ProductAccountType = (__VALUE_TO_SET as ProductAccountType)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at APDProductAndLineInputSet.pcf: line 27, column 36
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      product.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at APDProductAndLineInputSet.pcf: line 13, column 23
    function initialValue_0 () : Boolean {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser().inDevelopMode()
    }
    
    // 'onChange' attribute on PostOnChange at APDProductAndLineInputSet.pcf: line 47, column 122
    function onChange_19 () : void {
      if (not product.isMultiline()) product.addDefaultSingleLine() else product.removeDefaultSingleLine()
    }
    
    // 'validationExpression' attribute on TextInput (id=CodeIdentifier_Input) at APDProductAndLineInputSet.pcf: line 34, column 39
    function validationExpression_9 () : java.lang.Object {
      return product.checkCodeIdentifierIsValid()
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at APDProductAndLineInputSet.pcf: line 21, column 29
    function valueRoot_3 () : java.lang.Object {
      return product
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at APDProductAndLineInputSet.pcf: line 21, column 29
    function value_1 () : java.lang.String {
      return product.Name
    }
    
    // 'value' attribute on TextInput (id=CodeIdentifier_Input) at APDProductAndLineInputSet.pcf: line 34, column 39
    function value_10 () : java.lang.String {
      return product.CodeIdentifier
    }
    
    // 'value' attribute on TextInput (id=Abbreviation_Input) at APDProductAndLineInputSet.pcf: line 40, column 37
    function value_15 () : java.lang.String {
      return product.Abbreviation
    }
    
    // 'value' attribute on BooleanRadioInput (id=multiline_Input) at APDProductAndLineInputSet.pcf: line 45, column 33
    function value_20 () : java.lang.Boolean {
      return product.Multiline
    }
    
    // 'value' attribute on BooleanRadioInput (id=Coinsurance_Input) at APDProductAndLineInputSet.pcf: line 53, column 36
    function value_24 () : java.lang.Boolean {
      return product.Coinsurance
    }
    
    // 'value' attribute on BooleanRadioInput (id=UsesLocationListView_Input) at APDProductAndLineInputSet.pcf: line 58, column 45
    function value_28 () : java.lang.Boolean {
      return product.UsesLocationListView
    }
    
    // 'value' attribute on BooleanRadioInput (id=Portal_Input) at APDProductAndLineInputSet.pcf: line 64, column 65
    function value_33 () : java.lang.Boolean {
      return product.Portal
    }
    
    // 'value' attribute on TypeKeyInput (id=ProductCurrencies_Input) at APDProductAndLineInputSet.pcf: line 70, column 40
    function value_38 () : APDCurrencyHandling {
      return product.Currencies
    }
    
    // 'value' attribute on TypeKeyInput (id=AccountType_Input) at APDProductAndLineInputSet.pcf: line 76, column 39
    function value_43 () : ProductAccountType {
      return product.ProductAccountType
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at APDProductAndLineInputSet.pcf: line 27, column 36
    function value_5 () : java.lang.String {
      return product.Description
    }
    
    // 'valueType' attribute on TypeKeyInput (id=ProductCurrencies_Input) at APDProductAndLineInputSet.pcf: line 70, column 40
    function verifyValueType_42 () : void {
      var __valueTypeArg : APDCurrencyHandling
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyInput (id=AccountType_Input) at APDProductAndLineInputSet.pcf: line 76, column 39
    function verifyValueType_47 () : void {
      var __valueTypeArg : ProductAccountType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on BooleanRadioInput (id=Portal_Input) at APDProductAndLineInputSet.pcf: line 64, column 65
    function visible_32 () : java.lang.Boolean {
      return ScriptParameters.APDEnableDigitalAutoGenConfig
    }
    
    property get inDevelopMode () : Boolean {
      return getVariableValue("inDevelopMode", 0) as Boolean
    }
    
    property set inDevelopMode ($arg :  Boolean) {
      setVariableValue("inDevelopMode", 0, $arg)
    }
    
    property get product () : APDProduct {
      return getRequireValue("product", 0) as APDProduct
    }
    
    property set product ($arg :  APDProduct) {
      setRequireValue("product", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDProductAndLineInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InputSetExpressionsImpl extends APDProductAndLineInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on BooleanRadioInput (id=HasExposure_Input) at APDProductAndLineInputSet.pcf: line 171, column 105
    function defaultSetter_103 (__VALUE_TO_SET :  java.lang.Object) : void {
      line.HasExposure = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=ExposureLabel_Input) at APDProductAndLineInputSet.pcf: line 181, column 127
    function defaultSetter_109 (__VALUE_TO_SET :  java.lang.Object) : void {
      line.ExposureLabel = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=lineMenuLabel_Input) at APDProductAndLineInputSet.pcf: line 186, column 32
    function defaultSetter_117 (__VALUE_TO_SET :  java.lang.Object) : void {
      line.MenuLabel = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=TypeName_Input) at APDProductAndLineInputSet.pcf: line 197, column 34
    function defaultSetter_124 (__VALUE_TO_SET :  java.lang.Object) : void {
      line.TypeName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=lineName_Input) at APDProductAndLineInputSet.pcf: line 91, column 27
    function defaultSetter_52 (__VALUE_TO_SET :  java.lang.Object) : void {
      line.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=lineDescription_Input) at APDProductAndLineInputSet.pcf: line 101, column 34
    function defaultSetter_58 (__VALUE_TO_SET :  java.lang.Object) : void {
      line.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=LinePrefix_Input) at APDProductAndLineInputSet.pcf: line 111, column 33
    function defaultSetter_64 (__VALUE_TO_SET :  java.lang.Object) : void {
      line.LinePrefix = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=lineCodeIdentifier_Input) at APDProductAndLineInputSet.pcf: line 121, column 37
    function defaultSetter_70 (__VALUE_TO_SET :  java.lang.Object) : void {
      line.CodeIdentifier = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=LineCurrencies_Input) at APDProductAndLineInputSet.pcf: line 131, column 41
    function defaultSetter_76 (__VALUE_TO_SET :  java.lang.Object) : void {
      line.Currencies = (__VALUE_TO_SET as APDCurrencyHandling)
    }
    
    // 'value' attribute on TypeKeyInput (id=ProductLineType_Input) at APDProductAndLineInputSet.pcf: line 143, column 38
    function defaultSetter_81 (__VALUE_TO_SET :  java.lang.Object) : void {
      line.CoverableType = (__VALUE_TO_SET as APDCoverableType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=HasChildren_Input) at APDProductAndLineInputSet.pcf: line 153, column 108
    function defaultSetter_89 (__VALUE_TO_SET :  java.lang.Object) : void {
      line.HasChildren = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=ChildrenLabel_Input) at APDProductAndLineInputSet.pcf: line 163, column 130
    function defaultSetter_95 (__VALUE_TO_SET :  java.lang.Object) : void {
      line.ChildrenLabel = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at APDProductAndLineInputSet.pcf: line 83, column 32
    function initialValue_48 () : APDProductLine {
      return product.ProductLines.first().ProductLine
    }
    
    // 'label' attribute on TextInput (id=lineMenuLabel_Input) at APDProductAndLineInputSet.pcf: line 186, column 32
    function label_115 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDNewProduct.MenuLabel"))
    }
    
    // 'label' attribute on TextInput (id=TypeName_Input) at APDProductAndLineInputSet.pcf: line 197, column 34
    function label_122 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDNewProduct.TypeName"))
    }
    
    // 'onChange' attribute on PostOnChange at APDProductAndLineInputSet.pcf: line 155, column 101
    function onChange_85 () : void {
      if (line.hasChildRiskObjectsToBeRemoved()) {line.removeAllChildRiskObjects()}
    }
    
    // 'onChange' attribute on PostOnChange at APDProductAndLineInputSet.pcf: line 173, column 87
    function onChange_99 () : void {
      if (line.hasExposuresToBeRemoved()) {line.removeAllExposures()}
    }
    
    // 'value' attribute on Reflect at APDProductAndLineInputSet.pcf: line 94, column 83
    function reflectionValue_49 (TRIGGER_INDEX :  int, VALUE :  java.lang.String) : java.lang.Object {
      return DisplayKey.get("Web.APDProductLine.LineName", VALUE)
    }
    
    // 'value' attribute on Reflect at APDProductAndLineInputSet.pcf: line 104, column 26
    function reflectionValue_55 (TRIGGER_INDEX :  int, VALUE :  Object) : java.lang.Object {
      return VALUE
    }
    
    // 'value' attribute on Reflect at APDProductAndLineInputSet.pcf: line 124, column 68
    function reflectionValue_67 (TRIGGER_INDEX :  int, VALUE :  java.lang.String) : java.lang.Object {
      return VALUE + APDProductLine.LineCodeIdentifierSuffix
    }
    
    // 'showConfirmMessage' attribute on BooleanRadioInput (id=HasExposure_Input) at APDProductAndLineInputSet.pcf: line 171, column 105
    function showConfirmMessage_101 () : java.lang.Boolean {
      return line.showExposureDeletionConfirmationMessage()
    }
    
    // 'showConfirmMessage' attribute on BooleanRadioInput (id=HasChildren_Input) at APDProductAndLineInputSet.pcf: line 153, column 108
    function showConfirmMessage_87 () : java.lang.Boolean {
      return line.showChildDeletionConfirmationMessage()
    }
    
    // 'value' attribute on TextInput (id=lineName_Input) at APDProductAndLineInputSet.pcf: line 91, column 27
    function valueRoot_53 () : java.lang.Object {
      return line
    }
    
    // 'value' attribute on BooleanRadioInput (id=HasExposure_Input) at APDProductAndLineInputSet.pcf: line 171, column 105
    function value_102 () : java.lang.Boolean {
      return line.HasExposure
    }
    
    // 'value' attribute on TextInput (id=ExposureLabel_Input) at APDProductAndLineInputSet.pcf: line 181, column 127
    function value_108 () : java.lang.String {
      return line.ExposureLabel
    }
    
    // 'value' attribute on TextInput (id=lineMenuLabel_Input) at APDProductAndLineInputSet.pcf: line 186, column 32
    function value_116 () : java.lang.String {
      return line.MenuLabel
    }
    
    // 'value' attribute on TextInput (id=TypeName_Input) at APDProductAndLineInputSet.pcf: line 197, column 34
    function value_123 () : java.lang.String {
      return line.TypeName
    }
    
    // 'value' attribute on TextInput (id=lineName_Input) at APDProductAndLineInputSet.pcf: line 91, column 27
    function value_51 () : java.lang.String {
      return line.Name
    }
    
    // 'value' attribute on TextInput (id=lineDescription_Input) at APDProductAndLineInputSet.pcf: line 101, column 34
    function value_57 () : java.lang.String {
      return line.Description
    }
    
    // 'value' attribute on TextInput (id=LinePrefix_Input) at APDProductAndLineInputSet.pcf: line 111, column 33
    function value_63 () : java.lang.String {
      return line.LinePrefix
    }
    
    // 'value' attribute on TextInput (id=lineCodeIdentifier_Input) at APDProductAndLineInputSet.pcf: line 121, column 37
    function value_69 () : java.lang.String {
      return line.CodeIdentifier
    }
    
    // 'value' attribute on TypeKeyInput (id=LineCurrencies_Input) at APDProductAndLineInputSet.pcf: line 131, column 41
    function value_75 () : APDCurrencyHandling {
      return line.Currencies
    }
    
    // 'value' attribute on TypeKeyInput (id=ProductLineType_Input) at APDProductAndLineInputSet.pcf: line 143, column 38
    function value_80 () : APDCoverableType {
      return line.CoverableType
    }
    
    // 'value' attribute on BooleanRadioInput (id=HasChildren_Input) at APDProductAndLineInputSet.pcf: line 153, column 108
    function value_88 () : java.lang.Boolean {
      return line.HasChildren
    }
    
    // 'value' attribute on TextInput (id=ChildrenLabel_Input) at APDProductAndLineInputSet.pcf: line 163, column 130
    function value_94 () : java.lang.String {
      return line.ChildrenLabel
    }
    
    // 'valueType' attribute on TypeKeyInput (id=LineCurrencies_Input) at APDProductAndLineInputSet.pcf: line 131, column 41
    function verifyValueType_79 () : void {
      var __valueTypeArg : APDCurrencyHandling
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyInput (id=ProductLineType_Input) at APDProductAndLineInputSet.pcf: line 143, column 38
    function verifyValueType_84 () : void {
      var __valueTypeArg : APDCoverableType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on BooleanRadioInput (id=HasExposure_Input) at APDProductAndLineInputSet.pcf: line 171, column 105
    function visible_100 () : java.lang.Boolean {
      return APDCoverableType.TF_HASEXPOSURE.TypeKeys.hasMatch(\tk -> tk == line.CoverableType)
    }
    
    // 'visible' attribute on TextInput (id=ExposureLabel_Input) at APDProductAndLineInputSet.pcf: line 181, column 127
    function visible_107 () : java.lang.Boolean {
      return APDCoverableType.TF_HASEXPOSURE.TypeKeys.hasMatch(\tk -> tk == line.CoverableType) and line.HasExposure
    }
    
    // 'visible' attribute on TextInput (id=TypeName_Input) at APDProductAndLineInputSet.pcf: line 197, column 34
    function visible_121 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    // 'visible' attribute on InputSet at APDProductAndLineInputSet.pcf: line 78, column 40
    function visible_129 () : java.lang.Boolean {
      return !product.isMultiline()
    }
    
    // 'visible' attribute on BooleanRadioInput (id=HasChildren_Input) at APDProductAndLineInputSet.pcf: line 153, column 108
    function visible_86 () : java.lang.Boolean {
      return APDCoverableType.TF_HASRISKOBJECTS.TypeKeys.hasMatch(\tk -> tk == line.CoverableType)
    }
    
    // 'visible' attribute on TextInput (id=ChildrenLabel_Input) at APDProductAndLineInputSet.pcf: line 163, column 130
    function visible_93 () : java.lang.Boolean {
      return APDCoverableType.TF_HASRISKOBJECTS.TypeKeys.hasMatch(\tk -> tk == line.CoverableType) and line.HasChildren
    }
    
    property get line () : APDProductLine {
      return getVariableValue("line", 1) as APDProductLine
    }
    
    property set line ($arg :  APDProductLine) {
      setVariableValue("line", 1, $arg)
    }
    
    
  }
  
  
}