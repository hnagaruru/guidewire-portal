package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/scriptparameters/ScriptParameterDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ScriptParameterDetailDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/scriptparameters/ScriptParameterDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScriptParameterDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // AltGroupInput (id=GroupValue_Input) at ScriptParameterDetailDV.pcf: line 172, column 56
    function action_114 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // AltGroupInput (id=GroupValue_Input) at ScriptParameterDetailDV.pcf: line 172, column 56
    function action_116 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at ScriptParameterDetailDV.pcf: line 179, column 55
    function action_124 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // AltGroupInput (id=GroupValue_Input) at ScriptParameterDetailDV.pcf: line 172, column 56
    function action_dest_115 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // AltGroupInput (id=GroupValue_Input) at ScriptParameterDetailDV.pcf: line 172, column 56
    function action_dest_117 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at ScriptParameterDetailDV.pcf: line 179, column 55
    function action_dest_125 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'value' attribute on TextInput (id=PositiveintegerValue_Input) at ScriptParameterDetailDV.pcf: line 158, column 66
    function defaultSetter_104 (__VALUE_TO_SET :  java.lang.Object) : void {
      scriptParam.PositiveintegerValue = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=VarcharValue_Input) at ScriptParameterDetailDV.pcf: line 165, column 58
    function defaultSetter_110 (__VALUE_TO_SET :  java.lang.Object) : void {
      scriptParam.VarcharValue = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on AltGroupInput (id=GroupValue_Input) at ScriptParameterDetailDV.pcf: line 172, column 56
    function defaultSetter_120 (__VALUE_TO_SET :  java.lang.Object) : void {
      scriptParam.Group = (__VALUE_TO_SET as entity.Group)
    }
    
    // 'value' attribute on AltUserInput (id=UserValue_Input) at ScriptParameterDetailDV.pcf: line 179, column 55
    function defaultSetter_128 (__VALUE_TO_SET :  java.lang.Object) : void {
      scriptParam.User = (__VALUE_TO_SET as entity.User)
    }
    
    // 'value' attribute on TextInput (id=IntegerValue_Input) at ScriptParameterDetailDV.pcf: line 187, column 58
    function defaultSetter_134 (__VALUE_TO_SET :  java.lang.Object) : void {
      scriptParam.IntegerValue = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on DateInput (id=DatetimeValue_Input) at ScriptParameterDetailDV.pcf: line 41, column 59
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      scriptParam.DatetimeValue = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=DecimalValue_Input) at ScriptParameterDetailDV.pcf: line 48, column 58
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      scriptParam.DecimalValue = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=MoneyValue_Input) at ScriptParameterDetailDV.pcf: line 56, column 56
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      scriptParam.MoneyValue = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextInput (id=NonnegativeintegerValue_Input) at ScriptParameterDetailDV.pcf: line 64, column 69
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      scriptParam.NonnegativeintegerValue = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=NonnegativemoneyValue_Input) at ScriptParameterDetailDV.pcf: line 72, column 67
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      scriptParam.NonnegativemoneyValue = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextInput (id=RiskValue_Input) at ScriptParameterDetailDV.pcf: line 80, column 55
    function defaultSetter_44 (__VALUE_TO_SET :  java.lang.Object) : void {
      scriptParam.RiskValue = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextInput (id=PostalCodeValue_Input) at ScriptParameterDetailDV.pcf: line 87, column 61
    function defaultSetter_50 (__VALUE_TO_SET :  java.lang.Object) : void {
      scriptParam.PostalCodeValue = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=SpeedValue_Input) at ScriptParameterDetailDV.pcf: line 95, column 56
    function defaultSetter_56 (__VALUE_TO_SET :  java.lang.Object) : void {
      scriptParam.SpeedValue = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=PhoneValue_Input) at ScriptParameterDetailDV.pcf: line 102, column 56
    function defaultSetter_62 (__VALUE_TO_SET :  java.lang.Object) : void {
      scriptParam.PhoneValue = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=YearValue_Input) at ScriptParameterDetailDV.pcf: line 110, column 55
    function defaultSetter_68 (__VALUE_TO_SET :  java.lang.Object) : void {
      scriptParam.YearValue = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=PercentageValue_Input) at ScriptParameterDetailDV.pcf: line 118, column 61
    function defaultSetter_74 (__VALUE_TO_SET :  java.lang.Object) : void {
      scriptParam.PercentageValue = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on BooleanRadioInput (id=BitValue_Input) at ScriptParameterDetailDV.pcf: line 34, column 54
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      scriptParam.BitValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=PercentagedecValue_Input) at ScriptParameterDetailDV.pcf: line 126, column 64
    function defaultSetter_80 (__VALUE_TO_SET :  java.lang.Object) : void {
      scriptParam.PercentagedecValue = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextInput (id=MonthlyfrequencyValue_Input) at ScriptParameterDetailDV.pcf: line 134, column 67
    function defaultSetter_86 (__VALUE_TO_SET :  java.lang.Object) : void {
      scriptParam.MonthlyfrequencyValue = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=WeeklyfrequencyValue_Input) at ScriptParameterDetailDV.pcf: line 142, column 66
    function defaultSetter_92 (__VALUE_TO_SET :  java.lang.Object) : void {
      scriptParam.WeeklyfrequencyValue = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=PositivemoneyValue_Input) at ScriptParameterDetailDV.pcf: line 150, column 64
    function defaultSetter_98 (__VALUE_TO_SET :  java.lang.Object) : void {
      scriptParam.PositivemoneyValue = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at ScriptParameterDetailDV.pcf: line 17, column 44
    function valueRoot_1 () : java.lang.Object {
      return scriptParam
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at ScriptParameterDetailDV.pcf: line 17, column 44
    function value_0 () : java.lang.String {
      return scriptParam.ParameterName
    }
    
    // 'value' attribute on TextInput (id=PositiveintegerValue_Input) at ScriptParameterDetailDV.pcf: line 158, column 66
    function value_103 () : java.lang.Integer {
      return scriptParam.PositiveintegerValue
    }
    
    // 'value' attribute on TextInput (id=VarcharValue_Input) at ScriptParameterDetailDV.pcf: line 165, column 58
    function value_109 () : java.lang.String {
      return scriptParam.VarcharValue
    }
    
    // 'value' attribute on AltGroupInput (id=GroupValue_Input) at ScriptParameterDetailDV.pcf: line 172, column 56
    function value_119 () : entity.Group {
      return scriptParam.Group
    }
    
    // 'value' attribute on AltUserInput (id=UserValue_Input) at ScriptParameterDetailDV.pcf: line 179, column 55
    function value_127 () : entity.User {
      return scriptParam.User
    }
    
    // 'value' attribute on DateInput (id=DatetimeValue_Input) at ScriptParameterDetailDV.pcf: line 41, column 59
    function value_13 () : java.util.Date {
      return scriptParam.DatetimeValue
    }
    
    // 'value' attribute on TextInput (id=IntegerValue_Input) at ScriptParameterDetailDV.pcf: line 187, column 58
    function value_133 () : java.lang.Integer {
      return scriptParam.IntegerValue
    }
    
    // 'value' attribute on TextInput (id=DecimalValue_Input) at ScriptParameterDetailDV.pcf: line 48, column 58
    function value_19 () : java.lang.String {
      return scriptParam.DecimalValue
    }
    
    // 'value' attribute on TextInput (id=MoneyValue_Input) at ScriptParameterDetailDV.pcf: line 56, column 56
    function value_25 () : java.math.BigDecimal {
      return scriptParam.MoneyValue
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at ScriptParameterDetailDV.pcf: line 23, column 49
    function value_3 () : typekey.ScriptParameterType {
      return scriptParam.ParameterType
    }
    
    // 'value' attribute on TextInput (id=NonnegativeintegerValue_Input) at ScriptParameterDetailDV.pcf: line 64, column 69
    function value_31 () : java.lang.Integer {
      return scriptParam.NonnegativeintegerValue
    }
    
    // 'value' attribute on TextInput (id=NonnegativemoneyValue_Input) at ScriptParameterDetailDV.pcf: line 72, column 67
    function value_37 () : java.math.BigDecimal {
      return scriptParam.NonnegativemoneyValue
    }
    
    // 'value' attribute on TextInput (id=RiskValue_Input) at ScriptParameterDetailDV.pcf: line 80, column 55
    function value_43 () : java.math.BigDecimal {
      return scriptParam.RiskValue
    }
    
    // 'value' attribute on TextInput (id=PostalCodeValue_Input) at ScriptParameterDetailDV.pcf: line 87, column 61
    function value_49 () : java.lang.String {
      return scriptParam.PostalCodeValue
    }
    
    // 'value' attribute on TextInput (id=SpeedValue_Input) at ScriptParameterDetailDV.pcf: line 95, column 56
    function value_55 () : java.lang.Integer {
      return scriptParam.SpeedValue
    }
    
    // 'value' attribute on TextInput (id=PhoneValue_Input) at ScriptParameterDetailDV.pcf: line 102, column 56
    function value_61 () : java.lang.String {
      return scriptParam.PhoneValue
    }
    
    // 'value' attribute on TextInput (id=YearValue_Input) at ScriptParameterDetailDV.pcf: line 110, column 55
    function value_67 () : java.lang.Integer {
      return scriptParam.YearValue
    }
    
    // 'value' attribute on BooleanRadioInput (id=BitValue_Input) at ScriptParameterDetailDV.pcf: line 34, column 54
    function value_7 () : java.lang.Boolean {
      return scriptParam.BitValue
    }
    
    // 'value' attribute on TextInput (id=PercentageValue_Input) at ScriptParameterDetailDV.pcf: line 118, column 61
    function value_73 () : java.lang.Integer {
      return scriptParam.PercentageValue
    }
    
    // 'value' attribute on TextInput (id=PercentagedecValue_Input) at ScriptParameterDetailDV.pcf: line 126, column 64
    function value_79 () : java.math.BigDecimal {
      return scriptParam.PercentagedecValue
    }
    
    // 'value' attribute on TextInput (id=MonthlyfrequencyValue_Input) at ScriptParameterDetailDV.pcf: line 134, column 67
    function value_85 () : java.lang.Integer {
      return scriptParam.MonthlyfrequencyValue
    }
    
    // 'value' attribute on TextInput (id=WeeklyfrequencyValue_Input) at ScriptParameterDetailDV.pcf: line 142, column 66
    function value_91 () : java.lang.Integer {
      return scriptParam.WeeklyfrequencyValue
    }
    
    // 'value' attribute on TextInput (id=PositivemoneyValue_Input) at ScriptParameterDetailDV.pcf: line 150, column 64
    function value_97 () : java.math.BigDecimal {
      return scriptParam.PositivemoneyValue
    }
    
    // 'visible' attribute on TextInput (id=PositiveintegerValue_Input) at ScriptParameterDetailDV.pcf: line 158, column 66
    function visible_102 () : java.lang.Boolean {
      return scriptParam.ParameterType==TC_POSITIVEINTEGER
    }
    
    // 'visible' attribute on TextInput (id=VarcharValue_Input) at ScriptParameterDetailDV.pcf: line 165, column 58
    function visible_108 () : java.lang.Boolean {
      return scriptParam.ParameterType==TC_VARCHAR
    }
    
    // 'visible' attribute on AltGroupInput (id=GroupValue_Input) at ScriptParameterDetailDV.pcf: line 172, column 56
    function visible_118 () : java.lang.Boolean {
      return scriptParam.ParameterType==TC_GROUP
    }
    
    // 'visible' attribute on DateInput (id=DatetimeValue_Input) at ScriptParameterDetailDV.pcf: line 41, column 59
    function visible_12 () : java.lang.Boolean {
      return scriptParam.ParameterType==TC_DATETIME
    }
    
    // 'visible' attribute on AltUserInput (id=UserValue_Input) at ScriptParameterDetailDV.pcf: line 179, column 55
    function visible_126 () : java.lang.Boolean {
      return scriptParam.ParameterType==TC_USER
    }
    
    // 'visible' attribute on TextInput (id=IntegerValue_Input) at ScriptParameterDetailDV.pcf: line 187, column 58
    function visible_132 () : java.lang.Boolean {
      return scriptParam.ParameterType==TC_INTEGER
    }
    
    // 'visible' attribute on TextInput (id=DecimalValue_Input) at ScriptParameterDetailDV.pcf: line 48, column 58
    function visible_18 () : java.lang.Boolean {
      return scriptParam.ParameterType==TC_DECIMAL
    }
    
    // 'visible' attribute on TextInput (id=MoneyValue_Input) at ScriptParameterDetailDV.pcf: line 56, column 56
    function visible_24 () : java.lang.Boolean {
      return scriptParam.ParameterType==TC_MONEY
    }
    
    // 'visible' attribute on TextInput (id=NonnegativeintegerValue_Input) at ScriptParameterDetailDV.pcf: line 64, column 69
    function visible_30 () : java.lang.Boolean {
      return scriptParam.ParameterType==TC_NONNEGATIVEINTEGER
    }
    
    // 'visible' attribute on TextInput (id=NonnegativemoneyValue_Input) at ScriptParameterDetailDV.pcf: line 72, column 67
    function visible_36 () : java.lang.Boolean {
      return scriptParam.ParameterType==TC_NONNEGATIVEMONEY
    }
    
    // 'visible' attribute on TextInput (id=RiskValue_Input) at ScriptParameterDetailDV.pcf: line 80, column 55
    function visible_42 () : java.lang.Boolean {
      return scriptParam.ParameterType==TC_RISK
    }
    
    // 'visible' attribute on TextInput (id=PostalCodeValue_Input) at ScriptParameterDetailDV.pcf: line 87, column 61
    function visible_48 () : java.lang.Boolean {
      return scriptParam.ParameterType==TC_POSTALCODE
    }
    
    // 'visible' attribute on TextInput (id=SpeedValue_Input) at ScriptParameterDetailDV.pcf: line 95, column 56
    function visible_54 () : java.lang.Boolean {
      return scriptParam.ParameterType==TC_SPEED
    }
    
    // 'visible' attribute on BooleanRadioInput (id=BitValue_Input) at ScriptParameterDetailDV.pcf: line 34, column 54
    function visible_6 () : java.lang.Boolean {
      return scriptParam.ParameterType==TC_BIT
    }
    
    // 'visible' attribute on TextInput (id=PhoneValue_Input) at ScriptParameterDetailDV.pcf: line 102, column 56
    function visible_60 () : java.lang.Boolean {
      return scriptParam.ParameterType==TC_PHONE
    }
    
    // 'visible' attribute on TextInput (id=YearValue_Input) at ScriptParameterDetailDV.pcf: line 110, column 55
    function visible_66 () : java.lang.Boolean {
      return scriptParam.ParameterType==TC_YEAR
    }
    
    // 'visible' attribute on TextInput (id=PercentageValue_Input) at ScriptParameterDetailDV.pcf: line 118, column 61
    function visible_72 () : java.lang.Boolean {
      return scriptParam.ParameterType==TC_PERCENTAGE
    }
    
    // 'visible' attribute on TextInput (id=PercentagedecValue_Input) at ScriptParameterDetailDV.pcf: line 126, column 64
    function visible_78 () : java.lang.Boolean {
      return scriptParam.ParameterType==TC_PERCENTAGEDEC
    }
    
    // 'visible' attribute on TextInput (id=MonthlyfrequencyValue_Input) at ScriptParameterDetailDV.pcf: line 134, column 67
    function visible_84 () : java.lang.Boolean {
      return scriptParam.ParameterType==TC_MONTHLYFREQUENCY
    }
    
    // 'visible' attribute on TextInput (id=WeeklyfrequencyValue_Input) at ScriptParameterDetailDV.pcf: line 142, column 66
    function visible_90 () : java.lang.Boolean {
      return scriptParam.ParameterType==TC_WEEKLYFREQUENCY
    }
    
    // 'visible' attribute on TextInput (id=PositivemoneyValue_Input) at ScriptParameterDetailDV.pcf: line 150, column 64
    function visible_96 () : java.lang.Boolean {
      return scriptParam.ParameterType==TC_POSITIVEMONEY
    }
    
    property get scriptParam () : ScriptParameter {
      return getRequireValue("scriptParam", 0) as ScriptParameter
    }
    
    property set scriptParam ($arg :  ScriptParameter) {
      setRequireValue("scriptParam", 0, $arg)
    }
    
    
  }
  
  
}