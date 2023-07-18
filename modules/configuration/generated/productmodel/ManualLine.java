package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/ManualLine/ManualLine.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ManualLine extends entity.APDManualPolicyLine {
  protected ManualLine()  {
    super((java.lang.Void)null);
  }
  
  public ManualLine(entity.PolicyPeriod branch)  {
    super(branch, "ManualLine");
  }
  
  public ManualLine(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ManualLine");
  }
  
  static {
    com.guidewire._generated.productmodel.ManualLineInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ManualLine>() {
      public productmodel.ManualLine newEmptyInstance() {
        return new productmodel.ManualLine();
      }
      
      
    });
  }
}