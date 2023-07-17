package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDNewExposurePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDNewExposurePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDNewExposurePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDNewExposurePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (riskCoverable :  APDRiskCoverable) : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Popup (id=APDNewExposurePopup) at APDNewExposurePopup.pcf: line 11, column 66
    function beforeCommit_37 (pickedValue :  java.lang.Object) : void {
      exposure.buildRiskExposure(riskCoverable)
    }
    
    // 'value' attribute on TypeKeyInput (id=ExposureType_Input) at APDNewExposurePopup.pcf: line 44, column 41
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.ExposureType = (__VALUE_TO_SET as APDExposureType)
    }
    
    // 'value' attribute on TypeKeyInput (id=RatingType_Input) at APDNewExposurePopup.pcf: line 54, column 47
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.RatingType = (__VALUE_TO_SET as APDExposureRatingType)
    }
    
    // 'value' attribute on TypeKeyInput (id=ContactRole_Input) at APDNewExposurePopup.pcf: line 65, column 76
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.ContactRole = (__VALUE_TO_SET as APDExposureContactRole)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at APDNewExposurePopup.pcf: line 32, column 36
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=RiskLocation_Input) at APDNewExposurePopup.pcf: line 72, column 45
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.RiskLocation = (__VALUE_TO_SET as APDRiskLocationType)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at APDNewExposurePopup.pcf: line 37, column 43
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at APDNewExposurePopup.pcf: line 20, column 27
    function initialValue_0 () : APDExposure {
      return riskCoverable.Coverable.addExposure()
    }
    
    // EditButtons at APDNewExposurePopup.pcf: line 23, column 23
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'label' attribute on TextInput (id=Description_Input) at APDNewExposurePopup.pcf: line 37, column 43
    function label_6 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDNewExposure.Description"))
    }
    
    // 'onChange' attribute on PostOnChange at APDNewExposurePopup.pcf: line 46, column 58
    function onChange_12 () : void {
      exposure.toggleExposureParty()
    }
    
    // 'onChange' attribute on PostOnChange at APDNewExposurePopup.pcf: line 56, column 58
    function onChange_18 () : void {
      exposure.toggleExposureParty()
    }
    
    // 'onChange' attribute on PostOnChange at APDNewExposurePopup.pcf: line 74, column 65
    function onChange_31 () : void {
      exposure.toggleJurisdictionLocation()
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at APDNewExposurePopup.pcf: line 32, column 36
    function valueRoot_4 () : java.lang.Object {
      return exposure
    }
    
    // 'value' attribute on TypeKeyInput (id=ExposureType_Input) at APDNewExposurePopup.pcf: line 44, column 41
    function value_13 () : APDExposureType {
      return exposure.ExposureType
    }
    
    // 'value' attribute on TypeKeyInput (id=RatingType_Input) at APDNewExposurePopup.pcf: line 54, column 47
    function value_19 () : APDExposureRatingType {
      return exposure.RatingType
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at APDNewExposurePopup.pcf: line 32, column 36
    function value_2 () : java.lang.String {
      return exposure.Name
    }
    
    // 'value' attribute on TypeKeyInput (id=ContactRole_Input) at APDNewExposurePopup.pcf: line 65, column 76
    function value_25 () : APDExposureContactRole {
      return exposure.ContactRole
    }
    
    // 'value' attribute on TypeKeyInput (id=RiskLocation_Input) at APDNewExposurePopup.pcf: line 72, column 45
    function value_32 () : APDRiskLocationType {
      return exposure.RiskLocation
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at APDNewExposurePopup.pcf: line 37, column 43
    function value_7 () : java.lang.String {
      return exposure.Description
    }
    
    // 'valueType' attribute on TypeKeyInput (id=ExposureType_Input) at APDNewExposurePopup.pcf: line 44, column 41
    function verifyValueType_17 () : void {
      var __valueTypeArg : APDExposureType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyInput (id=RatingType_Input) at APDNewExposurePopup.pcf: line 54, column 47
    function verifyValueType_23 () : void {
      var __valueTypeArg : APDExposureRatingType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyInput (id=ContactRole_Input) at APDNewExposurePopup.pcf: line 65, column 76
    function verifyValueType_30 () : void {
      var __valueTypeArg : APDExposureContactRole
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyInput (id=RiskLocation_Input) at APDNewExposurePopup.pcf: line 72, column 45
    function verifyValueType_36 () : void {
      var __valueTypeArg : APDRiskLocationType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on TypeKeyInput (id=ContactRole_Input) at APDNewExposurePopup.pcf: line 65, column 76
    function visible_24 () : java.lang.Boolean {
      return exposure.ExposureType == APDExposureType.TC_CONTACT
    }
    
    override property get CurrentLocation () : pcf.APDNewExposurePopup {
      return super.CurrentLocation as pcf.APDNewExposurePopup
    }
    
    property get exposure () : APDExposure {
      return getVariableValue("exposure", 0) as APDExposure
    }
    
    property set exposure ($arg :  APDExposure) {
      setVariableValue("exposure", 0, $arg)
    }
    
    property get riskCoverable () : APDRiskCoverable {
      return getVariableValue("riskCoverable", 0) as APDRiskCoverable
    }
    
    property set riskCoverable ($arg :  APDRiskCoverable) {
      setVariableValue("riskCoverable", 0, $arg)
    }
    
    
  }
  
  
}