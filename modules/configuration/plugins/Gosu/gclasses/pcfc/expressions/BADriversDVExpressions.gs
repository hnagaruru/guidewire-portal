package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policy/BADriversDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BADriversDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BADriversDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BADriversDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at BADriversDV.pcf: line 20, column 56
    function def_onEnter_1 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.onEnter(new gw.search.BasicNameOwner(driverNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at BADriversDV.pcf: line 20, column 56
    function def_onEnter_3 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.onEnter(new gw.search.BasicNameOwner(driverNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at BADriversDV.pcf: line 20, column 56
    function def_refreshVariables_2 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.refreshVariables(new gw.search.BasicNameOwner(driverNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at BADriversDV.pcf: line 20, column 56
    function def_refreshVariables_4 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.refreshVariables(new gw.search.BasicNameOwner(driverNameAdapter))
    }
    
    // 'value' attribute on DateInput (id=DateOfBirth_Input) at BADriversDV.pcf: line 34, column 41
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      thisDriver.DateOfBirth = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=MaritalStatus_Input) at BADriversDV.pcf: line 41, column 44
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      thisDriver.MaritalStatus = (__VALUE_TO_SET as typekey.MaritalStatus)
    }
    
    // 'value' attribute on TypeKeyInput (id=YearsExperience_Input) at BADriversDV.pcf: line 47, column 47
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      thisDriver.YearsExperience = (__VALUE_TO_SET as typekey.DriverExperience)
    }
    
    // 'value' attribute on TextInput (id=LicenseNumber_Input) at BADriversDV.pcf: line 53, column 43
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      thisDriver.LicenseNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=LicenseState_Input) at BADriversDV.pcf: line 60, column 36
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      thisDriver.LicenseState = (__VALUE_TO_SET as typekey.State)
    }
    
    // 'value' attribute on TextInput (id=YearLicensed_Input) at BADriversDV.pcf: line 66, column 40
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      thisDriver.YearLicensed = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on DateInput (id=HireDate_Input) at BADriversDV.pcf: line 71, column 38
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      thisDriver.HireDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=Gender_Input) at BADriversDV.pcf: line 27, column 41
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      thisDriver.Gender = (__VALUE_TO_SET as typekey.GenderType)
    }
    
    // 'initialValue' attribute on Variable at BADriversDV.pcf: line 14, column 53
    function initialValue_0 () : gw.lob.ba.CommercialDriverNameAdapter {
      return new gw.lob.ba.CommercialDriverNameAdapter(thisDriver)
    }
    
    // 'mode' attribute on InputSetRef at BADriversDV.pcf: line 20, column 56
    function mode_5 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'value' attribute on TypeKeyInput (id=Gender_Input) at BADriversDV.pcf: line 27, column 41
    function valueRoot_8 () : java.lang.Object {
      return thisDriver
    }
    
    // 'value' attribute on DateInput (id=DateOfBirth_Input) at BADriversDV.pcf: line 34, column 41
    function value_10 () : java.util.Date {
      return thisDriver.DateOfBirth
    }
    
    // 'value' attribute on TypeKeyInput (id=MaritalStatus_Input) at BADriversDV.pcf: line 41, column 44
    function value_14 () : typekey.MaritalStatus {
      return thisDriver.MaritalStatus
    }
    
    // 'value' attribute on TypeKeyInput (id=YearsExperience_Input) at BADriversDV.pcf: line 47, column 47
    function value_18 () : typekey.DriverExperience {
      return thisDriver.YearsExperience
    }
    
    // 'value' attribute on TextInput (id=LicenseNumber_Input) at BADriversDV.pcf: line 53, column 43
    function value_22 () : java.lang.String {
      return thisDriver.LicenseNumber
    }
    
    // 'value' attribute on TypeKeyInput (id=LicenseState_Input) at BADriversDV.pcf: line 60, column 36
    function value_26 () : typekey.State {
      return thisDriver.LicenseState
    }
    
    // 'value' attribute on TextInput (id=YearLicensed_Input) at BADriversDV.pcf: line 66, column 40
    function value_30 () : java.lang.Integer {
      return thisDriver.YearLicensed
    }
    
    // 'value' attribute on DateInput (id=HireDate_Input) at BADriversDV.pcf: line 71, column 38
    function value_34 () : java.util.Date {
      return thisDriver.HireDate
    }
    
    // 'value' attribute on TypeKeyInput (id=Gender_Input) at BADriversDV.pcf: line 27, column 41
    function value_6 () : typekey.GenderType {
      return thisDriver.Gender
    }
    
    property get driverNameAdapter () : gw.lob.ba.CommercialDriverNameAdapter {
      return getVariableValue("driverNameAdapter", 0) as gw.lob.ba.CommercialDriverNameAdapter
    }
    
    property set driverNameAdapter ($arg :  gw.lob.ba.CommercialDriverNameAdapter) {
      setVariableValue("driverNameAdapter", 0, $arg)
    }
    
    property get thisDriver () : CommercialDriver {
      return getRequireValue("thisDriver", 0) as CommercialDriver
    }
    
    property set thisDriver ($arg :  CommercialDriver) {
      setRequireValue("thisDriver", 0, $arg)
    }
    
    
  }
  
  
}