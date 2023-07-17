package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/inbound/NewInboundS3ConfigPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewInboundS3ConfigPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/inbound/NewInboundS3ConfigPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewInboundS3ConfigPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'value' attribute on TextInput (id=ConfigArchiveDir_Input) at NewInboundS3ConfigPopup.pcf: line 44, column 54
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      inboundFileConfig.InputS3Bucket = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=InputS3Prefix_Input) at NewInboundS3ConfigPopup.pcf: line 49, column 54
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      inboundFileConfig.InputS3Prefix = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=ArchiveS3Bucket_Input) at NewInboundS3ConfigPopup.pcf: line 55, column 56
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      inboundFileConfig.ArchiveS3Bucket = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=ArchiveS3Prefix_Input) at NewInboundS3ConfigPopup.pcf: line 60, column 56
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      inboundFileConfig.ArchiveS3Prefix = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=ConfigChunkSize_Input) at NewInboundS3ConfigPopup.pcf: line 67, column 44
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      inboundFileConfig.ChunkSize = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=ConfigName_Input) at NewInboundS3ConfigPopup.pcf: line 32, column 45
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      inboundFileConfig.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=HandlerClass_Input) at NewInboundS3ConfigPopup.pcf: line 75, column 57
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      inboundFileConfig.FileHandlerClass = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=DaysTilPurge_Input) at NewInboundS3ConfigPopup.pcf: line 82, column 44
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      inboundFileConfig.DaysTillPurge = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=InputS3UserProfile_Input) at NewInboundS3ConfigPopup.pcf: line 38, column 52
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      inboundFileConfig.ProfileName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at NewInboundS3ConfigPopup.pcf: line 15, column 42
    function initialValue_0 () : entity.InboundS3FileConfig {
      return new InboundS3FileConfig()
    }
    
    // EditButtons at NewInboundS3ConfigPopup.pcf: line 20, column 23
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'validationExpression' attribute on TextInput (id=HandlerClass_Input) at NewInboundS3ConfigPopup.pcf: line 75, column 57
    function validationExpression_30 () : java.lang.Object {
      return gw.inboundfile.InboundFileUtils.validateFileHandlerClass(inboundFileConfig.FileHandlerClass)
    }
    
    // 'value' attribute on TextInput (id=ConfigName_Input) at NewInboundS3ConfigPopup.pcf: line 32, column 45
    function valueRoot_4 () : java.lang.Object {
      return inboundFileConfig
    }
    
    // 'value' attribute on TextInput (id=ConfigArchiveDir_Input) at NewInboundS3ConfigPopup.pcf: line 44, column 54
    function value_10 () : java.lang.String {
      return inboundFileConfig.InputS3Bucket
    }
    
    // 'value' attribute on TextInput (id=InputS3Prefix_Input) at NewInboundS3ConfigPopup.pcf: line 49, column 54
    function value_14 () : java.lang.String {
      return inboundFileConfig.InputS3Prefix
    }
    
    // 'value' attribute on TextInput (id=ArchiveS3Bucket_Input) at NewInboundS3ConfigPopup.pcf: line 55, column 56
    function value_18 () : java.lang.String {
      return inboundFileConfig.ArchiveS3Bucket
    }
    
    // 'value' attribute on TextInput (id=ConfigName_Input) at NewInboundS3ConfigPopup.pcf: line 32, column 45
    function value_2 () : java.lang.String {
      return inboundFileConfig.Name
    }
    
    // 'value' attribute on TextInput (id=ArchiveS3Prefix_Input) at NewInboundS3ConfigPopup.pcf: line 60, column 56
    function value_22 () : java.lang.String {
      return inboundFileConfig.ArchiveS3Prefix
    }
    
    // 'value' attribute on TextInput (id=ConfigChunkSize_Input) at NewInboundS3ConfigPopup.pcf: line 67, column 44
    function value_26 () : java.lang.Integer {
      return inboundFileConfig.ChunkSize
    }
    
    // 'value' attribute on TextInput (id=HandlerClass_Input) at NewInboundS3ConfigPopup.pcf: line 75, column 57
    function value_31 () : java.lang.String {
      return inboundFileConfig.FileHandlerClass
    }
    
    // 'value' attribute on TextInput (id=DaysTilPurge_Input) at NewInboundS3ConfigPopup.pcf: line 82, column 44
    function value_36 () : java.lang.Integer {
      return inboundFileConfig.DaysTillPurge
    }
    
    // 'value' attribute on TextInput (id=InputS3UserProfile_Input) at NewInboundS3ConfigPopup.pcf: line 38, column 52
    function value_6 () : java.lang.String {
      return inboundFileConfig.ProfileName
    }
    
    override property get CurrentLocation () : pcf.NewInboundS3ConfigPopup {
      return super.CurrentLocation as pcf.NewInboundS3ConfigPopup
    }
    
    property get inboundFileConfig () : entity.InboundS3FileConfig {
      return getVariableValue("inboundFileConfig", 0) as entity.InboundS3FileConfig
    }
    
    property set inboundFileConfig ($arg :  entity.InboundS3FileConfig) {
      setVariableValue("inboundFileConfig", 0, $arg)
    }
    
    
  }
  
  
}