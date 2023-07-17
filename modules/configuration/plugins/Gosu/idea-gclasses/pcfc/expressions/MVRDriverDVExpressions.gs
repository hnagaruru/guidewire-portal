package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/pa/policy/MVRDriverDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MVRDriverDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/MVRDriverDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MVRDriverDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at MVRDriverDV.pcf: line 15, column 58
    function def_onEnter_0 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.onEnter(new gw.lob.pa.mvr.MVRDriverNameOwner(new gw.lob.pa.mvr.MVRDriverNameAdapter(mvrDriver)))
    }
    
    // 'def' attribute on InputSetRef at MVRDriverDV.pcf: line 15, column 58
    function def_onEnter_2 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.onEnter(new gw.lob.pa.mvr.MVRDriverNameOwner(new gw.lob.pa.mvr.MVRDriverNameAdapter(mvrDriver)))
    }
    
    // 'def' attribute on InputSetRef at MVRDriverDV.pcf: line 15, column 58
    function def_refreshVariables_1 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.refreshVariables(new gw.lob.pa.mvr.MVRDriverNameOwner(new gw.lob.pa.mvr.MVRDriverNameAdapter(mvrDriver)))
    }
    
    // 'def' attribute on InputSetRef at MVRDriverDV.pcf: line 15, column 58
    function def_refreshVariables_3 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.refreshVariables(new gw.lob.pa.mvr.MVRDriverNameOwner(new gw.lob.pa.mvr.MVRDriverNameAdapter(mvrDriver)))
    }
    
    // 'mode' attribute on InputSetRef at MVRDriverDV.pcf: line 15, column 58
    function mode_4 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'value' attribute on TextInput (id=SSN_Input) at MVRDriverDV.pcf: line 19, column 34
    function valueRoot_6 () : java.lang.Object {
      return mvrDriver
    }
    
    // 'value' attribute on TypeKeyInput (id=Gender_Input) at MVRDriverDV.pcf: line 28, column 43
    function value_11 () : typekey.GenderType {
      return mvrDriver.Gender
    }
    
    // 'value' attribute on TextInput (id=Address_Input) at MVRDriverDV.pcf: line 32, column 38
    function value_14 () : java.lang.String {
      return mvrDriver.Address
    }
    
    // 'value' attribute on TextInput (id=Height_Input) at MVRDriverDV.pcf: line 40, column 37
    function value_17 () : java.lang.String {
      return mvrDriver.Height
    }
    
    // 'value' attribute on TextInput (id=Weight_Input) at MVRDriverDV.pcf: line 44, column 37
    function value_20 () : java.lang.String {
      return mvrDriver.Weight
    }
    
    // 'value' attribute on TextInput (id=Eyes_Input) at MVRDriverDV.pcf: line 48, column 35
    function value_23 () : java.lang.String {
      return mvrDriver.Eyes
    }
    
    // 'value' attribute on TextInput (id=Hair_Input) at MVRDriverDV.pcf: line 52, column 35
    function value_26 () : java.lang.String {
      return mvrDriver.Hair
    }
    
    // 'value' attribute on TextInput (id=Race_Input) at MVRDriverDV.pcf: line 56, column 35
    function value_29 () : java.lang.String {
      return mvrDriver.Race
    }
    
    // 'value' attribute on BooleanRadioInput (id=Donor_Input) at MVRDriverDV.pcf: line 60, column 36
    function value_32 () : java.lang.Boolean {
      return mvrDriver.Donor
    }
    
    // 'value' attribute on TextInput (id=SSN_Input) at MVRDriverDV.pcf: line 19, column 34
    function value_5 () : java.lang.String {
      return mvrDriver.SSN
    }
    
    // 'value' attribute on DateInput (id=DOB_Input) at MVRDriverDV.pcf: line 23, column 42
    function value_8 () : java.util.Date {
      return mvrDriver.DateOfBirth
    }
    
    property get mvrDriver () : gw.api.motorvehiclerecord.IMVRData {
      return getRequireValue("mvrDriver", 0) as gw.api.motorvehiclerecord.IMVRData
    }
    
    property set mvrDriver ($arg :  gw.api.motorvehiclerecord.IMVRData) {
      setRequireValue("mvrDriver", 0, $arg)
    }
    
    
  }
  
  
}